# Build stage
FROM node:22-alpine AS builder

WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy package files
COPY package.json pnpm-lock.yaml* ./
RUN pnpm install --frozen-lockfile

# Copy source code
COPY . .

# Build the project (generates .output)
RUN pnpm build

# Production stage
FROM node:22-alpine

WORKDIR /app

RUN npm install -g pnpm

# Copy built artifacts from builder
COPY --from=builder /app/.output ./.output
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/entry.js ./entry.js
COPY --from=builder /app/public ./public
# Copy pty-helper if it exists (for terminal support)
COPY --from=builder /app/src/server/pty-helper.py ./src/server/pty-helper.py 2>/dev/null || true

# Install production dependencies
# Nitro's node-server preset is mostly self-contained but entry.js and some runtime 
# hooks might need node_modules.
RUN pnpm install --prod --frozen-lockfile

ENV NODE_ENV=production
ENV PORT=3000
EXPOSE 3000

# Use the workspace entry point which finds the built output
CMD ["node", "entry.js"]
