import { fileURLToPath } from 'node:url';
import { join } from 'node:path';
import { existsSync } from 'node:fs';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

// Possible entry points for TanStack Start / Nitro
const entries = [
  join(__dirname, '.output', 'server', 'index.mjs'),
  join(__dirname, '.output', 'server', 'index.js'),
  join(__dirname, 'dist', 'server', 'server.js')
];

let foundEntry = null;
for (const entry of entries) {
  if (existsSync(entry)) {
    foundEntry = entry;
    break;
  }
}

if (!foundEntry) {
  console.error('[Hermes] FATAL: Build output not found in any standard location.');
  console.error('[Hermes] Checked paths:', entries);
  process.exit(1);
}

console.log(`[Hermes] Starting workspace server from: ${foundEntry}`);

import(foundEntry).catch(err => {
  console.error('[Hermes] Failed to load server bundle:', err);
  process.exit(1);
});
