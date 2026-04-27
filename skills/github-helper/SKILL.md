# GitHub Actions Diagnoser Skill

This skill provides the agent with specialized instructions to diagnose and fix GitHub Actions failures, specifically focusing on Docker and CI/CD pipelines.

## Capabilities

- **Root Cause Analysis**: Systematically identify why a workflow failed.
- **Log Extraction**: Strategies to fetch logs from the GitHub API or CLI.
- **Fix Suggestion**: Propose surgical fixes for common CI errors (OOM, missing dependencies, path mismatches).

## Diagnostic Protocol

1. **Fetch Run ID**: Locate the latest failed run using `gh run list` or by parsing commit status.
2. **Scan Failure Stage**: Determine if it failed during `Checkout`, `Install`, `Build`, or `Push`.
3. **Inspect Docker Layers**: If it's a Docker failure, look for specific `exit code` and the preceding 20 lines of logs.
4. **Identify Bottlenecks**: Check for "billing issue", "no space left on device", or "Module not found".

## Common Docker/TanStack Start Fixes

- **OOM**: Increase `NODE_OPTIONS="--max-old-space-size=4096"`.
- **Missing Build**: Ensure `vinxi build` or `vite build` is called.
- **Path Drift**: Verify `.output/server/index.mjs` exists before copying.
