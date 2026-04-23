/**
 * AuthGate — liquid-glass password overlay.
 *
 * Checks localStorage for a stored token. If missing, shows a full-screen
 * frosted-glass password prompt. On correct password, stores a token
 * and reveals the app.
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

  /* ── Liquid-glass password overlay ── */
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99998,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, rgba(11,14,20,.72) 0%, rgba(15,23,42,.65) 50%, rgba(11,14,20,.72) 100%)',
        backdropFilter: 'blur(40px) saturate(180%)',
        WebkitBackdropFilter: 'blur(40px) saturate(180%)',
        fontFamily: 'system-ui, -apple-system, sans-serif',
      }}
    >
      {/* Glass card */}
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 20,
          width: 400,
          padding: '40px 36px 36px',
          borderRadius: 24,
          background: 'linear-gradient(165deg, rgba(255,255,255,.08) 0%, rgba(255,255,255,.02) 100%)',
          border: '1px solid rgba(255,255,255,.12)',
          boxShadow: [
            '0 8px 32px rgba(0,0,0,.3)',
            'inset 0 1px 0 rgba(255,255,255,.1)',
            'inset 0 -1px 0 rgba(255,255,255,.04)',
            '0 0 0 0.5px rgba(255,255,255,.06)',
          ].join(', '),
          backdropFilter: 'blur(20px) saturate(140%)',
          WebkitBackdropFilter: 'blur(20px) saturate(140%)',
        }}
      >
        {/* Avatar with glow */}
        <div
          style={{
            position: 'relative',
            width: 72,
            height: 72,
            marginBottom: 4,
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: -6,
              borderRadius: 22,
              background: 'radial-gradient(circle, rgba(59,130,246,.25) 0%, transparent 70%)',
              filter: 'blur(8px)',
            }}
          />
          <img
            src="/munragirl.png"
            alt="munr"
            style={{
              position: 'relative',
              width: 80,
              height: 80,
              borderRadius: '50%',
              objectFit: 'cover',
              border: '1px solid rgba(255,255,255,.15)',
              boxShadow: '0 4px 24px rgba(37,87,183,.2)',
            }}
          />
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 22,
            fontWeight: 600,
            color: 'rgba(255,255,255,.92)',
            letterSpacing: '-0.02em',
            textShadow: '0 1px 8px rgba(0,0,0,.4)',
          }}
        >
          munr
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 13,
            color: 'rgba(255,255,255,.45)',
            textAlign: 'center',
            marginTop: -8,
            letterSpacing: '0.01em',
            lineHeight: 1.6,
          }}
        >
          请输入访问密码
        </div>

        {/* Input */}
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
            padding: '12px 16px',
            borderRadius: 12,
            border: '1px solid rgba(255,255,255,.1)',
            background: 'rgba(255,255,255,.05)',
            color: 'rgba(255,255,255,.9)',
            fontSize: 14,
            outline: 'none',
            boxSizing: 'border-box',
            transition: 'all 0.2s ease',
            boxShadow: 'inset 0 1px 2px rgba(0,0,0,.2)',
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = 'rgba(59,130,246,.4)'
            e.currentTarget.style.background = 'rgba(255,255,255,.07)'
            e.currentTarget.style.boxShadow =
              'inset 0 1px 2px rgba(0,0,0,.2), 0 0 0 3px rgba(59,130,246,.1)'
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = 'rgba(255,255,255,.1)'
            e.currentTarget.style.background = 'rgba(255,255,255,.05)'
            e.currentTarget.style.boxShadow = 'inset 0 1px 2px rgba(0,0,0,.2)'
          }}
        />

        {/* Error */}
        {error && (
          <div
            style={{
              fontSize: 12,
              color: 'rgba(248,113,113,.85)',
              marginTop: -10,
              textShadow: '0 1px 4px rgba(0,0,0,.3)',
            }}
          >
            {error}
          </div>
        )}

        {/* Submit button */}
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '12px 0',
            borderRadius: 12,
            border: '1px solid rgba(255,255,255,.1)',
            background:
              'linear-gradient(135deg, rgba(59,130,246,.6) 0%, rgba(99,102,241,.5) 100%)',
            color: 'rgba(255,255,255,.95)',
            fontSize: 14,
            fontWeight: 500,
            cursor: 'pointer',
            letterSpacing: '0.02em',
            boxShadow: [
              '0 2px 12px rgba(59,130,246,.2)',
              'inset 0 1px 0 rgba(255,255,255,.15)',
            ].join(', '),
            transition: 'all 0.2s ease',
            marginTop: 4,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background =
              'linear-gradient(135deg, rgba(59,130,246,.7) 0%, rgba(99,102,241,.6) 100%)'
            e.currentTarget.style.boxShadow =
              '0 4px 20px rgba(59,130,246,.3), inset 0 1px 0 rgba(255,255,255,.2)'
            e.currentTarget.style.transform = 'translateY(-1px)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background =
              'linear-gradient(135deg, rgba(59,130,246,.6) 0%, rgba(99,102,241,.5) 100%)'
            e.currentTarget.style.boxShadow =
              '0 2px 12px rgba(59,130,246,.2), inset 0 1px 0 rgba(255,255,255,.15)'
            e.currentTarget.style.transform = 'translateY(0)'
          }}
        >
          进入
        </button>
      </form>

      {/* Company info footer */}
      <div
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          padding: '24px 20px 28px',
          textAlign: 'center',
          pointerEvents: 'none',
        }}
      >
        <div
          style={{
            maxWidth: 520,
            margin: '0 auto',
            fontSize: 12,
            lineHeight: 1.7,
            color: 'rgba(255,255,255,.32)',
          }}
        >
          <div style={{ marginBottom: 8 }}>
            Munr is currently in active development and testing. This workspace is
            reserved for internal use and approved team members only. If you were
            directed here, please contact the administrator through the same
            channel you received this link to request access.
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 2,
              marginTop: 12,
            }}
          >
            <div style={{ fontWeight: 500, color: 'rgba(255,255,255,.4)' }}>
              Neurathm LLC
            </div>
            <div>30 N Gould St Ste N, Sheridan, 82801, Wyoming, USA</div>
            <div>D-U-N-S&reg;: 139-243-649</div>
            <div style={{ marginTop: 4, fontSize: 16, letterSpacing: 4 }}>
              🐔🐤🐦🐧🐥🦆🦢🦉🐨
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
