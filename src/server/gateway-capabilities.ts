/**
<<<<<<< HEAD
 * Probes the Hermes gateway to detect which API groups are available.
 * Results are cached and refreshed periodically so route handlers can
 * degrade cleanly against older Hermes gateways.
 *
 * Two-tier capability model:
 *   - Core: portable chat readiness (health, chat completions, models)
 *   - Enhanced: Hermes-native extras (sessions, skills, memory, config, jobs)
 */

export let HERMES_API = process.env.HERMES_API_URL || 'http://127.0.0.1:8642'

export const HERMES_UPGRADE_INSTRUCTIONS =
  'For full features, use the enhanced fork: git clone https://github.com/outsourc-e/hermes-agent && cd hermes-agent && pip install -e . && hermes gateway run'

export const SESSIONS_API_UNAVAILABLE_MESSAGE = `Your Hermes gateway does not support the sessions API. ${HERMES_UPGRADE_INSTRUCTIONS}`

const PROBE_TIMEOUT_MS = 3_000
const PROBE_TTL_MS = 120_000
=======
 * Probes Hermes services to detect which API groups are available.
 *
 * Zero-fork architecture:
 *   - Gateway (:8645 by default): /health, /v1/chat/completions, /v1/models
 *   - Dashboard (:9119 by default): sessions, skills, config, cron, env, analytics
 *
 * Legacy enhanced-fork compatibility remains for users still running the
 * older all-in-one web API on the gateway port.
 */

export let HERMES_API = process.env.HERMES_API_URL || 'http://127.0.0.1:8645'
export let HERMES_DASHBOARD_URL =
  process.env.HERMES_DASHBOARD_URL || 'http://127.0.0.1:9119'

export const HERMES_UPGRADE_INSTRUCTIONS =
  'For full features, install upstream Hermes Agent (`pip install hermes-agent`) and run `hermes gateway run` plus `hermes dashboard` in separate terminals.'

export const SESSIONS_API_UNAVAILABLE_MESSAGE = `Your Hermes backend does not support the sessions API. ${HERMES_UPGRADE_INSTRUCTIONS}`

