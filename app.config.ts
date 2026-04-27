import { createApp } from 'vinxi';
import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import viteTsConfigPaths from 'vite-tsconfig-paths';

export default createApp({
  server: {
    preset: 'node-server',
  },
  routers: {
    public: {
      type: 'static',
      dir: './public',
      base: '/',
    },
    client: {
      type: 'client',
      handler: './src/entry-client.tsx',
    },
    ssr: {
      type: 'http',
      handler: './src/entry-server.tsx',
    },
  },
  plugins: [
    viteTsConfigPaths({
      projects: ['./tsconfig.json'],
    }),
    tanstackStart(),
  ],
});
