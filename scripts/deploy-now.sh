#!/bin/bash
# 一键构建、推送镜像并更新服务器服务

# 配置
IMAGE_NAME="subbb/hermes-workspace-cn:latest"
SERVER_IP="34.70.104.243"
SSH_USER="zhuyizhi84"
SSH_KEY="C:\Users\USER\.ssh\id_ed25519_server"

echo " 1. 正在本地构建 Docker 镜像: $IMAGE_NAME..."
docker build -t $IMAGE_NAME -f Dockerfile.workspace .

if [ $? -ne 0 ]; then
    echo "鉁 构建失败，请检查 Docker 是否正在运行。"
    exit 1
fi

echo " 2. 正在推送镜像到 Docker Hub..."
docker push $IMAGE_NAME

if [ $? -ne 0 ]; then
    echo "鉁 推送失败，请检查是否已执行 docker login。"
    exit 1
fi

echo " 3. 正在远程更新服务器服务..."
ssh -i "$SSH_KEY" "$SSH_USER@$SERVER_IP" "cd ~/hermes-workspace/server-deploy && docker compose pull && docker compose up -d"

echo "鈺 部署完成！访问 http://chat.neurathm.com 检查更新。"