const PROBE_TIMEOUT_MS = 3_000
const PROBE_TTL_MS = 120_000
const DASHBOARD_TOKEN_REGEX =
  /window\.__HERMES_SESSION_TOKEN__\s*=\s*["'](.+?)["']/
>>>>>>> upstream/main

// ── Types ─────────────────────────────────────────────────────────

export type CoreCapabilities = {
  health: boolean
  chatCompletions: boolean
  models: boolean
  streaming: boolean
  probed: boolean
}

export type EnhancedCapabilities = {
  sessions: boolean
  enhancedChat: boolean
  skills: boolean
  memory: boolean
  config: boolean
  jobs: boolean
}

<<<<<<< HEAD
/** Full capabilities — backward compat with existing code */
export type GatewayCapabilities = CoreCapabilities & EnhancedCapabilities
=======
export type DashboardCapabilities = {
  dashboard: {
    available: boolean
    url: string
  }
}

/** Full capabilities — backward compat with existing code */
export type GatewayCapabilities =
  CoreCapabilities &
  EnhancedCapabilities &
  DashboardCapabilities

export type GatewayMode =
  | 'zero-fork'
  | 'enhanced-fork'
  | 'portable'
  | 'disconnected'
>>>>>>> upstream/main

export type ChatMode = 'enhanced-hermes' | 'portable' | 'disconnected'

export type ConnectionStatus =
  | 'connected'
  | 'enhanced'
  | 'partial'
  | 'disconnected'

// ── State ─────────────────────────────────────────────────────────

let capabilities: GatewayCapabilities = {
  health: false,
  chatCompletions: false,
  models: false,
  streaming: false,
  sessions: false,
  enhancedChat: false,
  skills: false,
  memory: false,
  config: false,
  jobs: false,
<<<<<<< HEAD
=======
  dashboard: {
    available: false,
    url: HERMES_DASHBOARD_URL,
  },
>>>>>>> upstream/main
  probed: false,
}

let probePromise: Promise<GatewayCapabilities> | null = null
let lastProbeAt = 0
let lastLoggedSummary = ''
<<<<<<< HEAD

/** Optional bearer token for authenticated endpoints. */
=======
let dashboardTokenPromise: Promise<string> | null = null
let dashboardTokenCache = ''

/** Optional bearer token for authenticated gateway endpoints. */
>>>>>>> upstream/main
export const BEARER_TOKEN = process.env.HERMES_API_TOKEN || ''

function authHeaders(): Record<string, string> {
  return BEARER_TOKEN ? { Authorization: `Bearer ${BEARER_TOKEN}` } : {}
}

<<<<<<< HEAD
=======
export async function fetchDashboardToken(options?: {
  force?: boolean
}): Promise<string> {
  const force = options?.force === true
  if (!force && dashboardTokenCache) return dashboardTokenCache
  if (!force && dashboardTokenPromise) return dashboardTokenPromise

  dashboardTokenPromise = (async () => {
    // Dashboard injects the session token inline on `/` (root), not on
    // `/index.html` which serves the raw Vite-built HTML without the token.
    const res = await fetch(`${HERMES_DASHBOARD_URL}/`, {
      signal: AbortSignal.timeout(PROBE_TIMEOUT_MS),
    })
    if (!res.ok) {
      throw new Error(`Dashboard index failed: ${res.status}`)
    }
    const html = await res.text()
    const token = html.match(DASHBOARD_TOKEN_REGEX)?.[1]?.trim() || ''
    if (!token) {
      throw new Error('Dashboard session token not found in root HTML')
    }
    dashboardTokenCache = token
    return token
  })()

  try {
    return await dashboardTokenPromise
  } finally {
    dashboardTokenPromise = null
  }
}

export async function getDashboardToken(options?: {
  force?: boolean
}): Promise<string> {
  return fetchDashboardToken(options)
}

export async function dashboardAuthHeaders(options?: {
  force?: boolean
}): Promise<Record<string, string>> {
  const token = await getDashboardToken(options)
  return token ? { Authorization: `Bearer ${token}` } : {}
}

function withDashboardBase(path: string): string {
  if (/^https?:\/\//i.test(path)) return path
  return `${HERMES_DASHBOARD_URL}${path.startsWith('/') ? path : `/${path}`}`
}

export async function dashboardFetch(
  path: string,
  init: RequestInit = {},
): Promise<Response> {
  const requestPath = withDashboardBase(path)
  const method = (init.method || 'GET').toUpperCase()
  const doFetch = async (forceToken = false) => {
    const headers = new Headers(init.headers)
    const isProtected =
      requestPath.includes('/api/') &&
      !requestPath.endsWith('/api/status') &&
      !requestPath.endsWith('/api/config/defaults') &&
      !requestPath.endsWith('/api/config/schema') &&
      !requestPath.endsWith('/api/model/info') &&
      !requestPath.endsWith('/api/dashboard/themes') &&
      !requestPath.endsWith('/api/dashboard/plugins') &&
      !requestPath.endsWith('/api/dashboard/plugins/rescan')

    if (isProtected && !headers.has('Authorization')) {
      const auth = await dashboardAuthHeaders({ force: forceToken })
      for (const [key, value] of Object.entries(auth)) {
        headers.set(key, value)
      }
    }

    return fetch(requestPath, {
      ...init,
      method,
      headers,
    })
  }

  let res = await doFetch(false)
  if (res.status === 401) {
    dashboardTokenCache = ''
    res = await doFetch(true)
  }
  return res
}

>>>>>>> upstream/main
// ── Probing ───────────────────────────────────────────────────────

async function probe(path: string): Promise<boolean> {
  try {
    const res = await fetch(`${HERMES_API}${path}`, {
      headers: authHeaders(),
      signal: AbortSignal.timeout(PROBE_TIMEOUT_MS),
    })
<<<<<<< HEAD
    // 404 = endpoint doesn't exist.
    // 403 = likely a catch-all rejection (e.g. Codex endpoint rejects unknown paths).
    // Only 2xx, 400, 405, 422 reliably indicate the endpoint exists.
=======
>>>>>>> upstream/main
    if (res.status === 404 || res.status === 403) return false
    return true
  } catch {
    return false
  }
}

<<<<<<< HEAD
/** Probe /v1/chat/completions to check if the endpoint exists.
 *  First tries a lightweight GET (405 = endpoint exists, just wrong method).
 *  This avoids creating real sessions on the gateway. */
async function probeChatCompletions(): Promise<boolean> {
  try {
    // Fast path: GET returns 405 Method Not Allowed = endpoint exists
=======
async function probeChatCompletions(): Promise<boolean> {
  try {
>>>>>>> upstream/main
    const getRes = await fetch(`${HERMES_API}/v1/chat/completions`, {
      method: 'GET',
      headers: authHeaders(),
      signal: AbortSignal.timeout(PROBE_TIMEOUT_MS),
    })
<<<<<<< HEAD
    // 405 = endpoint exists but wrong method (expected for POST-only routes)
    if (getRes.status === 405) return true
    // 200 would be unusual but means it exists
    if (getRes.ok) return true
    // 400/422 = endpoint exists, just rejected the request shape
    if (getRes.status === 400 || getRes.status === 422) return true
    // 404 = endpoint doesn't exist on this server
    if (getRes.status === 404) return false
    // For other status codes, assume it exists
=======
    if (getRes.status === 405) return true
    if (getRes.ok) return true
    if (getRes.status === 400 || getRes.status === 422) return true
    if (getRes.status === 404) return false
>>>>>>> upstream/main
    return true
  } catch {
    return false
  }
}

<<<<<<< HEAD
// APIs that are optional and do not warrant an upgrade warning when absent.
const OPTIONAL_APIS = new Set(['jobs', 'chatCompletions', 'streaming'])
=======
async function probeDashboard(): Promise<{ available: boolean; url: string }> {
  try {
    const res = await fetch(`${HERMES_DASHBOARD_URL}/api/status`, {
      signal: AbortSignal.timeout(PROBE_TIMEOUT_MS),
    })
    if (!res.ok) return { available: false, url: HERMES_DASHBOARD_URL }
    const body = (await res.json()) as { version?: string }
    if (!body.version) return { available: false, url: HERMES_DASHBOARD_URL }
    await fetchDashboardToken().catch(() => '')
    return { available: true, url: HERMES_DASHBOARD_URL }
  } catch {
    return { available: false, url: HERMES_DASHBOARD_URL }
  }
}

// Vanilla hermes-agent 0.10.0 satisfies: health, chatCompletions, models, streaming,
// sessions, skills, config, jobs. Dashboard-only endpoints (themes/plugins) and the
// legacy enhanced-fork chat stream are optional — their absence should not emit the
// "Missing Hermes APIs detected" warning, which only applies to critical gaps.
const OPTIONAL_APIS = new Set([
  'jobs',
  'chatCompletions',
  'streaming',
  'memory',
  'dashboard',
  'enhancedChat',
])
>>>>>>> upstream/main

function logCapabilities(next: GatewayCapabilities): void {
  const core: Array<string> = []
  const enhanced: Array<string> = []
  const missing: Array<string> = []

  const coreKeys: Array<keyof CoreCapabilities> = [
    'health',
    'chatCompletions',
    'models',
    'streaming',
  ]
  const enhancedKeys: Array<keyof EnhancedCapabilities> = [
    'sessions',
    'enhancedChat',
    'skills',
    'memory',
    'config',
    'jobs',
  ]

  for (const key of coreKeys) {
<<<<<<< HEAD
    if (key === 'probed') continue
=======
>>>>>>> upstream/main
    ;(next[key] ? core : missing).push(key)
  }
  for (const key of enhancedKeys) {
    ;(next[key] ? enhanced : missing).push(key)
  }
<<<<<<< HEAD

  const mode = getChatMode()
  const summary = `[gateway] ${HERMES_API} mode=${mode} core=[${core.join(', ')}] enhanced=[${enhanced.join(', ')}] missing=[${missing.join(', ')}]`
=======
  if (next.dashboard.available) core.push('dashboard')
  else missing.push('dashboard')

  const mode = getGatewayMode()
  const summary = `[gateway] gateway=${HERMES_API} dashboard=${next.dashboard.url} mode=${mode} core=[${core.join(', ')}] enhanced=[${enhanced.join(', ')}] missing=[${missing.join(', ')}]`
>>>>>>> upstream/main
  if (summary === lastLoggedSummary) return
  lastLoggedSummary = summary
  console.log(summary)

<<<<<<< HEAD
  // Only warn about critical missing APIs (not optional ones)
  const criticalMissing = missing.filter((key) => !OPTIONAL_APIS.has(key))
  if (criticalMissing.length > 0 && next.health) {
=======
  const criticalMissing = missing.filter((key) => !OPTIONAL_APIS.has(key))
  if (criticalMissing.length > 0 && (next.health || next.dashboard.available)) {
>>>>>>> upstream/main
    console.warn(
      `[gateway] Missing Hermes APIs detected. ${HERMES_UPGRADE_INSTRUCTIONS}`,
    )
  }
}

<<<<<<< HEAD
=======
async function autoDetectGatewayUrl(): Promise<void> {
  if (process.env.HERMES_API_URL) return

  const candidates = [
    'http://127.0.0.1:8645',
    'http://127.0.0.1:8642',
    'http://127.0.0.1:8643',
  ]

  for (const candidate of candidates) {
    try {
      const res = await fetch(`${candidate}/health`, {
        signal: AbortSignal.timeout(PROBE_TIMEOUT_MS),
      })
      if (res.ok) {
        HERMES_API = candidate
        console.log(`[gateway] Connected to Hermes gateway at ${HERMES_API}`)
        return
      }
    } catch {
      // continue
    }
  }

  console.warn('[gateway] Could not reach Hermes gateway on 8645, 8642, or 8643')
}

async function autoDetectDashboardUrl(): Promise<void> {
  if (process.env.HERMES_DASHBOARD_URL) return

  const candidates = ['http://127.0.0.1:9119']
  for (const candidate of candidates) {
    try {
      const res = await fetch(`${candidate}/api/status`, {
        signal: AbortSignal.timeout(PROBE_TIMEOUT_MS),
      })
      if (res.ok) {
        HERMES_DASHBOARD_URL = candidate
        return
      }
    } catch {
      // continue
    }
  }
}

>>>>>>> upstream/main
export async function probeGateway(options?: {
  force?: boolean
}): Promise<GatewayCapabilities> {
  const force = options?.force === true
  if (!force && capabilities.probed) {
    return capabilities
  }
  if (probePromise) {
    return probePromise
  }

  probePromise = (async () => {
<<<<<<< HEAD
    // Auto-detect port if no explicit env var set
    if (!process.env.HERMES_API_URL) {
      const healthOn8642 = await probe('/health')
      if (!healthOn8642) {
        const fallback = 'http://127.0.0.1:8643'
        const healthOn8643 = await fetch(`${fallback}/health`, {
          signal: AbortSignal.timeout(PROBE_TIMEOUT_MS),
        })
          .then((r) => r.ok)
          .catch(() => false)
        if (healthOn8643) {
          HERMES_API = fallback
          console.log(`[gateway] Connected to Hermes at ${HERMES_API}`)
        } else {
          console.warn('[gateway] Could not reach Hermes on 8642 or 8643')
        }
      } else {
        console.log(`[gateway] Connected to Hermes at ${HERMES_API}`)
      }
    }
=======
    await Promise.all([autoDetectGatewayUrl(), autoDetectDashboardUrl()])
>>>>>>> upstream/main

    const [
      health,
      chatCompletions,
      models,
<<<<<<< HEAD
      sessions,
      enhancedChat,
      skills,
      memory,
      config,
      jobs,
=======
      legacySessions,
      enhancedChat,
      legacySkills,
      legacyConfig,
      legacyJobs,
      dashboard,
>>>>>>> upstream/main
    ] = await Promise.all([
      probe('/health'),
      probeChatCompletions(),
      probe('/v1/models'),
      probe('/api/sessions'),
      probe('/api/sessions/__probe__/chat/stream'),
      probe('/api/skills'),
<<<<<<< HEAD
      probe('/api/memory'),
      probe('/api/config'),
      probe('/api/jobs'),
    ])

    capabilities = {
      // Core
      health,
      chatCompletions,
      models,
      streaming: chatCompletions, // If chat completions exists, streaming is supported
      probed: true,
      // Enhanced
      sessions,
      enhancedChat,
      skills,
      memory,
      config,
      jobs,
=======
      probe('/api/config'),
      probe('/api/jobs'),
      probeDashboard(),
    ])

    capabilities = {
      health,
      chatCompletions,
      models,
      streaming: chatCompletions,
      probed: true,
      sessions: dashboard.available || legacySessions,
      enhancedChat,
      skills: dashboard.available || legacySkills,
      // Memory is always available: workspace reads $HERMES_HOME/MEMORY.md +
      // memory/*.md + memories/*.md directly from the local filesystem.
      // No remote gateway endpoint is required.
      memory: true,
      config: dashboard.available || legacyConfig,
      jobs: dashboard.available || legacyJobs,
      dashboard,
>>>>>>> upstream/main
    }
    lastProbeAt = Date.now()
    logCapabilities(capabilities)
    return capabilities
  })()

  try {
    return await probePromise
  } finally {
    probePromise = null
  }
}

export async function ensureGatewayProbed(): Promise<GatewayCapabilities> {
  const isStale = Date.now() - lastProbeAt > PROBE_TTL_MS
  if (!capabilities.probed || isStale) {
    return probeGateway({ force: isStale })
  }
  return capabilities
}

// ── Accessors ─────────────────────────────────────────────────────

<<<<<<< HEAD
/** Full capabilities — backward compatible */
=======
>>>>>>> upstream/main
export function getCapabilities(): GatewayCapabilities {
  return capabilities
}

<<<<<<< HEAD
/** Core portable capabilities only */
=======
>>>>>>> upstream/main
export function getCoreCapabilities(): CoreCapabilities {
  return {
    health: capabilities.health,
    chatCompletions: capabilities.chatCompletions,
    models: capabilities.models,
    streaming: capabilities.streaming,
    probed: capabilities.probed,
  }
}

<<<<<<< HEAD
/** Hermes-native enhanced capabilities only */
=======
>>>>>>> upstream/main
export function getEnhancedCapabilities(): EnhancedCapabilities {
  return {
    sessions: capabilities.sessions,
    enhancedChat: capabilities.enhancedChat,
    skills: capabilities.skills,
    memory: capabilities.memory,
    config: capabilities.config,
    jobs: capabilities.jobs,
  }
}

<<<<<<< HEAD
/**
 * Current chat transport mode:
 * - 'enhanced-hermes': full Hermes session API available
 * - 'portable': OpenAI-compatible /v1/chat/completions available
 * - 'disconnected': no usable chat backend
 */
export function getChatMode(): ChatMode {
  if (capabilities.sessions && capabilities.enhancedChat)
    return 'enhanced-hermes'
=======
export function getGatewayMode(): GatewayMode {
  // 'zero-fork' requires the optional dashboard plugin bundle; 'enhanced' is
  // granted whenever the core enhanced-chat endpoints are present — which
  // vanilla hermes-agent (≥0.10) satisfies. The label 'enhanced-fork' is
  // legacy copy from the 2025-era fork and does NOT imply an actual fork is
  // required. We keep the value for backwards compatibility with UI code.
  if (capabilities.dashboard.available && capabilities.chatCompletions) {
    return 'zero-fork'
  }
  if (capabilities.sessions && capabilities.enhancedChat) {
    return 'enhanced-fork'
  }
>>>>>>> upstream/main
  if (capabilities.chatCompletions || capabilities.health) return 'portable'
  return 'disconnected'
}

/**
<<<<<<< HEAD
 * Connection status for UI display:
 * - 'enhanced': full Hermes APIs detected
 * - 'connected': chat works
 * - 'partial': chat works, some advanced features unavailable
 * - 'disconnected': no backend
 */
export function getConnectionStatus(): ConnectionStatus {
  if (!capabilities.health && !capabilities.chatCompletions)
    return 'disconnected'
  const enhanced =
    capabilities.sessions &&
    capabilities.enhancedChat &&
    capabilities.skills &&
    capabilities.memory &&
=======
 * UI-facing chat transport mode:
 * - enhanced-hermes: legacy fork session streaming API available
 * - portable: OpenAI-compatible /v1/chat/completions transport
 * - disconnected: no usable chat backend
 */
export function getChatMode(): ChatMode {
  if (capabilities.enhancedChat) return 'enhanced-hermes'
  if (capabilities.chatCompletions || capabilities.health) return 'portable'
  return 'disconnected'
}

export function getConnectionStatus(): ConnectionStatus {
  if (!capabilities.health && !capabilities.chatCompletions) {
    return capabilities.dashboard.available ? 'partial' : 'disconnected'
  }
  const enhanced =
    (capabilities.dashboard.available || capabilities.sessions) &&
    capabilities.skills &&
>>>>>>> upstream/main
    capabilities.config
  if (enhanced) return 'enhanced'
  if (capabilities.chatCompletions || capabilities.sessions) return 'partial'
  return 'connected'
}

export function isHermesConnected(): boolean {
<<<<<<< HEAD
  return capabilities.health
=======
  return capabilities.health || capabilities.dashboard.available
>>>>>>> upstream/main
}

void ensureGatewayProbed()
