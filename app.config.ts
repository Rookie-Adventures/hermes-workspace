import { createApp } from 'vinxi';
import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import viteTsConfigPaths from 'vite-tsconfig-paths';
import { fileURLToPath } from 'node:url';

export default createApp({
  server: {
    preset: 'node-server',
  },
  routers: [
    {
      name: 'public',
      type: 'static',
      dir: './public',
      base: '/',
    },
    {
      name: 'client',
      type: 'client',
      handler: './src/entry-client.tsx',
      target: 'browser',
      base: '/_build',
      plugins: () => [
        viteTsConfigPaths({
          projects: ['./tsconfig.json'],
        }),
      ],
      // Force Node built-ins to resolve to empty objects in client
      vite: {
        resolve: {
          alias: {
            'node:async_hooks': fileURLToPath(new URL('./src/lib/empty-async-storage.ts', import.meta.url)),
            'node:crypto': fileURLToPath(new URL('./src/lib/empty.ts', import.meta.url)),
            'node:fs': fileURLToPath(new URL('./src/lib/empty.ts', import.meta.url)),
            'node:os': fileURLToPath(new URL('./src/lib/empty.ts', import.meta.url)),
            'node:path': fileURLToPath(new URL('./src/lib/empty.ts', import.meta.url)),
            'node:child_process': fileURLToPath(new URL('./src/lib/empty.ts', import.meta.url)),
            'node:util': fileURLToPath(new URL('./src/lib/empty.ts', import.meta.url)),
          },
        },
      },
    },
    {
      name: 'ssr',
      type: 'http',
      handler: './src/entry-server.tsx',
      target: 'server',
      plugins: () => [
        viteTsConfigPaths({
          projects: ['./tsconfig.json'],
        }),
      ],
    },
  ],
  plugins: [
    {
      name: 'alias-fix',
      config: () => ({
        resolve: {
          alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
          },
        },
      }),
    },
    tanstackStart(),
  ],
});
