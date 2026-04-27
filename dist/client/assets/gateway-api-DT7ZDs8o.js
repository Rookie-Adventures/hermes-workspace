const l = typeof window < 'u' ? window.location.origin : 'http://localhost:4444'
async function i(t) {
  try {
    const r = await t.json()
    return typeof r.error == 'string'
      ? r.error
      : typeof r.message == 'string'
        ? r.message
        : JSON.stringify(r)
  } catch {
    return (
      (await t.text().catch(() => '')) ||
      t.statusText ||
      'Gateway request failed'
    )
  }
}
function a(t) {
  return new URL(t, l).toString()
}
function c(t) {
  return (
    (t instanceof DOMException && t.name === 'AbortError') ||
    (t instanceof Error && t.name === 'AbortError')
  )
}
async function f(t, r) {
  const e = new AbortController(),
    s = globalThis.setTimeout(() => e.abort(), 15e3)
  try {
    const o = new URLSearchParams({ key: t })
    ;(r?.limit && o.set('limit', String(r.limit)),
      r?.includeTools && o.set('includeTools', 'true'))
    const n = await fetch(a(`/api/session-history?${o}`), { signal: e.signal })
    return n.ok ? await n.json() : { ok: !1, messages: [], error: await i(n) }
  } catch (o) {
    return c(o)
      ? { ok: !1, messages: [], error: 'Request timed out' }
      : { ok: !1, messages: [], error: String(o) }
  } finally {
    globalThis.clearTimeout(s)
  }
}
async function u(t, r) {
  const e = new AbortController(),
    s = globalThis.setTimeout(() => e.abort(), 3e4)
  try {
    const o = await fetch(a('/api/session-send'), {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ sessionKey: t, message: r }),
        signal: e.signal,
      }),
      n = await o.json().catch(() => ({}))
    if (!o.ok || n.ok === !1)
      throw new Error(
        typeof n.error == 'string' && n.error.trim()
          ? n.error
          : o.statusText || 'Failed to send message',
      )
    return n
  } catch (o) {
    throw c(o) ? new Error('Request timed out') : o
  } finally {
    globalThis.clearTimeout(s)
  }
}
async function w() {
  const t = await fetch(a('/api/sessions'))
  if (!t.ok) throw new Error(await i(t))
  return await t.json()
}
async function d() {
  const t = new AbortController(),
    r = globalThis.setTimeout(() => t.abort(), 7e3)
  try {
    const e = await fetch(a('/api/models'), { signal: t.signal })
    if (!e.ok) throw new Error(await i(e))
    const s = await e.json()
    if (s.ok === !1) throw new Error(s.error || 'Failed to load models')
    return {
      ok: !0,
      models: Array.isArray(s.models) ? s.models : [],
      configuredProviders: Array.isArray(s.configuredProviders)
        ? s.configuredProviders
        : [],
    }
  } catch (e) {
    throw c(e) ? new Error('Gateway disconnected') : e
  } finally {
    globalThis.clearTimeout(r)
  }
}
export { d as a, w as b, f, u as s }
