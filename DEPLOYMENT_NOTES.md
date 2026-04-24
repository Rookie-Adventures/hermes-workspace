# Hermes Workspace 部署与故障排查笔记

## 部署环境 (New Server)
- **服务器**: Google Cloud (`ag`)
- **公网 IP**: `34.70.104.243`
- **域名**: `chat.neurathm.com` (Cloudflare Proxied)
- **SSL**: Cloudflare 端处理 (Flexible 模式)
- **Docker**: Engine v29.4.1, Compose v5.1.3
- **Nginx**: 已安装，作为反向代理监听 80 端口，转发至容器 3000 端口。

## 架构：4 层结构
1. **入口 (Cloudflare)**: 处理域名解析和基础 SSL。
2. **Web 转发 (Nginx)**: 宿主机监听 80，`proxy_pass` 到 `127.0.0.1:3000`。
3. **前端 (Workspace)**: `subbb/hermes-workspace-cn:latest` 容器运行在 3000 端口。
4. **后端 (Agent/Dashboard)**: 运行在 8642/9119 端口，通过 Docker 内部网络与前端通信。

## 关键配置路径
- **Nginx 配置**: `/etc/nginx/sites-available/chat.neurathm.com.conf`
- **Docker 部署**: `~/hermes-workspace/server-deploy/docker-compose.yml`
- **环境变量**: `~/hermes-workspace/.env`

## 镜像更新机制
- **Source**: 本地修改需 `git push origin main`。
- **Build**: GitHub Actions (`docker-hub-cn.yml`) 自动构建并推送到 `subbb/hermes-workspace-cn:latest`。
- **Deploy**: 服务器需执行 `docker compose pull && docker compose up -d` 刷新镜像。

## 核心经验总结 (Troubleshooting Reference)

### 1. 启动命令
- **Agent**: 必须使用 `command: gateway run`。避免使用 `-T` 以防 CLI 直接退出。
- **Dashboard**: 必须添加 `--insecure` 标志以允许绑定 `0.0.0.0`：`command: dashboard --host 0.0.0.0 --insecure`。

### 2. 环境变量与加载
- **API Key 覆盖问题**: 在某些 Docker Compose 版本中，`environment` 中的 `${VAR:-}` 可能会覆盖 `env_file`。建议在 `environment` 中移除重复的 API Key 声明。
- **必要变量**: `.env` 必须包含 `API_SERVER_KEY`，且 `HERMES_API_TOKEN` 应与其保持一致。

### 3. 健康检查
- **Python 替代方案**: 由于容器内可能缺少 `curl/wget`，使用 python3 进行探测：
  `python3 -c "import urllib.request; urllib.request.urlopen(\"http://localhost:8642/health\")"`

### 4. 前后端联通 (Enhanced APIs)
- **Dashboard 必要性**: 前端的 Enhanced APIs（会话、技能、内存等）依赖 Dashboard 服务 (Port 9119)。
- **配置**: Workspace 必须设置 `HERMES_DASHBOARD_URL=http://hermes-dashboard:9119`。

### 5. Workspace 运行模式
- **server-entry.js**: 预构建镜像可能不监听 HTTP，必要时需挂载本地 `server-entry.js` 并覆盖 CMD。

### 6. 文件系统权限 (UID 10010)
- **权限冲突**: 容器以 `uid=10010` 运行。
- **解决**: 宿主机目录需执行 `chown 10010:999`。

## 当前部署状态检查单 (Action List)
- [ ] 容器存活检查 (`docker ps`)
- [ ] 日志错误排查 (`docker logs`)
- [ ] 权限验证 (`ls -ld /var/hermes-workspace-home`)
- [ ] API 联通性测试 (Gateway & Dashboard)
