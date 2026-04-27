import { jsxs, jsx } from 'react/jsx-runtime'
import { u as usePageTitle } from './use-page-title-CljdUyfw.js'
import { useQuery } from '@tanstack/react-query'
import { useNavigate } from '@tanstack/react-router'
import { useMemo, useState, useEffect } from 'react'
import {
  ResponsiveContainer,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Area,
} from 'recharts'
import {
  m as useFeatureAvailable,
  q as useSettingsStore,
  s as openHamburgerMenu,
  v as applyTheme,
  o as getUnavailableReason,
  c as cn,
} from './router-Bxwn-W7k.js'
import { HugeiconsIcon } from '@hugeicons/react'
import { Sun02Icon, Moon02Icon } from '@hugeicons/core-free-icons'
import 'motion/react'
import 'react-dom'
import '@base-ui/react/merge-props'
import '@base-ui/react/use-render'
import 'class-variance-authority'
import 'clsx'
import 'tailwind-merge'
import 'zustand'
import 'zustand/middleware'
import '@base-ui/react/dialog'
import '@base-ui/react/input'
import '@base-ui/react/switch'
import '@base-ui/react/tabs'
import '@base-ui/react/alert-dialog'
import '@base-ui/react/menu'
import '@base-ui/react/collapsible'
import '@base-ui/react/scroll-area'
import '@base-ui/react/tooltip'
import 'shiki'
import 'marked'
import 'react-markdown'
import 'remark-breaks'
import 'remark-gfm'
import '@base-ui/react/autocomplete'
import '@base-ui/react/preview-card'
import 'react-joyride'
import 'zod'
import 'node:os'
import 'node:path'
import 'node:fs/promises'
import 'node:crypto'
import '@tanstack/router-core/ssr/client'
import 'node:child_process'
import 'node:url'
import 'node:events'
import 'node:fs'
import 'yaml'
import 'node:util'
function timeAgo(ts) {
  const diff = Date.now() / 1e3 - ts
  if (diff < 60) return 'just now'
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`
  return `${Math.floor(diff / 86400)}d ago`
}
function formatNumber(n) {
  if (n >= 1e6) return `${(n / 1e6).toFixed(1)}M`
  if (n >= 1e3) return `${(n / 1e3).toFixed(1)}K`
  return String(n)
}
function themeColor(name, fallback) {
  if (typeof document === 'undefined') return fallback
  const value = getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim()
  return value || fallback
}
function alpha(color, amount) {
  const pct = Math.max(0, Math.min(100, Math.round(amount * 100)))
  return `color-mix(in srgb, ${color} ${pct}%, transparent)`
}
function readDashboardPalette() {
  return {
    accent: themeColor('--theme-accent', '#6366f1'),
    accentSecondary: themeColor('--theme-accent-secondary', '#8b5cf6'),
    success: themeColor('--theme-success', '#22c55e'),
    warning: themeColor('--theme-warning', '#f59e0b'),
    danger: themeColor('--theme-danger', '#ef4444'),
    muted: themeColor('--theme-muted', '#6b7280'),
    border: themeColor('--theme-border', '#333333'),
    card: themeColor('--theme-card', '#1a1a2e'),
    text: themeColor('--theme-text', '#e5e7eb'),
  }
}
function useDashboardPalette() {
  const [palette, setPalette] = useState(readDashboardPalette)
  useEffect(() => {
    if (typeof document === 'undefined') return void 0
    const refresh = () => setPalette(readDashboardPalette())
    refresh()
    const observer = new MutationObserver(refresh)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme', 'style', 'class'],
    })
    return () => observer.disconnect()
  }, [])
  return palette
}
function GlassCard({
  title,
  titleRight,
  accentColor,
  noPadding,
  className,
  children,
}) {
  return /* @__PURE__ */ jsxs('div', {
    className: cn(
      'relative flex flex-col overflow-hidden rounded-xl border transition-colors',
      className,
    ),
    style: {
      background: 'var(--theme-card)',
      borderColor: 'var(--theme-border)',
    },
    children: [
      accentColor &&
        /* @__PURE__ */ jsx('div', {
          'aria-hidden': true,
          className: 'pointer-events-none absolute inset-x-0 top-0 h-[2px]',
          style: {
            background: `linear-gradient(90deg, ${accentColor}, ${accentColor}50, transparent)`,
          },
        }),
      title &&
        /* @__PURE__ */ jsxs('div', {
          className: 'flex items-center justify-between px-5 pt-4 pb-0',
          children: [
            /* @__PURE__ */ jsx('h3', {
              className:
                'text-[10px] font-semibold uppercase tracking-[0.15em] text-muted',
              children: title,
            }),
            titleRight,
          ],
        }),
      /* @__PURE__ */ jsx('div', {
        className: cn('flex-1', noPadding ? '' : 'px-5 pb-4 pt-3'),
        children,
      }),
    ],
  })
}
function EnhancedBadge({ label = 'Enhanced API' }) {
  return /* @__PURE__ */ jsx('span', {
    className:
      'inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em]',
    style: {
      border: `1px solid ${themeColor('--theme-accent-border', 'rgba(245, 158, 11, 0.28)')}`,
      background: themeColor(
        '--theme-accent-subtle',
        'rgba(245, 158, 11, 0.12)',
      ),
      color: themeColor('--theme-accent', '#f59e0b'),
    },
    children: label,
  })
}
function UnavailableWidget({ title, description }) {
  return /* @__PURE__ */ jsx(GlassCard, {
    title,
    titleRight: /* @__PURE__ */ jsx(EnhancedBadge, {}),
    accentColor: themeColor('--theme-warning', '#f59e0b'),
    className: 'h-full',
    children: /* @__PURE__ */ jsx('div', {
      className:
        'flex h-full min-h-[180px] items-center justify-center rounded-lg border border-dashed border-[var(--theme-border)] bg-[var(--theme-card2)] px-4 text-center',
      children: /* @__PURE__ */ jsx('p', {
        className: 'text-sm text-muted',
        children: description,
      }),
    }),
  })
}
function MetricTile({ label, value, sub, icon, accentColor }) {
  return /* @__PURE__ */ jsx(GlassCard, {
    accentColor,
    children: /* @__PURE__ */ jsxs('div', {
      className: 'flex items-start justify-between',
      children: [
        /* @__PURE__ */ jsxs('div', {
          className: 'flex flex-col gap-0.5',
          children: [
            /* @__PURE__ */ jsx('div', {
              className:
                'text-[10px] font-semibold uppercase tracking-[0.15em] text-muted',
              children: label,
            }),
            /* @__PURE__ */ jsx('div', {
              className: 'text-2xl font-bold tabular-nums text-ink',
              children: value,
            }),
            sub &&
              /* @__PURE__ */ jsx('div', {
                className: 'text-[11px] text-muted',
                children: sub,
              }),
          ],
        }),
        /* @__PURE__ */ jsx('div', {
          className:
            'flex size-8 items-center justify-center rounded-lg text-base',
          style: { background: `${accentColor}15` },
          children: icon,
        }),
      ],
    }),
  })
}
function ActivityChart({ sessions, palette }) {
  const chartData = useMemo(() => {
    const dayMap = /* @__PURE__ */ new Map()
    const now = Date.now() / 1e3
    for (let i = 13; i >= 0; i--) {
      const d = new Date((now - i * 86400) * 1e3)
      const key = d.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
      })
      dayMap.set(key, { sessions: 0, messages: 0 })
    }
    for (const s of sessions) {
      if (!s.started_at) continue
      const d = new Date(s.started_at * 1e3)
      const key = d.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
      })
      const entry = dayMap.get(key)
      if (entry) {
        entry.sessions += 1
        entry.messages += s.message_count ?? 0
      }
    }
    const all = Array.from(dayMap.entries()).map(([date, data]) => ({
      date,
      ...data,
    }))
    let firstActive = all.findIndex((d) => d.sessions > 0 || d.messages > 0)
    if (firstActive > 0) firstActive = Math.max(0, firstActive - 1)
    return firstActive > 0 ? all.slice(firstActive) : all
  }, [sessions])
  return /* @__PURE__ */ jsxs(GlassCard, {
    title: 'Activity',
    titleRight: /* @__PURE__ */ jsx('span', {
      className: 'text-[10px] text-muted',
      children: '14 days',
    }),
    accentColor: palette.accent,
    className: 'h-full',
    children: [
      /* @__PURE__ */ jsx('div', {
        className: 'h-[200px] w-full -ml-2',
        children: /* @__PURE__ */ jsx(ResponsiveContainer, {
          width: '100%',
          height: '100%',
          children: /* @__PURE__ */ jsxs(AreaChart, {
            data: chartData,
            margin: { top: 8, right: 32, left: -16, bottom: 0 },
            children: [
              /* @__PURE__ */ jsxs('defs', {
                children: [
                  /* @__PURE__ */ jsxs('linearGradient', {
                    id: 'g-sessions',
                    x1: '0',
                    y1: '0',
                    x2: '0',
                    y2: '1',
                    children: [
                      /* @__PURE__ */ jsx('stop', {
                        offset: '0%',
                        stopColor: palette.accent,
                        stopOpacity: 0.3,
                      }),
                      /* @__PURE__ */ jsx('stop', {
                        offset: '100%',
                        stopColor: palette.accent,
                        stopOpacity: 0,
                      }),
                    ],
                  }),
                  /* @__PURE__ */ jsxs('linearGradient', {
                    id: 'g-messages',
                    x1: '0',
                    y1: '0',
                    x2: '0',
                    y2: '1',
                    children: [
                      /* @__PURE__ */ jsx('stop', {
                        offset: '0%',
                        stopColor: palette.success,
                        stopOpacity: 0.2,
                      }),
                      /* @__PURE__ */ jsx('stop', {
                        offset: '100%',
                        stopColor: palette.success,
                        stopOpacity: 0,
                      }),
                    ],
                  }),
                ],
              }),
              /* @__PURE__ */ jsx(CartesianGrid, {
                strokeDasharray: '3 3',
                stroke: palette.border,
                opacity: 0.45,
              }),
              /* @__PURE__ */ jsx(XAxis, {
                dataKey: 'date',
                tick: { fontSize: 10, fill: palette.muted },
                axisLine: false,
                tickLine: false,
              }),
              /* @__PURE__ */ jsx(YAxis, {
                yAxisId: 'left',
                tick: { fontSize: 10, fill: palette.success },
                axisLine: false,
                tickLine: false,
                allowDecimals: false,
                width: 28,
              }),
              /* @__PURE__ */ jsx(YAxis, {
                yAxisId: 'right',
                orientation: 'right',
                tick: { fontSize: 10, fill: palette.accent },
                axisLine: false,
                tickLine: false,
                allowDecimals: false,
                width: 28,
              }),
              /* @__PURE__ */ jsx(Tooltip, {
                contentStyle: {
                  background: palette.card,
                  border: `1px solid ${palette.border}`,
                  borderRadius: '8px',
                  fontSize: '11px',
                },
                labelStyle: { color: palette.muted, fontSize: '10px' },
              }),
              /* @__PURE__ */ jsx(Area, {
                yAxisId: 'left',
                type: 'monotone',
                dataKey: 'messages',
                stroke: palette.success,
                fill: 'url(#g-messages)',
                strokeWidth: 1.5,
                dot: false,
              }),
              /* @__PURE__ */ jsx(Area, {
                yAxisId: 'right',
                type: 'monotone',
                dataKey: 'sessions',
                stroke: palette.accent,
                fill: 'url(#g-sessions)',
                strokeWidth: 2,
                dot: false,
              }),
            ],
          }),
        }),
      }),
      /* @__PURE__ */ jsxs('div', {
        className: 'mt-2 flex items-center gap-5 text-[10px] text-muted',
        children: [
          /* @__PURE__ */ jsxs('span', {
            className: 'flex items-center gap-1.5',
            children: [
              /* @__PURE__ */ jsx('span', {
                className: 'size-2 rounded-full',
                style: { background: palette.accent },
              }),
              'Sessions',
            ],
          }),
          /* @__PURE__ */ jsxs('span', {
            className: 'flex items-center gap-1.5',
            children: [
              /* @__PURE__ */ jsx('span', {
                className: 'size-2 rounded-full',
                style: { background: palette.success },
              }),
              'Messages',
            ],
          }),
        ],
      }),
    ],
  })
}
function ModelCard({ palette }) {
  const sessionsAvailable = useFeatureAvailable('sessions')
  const configAvailable = useFeatureAvailable('config')
  const configQuery = useQuery({
    queryKey: ['hermes-config'],
    queryFn: async () => {
      const res = await fetch('/api/hermes-config')
      if (!res.ok) return null
      return res.json()
    },
    staleTime: 3e4,
    enabled: configAvailable,
  })
  const config = configQuery.data
  const modelName = config?.activeModel ?? '—'
  const provider = config?.activeProvider ?? '—'
  const configBlock = config?.config
  const modelBlock = configBlock?.model
  const baseUrl = modelBlock?.base_url ?? configBlock?.base_url ?? ''
  const connected = sessionsAvailable
  const fallbackBlock = config?.fallback_model
  const fallbackModel = fallbackBlock?.model
  if (!configAvailable) {
    return /* @__PURE__ */ jsx(UnavailableWidget, {
      title: 'Model',
      description: getUnavailableReason('config'),
    })
  }
  return /* @__PURE__ */ jsx(GlassCard, {
    title: 'Model',
    titleRight: /* @__PURE__ */ jsxs('span', {
      className: cn(
        'inline-flex items-center gap-1.5 text-[10px] font-semibold px-2 py-0.5 rounded-full',
        connected
          ? 'text-emerald-400 bg-emerald-500/10'
          : 'text-red-400 bg-red-500/10',
      ),
      children: [
        /* @__PURE__ */ jsx('span', {
          className: cn(
            'size-1.5 rounded-full',
            connected ? 'bg-emerald-500' : 'bg-red-500',
          ),
        }),
        connected ? 'Online' : 'Offline',
      ],
    }),
    accentColor: connected ? palette.success : palette.danger,
    className: 'h-full',
    children: /* @__PURE__ */ jsxs('div', {
      className: 'space-y-2',
      children: [
        /* @__PURE__ */ jsxs('div', {
          className:
            'flex items-center gap-3 rounded-lg p-2.5 bg-[var(--theme-card2)] border border-[var(--theme-border)]',
          children: [
            /* @__PURE__ */ jsx('div', {
              className:
                'flex size-7 items-center justify-center rounded-md text-sm',
              style: {
                background: alpha(palette.accent, 0.1),
                color: palette.accent,
              },
              children: '🤖',
            }),
            /* @__PURE__ */ jsxs('div', {
              className: 'min-w-0 flex-1',
              children: [
                /* @__PURE__ */ jsx('div', {
                  className:
                    'font-mono text-[13px] font-bold text-ink truncate',
                  children: typeof modelName === 'string' ? modelName : '—',
                }),
                /* @__PURE__ */ jsxs('div', {
                  className: 'text-[10px] text-muted font-mono truncate',
                  children: [provider, baseUrl ? ` · ${baseUrl}` : ''],
                }),
              ],
            }),
          ],
        }),
        fallbackModel &&
          /* @__PURE__ */ jsxs('div', {
            className:
              'flex items-center gap-3 rounded-lg p-2.5 bg-[var(--theme-card2)] border border-[var(--theme-border)]',
            children: [
              /* @__PURE__ */ jsx('div', {
                className:
                  'flex size-7 items-center justify-center rounded-md bg-amber-500/10 text-sm',
                children: '🔄',
              }),
              /* @__PURE__ */ jsxs('div', {
                className: 'min-w-0 flex-1',
                children: [
                  /* @__PURE__ */ jsx('div', {
                    className: 'font-mono text-[13px] text-ink truncate',
                    children: fallbackModel,
                  }),
                  /* @__PURE__ */ jsx('div', {
                    className: 'text-[10px] text-muted font-mono truncate',
                    children: fallbackBlock?.provider ?? '',
                  }),
                ],
              }),
            ],
          }),
      ],
    }),
  })
}
function SkillsWidget({ palette }) {
  const skillsAvailable = useFeatureAvailable('skills')
  const skillsQuery = useQuery({
    queryKey: ['hermes-skills'],
    queryFn: async () => {
      const res = await fetch(
        '/api/skills?tab=installed&limit=8&summary=search',
      )
      if (!res.ok) return []
      const data = await res.json()
      return data?.skills ?? []
    },
    staleTime: 3e4,
    enabled: skillsAvailable,
  })
  const skills = skillsQuery.data ?? []
  if (!skillsAvailable) {
    return /* @__PURE__ */ jsx(UnavailableWidget, {
      title: 'Skills',
      description: getUnavailableReason('skills'),
    })
  }
  return /* @__PURE__ */ jsx(GlassCard, {
    title: 'Skills',
    titleRight: /* @__PURE__ */ jsxs('span', {
      className: 'text-[10px] text-muted',
      children: [skills.length, ' installed'],
    }),
    accentColor: palette.warning,
    children:
      skills.length === 0
        ? /* @__PURE__ */ jsx('div', {
            className: 'text-xs text-neutral-400 py-4 text-center',
            children: 'No skills installed',
          })
        : /* @__PURE__ */ jsx('div', {
            className: 'space-y-1.5',
            children: skills.slice(0, 6).map((skill, i) =>
              /* @__PURE__ */ jsxs(
                'div',
                {
                  className:
                    'flex items-center gap-2 rounded-lg px-2.5 py-1.5 hover:bg-[var(--theme-card2)] transition-colors',
                  children: [
                    /* @__PURE__ */ jsx('span', {
                      className: 'text-xs',
                      children: '📦',
                    }),
                    /* @__PURE__ */ jsx('span', {
                      className: 'text-xs font-medium text-ink truncate flex-1',
                      children: String(skill.name ?? 'Unnamed'),
                    }),
                    skill.enabled !== false &&
                      /* @__PURE__ */ jsx('span', {
                        className: 'size-1.5 rounded-full bg-emerald-500/60',
                      }),
                  ],
                },
                String(skill.name ?? i),
              ),
            ),
          }),
  })
}
function QuickAction({ label, icon, onClick, accentColor, disabled, badge }) {
  return /* @__PURE__ */ jsxs('button', {
    type: 'button',
    onClick,
    disabled,
    className: cn(
      'relative overflow-hidden flex min-h-12 w-full items-center gap-3 rounded-xl border px-4 py-3 text-sm font-medium transition-all',
      'border-[var(--theme-border)] bg-[var(--theme-card)] text-left',
      disabled
        ? 'cursor-not-allowed opacity-60'
        : 'hover:border-[var(--theme-accent-border)] hover:scale-[1.01] active:scale-[0.99]',
    ),
    children: [
      /* @__PURE__ */ jsx('div', {
        className:
          'flex size-7 shrink-0 items-center justify-center rounded-md text-sm',
        style: { background: `${accentColor}18` },
        children: icon,
      }),
      /* @__PURE__ */ jsx('span', {
        className: 'min-w-0 flex-1 text-xs font-semibold',
        style: { color: 'var(--theme-text)' },
        children: label,
      }),
      badge
        ? /* @__PURE__ */ jsx('span', {
            className:
              'ml-auto shrink-0 rounded-full border border-amber-300 bg-amber-100 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-[0.12em] text-amber-700',
            children: badge,
          })
        : null,
      /* @__PURE__ */ jsx('div', {
        className: 'absolute bottom-0 left-0 right-0 h-[2px]',
        style: {
          background: `linear-gradient(90deg, ${accentColor}, transparent)`,
        },
      }),
    ],
  })
}
function SessionRow({ session, maxTokens, onClick, palette }) {
  const tokens = (session.input_tokens ?? 0) + (session.output_tokens ?? 0)
  const msgs = session.message_count ?? 0
  const tools = session.tool_call_count ?? 0
  const barWidth = maxTokens > 0 ? Math.max(1, (tokens / maxTokens) * 100) : 0
  return /* @__PURE__ */ jsxs('button', {
    type: 'button',
    onClick,
    className:
      'w-full text-left px-4 py-2.5 rounded-lg hover:bg-[var(--theme-card2)] transition-colors group',
    children: [
      /* @__PURE__ */ jsxs('div', {
        className: 'flex items-center gap-2 mb-1',
        children: [
          /* @__PURE__ */ jsx('span', {
            className:
              'text-[13px] font-medium text-ink truncate flex-1 group-hover:text-ink',
            children: session.title || session.id,
          }),
          /* @__PURE__ */ jsx('span', {
            className: 'text-[10px] tabular-nums text-muted shrink-0',
            children: session.started_at ? timeAgo(session.started_at) : '',
          }),
        ],
      }),
      /* @__PURE__ */ jsxs('div', {
        className:
          'mb-1.5 flex items-center gap-2 text-[10px] text-neutral-500',
        children: [
          session.model &&
            /* @__PURE__ */ jsx('span', {
              className:
                'rounded px-1.5 py-0.5 font-mono text-[9px] font-medium',
              style: {
                background: alpha(palette.accent, 0.1),
                color: palette.accent,
              },
              children: session.model,
            }),
          /* @__PURE__ */ jsxs('span', { children: [msgs, ' msgs'] }),
          tools > 0 &&
            /* @__PURE__ */ jsxs('span', { children: [tools, ' tools'] }),
          tokens > 0 &&
            /* @__PURE__ */ jsxs('span', {
              children: [formatNumber(tokens), ' tok'],
            }),
        ],
      }),
      /* @__PURE__ */ jsx('div', {
        className:
          'h-[3px] rounded-full w-full bg-[var(--theme-border)] overflow-hidden',
        children: /* @__PURE__ */ jsx('div', {
          className: 'h-full rounded-full transition-all duration-700',
          style: {
            width: `${barWidth}%`,
            background: `linear-gradient(90deg, ${palette.accent}, ${palette.accentSecondary})`,
          },
        }),
      }),
    ],
  })
}
function DashboardScreen() {
  const navigate = useNavigate()
  const sessionsAvailable = useFeatureAvailable('sessions')
  const skillsAvailable = useFeatureAvailable('skills')
  const sessionsQuery = useQuery({
    // Use a dedicated query key — NOT chatQueryKeys.sessions — to avoid
    // cache collisions with the chat sidebar which fetches fewer sessions
    // and overwrites the dashboard's larger dataset.
    // Also use the workspace proxy (/api/sessions) rather than the server-side
    // listSessions() — the latter calls the gateway via HERMES_API which is
    // only available server-side and returns nothing when called from the client.
    queryKey: ['dashboard', 'sessions'],
    queryFn: async () => {
      const res = await fetch('/api/sessions?limit=200&offset=0')
      if (!res.ok) return []
      const data = await res.json()
      return (data.sessions ?? []).map((s) => ({
        id: s.key ?? s.id,
        started_at: s.startedAt ? s.startedAt / 1e3 : void 0,
        message_count: s.message_count ?? 0,
        tool_call_count: s.tool_call_count ?? 0,
        input_tokens: s.tokenCount ?? 0,
        output_tokens: 0,
      }))
    },
    staleTime: 1e4,
    refetchInterval: 3e4,
    enabled: sessionsAvailable,
  })
  const sessions = sessionsQuery.data ?? []
  const stats = useMemo(() => {
    let totalMessages = 0,
      totalToolCalls = 0,
      totalTokens = 0
    for (const s of sessions) {
      totalMessages += s.message_count ?? 0
      totalToolCalls += s.tool_call_count ?? 0
      totalTokens += (s.input_tokens ?? 0) + (s.output_tokens ?? 0)
    }
    return {
      totalSessions: sessions.length,
      totalMessages,
      totalToolCalls,
      totalTokens,
    }
  }, [sessions])
  const recentSessions = useMemo(
    () =>
      [...sessions]
        .sort((a, b) => (b.started_at ?? 0) - (a.started_at ?? 0))
        .slice(0, 6),
    [sessions],
  )
  const maxTokens = useMemo(() => {
    let max = 0
    for (const s of recentSessions) {
      const t = (s.input_tokens ?? 0) + (s.output_tokens ?? 0)
      if (t > max) max = t
    }
    return max
  }, [recentSessions])
  const costEstimate = `~$${((stats.totalTokens / 1e6) * 5).toFixed(2)}`
  const palette = useDashboardPalette()
  const updateSettings = useSettingsStore((state) => state.updateSettings)
  const [isDark, setIsDark] = useState(() => {
    if (typeof document === 'undefined') return true
    const dt = document.documentElement.getAttribute('data-theme') || ''
    return !dt.endsWith('-light')
  })
  return /* @__PURE__ */ jsxs('div', {
    className: 'min-h-full',
    children: [
      /* @__PURE__ */ jsxs('div', {
        className:
          'md:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-2 h-12',
        style: { paddingTop: 'env(safe-area-inset-top, 0px)' },
        children: [
          /* @__PURE__ */ jsx('button', {
            type: 'button',
            'aria-label': 'Open navigation menu',
            onClick: openHamburgerMenu,
            className:
              'flex items-center justify-center w-11 h-11 rounded-xl active:bg-white/10 transition-colors touch-manipulation',
            children: /* @__PURE__ */ jsx('svg', {
              width: '20',
              height: '16',
              viewBox: '0 0 20 16',
              fill: 'none',
              className: 'opacity-70',
              style: { color: 'var(--color-ink, #111)' },
              children: /* @__PURE__ */ jsx('path', {
                d: 'M1 1.5H19M1 8H19M1 14.5H13',
                stroke: 'currentColor',
                strokeWidth: '1.6',
                strokeLinecap: 'round',
              }),
            }),
          }),
          /* @__PURE__ */ jsx('button', {
            type: 'button',
            'aria-label': 'Toggle theme',
            onClick: () => {
              const LIGHT_DARK_PAIRS = {
                'hermes-nous': 'hermes-nous-light',
                'hermes-nous-light': 'hermes-nous',
                'hermes-official': 'hermes-official-light',
                'hermes-official-light': 'hermes-official',
                'hermes-classic': 'hermes-classic-light',
                'hermes-classic-light': 'hermes-classic',
                'hermes-slate': 'hermes-slate-light',
                'hermes-slate-light': 'hermes-slate',
              }
              const cur =
                document.documentElement.getAttribute('data-theme') ||
                'hermes-official'
              const nextDataTheme =
                LIGHT_DARK_PAIRS[cur] ||
                (isDark ? 'hermes-official-light' : 'hermes-official')
              import('./router-Bxwn-W7k.js')
                .then((n) => n.Q)
                .then(({ setTheme }) => {
                  setTheme(nextDataTheme)
                })
              const nextMode = nextDataTheme.endsWith('-light')
                ? 'light'
                : 'dark'
              applyTheme()
              updateSettings({ theme: nextMode })
              setIsDark(nextMode === 'dark')
            },
            className:
              'flex items-center justify-center w-11 h-11 rounded-xl active:bg-white/10 transition-colors touch-manipulation',
            style: { color: 'var(--theme-muted)' },
            children: /* @__PURE__ */ jsx(HugeiconsIcon, {
              icon: isDark ? Sun02Icon : Moon02Icon,
              size: 20,
              strokeWidth: 1.5,
            }),
          }),
        ],
      }),
      /* @__PURE__ */ jsxs('div', {
        className:
          'px-4 pt-14 md:pt-4 py-4 md:px-8 md:py-6 lg:px-10 space-y-5 pb-28',
        children: [
          /* @__PURE__ */ jsxs('div', {
            className: 'flex flex-col items-center gap-3 py-3',
            children: [
              /* @__PURE__ */ jsx('img', {
                src: '/hermes-avatar.webp',
                alt: 'munr',
                className:
                  'size-12 md:size-14 rounded-md border border-[var(--theme-border)]',
                style: { padding: '3px', background: 'var(--theme-card)' },
              }),
              /* @__PURE__ */ jsx('p', {
                className: 'micro-label',
                style: { color: 'var(--theme-muted)' },
                children: 'Hermes Workspace',
              }),
              /* @__PURE__ */ jsxs('div', {
                className:
                  'mt-1 grid w-full max-w-2xl grid-cols-2 gap-2 sm:grid-cols-4',
                children: [
                  /* @__PURE__ */ jsx(QuickAction, {
                    label: 'New Chat',
                    icon: '💬',
                    accentColor: palette.accent,
                    onClick: () =>
                      navigate({
                        to: '/chat/$sessionKey',
                        params: { sessionKey: 'new' },
                      }),
                  }),
                  /* @__PURE__ */ jsx(QuickAction, {
                    label: 'Terminal',
                    icon: '💻',
                    accentColor: palette.success,
                    onClick: () => navigate({ to: '/terminal' }),
                  }),
                  /* @__PURE__ */ jsx(QuickAction, {
                    label: 'Skills',
                    icon: '🧩',
                    accentColor: palette.warning,
                    onClick: () => navigate({ to: '/skills' }),
                    disabled: !skillsAvailable,
                    badge: !skillsAvailable ? 'Enhanced' : void 0,
                  }),
                  /* @__PURE__ */ jsx(QuickAction, {
                    label: 'Settings',
                    icon: '⚙️',
                    accentColor: palette.accentSecondary,
                    onClick: () => navigate({ to: '/settings' }),
                  }),
                ],
              }),
            ],
          }),
          sessionsAvailable
            ? /* @__PURE__ */ jsxs('div', {
                className: 'grid grid-cols-2 lg:grid-cols-4 gap-3',
                children: [
                  /* @__PURE__ */ jsx(MetricTile, {
                    label: 'Sessions',
                    value: formatNumber(stats.totalSessions),
                    icon: '💬',
                    accentColor: palette.accent,
                  }),
                  /* @__PURE__ */ jsx(MetricTile, {
                    label: 'Messages',
                    value: formatNumber(stats.totalMessages),
                    icon: '✉️',
                    accentColor: palette.success,
                  }),
                  /* @__PURE__ */ jsx(MetricTile, {
                    label: 'Tool Calls',
                    value: formatNumber(stats.totalToolCalls),
                    icon: '🔧',
                    accentColor: palette.warning,
                  }),
                  /* @__PURE__ */ jsx(MetricTile, {
                    label: 'Tokens',
                    value: formatNumber(stats.totalTokens),
                    sub: costEstimate,
                    icon: '⚡',
                    accentColor: palette.accentSecondary,
                  }),
                ],
              })
            : /* @__PURE__ */ jsx(UnavailableWidget, {
                title: 'Workspace Analytics',
                description: getUnavailableReason('sessions'),
              }),
          /* @__PURE__ */ jsxs('div', {
            className: 'grid grid-cols-1 lg:grid-cols-12 gap-3',
            children: [
              /* @__PURE__ */ jsx('div', {
                className: 'lg:col-span-5',
                children: sessionsAvailable
                  ? /* @__PURE__ */ jsx(ActivityChart, { sessions, palette })
                  : /* @__PURE__ */ jsx(UnavailableWidget, {
                      title: 'Activity',
                      description: getUnavailableReason('sessions'),
                    }),
              }),
              /* @__PURE__ */ jsx('div', {
                className: 'lg:col-span-4',
                children: /* @__PURE__ */ jsx(ModelCard, { palette }),
              }),
              /* @__PURE__ */ jsx('div', {
                className: 'lg:col-span-3',
                children: /* @__PURE__ */ jsx(SkillsWidget, { palette }),
              }),
            ],
          }),
          sessionsAvailable
            ? /* @__PURE__ */ jsx(GlassCard, {
                title: 'Recent Sessions',
                titleRight: /* @__PURE__ */ jsx('button', {
                  type: 'button',
                  className:
                    'text-[10px] text-muted hover:text-neutral-300 transition-colors',
                  onClick: () =>
                    navigate({
                      to: '/chat/$sessionKey',
                      params: { sessionKey: 'main' },
                    }),
                  children: 'View all →',
                }),
                accentColor: palette.accent,
                noPadding: true,
                children: /* @__PURE__ */ jsx('div', {
                  className: 'py-1',
                  children:
                    recentSessions.length === 0
                      ? /* @__PURE__ */ jsx('div', {
                          className:
                            'text-xs text-neutral-400 py-8 text-center',
                          children: 'No sessions yet — start a chat!',
                        })
                      : recentSessions.map((s) =>
                          /* @__PURE__ */ jsx(
                            SessionRow,
                            {
                              session: s,
                              maxTokens,
                              palette,
                              onClick: () =>
                                navigate({
                                  to: '/chat/$sessionKey',
                                  params: { sessionKey: s.id },
                                }),
                            },
                            s.id,
                          ),
                        ),
                }),
              })
            : /* @__PURE__ */ jsx(UnavailableWidget, {
                title: 'Recent Sessions',
                description: getUnavailableReason('sessions'),
              }),
        ],
      }),
    ],
  })
}
function DashboardRoute() {
  usePageTitle('Dashboard')
  return /* @__PURE__ */ jsx(DashboardScreen, {})
}
export { DashboardRoute as component }
