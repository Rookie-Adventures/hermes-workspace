# syntax=docker/dockerfile:1.6
FROM node:22-bookworm AS build
# Step 0: Base setup and tools
RUN corepack enable && apt-get update && apt-get install -y --no-install-recommends \
    python3 make g++ ca-certificates libc6-dev \
    && rm -rf /var/lib/apt/lists/*
WORKDIR /app

# Step 1: Install dependencies
COPY package.json pnpm-lock.yaml* ./
RUN pnpm install --no-frozen-lockfile

# Step 2: Full Build
COPY . .
ENV NODE_ENV=production
RUN pnpm build

# ─── Final Stage ───
FROM node:22-slim
RUN apt-get update && apt-get install -y --no-install-recommends \
      ca-certificates curl tini python3 \
    && rm -rf /var/lib/apt/lists/* \
    && groupadd -r workspace && useradd -r -g workspace -u 10010 workspace

WORKDIR /app

# Copy build artefacts + runtime deps
COPY --from=build --chown=workspace:workspace /app/dist ./dist
COPY --from=build --chown=workspace:workspace /app/node_modules ./node_modules
COPY --from=build --chown=workspace:workspace /app/package.json ./package.json
COPY --from=build --chown=workspace:workspace /app/server-entry.js ./server-entry.js
COPY --from=build --chown=workspace:workspace /app/skills ./skills

USER workspace
ENV NODE_ENV=production \
    PORT=3000 \
    HOST=0.0.0.0

EXPOSE 3000
ENTRYPOINT ["/usr/bin/tini", "--"]
CMD ["node", "--max-old-space-size=2048", "server-entry.js"]
