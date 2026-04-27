# Hermes Workspace

Hermes Workspace is a full-stack AI-agent command center designed to provide a unified interface for chatting, file management, memory browsing, skill exploration, and terminal access. It integrates seamlessly with the [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) gateway.

## Project Overview

- **Type:** Full-stack AI Agent Workspace
- **Main Technologies:**
  - **Frontend:** React 19 (TypeScript), TanStack Start (SSR), TanStack Router (File-based routing), TanStack Query.
  - **Styling:** Tailwind CSS v4 (via `@tailwindcss/vite`), Motion (animations).
  - **State Management:** Zustand.
  - **Backend:** TanStack Start Server Functions, Node.js API routes, Proxying to Hermes Agent (Python/FastAPI).
  - **Components:** Monaco Editor (Files), Xterm.js (Terminal), Recharts (Dashboard), HugeIcons.
  - **Tooling:** Vite/Vinxi, ESLint, Prettier, Vitest, Playwright (Smoke tests).

## Building and Running

Ensure you have **Node.js 22+** and `pnpm` installed.

### Key Commands

- `pnpm dev`: Starts the development server on `http://localhost:3000`. It also attempts to auto-start the `hermes-agent` gateway and a `workspace-daemon`.
- `pnpm build`: Builds the project for production using `vinxi build`.
- `pnpm start`: Runs the production build via `entry.js`.
- `pnpm test`: Runs the test suite using Vitest.
- `pnpm check`: Runs Prettier and ESLint (with auto-fix).
- `pnpm lint`: Runs ESLint checks.
- `pnpm smoke:managed`: Runs managed companion smoke tests.

## Development Conventions

- **Routing:** Uses **TanStack Router**. Define new routes in `src/routes/`. The route tree is auto-generated into `src/routeTree.gen.ts`.
- **Styling:** **Tailwind CSS v4** managed in `vite.config.ts`. Prefer utility classes but feel free to use standard CSS in `src/styles.css`.
- **State Management:** **Zustand** stores in `src/stores/` (e.g., `chat-store.ts`, `workspace-store.ts`, `terminal-panel-store.ts`). The `chat-store` handles complex real-time SSE streaming, message deduplication, and history merging.
- **Backend & API:** Uses **TanStack Start** server functions. Logic for interacting with the Hermes gateway resides in `src/server/`.
- **Proxying:** The Vite dev server proxies several paths:
  - `/ws-hermes`: WebSocket proxy to the Hermes gateway.
  - `/api/hermes-proxy`: REST API proxy for Hermes backend.
  - `/hermes-ui`: Proxy to embed the Hermes gateway's own UI.
  - `/workspace-api`: Proxy to the internal `workspace-daemon`.
- **Terminal:** Employs a server-side PTY helper (`src/server/pty-helper.py`) and a terminal session manager (`src/server/terminal-sessions.ts`) to provide interactive terminal access via Xterm.js.
- **Environment Variables:**
  - `HERMES_API_URL`: URL of the Hermes gateway (default: `http://127.0.0.1:8642`).
  - `HERMES_API_TOKEN`: Optional API key for the gateway.
  - `HERMES_ALLOWED_HOSTS`: Comma-separated list of allowed hosts for the web UI.

## Architecture

- **Gateway Integration:** The workspace acts as an "enhanced" client for the Hermes Agent. It detects if the gateway supports extended APIs (sessions, memory, skills, jobs) and unlocks corresponding UI features.
- **Streaming:** Uses Server-Sent Events (SSE) for real-time agent output. The frontend handles chunked text, thinking blocks, and tool call lifecycle events.
- **Persistence:** Agent state (config, sessions, etc.) is persisted on the agent side (e.g., in `~/.hermes/`), while UI preferences are managed via Zustand and local/session storage.
