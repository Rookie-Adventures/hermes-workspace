const BASE_URL =
  typeof window !== 'undefined'
    ? window.location.origin
    : 'http://localhost:4444'
async function readError(response) {
  try {
    const payload = await response.json()
    if (typeof payload.error === 'string') return payload.error
    if (typeof payload.message === 'string') return payload.message
    return JSON.stringify(payload)
  } catch {
    const text = await response.text().catch(() => '')
    return text || response.statusText || 'Gateway request failed'
  }
}
function makeEndpoint(pathname) {
  return new URL(pathname, BASE_URL).toString()
}
function isAbortError(error) {
  return (
    (error instanceof DOMException && error.name === 'AbortError') ||
    (error instanceof Error && error.name === 'AbortError')
  )
}
async function fetchSessionHistory(sessionKey, opts) {
  const controller = new AbortController()
  const timeout = globalThis.setTimeout(() => controller.abort(), 15e3)
  try {
    const params = new URLSearchParams({ key: sessionKey })
    if (opts?.limit) params.set('limit', String(opts.limit))
    if (opts?.includeTools) params.set('includeTools', 'true')
    const response = await fetch(
      makeEndpoint(`/api/session-history?${params}`),
      {
        signal: controller.signal,
      },
    )
    if (!response.ok)
      return { ok: false, messages: [], error: await readError(response) }
    return await response.json()
  } catch (error) {
    if (isAbortError(error))
      return { ok: false, messages: [], error: 'Request timed out' }
    return { ok: false, messages: [], error: String(error) }
  } finally {
    globalThis.clearTimeout(timeout)
  }
}
async function sendToSession(sessionKey, message) {
  const controller = new AbortController()
  const timeout = globalThis.setTimeout(() => controller.abort(), 3e4)
  try {
    const response = await fetch(makeEndpoint('/api/session-send'), {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ sessionKey, message }),
      signal: controller.signal,
    })
    const payload = await response.json().catch(() => ({}))
    if (!response.ok || payload.ok === false) {
      throw new Error(
        typeof payload.error === 'string' && payload.error.trim()
          ? payload.error
          : response.statusText || 'Failed to send message',
      )
    }
    return payload
  } catch (error) {
    if (isAbortError(error)) throw new Error('Request timed out')
    throw error
  } finally {
    globalThis.clearTimeout(timeout)
  }
}
async function fetchSessions() {
  const response = await fetch(makeEndpoint('/api/sessions'))
  if (!response.ok) {
    throw new Error(await readError(response))
  }
  return await response.json()
}
async function fetchModels() {
  const controller = new AbortController()
  const timeout = globalThis.setTimeout(() => controller.abort(), 7e3)
  try {
    const response = await fetch(makeEndpoint('/api/models'), {
      signal: controller.signal,
    })
    if (!response.ok) {
      throw new Error(await readError(response))
    }
    const payload = await response.json()
    if (payload.ok === false) {
      throw new Error(payload.error || 'Failed to load models')
    }
    return {
      ok: true,
      models: Array.isArray(payload.models) ? payload.models : [],
      configuredProviders: Array.isArray(payload.configuredProviders)
        ? payload.configuredProviders
        : [],
    }
  } catch (error) {
    if (isAbortError(error)) {
      throw new Error('Gateway disconnected')
    }
    throw error
  } finally {
    globalThis.clearTimeout(timeout)
  }
}
export {
  fetchModels as a,
  fetchSessions as b,
  fetchSessionHistory as f,
  sendToSession as s,
}
