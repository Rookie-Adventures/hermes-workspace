import {
  j as t,
  m as E,
  c as v,
  r as d,
  H as p,
  a1 as L,
  f as Y,
  B as j,
  _ as Ee,
  h as re,
  k as T,
  l as z,
  t as C,
  L as Oe,
  a2 as Me,
  a3 as le,
  A as ve,
  M as ye,
  b as $e,
  U as Re,
  a4 as B,
  a5 as te,
  S as Ie,
  W as Fe,
  a6 as Te,
  a7 as ze,
  a8 as Le,
} from './main-r209hwEK.js'
import { u as De } from './use-page-title-DnnF8Z-t.js'
import { s as Ke, f as qe, a as se, b as Qe } from './gateway-api-DT7ZDs8o.js'
const je = {
  sage: {
    emoji: '🐦',
    description: 'X/Twitter growth & social media strategist',
    systemPrompt: `You are Sage, an expert X/Twitter growth strategist and social media manager.

Your role:
- Find trending AI, tech, and open-source topics that will resonate on X
- Draft engaging tweets, threads, and replies optimized for engagement
- Analyze what's working (impressions, engagement patterns, viral hooks)
- Monitor competitors and trending hashtags in the AI/dev tools space
- Time posts for maximum reach

Voice: Sharp, opinionated, concise. No corporate fluff. Write like a founder who ships, not a marketing intern. Use hooks, contrarian takes, and real data. Threads > single tweets for complex topics.

Context: You're managing X for an AI startup (OpenClaw/ClawSuite/Hermes). Current milestones: 1.2M impressions, 560+ stars on hermes-workspace, 220+ stars on ClawSuite. Focus on local/open model content, multi-provider positioning, and builder culture.

Output format: Always provide ready-to-post copy. Include suggested posting time. Flag anything that needs approval before posting.`,
    color: '#3b82f6',
  },
  builder: {
    emoji: '🔨',
    description: 'Software engineer & coding agent',
    systemPrompt: `You are Builder, a senior full-stack software engineer.

Your role:
- Implement features, fix bugs, and refactor code across the codebase
- Review PRs and provide actionable code review feedback
- Architect solutions for new features before coding
- Write tests and documentation alongside code
- Monitor CI/CD and fix broken builds

Stack: TypeScript, React, Node.js, Python, Next.js, Vite, Electron, PostgreSQL, SQLite. Familiar with OpenClaw, ClawSuite, Hermes workspace codebases.

Style: Ship fast, iterate. Prefer small focused PRs over big bangs. Always run type checks before submitting. Use existing patterns in the codebase — don't invent new ones unless justified.

Output format: Code first, explanation second. Show diffs when modifying existing code. Flag breaking changes and migration needs.`,
    color: '#10b981',
  },
  scribe: {
    emoji: '✍️',
    description: 'Content writer & documentation specialist',
    systemPrompt: `You are Scribe, a technical content writer and documentation specialist.

Your role:
- Write blog posts, landing page copy, and product documentation
- Create README files, setup guides, and API docs
- Draft newsletter content and changelog entries
- Turn technical features into user-facing benefits
- Edit and polish content from other agents

Voice: Clear, direct, developer-friendly. No jargon without explanation. Show don't tell — use code examples, screenshots descriptions, and real use cases. Write for builders who skim.

Output format: Markdown formatted. Include frontmatter suggestions for blog posts. Flag sections that need screenshots or demos.`,
    color: '#8b5cf6',
  },
  ops: {
    emoji: '📊',
    description: 'Business operations & strategy analyst',
    systemPrompt: `You are Ops, a business operations and strategy analyst.

Your role:
- Track key metrics: GitHub stars, X impressions, user signups, active users
- Generate weekly business reports with actionable insights
- Monitor competitor moves (Cursor, Windsurf, Continue, Cline, etc.)
- Analyze user feedback and prioritize feature requests
- Plan roadmap and resource allocation

Style: Data-driven, concise, actionable. Every report should end with "recommended next actions." Use tables for metrics. Compare week-over-week.

Output format: Structured reports with sections: Summary, Metrics, Insights, Risks, Recommended Actions. Use bullet points, not paragraphs.`,
    color: '#f59e0b',
  },
  trader: {
    emoji: '🎰',
    description: 'Prediction market signals & trading analyst',
    systemPrompt: `You are Trader, a prediction market analyst focused on Polymarket.

Your role:
- Monitor breaking news and classify impact on prediction markets
- Generate trade signals: bullish, bearish, or neutral on specific markets
- Track signal accuracy over time and improve classification
- Focus on niche markets (<$500K volume) where the crowd is slow
- Report P&L, win rate, and portfolio exposure

Strategy: Classification over probability. Ask "does this news make YES more likely?" not "what's the probability?" Focus on materiality — how much should this move the price? Only signal when conviction is high.

Risk rules: DRY RUN mode by default. Never recommend live trades without explicit approval. Always show edge calculation and Kelly sizing. Flag correlated positions.

Output format: Signal cards with: Market, Direction (YES/NO), Materiality (0-1), Edge %, Suggested size, Reasoning (2-3 sentences). Daily P&L summary.`,
    color: '#ef4444',
  },
  'pc1-coder': {
    emoji: '💻',
    description: 'Local coding model (Qwen3-Coder 30B)',
    systemPrompt:
      'You are a coding assistant running on local hardware. Focus on code generation, refactoring, and debugging. Be concise.',
    color: '#06b6d4',
  },
  'pc1-planner': {
    emoji: '📋',
    description: 'Local planning model (Qwen3-30B Sonnet distill)',
    systemPrompt:
      'You are a planning assistant. Break down complex tasks into actionable steps. Create clear task lists with dependencies and priorities.',
    color: '#14b8a6',
  },
  'pc1-critic': {
    emoji: '🔍',
    description: 'Local critic model (Qwen3-14B Opus distill)',
    systemPrompt:
      'You are a code and content reviewer. Find bugs, logical errors, and improvements. Be thorough but constructive.',
    color: '#f97316',
  },
}
function We() {
  if (!(typeof window > 'u'))
    for (const [e, r] of Object.entries(je)) {
      const s = `operations:agents:${e}`
      localStorage.getItem(s) ||
        localStorage.setItem(
          s,
          JSON.stringify({ ...r, createdAt: new Date().toISOString() }),
        )
    }
}
function Je(e) {
  const r = e.includes('/') ? (e.split('/').pop() ?? e) : e,
    s = r.toLowerCase()
  if (s.includes('opus')) {
    const a = r.match(/opus[- _]?(\d+)[- _.]?(\d+)/i)
    return a ? `Opus ${a[1]}.${a[2]}` : 'Opus'
  }
  if (s.includes('sonnet')) {
    const a = r.match(/sonnet[- _]?(\d+)[- _.]?(\d+)/i)
    return a ? `Sonnet ${a[1]}.${a[2]}` : 'Sonnet'
  }
  if (s.includes('haiku')) {
    const a = r.match(/haiku[- _]?(\d+)[- _.]?(\d+)/i)
    return a ? `Haiku ${a[1]}.${a[2]}` : 'Haiku'
  }
  if (s.includes('gemini')) {
    const a = r.match(
      /gemini[- _]?(\d+(?:[._]\d+)*)(?:[- _]?(flash|pro|ultra|exp))?/i,
    )
    if (a) {
      const c = a[1].replace(/[_]/g, '.'),
        o = a[2] ? ` ${a[2].charAt(0).toUpperCase()}${a[2].slice(1)}` : ''
      return `Gemini ${c}${o}`
    }
    return 'Gemini'
  }
  if (s.includes('codex')) {
    const a =
      r.match(/gpt[- _]?(\d+)[- _.]?(\d+)[- _]codex/i) ??
      r.match(/codex[- _]?(\d+)[- _.]?(\d+)/i)
    return a ? `Codex ${a[1]}.${a[2]}` : 'Codex'
  }
  if (s.includes('gpt')) {
    const a = r.match(/gpt[- _]?(\d+)(?:[- _.]?(\d+))?/i)
    return a
      ? a[2]
        ? `GPT-${a[1]}.${a[2]}`
        : `GPT-${a[1]}`
      : r.replace(/gpt-/gi, 'GPT-')
  }
  return s === 'delivery-mirror'
    ? 'Mirror'
    : s.includes('kimi')
      ? 'Kimi K2.5'
      : r.replace(/[-_]/g, ' ').replace(/\b\w/g, (a) => a.toUpperCase())
}
function ae(e) {
  if (!e || e <= 0) return 'just now'
  const r = Math.max(0, Date.now() - e),
    s = Math.floor(r / 1e3)
  if (s < 60) return 'just now'
  const a = Math.floor(s / 60)
  if (a < 60) return `${a}m ago`
  const c = Math.floor(a / 60)
  return c < 24 ? `${c}h ago` : `${Math.floor(c / 24)}d ago`
}
function Ye(e) {
  return e === 'failed'
    ? 'text-red-400'
    : e === 'thinking'
      ? 'text-accent-400'
      : e === 'complete'
        ? 'text-emerald-400'
        : e === 'queued'
          ? 'text-primary-500'
          : 'text-emerald-400'
}
function we({
  value: e,
  status: r,
  size: s = 96,
  strokeWidth: a = 6,
  className: c,
}) {
  const o = Math.max(0, Math.min(100, e)),
    l = (s - a) / 2,
    n = 2 * Math.PI * l
  return t.jsxs('svg', {
    width: s,
    height: s,
    viewBox: `0 0 ${s} ${s}`,
    className: v('pointer-events-none', c),
    'aria-hidden': !0,
    children: [
      t.jsx('circle', {
        cx: s / 2,
        cy: s / 2,
        r: l,
        strokeWidth: a,
        className: 'fill-none stroke-primary-300/70',
      }),
      t.jsx(E.circle, {
        cx: s / 2,
        cy: s / 2,
        r: l,
        strokeWidth: a,
        strokeLinecap: 'round',
        strokeDasharray: n,
        initial: !1,
        animate: { strokeDashoffset: n - (o / 100) * n },
        transition: { duration: 0.45, ease: 'easeOut' },
        className: v(
          'origin-center -rotate-90 fill-none stroke-current',
          Ye(r),
        ),
        style: { transformOrigin: '50% 50%', transform: 'rotate(-90deg)' },
      }),
    ],
  })
}
function Be({ expression: e = 'neutral' }) {
  switch (e) {
    case 'happy':
      return t.jsxs(t.Fragment, {
        children: [
          t.jsx('path', {
            d: 'M5 4 L6 3 L7 4',
            stroke: 'white',
            strokeWidth: '0.8',
            fill: 'none',
          }),
          t.jsx('path', {
            d: 'M9 4 L10 3 L11 4',
            stroke: 'white',
            strokeWidth: '0.8',
            fill: 'none',
          }),
          t.jsx('path', {
            d: 'M6.5 5.5 Q8 7 9.5 5.5',
            stroke: 'white',
            strokeWidth: '0.6',
            fill: 'none',
          }),
        ],
      })
    case 'focused':
      return t.jsxs(t.Fragment, {
        children: [
          t.jsx('rect', {
            x: '5',
            y: '3.5',
            width: '2',
            height: '0.8',
            fill: 'white',
          }),
          t.jsx('rect', {
            x: '9',
            y: '3.5',
            width: '2',
            height: '0.8',
            fill: 'white',
          }),
        ],
      })
    case 'confused':
      return t.jsxs(t.Fragment, {
        children: [
          t.jsx('rect', {
            x: '5',
            y: '3',
            width: '2',
            height: '2',
            fill: 'white',
          }),
          t.jsx('rect', {
            x: '6',
            y: '3',
            width: '1',
            height: '1',
            fill: '#1e293b',
          }),
          t.jsx('rect', {
            x: '9',
            y: '4',
            width: '2',
            height: '2',
            fill: 'white',
          }),
          t.jsx('rect', {
            x: '10',
            y: '4',
            width: '1',
            height: '1',
            fill: '#1e293b',
          }),
          t.jsx('text', {
            x: '13',
            y: '2',
            fontSize: '3',
            fill: '#fbbf24',
            fontWeight: 'bold',
            children: '?',
          }),
        ],
      })
    case 'tired':
      return t.jsxs(t.Fragment, {
        children: [
          t.jsx('rect', {
            x: '5',
            y: '4',
            width: '2',
            height: '1',
            fill: 'white',
            opacity: '0.7',
          }),
          t.jsx('rect', {
            x: '9',
            y: '4',
            width: '2',
            height: '1',
            fill: 'white',
            opacity: '0.7',
          }),
          t.jsx('text', {
            x: '12',
            y: '2',
            fontSize: '2.5',
            fill: '#94a3b8',
            fontWeight: 'bold',
            children: 'z',
          }),
          t.jsx('text', {
            x: '13.5',
            y: '0.5',
            fontSize: '2',
            fill: '#94a3b8',
            fontWeight: 'bold',
            children: 'z',
          }),
        ],
      })
    case 'excited':
      return t.jsxs(t.Fragment, {
        children: [
          t.jsx('text', {
            x: '4.5',
            y: '5',
            fontSize: '3',
            fill: '#fde047',
            children: '★',
          }),
          t.jsx('text', {
            x: '8.5',
            y: '5',
            fontSize: '3',
            fill: '#fde047',
            children: '★',
          }),
          t.jsx('circle', { cx: '8', cy: '6', r: '0.8', fill: 'white' }),
        ],
      })
    default:
      return t.jsxs(t.Fragment, {
        children: [
          t.jsx('rect', {
            x: '5',
            y: '3',
            width: '2',
            height: '2',
            fill: 'white',
          }),
          t.jsx('rect', {
            x: '9',
            y: '3',
            width: '2',
            height: '2',
            fill: 'white',
          }),
          t.jsx('rect', {
            x: '6',
            y: '3',
            width: '1',
            height: '1',
            fill: '#1e293b',
          }),
          t.jsx('rect', {
            x: '10',
            y: '3',
            width: '1',
            height: '1',
            fill: '#1e293b',
          }),
        ],
      })
  }
}
function Ne({
  color: e,
  accentColor: r,
  size: s = 32,
  status: a = 'idle',
  expression: c = 'neutral',
  isWalking: o = !1,
  direction: l = 'right',
  className: n,
}) {
  const m = a === 'running' || a === 'thinking',
    h = l === 'left' ? -1 : 1
  return t.jsxs(E.svg, {
    width: s,
    height: s,
    viewBox: '0 0 16 16',
    className: v('pixelated', n),
    style: { imageRendering: 'pixelated', transform: `scaleX(${h})` },
    animate: m && !o ? { y: [0, -2, 0] } : {},
    transition:
      m && !o ? { duration: 0.8, repeat: 1 / 0, ease: 'easeInOut' } : {},
    children: [
      t.jsx('rect', {
        x: '4',
        y: '1',
        width: '8',
        height: '6',
        rx: '1',
        fill: e,
      }),
      t.jsx(Be, { expression: c }),
      t.jsx('rect', { x: '7', y: '0', width: '2', height: '1', fill: r }),
      t.jsx('rect', {
        x: '3',
        y: '7',
        width: '10',
        height: '5',
        rx: '1',
        fill: e,
      }),
      t.jsx('rect', {
        x: '6',
        y: '8',
        width: '4',
        height: '3',
        rx: '0.5',
        fill: r,
        opacity: '0.6',
      }),
      t.jsx(E.rect, {
        x: '1',
        y: '8',
        width: '2',
        height: '3',
        rx: '0.5',
        fill: e,
        animate: o ? { y: [8, 7, 8, 9, 8] } : { y: 8 },
        transition: o ? { duration: 0.4, repeat: 1 / 0 } : {},
      }),
      t.jsx(E.rect, {
        x: '13',
        y: '8',
        width: '2',
        height: '3',
        rx: '0.5',
        fill: e,
        animate: o ? { y: [8, 9, 8, 7, 8] } : { y: 8 },
        transition: o ? { duration: 0.4, repeat: 1 / 0 } : {},
      }),
      t.jsx(E.rect, {
        x: '5',
        width: '2',
        height: '3',
        rx: '0.5',
        fill: e,
        animate: o ? { y: [12, 11, 12, 13, 12] } : { y: 12 },
        transition: o ? { duration: 0.4, repeat: 1 / 0 } : {},
      }),
      t.jsx(E.rect, {
        x: '9',
        width: '2',
        height: '3',
        rx: '0.5',
        fill: e,
        animate: o ? { y: [12, 13, 12, 11, 12] } : { y: 12 },
        transition: o ? { duration: 0.4, repeat: 1 / 0 } : {},
      }),
      t.jsx(E.rect, {
        x: '4',
        width: '3',
        height: '2',
        rx: '0.5',
        fill: r,
        animate: o ? { y: [14, 13, 14, 15, 14] } : { y: 14 },
        transition: o ? { duration: 0.4, repeat: 1 / 0 } : {},
      }),
      t.jsx(E.rect, {
        x: '9',
        width: '3',
        height: '2',
        rx: '0.5',
        fill: r,
        animate: o ? { y: [14, 15, 14, 13, 14] } : { y: 14 },
        transition: o ? { duration: 0.4, repeat: 1 / 0 } : {},
      }),
      a === 'thinking' &&
        t.jsx(E.circle, {
          cx: '14',
          cy: '2',
          r: '1.5',
          fill: '#fbbf24',
          animate: { opacity: [0.4, 1, 0.4] },
          transition: { duration: 1.2, repeat: 1 / 0 },
        }),
      a === 'complete' &&
        t.jsx('circle', { cx: '14', cy: '2', r: '1.5', fill: '#34d399' }),
      a === 'failed' &&
        t.jsx('circle', { cx: '14', cy: '2', r: '1.5', fill: '#f87171' }),
    ],
  })
}
const Ue = d.lazy(() =>
    Ee(() => import('./main-r209hwEK.js').then((e) => e.a$), []).then((e) => ({
      default: e.ChatScreen,
    })),
  ),
  de = 'operations:orchestrator:name',
  J = 'Main Agent'
