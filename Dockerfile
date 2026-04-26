# syntax=docker/dockerfile:1.6
# Hermes Workspace — Clean Slate Production Image
FROM node:22-bookworm AS build
RUN corepack enable && apt-get update && apt-get install -y --no-install-recommends ca-certificates && rm -rf /var/lib/apt/lists/*
WORKDIR /app

# Step 1: Install dependencies
COPY package.json pnpm-lock.yaml ./
RUN pnpm install

# Step 2: Build from source
COPY . .
ENV NODE_ENV=production
RUN pnpm build

# Step 3: Hard validation of build artifacts
# This ensures we never push a broken image to the registry
RUN if [ ! -f ".output/server/index.mjs" ]; then \
      echo "------------------------------------------------" && \
      echo "ERROR: TanStack Start build did not produce index.mjs" && \
      echo "Actual .output structure:" && \
      ls -R .output && \
      echo "------------------------------------------------" && \
      exit 1; \
    fi

# ─── Final Stage ───
FROM node:22-slim
RUN apt-get update && apt-get install -y --no-install-recommends \
      ca-certificates curl tini \
    && rm -rf /var/lib/apt/lists/* \
    && groupadd -r workspace && useradd -r -g workspace -u 10010 workspace

WORKDIR /app

# Copy runtime assets only
COPY --from=build --chown=workspace:workspace /app/.output ./.output
COPY --from=build --chown=workspace:workspace /app/node_modules ./node_modules
COPY --from=build --chown=workspace:workspace /app/package.json ./package.json
COPY --from=build --chown=workspace:workspace /app/public ./public
COPY --from=build --chown=workspace:workspace /app/skills ./skills
COPY --from=build --chown=workspace:workspace /app/entry.js ./entry.js

USER workspace
ENV NODE_ENV=production \
    PORT=3000 \
    HOST=0.0.0.0 \
    HERMES_API_URL=http://hermes-agent:8642

EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=5s --start-period=20s --retries=3 \
  CMD curl -fsS http://127.0.0.1:3000/ >/dev/null || exit 1

ENTRYPOINT ["/usr/bin/tini", "--"]
CMD ["node", "--max-old-space-size=2048", "entry.js"]
