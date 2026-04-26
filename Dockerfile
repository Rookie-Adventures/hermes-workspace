# syntax=docker/dockerfile:1.6
# Hermes Workspace — Robust Production Image
FROM node:22-bookworm AS build
RUN corepack enable && apt-get update && apt-get install -y --no-install-recommends ca-certificates && rm -rf /var/lib/apt/lists/*
WORKDIR /app

# Install all dependencies
COPY package.json pnpm-lock.yaml ./
RUN pnpm install

# Build the project with production flag
COPY . .
ENV NODE_ENV=production
ENV NODE_OPTIONS="--max-old-space-size=4096"
RUN pnpm build

# --- DIAGNOSTIC: List output to ensure it exists ---
RUN ls -la .output/server/index.mjs && echo "Found output!" || (ls -R .output && exit 1)

# ─── runtime stage ────────────────────────────────────────────────────────
FROM node:22-slim
RUN apt-get update && apt-get install -y --no-install-recommends \
      ca-certificates curl tini \
    && rm -rf /var/lib/apt/lists/* \
    && groupadd -r workspace && useradd -r -g workspace -u 10010 workspace

WORKDIR /app

# Copy ALL built artefacts
# TanStack Start needs the entire .output directory
COPY --from=build --chown=workspace:workspace /app/.output ./.output
COPY --from=build --chown=workspace:workspace /app/node_modules ./node_modules
COPY --from=build --chown=workspace:workspace /app/package.json ./package.json
COPY --from=build --chown=workspace:workspace /app/public ./public
COPY --from=build --chown=workspace:workspace /app/skills ./skills

USER workspace
ENV NODE_ENV=production \
    PORT=3000 \
    HOST=0.0.0.0 \
    HERMES_API_URL=http://hermes-agent:8642

EXPOSE 3000

# Use tini for signal handling
ENTRYPOINT ["/usr/bin/tini", "--"]

# Start using the standard output path
CMD ["node", "--max-old-space-size=2048", ".output/server/index.mjs"]
