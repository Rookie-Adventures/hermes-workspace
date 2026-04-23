#!/bin/bash
# ============================================================
# Hermes 全量重新部署脚本（磁盘损坏后从头搭建）
# 
# 用法: 在新服务器上以 root 或 sudo 权限执行
#   chmod +x redeploy.sh
#   sudo ./redeploy.sh
#
# 前提: 你已经有 GCP 新实例，能 SSH 登录进去
# ============================================================

set -e

echo "========================================"
echo "  Hermes 重新部署脚本"
echo "========================================"

# ---- 0. 创建工作目录 ----
WORKDIR="$HOME/hermes-workspace"
mkdir -p "$WORKDIR/server-deploy"
cd "$WORKDIR"

# ---- 1. 安装 Docker ----
echo ""
echo ">>> [1/7] 安装 Docker..."
if command -v docker &>/dev/null; then
    echo "Docker 已安装，跳过"
else
    curl -fsSL https://get.docker.com | sh
    systemctl enable docker
    systemctl start docker
    echo "Docker 安装完成"
fi

# ---- 2. 安装 docker-compose v1 (服务器用的是 v1.29.2 格式) ----
echo ""
echo ">>> [2/7] 安装 docker-compose..."
if command -v docker-compose &>/dev/null; then
    echo "docker-compose 已安装，跳过"
else
    curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" \
        -o /usr/local/bin/docker-compose
    chmod +x /usr/local/bin/docker-compose
    echo "docker-compose v$(docker-compose --version) 安装完成"
fi

# ---- 3. 创建数据目录并设置权限 ----
echo ""
echo ">>> [3/7] 创建数据目录..."
mkdir -p /var/hermes-workspace-home
# workspace 容器以 uid=10010 运行
chown 10010:999 /var/hermes-workspace-home
echo "数据目录 /var/hermes-workspace-home 已创建 (owner: 10010:999)"

# ---- 4. 创建 .env 文件 ----
echo ""
echo ">>> [4/7] 创建 .env 配置文件..."
cat > "$WORKDIR/.env" << 'ENVEOF'
# ============================================
# Hermes .env 配置
# ============================================

# --- API 认证 ---
# Gateway 的访问密钥，workspace 也需要用这个值做 HERMES_API_TOKEN
API_SERVER_KEY=hermes-server-secret-2026

# --- LLM Provider Key (填入你自己的) ---
# 至少填一个，根据你实际使用的模型服务来
ANTHROPIC_API_KEY=
OPENAI_API_KEY=
OPENROUTER_API_KEY=
GOOGLE_API_KEY=
GROQ_API_KEY=
MISTRAL_API_KEY=

# --- Workspace 访问密码 ---
AUTH_PASSWORD=munr2026

# --- Gateway 监听配置 ---
API_SERVER_HOST=0.0.0.0
API_SERVER_ENABLED=true
GATEWAY_ALLOW_ALL_USERS=true
ENVEOF

echo ".env 文件已创建在 $WORKDIR/.env"
echo ""
echo "!!! 重要 !!!"
echo "请编辑 $WORKDIR/.env，填入你的 LLM Provider API Key"
echo "编辑完后按回车继续部署..."
read -r

# ---- 5. 创建 server-deploy/docker-compose.yml ----
echo ""
echo ">>> [5/7] 创建 docker-compose.yml..."
cat > "$WORKDIR/server-deploy/docker-compose.yml" << 'EOF'
# Project Workspace + Agent — Docker Compose Setup (Production)
#
# All images pulled from registries (no local build needed on server)

services:
  # The Hermes AI Agent Gateway
  hermes-agent:
    image: nousresearch/hermes-agent:latest
    command: gateway run
    restart: unless-stopped
    env_file:
      - ../.env
    environment:
      API_SERVER_HOST: ${API_SERVER_HOST:-0.0.0.0}
      API_SERVER_ENABLED: 'true'
    volumes:
      - hermes-data:/opt/data
    healthcheck:
      test: ['CMD-SHELL', 'python3 -c "import urllib.request; urllib.request.urlopen(\"http://localhost:8642/health\")" || exit 1']
      interval: 10s
      timeout: 5s
      retries: 5
      start_period: 15s
    ports:
      - '8642:8642'

  # Hermes Dashboard (enhanced APIs: sessions, config, skills, jobs)
  hermes-dashboard:
    image: nousresearch/hermes-agent:latest
    command: dashboard --host 0.0.0.0 --insecure
    restart: unless-stopped
    env_file:
      - ../.env
    environment:
      API_SERVER_KEY: ''
    volumes:
      - hermes-data:/opt/data
    healthcheck:
      test: ['CMD-SHELL', 'python3 -c "import urllib.request; urllib.request.urlopen(\"http://localhost:9119/api/status\")" || exit 1']
      interval: 10s
      timeout: 5s
      retries: 5
      start_period: 15s
    ports:
      - '9119:9119'

  # The Project Workspace Web UI (custom Chinese localized build)
  hermes-workspace:
    image: subbb/hermes-workspace-cn:latest
    restart: unless-stopped
    depends_on:
      hermes-agent:
        condition: service_healthy
    env_file:
      - ../.env
    environment:
      HERMES_API_URL: http://hermes-agent:8642
      HERMES_DASHBOARD_URL: http://hermes-dashboard:9119
      AUTH_PASSWORD: ${AUTH_PASSWORD:-munr2026}
    volumes:
      - /var/hermes-workspace-home:/home/workspace
    ports:
      - '3000:3000'

volumes:
  hermes-data:
EOF

echo "docker-compose.yml 已创建"

# ---- 6. 拉取镜像 ----
echo ""
echo ">>> [6/7] 拉取 Docker 镜像..."
cd "$WORKDIR/server-deploy"
docker-compose pull
echo "镜像拉取完成"

# ---- 7. 启动服务 ----
echo ""
echo ">>> [7/7] 启动服务..."
docker-compose up -d

# ---- 8. 验证 ----
echo ""
echo "========================================"
echo "  等待服务启动..."
echo "========================================"
sleep 15

echo ""
echo "--- 容器状态 ---"
docker-compose ps

echo ""
echo "--- Agent 健康检查 ---"
curl -s http://localhost:8642/health || echo "Agent 未就绪，等待中..."

echo ""
echo "--- Dashboard 状态检查 ---"
curl -s http://localhost:9119/api/status || echo "Dashboard 未就绪，等待中..."

echo ""
echo "--- Workspace 检查 ---"
curl -s -o /dev/null -w "HTTP Status: %{http_code}" http://localhost:3000 || echo "Workspace 未就绪"

echo ""
echo "========================================"
echo "  部署完成！"
echo "========================================"
echo ""
echo "  Workspace:  http://$(curl -s ifconfig.me 2>/dev/null || echo '<服务器IP>'):3000"
echo "  Agent API:  http://$(curl -s ifconfig.me 2>/dev/null || echo '<服务器IP>'):8642"
echo "  Dashboard:  http://$(curl -s ifconfig.me 2>/dev/null || echo '<服务器IP>'):9119"
echo ""
echo "  如需查看日志: cd $WORKDIR/server-deploy && docker-compose logs -f"
echo "  如需重启服务: cd $WORKDIR/server-deploy && docker-compose restart"
echo ""
echo "  注意: 如果需要配置 Nginx 反代和域名 SSL，请参考 server-deploy/chat.neurathm.com.conf"
echo "========================================"
