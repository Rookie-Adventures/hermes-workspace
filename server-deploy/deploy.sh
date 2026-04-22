#!/bin/bash
# Deploy hermes-workspace to server

set -e

echo "=== Deploying hermes-workspace ==="

# Pull latest code
git pull origin main

# Build and start containers
docker compose build hermes-workspace
docker compose up -d hermes-workspace

# Check status
docker compose ps

echo "=== Deployed! ==="
echo "Workspace: http://$(curl -s ifconfig.me):3000"
echo "Agent API: http://$(curl -s ifconfig.me):8642"
