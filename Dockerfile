# syntax=docker/dockerfile:1.6
FROM node:22-bookworm AS build
RUN corepack enable && apt-get update && apt-get install -y --no-install-recommends ca-certificates && rm -rf /var/lib/apt/lists/*
WORKDIR /app

# 1. Install deps
COPY package.json pnpm-lock.yaml ./
RUN pnpm install

# 2. Build and FIND the output
COPY . .
ENV NODE_ENV=production
RUN pnpm build
RUN echo "--- LOCATING INDEX FILES ---" && find . -maxdepth 5 -name "index.*js"

# ─── Final Stage ───
FROM node:22-slim
RUN apt-get update && apt-get install -y --no-install-recommends \
      ca-certificates curl tini \
    && rm -rf /var/lib/apt/lists/* \
    && groupadd -r workspace && useradd -r -g workspace -u 10010 workspace

WORKDIR /app

# Copy EVERYTHING from .output and .vinxi to be safe
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
