import { jsx, jsxs } from "react/jsx-runtime";
import { useState, Suspense, lazy } from "react";
import { m as useFeatureAvailable, T as Tabs, f as TabsList, g as TabsTab, h as TabsPanel, n as BackendUnavailableState, o as getUnavailableReason } from "./router-Bxwn-W7k.js";
import { u as usePageTitle } from "./use-page-title-CljdUyfw.js";
import "@tanstack/react-router";
import "@tanstack/react-query";
import "@hugeicons/react";
import "@hugeicons/core-free-icons";
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
const MemoryBrowserScreen = lazy(async () => {
  const module = await import("./memory-browser-screen-dPPX4rGD.js");
  return {
    default: module.MemoryBrowserScreen
  };
});
const KnowledgeBrowserScreen = lazy(async () => {
  const module = await import("./knowledge-browser-screen-AVwKD7Ph.js");
  return {
    default: module.KnowledgeBrowserScreen
  };
});
function RouteLoadingState({
  label
}) {
  return /* @__PURE__ */ jsx("div", { className: "flex h-full min-h-[240px] items-center justify-center px-4 text-sm text-primary-500 dark:text-neutral-400", children: label });
}
const SplitComponent = function MemoryRoute() {
  const [tab, setTab] = useState("memory");
  const memoryAvailable = useFeatureAvailable("memory");
  usePageTitle("Memory");
  return /* @__PURE__ */ jsx("div", { className: "flex h-full min-h-0 flex-col", children: /* @__PURE__ */ jsxs(Tabs, { value: tab, onValueChange: (value) => setTab(value), className: "h-full min-h-0 gap-0", children: [
    /* @__PURE__ */ jsx("div", { className: "border-b border-primary-200 px-3 pt-3 dark:border-neutral-800 md:px-4 md:pt-4", children: /* @__PURE__ */ jsxs(TabsList, { variant: "underline", className: "w-full justify-start gap-1", children: [
      /* @__PURE__ */ jsx(TabsTab, { value: "memory", children: "Memory" }),
      /* @__PURE__ */ jsx(TabsTab, { value: "knowledge", children: "Knowledge" })
    ] }) }),
    /* @__PURE__ */ jsx(TabsPanel, { value: "memory", className: "min-h-0 flex-1", children: tab === "memory" ? /* @__PURE__ */ jsx(Suspense, { fallback: /* @__PURE__ */ jsx(RouteLoadingState, { label: "Loading memory browser..." }), children: memoryAvailable ? /* @__PURE__ */ jsx(MemoryBrowserScreen, {}) : /* @__PURE__ */ jsx(BackendUnavailableState, { feature: "Memory", description: getUnavailableReason("Memory") }) }) : null }),
    /* @__PURE__ */ jsx(TabsPanel, { value: "knowledge", className: "min-h-0 flex-1", children: tab === "knowledge" ? /* @__PURE__ */ jsx(Suspense, { fallback: /* @__PURE__ */ jsx(RouteLoadingState, { label: "Loading knowledge browser..." }), children: /* @__PURE__ */ jsx(KnowledgeBrowserScreen, {}) }) : null })
  ] }) });
};
export {
  SplitComponent as component
};
