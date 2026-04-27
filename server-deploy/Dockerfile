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
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/server-entry.js ./server-entry.js
COPY --from=builder /app/skills ./skills

# Install production dependencies
RUN pnpm install --prod --frozen-lockfile

ENV NODE_ENV=production
ENV PORT=3000
EXPOSE 3000

# Start command
CMD ["node", "server-entry.js"]