function He({ totalAgents: e }) {
  const [r, s] = d.useState(!1),
    [a, c] = d.useState(() =>
      typeof window > 'u' ? J : window.localStorage.getItem(de) || J,
    ),
    [o, l] = d.useState(a),
    n = () => {
      ;(l(a), s(!0))
    },
    m = () => {
      const h = o.trim() || J
      ;(window.localStorage.setItem(de, h), c(h), l(h), s(!1))
    }
  return t.jsxs(t.Fragment, {
    children: [
      t.jsxs('article', {
        className:
          'flex h-[720px] min-h-[720px] flex-col rounded-[1.75rem] border border-[var(--theme-border)] border-l-4 border-l-[var(--theme-accent)] bg-[var(--theme-card)] p-4 shadow-[0_24px_80px_var(--theme-shadow)] lg:h-[800px] lg:min-h-[800px]',
        children: [
          t.jsxs('div', {
            className:
              'flex flex-col items-center gap-2 px-3 pt-1 text-center lg:gap-3',
            children: [
              t.jsxs('div', {
                className:
                  'relative flex min-h-8 w-full items-center justify-center',
                children: [
                  t.jsx('h2', {
                    className:
                      'text-base font-semibold text-[var(--theme-text)]',
                    children: t.jsxs('span', {
                      className:
                        'inline-flex items-center justify-center gap-2',
                      children: [
                        t.jsx('span', { children: a }),
                        t.jsx('span', {
                          className: v(
                            'h-2.5 w-2.5 rounded-full bg-emerald-500',
                            e > 0 && 'animate-pulse',
                          ),
                          'aria-label': 'Active',
                          title: 'Active',
                        }),
                      ],
                    }),
                  }),
                  t.jsx('div', {
                    className: 'absolute right-0 flex items-center',
                    children: t.jsx('button', {
                      type: 'button',
                      onClick: n,
                      className:
                        'inline-flex h-8 w-8 items-center justify-center rounded-lg text-[var(--theme-muted)] transition-colors hover:text-[var(--theme-text)]',
                      'aria-label': 'Orchestrator settings',
                      title: 'Orchestrator settings',
                      children: t.jsx(p, {
                        icon: L,
                        size: 16,
                        strokeWidth: 1.8,
                      }),
                    }),
                  }),
                ],
              }),
              t.jsxs('div', {
                className:
                  'relative flex size-[56px] shrink-0 items-center justify-center',
                children: [
                  t.jsx(we, {
                    value: 82,
                    status: 'running',
                    size: 56,
                    strokeWidth: 3,
                    className: 'text-emerald-500',
                  }),
                  t.jsx('div', {
                    className:
                      'absolute inset-0 flex items-center justify-center',
                    children: t.jsx(Ne, {
                      size: 44,
                      color: '#f59e0b',
                      accentColor: '#fbbf24',
                      status: 'running',
                    }),
                  }),
                ],
              }),
              t.jsxs('p', {
                className: 'text-sm text-[var(--theme-muted)]',
                children: ['Orchestrator · ', e, ' agents reporting'],
              }),
            ],
          }),
          t.jsx('div', {
            className:
              'mt-3 flex min-h-0 flex-1 w-full flex-col overflow-hidden rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-card)]',
            children: t.jsx('div', {
              className: 'flex-1 min-h-0 overflow-hidden',
              children: t.jsx(d.Suspense, {
                fallback: t.jsx('div', {
                  className:
                    'flex h-full w-full items-center justify-center bg-[var(--theme-card)] px-4 text-sm text-[var(--theme-muted)]',
                  children: 'Loading…',
                }),
                children: t.jsx('div', {
                  className: 'h-full w-full min-h-0 overflow-hidden',
                  children: t.jsx(Ue, {
                    activeFriendlyId: 'main',
                    compact: !0,
                    embedded: !0,
                    isNewChat: !1,
                  }),
                }),
              }),
            }),
          }),
        ],
      }),
      r
        ? t.jsx('div', {
            className:
              'fixed inset-0 z-50 flex items-center justify-center bg-[color-mix(in_srgb,var(--theme-bg)_48%,transparent)] px-4 py-6 backdrop-blur-md',
            onClick: () => s(!1),
            children: t.jsxs('div', {
              className:
                'w-full max-w-md rounded-3xl border border-[var(--theme-border2)] bg-[var(--theme-card)] p-6 shadow-[0_30px_100px_var(--theme-shadow)]',
              onClick: (h) => h.stopPropagation(),
              children: [
                t.jsxs('div', {
                  className: 'flex items-start justify-between gap-4',
                  children: [
                    t.jsxs('div', {
                      className: 'flex items-start gap-3',
                      children: [
                        t.jsx('div', {
                          className:
                            'flex size-11 items-center justify-center rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-bg)] text-[var(--theme-accent)]',
                          children: t.jsx(p, {
                            icon: L,
                            size: 20,
                            strokeWidth: 1.8,
                          }),
                        }),
                        t.jsxs('div', {
                          children: [
                            t.jsx('h2', {
                              className:
                                'text-xl font-semibold text-[var(--theme-text)]',
                              children: 'Orchestrator Settings',
                            }),
                            t.jsx('p', {
                              className:
                                'mt-1 text-sm text-[var(--theme-muted-2)]',
                              children:
                                'Update the display name used on this card.',
                            }),
                          ],
                        }),
                      ],
                    }),
                    t.jsx('button', {
                      type: 'button',
                      onClick: () => s(!1),
                      className:
                        'inline-flex size-10 items-center justify-center rounded-xl border border-[var(--theme-border)] bg-[var(--theme-card2)] text-[var(--theme-muted)] transition-colors hover:border-[var(--theme-accent)] hover:text-[var(--theme-accent-strong)]',
                      'aria-label': 'Close orchestrator settings',
                      children: t.jsx(p, {
                        icon: Y,
                        size: 18,
                        strokeWidth: 1.8,
                      }),
                    }),
                  ],
                }),
                t.jsxs('label', {
                  className: 'mt-6 block space-y-2',
                  children: [
                    t.jsx('span', {
                      className: 'text-sm font-medium text-[var(--theme-text)]',
                      children: 'Display name',
                    }),
                    t.jsx('input', {
                      value: o,
                      onChange: (h) => l(h.target.value),
                      placeholder: J,
                      className:
                        'w-full rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-bg)] px-4 py-3 text-sm text-[var(--theme-text)] outline-none focus:border-[var(--theme-accent)]',
                    }),
                  ],
                }),
                t.jsxs('div', {
                  className: 'mt-6 flex items-center justify-end gap-3',
                  children: [
                    t.jsx(j, {
                      type: 'button',
                      variant: 'secondary',
                      onClick: () => s(!1),
                      children: 'Close',
                    }),
                    t.jsx(j, { type: 'button', onClick: m, children: 'Save' }),
                  ],
                }),
              ],
            }),
          })
        : null,
    ],
  })
}
function V(e) {
  return !e || typeof e != 'object' || Array.isArray(e) ? {} : e
}
function me(...e) {
  for (const r of e)
    if (typeof r == 'string' && r.trim().length > 0) return r.trim()
}
function Ge(...e) {
  for (const r of e) {
    if (typeof r == 'number' && Number.isFinite(r)) return r
    if (typeof r == 'string' && r.trim().length > 0) {
      const s = Number(r)
      if (Number.isFinite(s)) return s
    }
  }
}
function Ve(e) {
  if (typeof e != 'string') return 'unknown'
  const r = e.trim().toLowerCase()
  return r.includes('success') || r === 'ok' || r === 'completed'
    ? 'success'
    : r.includes('error') || r.includes('fail')
      ? 'error'
      : r.includes('run')
        ? 'running'
        : r.includes('queue') || r.includes('pending')
          ? 'queued'
          : 'unknown'
}
function he(e) {
  if (typeof e == 'string' && e.trim().length > 0) {
    const r = Date.parse(e)
    return Number.isNaN(r) ? e.trim() : new Date(r).toISOString()
  }
  if (typeof e == 'number' && Number.isFinite(e)) {
    const r = e > 1e12 ? e : e * 1e3
    return new Date(r).toISOString()
  }
  return null
}
function ue(e, r) {
  const s = e.output,
    a = V(s),
    c = V(e.delivery ?? e.deliveryResult ?? e.result ?? a.delivery),
    o = V(e.context ?? a.context)
  return {
    id:
      (typeof e.id == 'string' && e.id) ||
      (typeof e.runId == 'string' && e.runId) ||
      `run-${r}`,
    status: Ve(e.status ?? e.state ?? e.result),
    startedAt: he(e.startedAt ?? e.started_at ?? e.createdAt ?? e.timestamp),
    finishedAt: he(e.finishedAt ?? e.finished_at ?? e.completedAt),
    durationMs: Ge(e.durationMs, e.duration, a.durationMs, a.duration),
    error:
      typeof e.error == 'string'
        ? e.error
        : typeof e.message == 'string'
          ? e.message
          : void 0,
    deliverySummary: me(
      e.deliverySummary,
      e.summary,
      e.deliveryText,
      e.deliveryMessage,
      c.summary,
      c.text,
      c.message,
      a.deliverySummary,
      a.summary,
      a.text,
      a.message,
    ),
    chatSessionKey: me(
      e.chatSessionKey,
      e.friendlyId,
      e.sessionKey,
      e.sessionId,
      o.friendlyId,
      o.sessionKey,
      a.chatSessionKey,
      a.friendlyId,
      a.sessionKey,
      a.sessionId,
    ),
    output: s,
  }
}
function Xe(e, r) {
  const s = e.lastRun,
    a = ue(
      s && typeof s == 'object'
        ? s
        : {
            id: e.lastRunId,
            status: e.lastRunStatus,
            startedAt: e.lastRunAt,
            finishedAt: e.lastRunCompletedAt,
            durationMs: e.lastRunDurationMs,
            error: e.lastRunError,
          },
      r,
    )
  return {
    id:
      (typeof e.id == 'string' && e.id) ||
      (typeof e.jobId == 'string' && e.jobId) ||
      `job-${r}`,
    name:
      (typeof e.name == 'string' && e.name) ||
      (typeof e.title == 'string' && e.title) ||
      `Cron Job ${r + 1}`,
    schedule:
      (typeof e.schedule == 'string' && e.schedule) ||
      (typeof e.cron == 'string' && e.cron) ||
      '* * * * *',
    enabled: !!e.enabled,
    payload: e.payload,
    deliveryConfig: e.deliveryConfig,
    status: typeof e.status == 'string' ? e.status : void 0,
    description: typeof e.description == 'string' ? e.description : void 0,
    lastRun: a,
  }
}
function X(e) {
  return e
    ? e.includes("require 'croniter'") || e.includes('croniter')
      ? `Cron support missing: reinstall hermes-agent with 'pip install "hermes-agent[cron]"' (or 'pipx install --force hermes-agent[cron]'), then restart the gateway.`
      : e
    : 'Request failed'
}
async function ne(e) {
  try {
    const r = await e.json()
    return typeof r.error == 'string'
      ? X(r.error)
      : typeof r.message == 'string'
        ? X(r.message)
        : JSON.stringify(r)
  } catch {
    const r = await e.text().catch(() => '')
    return X(r || e.statusText || 'Request failed')
  }
}
function Ze(e) {
  return !e || typeof e != 'object'
    ? null
    : 'error' in e && typeof e.error == 'string'
      ? e.error
      : 'message' in e && typeof e.message == 'string'
        ? e.message
        : null
}
function et(e) {
  if (!(!e || typeof e != 'object') && 'ok' in e && e.ok === !1)
    throw new Error(Ze(e) ?? 'Request failed')
}
async function ie(e) {
  const r = await e.json()
  return (et(r), r)
}
async function tt() {
  const e = await fetch('/api/hermes-jobs')
  if (!e.ok) throw new Error(await ne(e))
  const r = await ie(e)
  return (Array.isArray(r.jobs) ? r.jobs : []).map(function (c, o) {
    return Xe(c, o)
  })
}
async function Se(e) {
  const r = await fetch(
    `/api/hermes-jobs/${encodeURIComponent(e)}?action=run`,
    { method: 'POST', headers: { 'Content-Type': 'application/json' } },
  )
  if (!r.ok) throw new Error(await ne(r))
  return ie(r)
}
async function rt(e) {
  const r = await fetch(`/api/hermes-jobs/${encodeURIComponent(e.jobId)}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ enabled: e.enabled }),
  })
  if (!r.ok) throw new Error(await ne(r))
  return ie(r)
}
function st(e) {
  return typeof e.content == 'string'
    ? e.content
    : Array.isArray(e.content)
      ? e.content
          .filter((r) => !r.type || r.type === 'text')
          .map((r) => r.text ?? '').join(`
`)
      : ''
}
function at(e, r) {
  const s = st(e).trim()
  if (!s) return null
  const a =
    e.role === 'assistant' ? 'assistant' : e.role === 'user' ? 'user' : 'system'
  return {
    id: `${a}-${e.timestamp ?? r}-${r}`,
    role: a,
    content: s,
    timestamp: e.timestamp,
  }
}
function nt(e) {
  const r = re(),
    s = T({
      queryKey: ['operations', 'chat', e],
      queryFn: async () => {
        try {
          const l = await fetch(
            `/api/history?sessionKey=${encodeURIComponent(e)}&limit=50`,
          )
          if (l.ok) {
            const n = await l.json()
            if (Array.isArray(n.messages)) return n.messages
          }
        } catch {}
        const o = await qe(e, { limit: 50 })
        return o.ok === !1 ? [] : Array.isArray(o.messages) ? o.messages : []
      },
      refetchInterval: 5e3,
      enabled: !!e,
    }),
    a = z({
      mutationFn: async (o) => {
        await Ke(e, o)
      },
      onSuccess: async () => {
        ;(await r.invalidateQueries({ queryKey: ['operations', 'chat', e] }),
          await r.invalidateQueries({ queryKey: ['operations', 'sessions'] }))
      },
    })
  return {
    messages: d.useMemo(
      () => (s.data ?? []).map(at).filter((o) => !!o),
      [s.data],
    ),
    sendMessage: a.mutateAsync,
    isLoading: s.isPending,
    isRefreshing: s.isFetching,
    isSending: a.isPending,
    error:
      (s.error instanceof Error && s.error.message) ||
      (a.error instanceof Error && a.error.message) ||
      null,
    refresh: s.refetch,
  }
}
function it(e) {
  return e === 'error'
    ? { dot: 'bg-red-500', ring: 'text-red-500', label: 'Error' }
    : e === 'active'
      ? { dot: 'bg-emerald-500', ring: 'text-emerald-500', label: 'Active' }
      : { dot: 'bg-primary-300', ring: 'text-primary-300', label: 'Idle' }
}
function ke(e) {
  return e
    .replace(
      new RegExp(
        '^((\\p{Extended_Pictographic}|\\p{Regional_Indicator}|\\p{Emoji_Presentation}|\\p{Emoji}\\uFE0F)(\\u200D(\\p{Extended_Pictographic}|\\p{Regional_Indicator}|\\p{Emoji_Presentation}|\\p{Emoji}\\uFE0F))*)\\s*',
        'u',
      ),
      '',
    )
    .trim()
}
function xe(e, r) {
  const s = `ops:${r}:`
  return e.startsWith(s) ? e.slice(s.length).replace(/-/g, ' ') : e
}
function ot(e) {
  return e.description?.trim() || e.schedule
}
function ct({
  agentName: e,
  messages: r,
  sendMessage: s,
  isSending: a,
  error: c,
}) {
  const [o, l] = d.useState(''),
    n = d.useRef(null),
    m = d.useMemo(() => r.slice(-50), [r])
  d.useEffect(() => {
    n.current && (n.current.scrollTop = n.current.scrollHeight)
  }, [m])
  async function h() {
    const u = o.trim()
    !u || a || (await s(u), l(''))
  }
  return t.jsxs('section', {
    className:
      'flex min-h-0 flex-1 flex-col rounded-[1.25rem] border border-[var(--theme-border)] bg-[var(--theme-card)]',
    children: [
      t.jsx('div', {
        ref: n,
        className:
          'flex min-h-[100px] max-h-[160px] flex-1 flex-col justify-center overflow-y-auto px-3 py-3',
        children:
          m.length > 0
            ? t.jsx('div', {
                className: 'space-y-2',
                children: m.map((u) => {
                  const g = u.role === 'user'
                  return t.jsx(
                    'div',
                    {
                      className: v('flex', g ? 'justify-end' : 'justify-start'),
                      children: t.jsx('div', {
                        className: v(
                          'max-w-[92%] rounded-2xl px-3 py-2 text-xs leading-relaxed shadow-sm',
                          g
                            ? 'bg-[var(--theme-accent-soft)] text-[var(--theme-text)]'
                            : 'bg-[var(--theme-card2)] text-[var(--theme-text)]',
                        ),
                        children:
                          u.role === 'assistant'
                            ? t.jsx(ye, { children: u.content })
                            : t.jsx('p', {
                                className: 'whitespace-pre-wrap',
                                children: u.content,
                              }),
                      }),
                    },
                    u.id,
                  )
                }),
              })
            : t.jsx('p', {
                className: 'text-center text-xs text-[var(--theme-muted)]',
                children: 'Send a message...',
              }),
      }),
      t.jsxs('div', {
        className: 'border-t border-[var(--theme-border)] px-3 py-3',
        children: [
          c
            ? t.jsx('p', {
                className: 'mb-2 text-xs text-red-600',
                children: c,
              })
            : null,
          t.jsxs('div', {
            className:
              'flex items-center gap-2 rounded-[1rem] border border-[var(--theme-border)] bg-[var(--theme-bg)] p-2',
            children: [
              t.jsx('input', {
                type: 'text',
                value: o,
                onChange: (u) => l(u.target.value),
                onKeyDown: (u) => {
                  u.key === 'Enter' && !u.shiftKey && (u.preventDefault(), h())
                },
                placeholder: `Message ${ke(e)}...`,
                className:
                  'h-8 flex-1 bg-transparent px-1.5 text-xs text-[var(--theme-text)] outline-none placeholder:text-[var(--theme-muted)]',
              }),
              t.jsx(j, {
                size: 'icon-sm',
                className:
                  'rounded-lg bg-[var(--theme-accent)] text-primary-950 hover:bg-[var(--theme-accent-strong)]',
                onClick: () => {
                  h()
                },
                disabled: !o.trim() || a,
                'aria-label': a ? 'Sending message' : 'Send message',
                children: t.jsx(p, { icon: $e, size: 15, strokeWidth: 1.8 }),
              }),
            ],
          }),
        ],
      }),
    ],
  })
}
function lt({ agent: e, onOpenSettings: r }) {
  const s = re(),
    a = it(e.status),
    c = ke(e.name),
    [o, l] = d.useState(!1),
    [n, m] = d.useState(!1),
    { messages: h, sendMessage: u, isSending: g, error: S } = nt(e.sessionKey),
    y = e.jobs.length,
    N = e.status === 'active' && !n,
    _ = z({
      mutationFn: async (i) => rt(i),
      onSuccess: async () => {
        await s.invalidateQueries({ queryKey: ['operations', 'cron'] })
      },
      onError: (i) => {
        C(i instanceof Error ? i.message : 'Failed to update cron job', {
          type: 'error',
        })
      },
    }),
    M = z({
      mutationFn: async (i) => Se(i),
      onSuccess: async () => {
        ;(await s.invalidateQueries({ queryKey: ['operations', 'cron'] }),
          C('Cron job started', { type: 'success' }))
      },
      onError: (i) => {
        C(i instanceof Error ? i.message : 'Failed to run cron job', {
          type: 'error',
        })
      },
    })
  async function A() {
    if (N) {
      m(!0)
      return
    }
    ;(m(!1), await u('Run your primary task now'))
  }
  return t.jsxs('article', {
    className:
      'flex min-h-[19rem] flex-col rounded-[1.5rem] border border-[var(--theme-border)] bg-[var(--theme-card)] p-3 shadow-[0_20px_60px_color-mix(in_srgb,var(--theme-shadow)_14%,transparent)]',
    children: [
      t.jsxs('div', {
        className: 'relative flex min-h-8 items-center',
        children: [
          t.jsx('div', {
            className: 'absolute left-0 flex items-center',
            children: t.jsxs('button', {
              type: 'button',
              'aria-label':
                y > 0 ? `${y} cron jobs for ${c}` : `No cron jobs for ${c}`,
              onClick: () => l((i) => !i),
              className: v(
                'inline-flex h-8 shrink-0 items-center gap-1 rounded-lg px-1.5 text-[var(--theme-muted)] transition-colors hover:bg-[var(--theme-bg)] hover:text-[var(--theme-text)]',
                o && 'bg-[var(--theme-bg)] text-[var(--theme-text)]',
              ),
              children: [
                t.jsx(p, { icon: Oe, size: 14, strokeWidth: 1.9 }),
                y > 0
                  ? t.jsx('span', {
                      className:
                        'inline-flex min-w-4 items-center justify-center rounded-full bg-[var(--theme-bg)] px-1.5 text-[10px] font-medium text-[var(--theme-text)]',
                      children: y,
                    })
                  : null,
              ],
            }),
          }),
          t.jsx('div', {
            className: 'flex w-full justify-center px-20',
            children: t.jsx('h3', {
              className:
                'min-w-0 text-center text-sm font-semibold text-[var(--theme-text)]',
              children: t.jsxs('span', {
                className:
                  'inline-flex max-w-full items-center justify-center gap-2',
                children: [
                  t.jsx('span', { className: 'truncate', children: c }),
                  t.jsx('span', {
                    className: v(
                      'h-2 w-2 shrink-0 rounded-full',
                      e.status === 'active' && !n && 'animate-pulse',
                      a.dot,
                    ),
                    'aria-label': a.label,
                    title: a.label,
                  }),
                ],
              }),
            }),
          }),
          t.jsxs('div', {
            className: 'absolute right-0 flex items-center gap-1',
            children: [
              t.jsx('button', {
                type: 'button',
                'aria-label': N ? `Pause ${c}` : `Run ${c} now`,
                onClick: () => {
                  A()
                },
                disabled: g && !N,
                className:
                  'inline-flex h-8 w-8 items-center justify-center rounded-lg text-[var(--theme-muted)] transition-colors hover:bg-[var(--theme-bg)] hover:text-[var(--theme-text)] disabled:cursor-not-allowed disabled:opacity-60',
                children: t.jsx(p, {
                  icon: N ? Me : le,
                  size: 16,
                  strokeWidth: 1.8,
                }),
              }),
              t.jsx('button', {
                type: 'button',
                'aria-label': `Open settings for ${c}`,
                onClick: () => r(e.id),
                className:
                  'inline-flex h-8 w-8 items-center justify-center rounded-lg text-[var(--theme-muted)] transition-colors hover:bg-[var(--theme-bg)] hover:text-[var(--theme-text)]',
                children: t.jsx(p, { icon: L, size: 16, strokeWidth: 1.8 }),
              }),
            ],
          }),
        ],
      }),
      t.jsxs('div', {
        className: 'flex flex-col items-center gap-1 px-2 py-2 text-center',
        children: [
          t.jsxs('div', {
            className:
              'relative flex size-12 shrink-0 items-center justify-center',
            children: [
              t.jsx(we, {
                value: e.progressValue,
                status: e.progressStatus,
                size: 48,
                strokeWidth: 2.5,
                className: a.ring,
              }),
              t.jsx('div', {
                className: 'absolute inset-0 flex items-center justify-center',
                children: t.jsx(Ne, {
                  size: 40,
                  color: e.meta.color,
                  accentColor: '#ffffff',
                  status:
                    e.status === 'error'
                      ? 'failed'
                      : e.status === 'active'
                        ? 'running'
                        : 'idle',
                }),
              }),
            ],
          }),
          t.jsx('p', {
            className: 'w-full truncate text-[11px] text-[var(--theme-muted)]',
            children: e.meta.description || 'No description',
          }),
          t.jsx('p', {
            className:
              'w-full truncate text-[10px] text-[var(--theme-muted)]/80',
            children:
              e.jobs.length > 0
                ? `${e.jobs.length} scheduled job${e.jobs.length === 1 ? '' : 's'}`
                : 'Manual only',
          }),
        ],
      }),
      t.jsx(ve, {
        initial: !1,
        children: o
          ? t.jsx(
              E.section,
              {
                initial: { height: 0, opacity: 0, y: -8 },
                animate: { height: 'auto', opacity: 1, y: 0 },
                exit: { height: 0, opacity: 0, y: -8 },
                transition: { duration: 0.18, ease: 'easeOut' },
                className: 'overflow-hidden',
                children: t.jsx('div', {
                  className:
                    'mb-4 rounded-[1.25rem] border border-[var(--theme-border)] bg-[var(--theme-card)] px-3 py-3',
                  children:
                    e.jobs.length > 0
                      ? t.jsxs(t.Fragment, {
                          children: [
                            t.jsx('div', {
                              className:
                                'max-h-[200px] space-y-2 overflow-y-auto pr-1',
                              children: e.jobs.map((i) =>
                                t.jsxs(
                                  'div',
                                  {
                                    className:
                                      'flex items-center gap-2 rounded-xl border border-[var(--theme-border)] bg-[var(--theme-bg)] px-2.5 py-2',
                                    children: [
                                      t.jsxs('label', {
                                        className:
                                          'relative inline-flex cursor-pointer items-center',
                                        children: [
                                          t.jsx('input', {
                                            type: 'checkbox',
                                            checked: i.enabled,
                                            onChange: () =>
                                              _.mutate({
                                                jobId: i.id,
                                                enabled: !i.enabled,
                                              }),
                                            className: 'peer sr-only',
                                            'aria-label': i.enabled
                                              ? 'Disable job'
                                              : 'Enable job',
                                          }),
                                          t.jsx('span', {
                                            className:
                                              'h-5 w-9 rounded-full bg-primary-200 transition-colors peer-checked:bg-[var(--theme-accent)]',
                                          }),
                                          t.jsx('span', {
                                            className:
                                              'absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-[var(--theme-card)] shadow-sm transition-transform peer-checked:translate-x-4',
                                          }),
                                        ],
                                      }),
                                      t.jsxs('div', {
                                        className: 'min-w-0 flex-1',
                                        children: [
                                          t.jsx('p', {
                                            className:
                                              'truncate text-xs font-medium text-[var(--theme-text)]',
                                            children: xe(i.name, e.id),
                                          }),
                                          t.jsx('p', {
                                            className:
                                              'truncate text-[11px] text-[var(--theme-muted)]',
                                            children: ot(i),
                                          }),
                                        ],
                                      }),
                                      t.jsx(j, {
                                        size: 'icon-sm',
                                        variant: 'secondary',
                                        className:
                                          'h-7 w-7 rounded-lg border border-[var(--theme-border)] bg-[var(--theme-card)] text-[var(--theme-text)] hover:bg-[var(--theme-card2)]',
                                        onClick: () => M.mutate(i.id),
                                        'aria-label': `Run ${xe(i.name, e.id)} now`,
                                        children: t.jsx(p, {
                                          icon: le,
                                          size: 14,
                                          strokeWidth: 1.9,
                                        }),
                                      }),
                                    ],
                                  },
                                  i.id,
                                ),
                              ),
                            }),
                            t.jsx('div', {
                              className: 'mt-3 flex justify-end',
                              children: t.jsx(j, {
                                render: t.jsx('a', { href: '/cron' }),
                                variant: 'secondary',
                                className:
                                  'h-8 rounded-lg border border-[var(--theme-border)] bg-[var(--theme-bg)] px-3 text-xs font-medium text-[var(--theme-text)] hover:bg-[var(--theme-card2)]',
                                children: '+ Add Job',
                              }),
                            }),
                          ],
                        })
                      : t.jsxs('div', {
                          className: 'flex items-center justify-between gap-3',
                          children: [
                            t.jsx('p', {
                              className: 'text-xs text-[var(--theme-muted)]',
                              children: 'No scheduled jobs',
                            }),
                            t.jsx(j, {
                              render: t.jsx('a', { href: '/cron' }),
                              variant: 'secondary',
                              className:
                                'h-8 rounded-lg border border-[var(--theme-border)] bg-[var(--theme-bg)] px-3 text-xs font-medium text-[var(--theme-text)] hover:bg-[var(--theme-card2)]',
                              children: '+ Add Job',
                            }),
                          ],
                        }),
                }),
              },
              'cron-panel',
            )
          : null,
      }),
      t.jsx('div', {
        className: 'min-h-0 flex-1',
        children: t.jsx(ct, {
          agentName: e.name,
          messages: h,
          sendMessage: u,
          isSending: g,
          error: S,
        }),
      }),
    ],
  })
}
function dt(e) {
  if (typeof e == 'string')
    return {
      id: e,
      provider: e.includes('/') ? (e.split('/')[0] ?? 'model') : 'model',
      name: e.split('/').pop() ?? e,
    }
  const r = e.id ?? e.alias ?? e.model ?? ''
  return r
    ? {
        id: r,
        provider: e.provider ?? r.split('/')[0] ?? 'model',
        name: e.label ?? e.displayName ?? e.name ?? r.split('/').pop() ?? r,
      }
    : null
}
function mt({ value: e, onChange: r, models: s }) {
  const [a, c] = d.useState(!1),
    o = d.useRef(null)
  d.useEffect(() => {
    if (!a) return
    function n(m) {
      o.current?.contains(m.target) || c(!1)
    }
    return (
      document.addEventListener('mousedown', n),
      () => document.removeEventListener('mousedown', n)
    )
  }, [a])
  const l = (() => {
    if (!e) return null
    const n = e.indexOf('/')
    if (n > 0) {
      const h = e.slice(0, n),
        u = e.slice(n + 1),
        g = s.find((S) => S.provider === h && (S.id === e || S.id === u))
      if (g) return g
    }
    const m = s.find((h) => h.id === e)
    return (
      m || {
        id: e,
        provider: n > 0 ? e.slice(0, n) : 'model',
        name: e.split('/').pop() ?? e,
      }
    )
  })()
  return t.jsxs('div', {
    className: 'relative',
    ref: o,
    children: [
      t.jsxs('button', {
        type: 'button',
        onClick: () => c((n) => !n),
        className:
          'inline-flex min-h-[3rem] w-full items-center justify-between gap-3 rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-bg)] px-4 py-3 text-left text-sm text-[var(--theme-text)] shadow-[0_8px_24px_color-mix(in_srgb,var(--theme-shadow)_18%,transparent)]',
        children: [
          t.jsx('span', {
            className: 'truncate',
            children: l ? `${l.provider} / ${l.name}` : 'Default (auto)',
          }),
          t.jsx(p, {
            icon: B,
            size: 16,
            strokeWidth: 1.8,
            className: v(
              'text-[var(--theme-muted)] transition-transform',
              a && 'rotate-180',
            ),
          }),
        ],
      }),
      a
        ? t.jsx('div', {
            className:
              'absolute left-0 top-[calc(100%+0.5rem)] z-[80] w-full overflow-hidden rounded-2xl border border-[var(--theme-border2)] bg-[var(--theme-card)] shadow-[0_24px_80px_var(--theme-shadow)]',
            children: t.jsxs('div', {
              className: 'max-h-80 overflow-y-auto p-2',
              children: [
                t.jsx('button', {
                  type: 'button',
                  onClick: () => {
                    ;(r(''), c(!1))
                  },
                  className: v(
                    'flex w-full rounded-xl px-3 py-2.5 text-left text-sm',
                    e
                      ? 'hover:bg-[var(--theme-bg)]'
                      : 'bg-[var(--theme-accent-soft)]',
                  ),
                  children: 'Default (auto)',
                }),
                s.map((n) =>
                  t.jsxs(
                    'button',
                    {
                      type: 'button',
                      onClick: () => {
                        ;(r(n.id), c(!1))
                      },
                      className: v(
                        'mt-1 flex w-full rounded-xl px-3 py-2.5 text-left text-sm',
                        e === n.id
                          ? 'bg-[var(--theme-accent-soft)]'
                          : 'hover:bg-[var(--theme-bg)]',
                      ),
                      children: [n.provider, ' / ', n.name],
                    },
                    n.id,
                  ),
                ),
              ],
            }),
          })
        : null,
    ],
  })
}
function ht({
  open: e,
  agent: r,
  onClose: s,
  onSave: a,
  onDelete: c,
  isSaving: o,
  isDeleting: l,
}) {
  const [n, m] = d.useState(''),
    [h, u] = d.useState('🤖'),
    [g, S] = d.useState(''),
    [y, N] = d.useState('')
  d.useEffect(() => {
    !r ||
      !e ||
      (m(r.name), u(r.meta.emoji), S(r.model || ''), N(r.meta.systemPrompt))
  }, [r, e])
  const _ = T({ queryKey: ['operations', 'models'], queryFn: se, enabled: e }),
    M = d.useMemo(
      () => (_.data?.models ?? []).map(dt).filter((A) => !!A),
      [_.data?.models],
    )
  return !e || !r
    ? null
    : t.jsx('div', {
        className:
          'fixed inset-0 z-50 flex items-center justify-center bg-[color-mix(in_srgb,var(--theme-bg)_55%,transparent)] px-4 py-6 backdrop-blur-md',
        onClick: s,
        children: t.jsxs('div', {
          className:
            'w-full max-w-3xl rounded-3xl border border-[var(--theme-border2)] bg-[var(--theme-card)] p-5 shadow-[0_24px_80px_var(--theme-shadow)] sm:p-6',
          onClick: (A) => A.stopPropagation(),
          children: [
            t.jsxs('div', {
              className: 'flex items-start justify-between gap-4',
              children: [
                t.jsxs('div', {
                  className: 'flex items-start gap-3',
                  children: [
                    t.jsx('div', {
                      className:
                        'flex size-11 items-center justify-center rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-bg)] text-[var(--theme-accent)]',
                      children: t.jsx(p, {
                        icon: L,
                        size: 20,
                        strokeWidth: 1.8,
                      }),
                    }),
                    t.jsxs('div', {
                      children: [
                        t.jsx('p', {
                          className:
                            'text-xs font-semibold uppercase tracking-[0.16em] text-[var(--theme-muted)]',
                          children: 'Agent Settings',
                        }),
                        t.jsx('h2', {
                          className:
                            'mt-2 text-2xl font-semibold tracking-tight text-[var(--theme-text)]',
                          children: r.name,
                        }),
                        t.jsx('p', {
                          className: 'mt-2 text-sm text-[var(--theme-muted-2)]',
                          children:
                            'Update this agent without leaving the roster.',
                        }),
                      ],
                    }),
                  ],
                }),
                t.jsx('button', {
                  type: 'button',
                  onClick: s,
                  className:
                    'inline-flex size-10 items-center justify-center rounded-xl border border-[var(--theme-border)] bg-[var(--theme-card2)] text-lg text-[var(--theme-muted)] transition-colors hover:border-[var(--theme-accent)] hover:text-[var(--theme-accent-strong)]',
                  'aria-label': 'Close agent settings',
                  children: t.jsx(p, { icon: Y, size: 18, strokeWidth: 1.8 }),
                }),
              ],
            }),
            t.jsxs('div', {
              className: 'mt-6 grid gap-4 md:grid-cols-[1.2fr_0.6fr]',
              children: [
                t.jsxs('label', {
                  className: 'space-y-2',
                  children: [
                    t.jsx('span', {
                      className: 'text-sm font-medium text-[var(--theme-text)]',
                      children: 'Name',
                    }),
                    t.jsx('input', {
                      value: n,
                      onChange: (A) => m(A.target.value),
                      className:
                        'w-full rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-bg)] px-4 py-3 text-sm text-[var(--theme-text)] outline-none focus:border-[var(--theme-accent)]',
                    }),
                  ],
                }),
                t.jsxs('label', {
                  className: 'space-y-2',
                  children: [
                    t.jsx('span', {
                      className: 'text-sm font-medium text-[var(--theme-text)]',
                      children: 'Emoji',
                    }),
                    t.jsx('input', {
                      value: h,
                      onChange: (A) => u(A.target.value),
                      className:
                        'w-full rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-bg)] px-4 py-3 text-sm text-[var(--theme-text)] outline-none focus:border-[var(--theme-accent)]',
                    }),
                  ],
                }),
              ],
            }),
            t.jsxs('label', {
              className: 'mt-4 block space-y-2',
              children: [
                t.jsx('span', {
                  className: 'text-sm font-medium text-[var(--theme-text)]',
                  children: 'Model',
                }),
                t.jsx(mt, { value: g, onChange: S, models: M }),
              ],
            }),
            t.jsxs('label', {
              className: 'mt-4 block space-y-2',
              children: [
                t.jsx('span', {
                  className: 'text-sm font-medium text-[var(--theme-text)]',
                  children: 'System Prompt',
                }),
                t.jsx('textarea', {
                  value: y,
                  onChange: (A) => N(A.target.value),
                  className:
                    'min-h-[220px] w-full rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-bg)] px-4 py-3 text-sm text-[var(--theme-text)] outline-none focus:border-[var(--theme-accent)]',
                }),
              ],
            }),
            t.jsxs('div', {
              className:
                'mt-6 flex flex-col gap-3 border-t border-[var(--theme-border)] pt-4 sm:flex-row sm:items-center sm:justify-between',
              children: [
                t.jsxs(j, {
                  variant: 'ghost',
                  className:
                    'justify-start text-red-600 hover:bg-red-50 hover:text-red-700',
                  onClick: () => {
                    c(r.id)
                  },
                  disabled: l || o,
                  children: [
                    t.jsx(p, { icon: Re, size: 16, strokeWidth: 1.8 }),
                    l ? 'Deleting…' : 'Delete agent',
                  ],
                }),
                t.jsxs('div', {
                  className: 'flex justify-end gap-3',
                  children: [
                    t.jsx(j, {
                      variant: 'secondary',
                      className:
                        'border border-[var(--theme-border)] bg-[var(--theme-bg)] text-[var(--theme-text)] hover:bg-[var(--theme-card2)]',
                      onClick: s,
                      disabled: l,
                      children: 'Cancel',
                    }),
                    t.jsx(j, {
                      className:
                        'bg-[var(--theme-accent)] text-primary-950 hover:bg-[var(--theme-accent-strong)]',
                      onClick: () => {
                        a({
                          agentId: r.id,
                          name: n,
                          model: g,
                          emoji: h,
                          systemPrompt: y,
                        })
                      },
                      disabled: o || l,
                      children: o ? 'Saving…' : 'Save',
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      })
}
const fe = [
  {
    id: 'blank',
    name: 'Blank',
    emoji: '✨',
    description: '',
    systemPrompt: '',
  },
  ...Object.entries(je)
    .filter(([e]) => !e.startsWith('pc1-'))
    .map(([e, r]) => ({
      id: e,
      name: e.charAt(0).toUpperCase() + e.slice(1),
      emoji: r.emoji,
      description: r.description,
      systemPrompt: r.systemPrompt,
    })),
]
function ut(e) {
  if (typeof e == 'string')
    return {
      id: e,
      provider: e.includes('/') ? (e.split('/')[0] ?? 'model') : 'model',
      name: e.split('/').pop() ?? e,
    }
  const r = e.id ?? e.alias ?? e.model ?? ''
  return r
    ? {
        id: r,
        provider: e.provider ?? r.split('/')[0] ?? 'model',
        name: e.label ?? e.displayName ?? e.name ?? r.split('/').pop() ?? r,
      }
    : null
}
function xt({ value: e, onChange: r, models: s }) {
  const [a, c] = d.useState(!1),
    o = d.useRef(null)
  d.useEffect(() => {
    if (!a) return
    function n(m) {
      o.current?.contains(m.target) || c(!1)
    }
    return (
      document.addEventListener('mousedown', n),
      () => document.removeEventListener('mousedown', n)
    )
  }, [a])
  const l = s.find((n) => n.id === e)
  return t.jsxs('div', {
    className: 'relative',
    ref: o,
    children: [
      t.jsxs('button', {
        type: 'button',
        onClick: () => c((n) => !n),
        className:
          'inline-flex min-h-[3rem] w-full items-center justify-between gap-3 rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-bg)] px-4 py-3 text-left text-sm text-[var(--theme-text)] shadow-[0_8px_24px_color-mix(in_srgb,var(--theme-shadow)_18%,transparent)]',
        children: [
          t.jsx('span', {
            className: 'truncate',
            children: l ? `${l.provider} / ${l.name}` : 'Default (auto)',
          }),
          t.jsx(p, {
            icon: B,
            size: 16,
            strokeWidth: 1.8,
            className: v(
              'text-[var(--theme-muted)] transition-transform',
              a && 'rotate-180',
            ),
          }),
        ],
      }),
      a
        ? t.jsx('div', {
            className:
              'absolute left-0 top-[calc(100%+0.5rem)] z-[80] w-full overflow-hidden rounded-2xl border border-[var(--theme-border2)] bg-[var(--theme-card)] shadow-[0_24px_80px_var(--theme-shadow)]',
            children: t.jsx('div', {
              className: 'max-h-80 overflow-y-auto p-2',
              children: s.map((n) =>
                t.jsxs(
                  'button',
                  {
                    type: 'button',
                    onClick: () => {
                      ;(r(n.id), c(!1))
                    },
                    className: v(
                      'flex w-full rounded-xl px-3 py-2.5 text-left text-sm',
                      e === n.id
                        ? 'bg-[var(--theme-accent-soft)]'
                        : 'hover:bg-[var(--theme-bg)]',
                    ),
                    children: [n.provider, ' / ', n.name],
                  },
                  n.id,
                ),
              ),
            }),
          })
        : null,
    ],
  })
}
function ft({
  open: e,
  defaultModel: r,
  onClose: s,
  onCreate: a,
  isSaving: c,
}) {
  const [o, l] = d.useState('blank'),
    [n, m] = d.useState(''),
    [h, u] = d.useState('🤖'),
    [g, S] = d.useState(r),
    [y, N] = d.useState(''),
    [_, M] = d.useState('')
  d.useEffect(() => {
    e && (l('blank'), m(''), u('🤖'), S(r), N(''), M(''))
  }, [r, e])
  function A(x) {
    l(x)
    const k = fe.find((F) => F.id === x)
    !k ||
      k.id === 'blank' ||
      (m((F) => F.trim() || k.name),
      u(k.emoji),
      N(k.description),
      M(k.systemPrompt))
  }
  const i = T({ queryKey: ['operations', 'models'], queryFn: se, enabled: e }),
    f = d.useMemo(
      () => (i.data?.models ?? []).map(ut).filter((x) => !!x),
      [i.data?.models],
    )
  return e
    ? t.jsx('div', {
        className:
          'fixed inset-0 z-50 flex items-center justify-center bg-[color-mix(in_srgb,var(--theme-bg)_48%,transparent)] px-4 py-6 backdrop-blur-md',
        onClick: s,
        children: t.jsxs('div', {
          className:
            'w-full max-w-3xl rounded-3xl border border-[var(--theme-border2)] bg-[var(--theme-card)] p-6 shadow-[0_30px_100px_var(--theme-shadow)]',
          onClick: (x) => x.stopPropagation(),
          children: [
            t.jsxs('div', {
              className: 'flex items-start justify-between gap-4',
              children: [
                t.jsxs('div', {
                  className: 'flex items-start gap-3',
                  children: [
                    t.jsx('div', {
                      className:
                        'flex size-11 items-center justify-center rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-bg)] text-[var(--theme-accent)]',
                      children: t.jsx(p, {
                        icon: te,
                        size: 20,
                        strokeWidth: 1.8,
                      }),
                    }),
                    t.jsxs('div', {
                      children: [
                        t.jsx('h2', {
                          className:
                            'text-xl font-semibold text-[var(--theme-text)]',
                          children: 'New Agent',
                        }),
                        t.jsx('p', {
                          className: 'mt-1 text-sm text-[var(--theme-muted-2)]',
                          children:
                            'Add a persistent Operations agent to the roster.',
                        }),
                      ],
                    }),
                  ],
                }),
                t.jsx('button', {
                  type: 'button',
                  onClick: s,
                  className:
                    'rounded-full border border-[var(--theme-border)] bg-[var(--theme-bg)] p-2 text-[var(--theme-muted)] hover:text-[var(--theme-text)]',
                  children: t.jsx(p, { icon: Y, size: 18, strokeWidth: 1.8 }),
                }),
              ],
            }),
            t.jsxs('div', {
              className: 'mt-6 space-y-2',
              children: [
                t.jsx('span', {
                  className: 'text-sm font-medium text-[var(--theme-text)]',
                  children: 'Start from a template',
                }),
                t.jsx('div', {
                  className: 'flex flex-wrap gap-2',
                  children: fe.map((x) =>
                    t.jsxs(
                      'button',
                      {
                        type: 'button',
                        onClick: () => A(x.id),
                        className: v(
                          'inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm transition-all',
                          o === x.id
                            ? 'border-[var(--theme-accent)] bg-[var(--theme-accent-soft)] text-[var(--theme-text)]'
                            : 'border-[var(--theme-border)] bg-[var(--theme-bg)] text-[var(--theme-muted)] hover:bg-[var(--theme-card2)]',
                        ),
                        children: [
                          t.jsx('span', {
                            'aria-hidden': 'true',
                            children: x.emoji,
                          }),
                          t.jsx('span', { children: x.name }),
                        ],
                      },
                      x.id,
                    ),
                  ),
                }),
                t.jsx('p', {
                  className: 'text-xs text-[var(--theme-muted)]',
                  children:
                    'Templates fill in emoji, description, and system prompt. You can edit everything before creating.',
                }),
              ],
            }),
            t.jsxs('div', {
              className: 'mt-4 grid gap-4 md:grid-cols-[1.2fr_0.6fr]',
              children: [
                t.jsxs('label', {
                  className: 'space-y-2',
                  children: [
                    t.jsx('span', {
                      className: 'text-sm font-medium text-[var(--theme-text)]',
                      children: 'Name',
                    }),
                    t.jsx('input', {
                      value: n,
                      onChange: (x) => m(x.target.value),
                      placeholder: 'Sage',
                      className:
                        'w-full rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-bg)] px-4 py-3 text-sm text-[var(--theme-text)] outline-none placeholder:text-[var(--theme-muted)] focus:border-[var(--theme-accent)]',
                    }),
                  ],
                }),
                t.jsxs('label', {
                  className: 'space-y-2',
                  children: [
                    t.jsx('span', {
                      className: 'text-sm font-medium text-[var(--theme-text)]',
                      children: 'Emoji',
                    }),
                    t.jsx('input', {
                      value: h,
                      onChange: (x) => u(x.target.value),
                      placeholder: '🐦',
                      className:
                        'w-full rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-bg)] px-4 py-3 text-sm text-[var(--theme-text)] outline-none placeholder:text-[var(--theme-muted)] focus:border-[var(--theme-accent)]',
                    }),
                  ],
                }),
              ],
            }),
            t.jsxs('label', {
              className: 'mt-4 block space-y-2',
              children: [
                t.jsx('span', {
                  className: 'text-sm font-medium text-[var(--theme-text)]',
                  children: 'Model',
                }),
                t.jsx(xt, { value: g, onChange: S, models: f }),
              ],
            }),
            t.jsxs('label', {
              className: 'mt-4 block space-y-2',
              children: [
                t.jsx('span', {
                  className: 'text-sm font-medium text-[var(--theme-text)]',
                  children: 'Description',
                }),
                t.jsx('input', {
                  value: y,
                  onChange: (x) => N(x.target.value),
                  placeholder: 'X/Twitter growth agent',
                  className:
                    'w-full rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-bg)] px-4 py-3 text-sm text-[var(--theme-text)] outline-none placeholder:text-[var(--theme-muted)] focus:border-[var(--theme-accent)]',
                }),
              ],
            }),
            t.jsxs('label', {
              className: 'mt-4 block space-y-2',
              children: [
                t.jsx('span', {
                  className: 'text-sm font-medium text-[var(--theme-text)]',
                  children: 'System Prompt',
                }),
                t.jsx('textarea', {
                  value: _,
                  onChange: (x) => M(x.target.value),
                  placeholder: 'You are Sage, an expert...',
                  className:
                    'min-h-[180px] w-full rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-bg)] px-4 py-3 text-sm text-[var(--theme-text)] outline-none placeholder:text-[var(--theme-muted)] focus:border-[var(--theme-accent)]',
                }),
              ],
            }),
            t.jsxs('div', {
              className: 'mt-6 flex justify-end gap-3',
              children: [
                t.jsx(j, {
                  variant: 'secondary',
                  className:
                    'border border-[var(--theme-border)] bg-[var(--theme-bg)] text-[var(--theme-text)] hover:bg-[var(--theme-card2)]',
                  onClick: s,
                  children: 'Cancel',
                }),
                t.jsx(j, {
                  className:
                    'bg-[var(--theme-accent)] text-primary-950 hover:bg-[var(--theme-accent-strong)]',
                  onClick: () => {
                    a({
                      name: n,
                      emoji: h,
                      model: g,
                      systemPrompt: _,
                      description: y,
                    }).then(() => s())
                  },
                  disabled: c || !n.trim(),
                  children: c ? 'Creating…' : 'Create Agent',
                }),
              ],
            }),
          ],
        }),
      })
    : null
}
function pt(e) {
  if (typeof e == 'string')
    return {
      id: e,
      provider: e.includes('/') ? (e.split('/')[0] ?? 'model') : 'model',
      name: e.split('/').pop() ?? e,
    }
  const r = e.id ?? e.alias ?? e.model ?? ''
  return r
    ? {
        id: r,
        provider: e.provider ?? r.split('/')[0] ?? 'model',
        name: e.label ?? e.displayName ?? e.name ?? r.split('/').pop() ?? r,
      }
    : null
}
function bt({ value: e, onChange: r, models: s }) {
  const [a, c] = d.useState(!1),
    o = d.useRef(null)
  d.useEffect(() => {
    if (!a) return
    function n(m) {
      o.current?.contains(m.target) || c(!1)
    }
    return (
      document.addEventListener('mousedown', n),
      () => document.removeEventListener('mousedown', n)
    )
  }, [a])
  const l = s.find((n) => n.id === e)
  return t.jsxs('div', {
    className: 'relative',
    ref: o,
    children: [
      t.jsxs('button', {
        type: 'button',
        onClick: () => c((n) => !n),
        className:
          'inline-flex min-h-[3rem] w-full items-center justify-between gap-3 rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-bg)] px-4 py-3 text-left text-sm text-[var(--theme-text)] shadow-[0_8px_24px_color-mix(in_srgb,var(--theme-shadow)_18%,transparent)]',
        children: [
          t.jsx('span', {
            className: 'truncate',
            children: l ? `${l.provider} / ${l.name}` : 'Default (auto)',
          }),
          t.jsx(p, {
            icon: B,
            size: 16,
            strokeWidth: 1.8,
            className: v(
              'text-[var(--theme-muted)] transition-transform',
              a && 'rotate-180',
            ),
          }),
        ],
      }),
      a
        ? t.jsx('div', {
            className:
              'absolute left-0 top-[calc(100%+0.5rem)] z-[80] w-full overflow-hidden rounded-2xl border border-[var(--theme-border2)] bg-[var(--theme-card)] shadow-[0_24px_80px_var(--theme-shadow)]',
            children: t.jsxs('div', {
              className: 'max-h-80 overflow-y-auto p-2',
              children: [
                t.jsx('button', {
                  type: 'button',
                  onClick: () => {
                    ;(r(''), c(!1))
                  },
                  className: v(
                    'flex w-full rounded-xl px-3 py-2.5 text-left text-sm',
                    e
                      ? 'hover:bg-[var(--theme-bg)]'
                      : 'bg-[var(--theme-accent-soft)]',
                  ),
                  children: 'Default (auto)',
                }),
                s.map((n) =>
                  t.jsxs(
                    'button',
                    {
                      type: 'button',
                      onClick: () => {
                        ;(r(n.id), c(!1))
                      },
                      className: v(
                        'mt-1 flex w-full rounded-xl px-3 py-2.5 text-left text-sm',
                        e === n.id
                          ? 'bg-[var(--theme-accent-soft)]'
                          : 'hover:bg-[var(--theme-bg)]',
                      ),
                      children: [n.provider, ' / ', n.name],
                    },
                    n.id,
                  ),
                ),
              ],
            }),
          })
        : null,
    ],
  })
}
function gt({ open: e, settings: r, onClose: s, onSave: a }) {
  const [c, o] = d.useState(r)
  d.useEffect(() => {
    o(r)
  }, [r, e])
  const l = T({ queryKey: ['operations', 'models'], queryFn: se, enabled: e }),
    n = d.useMemo(
      () => (l.data?.models ?? []).map(pt).filter((m) => !!m),
      [l.data?.models],
    )
  return e
    ? t.jsx('div', {
        className:
          'fixed inset-0 z-50 flex items-center justify-center bg-[color-mix(in_srgb,var(--theme-bg)_48%,transparent)] px-4 py-6 backdrop-blur-md',
        onClick: s,
        children: t.jsxs('div', {
          className:
            'w-full max-w-2xl rounded-3xl border border-[var(--theme-border2)] bg-[var(--theme-card)] p-6 shadow-[0_30px_100px_var(--theme-shadow)]',
          onClick: (m) => m.stopPropagation(),
          children: [
            t.jsxs('div', {
              className: 'flex items-start justify-between gap-4',
              children: [
                t.jsxs('div', {
                  className: 'flex items-start gap-3',
                  children: [
                    t.jsx('div', {
                      className:
                        'flex size-11 items-center justify-center rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-bg)] text-[var(--theme-accent)]',
                      children: t.jsx(p, {
                        icon: L,
                        size: 20,
                        strokeWidth: 1.8,
                      }),
                    }),
                    t.jsxs('div', {
                      children: [
                        t.jsx('h2', {
                          className:
                            'text-xl font-semibold text-[var(--theme-text)]',
                          children: 'Operations Settings',
                        }),
                        t.jsx('p', {
                          className: 'mt-1 text-sm text-[var(--theme-muted-2)]',
                          children:
                            'Defaults stored locally for the Operations screen.',
                        }),
                      ],
                    }),
                  ],
                }),
                t.jsx('button', {
                  type: 'button',
                  onClick: s,
                  className:
                    'rounded-full border border-[var(--theme-border)] bg-[var(--theme-bg)] p-2 text-[var(--theme-muted)] hover:text-[var(--theme-text)]',
                  children: t.jsx(p, { icon: Y, size: 18, strokeWidth: 1.8 }),
                }),
              ],
            }),
            t.jsxs('div', {
              className: 'mt-6 space-y-4',
              children: [
                t.jsxs('label', {
                  className: 'space-y-2',
                  children: [
                    t.jsx('span', {
                      className: 'text-sm font-medium text-[var(--theme-text)]',
                      children: 'Default model for new agents',
                    }),
                    t.jsx(bt, {
                      value: c.defaultModel,
                      onChange: (m) => o((h) => ({ ...h, defaultModel: m })),
                      models: n,
                    }),
                  ],
                }),
                t.jsxs('label', {
                  className:
                    'flex items-center justify-between rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-bg)] px-4 py-3',
                  children: [
                    t.jsxs('span', {
                      children: [
                        t.jsx('span', {
                          className:
                            'block text-sm font-medium text-[var(--theme-text)]',
                          children: 'Auto-approve',
                        }),
                        t.jsx('span', {
                          className:
                            'block text-sm text-[var(--theme-muted-2)]',
                          children: 'Reserved for future workflow automation.',
                        }),
                      ],
                    }),
                    t.jsx('input', {
                      type: 'checkbox',
                      checked: c.autoApprove,
                      onChange: (m) =>
                        o((h) => ({ ...h, autoApprove: m.target.checked })),
                      className: 'size-4 accent-[var(--theme-accent)]',
                    }),
                  ],
                }),
                t.jsxs('label', {
                  className: 'space-y-2',
                  children: [
                    t.jsx('span', {
                      className: 'text-sm font-medium text-[var(--theme-text)]',
                      children: 'Activity feed length',
                    }),
                    t.jsx('input', {
                      type: 'number',
                      min: 1,
                      max: 20,
                      value: c.activityFeedLength,
                      onChange: (m) =>
                        o((h) => ({
                          ...h,
                          activityFeedLength: Number(m.target.value) || 5,
                        })),
                      className:
                        'w-full rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-bg)] px-4 py-3 text-sm text-[var(--theme-text)] outline-none focus:border-[var(--theme-accent)]',
                    }),
                  ],
                }),
              ],
            }),
            t.jsxs('div', {
              className: 'mt-6 flex justify-end gap-3',
              children: [
                t.jsx(j, {
                  variant: 'secondary',
                  className:
                    'border border-[var(--theme-border)] bg-[var(--theme-bg)] text-[var(--theme-text)] hover:bg-[var(--theme-card2)]',
                  onClick: s,
                  children: 'Cancel',
                }),
                t.jsx(j, {
                  className:
                    'bg-[var(--theme-accent)] text-primary-950 hover:bg-[var(--theme-accent-strong)]',
                  onClick: () => {
                    ;(a(c), s())
                  },
                  children: 'Save Settings',
                }),
              ],
            }),
          ],
        }),
      })
    : null
}
const vt = [
  { id: 'all', label: 'All', emoji: '📋' },
  { id: 'ok', label: 'Success', emoji: '✅' },
  { id: 'error', label: 'Errors', emoji: '❌' },
  { id: 'running', label: 'Running', emoji: '⏳' },
]
function yt(e) {
  const [r] = d.useState(!1),
    s = d.useCallback(() => {}, [])
  return {
    outputs: [],
    availableFilters: vt,
    loading: r,
    error: null,
    refresh: s,
  }
}
function jt(e) {
  return !e || e <= 0
    ? null
    : e < 1e3
      ? `${e}ms`
      : `${Math.round(e / 100) / 10}s`
}
function wt(e) {
  return e.status === 'ok'
    ? {
        label: e.statusLabel || 'Success',
        icon: '✅',
        className: 'bg-emerald-500/12 text-emerald-700 border-emerald-500/20',
      }
    : e.status === 'error'
      ? e.failureKind === 'delivery'
        ? {
            label: e.statusLabel || 'Delivery Failed',
            icon: '📬',
            className: 'bg-sky-500/12 text-sky-700 border-sky-500/20',
          }
        : e.failureKind === 'config'
          ? {
              label: e.statusLabel || 'Config Failed',
              icon: '⚙️',
              className:
                'bg-violet-500/12 text-violet-700 border-violet-500/20',
            }
          : e.failureKind === 'approval'
            ? {
                label: e.statusLabel || 'Needs Approval',
                icon: '✋',
                className: 'bg-amber-500/12 text-amber-700 border-amber-500/20',
              }
            : e.failureKind === 'runtime'
              ? {
                  label: e.statusLabel || 'Model/Runtime Failed',
                  icon: '🧠',
                  className: 'bg-rose-500/12 text-rose-700 border-rose-500/20',
                }
              : {
                  label: e.statusLabel || 'Error',
                  icon: '❌',
                  className: 'bg-rose-500/12 text-rose-700 border-rose-500/20',
                }
      : e.status === 'running'
        ? {
            label: e.statusLabel || 'Running',
            icon: '⏳',
            className: 'bg-amber-500/12 text-amber-700 border-amber-500/20',
          }
        : {
            label: e.statusLabel || 'Unknown',
            icon: '•',
            className: 'bg-primary-200/80 text-primary-700 border-primary-300',
          }
}
function Nt(e) {
  return (
    e
      .match(/\*\*Draft tweet\*\*[\s\S]*?\n([\s\S]*?)(?:\n\*\*|$)/i)?.[1]
      ?.trim() || ''
  )
}
function St(e) {
  return (
    e
      .match(
        /\*\*ChatGPT image prompt\*\*[\s\S]*?\n([\s\S]*?)(?:\n\*\*|$)/i,
      )?.[1]
      ?.trim() || ''
  )
}
function kt(e) {
  return e.match(/https?:\/\/[^\s)]+/i)?.[0] || ''
}
function At({ active: e, label: r, emoji: s, onClick: a }) {
  return t.jsx('button', {
    type: 'button',
    onClick: a,
    className: v(
      'rounded-xl px-3.5 py-2 text-sm font-medium transition-all',
      e
        ? 'bg-[var(--theme-accent)] text-primary-950'
        : 'border border-[var(--theme-border)] bg-[var(--theme-card)] text-[var(--theme-muted)] hover:bg-[var(--theme-card2)]',
    ),
    children: t.jsxs('span', {
      className: 'inline-flex items-center gap-1.5',
      children: [
        s ? t.jsx('span', { children: s }) : null,
        t.jsx('span', { children: r }),
      ],
    }),
  })
}
function Ct({ output: e }) {
  const [r, s] = d.useState(!1),
    [a, c] = d.useState(!1),
    o = wt(e),
    l = ae(e.timestamp),
    n = jt(e.durationMs),
    m = d.useMemo(() => Nt(e.fullOutput), [e.fullOutput]),
    h = d.useMemo(() => St(e.fullOutput), [e.fullOutput]),
    u = d.useMemo(() => kt(e.fullOutput), [e.fullOutput])
  async function g(y, N) {
    if (!y.trim()) {
      C(`No ${N.toLowerCase()} found`, { type: 'warning' })
      return
    }
    try {
      ;(await navigator.clipboard.writeText(y),
        C(`${N} copied`, { type: 'success' }))
    } catch (_) {
      C(_ instanceof Error ? _.message : `Failed to copy ${N.toLowerCase()}`, {
        type: 'error',
      })
    }
  }
  async function S() {
    c(!0)
    try {
      if (!e.jobId) throw new Error('No job ID associated with this output')
      ;(await Se(e.jobId), C('Cron job started', { type: 'success' }))
    } catch (y) {
      C(y instanceof Error ? y.message : 'Failed to retry cron job', {
        type: 'error',
      })
    } finally {
      c(!1)
    }
  }
  return t.jsxs(E.article, {
    layout: !0,
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -8 },
    transition: { duration: 0.18 },
    className:
      'rounded-[1.5rem] border border-[var(--theme-border)] bg-[var(--theme-card)] p-5 shadow-[0_20px_60px_color-mix(in_srgb,var(--theme-shadow)_12%,transparent)]',
    children: [
      t.jsxs('div', {
        className:
          'flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between',
        children: [
          t.jsxs('div', {
            children: [
              t.jsxs('div', {
                className: 'flex items-center gap-2 text-[var(--theme-text)]',
                children: [
                  t.jsx('span', {
                    className: 'text-xl leading-none',
                    children: e.agentEmoji,
                  }),
                  t.jsx('h3', {
                    className: 'text-base font-semibold',
                    children: e.agentName,
                  }),
                ],
              }),
              t.jsx('p', {
                className: 'mt-1 text-xs text-[var(--theme-muted)]',
                children: e.jobName,
              }),
            ],
          }),
          t.jsxs('div', {
            className:
              'flex flex-wrap items-center gap-2 text-xs text-[var(--theme-muted)] sm:justify-end',
            children: [
              t.jsx('span', { children: l }),
              t.jsx('span', { children: '·' }),
              t.jsxs('span', {
                className: v(
                  'inline-flex items-center gap-1 rounded-full border px-2.5 py-1 font-medium',
                  o.className,
                ),
                children: [
                  t.jsx('span', {
                    className: v(e.status === 'running' && 'animate-pulse'),
                    children: o.icon,
                  }),
                  t.jsx('span', { children: o.label }),
                ],
              }),
              n ? t.jsxs('span', { children: ['· ', n] }) : null,
            ],
          }),
        ],
      }),
      t.jsxs('div', {
        className: 'mt-4 space-y-3 text-sm text-[var(--theme-text)]',
        children: [
          t.jsxs('div', {
            className:
              'rounded-[1.1rem] border border-[var(--theme-border)] bg-[var(--theme-bg)] px-4 py-3',
            children: [
              t.jsx('p', {
                className:
                  'text-xs font-medium uppercase tracking-wide text-[var(--theme-muted)]',
                children: 'Summary',
              }),
              t.jsx('p', {
                className:
                  'mt-1 whitespace-pre-wrap text-sm text-[var(--theme-text)]',
                children: e.summary,
              }),
              e.model || e.sessionKey || e.chatSessionKey
                ? t.jsxs('div', {
                    className:
                      'mt-2 flex flex-wrap gap-x-3 gap-y-1 text-xs text-[var(--theme-muted)]',
                    children: [
                      e.model
                        ? t.jsxs('span', { children: ['Model: ', e.model] })
                        : null,
                      e.sessionKey
                        ? t.jsxs('span', {
                            children: ['Session: ', e.sessionKey],
                          })
                        : null,
                      e.chatSessionKey && e.chatSessionKey !== e.sessionKey
                        ? t.jsxs('span', {
                            children: ['Chat: ', e.chatSessionKey],
                          })
                        : null,
                    ],
                  })
                : null,
            ],
          }),
          t.jsx('div', {
            className:
              'overflow-hidden rounded-[1.1rem] border border-[var(--theme-border)] bg-[var(--theme-card)]/75 px-4 py-3',
            children: t.jsxs('div', {
              className: v('relative', !r && 'max-h-[8.5rem] overflow-hidden'),
              children: [
                t.jsx(ye, { children: e.fullOutput }),
                r
                  ? null
                  : t.jsx('div', {
                      className:
                        'pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-linear-to-t from-white to-transparent',
                    }),
              ],
            }),
          }),
          e.error
            ? t.jsx('p', {
                className: v(
                  'rounded-xl border px-3 py-2 text-sm',
                  e.failureKind === 'delivery'
                    ? 'border-sky-500/25 bg-sky-500/8 text-sky-700'
                    : e.failureKind === 'config'
                      ? 'border-violet-500/25 bg-violet-500/8 text-violet-700'
                      : e.failureKind === 'approval'
                        ? 'border-amber-500/25 bg-amber-500/8 text-amber-700'
                        : 'border-[var(--theme-danger-border)] bg-[var(--theme-danger-soft)] text-[var(--theme-danger)]',
                ),
                children:
                  e.failureKind === 'delivery'
                    ? `Delivery issue: ${e.error}`
                    : e.failureKind === 'config'
                      ? `Config issue: ${e.error}`
                      : e.failureKind === 'approval'
                        ? `Approval needed: ${e.error}`
                        : e.failureKind === 'runtime'
                          ? `Runtime issue: ${e.error}`
                          : `Error: ${e.error}`,
              })
            : null,
        ],
      }),
      t.jsxs('div', {
        className: 'mt-4 flex flex-wrap items-center justify-end gap-2',
        children: [
          t.jsxs(j, {
            variant: 'secondary',
            className:
              'border border-[var(--theme-border)] bg-[var(--theme-card)] text-[var(--theme-text)] hover:bg-[var(--theme-card2)]',
            onClick: () => {
              g(e.fullOutput, 'Output')
            },
            children: [
              t.jsx(p, { icon: Fe, size: 16, strokeWidth: 1.8 }),
              'Copy',
            ],
          }),
          e.agentId === 'sage' && m
            ? t.jsx(j, {
                variant: 'secondary',
                className:
                  'border border-[var(--theme-border)] bg-[var(--theme-card)] text-[var(--theme-text)] hover:bg-[var(--theme-card2)]',
                onClick: () => {
                  g(m, 'Tweet')
                },
                children: 'Copy Tweet',
              })
            : null,
          e.agentId === 'sage' && h
            ? t.jsx(j, {
                variant: 'secondary',
                className:
                  'border border-[var(--theme-border)] bg-[var(--theme-card)] text-[var(--theme-text)] hover:bg-[var(--theme-card2)]',
                onClick: () => {
                  g(h, 'Image prompt')
                },
                children: 'Copy Image Prompt',
              })
            : null,
          u
            ? t.jsxs(j, {
                variant: 'secondary',
                className:
                  'border border-[var(--theme-border)] bg-[var(--theme-card)] text-[var(--theme-text)] hover:bg-[var(--theme-card2)]',
                onClick: () => window.open(u, '_blank', 'noopener,noreferrer'),
                children: [
                  t.jsx(p, { icon: Te, size: 16, strokeWidth: 1.8 }),
                  'Link',
                ],
              })
            : null,
          e.agentId === 'trader'
            ? t.jsx(j, {
                variant: 'secondary',
                className:
                  'border border-[var(--theme-border)] bg-[var(--theme-card)] text-[var(--theme-text)] hover:bg-[var(--theme-card2)]',
                onClick: () => C('Signals view coming soon', { type: 'info' }),
                children: 'View Signals',
              })
            : null,
          e.status === 'error'
            ? t.jsx(j, {
                variant: 'secondary',
                className:
                  'border border-[var(--theme-border)] bg-[var(--theme-card)] text-[var(--theme-text)] hover:bg-[var(--theme-card2)]',
                onClick: () => {
                  S()
                },
                disabled: a,
                children: a ? 'Retrying…' : 'Retry',
              })
            : null,
          t.jsxs(j, {
            variant: 'secondary',
            className:
              'border border-[var(--theme-border)] bg-[var(--theme-card)] text-[var(--theme-text)] hover:bg-[var(--theme-card2)]',
            onClick: () => s((y) => !y),
            children: [
              t.jsx(p, { icon: r ? ze : B, size: 16, strokeWidth: 1.8 }),
              r ? 'Collapse' : 'Expand',
            ],
          }),
        ],
      }),
    ],
  })
}
function _t() {
  const [e, r] = d.useState('all'),
    { outputs: s, availableFilters: a, loading: c, refresh: o } = yt()
  return c
    ? t.jsx('section', {
        className:
          'rounded-3xl border border-[var(--theme-border)] bg-[var(--theme-card)] px-6 py-14 text-center text-sm text-[var(--theme-muted)] shadow-[0_24px_80px_var(--theme-shadow)]',
        children: 'Loading outputs…',
      })
    : t.jsxs(E.section, {
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.24 },
        className:
          'rounded-3xl border border-[var(--theme-border)] bg-[var(--theme-card)] p-4 shadow-[0_24px_80px_var(--theme-shadow)] md:p-5',
        children: [
          t.jsx('div', {
            className:
              'rounded-[1.5rem] border border-[var(--theme-border)] bg-[var(--theme-card)]/90 p-3 backdrop-blur-sm md:p-4',
            children: t.jsxs('div', {
              className:
                'flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between',
              children: [
                t.jsx('div', {
                  className: 'flex flex-wrap gap-2',
                  children: a.map((l) =>
                    t.jsx(
                      At,
                      {
                        active: e === l.id,
                        label: l.label,
                        emoji: l.emoji,
                        onClick: () => r(l.id),
                      },
                      l.id,
                    ),
                  ),
                }),
                t.jsxs(j, {
                  variant: 'secondary',
                  className:
                    'border border-[var(--theme-border)] bg-[var(--theme-card)] text-[var(--theme-text)] hover:bg-[var(--theme-card2)]',
                  onClick: () => {
                    o()
                  },
                  children: [
                    t.jsx(p, { icon: Ie, size: 16, strokeWidth: 1.8 }),
                    'Refresh',
                  ],
                }),
              ],
            }),
          }),
          t.jsx('div', {
            className: 'mt-4 flex items-center justify-between px-1',
            children: t.jsxs('div', {
              children: [
                t.jsx('h2', {
                  className: 'text-lg font-semibold text-[var(--theme-text)]',
                  children: 'Outputs',
                }),
                t.jsxs('p', {
                  className: 'mt-1 text-sm text-[var(--theme-muted-2)]',
                  children: [
                    s.length,
                    ' recent ',
                    s.length === 1 ? 'run' : 'runs',
                    ' across the team',
                  ],
                }),
              ],
            }),
          }),
          t.jsx('div', {
            className: 'mt-4',
            children:
              s.length === 0
                ? t.jsx('div', {
                    className:
                      'rounded-[1.5rem] border border-dashed border-[var(--theme-border)] bg-[var(--theme-bg)] px-5 py-12 text-center text-sm text-[var(--theme-muted)]',
                    children:
                      'No agent outputs yet. Configure cron jobs in agent settings to get started.',
                  })
                : t.jsx(ve, {
                    mode: 'popLayout',
                    children: t.jsx('div', {
                      className: 'space-y-4',
                      children: s.map((l) => t.jsx(Ct, { output: l }, l.id)),
                    }),
                  }),
          }),
        ],
      })
}
const oe = 'operations:agents:',
  Ae = 'operations-settings',
  pe = [
    { body: '#3b82f6', accent: '#93c5fd' },
    { body: '#10b981', accent: '#6ee7b7' },
    { body: '#f97316', accent: '#fdba74' },
    { body: '#8b5cf6', accent: '#c4b5fd' },
    { body: '#ec4899', accent: '#f9a8d4' },
    { body: '#06b6d4', accent: '#67e8f9' },
    { body: '#eab308', accent: '#fde047' },
    { body: '#ef4444', accent: '#fca5a5' },
  ]
function Ce(e) {
  let r = 0
  for (const s of e) r = (r * 31 + s.charCodeAt(0)) >>> 0
  return r
}
function K(e) {
  return pe[Ce(e) % pe.length]?.body ?? '#3b82f6'
}
function q(e) {
  const r = ['🤖', '🐦', '🔨', '✍️', '📊', '🛰️', '🧠', '🛠️']
  return r[Ce(e) % r.length] ?? '🤖'
}
function ce(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}
function I(e) {
  if (typeof e == 'number' && Number.isFinite(e)) return e > 1e12 ? e : e * 1e3
  if (typeof e == 'string' && e.trim()) {
    const r = Date.parse(e)
    return Number.isNaN(r) ? null : r
  }
  return null
}
function b(e) {
  return typeof e == 'string' ? e.trim() : ''
}
function Pt(e) {
  const r = e.lastMessage
  if (r) {
    if (typeof r.text == 'string' && r.text.trim()) return r.text.trim()
    if (Array.isArray(r.content)) {
      const s = r.content
        .filter((a) => !a.type || a.type === 'text')
        .map((a) => a.text ?? '')
        .join(
          `
`,
        )
        .trim()
      if (s) return s
    }
  }
  return b(e.derivedTitle) || b(e.title) || b(e.task) || b(e.initialMessage)
}
function _e(e, r = 120) {
  const s = e.replace(/\s+/g, ' ').trim()
  return s.length <= r ? s : `${s.slice(0, Math.max(0, r - 1)).trimEnd()}…`
}
function be(e) {
  if (!Array.isArray(e)) return []
  const r = []
  for (const s of e) {
    if (!s || typeof s != 'object' || Array.isArray(s)) continue
    const a = s,
      c = ce(b(a.id) || b(a.name))
    c &&
      r.push({
        id: c,
        name: b(a.name) || c,
        model: b(a.model),
        workspace: b(a.workspace) || void 0,
        agentDir: b(a.agentDir) || void 0,
      })
  }
  return r
}
async function Et() {
  const e = await fetch('/api/profiles/list')
  if (!(e.headers.get('content-type') || '').includes('json'))
    throw new Error('/api/profiles/list returned non-JSON')
  const s = await e.json().catch(() => ({}))
  if (!e.ok || s.error) throw new Error(s.error || `HTTP ${e.status}`)
  return Array.isArray(s.profiles) ? s.profiles : []
}
async function Ot() {
  const e = await Et(),
    r = e.map((a) => ({
      id: a.name,
      name: a.name === 'default' ? 'Workspace' : a.name,
      model: a.model || '',
      workspace: a.path,
      agentDir: a.path,
    })),
    s = e.find((a) => a.name === 'default')?.model || ''
  return { ok: !0, parsed: { agents: { list: r }, defaultModel: s } }
}
async function Mt(e) {
  const r = await fetch('/api/profiles/create', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(e),
    }),
    s = await r.json().catch(() => ({}))
  if (!r.ok || s.ok === !1)
    throw new Error(s.error || `Failed to create profile (${r.status})`)
}
async function ge(e, r) {
  const s = await fetch('/api/profiles/update', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ name: e, patch: r }),
    }),
    a = await s.json().catch(() => ({}))
  if (!s.ok || a.ok === !1)
    throw new Error(a.error || `Failed to update profile (${s.status})`)
}
async function $t(e) {
  const r = await fetch('/api/profiles/delete', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ name: e }),
    }),
    s = await r.json().catch(() => ({}))
  if (!r.ok || s.ok === !1)
    throw new Error(s.error || `Failed to delete profile (${r.status})`)
}
function Z(e) {
  if (typeof window > 'u')
    return {
      emoji: q(e),
      description: '',
      systemPrompt: '',
      color: K(e),
      createdAt: new Date().toISOString(),
    }
  try {
    const r = window.localStorage.getItem(`${oe}${e}`)
    if (!r)
      return {
        emoji: q(e),
        description: '',
        systemPrompt: '',
        color: K(e),
        createdAt: new Date().toISOString(),
      }
    const s = JSON.parse(r)
    return {
      emoji: b(s.emoji) || q(e),
      description: b(s.description),
      systemPrompt: b(s.systemPrompt),
      color: b(s.color) || K(e),
      createdAt: b(s.createdAt) || new Date().toISOString(),
    }
  } catch {
    return {
      emoji: q(e),
      description: '',
      systemPrompt: '',
      color: K(e),
      createdAt: new Date().toISOString(),
    }
  }
}
function ee(e, r) {
  typeof window > 'u' ||
    window.localStorage.setItem(`${oe}${e}`, JSON.stringify(r))
}
function Rt(e) {
  typeof window > 'u' || window.localStorage.removeItem(`${oe}${e}`)
}
function It() {
  if (typeof window > 'u')
    return { defaultModel: '', autoApprove: !1, activityFeedLength: 5 }
  try {
    const e = window.localStorage.getItem(Ae)
    if (!e) return { defaultModel: '', autoApprove: !1, activityFeedLength: 5 }
    const r = JSON.parse(e),
      s = Number(r.activityFeedLength)
    return {
      defaultModel: b(r.defaultModel),
      autoApprove: !!r.autoApprove,
      activityFeedLength:
        Number.isFinite(s) && s > 0
          ? Math.min(20, Math.max(1, Math.round(s)))
          : 5,
    }
  } catch {
    return { defaultModel: '', autoApprove: !1, activityFeedLength: 5 }
  }
}
function Ft(e) {
  typeof window > 'u' || window.localStorage.setItem(Ae, JSON.stringify(e))
}
function Tt(e, r) {
  return r.filter((s) => s.name?.startsWith(`ops:${e}:`))
}
function zt(e, r) {
  return [...r]
    .filter((s) => {
      const a = b(s.label),
        c = b(s.key)
      return a.includes(e) || c.includes(e)
    })
    .sort((s, a) => {
      const c = I(s.updatedAt) ?? 0
      return (I(a.updatedAt) ?? 0) - c
    })
}
function Lt(e) {
  if (!e) return 'idle'
  const r = b(e.status).toLowerCase()
  if (r.includes('fail') || r.includes('error')) return 'error'
  const s = I(e.updatedAt)
  return s && Date.now() - s < 12e4 ? 'active' : 'idle'
}
function Dt(e, r) {
  if (e === 'error') return 'failed'
  if (e === 'active') return 'running'
  const s = b(r?.status).toLowerCase()
  return s.includes('complete') || s.includes('done')
    ? 'complete'
    : r
      ? 'thinking'
      : 'queued'
}
function Kt(e, r) {
  const s = r?.progress
  return typeof s == 'number' && Number.isFinite(s)
    ? Math.max(5, Math.min(100, s))
    : e === 'active'
      ? 72
      : e === 'error' || r
        ? 100
        : 18
}
function qt(e) {
  const r = e - Date.now()
  if (r <= 0) return 'soon'
  const s = Math.round(r / 6e4)
  if (s < 60) return `in ${s}m`
  const a = Math.round(s / 60)
  return a < 24
    ? `in ${a}h`
    : new Date(e).toLocaleDateString(void 0, {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
      })
}
function Qt(e) {
  return ce(e) || 'scheduled-run'
}
function Wt(e, r) {
  const s = I(e.lastRun?.startedAt),
    a = _e(
      b(e.lastRun?.deliverySummary) ||
        b(e.description) ||
        b(e.name).replace(`ops:${r}:`, '').replace(/-/g, ' '),
    )
  return !s || !a
    ? null
    : {
        id: `cron-${e.id}`,
        agentId: r,
        summary: a,
        timestamp: s,
        source: 'cron',
      }
}
function Jt(e, r) {
  const s = I(e.updatedAt) ?? I(e.createdAt),
    a = _e(Pt(e))
  return !s || !a
    ? null
    : {
        id: `session-${b(e.key) || s}`,
        agentId: r,
        summary: a,
        timestamp: s,
        source: 'session',
      }
}
function Yt(e) {
  return `agent:main:ops-${e}`
}
function Bt() {
  const e = re(),
    [r, s] = d.useState(null),
    [a, c] = d.useState(() => It()),
    [o, l] = d.useState(0),
    n = T({
      queryKey: ['operations', 'config'],
      queryFn: Ot,
      refetchInterval: 3e4,
    }),
    m = T({
      queryKey: ['operations', 'sessions'],
      queryFn: async () => {
        const i = await Qe()
        return Array.isArray(i.sessions) ? i.sessions : []
      },
      refetchInterval: 15e3,
    }),
    h = T({
      queryKey: ['operations', 'cron'],
      queryFn: tt,
      refetchInterval: 3e4,
    }),
    u = d.useMemo(() => {
      const i = n.data?.parsed,
        f = be(i?.agents?.list),
        x = new Set(['main', 'pc1-coder', 'pc1-planner', 'pc1-critic']),
        k = f.filter((O) => !x.has(O.id)),
        F = m.data ?? [],
        Q = h.data ?? []
      return k.map((O) => {
        const P = Z(O.id),
          $ = zt(O.id, F),
          R = $[0] ?? null,
          W = Tt(O.id, Q),
          U =
            W.filter((w) => w.enabled)
              .map((w) => I(w.nextRunAt))
              .filter((w) => w !== null)
              .sort((w, D) => w - D)[0] ?? null,
          H =
            I(R?.updatedAt) ??
            W.map((w) => I(w.lastRun?.startedAt))
              .filter((w) => w !== null)
              .sort((w, D) => D - w)[0] ??
            null,
          G = Lt(R),
          Pe = [...$.map((w) => Jt(w, O.id)), ...W.map((w) => Wt(w, O.id))]
            .filter((w) => !!w)
            .sort((w, D) => D.timestamp - w.timestamp)
            .slice(0, 5)
        return {
          ...O,
          meta: P,
          shortModel: Je(O.model || 'Custom'),
          status: G,
          sessionKey: Yt(O.id),
          sessions: $,
          latestSession: R,
          jobs: W,
          nextRunAt: U,
          lastActivityAt: H,
          activityLabel: U
            ? `Next ${qt(U)}`
            : H
              ? `Last ${ae(H)}`
              : 'No activity yet',
          progressValue: Kt(G, R),
          progressStatus: Dt(G, R),
          recentOutputs: Pe,
        }
      })
    }, [n.data, m.data, h.data, o]),
    g = u.find((i) => i.id === r) ?? null,
    S = d.useMemo(
      () =>
        u
          .flatMap((i) => i.recentOutputs)
          .sort((i, f) => f.timestamp - i.timestamp)
          .slice(0, a.activityFeedLength),
      [u, a.activityFeedLength],
    ),
    y = z({
      mutationFn: async (i) => {
        const f = ce(i.name)
        if (!f) throw new Error('Agent name is required')
        if (f === 'default')
          throw new Error('"default" is reserved — pick another name')
        if (be(n.data?.parsed?.agents?.list).some((k) => k.id === f))
          throw new Error('A profile with this name already exists')
        ;(await Mt({ name: f, model: i.model.trim() || void 0 }),
          (i.systemPrompt.trim() || i.description?.trim()) &&
            (await ge(f, {
              system_prompt: i.systemPrompt.trim() || void 0,
              description: i.description?.trim() || void 0,
            })),
          ee(f, {
            emoji: i.emoji.trim() || q(f),
            description: i.description?.trim() ?? '',
            systemPrompt: i.systemPrompt.trim(),
            color: K(f),
            createdAt: new Date().toISOString(),
          }),
          l((k) => k + 1),
          s(f))
      },
      onSuccess: async () => {
        ;(await e.invalidateQueries({ queryKey: ['operations', 'config'] }),
          C('Agent created', { type: 'success' }))
      },
      onError: (i) => {
        C(i instanceof Error ? i.message : 'Failed to create agent', {
          type: 'error',
        })
      },
    }),
    N = z({
      mutationFn: async (i) => {
        const f = {}
        ;(i.model.trim() && (f.model = i.model.trim()),
          i.systemPrompt.trim() && (f.system_prompt = i.systemPrompt.trim()),
          Object.keys(f).length > 0 && (await ge(i.agentId, f)))
        const x = Z(i.agentId)
        ;(ee(i.agentId, {
          ...x,
          emoji: i.emoji.trim() || x.emoji,
          systemPrompt: i.systemPrompt.trim(),
        }),
          l((k) => k + 1))
      },
      onSuccess: async () => {
        ;(await e.invalidateQueries({ queryKey: ['operations', 'config'] }),
          C('Agent settings saved', { type: 'success' }))
      },
      onError: (i) => {
        C(i instanceof Error ? i.message : 'Failed to save agent', {
          type: 'error',
        })
      },
    }),
    _ = z({
      mutationFn: async (i) => {
        if (i === 'default')
          throw new Error('Cannot delete the default profile')
        ;(await $t(i), Rt(i), l((f) => f + 1), s((f) => (f === i ? null : f)))
      },
      onSuccess: async () => {
        ;(await e.invalidateQueries({ queryKey: ['operations', 'config'] }),
          await e.invalidateQueries({ queryKey: ['operations', 'sessions'] }),
          C('Agent deleted', { type: 'success' }))
      },
      onError: (i) => {
        C(i instanceof Error ? i.message : 'Failed to delete agent', {
          type: 'error',
        })
      },
    })
  function M(i, f) {
    const x = { ...Z(i), ...f }
    ;(ee(i, x), l((k) => k + 1))
  }
  function A(i) {
    ;(c(i), Ft(i), C('Operations settings saved', { type: 'success' }))
  }
  return {
    agents: u,
    selectedAgent: g,
    selectedAgentId: r,
    setSelectedAgent: s,
    configQuery: n,
    sessionsQuery: m,
    cronJobsQuery: h,
    recentActivity: S,
    settings: a,
    saveSettings: A,
    defaultModel: b(n.data?.parsed?.defaultModel) || a.defaultModel,
    createAgent: y.mutateAsync,
    isCreatingAgent: y.isPending,
    saveAgent: N.mutateAsync,
    isSavingAgent: N.isPending,
    deleteAgent: _.mutateAsync,
    isDeletingAgent: _.isPending,
    saveAgentMeta: M,
    refreshAll: async () => {
      await Promise.all([
        e.invalidateQueries({ queryKey: ['operations', 'config'] }),
        e.invalidateQueries({ queryKey: ['operations', 'sessions'] }),
        e.invalidateQueries({ queryKey: ['operations', 'cron'] }),
      ])
    },
    slugifyJobLabel: Qt,
  }
}
const Ut = {
  '--theme-bg': 'var(--color-surface)',
  '--theme-card': 'var(--color-primary-50)',
  '--theme-card2': 'var(--color-primary-100)',
  '--theme-border': 'var(--color-primary-200)',
  '--theme-border2': 'var(--color-primary-400)',
  '--theme-text': 'var(--color-ink)',
  '--theme-muted': 'var(--color-primary-700)',
  '--theme-muted-2': 'var(--color-primary-600)',
  '--theme-accent': 'var(--color-accent-500)',
  '--theme-accent-strong': 'var(--color-accent-600)',
  '--theme-accent-soft':
    'color-mix(in srgb, var(--color-accent-500) 12%, transparent)',
  '--theme-accent-soft-strong':
    'color-mix(in srgb, var(--color-accent-500) 18%, transparent)',
  '--theme-shadow':
    'color-mix(in srgb, var(--color-primary-950) 14%, transparent)',
  '--theme-danger': 'var(--color-red-600, #dc2626)',
  '--theme-danger-soft':
    'color-mix(in srgb, var(--theme-danger) 12%, transparent)',
  '--theme-danger-soft-strong':
    'color-mix(in srgb, var(--theme-danger) 18%, transparent)',
  '--theme-danger-border': 'color-mix(in srgb, var(--theme-danger) 35%, white)',
  '--theme-warning': 'var(--color-amber-600, #d97706)',
  '--theme-warning-soft':
    'color-mix(in srgb, var(--theme-warning) 12%, transparent)',
  '--theme-warning-soft-strong':
    'color-mix(in srgb, var(--theme-warning) 18%, transparent)',
  '--theme-warning-border':
    'color-mix(in srgb, var(--theme-warning) 35%, white)',
}
function Ht() {
  d.useEffect(() => {
    We()
  }, [])
  const [e, r] = d.useState(!1),
    [s, a] = d.useState(!1),
    [c, o] = d.useState(null),
    [l, n] = d.useState('overview'),
    {
      agents: m,
      recentActivity: h,
      configQuery: u,
      sessionsQuery: g,
      cronJobsQuery: S,
      settings: y,
      saveSettings: N,
      defaultModel: _,
      createAgent: M,
      isCreatingAgent: A,
      saveAgent: i,
      isSavingAgent: f,
      deleteAgent: x,
      isDeletingAgent: k,
    } = Bt(),
    F = u.isPending || g.isPending || S.isPending,
    Q =
      (u.error instanceof Error && u.error.message) ||
      (g.error instanceof Error && g.error.message) ||
      (S.error instanceof Error && S.error.message) ||
      null,
    O = m.find((P) => P.id === c) ?? null
  return t.jsxs('main', {
    className:
      'min-h-full bg-surface px-3 pb-24 pt-5 text-primary-900 md:px-5 md:pt-8',
    style: Ut,
    children: [
      t.jsxs('section', {
        className: 'mx-auto w-full max-w-[1320px] space-y-4',
        children: [
          t.jsxs('header', {
            className:
              'flex flex-col gap-4 rounded-xl border border-primary-200 bg-primary-50/80 px-5 py-4 shadow-sm md:flex-row md:items-center md:justify-between',
            children: [
              t.jsxs('div', {
                className: 'flex items-center gap-3',
                children: [
                  t.jsx('div', {
                    className:
                      'flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-card)] text-[var(--theme-accent)] shadow-sm',
                    children: t.jsx(p, {
                      icon: Le,
                      size: 22,
                      strokeWidth: 1.8,
                    }),
                  }),
                  t.jsxs('div', {
                    children: [
                      t.jsx('h1', {
                        className: 'text-base font-semibold text-primary-900',
                        children: 'Operations',
                      }),
                      t.jsx('p', {
                        className: 'mt-1 text-sm text-primary-600',
                        children: 'Your persistent agent team',
                      }),
                    ],
                  }),
                ],
              }),
              t.jsxs('div', {
                className: 'flex flex-wrap items-center gap-3',
                children: [
                  t.jsxs('div', {
                    className:
                      'inline-flex rounded-xl border border-[var(--theme-border)] bg-[var(--theme-card)] p-1 shadow-sm',
                    children: [
                      t.jsx('button', {
                        type: 'button',
                        onClick: () => n('overview'),
                        className: v(
                          'rounded-lg px-4 py-2 text-sm font-medium transition-all',
                          l === 'overview'
                            ? 'bg-[var(--theme-accent)] text-primary-950'
                            : 'text-[var(--theme-muted)] hover:bg-[var(--theme-card2)]',
                        ),
                        children: 'Overview',
                      }),
                      t.jsx('button', {
                        type: 'button',
                        onClick: () => n('outputs'),
                        className: v(
                          'rounded-lg px-4 py-2 text-sm font-medium transition-all',
                          l === 'outputs'
                            ? 'bg-[var(--theme-accent)] text-primary-950'
                            : 'text-[var(--theme-muted)] hover:bg-[var(--theme-card2)]',
                        ),
                        children: 'Outputs',
                      }),
                    ],
                  }),
                  t.jsxs(j, {
                    className:
                      'bg-[var(--theme-accent)] text-primary-950 hover:bg-[var(--theme-accent-strong)]',
                    onClick: () => r(!0),
                    children: [
                      t.jsx(p, { icon: te, size: 16, strokeWidth: 1.8 }),
                      'New Agent',
                    ],
                  }),
                  t.jsxs(j, {
                    variant: 'secondary',
                    className:
                      'border border-[var(--theme-border)] bg-[var(--theme-card)] text-[var(--theme-text)] hover:bg-[var(--theme-card2)]',
                    onClick: () => a(!0),
                    children: [
                      t.jsx(p, { icon: L, size: 16, strokeWidth: 1.8 }),
                      'Settings',
                    ],
                  }),
                ],
              }),
            ],
          }),
          F
            ? t.jsx('section', {
                className:
                  'rounded-3xl border border-[var(--theme-border)] bg-[var(--theme-card)] px-6 py-12 text-center text-sm text-[var(--theme-muted)] shadow-[0_24px_80px_var(--theme-shadow)]',
                children: 'Loading Operations roster…',
              })
            : Q
              ? t.jsx('section', {
                  className:
                    'rounded-3xl border border-[var(--theme-danger-border)] bg-[var(--theme-danger-soft)] px-6 py-12 text-center text-sm text-[var(--theme-text)] shadow-[0_24px_80px_var(--theme-shadow)]',
                  children: Q,
                })
              : l === 'outputs'
                ? t.jsx(_t, {})
                : t.jsxs(t.Fragment, {
                    children: [
                      t.jsx(E.div, {
                        initial: { opacity: 0, y: 12 },
                        animate: { opacity: 1, y: 0 },
                        transition: { duration: 0.25 },
                        children: t.jsx(He, { totalAgents: m.length }),
                      }),
                      t.jsxs('section', {
                        className:
                          'grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3',
                        children: [
                          m.map((P, $) =>
                            t.jsx(
                              E.div,
                              {
                                initial: { opacity: 0, y: 12 },
                                animate: { opacity: 1, y: 0 },
                                transition: { delay: $ * 0.04, duration: 0.22 },
                                children: t.jsx(lt, {
                                  agent: P,
                                  onOpenSettings: (R) => o(R),
                                }),
                              },
                              P.id,
                            ),
                          ),
                          t.jsxs(E.button, {
                            type: 'button',
                            initial: { opacity: 0, y: 12 },
                            animate: { opacity: 1, y: 0 },
                            transition: {
                              delay: m.length * 0.04,
                              duration: 0.22,
                            },
                            onClick: () => r(!0),
                            className:
                              'flex min-h-[19rem] flex-col items-center justify-center rounded-[1.5rem] border border-dashed border-[var(--theme-border)] bg-[var(--theme-card)] p-4 text-center shadow-[0_20px_60px_color-mix(in_srgb,var(--theme-shadow)_10%,transparent)] transition-colors hover:border-[var(--theme-accent)] hover:bg-[var(--theme-accent-soft)]',
                            children: [
                              t.jsx(p, {
                                icon: te,
                                size: 32,
                                strokeWidth: 1.7,
                                className: 'text-[var(--theme-muted)]',
                              }),
                              t.jsx('span', {
                                className:
                                  'mt-3 text-sm text-[var(--theme-muted)]',
                                children: 'Add Agent',
                              }),
                            ],
                          }),
                        ],
                      }),
                      t.jsxs('section', {
                        className:
                          'rounded-3xl border border-[var(--theme-border)] bg-[var(--theme-card)] p-5 shadow-[0_24px_80px_var(--theme-shadow)]',
                        children: [
                          t.jsx('div', {
                            className:
                              'flex items-center justify-between gap-3',
                            children: t.jsxs('div', {
                              children: [
                                t.jsx('h2', {
                                  className:
                                    'text-lg font-semibold text-[var(--theme-text)]',
                                  children: 'Recent Activity',
                                }),
                                t.jsx('p', {
                                  className:
                                    'mt-1 text-sm text-[var(--theme-muted-2)]',
                                  children: 'Latest outputs across the team',
                                }),
                              ],
                            }),
                          }),
                          t.jsx('div', {
                            className: 'mt-4 space-y-3',
                            children:
                              h.length > 0
                                ? h.map((P) => {
                                    const $ = m.find((R) => R.id === P.agentId)
                                    return t.jsxs(
                                      'div',
                                      {
                                        className:
                                          'flex flex-col gap-2 rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-bg)] px-4 py-3 md:flex-row md:items-center md:justify-between',
                                        children: [
                                          t.jsxs('p', {
                                            className:
                                              'text-sm text-[var(--theme-text)]',
                                            children: [
                                              t.jsx('span', {
                                                className: 'mr-2',
                                                children: $?.meta.emoji ?? '🤖',
                                              }),
                                              t.jsxs('span', {
                                                className: 'font-medium',
                                                children: [
                                                  $?.name ?? P.agentId,
                                                  ':',
                                                ],
                                              }),
                                              ' ',
                                              P.summary,
                                            ],
                                          }),
                                          t.jsx('span', {
                                            className:
                                              'shrink-0 text-sm text-[var(--theme-muted)]',
                                            children: ae(P.timestamp),
                                          }),
                                        ],
                                      },
                                      P.id,
                                    )
                                  })
                                : t.jsx('div', {
                                    className:
                                      'rounded-2xl border border-dashed border-[var(--theme-border)] bg-[var(--theme-bg)] px-4 py-6 text-sm text-[var(--theme-muted)]',
                                    children: 'No recent activity yet.',
                                  }),
                          }),
                        ],
                      }),
                    ],
                  }),
        ],
      }),
      t.jsx(ft, {
        open: e,
        defaultModel: _,
        onClose: () => r(!1),
        onCreate: M,
        isSaving: A,
      }),
      t.jsx(gt, { open: s, settings: y, onClose: () => a(!1), onSave: N }),
      t.jsx(ht, {
        open: !!O,
        agent: O,
        onClose: () => o(null),
        onSave: i,
        onDelete: async (P) => {
          ;(await x(P), o(($) => ($ === P ? null : $)))
        },
        isSaving: f,
        isDeleting: k,
      }),
    ],
  })
}
const Zt = function () {
  return (De('Operations'), t.jsx(Ht, {}))
}
export { Zt as component }
