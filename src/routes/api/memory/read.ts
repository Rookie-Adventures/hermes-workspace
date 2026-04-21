import { createFileRoute } from '@tanstack/react-router'
import { json } from '@tanstack/react-start'
import { isAuthenticated } from '../../../server/auth-middleware'
<<<<<<< HEAD
import {
  ensureGatewayProbed,
  getCapabilities,
} from '../../../server/gateway-capabilities'
import { readMemoryFile } from '../../../server/memory-browser'
import { createCapabilityUnavailablePayload } from '@/lib/feature-gates'
=======
import { readMemoryFile } from '../../../server/memory-browser'
>>>>>>> upstream/main

export const Route = createFileRoute('/api/memory/read')({
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
            path: '',
            content: '',
          })
        }

=======
        // Memory is local-fs only. No remote gateway check needed.
>>>>>>> upstream/main
        const url = new URL(request.url)
        const pathParam = url.searchParams.get('path') || ''
        try {
          const content = readMemoryFile(pathParam)
          return json({ path: pathParam, content })
        } catch (error) {
          const message =
            error instanceof Error
              ? error.message
              : 'Failed to read memory file'
          const status = /not allowed|outside workspace|required/i.test(message)
            ? 400
            : /ENOENT/.test(message)
              ? 404
              : 500
          return json({ error: message }, { status })
        }
      },
    },
  },
})
