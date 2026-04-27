import { r } from './main-r209hwEK.js'
const e = 'munr'
function u(t) {
  r.useEffect(
    () => (
      (document.title = t ? `${t} — ${e}` : e),
      () => {
        document.title = e
      }
    ),
    [t],
  )
}
export { u }
