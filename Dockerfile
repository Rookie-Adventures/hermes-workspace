# syntax=docker/dockerfile:1.6
FROM node:22-bookworm AS build
# Step 0: Base setup and tools
RUN corepack enable && apt-get update && apt-get install -y --no-install-recommends \
    python3 make g++ ca-certificates libc6-dev \
    && rm -rf /var/lib/apt/lists/*
WORKDIR /app

# Step 1: Install dependencies with cleanup
COPY package.json pnpm-lock.yaml* ./
RUN rm -rf node_modules .output .vinxi && pnpm install --no-frozen-lockfile

# Step 2: Full Build
COPY . .
ENV NODE_ENV=production
ENV NODE_OPTIONS="--max-old-space-size=4096"
# Ensure we run build through npx to find binaries
RUN npx vinxi build || (echo "CRITICAL: VINXI BUILD FAILED" && exit 1)

# ─── Final Stage ───
FROM node:22-slim
RUN apt-get update && apt-get install -y --no-install-recommends \
      ca-certificates curl tini \
    && rm -rf /var/lib/apt/lists/* \
    && groupadd -r workspace && useradd -r -g workspace -u 10010 workspace

WORKDIR /app

# Copy minimum runtime assets
COPY --from=build --chown=workspace:workspace /app/.output ./.output
COPY --from=build --chown=workspace:workspace /app/node_modules ./node_modules
COPY --from=build --chown=workspace:workspace /app/package.json ./package.json
COPY --from=build --chown=workspace:workspace /app/public ./public
COPY --from=build --chown=workspace:workspace /app/skills ./skills
COPY --from=build --chown=workspace:workspace /app/entry.js ./entry.js

USER workspace
ENV NODE_ENV=production \
    PORT=3000 \
    HOST=0.0.0.0

EXPOSE 3000
ENTRYPOINT ["/usr/bin/tini", "--"]
CMD ["node", "--max-old-space-size=2048", "entry.js"]
