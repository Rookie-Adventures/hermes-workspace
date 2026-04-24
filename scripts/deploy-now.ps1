# 一键构建、推送镜像并更新服务器服务 (Windows PowerShell 版)

$IMAGE_NAME="subbb/hermes-workspace-cn:latest"
$SERVER_IP="34.70.104.243"
$SSH_USER="zhuyizhi84"
$SSH_KEY="C:\Users\USER\.ssh\id_ed25519_server"

Write-Host " 1. 正在本地构建 Docker 镜像: $IMAGE_NAME..." -ForegroundColor Cyan
docker build -t $IMAGE_NAME -f Dockerfile.workspace .

if ($LASTEXITCODE -ne 0) {
    Write-Host " 构建失败，请检查 Docker Desktop 是否正在运行。" -ForegroundColor Red
    exit
}

Write-Host " 2. 正在推送镜像到 Docker Hub..." -ForegroundColor Cyan
docker push $IMAGE_NAME

if ($LASTEXITCODE -ne 0) {
    Write-Host " 推送失败，请确保已执行 docker login。" -ForegroundColor Red
    exit
}

Write-Host " 3. 正在远程更新服务器服务..." -ForegroundColor Cyan
ssh -i $SSH_KEY "$SSH_USER@$SERVER_IP" "cd ~/hermes-workspace/server-deploy && docker compose pull && docker compose up -d"

Write-Host " 部署完成！访问 http://chat.neurathm.com 检查更新。" -ForegroundColor Green
