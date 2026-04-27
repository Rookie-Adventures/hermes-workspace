const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'assets/terminal-workspace-D2T5VPv8.js',
      'assets/main-r209hwEK.js',
    ]),
) => i.map((i) => d[i])
import { r, _ as t } from './main-r209hwEK.js'
import { u as o } from './use-page-title-DnnF8Z-t.js'
r.lazy(() =>
  t(
    () => import('./terminal-workspace-D2T5VPv8.js'),
    __vite__mapDeps([0, 1]),
  ).then((e) => ({ default: e.TerminalWorkspace })),
)
function n() {
  return (o('Terminal'), null)
}
export { n as component }
