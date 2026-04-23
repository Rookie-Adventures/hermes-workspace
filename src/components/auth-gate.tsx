/**
 * AuthGate — simple password overlay.
 *
 * Checks localStorage for a stored token. If missing, shows a full-screen
 * password prompt. On correct password, stores a token and reveals the app.
 *
 * The expected password hash is injected server-side via window.__AUTH_HASH__.
 * If not present, the gate is disabled (open access).
 */

import { useState, useEffect, useCallback, type ReactNode } from 'react'

const STORAGE_KEY = 'munr-auth-token'

/* SHA-256 helper */
async function sha256(str: string): Promise<string> {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(str))
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
}

/* Read hash injected by server-entry.js via <script> tag */
const EXPECTED_HASH: string =
  typeof window !== 'undefined' && (window as any).__AUTH_HASH__
    ? (window as any).__AUTH_HASH__
    : ''

export function AuthGate({ children }: { children: ReactNode }) {
  const [unlocked, setUnlocked] = useState(false)
  const [checking, setChecking] = useState(true)
  const [error, setError] = useState('')
  const [pwd, setPwd] = useState('')

  /* No password configured → skip gate */
  const gateEnabled = EXPECTED_HASH.length > 0

  /* Check existing token on mount */
  useEffect(() => {
    if (!gateEnabled) {
      setUnlocked(true)
      setChecking(false)
      return
    }
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      setUnlocked(true)
    }
    setChecking(false)
  }, [gateEnabled])

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault()
      if (!pwd.trim()) return
      const hash = await sha256(pwd)
      if (hash === EXPECTED_HASH) {
        localStorage.setItem(STORAGE_KEY, '1')
        setUnlocked(true)
        setError('')
      } else {
        setError('密码错误')
        setPwd('')
      }
    },
    [pwd],
  )

  /* While checking localStorage, render nothing (splash screen still visible) */
  if (checking) return null

  /* Gate disabled or already unlocked → render app */
  if (!gateEnabled || unlocked) return <>{children}</>

  /* ── Password overlay ── */
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99998,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--color-bg, #0B0E14)',
        fontFamily: 'system-ui, -apple-system, sans-serif',
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 16,
          width: 320,
        }}
      >
        <img
          src="/hermes-avatar.webp"
          alt="munr"
          style={{
            width: 64,
            height: 64,
            borderRadius: 14,
            marginBottom: 4,
            filter: 'drop-shadow(0 4px 24px rgba(37,87,183,.35))',
          }}
        />
        <div
          style={{
            fontSize: 20,
            fontWeight: 600,
            color: 'var(--color-txt, #E8E8E8)',
          }}
        >
          munr
        </div>
        <div
          style={{
            fontSize: 13,
            color: 'var(--color-muted, #6F7D96)',
            textAlign: 'center',
            marginTop: -4,
          }}
        >
          请输入访问密码
        </div>

        <input
          type="password"
          value={pwd}
          onChange={(e) => {
            setPwd(e.target.value)
            setError('')
          }}
          placeholder="Password"
          autoFocus
          autoComplete="current-password"
          style={{
            width: '100%',
            padding: '10px 14px',
            borderRadius: 8,
            border: '1px solid var(--color-border, rgba(255,255,255,.1))',
            background: 'var(--color-input-bg, rgba(255,255,255,.06))',
            color: 'var(--color-txt, #E8E8E8)',
            fontSize: 14,
            outline: 'none',
            boxSizing: 'border-box',
          }}
        />

        {error && (
          <div style={{ fontSize: 12, color: '#f87171', marginTop: -8 }}>{error}</div>
        )}

        <button
          type="submit"
          style={{
            width: '100%',
            padding: '10px 0',
            borderRadius: 8,
            border: 'none',
            background: 'var(--color-accent, #3b82f6)',
            color: '#fff',
            fontSize: 14,
            fontWeight: 500,
            cursor: 'pointer',
          }}
        >
          进入
        </button>
      </form>
    </div>
  )
}
