import {
  r as f,
  j as e,
  A as w,
  m as N,
  H as v,
  f as F,
  h as R,
  k as L,
  l as j,
  t as y,
  L as M,
  S as q,
  R as z,
  a9 as T,
  a3 as $,
  a2 as _,
  aa as P,
  a7 as A,
  a4 as H,
  ab as K,
  c as O,
  F as Q,
  G as U,
  I as G,
} from './main-r209hwEK.js'
import { u as B } from './use-page-title-DnnF8Z-t.js'
const W = [
    { label: 'Every 15m', value: 'every 15m' },
    { label: 'Every 30m', value: 'every 30m' },
    { label: 'Every 1h', value: 'every 1h' },
    { label: 'Every 6h', value: 'every 6h' },
    { label: 'Daily', value: '0 9 * * *' },
    { label: 'Weekly', value: '0 9 * * 1' },
  ],
  Y = ['local', 'telegram', 'discord']
function J() {
  return {
    name: '',
    schedule: 'every 30m',
    prompt: '',
    skillsInput: '',
    deliver: ['local'],
    repeatMode: 'unlimited',
    repeatCount: '1',
  }
}
function V({ open: t, isSubmitting: s = !1, onOpenChange: i, onSubmit: c }) {
  const [n, o] = f.useState(J)
  f.useEffect(() => {
    if (!t) {
      o(J())
      return
    }
    const a = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const r = (l) => {
      l.key === 'Escape' && i(!1)
    }
    return (
      window.addEventListener('keydown', r),
      () => {
        ;((document.body.style.overflow = a),
          window.removeEventListener('keydown', r))
      }
    )
  }, [t, i])
  function m(a) {
    o((r) => {
      const l = r.deliver.includes(a)
        ? r.deliver.filter((u) => u !== a)
        : [...r.deliver, a]
      return { ...r, deliver: l }
    })
  }
  function h(a) {
    a.preventDefault()
    const r = n.skillsInput
      .split(',')
      .map((l) => l.trim())
      .filter(Boolean)
    c({
      name: n.name.trim(),
      schedule: n.schedule.trim(),
      prompt: n.prompt.trim(),
      deliver: n.deliver.length > 0 ? n.deliver : void 0,
      skills: r.length > 0 ? Array.from(new Set(r)) : void 0,
      repeat:
        n.repeatMode === 'limited'
          ? Math.max(1, Number.parseInt(n.repeatCount, 10) || 1)
          : void 0,
    })
  }
  return e.jsx(w, {
    children: t
      ? e.jsxs(
          N.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            className:
              'fixed inset-0 z-50 flex items-center justify-center px-4 py-8',
            onClick: (a) => {
              a.target === a.currentTarget && i(!1)
            },
            children: [
              e.jsx('div', {
                className: 'absolute inset-0',
                style: { background: 'rgba(0, 0, 0, 0.68)' },
                onClick: () => i(!1),
              }),
              e.jsxs(N.form, {
                initial: { opacity: 0, scale: 0.96, y: 16 },
                animate: { opacity: 1, scale: 1, y: 0 },
                exit: { opacity: 0, scale: 0.98, y: 10 },
                transition: { duration: 0.18, ease: 'easeOut' },
                onSubmit: h,
                className:
                  'relative z-10 flex max-h-[85vh] w-[min(720px,96vw)] flex-col overflow-hidden rounded-2xl border shadow-2xl',
                style: {
                  background: 'var(--theme-card)',
                  borderColor: 'var(--theme-border)',
                  color: 'var(--theme-text)',
                },
                children: [
                  e.jsxs('div', {
                    className:
                      'flex items-start justify-between gap-4 border-b px-5 py-4',
                    style: { borderColor: 'var(--theme-border)' },
                    children: [
                      e.jsxs('div', {
                        children: [
                          e.jsx('h2', {
                            className: 'text-lg font-semibold',
                            children: 'Create Job',
                          }),
                          e.jsx('p', {
                            className: 'mt-1 text-sm',
                            style: { color: 'var(--theme-muted)' },
                            children:
                              'Build a scheduled Hermes task with preset timing options.',
                          }),
                        ],
                      }),
                      e.jsx('button', {
                        type: 'button',
                        onClick: () => i(!1),
                        className: 'rounded-lg p-2 transition-colors',
                        style: { color: 'var(--theme-muted)' },
                        'aria-label': 'Close create job dialog',
                        children: e.jsx(v, { icon: F, size: 18 }),
                      }),
                    ],
                  }),
                  e.jsxs('div', {
                    className: 'flex-1 space-y-5 overflow-y-auto px-5 py-4',
                    children: [
                      e.jsxs('section', {
                        className: 'space-y-2',
                        children: [
                          e.jsx('label', {
                            className: 'text-sm font-medium',
                            children: 'Name',
                          }),
                          e.jsx('input', {
                            value: n.name,
                            onChange: (a) =>
                              o((r) => ({ ...r, name: a.target.value })),
                            placeholder: 'Daily research summary',
                            required: !0,
                            className:
                              'w-full rounded-xl border px-3 py-2.5 text-sm focus:outline-none focus:ring-1',
                            style: {
                              background: 'var(--theme-input)',
                              borderColor: 'var(--theme-border)',
                              color: 'var(--theme-text)',
                              boxShadow: '0 0 0 0 transparent',
                            },
                          }),
                        ],
                      }),
                      e.jsxs('section', {
                        className: 'space-y-3',
                        children: [
                          e.jsxs('div', {
                            children: [
                              e.jsx('h3', {
                                className: 'text-sm font-medium',
                                children: 'Schedule',
                              }),
                              e.jsx('p', {
                                className: 'mt-1 text-xs',
                                style: { color: 'var(--theme-muted)' },
                                children:
                                  'Choose a preset or enter a custom schedule string below.',
                              }),
                            ],
                          }),
                          e.jsx('div', {
                            className: 'flex flex-wrap gap-2',
                            children: W.map((a) => {
                              const r = n.schedule === a.value
                              return e.jsx(
                                'button',
                                {
                                  type: 'button',
                                  onClick: () =>
                                    o((l) => ({ ...l, schedule: a.value })),
                                  className:
                                    'rounded-full border px-3 py-1.5 text-xs font-medium transition-colors',
                                  style: {
                                    background: r
                                      ? 'var(--theme-accent)'
                                      : 'var(--theme-card)',
                                    borderColor: r
                                      ? 'var(--theme-accent)'
                                      : 'var(--theme-border)',
                                    color: r ? '#fff' : 'var(--theme-text)',
                                  },
                                  children: a.label,
                                },
                                a.label,
                              )
                            }),
                          }),
                          e.jsxs('div', {
                            className: 'space-y-2',
                            children: [
                              e.jsx('label', {
                                className: 'text-sm font-medium',
                                children: 'Custom schedule',
                              }),
                              e.jsx('input', {
                                value: n.schedule,
                                onChange: (a) =>
                                  o((r) => ({
                                    ...r,
                                    schedule: a.target.value,
                                  })),
                                placeholder: 'every 30m or 0 9 * * *',
                                required: !0,
                                className:
                                  'w-full rounded-xl border px-3 py-2.5 text-sm focus:outline-none focus:ring-1',
                                style: {
                                  background: 'var(--theme-input)',
                                  borderColor: 'var(--theme-border)',
                                  color: 'var(--theme-text)',
                                },
                              }),
                              e.jsx('p', {
                                className: 'text-xs',
                                style: { color: 'var(--theme-muted)' },
                                children:
                                  'Advanced users can enter cron expressions directly.',
                              }),
                            ],
                          }),
                        ],
                      }),
                      e.jsxs('section', {
                        className: 'space-y-2',
                        children: [
                          e.jsx('label', {
                            className: 'text-sm font-medium',
                            children: 'Prompt',
                          }),
                          e.jsx('textarea', {
                            value: n.prompt,
                            onChange: (a) =>
                              o((r) => ({ ...r, prompt: a.target.value })),
                            placeholder: 'What should Hermes do?',
                            required: !0,
                            rows: 5,
                            className:
                              'w-full resize-none rounded-xl border px-3 py-2.5 text-sm focus:outline-none focus:ring-1',
                            style: {
                              background: 'var(--theme-input)',
                              borderColor: 'var(--theme-border)',
                              color: 'var(--theme-text)',
                            },
                          }),
                        ],
                      }),
                      e.jsxs('section', {
                        className: 'space-y-4',
                        children: [
                          e.jsxs('div', {
                            children: [
                              e.jsx('h3', {
                                className: 'text-sm font-medium',
                                children: 'Options',
                              }),
                              e.jsx('p', {
                                className: 'mt-1 text-xs',
                                style: { color: 'var(--theme-muted)' },
                                children:
                                  'Optional routing and repeat controls.',
                              }),
                            ],
                          }),
                          e.jsxs('div', {
                            className: 'space-y-2',
                            children: [
                              e.jsx('label', {
                                className: 'text-sm font-medium',
                                children: 'Skills',
                              }),
                              e.jsx('input', {
                                value: n.skillsInput,
                                onChange: (a) =>
                                  o((r) => ({
                                    ...r,
                                    skillsInput: a.target.value,
                                  })),
                                placeholder: 'research, writing, synthesis',
                                className:
                                  'w-full rounded-xl border px-3 py-2.5 text-sm focus:outline-none focus:ring-1',
                                style: {
                                  background: 'var(--theme-input)',
                                  borderColor: 'var(--theme-border)',
                                  color: 'var(--theme-text)',
                                },
                              }),
                              e.jsx('p', {
                                className: 'text-xs',
                                style: { color: 'var(--theme-muted)' },
                                children: 'Comma-separated for now.',
                              }),
                            ],
                          }),
                          e.jsxs('div', {
                            className: 'space-y-2',
                            children: [
                              e.jsx('label', {
                                className: 'text-sm font-medium',
                                children: 'Deliver to',
                              }),
                              e.jsx('div', {
                                className: 'flex flex-wrap gap-2',
                                children: Y.map((a) => {
                                  const r = n.deliver.includes(a),
                                    l = a === 'telegram' || a === 'discord'
                                  return e.jsxs(
                                    'button',
                                    {
                                      type: 'button',
                                      onClick: () => m(a),
                                      title: l
                                        ? `Requires Hermes Gateway with ${a} configured`
                                        : void 0,
                                      className:
                                        'rounded-full border px-3 py-1.5 text-xs font-medium capitalize transition-colors',
                                      style: {
                                        background: r
                                          ? 'var(--theme-accent)'
                                          : 'var(--theme-card)',
                                        borderColor: r
                                          ? 'var(--theme-accent)'
                                          : 'var(--theme-border)',
                                        color: r
                                          ? '#fff'
                                          : l
                                            ? 'var(--theme-muted)'
                                            : 'var(--theme-text)',
                                      },
                                      children: [a, l ? ' ⚡' : ''],
                                    },
                                    a,
                                  )
                                }),
                              }),
                            ],
                          }),
                          e.jsxs('div', {
                            className: 'space-y-2',
                            children: [
                              e.jsx('label', {
                                className: 'text-sm font-medium',
                                children: 'Repeat',
                              }),
                              e.jsxs('div', {
                                className: 'flex flex-wrap gap-2',
                                children: [
                                  e.jsx('button', {
                                    type: 'button',
                                    onClick: () =>
                                      o((a) => ({
                                        ...a,
                                        repeatMode: 'unlimited',
                                      })),
                                    className:
                                      'rounded-full border px-3 py-1.5 text-xs font-medium transition-colors',
                                    style: {
                                      background:
                                        n.repeatMode === 'unlimited'
                                          ? 'var(--theme-accent)'
                                          : 'var(--theme-card)',
                                      borderColor:
                                        n.repeatMode === 'unlimited'
                                          ? 'var(--theme-accent)'
                                          : 'var(--theme-border)',
                                      color:
                                        n.repeatMode === 'unlimited'
                                          ? '#fff'
                                          : 'var(--theme-text)',
                                    },
                                    children: 'Unlimited',
                                  }),
                                  e.jsx('button', {
                                    type: 'button',
                                    onClick: () =>
                                      o((a) => ({
                                        ...a,
                                        repeatMode: 'limited',
                                      })),
                                    className:
                                      'rounded-full border px-3 py-1.5 text-xs font-medium transition-colors',
                                    style: {
                                      background:
                                        n.repeatMode === 'limited'
                                          ? 'var(--theme-accent)'
                                          : 'var(--theme-card)',
                                      borderColor:
                                        n.repeatMode === 'limited'
                                          ? 'var(--theme-accent)'
                                          : 'var(--theme-border)',
                                      color:
                                        n.repeatMode === 'limited'
                                          ? '#fff'
                                          : 'var(--theme-text)',
                                    },
                                    children: 'Set count',
                                  }),
                                ],
                              }),
                              n.repeatMode === 'limited'
                                ? e.jsx('input', {
                                    type: 'number',
                                    min: 1,
                                    step: 1,
                                    value: n.repeatCount,
                                    onChange: (a) =>
                                      o((r) => ({
                                        ...r,
                                        repeatCount: a.target.value,
                                      })),
                                    className:
                                      'w-full rounded-xl border px-3 py-2.5 text-sm focus:outline-none focus:ring-1',
                                    style: {
                                      background: 'var(--theme-input)',
                                      borderColor: 'var(--theme-border)',
                                      color: 'var(--theme-text)',
                                    },
                                  })
                                : null,
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs('div', {
                    className:
                      'flex items-center justify-end gap-2 border-t px-5 py-4',
                    style: { borderColor: 'var(--theme-border)' },
                    children: [
                      e.jsx('button', {
                        type: 'button',
                        onClick: () => i(!1),
                        className:
                          'rounded-xl px-4 py-2 text-sm transition-colors',
                        style: {
                          background: 'var(--theme-card)',
                          color: 'var(--theme-muted)',
                        },
                        children: 'Cancel',
                      }),
                      e.jsx('button', {
                        type: 'submit',
                        disabled:
                          s ||
                          !n.name.trim() ||
                          !n.schedule.trim() ||
                          !n.prompt.trim(),
                        className:
                          'rounded-xl px-4 py-2 text-sm font-medium text-white transition-opacity disabled:opacity-50',
                        style: { background: 'var(--theme-accent)' },
                        children: s ? 'Creating...' : 'Create',
                      }),
                    ],
                  }),
                ],
              }),
            ],
          },
          'create-job-dialog',
        )
      : null,
  })
}
const X = [
    { label: 'Every 15m', value: 'every 15m' },
    { label: 'Every 30m', value: 'every 30m' },
    { label: 'Every 1h', value: 'every 1h' },
    { label: 'Every 6h', value: 'every 6h' },
    { label: 'Daily', value: '0 9 * * *' },
    { label: 'Weekly', value: '0 9 * * 1' },
  ],
  Z = ['local', 'telegram', 'discord']
function ee(t) {
  if (typeof t.schedule_display == 'string' && t.schedule_display.trim())
    return t.schedule_display.trim()
  const s = t.schedule
  if (s && typeof s == 'object') {
    const i = s,
      c = [i.expression, i.cron, i.raw, i.value, i.schedule]
    for (const n of c) if (typeof n == 'string' && n.trim()) return n.trim()
  }
  return ''
}
function k(t) {
  const s = t?.repeat?.times,
    i = t?.repeat?.completed ?? 0,
    c = typeof s == 'number' ? Math.max(1, s - i) : null
  return {
    name: t?.name ?? '',
    schedule: t ? ee(t) : 'every 30m',
    prompt: t?.prompt ?? '',
    skillsInput: Array.isArray(t?.skills) ? t.skills.join(', ') : '',
    deliver:
      Array.isArray(t?.deliver) && t.deliver.length > 0
        ? [...t.deliver]
        : ['local'],
    repeatMode: c === null ? 'unlimited' : 'limited',
    repeatCount: c === null ? '1' : String(c),
  }
}
function te({
  job: t,
  open: s,
  isSubmitting: i = !1,
  onOpenChange: c,
  onSubmit: n,
}) {
  const [o, m] = f.useState(() => k(t))
  f.useEffect(() => {
    if (!s) {
      m(k(t))
      return
    }
    m(k(t))
    const r = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const l = (u) => {
      u.key === 'Escape' && c(!1)
    }
    return (
      window.addEventListener('keydown', l),
      () => {
        ;((document.body.style.overflow = r),
          window.removeEventListener('keydown', l))
      }
    )
  }, [t, s, c])
  function h(r) {
    m((l) => {
      const u = l.deliver.includes(r)
        ? l.deliver.filter((x) => x !== r)
        : [...l.deliver, r]
      return { ...l, deliver: u }
    })
  }
  function a(r) {
    r.preventDefault()
    const l = o.skillsInput
      .split(',')
      .map((u) => u.trim())
      .filter(Boolean)
    n({
      name: o.name.trim(),
      schedule: o.schedule.trim(),
      prompt: o.prompt.trim(),
      deliver: o.deliver.length > 0 ? o.deliver : void 0,
      skills: l.length > 0 ? Array.from(new Set(l)) : void 0,
      repeat:
        o.repeatMode === 'limited'
          ? Math.max(1, Number.parseInt(o.repeatCount, 10) || 1)
          : void 0,
    })
  }
  return e.jsx(w, {
    children:
      s && t
        ? e.jsxs(
            N.div,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              className:
                'fixed inset-0 z-50 flex items-center justify-center px-4 py-8',
              onClick: (r) => {
                r.target === r.currentTarget && c(!1)
              },
              children: [
                e.jsx('div', {
                  className: 'absolute inset-0',
                  style: { background: 'rgba(0, 0, 0, 0.68)' },
                  onClick: () => c(!1),
                }),
                e.jsxs(N.form, {
                  initial: { opacity: 0, scale: 0.96, y: 16 },
                  animate: { opacity: 1, scale: 1, y: 0 },
                  exit: { opacity: 0, scale: 0.98, y: 10 },
                  transition: { duration: 0.18, ease: 'easeOut' },
                  onSubmit: a,
                  className:
                    'relative z-10 flex max-h-[85vh] w-[min(720px,96vw)] flex-col overflow-hidden rounded-2xl border shadow-2xl',
                  style: {
                    background: 'var(--theme-card)',
                    borderColor: 'var(--theme-border)',
                    color: 'var(--theme-text)',
                  },
                  children: [
                    e.jsxs('div', {
                      className:
                        'flex items-start justify-between gap-4 border-b px-5 py-4',
                      style: { borderColor: 'var(--theme-border)' },
                      children: [
                        e.jsxs('div', {
                          children: [
                            e.jsx('h2', {
                              className: 'text-lg font-semibold',
                              children: 'Edit Job',
                            }),
                            e.jsx('p', {
                              className: 'mt-1 text-sm',
                              style: { color: 'var(--theme-muted)' },
                              children:
                                'Update the schedule, prompt, and routing for this Hermes task.',
                            }),
                          ],
                        }),
                        e.jsx('button', {
                          type: 'button',
                          onClick: () => c(!1),
                          className: 'rounded-lg p-2 transition-colors',
                          style: { color: 'var(--theme-muted)' },
                          'aria-label': 'Close edit job dialog',
                          children: e.jsx(v, { icon: F, size: 18 }),
                        }),
                      ],
                    }),
                    e.jsxs('div', {
                      className: 'flex-1 space-y-5 overflow-y-auto px-5 py-4',
                      children: [
                        e.jsxs('section', {
                          className: 'space-y-2',
                          children: [
                            e.jsx('label', {
                              className: 'text-sm font-medium',
                              children: 'Name',
                            }),
                            e.jsx('input', {
                              value: o.name,
                              onChange: (r) =>
                                m((l) => ({ ...l, name: r.target.value })),
                              placeholder: 'Daily research summary',
                              required: !0,
                              className:
                                'w-full rounded-xl border px-3 py-2.5 text-sm focus:outline-none focus:ring-1',
                              style: {
                                background: 'var(--theme-input)',
                                borderColor: 'var(--theme-border)',
                                color: 'var(--theme-text)',
                                boxShadow: '0 0 0 0 transparent',
                              },
                            }),
                          ],
                        }),
                        e.jsxs('section', {
                          className: 'space-y-3',
                          children: [
                            e.jsxs('div', {
                              children: [
                                e.jsx('h3', {
                                  className: 'text-sm font-medium',
                                  children: 'Schedule',
                                }),
                                e.jsx('p', {
                                  className: 'mt-1 text-xs',
                                  style: { color: 'var(--theme-muted)' },
                                  children:
                                    'Choose a preset or enter a custom schedule string below.',
                                }),
                              ],
                            }),
                            e.jsx('div', {
                              className: 'flex flex-wrap gap-2',
                              children: X.map((r) => {
                                const l = o.schedule === r.value
                                return e.jsx(
                                  'button',
                                  {
                                    type: 'button',
                                    onClick: () =>
                                      m((u) => ({ ...u, schedule: r.value })),
                                    className:
                                      'rounded-full border px-3 py-1.5 text-xs font-medium transition-colors',
                                    style: {
                                      background: l
                                        ? 'var(--theme-accent)'
                                        : 'var(--theme-card)',
                                      borderColor: l
                                        ? 'var(--theme-accent)'
                                        : 'var(--theme-border)',
                                      color: l ? '#fff' : 'var(--theme-text)',
                                    },
                                    children: r.label,
                                  },
                                  r.label,
                                )
                              }),
                            }),
                            e.jsxs('div', {
                              className: 'space-y-2',
                              children: [
                                e.jsx('label', {
                                  className: 'text-sm font-medium',
                                  children: 'Custom schedule',
                                }),
                                e.jsx('input', {
                                  value: o.schedule,
                                  onChange: (r) =>
                                    m((l) => ({
                                      ...l,
                                      schedule: r.target.value,
                                    })),
                                  placeholder: 'every 30m or 0 9 * * *',
                                  required: !0,
                                  className:
                                    'w-full rounded-xl border px-3 py-2.5 text-sm focus:outline-none focus:ring-1',
                                  style: {
                                    background: 'var(--theme-input)',
                                    borderColor: 'var(--theme-border)',
                                    color: 'var(--theme-text)',
                                  },
                                }),
                              ],
                            }),
                          ],
                        }),
                        e.jsxs('section', {
                          className: 'space-y-2',
                          children: [
                            e.jsx('label', {
                              className: 'text-sm font-medium',
                              children: 'Prompt',
                            }),
                            e.jsx('textarea', {
                              value: o.prompt,
                              onChange: (r) =>
                                m((l) => ({ ...l, prompt: r.target.value })),
                              placeholder: 'What should Hermes do?',
                              required: !0,
                              rows: 5,
                              className:
                                'w-full resize-none rounded-xl border px-3 py-2.5 text-sm focus:outline-none focus:ring-1',
                              style: {
                                background: 'var(--theme-input)',
                                borderColor: 'var(--theme-border)',
                                color: 'var(--theme-text)',
                              },
                            }),
                          ],
                        }),
                        e.jsxs('section', {
                          className: 'space-y-4',
                          children: [
                            e.jsxs('div', {
                              children: [
                                e.jsx('h3', {
                                  className: 'text-sm font-medium',
                                  children: 'Options',
                                }),
                                e.jsx('p', {
                                  className: 'mt-1 text-xs',
                                  style: { color: 'var(--theme-muted)' },
                                  children:
                                    'Optional routing and repeat controls.',
                                }),
                              ],
                            }),
                            e.jsxs('div', {
                              className: 'space-y-2',
                              children: [
                                e.jsx('label', {
                                  className: 'text-sm font-medium',
                                  children: 'Skills',
                                }),
                                e.jsx('input', {
                                  value: o.skillsInput,
                                  onChange: (r) =>
                                    m((l) => ({
                                      ...l,
                                      skillsInput: r.target.value,
                                    })),
                                  placeholder: 'research, writing, synthesis',
                                  className:
                                    'w-full rounded-xl border px-3 py-2.5 text-sm focus:outline-none focus:ring-1',
                                  style: {
                                    background: 'var(--theme-input)',
                                    borderColor: 'var(--theme-border)',
                                    color: 'var(--theme-text)',
                                  },
                                }),
                              ],
                            }),
                            e.jsxs('div', {
                              className: 'space-y-2',
                              children: [
                                e.jsx('label', {
                                  className: 'text-sm font-medium',
                                  children: 'Deliver to',
                                }),
                                e.jsx('div', {
                                  className: 'flex flex-wrap gap-2',
                                  children: Z.map((r) => {
                                    const l = o.deliver.includes(r),
                                      u = r === 'telegram' || r === 'discord'
                                    return e.jsx(
                                      'button',
                                      {
                                        type: 'button',
                                        onClick: () => h(r),
                                        title: u
                                          ? `Requires Hermes Gateway with ${r} configured`
                                          : void 0,
                                        className:
                                          'rounded-full border px-3 py-1.5 text-xs font-medium capitalize transition-colors',
                                        style: {
                                          background: l
                                            ? 'var(--theme-accent)'
                                            : 'var(--theme-card)',
                                          borderColor: l
                                            ? 'var(--theme-accent)'
                                            : 'var(--theme-border)',
                                          color: l
                                            ? '#fff'
                                            : u
                                              ? 'var(--theme-muted)'
                                              : 'var(--theme-text)',
                                        },
                                        children: r,
                                      },
                                      r,
                                    )
                                  }),
                                }),
                              ],
                            }),
                            e.jsxs('div', {
                              className: 'space-y-2',
                              children: [
                                e.jsx('label', {
                                  className: 'text-sm font-medium',
                                  children: 'Repeat',
                                }),
                                e.jsxs('div', {
                                  className: 'flex flex-wrap gap-2',
                                  children: [
                                    e.jsx('button', {
                                      type: 'button',
                                      onClick: () =>
                                        m((r) => ({
                                          ...r,
                                          repeatMode: 'unlimited',
                                        })),
                                      className:
                                        'rounded-full border px-3 py-1.5 text-xs font-medium transition-colors',
                                      style: {
                                        background:
                                          o.repeatMode === 'unlimited'
                                            ? 'var(--theme-accent)'
                                            : 'var(--theme-card)',
                                        borderColor:
                                          o.repeatMode === 'unlimited'
                                            ? 'var(--theme-accent)'
                                            : 'var(--theme-border)',
                                        color:
                                          o.repeatMode === 'unlimited'
                                            ? '#fff'
                                            : 'var(--theme-text)',
                                      },
                                      children: 'Unlimited',
                                    }),
                                    e.jsx('button', {
                                      type: 'button',
                                      onClick: () =>
                                        m((r) => ({
                                          ...r,
                                          repeatMode: 'limited',
                                        })),
                                      className:
                                        'rounded-full border px-3 py-1.5 text-xs font-medium transition-colors',
                                      style: {
                                        background:
                                          o.repeatMode === 'limited'
                                            ? 'var(--theme-accent)'
                                            : 'var(--theme-card)',
                                        borderColor:
                                          o.repeatMode === 'limited'
                                            ? 'var(--theme-accent)'
                                            : 'var(--theme-border)',
                                        color:
                                          o.repeatMode === 'limited'
                                            ? '#fff'
                                            : 'var(--theme-text)',
                                      },
                                      children: 'Set count',
                                    }),
                                  ],
                                }),
                                o.repeatMode === 'limited'
                                  ? e.jsx('input', {
                                      type: 'number',
                                      min: 1,
                                      step: 1,
                                      value: o.repeatCount,
                                      onChange: (r) =>
                                        m((l) => ({
                                          ...l,
                                          repeatCount: r.target.value,
                                        })),
                                      className:
                                        'w-full rounded-xl border px-3 py-2.5 text-sm focus:outline-none focus:ring-1',
                                      style: {
                                        background: 'var(--theme-input)',
                                        borderColor: 'var(--theme-border)',
                                        color: 'var(--theme-text)',
                                      },
                                    })
                                  : null,
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    e.jsxs('div', {
                      className:
                        'flex items-center justify-end gap-2 border-t px-5 py-4',
                      style: { borderColor: 'var(--theme-border)' },
                      children: [
                        e.jsx('button', {
                          type: 'button',
                          onClick: () => c(!1),
                          className:
                            'rounded-xl px-4 py-2 text-sm transition-colors',
                          style: {
                            background: 'var(--theme-card)',
                            color: 'var(--theme-muted)',
                          },
                          children: 'Cancel',
                        }),
                        e.jsx('button', {
                          type: 'submit',
                          disabled:
                            i ||
                            !o.name.trim() ||
                            !o.schedule.trim() ||
                            !o.prompt.trim(),
                          className:
                            'rounded-xl px-4 py-2 text-sm font-medium text-white transition-opacity disabled:opacity-50',
                          style: { background: 'var(--theme-accent)' },
                          children: i ? 'Saving...' : 'Save changes',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            },
            'edit-job-dialog',
          )
        : null,
  })
}
const g = '/api/hermes-jobs'
async function re() {
  const t = await fetch(`${g}?include_disabled=true`)
  if (!t.ok) throw new Error(`Failed to fetch jobs: ${t.status}`)
  return (await t.json()).jobs ?? []
}
async function se(t) {
  const s = await fetch(g, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(t),
  })
  if (!s.ok) {
    const i = await s.json().catch(() => ({}))
    throw new Error(i.detail || `Failed to create job: ${s.status}`)
  }
  return (await s.json()).job
}
async function ae(t, s) {
  const i = await fetch(`${g}/${t}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(s),
  })
  if (!i.ok) throw new Error(`Failed to update job: ${i.status}`)
  return (await i.json()).job
}
async function le(t) {
  const s = await fetch(`${g}/${t}`, { method: 'DELETE' })
  if (!s.ok) throw new Error(`Failed to delete job: ${s.status}`)
}
async function oe(t) {
  const s = await fetch(`${g}/${t}?action=pause`, { method: 'POST' })
  if (!s.ok) throw new Error(`Failed to pause job: ${s.status}`)
  return (await s.json()).job
}
async function ne(t) {
  const s = await fetch(`${g}/${t}?action=resume`, { method: 'POST' })
  if (!s.ok) throw new Error(`Failed to resume job: ${s.status}`)
  return (await s.json()).job
}
async function ie(t) {
  const s = await fetch(`${g}/${t}?action=run`, { method: 'POST' })
  if (!s.ok) throw new Error(`Failed to trigger job: ${s.status}`)
  return (await s.json()).job
}
async function ce(t, s = 10) {
  const i = await fetch(`${g}/${t}?action=output&limit=${s}`)
  if (!i.ok) throw new Error(`Failed to fetch output: ${i.status}`)
  return (await i.json()).outputs ?? []
}
const b = ['hermes', 'jobs']
function de(t) {
  if (!t) return '—'
  try {
    const s = new Date(t),
      i = new Date(),
      c = s.getTime() - i.getTime()
    return c < 0
      ? 'overdue'
      : c < 6e4
        ? 'in < 1m'
        : c < 36e5
          ? `in ${Math.round(c / 6e4)}m`
          : c < 864e5
            ? `in ${Math.round(c / 36e5)}h`
            : s.toLocaleDateString()
  } catch {
    return t
  }
}
function D(t) {
  if (!t) return 'Never run'
  try {
    return new Date(t).toLocaleString()
  } catch {
    return t
  }
}
function me(t) {
  const s = t.replace(/\s+/g, ' ').trim()
  return s.length <= 200 ? s : `${s.slice(0, 200).trimEnd()}…`
}
function ue(t) {
  return t.last_run_at
    ? t.last_run_success === !0
      ? { label: 'Last run succeeded', color: 'var(--theme-success)' }
      : t.last_run_success === !1
        ? { label: 'Last run failed', color: 'var(--theme-danger)' }
        : { label: 'Last run unknown', color: 'var(--theme-muted)' }
    : { label: 'Never run', color: 'var(--theme-muted)' }
}
function he({
  job: t,
  onPause: s,
  onResume: i,
  onTrigger: c,
  onDelete: n,
  onEdit: o,
}) {
  const [m, h] = f.useState(!1),
    a = t.state === 'paused' || !t.enabled,
    r = t.state === 'completed',
    l = ue(t),
    u = L({
      queryKey: ['hermes', 'jobs', t.id, 'output'],
      queryFn: () => ce(t.id),
      enabled: m,
      staleTime: 3e4,
    })
  return e.jsxs(N.div, {
    layout: !0,
    initial: { opacity: 0, y: 8 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -8 },
    className: O(
      'rounded-xl border p-4 transition-colors',
      'bg-[var(--theme-card)] border-[var(--theme-border)]',
      a && 'opacity-60',
    ),
    children: [
      e.jsxs('div', {
        className: 'flex items-start justify-between gap-3',
        children: [
          e.jsxs('div', {
            className: 'min-w-0 flex-1',
            children: [
              e.jsxs('div', {
                className: 'mb-1 flex items-center gap-2',
                children: [
                  e.jsx('span', {
                    className: 'inline-block h-2 w-2 shrink-0 rounded-full',
                    style: {
                      background: a
                        ? 'var(--theme-muted)'
                        : r
                          ? 'var(--theme-accent)'
                          : 'var(--theme-text)',
                    },
                  }),
                  e.jsx('h3', {
                    className:
                      'truncate text-sm font-medium text-[var(--theme-text)]',
                    children: t.name || '(unnamed)',
                  }),
                ],
              }),
              e.jsx('p', {
                className:
                  'mb-2 line-clamp-2 text-xs text-[var(--theme-muted)]',
                children: t.prompt,
              }),
              e.jsxs('div', {
                className:
                  'mb-2 flex flex-wrap items-center gap-3 text-[10px] text-[var(--theme-muted)]',
                children: [
                  e.jsx('span', { children: t.schedule_display || 'custom' }),
                  e.jsx('span', { children: '·' }),
                  e.jsxs('span', { children: ['Next: ', de(t.next_run_at)] }),
                  e.jsx('span', { children: '·' }),
                  e.jsxs('span', { children: ['Last: ', D(t.last_run_at)] }),
                  t.skills &&
                    t.skills.length > 0 &&
                    e.jsxs(e.Fragment, {
                      children: [
                        e.jsx('span', { children: '·' }),
                        e.jsxs('span', {
                          children: [
                            t.skills.length,
                            ' skill',
                            t.skills.length !== 1 ? 's' : '',
                          ],
                        }),
                      ],
                    }),
                ],
              }),
              e.jsxs('div', {
                className:
                  'flex items-center gap-2 text-[11px] text-[var(--theme-muted)]',
                children: [
                  e.jsx('span', {
                    className: 'inline-block h-2.5 w-2.5 rounded-full',
                    style: { background: l.color },
                  }),
                  e.jsx('span', { children: l.label }),
                ],
              }),
            ],
          }),
          e.jsxs('div', {
            className: 'flex shrink-0 items-center gap-1',
            children: [
              e.jsx('button', {
                onClick: () => c(t.id),
                className:
                  'rounded-lg p-1.5 transition-colors hover:bg-[var(--theme-hover)]',
                title: 'Run now',
                children: e.jsx(v, {
                  icon: $,
                  size: 14,
                  className: 'text-[var(--theme-accent)]',
                }),
              }),
              e.jsx('button', {
                onClick: () => (a ? i(t.id) : s(t.id)),
                className:
                  'rounded-lg p-1.5 transition-colors hover:bg-[var(--theme-hover)]',
                title: a ? 'Resume' : 'Pause',
                children: e.jsx(v, {
                  icon: a ? $ : _,
                  size: 14,
                  className: 'text-[var(--theme-muted)]',
                }),
              }),
              e.jsx('button', {
                onClick: () => o(t),
                className:
                  'rounded-lg p-1.5 transition-colors hover:bg-[var(--theme-hover)]',
                title: 'Edit',
                children: e.jsx(v, {
                  icon: P,
                  size: 14,
                  className: 'text-[var(--theme-muted)]',
                }),
              }),
              e.jsx('button', {
                onClick: () => h((x) => !x),
                className:
                  'rounded-lg p-1.5 transition-colors hover:bg-[var(--theme-hover)]',
                title: m ? 'Hide run history' : 'Show run history',
                children: e.jsx(v, {
                  icon: m ? A : H,
                  size: 14,
                  className: 'text-[var(--theme-muted)]',
                }),
              }),
              e.jsx('button', {
                onClick: () => n(t.id),
                className:
                  'rounded-lg p-1.5 transition-colors hover:bg-[var(--theme-hover)]',
                title: 'Delete',
                children: e.jsx(v, {
                  icon: K,
                  size: 14,
                  style: { color: 'var(--theme-danger)' },
                }),
              }),
            ],
          }),
        ],
      }),
      e.jsx(w, {
        initial: !1,
        children: m
          ? e.jsx(N.div, {
              layout: !0,
              initial: { opacity: 0, height: 0 },
              animate: { opacity: 1, height: 'auto' },
              exit: { opacity: 0, height: 0 },
              className: 'overflow-hidden',
              children: e.jsxs('div', {
                className: 'mt-3 border-t border-[var(--theme-border)] pt-3',
                children: [
                  e.jsxs('div', {
                    className: 'mb-2 flex items-center justify-between',
                    children: [
                      e.jsx('p', {
                        className:
                          'text-xs font-medium text-[var(--theme-text)]',
                        children: 'Run history',
                      }),
                      e.jsx('p', {
                        className: 'text-[10px] text-[var(--theme-muted)]',
                        children: 'Showing recent outputs',
                      }),
                    ],
                  }),
                  u.isLoading
                    ? e.jsx('div', {
                        className:
                          'rounded-lg border border-[var(--theme-border)] bg-[var(--theme-bg)] px-3 py-3 text-xs text-[var(--theme-muted)]',
                        children: 'Loading outputs...',
                      })
                    : u.isError
                      ? e.jsx('div', {
                          className:
                            'rounded-lg border border-[var(--theme-border)] bg-[var(--theme-bg)] px-3 py-3 text-xs text-[var(--theme-muted)]',
                          children: 'Failed to load outputs.',
                        })
                      : u.data && u.data.length > 0
                        ? e.jsx('div', {
                            className: 'space-y-2',
                            children: u.data.map((x) =>
                              e.jsxs(
                                'div',
                                {
                                  className:
                                    'rounded-lg border border-[var(--theme-border)] bg-[var(--theme-bg)] px-3 py-3',
                                  children: [
                                    e.jsxs('div', {
                                      className:
                                        'mb-1 flex items-center justify-between gap-2 text-[10px] text-[var(--theme-muted)]',
                                      children: [
                                        e.jsx('span', {
                                          children: D(x.timestamp),
                                        }),
                                        e.jsx('span', {
                                          className: 'truncate',
                                          children: x.filename,
                                        }),
                                      ],
                                    }),
                                    e.jsx('p', {
                                      className:
                                        'text-xs leading-5 text-[var(--theme-text)]',
                                      children:
                                        me(x.content) || 'No output content',
                                    }),
                                  ],
                                },
                                `${x.filename}-${x.timestamp}`,
                              ),
                            ),
                          })
                        : e.jsx('div', {
                            className:
                              'rounded-lg border border-[var(--theme-border)] bg-[var(--theme-bg)] px-3 py-3 text-xs text-[var(--theme-muted)]',
                            children: 'No run outputs yet.',
                          }),
                ],
              }),
            })
          : null,
      }),
    ],
  })
}
function xe() {
  const t = R(),
    [s, i] = f.useState(''),
    [c, n] = f.useState(!1),
    [o, m] = f.useState(null),
    h = L({ queryKey: b, queryFn: re, refetchInterval: 3e4 }),
    a = j({
      mutationFn: oe,
      onSuccess: () => {
        ;(t.invalidateQueries({ queryKey: b }), y('Job paused'))
      },
    }),
    r = j({
      mutationFn: ne,
      onSuccess: () => {
        ;(t.invalidateQueries({ queryKey: b }), y('Job resumed'))
      },
    }),
    l = j({
      mutationFn: ie,
      onSuccess: () => {
        ;(t.invalidateQueries({ queryKey: b }), y('Job triggered'))
      },
    }),
    u = j({
      mutationFn: le,
      onSuccess: () => {
        ;(t.invalidateQueries({ queryKey: b }), y('Job deleted'))
      },
    }),
    x = j({
      mutationFn: se,
      onSuccess: () => {
        ;(t.invalidateQueries({ queryKey: b }), y('Job created'), n(!1))
      },
      onError: (d) => {
        y(d instanceof Error ? d.message : 'Failed to create job', {
          type: 'error',
        })
      },
    }),
    C = j({
      mutationFn: async (d) => ae(d.jobId, d.updates),
      onSuccess: () => {
        ;(t.invalidateQueries({ queryKey: b }), y('Job updated'), m(null))
      },
      onError: (d) => {
        y(d instanceof Error ? d.message : 'Failed to update job', {
          type: 'error',
        })
      },
    }),
    S = f.useMemo(() => {
      const d = h.data ?? []
      if (!s.trim()) return d
      const p = s.toLowerCase()
      return d.filter(
        (E) =>
          E.name?.toLowerCase().includes(p) ||
          E.prompt?.toLowerCase().includes(p),
      )
    }, [h.data, s]),
    I = f.useCallback(
      async (d) => {
        await x.mutateAsync(d)
      },
      [x],
    )
  return e.jsx('div', {
    className: 'min-h-full overflow-y-auto bg-surface text-ink',
    children: e.jsxs('div', {
      className:
        'mx-auto flex w-full max-w-[1200px] flex-col gap-5 px-4 py-6 pb-[calc(var(--tabbar-h,80px)+1.5rem)] sm:px-6 lg:px-8',
      children: [
        e.jsx('header', {
          className:
            'rounded-2xl border border-primary-200 bg-primary-50/85 p-4 backdrop-blur-xl',
          children: e.jsxs('div', {
            className: 'flex items-center justify-between',
            children: [
              e.jsxs('div', {
                className: 'flex items-center gap-2',
                children: [
                  e.jsx(v, {
                    icon: M,
                    size: 18,
                    className: 'text-[var(--theme-accent)]',
                  }),
                  e.jsx('h1', {
                    className:
                      'text-base font-semibold text-[var(--theme-text)]',
                    children: 'Jobs',
                  }),
                  h.data &&
                    e.jsxs('span', {
                      className: 'ml-1 text-xs text-[var(--theme-muted)]',
                      children: ['(', h.data.length, ')'],
                    }),
                ],
              }),
              e.jsxs('div', {
                className: 'flex items-center gap-2',
                children: [
                  e.jsx('button', {
                    onClick: () => {
                      t.invalidateQueries({ queryKey: b })
                    },
                    className:
                      'rounded-lg p-1.5 transition-colors hover:bg-[var(--theme-hover)]',
                    title: 'Refresh',
                    children: e.jsx(v, {
                      icon: q,
                      size: 16,
                      className: 'text-[var(--theme-muted)]',
                    }),
                  }),
                  e.jsxs('button', {
                    onClick: () => n(!0),
                    className:
                      'flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium text-white transition-opacity hover:opacity-90',
                    style: { background: 'var(--theme-accent)' },
                    children: [e.jsx(v, { icon: z, size: 14 }), 'New Job'],
                  }),
                ],
              }),
            ],
          }),
        }),
        e.jsx('div', {
          className:
            'rounded-2xl border border-primary-200 bg-primary-50/85 p-4 backdrop-blur-xl',
          children: e.jsxs('div', {
            className: 'relative',
            children: [
              e.jsx(v, {
                icon: T,
                size: 14,
                className:
                  'absolute left-2.5 top-1/2 -translate-y-1/2 text-[var(--theme-muted)]',
              }),
              e.jsx('input', {
                type: 'text',
                placeholder: 'Search jobs...',
                value: s,
                onChange: (d) => i(d.target.value),
                className:
                  'w-full rounded-lg border border-[var(--theme-border)] bg-[var(--theme-input)] py-1.5 pl-8 pr-3 text-xs text-[var(--theme-text)] placeholder:text-[var(--theme-muted)] focus:outline-none focus:ring-1 focus:ring-[var(--theme-accent)]',
              }),
            ],
          }),
        }),
        e.jsx('div', {
          className: 'flex-1 space-y-2 overflow-y-auto px-4 py-3',
          children: h.isLoading
            ? e.jsx('div', {
                className:
                  'flex items-center justify-center py-12 text-sm text-[var(--theme-muted)]',
                children: 'Loading jobs...',
              })
            : h.isError
              ? e.jsxs('div', {
                  className: 'flex items-center justify-center py-12 text-sm',
                  style: { color: 'var(--theme-danger)' },
                  children: [
                    'Failed to load jobs:',
                    ' ',
                    h.error instanceof Error
                      ? h.error.message
                      : 'Unknown error',
                  ],
                })
              : S.length === 0
                ? e.jsxs('div', {
                    className:
                      'flex flex-col items-center justify-center py-12 text-[var(--theme-muted)]',
                    children: [
                      e.jsx(v, {
                        icon: M,
                        size: 32,
                        className: 'mb-3 opacity-40',
                      }),
                      e.jsx('p', {
                        className: 'text-sm font-medium',
                        children: 'No scheduled jobs',
                      }),
                      e.jsx('p', {
                        className: 'mt-1 text-xs',
                        children: 'Create one to get started',
                      }),
                    ],
                  })
                : e.jsx(w, {
                    mode: 'popLayout',
                    children: S.map((d) =>
                      e.jsx(
                        he,
                        {
                          job: d,
                          onPause: (p) => a.mutate(p),
                          onResume: (p) => r.mutate(p),
                          onTrigger: (p) => l.mutate(p),
                          onEdit: (p) => m(p),
                          onDelete: (p) => {
                            confirm(`Delete job "${d.name}"?`) && u.mutate(p)
                          },
                        },
                        d.id,
                      ),
                    ),
                  }),
        }),
        e.jsx(V, {
          open: c,
          onOpenChange: n,
          onSubmit: I,
          isSubmitting: x.isPending,
        }),
        e.jsx(te, {
          job: o,
          open: o !== null,
          onOpenChange: (d) => {
            d || m(null)
          },
          onSubmit: async (d) => {
            o && (await C.mutateAsync({ jobId: o.id, updates: d }))
          },
          isSubmitting: C.isPending,
        }),
      ],
    }),
  })
}
const fe = function () {
  return (
    B('Jobs'),
    Q('jobs')
      ? e.jsx(xe, {})
      : e.jsx(U, { feature: 'Jobs', description: G('Jobs') })
  )
}
export { fe as component }
