# Hermes Workspace

Hermes Workspace is a full-stack, AI-agent command center that provides a unified interface for chatting, file management, memory browsing, skill exploration, and terminal access. It is built to integrate seamlessly with the [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) gateway.

## Project Overview

-   **Type:** Full-stack AI Agent Workspace
-   **Main Technologies:**
    -   **Frontend:** React 19 (TypeScript), TanStack Start (SSR), TanStack Router (File-based routing), TanStack Query.
    -   **Styling:** Tailwind CSS v4 (via `@tailwindcss/vite`), Motion (animations).
    -   **State Management:** Zustand.
    -   **Backend:** TanStack Start Server Functions, Node.js API routes, Proxying to Hermes Agent (Python/FastAPI).
    -   **Components:** Monaco Editor (Files), Xterm.js (Terminal), Recharts (Dashboard), HugeIcons.
    -   **Tooling:** Vite, ESLint, Prettier, Vitest.

## Architecture

Hermes Workspace follows a hybrid client-server model powered by **TanStack Start**.

1.  **Frontend:** A modern SPA with server-side rendering support. It uses file-based routing and a robust store architecture (Zustand) to manage agent sessions, workspace state, and terminal instances.
2.  **Server-side:** TanStack Start server functions and Node.js routes handle authentication, local file system access, and communication with the Hermes Agent gateway.
3.  **Gateway Integration:** The workspace communicates with a Hermes Agent gateway (typically running on port 8642). It supports "Enhanced Mode" (full features via Hermes APIs) and "Portable Mode" (basic chat via OpenAI-compatible endpoints).
4.  **Workspace Daemon:** A dedicated background service (managed via Vite in dev) that assists with workspace-specific tasks.

## Building and Running

Ensure you have **Node.js 22+** and `pnpm` installed.

### Key Commands

-   `pnpm dev`: Starts the development server on `http://localhost:3000`. It also attempts to auto-start the local Hermes Agent gateway and the Workspace Daemon.
-   `pnpm build`: Builds the project for production.
-   `pnpm start`: Runs the production build (using the `.output/server/index.mjs` entrypoint).
-   `pnpm test`: Runs the test suite using Vitest.
-   `pnpm check`: Runs Prettier and ESLint (with auto-fix).
-   `pnpm lint`: Runs ESLint checks.

## Development Conventions

### Routing
Uses **TanStack Router**. Define new routes in `src/routes/`. The route tree is automatically generated in `src/routeTree.gen.ts`.
-   `__root.tsx`: The layout wrapper.
-   `index.tsx`: The dashboard/home page.
-   `chat/`: Chat-related routes.
-   `api/`: Server-side API endpoints.

### Styling
-   **Tailwind CSS v4:** Uses the new `@tailwindcss/vite` plugin. Configuration is managed in `vite.config.ts`.
-   **Themes:** Supports 8 themes with light/dark variants. Managed via CSS variables and the root layout.

### State Management
Managed via **Zustand** stores in `src/stores/`.
-   `chat-store.ts`: Core session and message state.
-   `workspace-store.ts`: Global UI and configuration state.
-   `terminal-panel-store.ts`: Terminal instances and focus state.

### Backend & API
-   **Server Functions:** Prefer TanStack Start's `createServerFn` for simple server-side logic.
-   **Gateway Communication:** All logic for talking to the Hermes Agent is in `src/server/gateway.ts` and `src/server/hermes-api.ts`.
-   **Authentication:** Password protection is implemented in `src/server/auth-middleware.ts`.

### Security
-   **Path Sanitization:** Always sanitize file paths in server-side code to prevent traversal attacks.
-   **Approval Prompts:** Sensitive tool executions should trigger approval prompts in the UI.

## Key Directories

-   `src/components/`: Reusable React components.
-   `src/routes/`: App pages and API routes (TanStack Router).
-   `src/server/`: Backend-only logic and gateway clients.
-   `src/stores/`: Zustand state definitions.
-   `src/hooks/`: Custom React hooks (e.g., for SSE, terminal).
-   `src/types/`: TypeScript interfaces and types.
-   `public/`: Static assets and PWA configuration.

## Environment Variables

Copy `.env.example` to `.env`.

-   `HERMES_API_URL`: URL of the Hermes Agent gateway (default: `http://127.0.0.1:8642`).
-   `HERMES_API_TOKEN`: API key for the gateway (if enabled).
-   `HERMES_PASSWORD`: Optional password to protect the Workspace UI.
-   `HERMES_ALLOWED_HOSTS`: Comma-separated list of allowed hosts for proxying.
