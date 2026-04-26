# syntax=docker/dockerfile:1.6
FROM node:22-bookworm AS build
RUN corepack enable && apt-get update && apt-get install -y --no-install-recommends \
    python3 make g++ ca-certificates libc6-dev \
    && rm -rf /var/lib/apt/lists/*
WORKDIR /app

# Step 1: Force reinstall dependencies to ensure fresh binaries
COPY package.json pnpm-lock.yaml* ./
RUN pnpm install --no-frozen-lockfile

# Step 2: Copy code and verify structure
COPY . .
RUN ls -la

# Step 3: Run build with explicit error capture
ENV NODE_ENV=production
ENV NODE_OPTIONS="--max-old-space-size=4096"
# Use npx to ensure vinxi is found regardless of PATH issues
RUN npx vinxi build || (echo "BUILD FAILED. LOGS:" && pnpm build 2>&1 | tail -n 50 && exit 1)

# Step 4: Diagnostic output
RUN find . -maxdepth 3 -name ".output"

# ─── Final Stage ───
FROM node:22-slim
RUN apt-get update && apt-get install -y --no-install-recommends \
      ca-certificates curl tini \
    && rm -rf /var/lib/apt/lists/* \
    && groupadd -r workspace && useradd -r -g workspace -u 10010 workspace

WORKDIR /app

# Ensure we copy everything needed for TanStack Start
COPY --from=build --chown=workspace:workspace /app/.output ./.output
COPY --from=build --chown=workspace:workspace /app/.vinxi ./.vinxi 2>/dev/null || :
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
