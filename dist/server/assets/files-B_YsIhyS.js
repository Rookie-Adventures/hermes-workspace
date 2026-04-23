import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect, useCallback } from "react";
import { Editor } from "@monaco-editor/react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Folder01Icon } from "@hugeicons/core-free-icons";
import { u as usePageTitle } from "./use-page-title-CljdUyfw.js";
import { p as useSettings, r as resolveTheme, F as FileExplorerSidebar } from "./router-COrtOO2b.js";
import "@tanstack/react-router";
import "@tanstack/react-query";
import "motion/react";
import "react-dom";
import "@base-ui/react/merge-props";
import "@base-ui/react/use-render";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "zustand";
import "zustand/middleware";
import "@base-ui/react/dialog";
import "@base-ui/react/input";
import "@base-ui/react/switch";
import "@base-ui/react/tabs";
import "@base-ui/react/alert-dialog";
import "@base-ui/react/menu";
import "@base-ui/react/collapsible";
import "@base-ui/react/scroll-area";
import "@base-ui/react/tooltip";
import "shiki";
import "marked";
import "react-markdown";
import "remark-breaks";
import "remark-gfm";
import "@base-ui/react/autocomplete";
import "@base-ui/react/preview-card";
import "react-joyride";
import "zod";
import "node:os";
import "node:path";
import "node:fs/promises";
import "node:crypto";
import "@tanstack/router-core/ssr/client";
import "node:child_process";
import "node:url";
import "node:events";
import "node:fs";
import "yaml";
import "node:util";
const INITIAL_EDITOR_VALUE = `// Files workspace
// Use the file tree on the left to browse and manage project files.
// "Insert as reference" actions appear here for quick context snippets.

function note() {
  return 'Ready to explore files.'
}
`;
function FilesRoute() {
  usePageTitle("Files");
  const {
    settings
  } = useSettings();
  const [isMobile, setIsMobile] = useState(false);
  const [fileExplorerCollapsed, setFileExplorerCollapsed] = useState(false);
  const [editorValue, setEditorValue] = useState(INITIAL_EDITOR_VALUE);
  const resolvedTheme = resolveTheme(settings.theme);
  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  useEffect(() => {
    if (!isMobile) return;
    setFileExplorerCollapsed(true);
  }, [isMobile]);
  const handleInsertReference = useCallback(function handleInsertReference2(reference) {
    setEditorValue((prev) => `${prev}
${reference}
`);
  }, []);
  return /* @__PURE__ */ jsx("div", { className: "h-full min-h-0 overflow-hidden bg-surface text-primary-900", children: /* @__PURE__ */ jsxs("div", { className: "flex h-full min-h-0 overflow-hidden", children: [
    /* @__PURE__ */ jsx(FileExplorerSidebar, { collapsed: fileExplorerCollapsed, onToggle: function onToggleFileExplorer() {
      setFileExplorerCollapsed((prev) => !prev);
    }, onInsertReference: handleInsertReference }),
    /* @__PURE__ */ jsxs("main", { className: "flex min-w-0 flex-1 flex-col overflow-hidden", children: [
      /* @__PURE__ */ jsxs("header", { className: "flex items-center gap-3 border-b border-primary-200 px-3 py-2 md:px-4 md:py-3", children: [
        /* @__PURE__ */ jsx("button", { type: "button", onClick: function onToggleFileExplorerHeader() {
          setFileExplorerCollapsed((prev) => !prev);
        }, className: "rounded-lg p-1.5 text-primary-600 hover:bg-primary-100 transition-colors", "aria-label": fileExplorerCollapsed ? "Show files" : "Hide files", title: fileExplorerCollapsed ? "Show files" : "Hide files", children: /* @__PURE__ */ jsx(HugeiconsIcon, { icon: Folder01Icon, size: 20, strokeWidth: 1.5 }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h1", { className: "text-base font-medium text-balance md:text-lg", children: "Files" }),
          /* @__PURE__ */ jsx("p", { className: "hidden text-sm text-primary-600 text-pretty sm:block", children: "Explore your workspace and draft notes in the editor." })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "min-h-0 flex-1 pb-24 md:pb-0", children: /* @__PURE__ */ jsx(Editor, { height: "100%", theme: resolvedTheme === "dark" ? "vs-dark" : "vs-light", language: "typescript", value: editorValue, onChange: function onEditorChange(value) {
        setEditorValue(value || "");
      }, options: {
        minimap: {
          enabled: settings.editorMinimap
        },
        fontSize: settings.editorFontSize,
        scrollBeyondLastLine: false,
        wordWrap: settings.editorWordWrap ? "on" : "off"
      } }) })
    ] })
  ] }) });
}
export {
  FilesRoute as component
};
