import {
  r as s,
  h as m,
  Y as h,
  ay as v,
  az as S,
  j as o,
  aA as x,
  _ as K,
} from './main-r209hwEK.js'
const I = s.lazy(async () => ({
  default: (await K(() => import('./main-r209hwEK.js').then((i) => i.a$), []))
    .ChatScreen,
}))
function C() {
  const [c, i] = s.useState(!1)
  s.useEffect(() => {
    i(!0)
  }, [])
  const n = m(),
    u = h(),
    [d, y] = s.useState(null),
    l = v.useParams(),
    e = typeof l.sessionKey == 'string' ? l.sessionKey : 'main',
    r = e === 'new',
    a = d?.friendlyId === e ? d.sessionKey : void 0
  s.useEffect(() => {
    r && n.removeQueries({ queryKey: ['chat', 'history', 'new', 'new'] })
  }, [r, n])
  const f = s.useCallback(
    function (t) {
      ;(S(n, e, a ?? e, t.friendlyId, t.sessionKey),
        n.invalidateQueries({ queryKey: ['chat', 'sessions'] }),
        y({ friendlyId: t.friendlyId, sessionKey: t.sessionKey }))
      try {
        localStorage.setItem('hermes-last-session', t.friendlyId)
      } catch {}
      u({
        to: '/chat/$sessionKey',
        params: { sessionKey: t.friendlyId },
        replace: !0,
      })
    },
    [e, a, u, n],
  )
  return c
    ? o.jsx(x, {
        children: o.jsx(s.Suspense, {
          fallback: o.jsx('div', {
            className:
              'flex h-full items-center justify-center text-primary-400',
            children: 'Loading chat…',
          }),
          children: o.jsx(I, {
            activeFriendlyId: e,
            isNewChat: r,
            forcedSessionKey: a,
            onSessionResolved: r || e === 'main' ? f : void 0,
          }),
        }),
      })
    : o.jsx('div', {
        className: 'flex h-full items-center justify-center text-primary-400',
        children: 'Loading chat…',
      })
}
export { C as component }
