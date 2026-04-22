import { useEffect } from "react";
const BASE_TITLE = "Hermes";
function usePageTitle(page) {
  useEffect(() => {
    document.title = page ? `${page} — ${BASE_TITLE}` : BASE_TITLE;
    return () => {
      document.title = BASE_TITLE;
    };
  }, [page]);
}
export {
  usePageTitle as u
};
