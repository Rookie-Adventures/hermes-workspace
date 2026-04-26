# syntax=docker/dockerfile:1.6
# Hermes Workspace — Ultimate Robust Production Image
FROM node:22-bookworm AS build
RUN corepack enable && apt-get update && apt-get install -y --no-install-recommends ca-certificates && rm -rf /var/lib/apt/lists/*
WORKDIR /app

# Install all dependencies
COPY package.json pnpm-lock.yaml ./
RUN pnpm install

# Build the project
COPY . .
ENV NODE_ENV=production
ENV NODE_OPTIONS="--max-old-space-size=4096"
RUN pnpm build

# ─── runtime stage ────────────────────────────────────────────────────────
FROM node:22-slim
RUN apt-get update && apt-get install -y --no-install-recommends \
      ca-certificates curl tini \
    && rm -rf /var/lib/apt/lists/* \
    && groupadd -r workspace && useradd -r -g workspace -u 10010 workspace

WORKDIR /app

# Copy ALL potential build artefacts + server entry
COPY --from=build --chown=workspace:workspace /app/.output ./.output
# Try copying dist if it exists (for legacy/custom builds)
COPY --from=build --chown=workspace:workspace /app/dist ./dist 2>/dev/null || :
COPY --from=build --chown=workspace:workspace /app/node_modules ./node_modules
COPY --from=build --chown=workspace:workspace /app/package.json ./package.json
COPY --from=build --chown=workspace:workspace /app/public ./public
COPY --from=build --chown=workspace:workspace /app/skills ./skills
COPY --from=build --chown=workspace:workspace /app/server-entry.js ./server-entry.js

USER workspace
ENV NODE_ENV=production \
    PORT=3000 \
    HOST=0.0.0.0 \
    REFRESHED_AT=2026-04-26T23:55:00Z \
    HERMES_API_URL=http://hermes-agent:8642

EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=5s --start-period=20s --retries=3 \
  CMD curl -fsS http://127.0.0.1:3000/api/healthcheck || exit 1

ENTRYPOINT ["/usr/bin/tini", "--"]
# Use our smart entry point that auto-detects paths
CMD ["node", "--max-old-space-size=2048", "server-entry.js"]
