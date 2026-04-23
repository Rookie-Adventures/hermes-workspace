import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState, useEffect, useRef, useMemo } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { HugeiconsIcon } from "@hugeicons/react";
import { Rocket01Icon, Settings01Icon, Search01Icon, PlayIcon, TaskDone01Icon, ArrowRight01Icon, ArrowDown01Icon } from "@hugeicons/core-free-icons";
import { c as cn, B as Button, M as Markdown } from "./router-COrtOO2b.js";
import { b as fetchSessions } from "./gateway-api-D3EA1k_S.js";
import "@tanstack/react-router";
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
const AGENT_AVATARS = ["🔍", "✍️", "📝", "🧪", "🎨", "📊", "🛡️", "⚡", "🔬", "🎯"];
const AGENT_AVATAR_COUNT = 10;
const LEGACY_AGENT_AVATAR_INDEX = new Map(
  AGENT_AVATARS.map((avatar, index) => [avatar, index])
);
function normalizeAgentAvatarIndex(value, fallbackIndex = 0) {
  if (typeof value === "number" && Number.isFinite(value)) {
    const normalized = Math.trunc(value);
    if (normalized >= 0) return normalized % AGENT_AVATAR_COUNT;
  }
  if (typeof value === "string") {
    const legacy = LEGACY_AGENT_AVATAR_INDEX.get(value.trim());
    if (legacy !== void 0) return legacy;
  }
  const fallback = Math.trunc(fallbackIndex);
  return (fallback % AGENT_AVATAR_COUNT + AGENT_AVATAR_COUNT) % AGENT_AVATAR_COUNT;
}
function darkenHexColor(color, amount = 0.2) {
  const hex = color.trim();
  const normalized = hex.startsWith("#") ? hex.slice(1) : hex;
  const expanded = normalized.length === 3 ? normalized.split("").map((char) => `${char}${char}`).join("") : normalized;
  if (!/^[0-9a-fA-F]{6}$/.test(expanded)) return color;
  const r = Math.round(parseInt(expanded.slice(0, 2), 16) * (1 - amount));
  const g = Math.round(parseInt(expanded.slice(2, 4), 16) * (1 - amount));
  const b = Math.round(parseInt(expanded.slice(4, 6), 16) * (1 - amount));
  return `#${[r, g, b].map((v) => v.toString(16).padStart(2, "0")).join("")}`;
}
function AgentAvatar({
  index,
  color,
  size = 40,
  className
}) {
  const variant = normalizeAgentAvatarIndex(index, 0);
  const shade = darkenHexColor(color, 0.2);
  const outline = darkenHexColor(color, 0.35);
  const eye = "#f8fafc";
  const baseParts = (() => {
    switch (variant) {
      case 2:
        return {
          head: /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx("rect", { x: "16", y: "9", width: "16", height: "12", fill: color }),
            /* @__PURE__ */ jsx("rect", { x: "14", y: "11", width: "20", height: "8", fill: color }),
            /* @__PURE__ */ jsx("rect", { x: "30", y: "9", width: "2", height: "12", fill: shade }),
            /* @__PURE__ */ jsx("rect", { x: "14", y: "17", width: "20", height: "2", fill: shade }),
            /* @__PURE__ */ jsx("rect", { x: "16", y: "19", width: "16", height: "2", fill: shade })
          ] }),
          body: { x: 14, y: 22, w: 20, h: 14 },
          arms: { leftX: 9, rightX: 35, y: 24, w: 4, h: 10 },
          legs: { y: 36, w: 5, h: 6, leftX: 17, rightX: 26 }
        };
      case 3:
        return {
          head: /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx("rect", { x: "15", y: "10", width: "18", height: "11", fill: color }),
            /* @__PURE__ */ jsx("rect", { x: "31", y: "10", width: "2", height: "11", fill: shade }),
            /* @__PURE__ */ jsx("rect", { x: "14", y: "19", width: "20", height: "3", fill: shade })
          ] }),
          body: { x: 12, y: 22, w: 24, h: 15 },
          arms: { leftX: 7, rightX: 37, y: 24, w: 5, h: 11 },
          legs: { y: 37, w: 6, h: 5, leftX: 16, rightX: 26 }
        };
      case 4:
        return {
          head: /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx("rect", { x: "18", y: "9", width: "12", height: "14", fill: color }),
            /* @__PURE__ */ jsx("rect", { x: "28", y: "9", width: "2", height: "14", fill: shade }),
            /* @__PURE__ */ jsx("rect", { x: "18", y: "21", width: "12", height: "2", fill: shade })
          ] }),
          body: { x: 17, y: 23, w: 14, h: 15 },
          arms: { leftX: 12, rightX: 32, y: 25, w: 4, h: 10 },
          legs: { y: 38, w: 4, h: 5, leftX: 19, rightX: 25 }
        };
      case 8:
        return {
          head: /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx("rect", { x: "17", y: "12", width: "14", height: "11", fill: color }),
            /* @__PURE__ */ jsx("rect", { x: "29", y: "12", width: "2", height: "11", fill: shade }),
            /* @__PURE__ */ jsx("rect", { x: "17", y: "21", width: "14", height: "2", fill: shade })
          ] }),
          body: { x: 16, y: 23, w: 16, h: 12 },
          arms: { leftX: 12, rightX: 32, y: 25, w: 3, h: 8 },
          legs: { y: 35, w: 4, h: 6, leftX: 18, rightX: 25 }
        };
      default:
        return {
          head: /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx("rect", { x: "16", y: "10", width: "16", height: "12", fill: color }),
            /* @__PURE__ */ jsx("rect", { x: "30", y: "10", width: "2", height: "12", fill: shade }),
            /* @__PURE__ */ jsx("rect", { x: "16", y: "20", width: "16", height: "2", fill: shade })
          ] }),
          body: { x: 14, y: 22, w: 20, h: 14 },
          arms: { leftX: 10, rightX: 34, y: 24, w: 4, h: 10 },
          legs: { y: 36, w: 5, h: 6, leftX: 17, rightX: 26 }
        };
    }
  })();
  const bodyParts = /* @__PURE__ */ jsxs(Fragment, { children: [
    baseParts.head,
    /* @__PURE__ */ jsx("rect", { x: baseParts.body.x, y: baseParts.body.y, width: baseParts.body.w, height: baseParts.body.h, fill: color }),
    /* @__PURE__ */ jsx("rect", { x: baseParts.body.x + baseParts.body.w - 2, y: baseParts.body.y, width: "2", height: baseParts.body.h, fill: shade }),
    /* @__PURE__ */ jsx("rect", { x: baseParts.body.x, y: baseParts.body.y + baseParts.body.h - 2, width: baseParts.body.w, height: "2", fill: shade }),
    /* @__PURE__ */ jsx("rect", { x: baseParts.arms.leftX, y: baseParts.arms.y, width: baseParts.arms.w, height: baseParts.arms.h, fill: color }),
    /* @__PURE__ */ jsx("rect", { x: baseParts.arms.rightX, y: baseParts.arms.y, width: baseParts.arms.w, height: baseParts.arms.h, fill: color }),
    /* @__PURE__ */ jsx("rect", { x: baseParts.arms.leftX + Math.max(0, baseParts.arms.w - 1), y: baseParts.arms.y, width: "1", height: baseParts.arms.h, fill: shade }),
    /* @__PURE__ */ jsx("rect", { x: baseParts.arms.rightX + Math.max(0, baseParts.arms.w - 1), y: baseParts.arms.y, width: "1", height: baseParts.arms.h, fill: shade }),
    /* @__PURE__ */ jsx("rect", { x: baseParts.legs.leftX, y: baseParts.legs.y, width: baseParts.legs.w, height: baseParts.legs.h, fill: color }),
    /* @__PURE__ */ jsx("rect", { x: baseParts.legs.rightX, y: baseParts.legs.y, width: baseParts.legs.w, height: baseParts.legs.h, fill: color }),
    /* @__PURE__ */ jsx("rect", { x: baseParts.legs.leftX + Math.max(0, baseParts.legs.w - 1), y: baseParts.legs.y, width: "1", height: baseParts.legs.h, fill: shade }),
    /* @__PURE__ */ jsx("rect", { x: baseParts.legs.rightX + Math.max(0, baseParts.legs.w - 1), y: baseParts.legs.y, width: "1", height: baseParts.legs.h, fill: shade })
  ] });
  const details = (() => {
    switch (variant) {
      case 0:
        return /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx("rect", { x: "23", y: "6", width: "2", height: "4", fill: color }),
          /* @__PURE__ */ jsx("circle", { cx: "24", cy: "5", r: "1.5", fill: eye }),
          /* @__PURE__ */ jsx("circle", { cx: "20", cy: "16", r: "1.6", fill: eye }),
          /* @__PURE__ */ jsx("circle", { cx: "28", cy: "16", r: "1.6", fill: eye }),
          /* @__PURE__ */ jsx("rect", { x: "19", y: "20", width: "10", height: "2", fill: outline }),
          /* @__PURE__ */ jsx("rect", { x: "18", y: "28", width: "12", height: "2", fill: shade })
        ] });
      case 1:
        return /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx("rect", { x: "17", y: "14", width: "14", height: "5", fill: eye, opacity: "0.95" }),
          /* @__PURE__ */ jsx("rect", { x: "17", y: "18", width: "14", height: "1", fill: shade }),
          /* @__PURE__ */ jsx("rect", { x: "19", y: "28", width: "10", height: "2", fill: shade }),
          /* @__PURE__ */ jsx("rect", { x: "13", y: "15", width: "3", height: "2", fill: shade }),
          /* @__PURE__ */ jsx("rect", { x: "32", y: "15", width: "3", height: "2", fill: shade })
        ] });
      case 2:
        return /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx("circle", { cx: "19", cy: "16", r: "2.2", fill: eye }),
          /* @__PURE__ */ jsx("circle", { cx: "29", cy: "16", r: "2.2", fill: eye }),
          /* @__PURE__ */ jsx("rect", { x: "20", y: "20", width: "8", height: "2", fill: shade }),
          /* @__PURE__ */ jsx("rect", { x: "20", y: "29", width: "8", height: "2", fill: shade })
        ] });
      case 3:
        return /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx("rect", { x: "18", y: "15", width: "4", height: "2", fill: eye }),
          /* @__PURE__ */ jsx("rect", { x: "26", y: "15", width: "4", height: "2", fill: eye }),
          /* @__PURE__ */ jsx("rect", { x: "16", y: "18", width: "16", height: "2", fill: outline }),
          /* @__PURE__ */ jsx("rect", { x: "18", y: "28", width: "12", height: "2", fill: outline }),
          /* @__PURE__ */ jsx("rect", { x: "16", y: "31", width: "16", height: "2", fill: shade })
        ] });
      case 4:
        return /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx("circle", { cx: "21", cy: "16", r: "1.7", fill: eye }),
          /* @__PURE__ */ jsx("circle", { cx: "27", cy: "16", r: "1.7", fill: eye }),
          /* @__PURE__ */ jsx("rect", { x: "22", y: "20", width: "4", height: "1", fill: shade }),
          /* @__PURE__ */ jsx("rect", { x: "20", y: "29", width: "8", height: "2", fill: shade }),
          /* @__PURE__ */ jsx("rect", { x: "21", y: "32", width: "6", height: "1", fill: outline })
        ] });
      case 5:
        return /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx("rect", { x: "18", y: "5", width: "2", height: "5", fill: color }),
          /* @__PURE__ */ jsx("rect", { x: "28", y: "5", width: "2", height: "5", fill: color }),
          /* @__PURE__ */ jsx("circle", { cx: "19", cy: "4", r: "1.6", fill: eye }),
          /* @__PURE__ */ jsx("circle", { cx: "29", cy: "4", r: "1.6", fill: eye }),
          /* @__PURE__ */ jsx("circle", { cx: "20", cy: "16", r: "1.6", fill: eye }),
          /* @__PURE__ */ jsx("circle", { cx: "28", cy: "16", r: "1.6", fill: eye }),
          /* @__PURE__ */ jsx("rect", { x: "19", y: "20", width: "10", height: "2", fill: shade }),
          /* @__PURE__ */ jsx("rect", { x: "18", y: "28", width: "12", height: "2", fill: shade })
        ] });
      case 6:
        return /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx("circle", { cx: "24", cy: "16", r: "3.2", fill: eye }),
          /* @__PURE__ */ jsx("circle", { cx: "24", cy: "16", r: "1.3", fill: shade }),
          /* @__PURE__ */ jsx("rect", { x: "18", y: "20", width: "12", height: "2", fill: outline }),
          /* @__PURE__ */ jsx("rect", { x: "17", y: "28", width: "2", height: "2", fill: shade }),
          /* @__PURE__ */ jsx("rect", { x: "19", y: "30", width: "2", height: "2", fill: shade }),
          /* @__PURE__ */ jsx("rect", { x: "21", y: "28", width: "2", height: "2", fill: shade }),
          /* @__PURE__ */ jsx("rect", { x: "23", y: "30", width: "2", height: "2", fill: shade }),
          /* @__PURE__ */ jsx("rect", { x: "25", y: "28", width: "2", height: "2", fill: shade }),
          /* @__PURE__ */ jsx("rect", { x: "27", y: "30", width: "2", height: "2", fill: shade }),
          /* @__PURE__ */ jsx("rect", { x: "29", y: "28", width: "2", height: "2", fill: shade })
        ] });
      case 7:
        return /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx("rect", { x: "21", y: "7", width: "6", height: "3", fill: color }),
          /* @__PURE__ */ jsx("rect", { x: "22", y: "5", width: "4", height: "2", fill: color }),
          /* @__PURE__ */ jsx("rect", { x: "18", y: "15", width: "4", height: "2", fill: eye }),
          /* @__PURE__ */ jsx("rect", { x: "26", y: "15", width: "4", height: "2", fill: eye }),
          /* @__PURE__ */ jsx("rect", { x: "17", y: "18", width: "14", height: "2", fill: outline }),
          /* @__PURE__ */ jsx("rect", { x: "19", y: "28", width: "10", height: "2", fill: outline })
        ] });
      case 8:
        return /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx("circle", { cx: "20", cy: "17", r: "2.3", fill: eye }),
          /* @__PURE__ */ jsx("circle", { cx: "28", cy: "17", r: "2.3", fill: eye }),
          /* @__PURE__ */ jsx("rect", { x: "21", y: "21", width: "6", height: "1", fill: shade }),
          /* @__PURE__ */ jsx("rect", { x: "20", y: "27", width: "8", height: "2", fill: shade })
        ] });
      case 9:
      default:
        return /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx("circle", { cx: "19", cy: "16", r: "2.4", fill: eye }),
          /* @__PURE__ */ jsx("circle", { cx: "29", cy: "16", r: "1.4", fill: eye }),
          /* @__PURE__ */ jsx("rect", { x: "17", y: "20", width: "4", height: "1", fill: shade }),
          /* @__PURE__ */ jsx("rect", { x: "23", y: "20", width: "3", height: "1", fill: shade }),
          /* @__PURE__ */ jsx("rect", { x: "28", y: "20", width: "2", height: "1", fill: shade }),
          /* @__PURE__ */ jsx("rect", { x: "18", y: "28", width: "2", height: "2", fill: outline }),
          /* @__PURE__ */ jsx("rect", { x: "20", y: "30", width: "2", height: "2", fill: outline }),
          /* @__PURE__ */ jsx("rect", { x: "22", y: "28", width: "2", height: "2", fill: outline }),
          /* @__PURE__ */ jsx("rect", { x: "24", y: "30", width: "2", height: "2", fill: outline }),
          /* @__PURE__ */ jsx("rect", { x: "26", y: "28", width: "2", height: "2", fill: outline }),
          /* @__PURE__ */ jsx("rect", { x: "28", y: "30", width: "2", height: "2", fill: outline }),
          /* @__PURE__ */ jsx("rect", { x: "31", y: "24", width: "2", height: "4", fill: shade })
        ] });
    }
  })();
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 48 48",
      "aria-hidden": true,
      className,
      shapeRendering: "crispEdges",
      children: [
        /* @__PURE__ */ jsx("rect", { x: "5", y: "5", width: "38", height: "38", fill: color, opacity: "0.08" }),
        /* @__PURE__ */ jsx("rect", { x: "7", y: "7", width: "34", height: "34", fill: "white", opacity: "0.92" }),
        /* @__PURE__ */ jsx("rect", { x: "7", y: "7", width: "34", height: "34", fill: "none", stroke: outline, strokeWidth: "1" }),
        bodyParts,
        details
      ]
    }
  );
}
const AGENT_ACCENT_COLORS = [
  { bar: "bg-orange-500", border: "border-orange-500", avatar: "bg-orange-100", text: "text-orange-600", ring: "ring-orange-500/20" },
  { bar: "bg-blue-500", border: "border-blue-500", avatar: "bg-blue-100", text: "text-blue-600", ring: "ring-blue-500/20" },
  { bar: "bg-violet-500", border: "border-violet-500", avatar: "bg-violet-100", text: "text-violet-600", ring: "ring-violet-500/20" },
  { bar: "bg-emerald-500", border: "border-emerald-500", avatar: "bg-emerald-100", text: "text-emerald-600", ring: "ring-emerald-500/20" },
  { bar: "bg-rose-500", border: "border-rose-500", avatar: "bg-rose-100", text: "text-rose-600", ring: "ring-rose-500/20" },
  { bar: "bg-amber-500", border: "border-amber-500", avatar: "bg-amber-100", text: "text-amber-700", ring: "ring-amber-500/20" },
  { bar: "bg-cyan-500", border: "border-cyan-500", avatar: "bg-cyan-100", text: "text-cyan-600", ring: "ring-cyan-500/20" },
  { bar: "bg-fuchsia-500", border: "border-fuchsia-500", avatar: "bg-fuchsia-100", text: "text-fuchsia-600", ring: "ring-fuchsia-500/20" },
  { bar: "bg-lime-500", border: "border-lime-500", avatar: "bg-lime-100", text: "text-lime-700", ring: "ring-lime-500/20" },
  { bar: "bg-sky-500", border: "border-sky-500", avatar: "bg-sky-100", text: "text-sky-600", ring: "ring-sky-500/20" }
].map((accent, index) => ({
  ...accent,
  hex: ["#f97316", "#3b82f6", "#8b5cf6", "#10b981", "#f43f5e", "#f59e0b", "#06b6d4", "#d946ef", "#84cc16", "#0ea5e9"][index] ?? "#f97316"
}));
const OFFICE_MODEL_LABEL = {
  auto: "Auto",
  opus: "Opus",
  sonnet: "Sonnet",
  codex: "Codex",
  flash: "Flash",
  minimax: "MiniMax",
  "pc1-coder": "PC1 Coder",
  "pc1-planner": "PC1 Planner",
  "pc1-critic": "PC1 Critic"
};
function getOfficeModelLabel(modelId) {
  if (!modelId) return "Unknown";
  return OFFICE_MODEL_LABEL[modelId] ?? modelId.split("/")[1] ?? modelId;
}
function getAgentStatusMeta(status) {
  switch (status) {
    case "active":
      return { label: "Active", className: "text-emerald-600", dotClassName: "bg-emerald-500", pulse: true };
    case "ready":
    case "idle":
      return { label: "Idle", className: "text-neutral-600", dotClassName: "bg-neutral-400" };
    case "error":
      return { label: "Error", className: "text-red-600", dotClassName: "bg-red-500" };
    case "none":
      return { label: "Offline", className: "text-neutral-400", dotClassName: "bg-neutral-400" };
    case "spawning":
      return { label: "Starting", className: "text-blue-600", dotClassName: "bg-blue-500", pulse: true };
    case "paused":
      return { label: "Paused", className: "text-amber-700", dotClassName: "bg-amber-500" };
    default:
      return { label: String(status), className: "text-neutral-600", dotClassName: "bg-neutral-400" };
  }
}
const GRID_DESK_POSITIONS = [
  { x: 120, y: 180 },
  { x: 310, y: 180 },
  { x: 500, y: 180 },
  { x: 690, y: 180 },
  { x: 120, y: 320 },
  { x: 310, y: 320 },
  { x: 500, y: 320 },
  { x: 690, y: 320 },
  { x: 215, y: 460 },
  { x: 405, y: 460 },
  { x: 595, y: 460 },
  { x: 785, y: 460 }
];
const ROUNDTABLE_DESK_POSITIONS = Array.from({ length: 12 }, (_, i) => {
  const angle = (i * 30 - 90) * Math.PI / 180;
  const cx = 450;
  const cy = 320;
  const r = 240;
  return {
    x: cx + r * Math.cos(angle),
    y: cy + r * Math.sin(angle)
  };
});
const WARROOM_DESK_POSITIONS = [
  { x: 90, y: 200 },
  { x: 228, y: 200 },
  { x: 366, y: 200 },
  { x: 504, y: 200 },
  { x: 642, y: 200 },
  { x: 780, y: 200 },
  { x: 90, y: 420 },
  { x: 228, y: 420 },
  { x: 366, y: 420 },
  { x: 504, y: 420 },
  { x: 642, y: 420 },
  { x: 780, y: 420 }
];
const GRID_SOCIAL_SPOTS = [
  { x: 840, y: 140, type: "coffee" },
  { x: 840, y: 300, type: "water" },
  { x: 60, y: 440, type: "plant" },
  { x: 840, y: 460, type: "snack" }
];
const ROUNDTABLE_SOCIAL_SPOTS = [
  { x: 450, y: 320, type: "plant" },
  { x: 510, y: 320, type: "snack" },
  { x: 870, y: 120, type: "coffee" },
  { x: 870, y: 480, type: "water" }
];
const WARROOM_SOCIAL_SPOTS = [
  { x: 56, y: 300, type: "coffee" },
  { x: 56, y: 350, type: "water" },
  { x: 904, y: 300, type: "snack" },
  { x: 904, y: 350, type: "plant" }
];
const DESK_POSITIONS_BY_TEMPLATE = {
  grid: GRID_DESK_POSITIONS,
  roundtable: ROUNDTABLE_DESK_POSITIONS,
  warroom: WARROOM_DESK_POSITIONS
};
const SOCIAL_SPOTS_BY_TEMPLATE = {
  grid: GRID_SOCIAL_SPOTS,
  roundtable: ROUNDTABLE_SOCIAL_SPOTS,
  warroom: WARROOM_SOCIAL_SPOTS
};
const LAYOUT_TEMPLATE_OPTIONS = [
  { key: "grid", label: "⊞ Grid" },
  { key: "roundtable", label: "○ Roundtable" },
  { key: "warroom", label: "▬▬ War Room" }
];
function truncateSpeech(text, max = 64) {
  const n = text.replace(/\s+/g, " ").trim();
  if (!n) return "";
  return n.length <= max ? n : `${n.slice(0, max - 1).trimEnd()}…`;
}
function getSpeechLine(agent, phase) {
  if (agent.status === "active" && agent.lastLine) return truncateSpeech(agent.lastLine, 60);
  if (agent.currentTask) return `Working on ${truncateSpeech(agent.currentTask, 48)}`;
  if (agent.status === "spawning") return "Booting up...";
  if (agent.status === "paused") return "On break ☕";
  if (agent.status === "error") return "Need help!";
  const socialLines = ["Grabbing coffee ☕", "Checking messages 📱", "Stretching 🙆", "Chatting with team 💬", "Reading docs 📖", "Getting water 💧"];
  if (agent.status === "idle" || agent.status === "ready") {
    return socialLines[Math.floor(phase / 4) % socialLines.length];
  }
  return "";
}
function getStatusDotClass(status) {
  switch (status) {
    case "active":
      return "bg-emerald-500";
    case "idle":
    case "ready":
    case "none":
      return "bg-neutral-400";
    case "spawning":
      return "bg-blue-500";
    case "paused":
      return "bg-amber-500";
    case "error":
      return "bg-red-500";
    default:
      return "bg-neutral-400";
  }
}
function getAgentStatusGlowClass(status) {
  switch (status) {
    case "active":
      return "office-status-glow-active";
    case "spawning":
      return "office-status-glow-starting";
    case "paused":
      return "office-status-glow-paused";
    case "error":
      return "office-status-glow-error";
    default:
      return "office-status-glow-idle";
  }
}
function getAgentStatusGlowColor(status) {
  switch (status) {
    case "active":
      return "#10b981";
    case "spawning":
      return "#3b82f6";
    case "paused":
      return "#f59e0b";
    case "error":
      return "#ef4444";
    default:
      return "#94a3b8";
  }
}
function truncateMonitorText(text, max = 30) {
  const normalized = text.replace(/\s+/g, " ").trim();
  if (!normalized) return "";
  return normalized.length <= max ? normalized : `${normalized.slice(0, max - 1).trimEnd()}…`;
}
function getDeskMonitorText(agent, agentTaskTitle) {
  const taskTitle = agentTaskTitle?.trim();
  if (taskTitle) return truncateMonitorText(taskTitle, 30);
  if (agent.status === "idle" || agent.status === "ready") return "Ready";
  return getAgentStatusMeta(agent.status).label;
}
function getAgentEmoji(agent) {
  const row = agent;
  const emoji = row.emoji?.trim() || row.avatarEmoji?.trim();
  return emoji || null;
}
function DeskSVG({
  x,
  y,
  occupied,
  accent,
  monitorText,
  monitorGlow
}) {
  return /* @__PURE__ */ jsxs("g", { transform: `translate(${x} ${y})`, children: [
    /* @__PURE__ */ jsx("rect", { x: "-40", y: "-8", width: "80", height: "40", rx: "4", fill: occupied ? "#f8fafc" : "#f1f5f9", fillOpacity: occupied ? 0.78 : 0.7, stroke: occupied ? "#dbe4ee" : "#e6edf5", strokeWidth: "1" }),
    /* @__PURE__ */ jsx("rect", { x: "-36", y: "32", width: "4", height: "16", rx: "1", fill: "#a7b4c6" }),
    /* @__PURE__ */ jsx("rect", { x: "32", y: "32", width: "4", height: "16", rx: "1", fill: "#a7b4c6" }),
    occupied ? /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("rect", { x: "-20", y: "-30", width: "40", height: "24", rx: "3", fill: monitorGlow || "#3b82f6", opacity: "0.2" }),
      /* @__PURE__ */ jsx("rect", { x: "-18", y: "-28", width: "36", height: "22", rx: "3", fill: "#0f172a" }),
      /* @__PURE__ */ jsx("rect", { x: "-15", y: "-25", width: "30", height: "16", rx: "1.5", fill: "#111827", stroke: monitorGlow || accent || "#3b82f6", strokeWidth: "0.9" }),
      monitorText ? /* @__PURE__ */ jsx(
        "text",
        {
          x: "0",
          y: "-14.8",
          fontSize: "4.2",
          fill: "#e2e8f0",
          textAnchor: "middle",
          fontWeight: "600",
          children: monitorText
        }
      ) : null,
      /* @__PURE__ */ jsx("rect", { x: "-3", y: "-6", width: "6", height: "6", rx: "1", fill: "#64748b" })
    ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("rect", { x: "-18", y: "-28", width: "36", height: "22", rx: "3", fill: "#e2e8f0", stroke: "#cbd5e1", strokeWidth: "1" }),
      /* @__PURE__ */ jsx("rect", { x: "-3", y: "-6", width: "6", height: "6", rx: "1", fill: "#cbd5e1" })
    ] }),
    /* @__PURE__ */ jsx("ellipse", { cx: "0", cy: "56", rx: "14", ry: "6", fill: occupied ? accent ? `${accent}22` : "#dbeafe" : "#f1f5f9" }),
    /* @__PURE__ */ jsx("rect", { x: "-10", y: "48", width: "20", height: "10", rx: "4", fill: occupied ? "#475569" : "#cbd5e1" })
  ] });
}
function CoffeeMachineSVG({ x, y }) {
  return /* @__PURE__ */ jsxs("g", { transform: `translate(${x} ${y})`, children: [
    /* @__PURE__ */ jsx("rect", { x: "-20", y: "-30", width: "40", height: "50", rx: "5", fill: "#78716c" }),
    /* @__PURE__ */ jsx("rect", { x: "-14", y: "-24", width: "28", height: "20", rx: "3", fill: "#292524" }),
    /* @__PURE__ */ jsx("circle", { cx: "0", cy: "-14", r: "6", fill: "#dc2626", opacity: "0.8" }),
    /* @__PURE__ */ jsx("text", { x: "0", y: "-11", fontSize: "6", fill: "white", textAnchor: "middle", children: "☕" }),
    /* @__PURE__ */ jsx("rect", { x: "-16", y: "20", width: "32", height: "6", rx: "2", fill: "#a8a29e" }),
    /* @__PURE__ */ jsx("text", { x: "0", y: "38", fontSize: "8", fill: "#78716c", textAnchor: "middle", children: "Coffee" })
  ] });
}
function WaterCoolerSVG({ x, y }) {
  return /* @__PURE__ */ jsxs("g", { transform: `translate(${x} ${y})`, children: [
    /* @__PURE__ */ jsx("rect", { x: "-14", y: "-20", width: "28", height: "40", rx: "4", fill: "#e2e8f0", stroke: "#cbd5e1" }),
    /* @__PURE__ */ jsx("circle", { cx: "0", cy: "-26", r: "10", fill: "#bfdbfe", stroke: "#93c5fd", strokeWidth: "1.5" }),
    /* @__PURE__ */ jsx("circle", { cx: "-5", cy: "0", r: "2", fill: "#0ea5e9" }),
    /* @__PURE__ */ jsx("circle", { cx: "5", cy: "0", r: "2", fill: "#ef4444" }),
    /* @__PURE__ */ jsx("text", { x: "0", y: "32", fontSize: "8", fill: "#64748b", textAnchor: "middle", children: "Water" })
  ] });
}
function SnackBarSVG({ x, y }) {
  return /* @__PURE__ */ jsxs("g", { transform: `translate(${x} ${y})`, children: [
    /* @__PURE__ */ jsx("rect", { x: "-24", y: "-16", width: "48", height: "28", rx: "4", fill: "#fef3c7", stroke: "#fbbf24", strokeWidth: "1" }),
    /* @__PURE__ */ jsx("text", { x: "0", y: "2", fontSize: "14", textAnchor: "middle", children: "🍪" }),
    /* @__PURE__ */ jsx("text", { x: "0", y: "24", fontSize: "8", fill: "#92400e", textAnchor: "middle", children: "Snacks" })
  ] });
}
function PlantSVG({ x, y }) {
  return /* @__PURE__ */ jsxs("g", { transform: `translate(${x} ${y})`, children: [
    /* @__PURE__ */ jsx("rect", { x: "-10", y: "6", width: "20", height: "14", rx: "3", fill: "#92400e" }),
    /* @__PURE__ */ jsx("circle", { cx: "0", cy: "-4", r: "14", fill: "#16a34a", opacity: "0.9" }),
    /* @__PURE__ */ jsx("circle", { cx: "-8", cy: "0", r: "8", fill: "#22c55e", opacity: "0.8" }),
    /* @__PURE__ */ jsx("circle", { cx: "8", cy: "2", r: "7", fill: "#15803d", opacity: "0.8" })
  ] });
}
function formatRuntime(startedAt, tokenCount) {
  const diffMs = Date.now() - startedAt;
  let time;
  if (diffMs < 6e4) {
    time = `${Math.floor(diffMs / 1e3)}s`;
  } else {
    const mins = Math.floor(diffMs / 6e4);
    time = mins < 60 ? `${mins}m` : `${Math.floor(mins / 60)}h`;
  }
  const tokens = typeof tokenCount === "number" ? tokenCount : 0;
  return `${time} · ${tokens}t`;
}
function kindLabel(kind) {
  if (kind === "subagent" || kind === "sub-agent") return "Sub-Agent";
  if (kind === "main") return "Main";
  if (kind === "chat") return "Chat";
  return kind.charAt(0).toUpperCase() + kind.slice(1);
}
function RemoteSessionCard({ session, onClick }) {
  const statusColor = session.status === "active" ? "bg-emerald-400 animate-pulse" : session.status === "done" ? "bg-neutral-300 dark:bg-neutral-600" : "bg-amber-400";
  const badgeColorClass = session.kind === "main" ? "bg-violet-100 text-violet-600 dark:bg-violet-950/50 dark:text-violet-400 border-violet-200 dark:border-violet-800" : session.kind === "subagent" || session.kind === "sub-agent" ? "bg-emerald-100 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800" : "bg-blue-100 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400 border-blue-200 dark:border-blue-800";
  const modelDisplay = session.model ? session.model.split("/").pop()?.replace(/:latest$/, "") ?? null : null;
  const lastMessageSnippet = session.lastMessage ? session.lastMessage.length > 60 ? `${session.lastMessage.slice(0, 60)}…` : session.lastMessage : null;
  return /* @__PURE__ */ jsxs(
    "button",
    {
      type: "button",
      onClick,
      className: "group flex min-h-11 flex-col items-center gap-1.5 rounded-xl border border-neutral-200 bg-white p-3 text-center transition-all hover:border-accent-500 hover:shadow-sm dark:border-neutral-700 dark:bg-neutral-800",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx("div", { className: "h-8 w-8 rounded-full bg-neutral-100 dark:bg-neutral-700 flex items-center justify-center text-lg", children: "🤖" }),
          /* @__PURE__ */ jsx("span", { className: cn("absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-white dark:border-neutral-800", statusColor) })
        ] }),
        /* @__PURE__ */ jsx("span", { className: "w-full truncate text-sm font-semibold text-neutral-800 dark:text-neutral-200", children: session.label }),
        modelDisplay ? /* @__PURE__ */ jsx("span", { className: "w-full truncate text-xs text-neutral-400", children: modelDisplay }) : null,
        lastMessageSnippet ? /* @__PURE__ */ jsx("span", { className: "w-full truncate text-xs italic text-neutral-500 dark:text-neutral-400", children: lastMessageSnippet }) : null,
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 flex-wrap justify-center", children: [
          /* @__PURE__ */ jsx("span", { className: cn("rounded border px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-widest", badgeColorClass), children: kindLabel(session.kind) }),
          session.startedAt ? /* @__PURE__ */ jsx("span", { className: "text-xs text-neutral-400 tabular-nums", children: formatRuntime(session.startedAt, session.tokenCount) }) : null
        ] })
      ]
    }
  );
}
function OfficeView({
  agentRows,
  missionRunning,
  onViewOutput,
  onNewMission,
  selectedOutputAgentId,
  activeTemplateName: _activeTemplateName,
  companyName = "Mission Control",
  agentTasks = {},
  remoteSessions = [],
  onViewRemoteOutput,
  containerHeight,
  hideHeader = false
}) {
  const compact = Boolean(containerHeight);
  const [tick, setTick] = useState(0);
  const [layoutPickerOpen, setLayoutPickerOpen] = useState(false);
  const [remoteCollapsed, setRemoteCollapsed] = useState(true);
  const [layoutTemplate, setLayoutTemplate] = useState(() => {
    if (typeof window === "undefined") return "grid";
    const saved = window.localStorage.getItem("clawsuite:office-layout");
    return saved === "roundtable" || saved === "warroom" || saved === "grid" ? saved : "grid";
  });
  const deskPositions = DESK_POSITIONS_BY_TEMPLATE[layoutTemplate];
  const socialSpots = SOCIAL_SPOTS_BY_TEMPLATE[layoutTemplate];
  const socialLabelPosition = layoutTemplate === "roundtable" ? { x: 450, y: 108, text: "Collaboration Ring" } : layoutTemplate === "warroom" ? { x: 480, y: 112, text: "Briefing Lounge" } : { x: 840, y: 110, text: "Break Area" };
  const changeLayout = (nextTemplate) => {
    setLayoutTemplate(nextTemplate);
    if (typeof window !== "undefined") {
      window.localStorage.setItem("clawsuite:office-layout", nextTemplate);
    }
  };
  useEffect(() => {
    if (!layoutPickerOpen) return;
    function onDown(e) {
      const target = e.target;
      if (!target.closest("[data-layout-picker]")) {
        setLayoutPickerOpen(false);
      }
    }
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [layoutPickerOpen]);
  useEffect(() => {
    const timer = window.setInterval(() => setTick((t) => t + 1), 200);
    return () => window.clearInterval(timer);
  }, []);
  useEffect(() => {
    if (remoteSessions.length > 0) {
      setRemoteCollapsed(false);
    }
  }, [remoteSessions.length]);
  if (agentRows.length === 0) {
    return /* @__PURE__ */ jsx("div", { className: cn("flex items-center justify-center p-8", compact ? "h-full" : "min-h-[320px]"), children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx("p", { className: "mb-3 text-4xl", children: "🏢" }),
      /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-neutral-600 dark:text-neutral-300", children: "Empty office" }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-xs text-neutral-500 dark:text-neutral-400", children: "Add agents in Configure to fill the office." })
    ] }) });
  }
  const sceneW = 1040;
  const sceneH = 600;
  const activeCount = agentRows.filter((r) => r.status === "active").length;
  const sessionCount = agentRows.filter((r) => Boolean(r.sessionKey)).length;
  const phase = tick * 0.2;
  const agentPositions = agentRows.map((agent, index) => {
    const desk = deskPositions[index % deskPositions.length];
    const isIdle = agent.status === "idle" || agent.status === "ready";
    const isPaused = agent.status === "paused";
    if (isIdle || isPaused) {
      const wanderCycle = Math.floor((tick + index * 17) / 25) % 4;
      const socialSpot = socialSpots[(index + Math.floor(tick / 60)) % socialSpots.length];
      const t = (tick + index * 17) % 25 / 25;
      if (wanderCycle === 0) {
        return { x: desk.x, y: desk.y - 20, atDesk: true, stationary: true };
      } else if (wanderCycle === 1) {
        return {
          x: desk.x + (socialSpot.x - desk.x) * t,
          y: desk.y - 20 + (socialSpot.y - desk.y + 10) * t,
          atDesk: false,
          stationary: false
        };
      } else if (wanderCycle === 2) {
        const bob = Math.sin(phase + index) * 2;
        return { x: socialSpot.x + (index % 2 === 0 ? -20 : 20), y: socialSpot.y + bob, atDesk: false, stationary: true };
      } else {
        const socialSpotBack = socialSpots[(index + Math.floor(tick / 60)) % socialSpots.length];
        return {
          x: socialSpotBack.x + (desk.x - socialSpotBack.x) * t,
          y: socialSpotBack.y + (desk.y - 20 - socialSpotBack.y) * t,
          atDesk: false,
          stationary: false
        };
      }
    }
    return { x: desk.x, y: desk.y - 20, atDesk: true, stationary: true };
  });
  return /* @__PURE__ */ jsxs("div", { className: cn("flex flex-col bg-gradient-to-b from-slate-50 to-neutral-100 dark:from-slate-900 dark:to-slate-800", compact ? "h-full" : "min-h-[480px]"), children: [
    hideHeader ? null : /* @__PURE__ */ jsxs("div", { className: "flex shrink-0 flex-wrap items-start justify-between gap-2 border-b border-neutral-200 bg-white/80 px-5 py-3 backdrop-blur dark:border-slate-700 dark:bg-slate-800/80", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex min-w-0 flex-1 flex-col gap-1", children: [
        /* @__PURE__ */ jsx("span", { className: "text-base font-bold text-neutral-900 dark:text-white", children: "ClawSuite Office" }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
          /* @__PURE__ */ jsxs("span", { className: "rounded-full bg-neutral-100 dark:bg-neutral-800 px-2 py-0.5 text-[10px] font-medium text-neutral-600 dark:text-neutral-400 tabular-nums", children: [
            agentRows.length,
            " agents"
          ] }),
          /* @__PURE__ */ jsxs("span", { className: "rounded-full bg-emerald-50 dark:bg-emerald-900/30 px-2 py-0.5 text-[10px] font-medium text-emerald-700 dark:text-emerald-400 tabular-nums", children: [
            activeCount,
            " working"
          ] }),
          /* @__PURE__ */ jsxs("span", { className: "rounded-full bg-blue-50 dark:bg-blue-900/30 px-2 py-0.5 text-[10px] font-medium text-blue-700 dark:text-blue-400 tabular-nums", children: [
            sessionCount,
            " sessions"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        missionRunning ? /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold text-emerald-700 dark:border-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-400", children: [
          /* @__PURE__ */ jsxs("span", { className: "relative flex size-1.5", children: [
            /* @__PURE__ */ jsx("span", { className: "absolute inset-0 animate-ping rounded-full bg-emerald-400/60" }),
            /* @__PURE__ */ jsx("span", { className: "relative inline-flex size-1.5 rounded-full bg-emerald-500" })
          ] }),
          "Mission Live"
        ] }) : null,
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            onClick: () => onNewMission?.(),
            className: "min-h-11 rounded-lg bg-accent-500 px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-accent-600 sm:px-4 sm:py-2 sm:text-sm",
            children: "+ New Mission"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex-1 overflow-y-auto p-3 md:hidden", children: /* @__PURE__ */ jsx("div", { className: "space-y-2", children: agentRows.map((agent, index) => {
      const accent = AGENT_ACCENT_COLORS[index % AGENT_ACCENT_COLORS.length];
      const statusMeta = getAgentStatusMeta(agent.status);
      const emoji = getAgentEmoji(agent);
      return /* @__PURE__ */ jsxs(
        "button",
        {
          type: "button",
          onClick: () => onViewOutput(agent.id),
          className: "flex min-h-11 w-full items-center gap-3 rounded-xl border border-neutral-200 bg-white px-3 py-2 text-left shadow-sm dark:border-slate-700 dark:bg-slate-900/70",
          children: [
            /* @__PURE__ */ jsx("div", { className: cn("flex size-9 shrink-0 items-center justify-center rounded-full", accent.avatar), children: emoji ? /* @__PURE__ */ jsx("span", { className: "text-base leading-none", "aria-hidden": true, children: emoji }) : /* @__PURE__ */ jsx(AgentAvatar, { index: index % 10, color: accent.hex, size: 22 }) }),
            /* @__PURE__ */ jsxs("div", { className: "min-w-0 flex-1", children: [
              /* @__PURE__ */ jsx("p", { className: "truncate text-sm font-semibold text-neutral-900 dark:text-white", children: agent.name }),
              /* @__PURE__ */ jsx("p", { className: "truncate text-xs text-neutral-500 dark:text-slate-400", children: getOfficeModelLabel(agent.modelId) })
            ] }),
            /* @__PURE__ */ jsx("span", { className: cn("shrink-0 text-xs font-semibold", statusMeta.className), children: statusMeta.label })
          ]
        },
        `${agent.id}-mobile`
      );
    }) }) }),
    /* @__PURE__ */ jsx("div", { className: "hidden shrink-0 justify-end px-3 pb-1 pt-2 md:flex", children: /* @__PURE__ */ jsxs("div", { className: "relative", "data-layout-picker": true, children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          onClick: () => setLayoutPickerOpen((v) => !v),
          className: "inline-flex min-h-11 items-center rounded-lg border border-neutral-200 bg-white px-3 py-1.5 text-xs font-semibold text-neutral-700 transition-colors hover:bg-neutral-50 dark:border-slate-700 dark:bg-slate-800 dark:text-neutral-300 dark:hover:bg-slate-700 sm:px-4 sm:py-2 sm:text-sm",
          title: "Change office layout",
          children: /* @__PURE__ */ jsx("span", { children: "✏️" })
        }
      ),
      layoutPickerOpen && /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-full z-50 mt-1 min-w-[120px] overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-900", children: LAYOUT_TEMPLATE_OPTIONS.map((opt) => /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          onClick: () => {
            changeLayout(opt.key);
            setLayoutPickerOpen(false);
          },
          className: cn(
            "w-full px-3 py-2 text-left text-[12px] transition-colors hover:bg-neutral-50 dark:hover:bg-slate-800",
            layoutTemplate === opt.key ? "font-medium text-accent-600" : "text-neutral-700 dark:text-slate-300"
          ),
          children: opt.label
        },
        opt.key
      )) })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: cn("relative hidden flex-1 md:flex", !compact && "min-h-[440px]"), children: [
      /* @__PURE__ */ jsx("style", { children: `
          @keyframes office-idle-float {
            0%, 100% { transform: translateY(-3px); }
            50% { transform: translateY(3px); }
          }
          @keyframes office-status-glow-green {
            0%, 100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.38), 0 0 14px 2px rgba(16, 185, 129, 0.3); }
            50% { box-shadow: 0 0 0 8px rgba(16, 185, 129, 0), 0 0 22px 6px rgba(16, 185, 129, 0.38); }
          }
          @keyframes office-status-glow-amber {
            0%, 100% { box-shadow: 0 0 0 0 rgba(245, 158, 11, 0.32), 0 0 12px 2px rgba(245, 158, 11, 0.26); }
            50% { box-shadow: 0 0 0 7px rgba(245, 158, 11, 0), 0 0 18px 4px rgba(245, 158, 11, 0.34); }
          }
          @keyframes office-status-glow-blue {
            0%, 100% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.3), 0 0 12px 2px rgba(59, 130, 246, 0.25); }
            50% { box-shadow: 0 0 0 7px rgba(59, 130, 246, 0), 0 0 18px 4px rgba(59, 130, 246, 0.32); }
          }
          @keyframes office-status-glow-neutral {
            0%, 100% { box-shadow: 0 0 0 0 rgba(115, 115, 115, 0.18), 0 0 10px 2px rgba(115, 115, 115, 0.2); }
            50% { box-shadow: 0 0 0 6px rgba(115, 115, 115, 0), 0 0 14px 3px rgba(115, 115, 115, 0.24); }
          }
          @keyframes office-status-glow-red {
            0%, 100% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.34), 0 0 12px 2px rgba(239, 68, 68, 0.3); }
            50% { box-shadow: 0 0 0 7px rgba(239, 68, 68, 0), 0 0 19px 5px rgba(239, 68, 68, 0.36); }
          }
          .office-agent-stationary {
            animation: office-idle-float 3s ease-in-out infinite;
          }
          .office-status-glow-active {
            animation: office-status-glow-green 2.2s ease-in-out infinite;
          }
          .office-status-glow-idle {
            animation: office-status-glow-neutral 2.6s ease-in-out infinite;
          }
          .office-status-glow-starting {
            animation: office-status-glow-blue 2.4s ease-in-out infinite;
          }
          .office-status-glow-paused {
            animation: office-status-glow-amber 2.6s ease-in-out infinite;
          }
          .office-status-glow-error {
            animation: office-status-glow-red 2.2s ease-in-out infinite;
          }
        ` }),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "pointer-events-none absolute inset-0 opacity-30 dark:opacity-20",
          style: {
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(148,163,184,0.35) 1px, transparent 0)",
            backgroundSize: "26px 26px"
          }
        }
      ),
      /* @__PURE__ */ jsxs(
        "svg",
        {
          viewBox: `0 0 ${sceneW} ${sceneH}`,
          className: "absolute inset-0 h-full w-full",
          preserveAspectRatio: "xMidYMid meet",
          "aria-hidden": true,
          children: [
            /* @__PURE__ */ jsx("rect", { x: "80", y: "140", width: "680", height: "420", rx: "16", fill: "#f8fafc", fillOpacity: "0.34", stroke: "#e4ecf4", strokeWidth: "0.8", className: "dark:fill-slate-800/20 dark:stroke-slate-700/60" }),
            /* @__PURE__ */ jsx("text", { x: socialLabelPosition.x, y: socialLabelPosition.y, fontSize: "9", fill: "#94a3b8", textAnchor: "middle", fontWeight: "600", className: "uppercase", children: socialLabelPosition.text }),
            socialSpots.map((spot, i) => spot.type === "coffee" ? /* @__PURE__ */ jsx(CoffeeMachineSVG, { x: spot.x, y: spot.y }, i) : spot.type === "water" ? /* @__PURE__ */ jsx(WaterCoolerSVG, { x: spot.x, y: spot.y }, i) : spot.type === "snack" ? /* @__PURE__ */ jsx(SnackBarSVG, { x: spot.x, y: spot.y }, i) : /* @__PURE__ */ jsx(PlantSVG, { x: spot.x, y: spot.y }, i)),
            /* @__PURE__ */ jsx(PlantSVG, { x: 60, y: 160 }),
            /* @__PURE__ */ jsx(PlantSVG, { x: 60, y: 560 }),
            deskPositions.map((desk, i) => {
              const occupied = i < agentRows.length;
              const accent = occupied ? AGENT_ACCENT_COLORS[i % AGENT_ACCENT_COLORS.length] : void 0;
              const agent = occupied ? agentRows[i] : void 0;
              const monitorText = agent ? getDeskMonitorText(agent, agentTasks[agent.id]) : void 0;
              const monitorGlow = agent ? getAgentStatusGlowColor(agent.status) : void 0;
              return /* @__PURE__ */ jsx(
                "g",
                {
                  className: "transition-all duration-500",
                  style: {
                    transform: `translate(${desk.x}px, ${desk.y}px)`,
                    transition: "transform 0.5s ease-in-out"
                  },
                  children: /* @__PURE__ */ jsx(
                    DeskSVG,
                    {
                      x: 0,
                      y: 0,
                      occupied,
                      accent: accent?.hex,
                      monitorText,
                      monitorGlow
                    }
                  )
                },
                `desk-${i}`
              );
            })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute left-1/2 top-3 z-20 -translate-x-1/2", children: /* @__PURE__ */ jsx("div", { className: "rounded-md border border-neutral-300/90 bg-[#fdfdf8] px-4 py-2 shadow-[0_2px_8px_rgba(15,23,42,0.15)]", children: /* @__PURE__ */ jsx("span", { className: "block whitespace-nowrap text-center text-sm font-bold tracking-wide text-neutral-800 [font-family:'Bradley_Hand','Marker_Felt','Comic_Sans_MS',cursive]", children: companyName }) }) }),
      agentRows.map((agent, index) => {
        const accent = AGENT_ACCENT_COLORS[index % AGENT_ACCENT_COLORS.length];
        const pos = agentPositions[index];
        const emoji = getAgentEmoji(agent);
        const isSelected = agent.id === selectedOutputAgentId;
        const isActive = agent.status === "active";
        const isIdle = agent.status === "idle" || agent.status === "ready";
        const statusMeta = getAgentStatusMeta(agent.status);
        const speechLine = getSpeechLine(agent, tick + index * 7);
        const showSpeech = Boolean(speechLine) && (tick + index * 3) % 8 < 6;
        const movementTransform = `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`;
        return /* @__PURE__ */ jsxs(
          "button",
          {
            type: "button",
            onClick: () => onViewOutput(agent.id),
            className: cn(
              "group absolute z-10 flex flex-col items-center rounded-xl bg-transparent px-1.5 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400",
              isSelected && "ring-2 ring-accent-300/80"
            ),
            style: {
              left: 0,
              top: 0,
              transform: movementTransform,
              transition: "transform 0.8s ease-in-out"
            },
            title: `${agent.name} · ${statusMeta.label}`,
            children: [
              showSpeech ? /* @__PURE__ */ jsxs("span", { className: "pointer-events-none relative mb-2 max-w-[180px] rounded-lg bg-white px-3 py-1.5 text-xs leading-snug text-neutral-700 shadow-lg dark:bg-slate-800 dark:text-slate-200", children: [
                /* @__PURE__ */ jsx("span", { className: "block truncate", children: speechLine }),
                /* @__PURE__ */ jsx("span", { className: "absolute left-1/2 top-full h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white dark:bg-slate-800" })
              ] }) : null,
              /* @__PURE__ */ jsxs(
                "div",
                {
                  className: cn(
                    "relative rounded-full transition-transform duration-300 group-hover:scale-105",
                    getAgentStatusGlowClass(agent.status)
                  ),
                  children: [
                    /* @__PURE__ */ jsx(
                      "div",
                      {
                        className: cn(
                          "flex items-center justify-center rounded-full bg-transparent",
                          pos.stationary && "office-agent-stationary"
                        ),
                        style: { width: isActive ? 46 : 40, height: isActive ? 46 : 40 },
                        children: emoji ? /* @__PURE__ */ jsx("span", { className: "select-none leading-none", style: { fontSize: isActive ? 30 : 26 }, "aria-hidden": true, children: emoji }) : /* @__PURE__ */ jsx(
                          AgentAvatar,
                          {
                            index: index % 10,
                            color: accent.hex,
                            size: isActive ? 44 : 38
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ jsx("span", { className: cn(
                      "absolute -right-0.5 -top-0.5 size-3 rounded-full border-2 border-white dark:border-slate-800",
                      getStatusDotClass(agent.status),
                      statusMeta.pulse && "animate-pulse"
                    ) })
                  ]
                }
              ),
              isActive ? /* @__PURE__ */ jsxs("span", { className: "mt-1 flex items-center gap-0.5 rounded-full bg-emerald-50 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400", children: [
                /* @__PURE__ */ jsx("span", { className: "size-1 animate-pulse rounded-full bg-emerald-500" }),
                /* @__PURE__ */ jsx("span", { className: "size-1 animate-pulse rounded-full bg-emerald-500 [animation-delay:120ms]" }),
                /* @__PURE__ */ jsx("span", { className: "size-1 animate-pulse rounded-full bg-emerald-500 [animation-delay:240ms]" }),
                /* @__PURE__ */ jsx("span", { className: "ml-0.5", children: "Working" })
              ] }) : isIdle && !pos.atDesk ? /* @__PURE__ */ jsx("span", { className: "mt-1 rounded-full bg-blue-50 px-1.5 py-0.5 text-[10px] font-medium text-blue-600 dark:bg-blue-900/40 dark:text-blue-400", children: "On break" }) : null,
              /* @__PURE__ */ jsx("span", { className: "mt-1 max-w-full truncate text-[10px] font-semibold text-neutral-800 dark:text-white", children: agent.name }),
              /* @__PURE__ */ jsx("span", { className: "max-w-full truncate text-xs text-neutral-500 dark:text-slate-400", children: getOfficeModelLabel(agent.modelId) })
            ]
          },
          agent.id
        );
      })
    ] }),
    remoteSessions.length > 0 ? /* @__PURE__ */ jsxs("div", { className: "border-t border-neutral-200 dark:border-neutral-700 p-3", children: [
      /* @__PURE__ */ jsxs(
        "button",
        {
          type: "button",
          onClick: () => setRemoteCollapsed((prev) => !prev),
          className: "mb-2 flex w-full items-center justify-between px-1 text-left",
          children: [
            /* @__PURE__ */ jsx("p", { className: "text-[10px] font-semibold uppercase tracking-widest text-neutral-400", children: "Remote Sessions" }),
            /* @__PURE__ */ jsx("span", { className: "text-[10px] text-neutral-400", children: remoteCollapsed ? "Show" : "Hide" })
          ]
        }
      ),
      !remoteCollapsed ? /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-2", children: remoteSessions.map((session) => /* @__PURE__ */ jsx(
        RemoteSessionCard,
        {
          session,
          onClick: () => onViewRemoteOutput?.(session.sessionKey, session.label)
        },
        session.sessionKey
      )) }) : null
    ] }) : null,
    !compact ? /* @__PURE__ */ jsxs("div", { className: "hidden items-center justify-between border-t border-neutral-200 bg-white/80 px-4 py-2 text-xs text-neutral-500 backdrop-blur dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-400 md:flex", children: [
      /* @__PURE__ */ jsxs("span", { children: [
        agentRows.length,
        "/",
        deskPositions.length,
        " desks occupied"
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsx("span", { className: "size-2 rounded-full bg-emerald-500" }),
          " Working"
        ] }),
        /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsx("span", { className: "size-2 rounded-full bg-neutral-400" }),
          " Idle"
        ] }),
        /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsx("span", { className: "size-2 rounded-full bg-red-500" }),
          " Error"
        ] }),
        /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsx("span", { className: "size-2 rounded-full bg-neutral-400" }),
          " Empty"
        ] })
      ] })
    ] }) : null
  ] });
}
const ACTIVE_MISSION_STORAGE_KEY = "conductor:active-mission";
const CONDUCTOR_SETTINGS_STORAGE_KEY = "conductor-settings";
const DEFAULT_CONDUCTOR_SETTINGS = {
  orchestratorModel: "",
  workerModel: "",
  projectsDir: "",
  maxParallel: 1,
  supervised: false
};
const HISTORY_STORAGE_KEY = "conductor:history";
const MAX_HISTORY_ENTRIES = 50;
const AGENT_NAMES$1 = ["Nova", "Pixel", "Blaze", "Echo", "Sage", "Drift", "Flux", "Volt"];
const AGENT_EMOJIS$1 = ["🤖", "⚡", "🔥", "🌊", "🌿", "💫", "🔮", "⭐"];
function getAgentPersona$1(index) {
  return {
    name: AGENT_NAMES$1[index % AGENT_NAMES$1.length],
    emoji: AGENT_EMOJIS$1[index % AGENT_EMOJIS$1.length]
  };
}
function extractTasksFromPlan(planText) {
  const tasks = [];
  const patterns = [
    /^\s*(\d+)\.\s+(.+)$/gm,
    /^\s*#{1,3}\s+(?:Step\s+)?(\d+)[.:]\s*(.+)$/gm,
    /^\s*-\s+\*\*(?:Task\s+)?(\d+)[.:]\s*\*\*\s*(.+)$/gm
  ];
  const seen = /* @__PURE__ */ new Set();
  for (const pattern of patterns) {
    let match;
    while ((match = pattern.exec(planText)) !== null) {
      const num = match[1];
      const title = match[2].replace(/\*\*/g, "").trim();
      const id = `task-${num}`;
      if (!seen.has(id) && title.length > 3 && title.length < 200) {
        seen.add(id);
        tasks.push({ id, title, status: "pending", workerKey: null, output: null });
      }
    }
  }
  tasks.sort((a, b) => {
    const numA = parseInt(a.id.replace("task-", ""), 10);
    const numB = parseInt(b.id.replace("task-", ""), 10);
    return numA - numB;
  });
  return tasks;
}
function readString(value) {
  return typeof value === "string" && value.trim().length > 0 ? value.trim() : null;
}
function readNumber(value) {
  return typeof value === "number" && Number.isFinite(value) ? value : null;
}
function readRecord(value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) return null;
  return value;
}
function toIso(value) {
  if (typeof value === "string" && value.trim()) {
    const ms = new Date(value).getTime();
    return Number.isFinite(ms) ? new Date(ms).toISOString() : null;
  }
  if (typeof value === "number" && Number.isFinite(value)) {
    return new Date(value).toISOString();
  }
  return null;
}
function loadPersistedMission() {
  try {
    const raw = globalThis.localStorage?.getItem(ACTIVE_MISSION_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    const goal = typeof parsed.goal === "string" ? parsed.goal : null;
    const phase = parsed.phase;
    const streamText = typeof parsed.streamText === "string" ? parsed.streamText : null;
    const planText = typeof parsed.planText === "string" ? parsed.planText : null;
    const workerKeys = Array.isArray(parsed.workerKeys) ? parsed.workerKeys.filter((value) => typeof value === "string") : null;
    const workerLabels = Array.isArray(parsed.workerLabels) ? parsed.workerLabels.filter((value) => typeof value === "string") : null;
    const workerOutputs = parsed.workerOutputs && typeof parsed.workerOutputs === "object" && !Array.isArray(parsed.workerOutputs) ? Object.fromEntries(
      Object.entries(parsed.workerOutputs).filter(
        (entry) => typeof entry[0] === "string" && typeof entry[1] === "string"
      )
    ) : {};
    const missionStartedAt = parsed.missionStartedAt === null || parsed.missionStartedAt === void 0 ? null : toIso(parsed.missionStartedAt);
    const isPaused = parsed.isPaused === true;
    const pausedElapsedMs = typeof parsed.pausedElapsedMs === "number" && Number.isFinite(parsed.pausedElapsedMs) ? Math.max(0, parsed.pausedElapsedMs) : 0;
    const accumulatedPausedMs = typeof parsed.accumulatedPausedMs === "number" && Number.isFinite(parsed.accumulatedPausedMs) ? Math.max(0, parsed.accumulatedPausedMs) : 0;
    const pauseStartedAt = parsed.pauseStartedAt === null || parsed.pauseStartedAt === void 0 ? null : toIso(parsed.pauseStartedAt);
    const completedAt = parsed.completedAt === null || parsed.completedAt === void 0 ? null : toIso(parsed.completedAt);
    const tasks = Array.isArray(parsed.tasks) ? parsed.tasks.map((task) => {
      const record = readRecord(task);
      if (!record) return null;
      const id = readString(record.id);
      const title = readString(record.title);
      const status = record.status;
      if (!id || !title || status !== "pending" && status !== "running" && status !== "complete" && status !== "failed") {
        return null;
      }
      return {
        id,
        title,
        status,
        workerKey: record.workerKey === null || record.workerKey === void 0 ? null : readString(record.workerKey),
        output: record.output === null || record.output === void 0 ? null : readString(record.output)
      };
    }).filter((task) => task !== null) : [];
    if (!goal || phase !== "idle" && phase !== "decomposing" && phase !== "running" && phase !== "complete" || streamText === null || planText === null || !workerKeys || !workerLabels) {
      return null;
    }
    const isStale = phase === "running" || phase === "decomposing";
    return {
      goal: isStale ? "" : goal,
      phase: isStale ? "idle" : phase,
      missionStartedAt: isStale ? null : missionStartedAt,
      isPaused: isStale ? false : isPaused,
      pausedElapsedMs: isStale ? 0 : pausedElapsedMs,
      accumulatedPausedMs: isStale ? 0 : accumulatedPausedMs,
      pauseStartedAt: isStale ? null : pauseStartedAt,
      workerKeys: isStale ? [] : workerKeys,
      workerLabels: isStale ? [] : workerLabels,
      workerOutputs,
      streamText,
      planText,
      completedAt,
      tasks
    };
  } catch {
    return null;
  }
}
function loadConductorSettings() {
  try {
    const raw = globalThis.localStorage?.getItem(CONDUCTOR_SETTINGS_STORAGE_KEY);
    if (!raw) return DEFAULT_CONDUCTOR_SETTINGS;
    const parsed = JSON.parse(raw);
    return {
      orchestratorModel: typeof parsed.orchestratorModel === "string" ? parsed.orchestratorModel : DEFAULT_CONDUCTOR_SETTINGS.orchestratorModel,
      workerModel: typeof parsed.workerModel === "string" ? parsed.workerModel : DEFAULT_CONDUCTOR_SETTINGS.workerModel,
      projectsDir: typeof parsed.projectsDir === "string" ? parsed.projectsDir : DEFAULT_CONDUCTOR_SETTINGS.projectsDir,
      maxParallel: Math.min(5, Math.max(1, typeof parsed.maxParallel === "number" && Number.isFinite(parsed.maxParallel) ? Math.round(parsed.maxParallel) : DEFAULT_CONDUCTOR_SETTINGS.maxParallel)),
      supervised: typeof parsed.supervised === "boolean" ? parsed.supervised : DEFAULT_CONDUCTOR_SETTINGS.supervised
    };
  } catch {
    return DEFAULT_CONDUCTOR_SETTINGS;
  }
}
function persistConductorSettings(settings) {
  try {
    globalThis.localStorage?.setItem(CONDUCTOR_SETTINGS_STORAGE_KEY, JSON.stringify(settings));
  } catch {
  }
}
function loadMissionHistory() {
  try {
    const raw = globalThis.localStorage?.getItem(HISTORY_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    const seen = /* @__PURE__ */ new Set();
    return parsed.filter((entry) => {
      if (!entry || typeof entry !== "object") return false;
      const e = entry;
      if (typeof e.id !== "string" || typeof e.goal !== "string" || typeof e.startedAt !== "string") return false;
      if (seen.has(e.id)) return false;
      seen.add(e.id);
      return true;
    }).map((entry) => {
      const projectPath = typeof entry.projectPath === "string" && entry.projectPath.trim() || extractProjectPath$1(typeof entry.projectPath === "string" ? entry.projectPath : "") || null;
      const outputText = typeof entry.outputText === "string" ? entry.outputText : void 0;
      const streamText = typeof entry.streamText === "string" ? entry.streamText : void 0;
      const outputPath = typeof entry.outputPath === "string" && entry.outputPath.trim() || extractProjectPath$1(typeof entry.outputPath === "string" ? entry.outputPath : "") || projectPath || extractProjectPath$1(outputText ?? "") || extractProjectPath$1(streamText ?? "") || null;
      return {
        ...entry,
        projectPath,
        outputPath,
        outputText,
        streamText
      };
    }).slice(0, MAX_HISTORY_ENTRIES);
  } catch {
    return [];
  }
}
function appendMissionHistory(entry) {
  try {
    const current = loadMissionHistory();
    const filtered = current.filter((e) => e.id !== entry.id);
    const updated = [entry, ...filtered].slice(0, MAX_HISTORY_ENTRIES);
    globalThis.localStorage?.setItem(HISTORY_STORAGE_KEY, JSON.stringify(updated));
  } catch {
  }
}
function persistMission(state) {
  try {
    globalThis.localStorage?.setItem(ACTIVE_MISSION_STORAGE_KEY, JSON.stringify(state));
  } catch {
  }
}
function clearPersistedMission() {
  try {
    globalThis.localStorage?.removeItem(ACTIVE_MISSION_STORAGE_KEY);
  } catch {
  }
}
function clearMissionHistoryStorage() {
  try {
    globalThis.localStorage?.removeItem(HISTORY_STORAGE_KEY);
  } catch {
  }
}
function readContextTokens(session) {
  return readNumber(session.contextTokens) ?? readNumber(session.maxTokens) ?? readNumber(session.contextWindow) ?? readNumber(session.usage && typeof session.usage === "object" ? session.usage.contextTokens : null) ?? 0;
}
function deriveWorkerStatus(session, updatedAt) {
  const status = readString(session.status)?.toLowerCase();
  if (status && ["complete", "completed", "done", "success", "succeeded"].includes(status)) return "complete";
  if (status && ["idle", "waiting", "sleeping"].includes(status)) return "idle";
  if (status && ["error", "errored", "failed", "cancelled", "canceled", "killed"].includes(status)) return "stale";
  const updatedMs = updatedAt ? new Date(updatedAt).getTime() : 0;
  const staleness = updatedMs > 0 ? Date.now() - updatedMs : 0;
  const totalTokens = readNumber(session.totalTokens) ?? readNumber(session.tokenCount) ?? 0;
  if (totalTokens > 0 && staleness > 1e4) return "complete";
  if (staleness > 12e4) return "stale";
  return "running";
}
function workersLookComplete(workers, staleAfterMs) {
  if (workers.length === 0) return false;
  return workers.every((worker) => {
    if (worker.totalTokens <= 0) return false;
    if (!worker.updatedAt) return false;
    const updatedMs = new Date(worker.updatedAt).getTime();
    if (!Number.isFinite(updatedMs)) return false;
    return Date.now() - updatedMs >= staleAfterMs;
  });
}
function prettifyCronLabel(value) {
  const cronMatch = value.match(/^cron[_:]([0-9a-f]{6,})/i);
  if (cronMatch) {
    return `Mission ${cronMatch[1].slice(0, 6)}`;
  }
  const conductorMatch = value.match(/^conductor[-_](\d+)/i);
  if (conductorMatch) {
    return `Mission ${conductorMatch[1].slice(-6)}`;
  }
  return value.replace(/[-_]+/g, " ").trim();
}
function formatDisplayName(session) {
  const label = readString(session.label);
  if (label) {
    if (/^cron[_:]|^conductor[-_]/i.test(label)) return prettifyCronLabel(label);
    return label.replace(/^worker-/, "").replace(/[-_]+/g, " ");
  }
  const title = readString(session.title) ?? readString(session.derivedTitle);
  if (title) {
    if (/^cron[_:]|^conductor[-_]/i.test(title)) return prettifyCronLabel(title);
    return title;
  }
  const key = readString(session.key) ?? "worker";
  if (/^cron[_:]/i.test(key)) return prettifyCronLabel(key);
  return key.split(":").pop()?.replace(/[-_]+/g, " ") ?? key;
}
function formatTokenUsage(totalTokens, contextTokens) {
  if (contextTokens > 0) return `${totalTokens.toLocaleString()} / ${contextTokens.toLocaleString()} tok`;
  return `${totalTokens.toLocaleString()} tok`;
}
function toWorker(session) {
  const key = readString(session.key);
  if (!key) return null;
  const label = readString(session.label) ?? "worker";
  const updatedAt = toIso(session.updatedAt ?? session.startedAt ?? session.createdAt);
  const totalTokens = readNumber(session.totalTokens) ?? readNumber(session.tokenCount) ?? 0;
  const contextTokens = readContextTokens(session);
  return {
    key,
    label,
    model: readString(session.model),
    status: deriveWorkerStatus(session, updatedAt),
    updatedAt,
    displayName: formatDisplayName(session),
    totalTokens,
    contextTokens,
    tokenUsageLabel: formatTokenUsage(totalTokens, contextTokens),
    raw: session
  };
}
function extractHistoryMessageText(message) {
  if (!message) return "";
  if (typeof message.content === "string") return message.content;
  if (Array.isArray(message.content)) {
    return message.content.map((part) => typeof part?.text === "string" ? part.text : "").filter(Boolean).join("\n");
  }
  return "";
}
function getLastAssistantMessage$1(messages) {
  if (!Array.isArray(messages)) return "";
  let best = "";
  for (let index = messages.length - 1; index >= 0; index -= 1) {
    const message = messages[index];
    if (message?.role !== "assistant") continue;
    const text = extractHistoryMessageText(message).trim();
    if (text.length > best.length) best = text;
  }
  return best;
}
function extractProjectPath$1(text) {
  const structuredPatterns = [
    /\b(?:Created|Output|Wrote|Saved to|Built|Generated|Written to)\s+(\/tmp\/dispatch-[^\s"')`\]>]+)/gi,
    /\b(?:Created|Output|Wrote|Saved to|Built|Generated|Written to)\s*:\s*(\/tmp\/dispatch-[^\s"')`\]>]+)/gi
  ];
  for (const pattern of structuredPatterns) {
    let match;
    while ((match = pattern.exec(text)) !== null) {
      const raw = match[1];
      if (!raw) continue;
      const cleaned = raw.replace(/[.,;:!?`]+$/, "");
      const normalized = cleaned.replace(/\/(index\.html|dist|build)\/?$/i, "");
      if (normalized.startsWith("/tmp/dispatch-")) return normalized;
    }
  }
  const matches = text.match(/\/tmp\/dispatch-[^\s"')`\]>]+/g) ?? [];
  for (const raw of matches) {
    const cleaned = raw.replace(/[.,;:!?\-`]+$/, "");
    const normalized = cleaned.replace(/\/(index\.html|dist|build)\/?$/i, "");
    if (normalized.startsWith("/tmp/dispatch-")) return normalized;
  }
  const tmpMatches = text.match(/\/tmp\/[a-zA-Z0-9][^\s"')`\]>]+/g) ?? [];
  for (const raw of tmpMatches) {
    const cleaned = raw.replace(/[.,;:!?\-`]+$/, "");
    const normalized = cleaned.replace(/\/(index\.html|dist|build)\/?$/i, "");
    if (normalized.length > 5) return normalized;
  }
  return null;
}
function buildMissionOutputPath(workers, workerOutputs, tasks, streamText) {
  const workerOutputTexts = [
    ...Object.values(workerOutputs),
    ...workers.map((worker) => getLastAssistantMessage$1(worker.raw.messages))
  ].filter(Boolean);
  for (const text of workerOutputTexts) {
    const extractedPath = extractProjectPath$1(text);
    if (extractedPath) return extractedPath;
  }
  for (const task of tasks) {
    if (!task.output) continue;
    const extractedPath = extractProjectPath$1(task.output);
    if (extractedPath) return extractedPath;
  }
  const streamPath = extractProjectPath$1(streamText);
  if (streamPath) return streamPath;
  return null;
}
function summarizeWorkers(workers) {
  return workers.map((worker) => {
    const output = getLastAssistantMessage$1(worker.raw.messages);
    const firstLine = output.split(/\n+/).map((line) => line.trim()).find(Boolean);
    const statusLabel = worker.status === "stale" ? "failed" : worker.status;
    return `${worker.displayName}: ${firstLine ?? `${statusLabel} · ${worker.totalTokens.toLocaleString()} tok`}`;
  });
}
function buildCompleteSummary(params) {
  const { goal, streamError, missionStartedAt, completedAt, totalWorkers, totalTokens, outputPath } = params;
  const durationMs = Math.max(0, new Date(completedAt).getTime() - new Date(missionStartedAt).getTime());
  const totalSeconds = Math.floor(durationMs / 1e3);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor(totalSeconds % 3600 / 60);
  const seconds = totalSeconds % 60;
  const duration = hours > 0 ? `${hours}h ${minutes}m ${seconds}s` : minutes > 0 ? `${minutes}m ${seconds}s` : `${seconds}s`;
  const lines = [
    streamError ? `❌ ${streamError}` : "✅ Mission completed successfully",
    "",
    `**Goal:** ${goal}`,
    `**Duration:** ${duration}`
  ];
  if (totalWorkers > 0) {
    lines.push(`**Workers:** ${totalWorkers} ran · ${totalTokens.toLocaleString()} tokens`);
  }
  if (outputPath) {
    lines.push(`**Output:** ${outputPath.split("/").pop() || "Output ready"}`);
  }
  return lines.join("\n");
}
function buildMissionOutputText(workers, workerOutputs, streamText) {
  const workerSections = workers.map((worker) => {
    const output = (workerOutputs[worker.key] ?? getLastAssistantMessage$1(worker.raw.messages)).trim();
    if (!output) return null;
    return `### ${worker.displayName}

${output}`;
  }).filter((section) => section !== null);
  if (workerSections.length > 0) {
    return workerSections.join("\n\n---\n\n").slice(0, 5e3);
  }
  return streamText.trim().slice(0, 5e3);
}
async function fetchWorkerOutput(sessionKey, limit = 5) {
  const response = await fetch(`/api/history?sessionKey=${encodeURIComponent(sessionKey)}&limit=${limit}`);
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(payload.error || `Failed to load history for ${sessionKey}`);
  }
  return getLastAssistantMessage$1(payload.messages);
}
function useConductorGateway() {
  const [initialMission] = useState(() => loadPersistedMission());
  const [phase, setPhase] = useState(() => initialMission?.phase ?? "idle");
  const [goal, setGoal] = useState(() => initialMission?.goal ?? "");
  const [orchestratorSessionKey, setOrchestratorSessionKey] = useState(() => initialMission?.workerKeys[0] ?? null);
  const [streamText, setStreamText] = useState(() => initialMission?.streamText ?? "");
  const [planText, setPlanText] = useState(() => initialMission?.planText ?? "");
  const [streamEvents, setStreamEvents] = useState([]);
  const [missionStartedAt, setMissionStartedAt] = useState(() => initialMission?.missionStartedAt ?? null);
  const [isPaused, setIsPaused] = useState(() => initialMission?.isPaused ?? false);
  const [pausedElapsedMs, setPausedElapsedMs] = useState(() => initialMission?.pausedElapsedMs ?? 0);
  const [accumulatedPausedMs, setAccumulatedPausedMs] = useState(() => initialMission?.accumulatedPausedMs ?? 0);
  const [pauseStartedAt, setPauseStartedAt] = useState(() => initialMission?.pauseStartedAt ?? null);
  const [completedAt, setCompletedAt] = useState(() => initialMission?.completedAt ?? null);
  const [streamError, setStreamError] = useState(null);
  const [timeoutWarning, setTimeoutWarning] = useState(false);
  const [missionWorkerKeys, setMissionWorkerKeys] = useState(() => new Set(initialMission?.workerKeys ?? []));
  const [missionWorkerLabels, setMissionWorkerLabels] = useState(() => new Set(initialMission?.workerLabels ?? []));
  const [workerOutputs, setWorkerOutputs] = useState(() => initialMission?.workerOutputs ?? {});
  const [tasks, setTasks] = useState(() => initialMission?.tasks ?? []);
  const [missionHistory, setMissionHistory] = useState(() => loadMissionHistory());
  const [selectedHistoryEntry, setSelectedHistoryEntry] = useState(null);
  const [conductorSettings, setConductorSettings] = useState(() => loadConductorSettings());
  const doneRef = useRef(initialMission?.phase === "complete");
  const seenToolCallRef = useRef(false);
  const historySavedRef = useRef(false);
  const lastActivityAtRef = useRef(Date.now());
  const lastWorkerSnapshotRef = useRef("");
  const sessionsQuery = useQuery({
    queryKey: ["conductor", "gateway", "sessions"],
    queryFn: async () => {
      const payload = await fetchSessions();
      const sessions = Array.isArray(payload.sessions) ? payload.sessions : [];
      const missionStartMs = missionStartedAt ? new Date(missionStartedAt).getTime() : 0;
      return sessions.filter((session) => {
        const label = readString(session.label) ?? "";
        const key = readString(session.key) ?? "";
        if (missionWorkerKeys.size > 0 && missionWorkerKeys.has(key)) {
          return true;
        }
        if (label.startsWith("worker-") || label.startsWith("conductor-")) {
          if (missionWorkerLabels.size > 0 && missionWorkerLabels.has(label)) {
            return true;
          }
          const createdIso = toIso(session.createdAt ?? session.startedAt ?? session.updatedAt);
          if (createdIso && missionStartMs && new Date(createdIso).getTime() >= missionStartMs) {
            return true;
          }
        }
        if (key.includes(":subagent:")) {
          const createdIso = toIso(session.createdAt ?? session.startedAt ?? session.updatedAt);
          if (createdIso && missionStartMs && new Date(createdIso).getTime() >= missionStartMs) {
            return true;
          }
        }
        return false;
      }).map(toWorker).filter((session) => session !== null).sort((a, b) => {
        const statusRank = { running: 0, idle: 1, complete: 2, stale: 3 };
        const rankDiff = statusRank[a.status] - statusRank[b.status];
        if (rankDiff !== 0) return rankDiff;
        return new Date(b.updatedAt ?? 0).getTime() - new Date(a.updatedAt ?? 0).getTime();
      });
    },
    enabled: phase !== "idle",
    refetchInterval: phase === "decomposing" || phase === "running" || phase === "complete" && Object.keys(workerOutputs).length === 0 ? 3e3 : false
  });
  const recentSessionsQuery = useQuery({
    queryKey: ["conductor", "recent-sessions"],
    queryFn: async () => {
      const payload = await fetchSessions();
      const sessions = Array.isArray(payload.sessions) ? payload.sessions : [];
      const cutoff = Date.now() - 24 * 60 * 6e4;
      return sessions.filter((session) => {
        const label = readString(session.label) ?? "";
        const key = readString(session.key) ?? "";
        const updatedAt = toIso(session.updatedAt ?? session.startedAt ?? session.createdAt);
        if (!updatedAt) return false;
        return (label.startsWith("worker-") || key.includes(":subagent:")) && new Date(updatedAt).getTime() >= cutoff;
      }).sort((a, b) => {
        const updatedA = new Date(toIso(a.updatedAt ?? a.startedAt ?? a.createdAt) ?? 0).getTime();
        const updatedB = new Date(toIso(b.updatedAt ?? b.startedAt ?? b.createdAt) ?? 0).getTime();
        return updatedB - updatedA;
      }).slice(0, 20);
    },
    enabled: phase === "idle",
    refetchInterval: false
  });
  const workers = sessionsQuery.data ?? [];
  const activeWorkers = useMemo(
    () => workers.filter((worker) => worker.status === "running" || worker.status === "idle"),
    [workers]
  );
  const hasPersistedMission = initialMission !== null;
  const getMissionElapsedMs = (referenceTime = Date.now()) => {
    if (!missionStartedAt) return 0;
    const startedMs = new Date(missionStartedAt).getTime();
    if (!Number.isFinite(startedMs)) return 0;
    const pauseStartedMs = pauseStartedAt ? new Date(pauseStartedAt).getTime() : NaN;
    const inFlightPausedMs = isPaused && Number.isFinite(pauseStartedMs) ? Math.max(0, referenceTime - pauseStartedMs) : 0;
    return Math.max(0, referenceTime - startedMs - accumulatedPausedMs - inFlightPausedMs);
  };
  useEffect(() => {
    if (missionWorkerLabels.size === 0 || workers.length === 0) return;
    const matchedKeys = workers.filter((worker) => missionWorkerLabels.has(worker.label)).map((worker) => worker.key);
    if (matchedKeys.length === 0) return;
    setMissionWorkerKeys((current) => {
      const next = new Set(current);
      let changed = false;
      for (const key of matchedKeys) {
        if (!next.has(key)) {
          next.add(key);
          changed = true;
        }
      }
      return changed ? next : current;
    });
  }, [missionWorkerLabels, workers]);
  useEffect(() => {
    if (phase !== "decomposing") return;
    if (workers.length > 0) {
      setPhase("running");
      return;
    }
    const timer = setTimeout(() => {
      if (phase === "decomposing") {
        setPhase("running");
      }
    }, 15e3);
    return () => clearTimeout(timer);
  }, [phase, workers.length]);
  useEffect(() => {
    if (phase !== "running" && phase !== "decomposing") {
      setTimeoutWarning(false);
      lastActivityAtRef.current = Date.now();
      lastWorkerSnapshotRef.current = "";
      return;
    }
    lastActivityAtRef.current = Date.now();
    setTimeoutWarning(false);
  }, [phase]);
  useEffect(() => {
    if (phase !== "running" && phase !== "decomposing") return;
    const workerSnapshot = workers.map((worker) => `${worker.key}:${worker.updatedAt ?? ""}:${worker.totalTokens}:${worker.status}`).join("|");
    if (workerSnapshot && workerSnapshot !== lastWorkerSnapshotRef.current) {
      lastWorkerSnapshotRef.current = workerSnapshot;
      lastActivityAtRef.current = Date.now();
      setTimeoutWarning(false);
    }
  }, [phase, workers]);
  useEffect(() => {
    if (phase !== "running" && phase !== "decomposing") return;
    lastActivityAtRef.current = Date.now();
    setTimeoutWarning(false);
  }, [phase, streamText, planText, streamEvents.length]);
  useEffect(() => {
    if (phase !== "running" && phase !== "decomposing") return;
    const timer = window.setInterval(() => {
      if (Date.now() - lastActivityAtRef.current >= 6e4) {
        setTimeoutWarning(true);
      }
    }, 1e3);
    return () => window.clearInterval(timer);
  }, [phase]);
  useEffect(() => {
    if (phase !== "running") return;
    const shouldCompleteImmediately = doneRef.current && workersLookComplete(workers, 8e3);
    if (shouldCompleteImmediately) {
      setPhase("complete");
      setCompletedAt((value) => value ?? (/* @__PURE__ */ new Date()).toISOString());
      return;
    }
    if (activeWorkers.length > 0) return;
    if (workers.length === 0 && !doneRef.current) return;
    setPhase("complete");
    setCompletedAt((value) => value ?? (/* @__PURE__ */ new Date()).toISOString());
  }, [activeWorkers.length, phase, workers]);
  useEffect(() => {
    if (workers.length === 0) return;
    let cancelled = false;
    const fetchAll = async () => {
      for (const worker of workers) {
        if (worker.totalTokens <= 0 && worker.status !== "complete") continue;
        try {
          const output = await fetchWorkerOutput(worker.key, 10);
          if (cancelled || !output) continue;
          setWorkerOutputs((current) => {
            if (current[worker.key] === output) return current;
            return { ...current, [worker.key]: output };
          });
        } catch {
        }
      }
    };
    void fetchAll();
    const hasRunningWorkers = workers.some((worker) => worker.status === "running" || worker.status === "idle");
    const hasMissingOutputs = workers.some((worker) => worker.status === "complete" && !workerOutputs[worker.key]);
    if (!hasRunningWorkers && !hasMissingOutputs) {
      return () => {
        cancelled = true;
      };
    }
    const timer = window.setInterval(() => {
      void fetchAll();
    }, hasRunningWorkers ? 5e3 : 2e3);
    return () => {
      cancelled = true;
      window.clearInterval(timer);
    };
  }, [phase, workers]);
  useEffect(() => {
    if (!planText) return;
    const extracted = extractTasksFromPlan(planText);
    if (extracted.length === 0) return;
    setTasks((current) => {
      if (current.length >= extracted.length) return current;
      return extracted.map((task) => {
        const existing = current.find((item) => item.id === task.id);
        return existing ?? task;
      });
    });
  }, [planText]);
  useEffect(() => {
    if (tasks.length === 0 || workers.length === 0) return;
    setTasks((current) => {
      const updated = current.map((task, index) => {
        const worker = workers[index];
        if (!worker) return task;
        const workerOutput = workerOutputs[worker.key] ?? null;
        const newStatus = worker.status === "complete" ? "complete" : worker.status === "stale" ? "failed" : worker.status === "running" ? "running" : task.status;
        if (task.workerKey === worker.key && task.status === newStatus && task.output === workerOutput) return task;
        return { ...task, workerKey: worker.key, status: newStatus, output: workerOutput };
      });
      const changed = updated.some((task, index) => task !== current[index]);
      return changed ? updated : current;
    });
  }, [workers, workerOutputs, tasks.length]);
  const historySaveCountRef = useRef(0);
  useEffect(() => {
    if (phase !== "complete" || !goal || !completedAt || !missionStartedAt) return;
    const missionId = `mission-${new Date(missionStartedAt).getTime()}`;
    const outputPath = buildMissionOutputPath(workers, workerOutputs, tasks, streamText);
    const workerSummary = summarizeWorkers(workers);
    const outputText = buildMissionOutputText(workers, workerOutputs, streamText);
    const totalTokens = workers.reduce((sum, worker) => sum + worker.totalTokens, 0);
    const completeSummary = buildCompleteSummary({
      goal,
      streamError,
      missionStartedAt,
      completedAt,
      totalWorkers: workers.length,
      totalTokens,
      outputPath
    });
    const workerDetails = workers.map((worker, index) => {
      const persona = getAgentPersona$1(index);
      return {
        label: worker.label,
        model: worker.model ?? "",
        totalTokens: worker.totalTokens,
        personaEmoji: persona.emoji,
        personaName: persona.name
      };
    });
    const entry = {
      id: missionId,
      goal,
      startedAt: missionStartedAt,
      completedAt,
      workerCount: workers.length,
      totalTokens,
      status: streamError ? "failed" : "completed",
      projectPath: outputPath,
      outputPath,
      workerSummary: workerSummary.length > 0 ? workerSummary : void 0,
      outputText: outputText || void 0,
      streamText: streamText ? streamText.slice(0, 5e3) : void 0,
      completeSummary,
      workerDetails: workerDetails.length > 0 ? workerDetails : void 0,
      error: streamError ?? void 0
    };
    appendMissionHistory(entry);
    if (historySaveCountRef.current === 0) {
      historySavedRef.current = true;
      setMissionHistory((current) => {
        if (current.some((e) => e.id === missionId)) return current;
        return [entry, ...current].slice(0, MAX_HISTORY_ENTRIES);
      });
    } else {
      setMissionHistory(
        (current) => current.map((e) => e.id === missionId ? entry : e)
      );
    }
    historySaveCountRef.current += 1;
  }, [phase, goal, completedAt, missionStartedAt, workers, streamError, workerOutputs, tasks, streamText]);
  useEffect(() => {
    persistConductorSettings(conductorSettings);
  }, [conductorSettings]);
  useEffect(() => {
    if (phase === "idle") {
      try {
        localStorage.removeItem(ACTIVE_MISSION_STORAGE_KEY);
      } catch {
      }
      return;
    }
    persistMission({
      goal,
      phase,
      missionStartedAt,
      isPaused,
      pausedElapsedMs,
      accumulatedPausedMs,
      pauseStartedAt,
      workerKeys: [...missionWorkerKeys],
      workerLabels: [...missionWorkerLabels],
      workerOutputs,
      streamText: streamText.slice(0, 1e4),
      planText: planText.slice(0, 1e4),
      completedAt,
      tasks
    });
  }, [phase, goal, missionStartedAt, isPaused, pausedElapsedMs, accumulatedPausedMs, pauseStartedAt, completedAt, missionWorkerKeys, missionWorkerLabels, workerOutputs, streamText, planText, tasks]);
  const dismissTimeoutWarning = () => {
    lastActivityAtRef.current = Date.now();
    setTimeoutWarning(false);
  };
  const clearMissionState = () => {
    doneRef.current = false;
    clearPersistedMission();
    setPhase("idle");
    setGoal("");
    setOrchestratorSessionKey(null);
    setStreamText("");
    setPlanText("");
    setStreamEvents([]);
    setStreamError(null);
    setTimeoutWarning(false);
    lastActivityAtRef.current = Date.now();
    lastWorkerSnapshotRef.current = "";
    setMissionStartedAt(null);
    setIsPaused(false);
    setPausedElapsedMs(0);
    setAccumulatedPausedMs(0);
    setPauseStartedAt(null);
    setCompletedAt(null);
    setMissionWorkerKeys(/* @__PURE__ */ new Set());
    setMissionWorkerLabels(/* @__PURE__ */ new Set());
    setWorkerOutputs({});
    setTasks([]);
    setSelectedHistoryEntry(null);
    seenToolCallRef.current = false;
    historySavedRef.current = false;
  };
  const sendMission = useMutation({
    mutationFn: async ({ nextGoal, settings }) => {
      const trimmed = nextGoal.trim();
      if (!trimmed) throw new Error("Mission goal required");
      doneRef.current = false;
      lastActivityAtRef.current = Date.now();
      lastWorkerSnapshotRef.current = "";
      setTimeoutWarning(false);
      setGoal(trimmed);
      setOrchestratorSessionKey(null);
      setStreamText("");
      setPlanText("");
      setStreamEvents([]);
      setStreamError(null);
      setCompletedAt(null);
      setIsPaused(false);
      setPausedElapsedMs(0);
      setAccumulatedPausedMs(0);
      setPauseStartedAt(null);
      setMissionWorkerKeys(/* @__PURE__ */ new Set());
      setMissionWorkerLabels(/* @__PURE__ */ new Set());
      setWorkerOutputs({});
      setTasks([]);
      setSelectedHistoryEntry(null);
      seenToolCallRef.current = false;
      historySavedRef.current = false;
      setMissionStartedAt((/* @__PURE__ */ new Date()).toISOString());
      setPhase("decomposing");
      const response = await fetch("/api/conductor-spawn", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ goal: trimmed, ...settings })
      });
      if (!response.ok) {
        const text = await response.text().catch(() => "");
        throw new Error(text || `Spawn failed (${response.status})`);
      }
      const result = await response.json();
      if (!result.ok || !result.sessionKey) {
        throw new Error(result.error ?? "Failed to spawn orchestrator");
      }
      const orchestratorKey = result.sessionKey;
      const prefix = result.sessionKeyPrefix;
      setOrchestratorSessionKey(orchestratorKey);
      setMissionWorkerKeys((current) => {
        if (current.has(orchestratorKey)) return current;
        const next = new Set(current);
        next.add(orchestratorKey);
        return next;
      });
      if (prefix) {
        const resolveOrchestrator = async () => {
          for (let attempt = 0; attempt < 30; attempt += 1) {
            await new Promise((resolve) => setTimeout(resolve, 1500));
            try {
              const sessionPayload = await fetchSessions();
              const sessions = Array.isArray(sessionPayload.sessions) ? sessionPayload.sessions : [];
              const match = sessions.find((session) => {
                const key = typeof session.key === "string" ? session.key : "";
                return key.startsWith(prefix);
              });
              if (match && typeof match.key === "string") {
                setOrchestratorSessionKey(match.key);
                setMissionWorkerKeys((current) => {
                  const next = new Set(current);
                  next.delete(orchestratorKey);
                  next.add(match.key);
                  return next;
                });
                return;
              }
            } catch {
            }
          }
        };
        void resolveOrchestrator();
      }
      setPlanText(`Orchestrator spawned. Decomposing mission and spawning workers...`);
      setPhase("running");
    },
    onError: (error) => {
      doneRef.current = true;
      setStreamError(error instanceof Error ? error.message : String(error));
      setPhase("complete");
      setCompletedAt((/* @__PURE__ */ new Date()).toISOString());
    }
  });
  const resetMission = () => {
    clearMissionState();
  };
  const resetSavedState = () => {
    clearMissionState();
    clearMissionHistoryStorage();
    setMissionHistory([]);
  };
  const pauseAgent = useMutation({
    mutationFn: async ({ sessionKey, pause }) => {
      const response = await fetch("/api/agent-pause", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionKey: sessionKey.trim(), pause })
      });
      if (!response.ok) {
        const text = await response.text().catch(() => "");
        throw new Error(text || `Pause request failed (${response.status})`);
      }
      const now = Date.now();
      if (pause) {
        setPausedElapsedMs(getMissionElapsedMs(now));
        setPauseStartedAt(new Date(now).toISOString());
        setIsPaused(true);
        return;
      }
      const pauseStartedMs = pauseStartedAt ? new Date(pauseStartedAt).getTime() : NaN;
      const additionalPausedMs = Number.isFinite(pauseStartedMs) ? Math.max(0, now - pauseStartedMs) : 0;
      setAccumulatedPausedMs((current) => current + additionalPausedMs);
      setPauseStartedAt(null);
      setIsPaused(false);
      setPausedElapsedMs(0);
    }
  });
  const stopMission = async () => {
    const sessionKeys = [.../* @__PURE__ */ new Set([...missionWorkerKeys, ...workers.map((worker) => worker.key)])];
    try {
      await fetch("/api/conductor-stop", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ sessionKeys })
      });
    } catch {
    }
    setStreamError("Mission stopped by user");
    setIsPaused(false);
    setPauseStartedAt(null);
    setCompletedAt((/* @__PURE__ */ new Date()).toISOString());
    setPhase("complete");
  };
  const retryMission = async () => {
    if (!goal) return;
    const currentGoal = goal;
    resetMission();
    await new Promise((resolve) => setTimeout(resolve, 100));
    await sendMission.mutateAsync({ nextGoal: currentGoal, settings: conductorSettings });
  };
  return {
    phase,
    goal,
    orchestratorSessionKey,
    streamText,
    planText,
    streamEvents,
    streamError,
    timeoutWarning,
    dismissTimeoutWarning,
    missionStartedAt,
    isPaused,
    pausedElapsedMs,
    pausedAtMs: pauseStartedAt ? new Date(pauseStartedAt).getTime() : null,
    missionElapsedMs: getMissionElapsedMs(),
    completedAt,
    tasks,
    workers,
    activeWorkers,
    missionHistory,
    hasPersistedMission,
    selectedHistoryEntry,
    setSelectedHistoryEntry,
    recentSessions: recentSessionsQuery.data ?? [],
    missionWorkerKeys,
    workerOutputs,
    conductorSettings,
    setConductorSettings,
    sendMission: (nextGoal) => sendMission.mutateAsync({ nextGoal, settings: conductorSettings }),
    pauseAgent: (sessionKey, pause) => pauseAgent.mutateAsync({ sessionKey, pause }),
    isSending: sendMission.isPending,
    isPausing: pauseAgent.isPending,
    resetMission,
    resetSavedState,
    stopMission,
    retryMission,
    refreshWorkers: sessionsQuery.refetch,
    isRefreshingWorkers: sessionsQuery.isFetching
  };
}
const THEME_STYLE = {
  ["--theme-bg"]: "var(--color-surface)",
  ["--theme-card"]: "var(--color-primary-50)",
  ["--theme-card2"]: "var(--color-primary-100)",
  ["--theme-border"]: "var(--color-primary-200)",
  ["--theme-border2"]: "var(--color-primary-400)",
  ["--theme-text"]: "var(--color-ink)",
  ["--theme-muted"]: "var(--color-primary-700)",
  ["--theme-muted-2"]: "var(--color-primary-600)",
  ["--theme-accent"]: "var(--color-accent-500)",
  ["--theme-accent-strong"]: "var(--color-accent-600)",
  ["--theme-accent-soft"]: "color-mix(in srgb, var(--color-accent-500) 12%, transparent)",
  ["--theme-accent-soft-strong"]: "color-mix(in srgb, var(--color-accent-500) 18%, transparent)",
  ["--theme-shadow"]: "color-mix(in srgb, var(--color-primary-950) 14%, transparent)",
  ["--theme-danger"]: "var(--color-red-600, #dc2626)",
  ["--theme-danger-soft"]: "color-mix(in srgb, var(--theme-danger) 12%, transparent)",
  ["--theme-danger-soft-strong"]: "color-mix(in srgb, var(--theme-danger) 18%, transparent)",
  ["--theme-danger-border"]: "color-mix(in srgb, var(--theme-danger) 35%, white)",
  ["--theme-warning"]: "var(--color-amber-600, #d97706)",
  ["--theme-warning-soft"]: "color-mix(in srgb, var(--theme-warning) 12%, transparent)",
  ["--theme-warning-soft-strong"]: "color-mix(in srgb, var(--theme-warning) 18%, transparent)",
  ["--theme-warning-border"]: "color-mix(in srgb, var(--theme-warning) 35%, white)"
};
const QUICK_ACTIONS = [
  {
    id: "research",
    label: "Research",
    icon: Search01Icon,
    prompt: "Research the problem space, gather constraints, compare approaches, and propose the most viable plan."
  },
  {
    id: "build",
    label: "Build",
    icon: PlayIcon,
    prompt: "Build the requested feature end-to-end, including implementation, validation, and a concise delivery summary."
  },
  {
    id: "review",
    label: "Review",
    icon: TaskDone01Icon,
    prompt: "Review the current implementation for correctness, regressions, missing tests, and release risks."
  },
  {
    id: "deploy",
    label: "Deploy",
    icon: Rocket01Icon,
    prompt: "Prepare the work for deployment, verify readiness, and summarize any operational follow-ups."
  }
];
const AGENT_NAMES = ["Nova", "Pixel", "Blaze", "Echo", "Sage", "Drift", "Flux", "Volt"];
const AGENT_EMOJIS = ["🤖", "⚡", "🔥", "🌊", "🌿", "💫", "🔮", "⭐"];
const BLENDED_COST_PER_MILLION_TOKENS = 5;
function getAgentPersona(index) {
  return {
    name: AGENT_NAMES[index % AGENT_NAMES.length],
    emoji: AGENT_EMOJIS[index % AGENT_EMOJIS.length]
  };
}
function estimateTokenCost(totalTokens) {
  return Math.max(0, totalTokens) / 1e6 * BLENDED_COST_PER_MILLION_TOKENS;
}
function formatUsd(value) {
  return `$${value.toFixed(value >= 0.1 ? 2 : 3)}`;
}
function MissionCostSection({
  totalTokens,
  workers,
  expanded,
  onToggle
}) {
  const estimatedCost = estimateTokenCost(totalTokens);
  return /* @__PURE__ */ jsxs("div", { className: "overflow-hidden rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-bg)] px-5 py-4", children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        type: "button",
        onClick: onToggle,
        "aria-expanded": expanded,
        className: "flex w-full items-start justify-between gap-4 text-left",
        children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.16em] text-[var(--theme-muted)]", children: "Mission Cost" }),
            /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-[var(--theme-muted-2)]", children: "Approximate at $5 / 1M tokens blended from input/output pricing." })
          ] }),
          /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 rounded-xl border border-[var(--theme-border)] bg-[var(--theme-card2)] px-3 py-2 text-xs font-medium text-[var(--theme-text)]", children: [
            expanded ? "Hide" : "Show",
            /* @__PURE__ */ jsx(
              HugeiconsIcon,
              {
                icon: ArrowDown01Icon,
                size: 16,
                strokeWidth: 1.7,
                className: cn("transition-transform duration-200", expanded ? "rotate-180" : "rotate-0")
              }
            )
          ] })
        ]
      }
    ),
    expanded ? /* @__PURE__ */ jsxs("div", { className: "mt-4 space-y-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid gap-3 sm:grid-cols-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-bg)] px-4 py-3", children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.14em] text-[var(--theme-muted)]", children: "Total Tokens" }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-2xl font-semibold text-[var(--theme-text)]", children: totalTokens.toLocaleString() })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-bg)] px-4 py-3", children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.14em] text-[var(--theme-muted)]", children: "Estimated Cost" }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-2xl font-semibold text-[var(--theme-text)]", children: formatUsd(estimatedCost) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "overflow-hidden rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-bg)]", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-[var(--theme-border)] px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--theme-muted)]", children: [
          /* @__PURE__ */ jsx("span", { children: "Workers" }),
          /* @__PURE__ */ jsx("span", { children: "Cost" })
        ] }),
        workers.length > 0 ? /* @__PURE__ */ jsx("div", { className: "divide-y divide-[var(--theme-border)]", children: workers.map((worker) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 px-4 py-3 text-sm", children: [
          /* @__PURE__ */ jsxs("span", { className: "font-medium text-[var(--theme-text)]", children: [
            worker.personaEmoji,
            " ",
            worker.personaName
          ] }),
          /* @__PURE__ */ jsx("span", { className: "min-w-0 flex-1 truncate text-[var(--theme-muted)]", children: worker.label }),
          /* @__PURE__ */ jsxs("span", { className: "text-xs text-[var(--theme-muted)]", children: [
            worker.totalTokens.toLocaleString(),
            " tok"
          ] }),
          /* @__PURE__ */ jsx("span", { className: "min-w-[4.5rem] text-right font-medium text-[var(--theme-text)]", children: formatUsd(estimateTokenCost(worker.totalTokens)) })
        ] }, worker.id)) }) : /* @__PURE__ */ jsx("div", { className: "px-4 py-3 text-sm text-[var(--theme-muted)]", children: "Per-worker token details were not captured for this mission." })
      ] })
    ] }) : null
  ] });
}
const PLANNING_STEPS = ["Planning the mission…", "Analyzing requirements…", "Preparing agents…", "Writing the spec…"];
const WORKING_STEPS = [
  "📋 Reviewing the brief…",
  "🔍 Scanning existing patterns…",
  "✏️ Drafting the implementation…",
  "☕ Grabbing a coffee…",
  "🧠 Thinking through edge cases…",
  "🎨 Polishing the design…",
  "🔧 Wiring up components…",
  "📐 Checking the layout…",
  "🚀 Almost there…"
];
function CyclingStatus({
  steps,
  intervalMs = 3e3,
  isPaused = false
}) {
  const [step, setStep] = useState(0);
  useEffect(() => {
    if (isPaused) return;
    const timer = window.setInterval(() => setStep((current) => (current + 1) % steps.length), intervalMs);
    return () => window.clearInterval(timer);
  }, [isPaused, steps.length, intervalMs]);
  if (isPaused) {
    return /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 py-3", children: [
      /* @__PURE__ */ jsx("div", { className: "flex size-3.5 items-center justify-center rounded-full border border-amber-400/60 bg-amber-500/10 text-[9px] text-amber-300", children: "||" }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-[var(--theme-muted)]", children: "Paused" })
    ] });
  }
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 py-3", children: [
    /* @__PURE__ */ jsx("div", { className: "size-3.5 animate-spin rounded-full border-2 border-sky-400 border-t-transparent" }),
    /* @__PURE__ */ jsx("p", { className: "text-sm text-[var(--theme-muted)] transition-opacity duration-500", children: steps[step] })
  ] });
}
function PlanningIndicator() {
  return /* @__PURE__ */ jsx(CyclingStatus, { steps: PLANNING_STEPS, intervalMs: 2500 });
}
function getOutputDisplayName(projectPath) {
  if (!projectPath) return "Output ready";
  return projectPath.split("/").pop() || "index.html";
}
function formatMissionTimestamp(value) {
  if (!value) return null;
  const date = new Date(value);
  if (!Number.isFinite(date.getTime())) return null;
  const pad = (part) => String(part).padStart(2, "0");
  return `${date.getFullYear()}${pad(date.getMonth() + 1)}${pad(date.getDate())}-${pad(date.getHours())}${pad(date.getMinutes())}${pad(date.getSeconds())}`;
}
function buildProjectPathCandidates(workers, missionStartedAt) {
  const timestamp = formatMissionTimestamp(missionStartedAt);
  const candidates = /* @__PURE__ */ new Set();
  for (const worker of workers) {
    const label = worker.label ?? "";
    const slug = label.replace(/^worker-/, "").trim();
    if (!slug) continue;
    candidates.add(`/tmp/dispatch-${slug}`);
    candidates.add(`/tmp/dispatch-${slug}-page`);
    if (timestamp) {
      candidates.add(`/tmp/dispatch-${slug}-${timestamp}`);
      candidates.add(`/tmp/dispatch-${slug}-${timestamp}-page`);
    }
  }
  return [...candidates];
}
function formatElapsedTime(startIso, now) {
  if (!startIso) return "0s";
  const startMs = new Date(startIso).getTime();
  if (!Number.isFinite(startMs)) return "0s";
  return formatElapsedMilliseconds(now - startMs);
}
function formatElapsedMilliseconds(durationMs) {
  const totalSeconds = Math.max(0, Math.floor(durationMs / 1e3));
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor(totalSeconds % 3600 / 60);
  const seconds = totalSeconds % 60;
  if (hours > 0) return `${hours}h ${minutes}m ${seconds}s`;
  if (minutes > 0) return `${minutes}m ${seconds}s`;
  return `${seconds}s`;
}
function formatDurationRange(startIso, endIso, now) {
  const endMs = endIso ? new Date(endIso).getTime() : now;
  if (!Number.isFinite(endMs)) return formatElapsedTime(startIso, now);
  return formatElapsedTime(startIso, endMs);
}
function formatRelativeTime(value, now) {
  if (!value) return "just now";
  const ms = new Date(value).getTime();
  if (!Number.isFinite(ms)) return "just now";
  const diffSeconds = Math.max(0, Math.floor((now - ms) / 1e3));
  if (diffSeconds < 10) return "just now";
  if (diffSeconds < 60) return `${diffSeconds}s ago`;
  const diffMinutes = Math.floor(diffSeconds / 60);
  if (diffMinutes < 60) return `${diffMinutes}m ago`;
  const diffHours = Math.floor(diffMinutes / 60);
  return `${diffHours}h ago`;
}
function truncateContinuationText(text, limit = 500) {
  const normalized = text.replace(/\s+/g, " ").trim();
  if (normalized.length <= limit) return normalized;
  return `${normalized.slice(0, Math.max(0, limit - 1)).trimEnd()}…`;
}
function getWorkerDot(status) {
  if (status === "complete") return { dotClass: "bg-emerald-400", label: "Complete" };
  if (status === "running") return { dotClass: "bg-sky-400 animate-pulse", label: "Running" };
  if (status === "idle") return { dotClass: "bg-amber-400", label: "Idle" };
  return { dotClass: "bg-red-400", label: "Stale" };
}
function getWorkerBorderClass(status) {
  if (status === "complete") return "border-l-emerald-400";
  if (status === "running") return "border-l-sky-400";
  if (status === "idle") return "border-l-amber-400";
  return "border-l-red-400";
}
function WorkerCard({
  worker,
  index,
  conductor,
  now
}) {
  const dot = getWorkerDot(worker.status);
  const persona = getAgentPersona(index);
  const workerOutput = conductor.workerOutputs[worker.key] ?? getLastAssistantMessage(worker.raw.messages);
  const workerStartedAt = typeof worker.raw.createdAt === "string" ? worker.raw.createdAt : typeof worker.raw.startedAt === "string" ? worker.raw.startedAt : conductor.missionStartedAt;
  const workerEndTime = worker.status === "complete" || worker.status === "stale" ? new Date(worker.updatedAt ?? (/* @__PURE__ */ new Date()).toISOString()).getTime() : conductor.isPaused ? conductor.pausedAtMs ?? now : now;
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "overflow-hidden rounded-2xl border border-[var(--theme-border)] border-l-4 bg-[var(--theme-card)] px-4 py-3",
        getWorkerBorderClass(worker.status)
      ),
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-3", children: [
          /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx("span", { className: cn("size-2.5 rounded-full", dot.dotClass) }),
              /* @__PURE__ */ jsxs("p", { className: "truncate text-sm font-medium text-[var(--theme-text)]", children: [
                persona.emoji,
                " ",
                persona.name,
                " ",
                /* @__PURE__ */ jsx("span", { className: "text-[var(--theme-muted)]", children: "·" }),
                " ",
                worker.label
              ] })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "mt-1 text-xs text-[var(--theme-muted-2)]", children: worker.displayName })
          ] }),
          /* @__PURE__ */ jsx("span", { className: "rounded-full border border-[var(--theme-border)] bg-[var(--theme-card2)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--theme-muted)]", children: dot.label })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-3 grid grid-cols-2 gap-2 text-xs", children: [
          /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-[var(--theme-border)] bg-[var(--theme-card2)] px-3 py-2", children: [
            /* @__PURE__ */ jsx("p", { className: "text-[var(--theme-muted)]", children: "Model" }),
            /* @__PURE__ */ jsx("p", { className: "mt-1 truncate text-[var(--theme-text)]", children: getShortModelName(worker.model) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-[var(--theme-border)] bg-[var(--theme-card2)] px-3 py-2", children: [
            /* @__PURE__ */ jsx("p", { className: "text-[var(--theme-muted)]", children: "Tokens" }),
            /* @__PURE__ */ jsx("p", { className: "mt-1 text-[var(--theme-text)]", children: worker.tokenUsageLabel })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-[var(--theme-border)] bg-[var(--theme-card2)] px-3 py-2", children: [
            /* @__PURE__ */ jsx("p", { className: "text-[var(--theme-muted)]", children: "Elapsed" }),
            /* @__PURE__ */ jsx("p", { className: "mt-1 text-[var(--theme-text)]", children: formatElapsedTime(workerStartedAt, workerEndTime) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-[var(--theme-border)] bg-[var(--theme-card2)] px-3 py-2", children: [
            /* @__PURE__ */ jsx("p", { className: "text-[var(--theme-muted)]", children: "Last update" }),
            /* @__PURE__ */ jsx("p", { className: "mt-1 text-[var(--theme-text)]", children: formatRelativeTime(worker.updatedAt, now) })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-3 overflow-hidden rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-bg)] px-4 py-4", children: workerOutput ? /* @__PURE__ */ jsx(Markdown, { className: "max-h-[400px] max-w-none overflow-auto text-sm text-[var(--theme-text)]", children: workerOutput }) : /* @__PURE__ */ jsx(CyclingStatus, { steps: WORKING_STEPS, intervalMs: 3500, isPaused: conductor.isPaused }) })
      ]
    },
    worker.key
  );
}
function usePreviewAvailability(previewUrl, enabled) {
  const [failedProbes, setFailedProbes] = useState(0);
  const [timedOut, setTimedOut] = useState(false);
  const lastProbeRef = useRef(0);
  useEffect(() => {
    setFailedProbes(0);
    setTimedOut(false);
    lastProbeRef.current = 0;
  }, [enabled, previewUrl]);
  useEffect(() => {
    if (!enabled || !previewUrl) return;
    const timer = window.setTimeout(() => setTimedOut(true), 6e3);
    return () => window.clearTimeout(timer);
  }, [enabled, previewUrl]);
  const exhausted = enabled && !!previewUrl && (failedProbes >= 4 || timedOut);
  const probeQuery = useQuery({
    queryKey: ["conductor", "preview-probe", previewUrl],
    queryFn: async () => {
      if (!previewUrl) return false;
      try {
        const res = await fetch(previewUrl);
        if (!res.ok) return false;
        const text = await res.text();
        return text.length > 20 && (text.includes("<") || text.includes("html"));
      } catch {
        return false;
      }
    },
    enabled: enabled && !!previewUrl && !exhausted,
    retry: false,
    refetchInterval: (query) => query.state.data === true || exhausted ? false : 1500,
    staleTime: 5e3
  });
  useEffect(() => {
    if (!enabled || !previewUrl || probeQuery.data === true || probeQuery.dataUpdatedAt === 0) return;
    if (lastProbeRef.current === probeQuery.dataUpdatedAt) return;
    lastProbeRef.current = probeQuery.dataUpdatedAt;
    setFailedProbes((current) => current + 1);
  }, [enabled, previewUrl, probeQuery.data, probeQuery.dataUpdatedAt]);
  return {
    ready: probeQuery.data === true,
    loading: enabled && !!previewUrl && !exhausted && probeQuery.data !== true,
    unavailable: enabled && !!previewUrl && exhausted && probeQuery.data !== true
  };
}
function getShortModelName(model) {
  if (!model) return "Unknown";
  const parts = model.split("/");
  return parts[parts.length - 1] || model;
}
function getModelDisplayName(model, modelId) {
  if (!modelId) return "Default (auto)";
  return model?.name?.trim() || model?.id?.trim() || modelId;
}
function getProviderLabel(provider) {
  const raw = provider?.trim();
  if (!raw) return "Unknown";
  return raw.split(/[-_\s]+/).filter(Boolean).map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1)).join(" ");
}
function groupModelsByProvider(models) {
  const groups = /* @__PURE__ */ new Map();
  for (const model of models) {
    const provider = getProviderLabel(model.provider);
    const existing = groups.get(provider);
    if (existing) {
      existing.push(model);
    } else {
      groups.set(provider, [model]);
    }
  }
  return [...groups.entries()].sort((a, b) => a[0].localeCompare(b[0])).map(([provider, providerModels]) => ({
    provider,
    models: [...providerModels].sort(
      (a, b) => getModelDisplayName(a, a.id).localeCompare(getModelDisplayName(b, b.id))
    )
  }));
}
function getDirectoryPathSegments(pathValue) {
  const normalized = pathValue.trim();
  if (!normalized) return ["~"];
  if (normalized === "~") return ["~"];
  if (normalized.startsWith("~/")) {
    return ["~", ...normalized.slice(2).split("/").filter(Boolean)];
  }
  if (normalized === "/") return ["/"];
  if (normalized.startsWith("/")) {
    return ["/", ...normalized.slice(1).split("/").filter(Boolean)];
  }
  return normalized.split("/").filter(Boolean);
}
function buildDirectoryPathFromSegments(segments) {
  if (segments.length === 0) return "~";
  if (segments[0] === "~") {
    return segments.length === 1 ? "~" : `~/${segments.slice(1).join("/")}`;
  }
  if (segments[0] === "/") {
    return segments.length === 1 ? "/" : `/${segments.slice(1).join("/")}`;
  }
  return segments.join("/");
}
function getParentDirectory(pathValue) {
  const segments = getDirectoryPathSegments(pathValue);
  if (segments.length <= 1) return pathValue.startsWith("/") ? "/" : "~";
  return buildDirectoryPathFromSegments(segments.slice(0, -1));
}
function getDirectorySuggestions() {
  return ["~/conductor-projects", "~/Projects", "/tmp", "~/Desktop"];
}
function ModelSelectorDropdown({
  label,
  value,
  onChange,
  models,
  disabled = false
}) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);
  useEffect(() => {
    if (!open) return;
    const handlePointerDown = (event) => {
      if (!containerRef.current) return;
      if (containerRef.current.contains(event.target)) return;
      setOpen(false);
    };
    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, [open]);
  const selectedModel = models.find((model) => (model.id ?? "") === value);
  const groupedModels = useMemo(() => groupModelsByProvider(models), [models]);
  return /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
    /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-[var(--theme-text)]", children: label }),
    /* @__PURE__ */ jsxs("div", { className: "relative", ref: containerRef, children: [
      /* @__PURE__ */ jsxs(
        "button",
        {
          type: "button",
          onClick: () => {
            if (disabled) return;
            setOpen((current) => !current);
          },
          className: cn(
            "inline-flex min-h-[3rem] w-full items-center justify-between gap-3 rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-bg)] px-4 py-3 text-left text-sm text-[var(--theme-text)] shadow-[0_8px_24px_color-mix(in_srgb,var(--theme-shadow)_18%,transparent)] transition-colors",
            disabled ? "cursor-not-allowed opacity-60" : "hover:border-[var(--theme-accent)] focus:border-[var(--theme-accent)]"
          ),
          "aria-haspopup": "listbox",
          "aria-expanded": open,
          disabled,
          children: [
            /* @__PURE__ */ jsx("span", { className: "inline-flex min-w-0 items-center gap-2", children: /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 rounded-full border border-[var(--theme-border)] bg-[var(--theme-card2)] px-3 py-1 text-xs font-medium text-[var(--theme-text)]", children: [
              /* @__PURE__ */ jsx(
                "span",
                {
                  className: cn(
                    "size-2 rounded-full",
                    value ? "bg-[var(--theme-accent)]" : "bg-[var(--theme-border2)]"
                  )
                }
              ),
              /* @__PURE__ */ jsx("span", { className: "truncate", children: getModelDisplayName(selectedModel, value) })
            ] }) }),
            /* @__PURE__ */ jsx(
              HugeiconsIcon,
              {
                icon: ArrowDown01Icon,
                size: 16,
                strokeWidth: 1.8,
                className: cn("shrink-0 text-[var(--theme-muted)] transition-transform", open && "rotate-180")
              }
            )
          ]
        }
      ),
      open ? /* @__PURE__ */ jsx("div", { className: "absolute left-0 top-[calc(100%+0.5rem)] z-[80] w-full overflow-hidden rounded-2xl border border-[var(--theme-border2)] bg-[var(--theme-card)] shadow-[0_24px_80px_var(--theme-shadow)]", children: /* @__PURE__ */ jsxs("div", { className: "max-h-80 overflow-y-auto p-2", children: [
        /* @__PURE__ */ jsxs(
          "button",
          {
            type: "button",
            onClick: () => {
              onChange("");
              setOpen(false);
            },
            className: cn(
              "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition-colors",
              !value ? "bg-[var(--theme-accent-soft)] text-[var(--theme-text)]" : "text-[var(--theme-text)] hover:bg-[var(--theme-bg)]"
            ),
            role: "option",
            "aria-selected": !value,
            children: [
              /* @__PURE__ */ jsx(
                "span",
                {
                  className: cn(
                    "size-2 rounded-full",
                    !value ? "bg-[var(--theme-accent)]" : "bg-[var(--theme-border2)]"
                  )
                }
              ),
              /* @__PURE__ */ jsx("span", { className: "min-w-0 flex-1 truncate", children: "Default (auto)" }),
              /* @__PURE__ */ jsx("span", { className: "rounded-full border border-[var(--theme-border)] bg-[var(--theme-card2)] px-2 py-0.5 text-[10px] uppercase tracking-[0.12em] text-[var(--theme-muted)]", children: "Auto" })
            ]
          }
        ),
        groupedModels.map((group) => /* @__PURE__ */ jsxs("div", { className: "mt-2 first:mt-3", children: [
          /* @__PURE__ */ jsx("div", { className: "px-3 pb-1 pt-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--theme-muted)]", children: group.provider }),
          /* @__PURE__ */ jsx("div", { className: "space-y-1", children: group.models.map((model) => {
            const modelId = model.id ?? "";
            const active = modelId === value;
            return /* @__PURE__ */ jsxs(
              "button",
              {
                type: "button",
                onClick: () => {
                  onChange(modelId);
                  setOpen(false);
                },
                className: cn(
                  "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition-colors",
                  active ? "bg-[var(--theme-accent-soft)] text-[var(--theme-text)]" : "text-[var(--theme-text)] hover:bg-[var(--theme-bg)]"
                ),
                role: "option",
                "aria-selected": active,
                children: [
                  /* @__PURE__ */ jsx(
                    "span",
                    {
                      className: cn(
                        "size-2 rounded-full",
                        active ? "bg-[var(--theme-accent)]" : "bg-[var(--theme-border2)]"
                      )
                    }
                  ),
                  /* @__PURE__ */ jsx("span", { className: "min-w-0 flex-1 truncate", children: getModelDisplayName(model, modelId) }),
                  /* @__PURE__ */ jsx("span", { className: "rounded-full border border-[var(--theme-border)] bg-[var(--theme-card2)] px-2 py-0.5 text-[10px] uppercase tracking-[0.12em] text-[var(--theme-muted)]", children: group.provider })
                ]
              },
              `${group.provider}-${modelId}`
            );
          }) })
        ] }, group.provider))
      ] }) }) : null
    ] })
  ] });
}
function extractMessageText(message) {
  if (!message) return "";
  if (typeof message.content === "string") return message.content;
  if (Array.isArray(message.content)) {
    return message.content.map((part) => typeof part?.text === "string" ? part.text : "").filter(Boolean).join("\n");
  }
  return "";
}
function getLastAssistantMessage(messages) {
  if (!Array.isArray(messages)) return "";
  for (let index = messages.length - 1; index >= 0; index -= 1) {
    const message = messages[index];
    if (message?.role !== "assistant") continue;
    const text = extractMessageText(message);
    if (text.trim()) return text.trim();
  }
  return "";
}
function extractProjectPath(text) {
  const structuredPatterns = [
    /\b(?:Created|Output|Wrote|Saved to|Built|Generated|Written to)\s+(\/tmp\/dispatch-[^\s"')`\]>]+)/gi,
    /\b(?:Created|Output|Wrote|Saved to|Built|Generated|Written to)\s*:\s*(\/tmp\/dispatch-[^\s"')`\]>]+)/gi
  ];
  for (const pattern of structuredPatterns) {
    let match;
    while ((match = pattern.exec(text)) !== null) {
      const raw = match[1];
      if (!raw) continue;
      const cleaned = raw.replace(/[.,;:!?`]+$/, "");
      const normalized = cleaned.replace(/\/(index\.html|dist|build)\/?$/i, "");
      if (normalized.startsWith("/tmp/dispatch-")) return normalized;
    }
  }
  const matches = text.match(/\/tmp\/dispatch-[^\s"')`\]>]+/g) ?? [];
  for (const raw of matches) {
    const cleaned = raw.replace(/[.,;:!?\-`]+$/, "");
    const normalized = cleaned.replace(/\/(index\.html|dist|build)\/?$/i, "");
    if (normalized.startsWith("/tmp/dispatch-")) return normalized;
  }
  const tmpMatches = text.match(/\/tmp\/[a-zA-Z0-9][^\s"')`\]>]+/g) ?? [];
  for (const raw of tmpMatches) {
    const cleaned = raw.replace(/[.,;:!?\-`]+$/, "");
    const normalized = cleaned.replace(/\/(index\.html|dist|build)\/?$/i, "");
    if (normalized.length > 5) return normalized;
  }
  return null;
}
function deriveSessionStatus(session) {
  const updatedMs = new Date(session.updatedAt).getTime();
  const staleness = Number.isFinite(updatedMs) ? Date.now() - updatedMs : 0;
  const tokens = typeof session.totalTokens === "number" ? session.totalTokens : 0;
  const statusText = `${session.status ?? ""} ${session.state ?? ""}`.toLowerCase();
  if (statusText.includes("error") || statusText.includes("failed")) return "failed";
  if (tokens > 0 && staleness > 3e4) return "completed";
  if (staleness > 12e4 && tokens === 0) return "failed";
  return "running";
}
function Conductor() {
  const conductor = useConductorGateway();
  const [goalDraft, setGoalDraft] = useState("");
  const [missionModalOpen, setMissionModalOpen] = useState(false);
  const [continueDraft, setContinueDraft] = useState("");
  const [continueModalOpen, setContinueModalOpen] = useState(false);
  const [selectedAction, setSelectedAction] = useState("build");
  const [selectedTaskId, setSelectedTaskId] = useState(null);
  const [activityFilter, setActivityFilter] = useState("all");
  const [activityPage, setActivityPage] = useState(0);
  const [completeCostExpanded, setCompleteCostExpanded] = useState(true);
  const [historyCostExpanded, setHistoryCostExpanded] = useState(false);
  const [now, setNow] = useState(() => Date.now());
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [directoryBrowserOpen, setDirectoryBrowserOpen] = useState(false);
  const [directoryBrowserPath, setDirectoryBrowserPath] = useState("~");
  const [directoryBrowserEntries, setDirectoryBrowserEntries] = useState([]);
  const [directoryBrowserLoading, setDirectoryBrowserLoading] = useState(false);
  const [directoryBrowserError, setDirectoryBrowserError] = useState(null);
  const modelsQuery = useQuery({
    queryKey: ["conductor", "models"],
    queryFn: async () => {
      const res = await fetch("/api/models");
      const data = await res.json();
      return data.models ?? [];
    },
    enabled: settingsOpen,
    staleTime: 6e4
  });
  const availableModels = modelsQuery.data ?? [];
  useEffect(() => {
    if (!directoryBrowserOpen) return;
    let cancelled = false;
    const loadDirectory = async () => {
      setDirectoryBrowserLoading(true);
      setDirectoryBrowserError(null);
      try {
        const res = await fetch(`/api/files?path=${encodeURIComponent(directoryBrowserPath)}`);
        const data = await res.json().catch(() => ({}));
        if (!res.ok) {
          throw new Error(data.error || "Failed to load directory");
        }
        if (cancelled) return;
        setDirectoryBrowserPath(typeof data.root === "string" && data.root.trim() ? data.root : directoryBrowserPath);
        setDirectoryBrowserEntries(
          Array.isArray(data.entries) ? data.entries.filter((entry) => entry?.type === "folder") : []
        );
      } catch (error) {
        if (cancelled) return;
        setDirectoryBrowserEntries([]);
        setDirectoryBrowserError(error instanceof Error ? error.message : "Failed to load directory");
      } finally {
        if (!cancelled) {
          setDirectoryBrowserLoading(false);
        }
      }
    };
    void loadDirectory();
    return () => {
      cancelled = true;
    };
  }, [directoryBrowserOpen, directoryBrowserPath]);
  useEffect(() => {
    if (conductor.phase === "idle" || conductor.phase === "complete" || conductor.isPaused) return;
    const timer = window.setInterval(() => setNow(Date.now()), 1e3);
    return () => window.clearInterval(timer);
  }, [conductor.isPaused, conductor.phase]);
  useEffect(() => {
    if (!conductor.isPaused) return;
    setNow(conductor.pausedAtMs ?? Date.now());
  }, [conductor.isPaused, conductor.pausedAtMs]);
  useEffect(() => {
    const prev = document.body.style.backgroundColor;
    document.body.style.backgroundColor = "var(--color-surface)";
    return () => {
      document.body.style.backgroundColor = prev;
    };
  }, []);
  const phase = useMemo(() => {
    if (conductor.phase === "idle") return "home";
    if (conductor.phase === "decomposing") return "preview";
    if (conductor.phase === "running") return "active";
    return "complete";
  }, [conductor.phase]);
  const handleNewMission = () => {
    conductor.resetMission();
    setGoalDraft("");
    setMissionModalOpen(false);
    setContinueDraft("");
    setContinueModalOpen(false);
    setSelectedTaskId(null);
  };
  const handleSubmit = async () => {
    const trimmed = goalDraft.trim();
    if (!trimmed) return;
    setMissionModalOpen(false);
    setContinueDraft("");
    await conductor.sendMission(trimmed);
  };
  const handleQuickActionSelect = (action) => {
    setSelectedAction(action.id);
    setGoalDraft((current) => {
      const trimmed = current.trim();
      if (!trimmed) return `${action.label}: `;
      if (trimmed.toLowerCase().startsWith(`${action.label.toLowerCase()}:`)) return current;
      return `${action.label}: ${trimmed}`;
    });
  };
  const handleContinueMission = async () => {
    const trimmedInstructions = continueDraft.trim();
    if (!trimmedInstructions) return;
    const continuationSummarySource = completeSummary ?? Object.values(conductor.workerOutputs).find((output) => output.trim()) ?? conductor.workers.map((worker) => getLastAssistantMessage(worker.raw.messages)).find((output) => output.trim()) ?? conductor.streamText;
    const combinedPrompt = [
      "CONTINUATION OF PREVIOUS MISSION",
      `Original goal: ${conductor.goal}`,
      `Previous output summary: ${truncateContinuationText(continuationSummarySource ?? "")}`,
      `New instructions: ${trimmedInstructions}`,
      "",
      "Please continue building on the previous work."
    ].join("\n");
    setContinueDraft("");
    setContinueModalOpen(false);
    await conductor.sendMission(combinedPrompt);
  };
  const updateSettings = (patch) => {
    conductor.setConductorSettings({ ...conductor.conductorSettings, ...patch });
  };
  const openDirectoryBrowser = () => {
    setDirectoryBrowserPath(conductor.conductorSettings.projectsDir.trim() || "~");
    setDirectoryBrowserEntries([]);
    setDirectoryBrowserError(null);
    setDirectoryBrowserOpen(true);
  };
  const closeDirectoryBrowser = () => {
    setDirectoryBrowserOpen(false);
    setDirectoryBrowserLoading(false);
    setDirectoryBrowserError(null);
  };
  const directoryBreadcrumbs = useMemo(() => {
    const segments = getDirectoryPathSegments(directoryBrowserPath);
    return segments.map((segment, index) => ({
      label: segment === "/" ? "Root" : segment,
      path: buildDirectoryPathFromSegments(segments.slice(0, index + 1))
    }));
  }, [directoryBrowserPath]);
  const totalWorkers = conductor.workers.length;
  const completedWorkers = conductor.workers.filter((worker) => worker.status === "complete").length;
  const activeWorkerCount = conductor.activeWorkers.length;
  const missionProgress = totalWorkers > 0 ? Math.round(completedWorkers / totalWorkers * 100) : 0;
  const totalTokens = conductor.workers.reduce((sum, worker) => sum + worker.totalTokens, 0);
  const selectedHistoryEntry = conductor.selectedHistoryEntry;
  const completeMissionCostWorkers = useMemo(
    () => conductor.workers.map((worker, index) => {
      const persona = getAgentPersona(index);
      return {
        id: worker.key,
        label: worker.label,
        totalTokens: worker.totalTokens,
        personaEmoji: persona.emoji,
        personaName: persona.name
      };
    }),
    [conductor.workers]
  );
  const historyMissionCostWorkers = useMemo(
    () => (selectedHistoryEntry?.workerDetails ?? []).map((worker, index) => ({
      id: `${selectedHistoryEntry?.id ?? "history"}-${index}`,
      label: worker.label,
      totalTokens: worker.totalTokens,
      personaEmoji: worker.personaEmoji,
      personaName: worker.personaName
    })),
    [selectedHistoryEntry]
  );
  const OFFICE_NAMES = ["Nova", "Pixel", "Blaze", "Echo", "Sage", "Drift"];
  const homeOfficeRows = useMemo(() => {
    const sessions = conductor.recentSessions;
    if (sessions.length === 0) {
      return OFFICE_NAMES.slice(0, 3).map((name, i) => ({
        id: `placeholder-${i}`,
        name,
        modelId: "auto",
        status: "idle",
        lastLine: "Waiting for work…",
        taskCount: 0,
        roleDescription: "Worker"
      }));
    }
    return sessions.slice(0, 6).map((session, i) => {
      const s = session;
      const updatedAt = typeof s.updatedAt === "string" ? new Date(s.updatedAt).getTime() : typeof s.updatedAt === "number" ? s.updatedAt : 0;
      const statusText = `${s.status ?? ""} ${s.kind ?? ""}`.toLowerCase();
      const status = /error|failed/.test(statusText) ? "error" : /pause/.test(statusText) ? "paused" : Date.now() - updatedAt < 12e4 ? "active" : "idle";
      return {
        id: s.key ?? `session-${i}`,
        name: OFFICE_NAMES[i % OFFICE_NAMES.length],
        modelId: s.model ?? "auto",
        status,
        lastLine: s.task ?? s.label ?? s.title ?? s.derivedTitle ?? "Working…",
        lastAt: updatedAt || void 0,
        taskCount: 0,
        roleDescription: s.label ?? "Worker",
        sessionKey: s.key ?? void 0
      };
    });
  }, [conductor.recentSessions]);
  const officeAgentRows = useMemo(() => {
    if (conductor.workers.length > 0) {
      return conductor.workers.map((worker, index) => {
        const persona = getAgentPersona(index);
        const currentTask = conductor.tasks.find((task) => task.workerKey === worker.key && task.status === "running")?.title;
        const lastLine = conductor.workerOutputs[worker.key] ?? getLastAssistantMessage(worker.raw.messages);
        const isWorkerPaused = conductor.isPaused && (worker.status === "running" || worker.status === "idle");
        return {
          id: worker.key,
          name: persona.name,
          modelId: worker.model || "auto",
          roleDescription: worker.displayName,
          status: isWorkerPaused ? "paused" : worker.status === "complete" ? "idle" : worker.status === "stale" ? "error" : "active",
          lastLine: isWorkerPaused ? "Paused" : lastLine,
          lastAt: worker.updatedAt ? new Date(worker.updatedAt).getTime() : void 0,
          taskCount: conductor.tasks.filter((task) => task.workerKey === worker.key).length,
          currentTask: isWorkerPaused ? "Paused" : currentTask,
          sessionKey: worker.key
        };
      });
    }
    return [
      {
        id: "conductor-placeholder-agent",
        name: "Nova",
        modelId: conductor.conductorSettings.workerModel || "auto",
        roleDescription: "Waiting for workers",
        status: "spawning",
        lastLine: conductor.goal || "Preparing the office…",
        taskCount: 0,
        currentTask: conductor.goal || "Preparing the office…",
        sessionKey: "conductor-placeholder-agent"
      }
    ];
  }, [conductor.conductorSettings.workerModel, conductor.goal, conductor.isPaused, conductor.tasks, conductor.workerOutputs, conductor.workers]);
  const completePhaseProjectPath = useMemo(() => {
    const workerOutputTexts = [
      ...Object.values(conductor.workerOutputs),
      ...conductor.workers.map((worker) => getLastAssistantMessage(worker.raw.messages))
    ].filter(Boolean);
    for (const text of workerOutputTexts) {
      const extractedPath = extractProjectPath(text);
      if (extractedPath) return extractedPath;
    }
    for (const task of conductor.tasks) {
      if (!task.output) continue;
      const extractedPath = extractProjectPath(task.output);
      if (extractedPath) return extractedPath;
    }
    const streamPath = extractProjectPath(conductor.streamText);
    if (streamPath) return streamPath;
    const candidates = buildProjectPathCandidates(conductor.workers, conductor.missionStartedAt);
    return candidates[0] ?? null;
  }, [conductor.tasks, conductor.streamText, conductor.workerOutputs, conductor.workers, conductor.missionStartedAt]);
  const completePhaseOutputLabel = useMemo(
    () => getOutputDisplayName(completePhaseProjectPath),
    [completePhaseProjectPath]
  );
  const previewUrl = completePhaseProjectPath ? `/api/preview-file?path=${encodeURIComponent(`${completePhaseProjectPath}/index.html`)}` : null;
  const selectedHistoryOutputPath = useMemo(() => {
    const entry = conductor.selectedHistoryEntry;
    if (!entry) return null;
    if (entry.outputPath) return entry.outputPath;
    if (entry.projectPath) return entry.projectPath;
    const extractedOutputPath = extractProjectPath(entry.outputText ?? "") ?? extractProjectPath(entry.streamText ?? "");
    if (extractedOutputPath) return extractedOutputPath;
    const candidates = buildProjectPathCandidates(
      (entry.workerDetails ?? []).map((worker) => ({ label: worker.label })),
      entry.startedAt
    );
    return candidates[0] ?? null;
  }, [conductor.selectedHistoryEntry]);
  const selectedHistoryOutputLabel = useMemo(
    () => getOutputDisplayName(selectedHistoryOutputPath),
    [selectedHistoryOutputPath]
  );
  const selectedHistoryPreviewUrl = selectedHistoryOutputPath ? `/api/preview-file?path=${encodeURIComponent(`${selectedHistoryOutputPath}/index.html`)}` : null;
  const isLiveCompletePreview = phase === "complete" && !!completePhaseProjectPath && selectedHistoryOutputPath === completePhaseProjectPath;
  const selectedHistoryPreview = usePreviewAvailability(selectedHistoryPreviewUrl, !!conductor.selectedHistoryEntry && isLiveCompletePreview);
  const previewState = usePreviewAvailability(previewUrl, phase === "complete");
  const completedTaskOutputs = useMemo(() => {
    return conductor.tasks.filter((task) => task.output).map((task) => ({
      ...task,
      extractedPath: extractProjectPath(task.output ?? ""),
      previewUrl: (() => {
        const extractedPath = extractProjectPath(task.output ?? "");
        return extractedPath ? `/api/preview-file?path=${encodeURIComponent(`${extractedPath}/index.html`)}` : null;
      })(),
      previewText: (task.output ?? "").trim().slice(0, 200)
    }));
  }, [conductor.tasks]);
  const completeSummary = useMemo(() => {
    if (phase !== "complete") return null;
    const isFailed = !!conductor.streamError;
    const lines = [
      isFailed ? `❌ ${conductor.streamError}` : "✅ Mission completed successfully",
      "",
      `**Goal:** ${conductor.goal}`,
      `**Duration:** ${formatElapsedTime(conductor.missionStartedAt, conductor.completedAt ? new Date(conductor.completedAt).getTime() : now)}`
    ];
    if (totalWorkers > 0) {
      lines.push(`**Workers:** ${totalWorkers} ran · ${totalTokens.toLocaleString()} tokens`);
    }
    if (completePhaseProjectPath) {
      lines.push(`**Output:** ${completePhaseOutputLabel}`);
    }
    return lines.join("\n");
  }, [phase, completePhaseProjectPath, completePhaseOutputLabel, totalWorkers, conductor.goal, totalTokens, conductor.missionStartedAt, now]);
  const continuationPreview = useMemo(() => {
    const summarySource = completeSummary ?? Object.values(conductor.workerOutputs).find((output) => output.trim()) ?? conductor.workers.map((worker) => getLastAssistantMessage(worker.raw.messages)).find((output) => output.trim()) ?? conductor.streamText;
    return truncateContinuationText(summarySource ?? "");
  }, [completeSummary, conductor.streamText, conductor.workerOutputs, conductor.workers]);
  const continuationModalPreview = useMemo(() => truncateContinuationText(continuationPreview, 200), [continuationPreview]);
  const hasMissionHistory = conductor.missionHistory.length > 0;
  const canResetSavedState = hasMissionHistory || conductor.hasPersistedMission;
  const filteredHistory = (() => {
    const history = conductor.missionHistory;
    if (activityFilter === "all") return history;
    return history.filter((entry) => entry.status === activityFilter);
  })();
  const filteredSessions = (() => {
    const sessions = conductor.recentSessions;
    if (activityFilter === "all") return sessions;
    return sessions.filter((session) => (session.label ?? "").startsWith("worker-")).filter((session) => deriveSessionStatus(session) === activityFilter);
  })();
  const activityItems = hasMissionHistory ? filteredHistory : filteredSessions;
  const ACTIVITY_PAGE_SIZE = 3;
  const activityTotalPages = Math.max(1, Math.ceil(activityItems.length / ACTIVITY_PAGE_SIZE));
  const safeActivityPage = Math.min(activityPage, activityTotalPages - 1);
  const visibleActivityItems = activityItems.slice(safeActivityPage * ACTIVITY_PAGE_SIZE, (safeActivityPage + 1) * ACTIVITY_PAGE_SIZE);
  useEffect(() => {
    if (!selectedTaskId) return;
    if (conductor.tasks.some((task) => task.id === selectedTaskId)) return;
    setSelectedTaskId(null);
  }, [conductor.tasks, selectedTaskId]);
  useEffect(() => {
    if (phase !== "complete") return;
    setCompleteCostExpanded(true);
  }, [phase, conductor.completedAt]);
  useEffect(() => {
    if (!selectedHistoryEntry) return;
    setHistoryCostExpanded(false);
  }, [selectedHistoryEntry]);
  if (phase === "home") {
    if (selectedHistoryEntry) {
      const historyWorkerDetails = selectedHistoryEntry.workerDetails ?? [];
      const historySummary = selectedHistoryEntry.completeSummary ?? selectedHistoryEntry.streamText;
      const historyOutputText = selectedHistoryEntry.outputText?.trim() || selectedHistoryEntry.streamText?.trim() || "";
      const showHistoryOutputFallback = !!historyOutputText && (!selectedHistoryOutputPath || selectedHistoryPreview.unavailable);
      const historyStatusLabel = selectedHistoryEntry.status === "completed" ? "Complete" : "Stopped";
      const historyStatusClasses = selectedHistoryEntry.status === "completed" ? "border border-emerald-400/35 bg-emerald-500/10 text-emerald-300" : "border border-red-400/35 bg-red-500/10 text-red-300";
      return /* @__PURE__ */ jsx("div", { className: "flex min-h-dvh flex-col overflow-y-auto bg-[var(--theme-bg)] text-[var(--theme-text)]", style: THEME_STYLE, children: /* @__PURE__ */ jsx("main", { className: "mx-auto flex min-h-0 w-full max-w-[720px] flex-1 flex-col px-4 py-4 pb-[calc(var(--tabbar-h,80px)+1rem)] md:px-6 md:py-8", children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxs(
          "button",
          {
            type: "button",
            onClick: () => conductor.setSelectedHistoryEntry(null),
            className: "inline-flex items-center gap-2 self-start rounded-xl border border-[var(--theme-border)] bg-[var(--theme-card)] px-3 py-2 text-sm text-[var(--theme-muted)] transition-colors hover:border-[var(--theme-border2)] hover:text-[var(--theme-text)]",
            children: [
              /* @__PURE__ */ jsx("span", { "aria-hidden": "true", children: "←" }),
              " Back"
            ]
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "overflow-hidden rounded-3xl border border-[var(--theme-border)] bg-[var(--theme-card)] p-6 shadow-[0_24px_80px_var(--theme-shadow)]", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center justify-between gap-3", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: cn("text-xs font-semibold uppercase tracking-[0.24em]", selectedHistoryEntry.status === "completed" ? "text-[var(--theme-accent)]" : "text-red-400"), children: selectedHistoryEntry.status === "completed" ? "Mission Complete" : "Mission Stopped" }),
            /* @__PURE__ */ jsx("h1", { className: "mt-2 text-xl font-semibold tracking-tight text-[var(--theme-text)] sm:text-2xl", children: selectedHistoryEntry.goal }),
            /* @__PURE__ */ jsxs("p", { className: "mt-2 text-xs text-[var(--theme-muted-2)]", children: [
              selectedHistoryEntry.workerCount,
              "/",
              Math.max(selectedHistoryEntry.workerCount, 1),
              " workers finished · ",
              formatDurationRange(selectedHistoryEntry.startedAt, selectedHistoryEntry.completedAt, now),
              " total elapsed"
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex gap-2", children: /* @__PURE__ */ jsx(
            Button,
            {
              type: "button",
              onClick: () => {
                conductor.setSelectedHistoryEntry(null);
                handleNewMission();
              },
              className: "rounded-xl bg-[var(--theme-accent)] px-5 text-white hover:bg-[var(--theme-accent-strong)]",
              children: "New Mission"
            }
          ) })
        ] }) }),
        selectedHistoryOutputPath && selectedHistoryPreview.ready ? /* @__PURE__ */ jsxs("section", { className: "overflow-hidden rounded-3xl border border-[var(--theme-border)] bg-[var(--theme-card)] p-6 shadow-[0_24px_80px_var(--theme-shadow)]", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-3", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.16em] text-[var(--theme-muted)]", children: "Output Preview" }),
              /* @__PURE__ */ jsx("p", { className: "mt-1 text-xs text-[var(--theme-muted-2)]", children: selectedHistoryOutputLabel })
            ] }),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: selectedHistoryPreviewUrl,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "inline-flex items-center gap-2 rounded-xl border border-[var(--theme-border)] bg-[var(--theme-card2)] px-3 py-1.5 text-xs font-medium text-[var(--theme-text)] transition-colors hover:border-[var(--theme-accent)] hover:text-[var(--theme-accent)]",
                children: "Open in new tab ↗"
              }
            )
          ] }),
          /* @__PURE__ */ jsx("div", { className: "mt-4 overflow-auto rounded-2xl border border-[var(--theme-border)] bg-white", children: /* @__PURE__ */ jsx(
            "iframe",
            {
              src: selectedHistoryPreviewUrl,
              className: "h-[clamp(280px,55vh,520px)] w-full",
              sandbox: "allow-scripts allow-same-origin",
              title: "Mission history output preview"
            }
          ) })
        ] }) : selectedHistoryOutputPath && selectedHistoryPreview.loading ? /* @__PURE__ */ jsx("section", { className: "overflow-hidden rounded-3xl border border-[var(--theme-border)] bg-[var(--theme-card)] p-6 shadow-[0_24px_80px_var(--theme-shadow)]", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 text-sm text-[var(--theme-muted)]", children: [
          /* @__PURE__ */ jsx("div", { className: "size-4 animate-spin rounded-full border-2 border-[var(--theme-border)] border-t-[var(--theme-accent)]" }),
          "Loading output preview…"
        ] }) }) : selectedHistoryOutputPath && selectedHistoryPreview.unavailable ? showHistoryOutputFallback ? null : /* @__PURE__ */ jsx("p", { className: "px-1 text-sm text-[var(--theme-muted)]", children: "No preview available." }) : null,
        /* @__PURE__ */ jsxs("section", { className: "overflow-hidden rounded-3xl border border-[var(--theme-border)] bg-[var(--theme-card)] p-6 shadow-[0_24px_80px_var(--theme-shadow)]", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-3", children: [
            /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.16em] text-[var(--theme-muted)]", children: "Agent Summary" }) }),
            /* @__PURE__ */ jsx("span", { className: cn("rounded-full px-3 py-1 text-xs font-medium", historyStatusClasses), children: historyStatusLabel })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "mt-4 overflow-hidden rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-bg)] px-5 py-4", children: historySummary ? /* @__PURE__ */ jsx(Markdown, { className: "max-h-[400px] max-w-none overflow-auto text-sm text-[var(--theme-text)]", children: historySummary }) : /* @__PURE__ */ jsx("p", { className: "text-sm text-[var(--theme-muted)]", children: "No summary captured." }) }),
          historyWorkerDetails.length > 0 && /* @__PURE__ */ jsx("div", { className: "mt-4 space-y-2", children: historyWorkerDetails.map((worker, index) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 rounded-lg px-3 py-2 text-sm", children: [
            /* @__PURE__ */ jsx("span", { className: cn("size-2 rounded-full", selectedHistoryEntry.status === "completed" ? "bg-emerald-400" : "bg-red-400") }),
            /* @__PURE__ */ jsxs("span", { className: "font-medium text-[var(--theme-text)]", children: [
              worker.personaEmoji,
              " ",
              worker.personaName
            ] }),
            /* @__PURE__ */ jsx("span", { className: "text-[var(--theme-muted)]", children: worker.label }),
            /* @__PURE__ */ jsxs("span", { className: "ml-auto text-xs text-[var(--theme-muted)]", children: [
              getShortModelName(worker.model),
              " · ",
              worker.totalTokens.toLocaleString(),
              " tok"
            ] })
          ] }, `${selectedHistoryEntry.id}-worker-${index}`)) }),
          (selectedHistoryEntry.totalTokens > 0 || historyMissionCostWorkers.length > 0) && /* @__PURE__ */ jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsx(
            MissionCostSection,
            {
              totalTokens: selectedHistoryEntry.totalTokens,
              workers: historyMissionCostWorkers,
              expanded: historyCostExpanded,
              onToggle: () => setHistoryCostExpanded((current) => !current)
            }
          ) }),
          selectedHistoryEntry.streamText && selectedHistoryEntry.completeSummary && /* @__PURE__ */ jsxs("details", { className: "mt-4 overflow-hidden rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-bg)] px-5 py-4", children: [
            /* @__PURE__ */ jsx("summary", { className: "cursor-pointer text-xs font-medium text-[var(--theme-muted)]", children: "Raw Agent Output" }),
            /* @__PURE__ */ jsx("div", { className: "mt-4 border-t border-[var(--theme-border)] pt-4", children: /* @__PURE__ */ jsx(Markdown, { className: "max-h-[400px] max-w-none overflow-auto text-sm text-[var(--theme-text)]", children: selectedHistoryEntry.streamText }) })
          ] })
        ] }),
        showHistoryOutputFallback ? /* @__PURE__ */ jsxs("section", { className: "overflow-hidden rounded-3xl border border-[var(--theme-border)] bg-[var(--theme-card)] p-6 shadow-[0_24px_80px_var(--theme-shadow)]", children: [
          /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between gap-3", children: /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.16em] text-[var(--theme-muted)]", children: "Output" }),
            /* @__PURE__ */ jsxs("p", { className: "mt-1 text-xs text-[var(--theme-muted-2)]", children: [
              "Preview unavailable",
              selectedHistoryOutputPath ? ` for ${selectedHistoryOutputLabel}` : "",
              "."
            ] })
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: "mt-4 overflow-hidden rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-bg)] px-5 py-4", children: /* @__PURE__ */ jsx(Markdown, { className: "max-h-[600px] max-w-none overflow-auto text-sm text-[var(--theme-text)]", children: historyOutputText }) })
        ] }) : historyOutputText ? /* @__PURE__ */ jsxs("section", { className: "overflow-hidden rounded-3xl border border-[var(--theme-border)] bg-[var(--theme-card)] p-6 shadow-[0_24px_80px_var(--theme-shadow)]", children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.16em] text-[var(--theme-muted)]", children: "Worker Output" }),
          /* @__PURE__ */ jsx("div", { className: "mt-4 overflow-hidden rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-bg)] px-5 py-4", children: /* @__PURE__ */ jsx(Markdown, { className: "max-h-[600px] max-w-none overflow-auto text-sm text-[var(--theme-text)]", children: historyOutputText }) })
        ] }) : null,
        !historySummary && historyWorkerDetails.length === 0 && !selectedHistoryOutputPath && !selectedHistoryEntry.workerSummary?.length && !historyOutputText && /* @__PURE__ */ jsx("section", { className: "overflow-hidden rounded-3xl border border-dashed border-[var(--theme-border)] bg-[var(--theme-card)] p-6", children: /* @__PURE__ */ jsxs("p", { className: "text-center text-sm text-[var(--theme-muted)]", children: [
          "No detailed output was captured for this mission.",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("span", { className: "text-xs text-[var(--theme-muted-2)]", children: "Missions run after this update will save full agent summaries and output previews." })
        ] }) })
      ] }) }) });
    }
    return /* @__PURE__ */ jsx("div", { className: "flex min-h-dvh flex-col overflow-y-auto bg-[var(--theme-bg)] text-[var(--theme-text)]", style: THEME_STYLE, children: /* @__PURE__ */ jsxs("main", { className: "mx-auto flex min-h-0 w-full max-w-[760px] flex-1 flex-col items-stretch justify-center px-4 py-4 pb-[calc(var(--tabbar-h,80px)+1rem)] md:px-6 md:py-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "w-full space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-center", children: [
          /* @__PURE__ */ jsxs("div", { className: "relative flex items-center justify-center", children: [
            /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2.5 rounded-full border border-[var(--theme-border)] bg-[var(--theme-card)] px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.24em] text-[var(--theme-muted)]", children: [
              "Conductor",
              /* @__PURE__ */ jsx("span", { className: "size-2.5 rounded-full bg-emerald-400" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "absolute right-0 flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setMissionModalOpen(true),
                  className: "inline-flex items-center justify-center rounded-xl bg-[var(--theme-accent)] p-2 text-white shadow-sm transition-colors hover:bg-[var(--theme-accent-strong)]",
                  "aria-label": "New Mission",
                  children: /* @__PURE__ */ jsx(HugeiconsIcon, { icon: Rocket01Icon, size: 18, strokeWidth: 1.7 })
                }
              ),
              /* @__PURE__ */ jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setSettingsOpen(true),
                  className: "inline-flex items-center justify-center rounded-xl border border-[var(--theme-border)] bg-[var(--theme-card)] p-2 text-[var(--theme-muted)] transition-colors hover:border-[var(--theme-accent)] hover:text-[var(--theme-accent-strong)]",
                  "aria-label": "Open conductor settings",
                  children: /* @__PURE__ */ jsx(HugeiconsIcon, { icon: Settings01Icon, size: 18, strokeWidth: 1.7 })
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-[var(--theme-muted-2)]", children: "Launch a mission and watch your agent team build it live." })
        ] }),
        /* @__PURE__ */ jsx("section", { className: "overflow-hidden rounded-3xl border border-[var(--theme-border)] bg-[var(--theme-card)] shadow-[0_24px_80px_var(--theme-shadow)] md:h-[520px]", children: /* @__PURE__ */ jsx(
          OfficeView,
          {
            agentRows: homeOfficeRows,
            missionRunning: homeOfficeRows.some((a) => a.status === "active"),
            onViewOutput: () => {
            },
            processType: "parallel",
            companyName: "",
            containerHeight: 520,
            hideHeader: true
          }
        ) }),
        hasMissionHistory || conductor.recentSessions.length > 0 ? /* @__PURE__ */ jsxs("section", { className: "mt-6 w-full space-y-3", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-[var(--theme-muted)]", children: "Recent Missions" }),
            activityTotalPages > 1 && /* @__PURE__ */ jsxs("div", { className: "ml-auto flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxs("span", { className: "text-[10px] text-[var(--theme-muted-2)]", children: [
                safeActivityPage + 1,
                "/",
                activityTotalPages
              ] }),
              /* @__PURE__ */ jsx(
                "button",
                {
                  type: "button",
                  disabled: safeActivityPage === 0,
                  onClick: () => setActivityPage((p) => Math.max(0, p - 1)),
                  className: "inline-flex size-6 items-center justify-center rounded-lg border border-[var(--theme-border)] text-xs text-[var(--theme-muted)] transition-colors hover:border-[var(--theme-accent)] disabled:opacity-30",
                  children: "‹"
                }
              ),
              /* @__PURE__ */ jsx(
                "button",
                {
                  type: "button",
                  disabled: safeActivityPage >= activityTotalPages - 1,
                  onClick: () => setActivityPage((p) => Math.min(activityTotalPages - 1, p + 1)),
                  className: "inline-flex size-6 items-center justify-center rounded-lg border border-[var(--theme-border)] text-xs text-[var(--theme-muted)] transition-colors hover:border-[var(--theme-accent)] disabled:opacity-30",
                  children: "›"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex items-center gap-1", children: ["all", "completed", "failed"].map((filter) => /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              onClick: () => {
                setActivityFilter(filter);
                setActivityPage(0);
              },
              className: cn(
                "rounded-full border px-3 py-1 text-[11px] font-medium capitalize transition-colors",
                activityFilter === filter ? "border-[var(--theme-accent)] bg-[var(--theme-accent-soft)] text-[var(--theme-accent-strong)]" : "border-[var(--theme-border)] text-[var(--theme-muted-2)] hover:border-[var(--theme-accent)] hover:text-[var(--theme-text)]"
              ),
              children: filter
            },
            filter
          )) }),
          visibleActivityItems.length > 0 ? /* @__PURE__ */ jsx("div", { className: "min-h-[140px] space-y-1.5", children: hasMissionHistory ? visibleActivityItems.map((item) => {
            const entry = item;
            return /* @__PURE__ */ jsxs(
              "button",
              {
                type: "button",
                onClick: () => conductor.setSelectedHistoryEntry(entry),
                className: "flex w-full items-center gap-3 rounded-xl border border-[var(--theme-border)] bg-[var(--theme-card)] px-3 py-2 text-left text-sm transition-colors hover:border-[var(--theme-accent)]",
                children: [
                  /* @__PURE__ */ jsx("span", { className: "min-w-0 flex-1 truncate font-medium text-[var(--theme-text)]", children: entry.goal }),
                  /* @__PURE__ */ jsx(
                    "span",
                    {
                      className: cn(
                        "w-[76px] shrink-0 rounded-full border px-2 py-0.5 text-center text-[10px] font-medium uppercase tracking-[0.12em]",
                        entry.status === "completed" ? "border-emerald-400/35 bg-emerald-500/10 text-emerald-300" : "border-red-400/35 bg-red-500/10 text-red-300"
                      ),
                      children: entry.status === "completed" ? "Complete" : "Failed"
                    }
                  ),
                  /* @__PURE__ */ jsx("span", { className: "w-[52px] shrink-0 text-right text-xs text-[var(--theme-muted-2)]", children: formatRelativeTime(entry.completedAt, now) }),
                  /* @__PURE__ */ jsxs("span", { className: "w-[72px] shrink-0 text-right text-xs text-[var(--theme-muted)]", children: [
                    entry.totalTokens.toLocaleString(),
                    " tok"
                  ] })
                ]
              },
              entry.id
            );
          }) : visibleActivityItems.map((item) => {
            const recentSession = item;
            const label = recentSession.label ?? recentSession.key ?? "";
            const displayName = label.replace(/^worker-/, "").replace(/[-_]+/g, " ");
            const tokens = typeof recentSession.totalTokens === "number" ? recentSession.totalTokens : 0;
            const model = getShortModelName(recentSession.model);
            const updatedAt = typeof recentSession.updatedAt === "string" ? recentSession.updatedAt : typeof recentSession.startedAt === "string" ? recentSession.startedAt : typeof recentSession.createdAt === "string" ? recentSession.createdAt : null;
            const sessionStatus = deriveSessionStatus(recentSession);
            const dotClass = sessionStatus === "completed" ? "bg-emerald-400" : sessionStatus === "failed" ? "bg-red-400" : "bg-sky-400 animate-pulse";
            return /* @__PURE__ */ jsxs(
              "div",
              {
                className: "flex items-center gap-3 rounded-xl border border-[var(--theme-border)] bg-[var(--theme-card)] px-3 py-2 text-sm",
                children: [
                  /* @__PURE__ */ jsx("span", { className: "min-w-0 flex-1 truncate font-medium capitalize text-[var(--theme-text)]", children: displayName }),
                  /* @__PURE__ */ jsxs(
                    "span",
                    {
                      className: cn(
                        "shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.12em]",
                        sessionStatus === "completed" ? "border-emerald-400/35 bg-emerald-500/10 text-emerald-300" : sessionStatus === "failed" ? "border-red-400/35 bg-red-500/10 text-red-300" : "border-sky-400/35 bg-sky-500/10 text-sky-300"
                      ),
                      children: [
                        /* @__PURE__ */ jsx("span", { className: cn("mr-1 inline-block size-1.5 rounded-full align-middle", dotClass) }),
                        sessionStatus
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsx("span", { className: "shrink-0 text-xs text-[var(--theme-muted-2)]", children: formatRelativeTime(updatedAt, now) }),
                  /* @__PURE__ */ jsxs("span", { className: "shrink-0 text-xs text-[var(--theme-muted)]", children: [
                    tokens.toLocaleString(),
                    " tok"
                  ] }),
                  /* @__PURE__ */ jsx("span", { className: "hidden shrink-0 text-xs text-[var(--theme-muted)] sm:inline", children: model })
                ]
              },
              recentSession.key
            );
          }) }) : /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-dashed border-[var(--theme-border)] px-4 py-6 text-center text-sm text-[var(--theme-muted)]", children: [
            "No ",
            activityFilter === "all" ? "" : `${activityFilter} `,
            hasMissionHistory ? "missions" : "sessions",
            " found"
          ] })
        ] }) : /* @__PURE__ */ jsx("section", { className: "mt-6 w-full", children: /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-dashed border-[var(--theme-border)] px-4 py-8 text-center", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm text-[var(--theme-muted)]", children: "No missions yet." }),
          /* @__PURE__ */ jsx("p", { className: "mt-1 text-xs text-[var(--theme-muted-2)]", children: "Launch your first mission and it will appear here." })
        ] }) })
      ] }),
      missionModalOpen ? /* @__PURE__ */ jsx(
        "div",
        {
          className: "fixed inset-0 z-50 flex items-center justify-center bg-[color-mix(in_srgb,var(--theme-bg)_48%,transparent)] px-4 py-6 backdrop-blur-md",
          onClick: () => setMissionModalOpen(false),
          children: /* @__PURE__ */ jsxs(
            "div",
            {
              className: "w-full max-w-2xl rounded-3xl border border-[var(--theme-border2)] bg-[var(--theme-card)] p-5 shadow-[0_24px_80px_var(--theme-shadow)] sm:p-6",
              onClick: (event) => event.stopPropagation(),
              children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-4", children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold tracking-tight text-[var(--theme-text)]", children: "New Mission" }),
                    /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-[var(--theme-muted-2)]", children: "Describe the mission, constraints, and desired outcome." })
                  ] }),
                  /* @__PURE__ */ jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => setMissionModalOpen(false),
                      className: "inline-flex size-9 items-center justify-center rounded-xl border border-[var(--theme-border)] bg-[var(--theme-card2)] text-lg text-[var(--theme-muted)] transition-colors hover:border-[var(--theme-accent)] hover:text-[var(--theme-accent-strong)]",
                      "aria-label": "Close new mission dialog",
                      children: "×"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs(
                  "form",
                  {
                    className: "mt-5 space-y-4",
                    onSubmit: (event) => {
                      event.preventDefault();
                      void handleSubmit();
                    },
                    children: [
                      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: QUICK_ACTIONS.map((action) => /* @__PURE__ */ jsxs(
                        "button",
                        {
                          type: "button",
                          onClick: () => handleQuickActionSelect(action),
                          className: cn(
                            "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
                            selectedAction === action.id ? "border-[var(--theme-accent)] bg-[var(--theme-accent-soft)] text-[var(--theme-accent-strong)]" : "border-[var(--theme-border)] bg-transparent text-[var(--theme-muted)] hover:border-[var(--theme-accent)] hover:text-[var(--theme-accent-strong)]"
                          ),
                          children: [
                            /* @__PURE__ */ jsx(HugeiconsIcon, { icon: action.icon, size: 14, strokeWidth: 1.7 }),
                            action.label
                          ]
                        },
                        action.id
                      )) }),
                      /* @__PURE__ */ jsx(
                        "textarea",
                        {
                          value: goalDraft,
                          onChange: (event) => setGoalDraft(event.target.value),
                          placeholder: `${QUICK_ACTIONS.find((action) => action.id === selectedAction)?.label ?? "Build"}: describe the mission, constraints, and desired outcome.`,
                          disabled: conductor.isSending,
                          rows: 8,
                          className: "min-h-[220px] w-full rounded-3xl border border-[var(--theme-border2)] bg-[var(--theme-bg)] px-4 py-4 text-sm text-[var(--theme-text)] outline-none transition-colors placeholder:text-[var(--theme-muted-2)] focus:border-[var(--theme-accent)] disabled:cursor-not-allowed disabled:opacity-60 md:text-base"
                        }
                      ),
                      /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxs(
                        Button,
                        {
                          type: "submit",
                          disabled: !goalDraft.trim() || conductor.isSending,
                          className: "rounded-full bg-[var(--theme-accent)] px-5 text-white hover:bg-[var(--theme-accent-strong)]",
                          children: [
                            conductor.isSending ? "Launching..." : "Launch Mission",
                            /* @__PURE__ */ jsx(HugeiconsIcon, { icon: ArrowRight01Icon, size: 16, strokeWidth: 1.7 })
                          ]
                        }
                      ) })
                    ]
                  }
                )
              ]
            }
          )
        }
      ) : null,
      settingsOpen && /* @__PURE__ */ jsx(
        "div",
        {
          className: "fixed inset-0 z-50 flex items-center justify-center bg-[color-mix(in_srgb,var(--theme-bg)_55%,transparent)] px-4 py-6 backdrop-blur-md",
          onClick: () => setSettingsOpen(false),
          children: /* @__PURE__ */ jsxs(
            "div",
            {
              className: "max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl border border-[var(--theme-border2)] bg-[var(--theme-card)] p-5 shadow-[0_24px_80px_var(--theme-shadow)] sm:p-6",
              onClick: (event) => event.stopPropagation(),
              children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-4", children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.16em] text-[var(--theme-muted)]", children: "Mission Defaults" }),
                    /* @__PURE__ */ jsx("h2", { className: "mt-2 text-2xl font-semibold tracking-tight text-[var(--theme-text)]", children: "Conductor settings" }),
                    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-[var(--theme-muted-2)]", children: "Set the models and defaults every new mission should inherit." })
                  ] }),
                  /* @__PURE__ */ jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => setSettingsOpen(false),
                      className: "inline-flex size-10 items-center justify-center rounded-xl border border-[var(--theme-border)] bg-[var(--theme-card2)] text-lg text-[var(--theme-muted)] transition-colors hover:border-[var(--theme-accent)] hover:text-[var(--theme-accent-strong)]",
                      "aria-label": "Close settings",
                      children: "×"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "mt-6 space-y-4", children: [
                  /* @__PURE__ */ jsx(
                    ModelSelectorDropdown,
                    {
                      label: "Orchestrator Model",
                      value: conductor.conductorSettings.orchestratorModel,
                      onChange: (nextValue) => updateSettings({ orchestratorModel: nextValue }),
                      models: availableModels
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    ModelSelectorDropdown,
                    {
                      label: "Worker Model",
                      value: conductor.conductorSettings.workerModel,
                      onChange: (nextValue) => updateSettings({ workerModel: nextValue }),
                      models: availableModels
                    }
                  ),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-[var(--theme-text)]", children: "Project Directory" }),
                    /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
                      /* @__PURE__ */ jsx(
                        "input",
                        {
                          type: "text",
                          value: conductor.conductorSettings.projectsDir,
                          onChange: (event) => updateSettings({ projectsDir: event.target.value }),
                          placeholder: "~/conductor-projects",
                          className: "min-w-0 flex-1 rounded-xl border border-[var(--theme-border)] bg-[var(--theme-bg)] px-4 py-3 text-sm text-[var(--theme-text)] outline-none transition-colors placeholder:text-[var(--theme-muted-2)] focus:border-[var(--theme-accent)]"
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        "button",
                        {
                          type: "button",
                          onClick: openDirectoryBrowser,
                          className: "shrink-0 rounded-xl border border-[var(--theme-border)] bg-[var(--theme-card2)] px-4 py-3 text-sm font-medium text-[var(--theme-text)] transition-colors hover:border-[var(--theme-accent)] hover:text-[var(--theme-accent-strong)]",
                          children: "Browse"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsx("p", { className: "text-xs text-[var(--theme-muted-2)]", children: "Type a path directly or choose a directory from the browser." })
                  ] }),
                  /* @__PURE__ */ jsxs("label", { className: "block space-y-2", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-[var(--theme-text)]", children: "Max Parallel Workers" }),
                    /* @__PURE__ */ jsx(
                      "input",
                      {
                        type: "number",
                        min: 1,
                        max: 5,
                        value: conductor.conductorSettings.maxParallel,
                        onChange: (event) => updateSettings({
                          maxParallel: Math.min(5, Math.max(1, Number(event.target.value) || 1))
                        }),
                        className: "w-full rounded-xl border border-[var(--theme-border)] bg-[var(--theme-bg)] px-4 py-3 text-sm text-[var(--theme-text)] outline-none transition-colors focus:border-[var(--theme-accent)]"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxs("label", { className: "flex items-start gap-3 rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-bg)] px-4 py-4", children: [
                    /* @__PURE__ */ jsx(
                      "input",
                      {
                        type: "checkbox",
                        checked: conductor.conductorSettings.supervised,
                        onChange: (event) => updateSettings({ supervised: event.target.checked }),
                        className: "mt-1 size-4 rounded border-[var(--theme-border2)] accent-[var(--theme-accent)]"
                      }
                    ),
                    /* @__PURE__ */ jsxs("span", { className: "min-w-0", children: [
                      /* @__PURE__ */ jsx("span", { className: "block text-sm font-medium text-[var(--theme-text)]", children: "Supervised Mode" }),
                      /* @__PURE__ */ jsx("span", { className: "mt-1 block text-sm text-[var(--theme-muted-2)]", children: "Require approval before each task" })
                    ] })
                  ] }),
                  canResetSavedState ? /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-bg)] px-4 py-3", children: [
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-[var(--theme-text)]", children: "Reset saved state" }),
                      /* @__PURE__ */ jsx("p", { className: "mt-1 text-xs text-[var(--theme-muted-2)]", children: "Clear mission history and any persisted Conductor mission state." })
                    ] }),
                    /* @__PURE__ */ jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => {
                          setSettingsOpen(false);
                          conductor.resetSavedState();
                          setGoalDraft("");
                          setContinueDraft("");
                          setSelectedTaskId(null);
                        },
                        className: "text-xs text-[var(--theme-muted)] transition-colors hover:text-[var(--theme-accent)]",
                        children: "Reset"
                      }
                    )
                  ] }) : null
                ] })
              ]
            }
          )
        }
      ),
      directoryBrowserOpen ? /* @__PURE__ */ jsx(
        "div",
        {
          className: "fixed inset-0 z-[70] flex items-center justify-center bg-[color-mix(in_srgb,var(--theme-bg)_55%,transparent)] px-4 py-6 backdrop-blur-md",
          onClick: closeDirectoryBrowser,
          children: /* @__PURE__ */ jsxs(
            "div",
            {
              className: "w-full max-w-2xl rounded-3xl border border-[var(--theme-border2)] bg-[var(--theme-card)] p-5 shadow-[0_24px_80px_var(--theme-shadow)] sm:p-6",
              onClick: (event) => event.stopPropagation(),
              children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-4", children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.16em] text-[var(--theme-muted)]", children: "Directory Browser" }),
                    /* @__PURE__ */ jsx("h3", { className: "mt-2 text-xl font-semibold tracking-tight text-[var(--theme-text)]", children: "Choose project directory" }),
                    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-[var(--theme-muted-2)]", children: "Select the folder where Conductor should create project output." })
                  ] }),
                  /* @__PURE__ */ jsx(
                    "button",
                    {
                      type: "button",
                      onClick: closeDirectoryBrowser,
                      className: "inline-flex size-10 items-center justify-center rounded-xl border border-[var(--theme-border)] bg-[var(--theme-card2)] text-lg text-[var(--theme-muted)] transition-colors hover:border-[var(--theme-accent)] hover:text-[var(--theme-accent-strong)]",
                      "aria-label": "Close directory browser",
                      children: "×"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "mt-5 space-y-4", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
                    /* @__PURE__ */ jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => setDirectoryBrowserPath(getParentDirectory(directoryBrowserPath)),
                        disabled: directoryBrowserLoading || getParentDirectory(directoryBrowserPath) === directoryBrowserPath,
                        className: cn(
                          "rounded-xl border px-3 py-2 text-sm font-medium transition-colors",
                          directoryBrowserLoading || getParentDirectory(directoryBrowserPath) === directoryBrowserPath ? "cursor-not-allowed border-[var(--theme-border)] bg-[var(--theme-card2)] text-[var(--theme-muted)] opacity-60" : "border-[var(--theme-border)] bg-[var(--theme-bg)] text-[var(--theme-text)] hover:border-[var(--theme-accent)] hover:text-[var(--theme-accent-strong)]"
                        ),
                        children: "Up"
                      }
                    ),
                    /* @__PURE__ */ jsx("div", { className: "min-w-0 flex-1 rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-bg)] px-3 py-2", children: /* @__PURE__ */ jsx("div", { className: "flex flex-wrap items-center gap-1 text-sm", children: directoryBreadcrumbs.map((crumb, index) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
                      index > 0 ? /* @__PURE__ */ jsx("span", { className: "text-[var(--theme-muted-2)]", children: "/" }) : null,
                      /* @__PURE__ */ jsx(
                        "button",
                        {
                          type: "button",
                          onClick: () => setDirectoryBrowserPath(crumb.path),
                          className: cn(
                            "rounded-md px-1.5 py-0.5 transition-colors",
                            crumb.path === directoryBrowserPath ? "bg-[var(--theme-accent-soft)] text-[var(--theme-accent-strong)]" : "text-[var(--theme-text)] hover:bg-[var(--theme-card2)]"
                          ),
                          children: crumb.label
                        }
                      )
                    ] }, crumb.path)) }) })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-bg)] px-4 py-3", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-3", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--theme-muted)]", children: "Current path" }),
                    /* @__PURE__ */ jsx("span", { className: "truncate text-sm text-[var(--theme-text)]", children: directoryBrowserPath })
                  ] }) }),
                  directoryBrowserError ? /* @__PURE__ */ jsx("div", { className: "rounded-2xl border border-[var(--theme-warning-border)] bg-[var(--theme-warning-soft)] px-4 py-3 text-sm text-[var(--theme-warning)]", children: directoryBrowserError }) : null,
                  /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-bg)]", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-[var(--theme-border)] px-4 py-3", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--theme-muted)]", children: "Folders" }),
                      directoryBrowserLoading ? /* @__PURE__ */ jsx("span", { className: "text-xs text-[var(--theme-muted-2)]", children: "Loading…" }) : /* @__PURE__ */ jsxs("span", { className: "text-xs text-[var(--theme-muted-2)]", children: [
                        directoryBrowserEntries.length,
                        " visible"
                      ] })
                    ] }),
                    /* @__PURE__ */ jsx("div", { className: "max-h-[22rem] overflow-y-auto p-2", children: directoryBrowserLoading ? /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3 px-4 py-10 text-sm text-[var(--theme-muted)]", children: [
                      /* @__PURE__ */ jsx("div", { className: "size-4 animate-spin rounded-full border-2 border-[var(--theme-border)] border-t-[var(--theme-accent)]" }),
                      /* @__PURE__ */ jsx("span", { children: "Loading folders…" })
                    ] }) : directoryBrowserEntries.length > 0 ? /* @__PURE__ */ jsx("div", { className: "space-y-1", children: directoryBrowserEntries.map((entry) => /* @__PURE__ */ jsxs(
                      "button",
                      {
                        type: "button",
                        onClick: () => setDirectoryBrowserPath(entry.path),
                        className: "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm text-[var(--theme-text)] transition-colors hover:bg-[var(--theme-card2)]",
                        children: [
                          /* @__PURE__ */ jsx("span", { className: "inline-flex size-2 rounded-full bg-[var(--theme-accent)]" }),
                          /* @__PURE__ */ jsx("span", { className: "min-w-0 flex-1 truncate", children: entry.name }),
                          /* @__PURE__ */ jsx("span", { className: "text-xs text-[var(--theme-muted)]", children: "Open" })
                        ]
                      },
                      entry.path
                    )) }) : /* @__PURE__ */ jsx("div", { className: "px-4 py-10 text-center text-sm text-[var(--theme-muted)]", children: "No folders found in this location." }) })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-bg)] px-4 py-3", children: [
                    /* @__PURE__ */ jsx("p", { className: "text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--theme-muted)]", children: "Quick paths" }),
                    /* @__PURE__ */ jsx("div", { className: "mt-3 flex flex-wrap gap-2", children: getDirectorySuggestions().map((pathOption) => /* @__PURE__ */ jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => setDirectoryBrowserPath(pathOption),
                        className: "rounded-full border border-[var(--theme-border)] bg-[var(--theme-card2)] px-3 py-1.5 text-xs font-medium text-[var(--theme-text)] transition-colors hover:border-[var(--theme-accent)] hover:text-[var(--theme-accent-strong)]",
                        children: pathOption
                      },
                      pathOption
                    )) })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", children: [
                    /* @__PURE__ */ jsx(
                      "button",
                      {
                        type: "button",
                        onClick: closeDirectoryBrowser,
                        className: "rounded-xl border border-[var(--theme-border)] bg-[var(--theme-bg)] px-4 py-3 text-sm font-medium text-[var(--theme-text)] transition-colors hover:border-[var(--theme-accent)] hover:text-[var(--theme-accent-strong)]",
                        children: "Cancel"
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => {
                          updateSettings({ projectsDir: directoryBrowserPath });
                          closeDirectoryBrowser();
                        },
                        className: "rounded-xl bg-[var(--theme-accent)] px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-[var(--theme-accent-strong)]",
                        children: "Select This Directory"
                      }
                    )
                  ] })
                ] })
              ]
            }
          )
        }
      ) : null
    ] }) });
  }
  if (phase === "preview") {
    return /* @__PURE__ */ jsx("div", { className: "flex min-h-dvh flex-col bg-[var(--theme-bg)] text-[var(--theme-text)]", style: THEME_STYLE, children: /* @__PURE__ */ jsx("main", { className: "mx-auto flex min-h-0 w-full max-w-[720px] flex-1 flex-col items-stretch justify-center px-4 py-4 pb-[calc(var(--tabbar-h,80px)+1rem)] md:px-6 md:py-8", children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-center", children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.24em] text-[var(--theme-accent)]", children: "Mission Decomposition" }),
        /* @__PURE__ */ jsx("h1", { className: "text-2xl font-semibold tracking-tight", children: conductor.goal }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-[var(--theme-muted-2)]", children: "The agent is breaking the mission into workers. Once they spawn, this view flips into the active board." })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "rounded-3xl border border-[var(--theme-border)] bg-[var(--theme-card)] p-6 shadow-[0_24px_80px_var(--theme-shadow)]", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-3 border-b border-[var(--theme-border)] pb-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.16em] text-[var(--theme-muted)]", children: "Mission Planning" }),
            /* @__PURE__ */ jsx("p", { className: "mt-1 text-xs text-[var(--theme-muted-2)]", children: "Analyzing your request and preparing agents" })
          ] }),
          /* @__PURE__ */ jsx("span", { className: "rounded-full border border-sky-400/30 bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-300 animate-pulse", children: "Working" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-4 min-h-[200px] overflow-hidden rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-bg)] px-5 py-4", children: conductor.planText ? /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsx(Markdown, { className: "max-h-[500px] max-w-none overflow-auto text-sm text-[var(--theme-text)]", children: conductor.planText.replace(/(.{20,}?)\1+/g, "$1") }),
          /* @__PURE__ */ jsx(PlanningIndicator, {})
        ] }) : /* @__PURE__ */ jsx(PlanningIndicator, {}) }),
        conductor.streamError && /* @__PURE__ */ jsx("div", { className: "mt-4 rounded-2xl border border-red-400/40 bg-red-500/10 px-4 py-3 text-sm text-red-600", children: conductor.streamError }),
        conductor.timeoutWarning && /* @__PURE__ */ jsxs("div", { className: "mt-4 flex items-center justify-between gap-3 rounded-2xl border border-amber-400/40 bg-amber-500/10 px-5 py-3", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm text-amber-700", children: "⚠️ Planning is taking longer than expected..." }),
          /* @__PURE__ */ jsx(
            Button,
            {
              type: "button",
              onClick: handleNewMission,
              className: "rounded-xl border border-[var(--theme-border)] bg-[var(--theme-card)] px-4 text-[var(--theme-text)] hover:bg-[var(--theme-card2)]",
              children: "Cancel"
            }
          )
        ] }),
        conductor.tasks.length > 0 && /* @__PURE__ */ jsxs("div", { className: "mt-4 space-y-2", children: [
          /* @__PURE__ */ jsxs("p", { className: "text-xs font-semibold uppercase tracking-[0.16em] text-[var(--theme-muted)]", children: [
            "Identified Tasks (",
            conductor.tasks.length,
            ")"
          ] }),
          conductor.tasks.map((task) => /* @__PURE__ */ jsxs(
            "div",
            {
              className: "flex items-center gap-2 rounded-lg border border-[var(--theme-border)] bg-[var(--theme-card2)] px-3 py-2 text-sm",
              children: [
                /* @__PURE__ */ jsx("span", { className: "size-2 rounded-full bg-zinc-500" }),
                /* @__PURE__ */ jsx("span", { className: "text-[var(--theme-text)]", children: task.title })
              ]
            },
            task.id
          ))
        ] })
      ] })
    ] }) }) });
  }
  if (phase === "complete") {
    return /* @__PURE__ */ jsx("div", { className: "flex min-h-dvh flex-col bg-[var(--theme-bg)] text-[var(--theme-text)]", style: THEME_STYLE, children: /* @__PURE__ */ jsxs("main", { className: "mx-auto flex min-h-0 w-full max-w-[720px] flex-1 flex-col px-4 py-4 pb-[calc(var(--tabbar-h,80px)+1rem)] md:px-6 md:py-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 rounded-full border border-[var(--theme-border)] bg-[var(--theme-card)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--theme-muted)]", children: [
          "Conductor",
          /* @__PURE__ */ jsx("span", { className: "size-2 rounded-full bg-emerald-400" })
        ] }) }),
        conductor.streamError && /* @__PURE__ */ jsx("div", { className: "rounded-2xl border border-[var(--theme-danger-border)] bg-[var(--theme-danger-soft)] px-5 py-4", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx("span", { className: "pt-0.5 text-[var(--theme-danger)]", children: "❌" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-[var(--theme-danger)]", children: "Mission failed" }),
              /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-[var(--theme-danger)]/90", children: conductor.streamError })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2 sm:flex-row", children: [
            /* @__PURE__ */ jsx(
              Button,
              {
                type: "button",
                onClick: () => void conductor.retryMission(),
                className: "rounded-xl border border-[var(--theme-danger-border)] bg-[var(--theme-danger-soft)] px-4 text-[var(--theme-danger)] hover:bg-[var(--theme-danger-soft-strong)]",
                children: "Retry Mission"
              }
            ),
            /* @__PURE__ */ jsx(
              Button,
              {
                type: "button",
                onClick: handleNewMission,
                className: "rounded-xl bg-[var(--theme-accent)] px-4 text-white hover:bg-[var(--theme-accent-strong)]",
                children: "New Mission"
              }
            )
          ] })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "overflow-hidden rounded-3xl border border-[var(--theme-border)] bg-[var(--theme-card)] p-6 shadow-[0_24px_80px_var(--theme-shadow)]", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center justify-between gap-3", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: cn("text-xs font-semibold uppercase tracking-[0.24em]", conductor.streamError ? "text-red-400" : "text-[var(--theme-accent)]"), children: conductor.streamError ? "Mission Stopped" : "Mission Complete" }),
            /* @__PURE__ */ jsx("h1", { className: "mt-2 text-xl font-semibold tracking-tight text-[var(--theme-text)] sm:text-2xl", children: conductor.goal }),
            /* @__PURE__ */ jsxs("p", { className: "mt-2 text-xs text-[var(--theme-muted-2)]", children: [
              completedWorkers,
              "/",
              Math.max(totalWorkers, completedWorkers),
              " workers finished · ",
              formatElapsedTime(conductor.missionStartedAt, conductor.completedAt ? new Date(conductor.completedAt).getTime() : now),
              " total elapsed"
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
            !completePhaseProjectPath || !previewState.ready ? /* @__PURE__ */ jsx(
              Button,
              {
                type: "button",
                onClick: () => setContinueModalOpen(true),
                className: "rounded-xl border border-[var(--theme-border)] bg-[var(--theme-card2)] px-4 text-[var(--theme-text)] hover:border-[var(--theme-accent)] hover:text-[var(--theme-accent-strong)]",
                children: "Continue"
              }
            ) : null,
            /* @__PURE__ */ jsx(
              Button,
              {
                type: "button",
                onClick: handleNewMission,
                className: "rounded-xl bg-[var(--theme-accent)] px-5 text-white hover:bg-[var(--theme-accent-strong)]",
                children: "New Mission"
              }
            )
          ] })
        ] }) }),
        completePhaseProjectPath && previewState.ready ? /* @__PURE__ */ jsxs("section", { className: "overflow-hidden rounded-3xl border border-[var(--theme-border)] bg-[var(--theme-card)] p-6 shadow-[0_24px_80px_var(--theme-shadow)]", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-3", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.16em] text-[var(--theme-muted)]", children: "Output Preview" }),
              /* @__PURE__ */ jsx("p", { className: "mt-1 text-xs text-[var(--theme-muted-2)]", children: completePhaseProjectPath.split("/").pop() || "index.html" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: previewUrl,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "inline-flex items-center gap-2 rounded-xl border border-[var(--theme-border)] bg-[var(--theme-card2)] px-3 py-1.5 text-xs font-medium text-[var(--theme-text)] transition-colors hover:border-[var(--theme-accent)] hover:text-[var(--theme-accent)]",
                  children: "Open in new tab ↗"
                }
              ),
              /* @__PURE__ */ jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setContinueModalOpen(true),
                  className: "inline-flex items-center gap-2 rounded-xl border border-[var(--theme-border)] bg-[var(--theme-card2)] px-3 py-1.5 text-xs font-medium text-[var(--theme-text)] transition-colors hover:border-[var(--theme-accent)] hover:text-[var(--theme-accent)]",
                  children: "Continue"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "mt-4 overflow-auto rounded-2xl border border-[var(--theme-border)] bg-white", children: /* @__PURE__ */ jsx(
            "iframe",
            {
              src: previewUrl,
              className: "h-[clamp(280px,55vh,520px)] w-full",
              sandbox: "allow-scripts allow-same-origin",
              title: "Mission output preview"
            }
          ) })
        ] }) : completePhaseProjectPath && previewState.loading && !conductor.streamError ? /* @__PURE__ */ jsx("section", { className: "overflow-hidden rounded-3xl border border-[var(--theme-border)] bg-[var(--theme-card)] p-6 shadow-[0_24px_80px_var(--theme-shadow)]", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 text-sm text-[var(--theme-muted)]", children: [
          /* @__PURE__ */ jsx("div", { className: "size-4 animate-spin rounded-full border-2 border-[var(--theme-border)] border-t-[var(--theme-accent)]" }),
          "Loading output preview…"
        ] }) }) : null,
        (!completePhaseProjectPath || previewState.unavailable) && (() => {
          const outputSections = conductor.workers.map((worker, index) => {
            const output = (conductor.workerOutputs[worker.key] ?? getLastAssistantMessage(worker.raw.messages)).trim();
            if (!output) return null;
            const persona = getAgentPersona(index);
            return { key: worker.key, persona, label: worker.label, output };
          }).filter((section) => section !== null);
          const fallbackText = outputSections.length > 0 ? outputSections.map((s) => `### ${s.persona.emoji} ${s.persona.name} · ${s.label}

${s.output}`).join("\n\n---\n\n") : conductor.streamText.trim();
          if (!fallbackText) return null;
          return /* @__PURE__ */ jsxs("section", { className: "overflow-hidden rounded-3xl border border-[var(--theme-border)] bg-[var(--theme-card)] p-6 shadow-[0_24px_80px_var(--theme-shadow)]", children: [
            /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between gap-3", children: /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.16em] text-[var(--theme-muted)]", children: "Output" }),
              /* @__PURE__ */ jsx("p", { className: "mt-1 text-xs text-[var(--theme-muted-2)]", children: completePhaseProjectPath ? `Preview unavailable for ${completePhaseOutputLabel}` : "Agent work output" })
            ] }) }),
            /* @__PURE__ */ jsx("div", { className: "mt-4 overflow-hidden rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-bg)] px-5 py-4", children: /* @__PURE__ */ jsx(Markdown, { className: "max-h-[600px] max-w-none overflow-auto text-sm text-[var(--theme-text)]", children: fallbackText }) })
          ] });
        })(),
        conductor.tasks.length > 1 && completedTaskOutputs.length > 0 && /* @__PURE__ */ jsxs("section", { className: "overflow-hidden rounded-3xl border border-[var(--theme-border)] bg-[var(--theme-card)] p-6 shadow-[0_24px_80px_var(--theme-shadow)]", children: [
          /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between gap-3", children: /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.16em] text-[var(--theme-muted)]", children: "Task Outputs" }),
            /* @__PURE__ */ jsx("p", { className: "mt-1 text-xs text-[var(--theme-muted-2)]", children: "Per-task output snapshots from completed workers." })
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: "mt-4 space-y-3", children: completedTaskOutputs.map((task) => /* @__PURE__ */ jsxs(
            "div",
            {
              className: "rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-bg)] px-4 py-4",
              children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-3", children: [
                  /* @__PURE__ */ jsx("div", { className: "min-w-0", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx("span", { className: "size-2 rounded-full bg-emerald-400" }),
                    /* @__PURE__ */ jsx("p", { className: "truncate text-sm font-medium text-[var(--theme-text)]", children: task.title })
                  ] }) }),
                  task.previewUrl && /* @__PURE__ */ jsx(
                    "a",
                    {
                      href: task.previewUrl,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "inline-flex items-center gap-2 rounded-xl border border-[var(--theme-border)] bg-[var(--theme-card2)] px-3 py-1.5 text-xs font-medium text-[var(--theme-text)] transition-colors hover:border-[var(--theme-accent)] hover:text-[var(--theme-accent)]",
                      children: "Preview"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("p", { className: "mt-3 text-sm text-[var(--theme-muted)]", children: [
                  task.previewText,
                  (task.output ?? "").trim().length > 200 ? "…" : ""
                ] })
              ]
            },
            task.id
          )) })
        ] }),
        /* @__PURE__ */ jsxs("section", { className: "overflow-hidden rounded-3xl border border-[var(--theme-border)] bg-[var(--theme-card)] p-6 shadow-[0_24px_80px_var(--theme-shadow)]", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-3", children: [
            /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.16em] text-[var(--theme-muted)]", children: "Agent Summary" }) }),
            /* @__PURE__ */ jsx("span", { className: cn(
              "rounded-full px-3 py-1 text-xs font-medium",
              conductor.streamError ? "border border-red-400/35 bg-red-500/10 text-red-300" : "border border-emerald-400/35 bg-emerald-500/10 text-emerald-300"
            ), children: conductor.streamError ? "Stopped" : "Complete" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "mt-4 overflow-hidden rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-bg)] px-5 py-4", children: completeSummary ? /* @__PURE__ */ jsx(Markdown, { className: "max-h-[400px] max-w-none overflow-auto text-sm text-[var(--theme-text)]", children: completeSummary }) : conductor.streamText ? /* @__PURE__ */ jsx(Markdown, { className: "max-h-[400px] max-w-none overflow-auto text-sm text-[var(--theme-text)]", children: conductor.streamText }) : /* @__PURE__ */ jsx("p", { className: "text-sm text-[var(--theme-muted)]", children: "No summary captured." }) }),
          conductor.workers.length > 0 && /* @__PURE__ */ jsx("div", { className: "mt-4 space-y-2", children: conductor.workers.map((worker, index) => {
            const persona = getAgentPersona(index);
            const shortModelName = getShortModelName(worker.model);
            return /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 rounded-lg px-3 py-2 text-sm", children: [
              /* @__PURE__ */ jsx("span", { className: "size-2 rounded-full bg-emerald-400" }),
              /* @__PURE__ */ jsxs("span", { className: "font-medium text-[var(--theme-text)]", children: [
                persona.emoji,
                " ",
                persona.name
              ] }),
              /* @__PURE__ */ jsx("span", { className: "text-[var(--theme-muted)]", children: worker.label }),
              /* @__PURE__ */ jsxs("span", { className: "ml-auto text-xs text-[var(--theme-muted)]", children: [
                shortModelName,
                " · ",
                worker.totalTokens.toLocaleString(),
                " tok"
              ] })
            ] }, worker.key);
          }) }),
          (totalTokens > 0 || completeMissionCostWorkers.length > 0) && /* @__PURE__ */ jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsx(
            MissionCostSection,
            {
              totalTokens,
              workers: completeMissionCostWorkers,
              expanded: completeCostExpanded,
              onToggle: () => setCompleteCostExpanded((current) => !current)
            }
          ) }),
          conductor.streamText && completeSummary && /* @__PURE__ */ jsxs("details", { className: "mt-4 overflow-hidden rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-bg)] px-5 py-4", children: [
            /* @__PURE__ */ jsx("summary", { className: "cursor-pointer text-xs font-medium text-[var(--theme-muted)]", children: "Raw Agent Output" }),
            /* @__PURE__ */ jsx("div", { className: "mt-4 border-t border-[var(--theme-border)] pt-4", children: /* @__PURE__ */ jsx(Markdown, { className: "max-h-[400px] max-w-none overflow-auto text-sm text-[var(--theme-text)]", children: conductor.streamText }) })
          ] })
        ] })
      ] }),
      continueModalOpen ? /* @__PURE__ */ jsx(
        "div",
        {
          className: "fixed inset-0 z-50 flex items-center justify-center bg-[color-mix(in_srgb,var(--theme-bg)_48%,transparent)] px-4 py-6 backdrop-blur-md",
          onClick: () => setContinueModalOpen(false),
          children: /* @__PURE__ */ jsxs(
            "div",
            {
              className: "w-full max-w-md rounded-3xl border border-[var(--theme-border2)] bg-[var(--theme-card)] p-5 shadow-[0_24px_80px_var(--theme-shadow)] sm:p-6",
              onClick: (event) => event.stopPropagation(),
              children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-4", children: [
                  /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold tracking-tight text-[var(--theme-text)]", children: "Continue Mission" }) }),
                  /* @__PURE__ */ jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => setContinueModalOpen(false),
                      className: "inline-flex size-9 items-center justify-center rounded-xl border border-[var(--theme-border)] bg-[var(--theme-card2)] text-lg text-[var(--theme-muted)] transition-colors hover:border-[var(--theme-accent)] hover:text-[var(--theme-accent-strong)]",
                      "aria-label": "Close continue mission dialog",
                      children: "×"
                    }
                  )
                ] }),
                continuationModalPreview ? /* @__PURE__ */ jsxs("div", { className: "mt-4 rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-bg)] px-4 py-3", children: [
                  /* @__PURE__ */ jsx("p", { className: "text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--theme-muted)]", children: "Previous output summary" }),
                  /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-[var(--theme-text)]", children: continuationModalPreview })
                ] }) : null,
                /* @__PURE__ */ jsxs(
                  "form",
                  {
                    className: "mt-4 space-y-3",
                    onSubmit: (event) => {
                      event.preventDefault();
                      void handleContinueMission();
                    },
                    children: [
                      /* @__PURE__ */ jsx(
                        "input",
                        {
                          type: "text",
                          value: continueDraft,
                          onChange: (event) => setContinueDraft(event.target.value),
                          placeholder: "Continue with additional instructions...",
                          disabled: conductor.isSending,
                          className: "w-full rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-bg)] px-4 py-3 text-sm text-[var(--theme-text)] outline-none transition-colors placeholder:text-[var(--theme-muted-2)] focus:border-[var(--theme-accent)] disabled:cursor-not-allowed disabled:opacity-60"
                        }
                      ),
                      /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxs(
                        "button",
                        {
                          type: "submit",
                          disabled: !continueDraft.trim() || conductor.isSending,
                          className: cn(
                            "inline-flex items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-medium transition-colors sm:min-w-[96px]",
                            !continueDraft.trim() || conductor.isSending ? "cursor-not-allowed border border-[var(--theme-border)] bg-[var(--theme-card2)] text-[var(--theme-muted)] opacity-60" : "border border-[var(--theme-border)] bg-[var(--theme-accent-soft)] text-[var(--theme-text)] hover:border-[var(--theme-accent)] hover:bg-[var(--theme-accent-soft-strong)]"
                          ),
                          children: [
                            /* @__PURE__ */ jsx(HugeiconsIcon, { icon: ArrowRight01Icon, size: 16, strokeWidth: 1.8 }),
                            conductor.isSending ? "Sending" : "Send"
                          ]
                        }
                      ) })
                    ]
                  }
                )
              ]
            }
          )
        }
      ) : null
    ] }) });
  }
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-dvh flex-col bg-[var(--theme-bg)] text-[var(--theme-text)]", style: THEME_STYLE, children: /* @__PURE__ */ jsx("main", { className: "mx-auto flex min-h-0 w-full max-w-[720px] flex-1 flex-col justify-center px-4 py-4 pb-[calc(var(--tabbar-h,80px)+1rem)] md:px-6 md:py-8", children: /* @__PURE__ */ jsxs("div", { className: "flex w-full flex-col gap-6", children: [
    /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 rounded-full border border-[var(--theme-border)] bg-[var(--theme-card)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--theme-muted)]", children: [
      "Conductor",
      /* @__PURE__ */ jsx("span", { className: "size-2 rounded-full bg-emerald-400 animate-pulse" })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "overflow-hidden rounded-3xl border border-[var(--theme-border)] bg-[var(--theme-card)] px-5 py-5 shadow-[0_24px_80px_var(--theme-shadow)]", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsx("h1", { className: "line-clamp-2 text-xl font-semibold tracking-tight text-[var(--theme-text)] sm:text-2xl", children: conductor.goal }),
        /* @__PURE__ */ jsxs("div", { className: "mt-2 flex items-center justify-center gap-2 text-xs text-[var(--theme-muted)]", children: [
          /* @__PURE__ */ jsx("span", { children: formatElapsedMilliseconds(conductor.isPaused ? conductor.pausedElapsedMs : conductor.missionElapsedMs) }),
          /* @__PURE__ */ jsx("span", { className: "text-[var(--theme-border)]", children: "·" }),
          /* @__PURE__ */ jsxs("span", { children: [
            completedWorkers,
            "/",
            Math.max(totalWorkers, 1),
            " complete"
          ] }),
          /* @__PURE__ */ jsx("span", { className: "text-[var(--theme-border)]", children: "·" }),
          /* @__PURE__ */ jsxs("span", { children: [
            activeWorkerCount,
            " active"
          ] })
        ] }),
        conductor.isPaused ? /* @__PURE__ */ jsx("div", { className: "mt-3 flex justify-center", children: /* @__PURE__ */ jsx("span", { className: "rounded-full border border-[var(--theme-accent)] bg-[var(--theme-accent-soft)] px-3 py-1 text-xs font-medium text-[var(--theme-accent-strong)] animate-pulse", children: "Paused" }) }) : null
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-4 h-1 w-full overflow-hidden rounded-full bg-[var(--theme-border)]", children: /* @__PURE__ */ jsx("div", { className: "h-full rounded-full bg-[var(--theme-accent)] transition-[width] duration-500 ease-out", style: { width: `${missionProgress}%` } }) }),
      /* @__PURE__ */ jsxs("div", { className: "mt-3 flex items-center justify-center gap-2", children: [
        /* @__PURE__ */ jsxs(
          "button",
          {
            type: "button",
            onClick: () => void conductor.stopMission(),
            className: "inline-flex items-center gap-1.5 rounded-xl border border-[var(--theme-danger-border, color-mix(in srgb, var(--theme-danger) 35%, white))] bg-[var(--theme-danger-soft, color-mix(in srgb, var(--theme-danger) 12%, transparent))] px-3 py-1.5 text-xs font-medium text-[var(--theme-danger)] transition-colors hover:bg-[var(--theme-danger-soft-strong, color-mix(in srgb, var(--theme-danger) 18%, transparent))]",
            children: [
              /* @__PURE__ */ jsx("span", { children: "■" }),
              " Stop Mission"
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "button",
          {
            type: "button",
            disabled: !conductor.orchestratorSessionKey || conductor.isPausing,
            onClick: async () => {
              if (!conductor.orchestratorSessionKey) return;
              try {
                await conductor.pauseAgent(conductor.orchestratorSessionKey, !conductor.isPaused);
              } catch {
              }
            },
            className: cn(
              "inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
              !conductor.orchestratorSessionKey || conductor.isPausing ? "cursor-not-allowed border-[var(--theme-border)] bg-[var(--theme-card2)] text-[var(--theme-muted)] opacity-50" : conductor.isPaused ? "border-[var(--theme-accent)] bg-[var(--theme-accent-soft)] text-[var(--theme-accent-strong)] hover:bg-[var(--theme-accent-soft-strong)]" : "border-[var(--theme-border)] bg-[var(--theme-card2)] text-[var(--theme-muted)] hover:border-[var(--theme-accent)] hover:text-[var(--theme-text)]"
            ),
            children: [
              /* @__PURE__ */ jsx("span", { children: conductor.isPaused ? "▶" : "⏸" }),
              " ",
              conductor.isPausing ? "..." : conductor.isPaused ? "Resume" : "Pause"
            ]
          }
        )
      ] })
    ] }),
    conductor.timeoutWarning && /* @__PURE__ */ jsx("section", { className: "rounded-2xl border border-[var(--theme-warning-border)] bg-[var(--theme-warning-soft)] px-5 py-4", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-[var(--theme-warning)]", children: "⏳ Mission appears stalled — no activity for 60 seconds" }),
        /* @__PURE__ */ jsx("p", { className: "mt-1 text-xs text-[var(--theme-muted)]", children: "Sometimes the workers are still alive, but the stream went quiet. Your call." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2 sm:flex-row", children: [
        /* @__PURE__ */ jsx(
          Button,
          {
            type: "button",
            onClick: conductor.dismissTimeoutWarning,
            className: "rounded-xl border border-[var(--theme-warning-border)] bg-[var(--theme-card)] px-4 text-[var(--theme-text)] hover:bg-[var(--theme-card2)]",
            children: "Keep Waiting"
          }
        ),
        /* @__PURE__ */ jsx(
          Button,
          {
            type: "button",
            onClick: () => void conductor.stopMission(),
            className: "rounded-xl border border-[var(--theme-warning-border)] bg-[var(--theme-warning-soft)] px-4 text-[var(--theme-warning)] hover:bg-[var(--theme-warning-soft-strong)]",
            children: "Stop Mission"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "h-[360px] overflow-hidden rounded-3xl border border-[var(--theme-border)] bg-[var(--theme-card)] shadow-[0_24px_80px_var(--theme-shadow)]", children: /* @__PURE__ */ jsx(
      OfficeView,
      {
        agentRows: officeAgentRows,
        missionRunning: true,
        onViewOutput: () => {
        },
        processType: "parallel",
        companyName: "Conductor Office",
        containerHeight: 360,
        hideHeader: true
      }
    ) }),
    conductor.tasks.length > 0 ? /* @__PURE__ */ jsxs("div", { className: "grid gap-4 lg:grid-cols-[280px_1fr]", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-xs font-semibold uppercase tracking-[0.16em] text-[var(--theme-muted)]", children: [
          "Tasks (",
          conductor.tasks.filter((task) => task.status === "complete").length,
          "/",
          conductor.tasks.length,
          ")"
        ] }),
        conductor.tasks.map((task) => {
          const isSelected = selectedTaskId === task.id;
          const statusDot = task.status === "complete" ? "bg-emerald-400" : task.status === "running" ? "bg-sky-400 animate-pulse" : task.status === "failed" ? "bg-red-400" : "bg-zinc-500";
          return /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              onClick: () => setSelectedTaskId(isSelected ? null : task.id),
              className: cn(
                "w-full rounded-xl border px-3 py-2.5 text-left text-sm transition-colors",
                isSelected ? "border-[var(--theme-accent)] bg-[var(--theme-accent-soft)]" : "border-[var(--theme-border)] bg-[var(--theme-card)] hover:border-[var(--theme-accent)]"
              ),
              children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx("span", { className: cn("size-2 shrink-0 rounded-full", statusDot) }),
                /* @__PURE__ */ jsx("span", { className: "min-w-0 truncate font-medium text-[var(--theme-text)]", children: task.title })
              ] })
            },
            task.id
          );
        })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
        selectedTaskId ? /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between gap-3", children: /* @__PURE__ */ jsx("h2", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-[var(--theme-muted)]", children: "Task Output" }) }) : null,
        (() => {
          const selectedTask = selectedTaskId ? conductor.tasks.find((task) => task.id === selectedTaskId) : null;
          const displayWorkers = selectedTask?.workerKey ? conductor.workers.filter((worker) => worker.key === selectedTask.workerKey) : conductor.workers;
          return /* @__PURE__ */ jsxs("div", { className: "grid gap-3 md:grid-cols-2", children: [
            displayWorkers.map((worker, index) => {
              return /* @__PURE__ */ jsx(
                WorkerCard,
                {
                  worker,
                  index,
                  conductor,
                  now
                },
                worker.key
              );
            }),
            displayWorkers.length === 0 && /* @__PURE__ */ jsx("div", { className: "rounded-2xl border border-dashed border-[var(--theme-border)] bg-[var(--theme-card)] px-4 py-8 text-center text-sm text-[var(--theme-muted)] md:col-span-2", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3", children: [
              /* @__PURE__ */ jsx("div", { className: "size-4 animate-spin rounded-full border-2 border-sky-400 border-t-transparent" }),
              /* @__PURE__ */ jsx("span", { children: "Spawning workers…" })
            ] }) })
          ] });
        })()
      ] })
    ] }) : /* @__PURE__ */ jsx("div", { className: "space-y-3", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-3 md:grid-cols-2", children: [
      conductor.workers.map((worker, index) => {
        return /* @__PURE__ */ jsx(
          WorkerCard,
          {
            worker,
            index,
            conductor,
            now
          },
          worker.key
        );
      }),
      conductor.workers.length === 0 && /* @__PURE__ */ jsx("div", { className: "rounded-2xl border border-dashed border-[var(--theme-border)] bg-[var(--theme-card)] px-4 py-8 text-center text-sm text-[var(--theme-muted)] md:col-span-2", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3", children: [
        /* @__PURE__ */ jsx("div", { className: "size-4 animate-spin rounded-full border-2 border-sky-400 border-t-transparent" }),
        /* @__PURE__ */ jsx("span", { children: "Spawning workers…" })
      ] }) })
    ] }) })
  ] }) }) });
}
const SplitComponent = Conductor;
export {
  SplitComponent as component
};
