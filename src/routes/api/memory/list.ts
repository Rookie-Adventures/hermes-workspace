import { createFileRoute } from '@tanstack/react-router'
import { json } from '@tanstack/react-start'
import { isAuthenticated } from '../../../server/auth-middleware'
<<<<<<< HEAD
import {
  ensureGatewayProbed,
  getCapabilities,
} from '../../../server/gateway-capabilities'
import { listMemoryFiles } from '../../../server/memory-browser'
import { createCapabilityUnavailablePayload } from '@/lib/feature-gates'
=======
import { listMemoryFiles } from '../../../server/memory-browser'
>>>>>>> upstream/main

export const Route = createFileRoute('/api/memory/list')({
  server: {
    handlers: {
      GET: async ({ request }) => {
        if (!isAuthenticated(request)) {
          return json({ error: 'Unauthorized' }, { status: 401 })
        }
<<<<<<< HEAD
        await ensureGatewayProbed()
        if (!getCapabilities().memory) {
          return json({
            ...createCapabilityUnavailablePayload('memory'),
            files: [],
          })
        }

=======
        // Memory is sourced entirely from local filesystem via memory-browser.ts
        // (reads $HERMES_HOME/MEMORY.md + $HERMES_HOME/memory/ + /memories/). No
        // remote gateway endpoint is required, so no capability gate is needed.
>>>>>>> upstream/main
        try {
          return json({ files: listMemoryFiles() })
        } catch (error) {
          return json(
            {
              error:
                error instanceof Error
                  ? error.message
                  : 'Failed to list memory files',
            },
            { status: 500 },
          )
        }
      },
    },
  },
})
