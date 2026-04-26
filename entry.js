import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

// Standard TanStack Start entry point resolution
const __dirname = fileURLToPath(new URL('.', import.meta.url));
const serverPath = join(__dirname, '.output', 'server', 'index.mjs');

console.log(`[Hermes] Starting workspace server...`);
console.log(`[Hermes] Entry: ${serverPath}`);

// Forward all environment variables and start
import(serverPath).catch(err => {
  console.error('[Hermes] FATAL: Failed to load server bundle:', err);
  process.exit(1);
});
