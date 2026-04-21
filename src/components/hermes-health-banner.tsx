import { useEffect, useState } from 'react'
import { fetchHermesAuthStatus } from '@/lib/hermes-auth'

const POLL_INTERVAL = 30_000

type HermesHealthBannerProps = {
  enabled?: boolean
}

export function HermesHealthBanner({
  enabled = false,
}: HermesHealthBannerProps) {
  const [status, setStatus] = useState<'ok' | 'error' | 'checking'>('checking')
  const [lastError, setLastError] = useState<string | null>(null)

  useEffect(() => {
    if (!enabled) {
      setStatus('checking')
      setLastError(null)
      return
    }

    let cancelled = false

    async function check() {
      try {
        await fetchHermesAuthStatus()
        if (!cancelled) {
          setStatus('ok')
          setLastError(null)
        }
      } catch (err) {
        if (!cancelled) {
          setStatus('error')
<<<<<<< HEAD
          setLastError(err instanceof Error ? err.message : '连接失败')
=======
          setLastError(err instanceof Error ? err.message : 'Connection failed')
>>>>>>> upstream/main
        }
      }
    }

    check()
    const interval = setInterval(check, POLL_INTERVAL)
    return () => {
      cancelled = true
      clearInterval(interval)
    }
  }, [enabled])

  if (!enabled || status === 'ok' || status === 'checking') return null

  return (
    <div
      className="flex items-center justify-center gap-2 px-4 py-2 text-xs font-medium"
      style={{
        background: 'var(--theme-danger)',
        color: '#fff',
      }}
    >
      <span className="inline-block h-2 w-2 rounded-full bg-white/60 animate-pulse" />
<<<<<<< HEAD
      <span>Hermes Agent 无法连接{lastError ? ` — ${lastError}` : ''}</span>
=======
      <span>Hermes Agent unreachable{lastError ? ` — ${lastError}` : ''}</span>
>>>>>>> upstream/main
      <button
        type="button"
        onClick={() => {
          setStatus('checking')
          fetchHermesAuthStatus()
            .then(() => {
              setStatus('ok')
              setLastError(null)
            })
            .catch((err) => {
              setStatus('error')
              setLastError(
<<<<<<< HEAD
                err instanceof Error ? err.message : '连接失败',
=======
                err instanceof Error ? err.message : 'Connection failed',
>>>>>>> upstream/main
              )
            })
        }}
        className="ml-2 rounded px-2 py-0.5 text-xs font-semibold transition-opacity hover:opacity-80"
        style={{ background: 'rgba(255,255,255,0.2)' }}
      >
<<<<<<< HEAD
        重试
=======
        Retry
>>>>>>> upstream/main
      </button>
    </div>
  )
}
