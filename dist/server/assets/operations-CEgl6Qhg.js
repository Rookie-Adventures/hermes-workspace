import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { u as usePageTitle } from "./use-page-title-CljdUyfw.js";
import { useState, Suspense, lazy, useMemo, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Settings01Icon, Cancel01Icon, Clock01Icon, PauseIcon, PlayIcon, ArrowRight01Icon, Delete02Icon, ArrowDown01Icon, PlusSignIcon, RefreshIcon, Copy01Icon, Link01Icon, ArrowUp01Icon, AiBrain03Icon } from "@hugeicons/core-free-icons";
import { c as cn, B as Button, t as toast, M as Markdown } from "./router-COrtOO2b.js";
import { HugeiconsIcon } from "@hugeicons/react";
import { useQueryClient, useQuery, useMutation } from "@tanstack/react-query";
import { f as fetchSessionHistory, s as sendToSession, a as fetchModels, b as fetchSessions } from "./gateway-api-D3EA1k_S.js";
import "@tanstack/react-router";
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
const AGENT_PRESETS = {
  sage: {
    emoji: "🐦",
    description: "X/Twitter growth & social media strategist",
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
    color: "#3b82f6"
  },
  builder: {
    emoji: "🔨",
    description: "Software engineer & coding agent",
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
    color: "#10b981"
  },
  scribe: {
    emoji: "✍️",
    description: "Content writer & documentation specialist",
    systemPrompt: `You are Scribe, a technical content writer and documentation specialist.

Your role:
- Write blog posts, landing page copy, and product documentation
- Create README files, setup guides, and API docs
- Draft newsletter content and changelog entries
- Turn technical features into user-facing benefits
- Edit and polish content from other agents

Voice: Clear, direct, developer-friendly. No jargon without explanation. Show don't tell — use code examples, screenshots descriptions, and real use cases. Write for builders who skim.

Output format: Markdown formatted. Include frontmatter suggestions for blog posts. Flag sections that need screenshots or demos.`,
    color: "#8b5cf6"
  },
  ops: {
    emoji: "📊",
    description: "Business operations & strategy analyst",
    systemPrompt: `You are Ops, a business operations and strategy analyst.

Your role:
- Track key metrics: GitHub stars, X impressions, user signups, active users
- Generate weekly business reports with actionable insights
- Monitor competitor moves (Cursor, Windsurf, Continue, Cline, etc.)
- Analyze user feedback and prioritize feature requests
- Plan roadmap and resource allocation

Style: Data-driven, concise, actionable. Every report should end with "recommended next actions." Use tables for metrics. Compare week-over-week.

Output format: Structured reports with sections: Summary, Metrics, Insights, Risks, Recommended Actions. Use bullet points, not paragraphs.`,
    color: "#f59e0b"
  },
  trader: {
    emoji: "🎰",
    description: "Prediction market signals & trading analyst",
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
    color: "#ef4444"
  },
  "pc1-coder": {
    emoji: "💻",
    description: "Local coding model (Qwen3-Coder 30B)",
    systemPrompt: "You are a coding assistant running on local hardware. Focus on code generation, refactoring, and debugging. Be concise.",
    color: "#06b6d4"
  },
  "pc1-planner": {
    emoji: "📋",
    description: "Local planning model (Qwen3-30B Sonnet distill)",
    systemPrompt: "You are a planning assistant. Break down complex tasks into actionable steps. Create clear task lists with dependencies and priorities.",
    color: "#14b8a6"
  },
  "pc1-critic": {
    emoji: "🔍",
    description: "Local critic model (Qwen3-14B Opus distill)",
    systemPrompt: "You are a code and content reviewer. Find bugs, logical errors, and improvements. Be thorough but constructive.",
    color: "#f97316"
  }
};
function seedAgentPresets() {
  if (typeof window === "undefined") return;
  for (const [agentId, preset] of Object.entries(AGENT_PRESETS)) {
    const key = `operations:agents:${agentId}`;
    const existing = localStorage.getItem(key);
    if (!existing) {
      localStorage.setItem(
        key,
        JSON.stringify({
          ...preset,
          createdAt: (/* @__PURE__ */ new Date()).toISOString()
        })
      );
    }
  }
}
function formatModelName(raw) {
  const stripped = raw.includes("/") ? raw.split("/").pop() ?? raw : raw;
  const lower = stripped.toLowerCase();
  if (lower.includes("opus")) {
    const match = stripped.match(/opus[- _]?(\d+)[- _.]?(\d+)/i);
    return match ? `Opus ${match[1]}.${match[2]}` : "Opus";
  }
  if (lower.includes("sonnet")) {
    const match = stripped.match(/sonnet[- _]?(\d+)[- _.]?(\d+)/i);
    return match ? `Sonnet ${match[1]}.${match[2]}` : "Sonnet";
  }
  if (lower.includes("haiku")) {
    const match = stripped.match(/haiku[- _]?(\d+)[- _.]?(\d+)/i);
    return match ? `Haiku ${match[1]}.${match[2]}` : "Haiku";
  }
  if (lower.includes("gemini")) {
    const match = stripped.match(
      /gemini[- _]?(\d+(?:[._]\d+)*)(?:[- _]?(flash|pro|ultra|exp))?/i
    );
    if (match) {
      const version = match[1].replace(/[_]/g, ".");
      const variant = match[2] ? ` ${match[2].charAt(0).toUpperCase()}${match[2].slice(1)}` : "";
      return `Gemini ${version}${variant}`;
    }
    return "Gemini";
  }
  if (lower.includes("codex")) {
    const match = stripped.match(/gpt[- _]?(\d+)[- _.]?(\d+)[- _]codex/i) ?? stripped.match(/codex[- _]?(\d+)[- _.]?(\d+)/i);
    return match ? `Codex ${match[1]}.${match[2]}` : "Codex";
  }
  if (lower.includes("gpt")) {
    const match = stripped.match(/gpt[- _]?(\d+)(?:[- _.]?(\d+))?/i);
    if (match) {
      return match[2] ? `GPT-${match[1]}.${match[2]}` : `GPT-${match[1]}`;
    }
    return stripped.replace(/gpt-/gi, "GPT-");
  }
  if (lower === "delivery-mirror") return "Mirror";
  if (lower.includes("kimi")) return "Kimi K2.5";
  return stripped.replace(/[-_]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}
function formatRelativeTime(timestampMs) {
  if (!timestampMs || timestampMs <= 0) return "just now";
  const diffMs = Math.max(0, Date.now() - timestampMs);
  const seconds = Math.floor(diffMs / 1e3);
  if (seconds < 60) return "just now";
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  return `${Math.floor(hours / 24)}d ago`;
}
function getProgressStrokeClassName(status) {
  if (status === "failed") return "text-red-400";
  if (status === "thinking") return "text-accent-400";
  if (status === "complete") return "text-emerald-400";
  if (status === "queued") return "text-primary-500";
  return "text-emerald-400";
}
function AgentProgress({
  value,
  status,
  size = 96,
  strokeWidth = 6,
  className
}) {
  const clamped = Math.max(0, Math.min(100, value));
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      width: size,
      height: size,
      viewBox: `0 0 ${size} ${size}`,
      className: cn("pointer-events-none", className),
      "aria-hidden": true,
      children: [
        /* @__PURE__ */ jsx(
          "circle",
          {
            cx: size / 2,
            cy: size / 2,
            r: radius,
            strokeWidth,
            className: "fill-none stroke-primary-300/70"
          }
        ),
        /* @__PURE__ */ jsx(
          motion.circle,
          {
            cx: size / 2,
            cy: size / 2,
            r: radius,
            strokeWidth,
            strokeLinecap: "round",
            strokeDasharray: circumference,
            initial: false,
            animate: {
              strokeDashoffset: circumference - clamped / 100 * circumference
            },
            transition: { duration: 0.45, ease: "easeOut" },
            className: cn(
              "origin-center -rotate-90 fill-none stroke-current",
              getProgressStrokeClassName(status)
            ),
            style: { transformOrigin: "50% 50%", transform: "rotate(-90deg)" }
          }
        )
      ]
    }
  );
}
function Eyes({ expression = "neutral" }) {
  switch (expression) {
    case "happy":
      return /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M5 4 L6 3 L7 4",
            stroke: "white",
            strokeWidth: "0.8",
            fill: "none"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M9 4 L10 3 L11 4",
            stroke: "white",
            strokeWidth: "0.8",
            fill: "none"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M6.5 5.5 Q8 7 9.5 5.5",
            stroke: "white",
            strokeWidth: "0.6",
            fill: "none"
          }
        )
      ] });
    case "focused":
      return /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("rect", { x: "5", y: "3.5", width: "2", height: "0.8", fill: "white" }),
        /* @__PURE__ */ jsx("rect", { x: "9", y: "3.5", width: "2", height: "0.8", fill: "white" })
      ] });
    case "confused":
      return /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("rect", { x: "5", y: "3", width: "2", height: "2", fill: "white" }),
        /* @__PURE__ */ jsx("rect", { x: "6", y: "3", width: "1", height: "1", fill: "#1e293b" }),
        /* @__PURE__ */ jsx("rect", { x: "9", y: "4", width: "2", height: "2", fill: "white" }),
        /* @__PURE__ */ jsx("rect", { x: "10", y: "4", width: "1", height: "1", fill: "#1e293b" }),
        /* @__PURE__ */ jsx("text", { x: "13", y: "2", fontSize: "3", fill: "#fbbf24", fontWeight: "bold", children: "?" })
      ] });
    case "tired":
      return /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("rect", { x: "5", y: "4", width: "2", height: "1", fill: "white", opacity: "0.7" }),
        /* @__PURE__ */ jsx("rect", { x: "9", y: "4", width: "2", height: "1", fill: "white", opacity: "0.7" }),
        /* @__PURE__ */ jsx("text", { x: "12", y: "2", fontSize: "2.5", fill: "#94a3b8", fontWeight: "bold", children: "z" }),
        /* @__PURE__ */ jsx("text", { x: "13.5", y: "0.5", fontSize: "2", fill: "#94a3b8", fontWeight: "bold", children: "z" })
      ] });
    case "excited":
      return /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("text", { x: "4.5", y: "5", fontSize: "3", fill: "#fde047", children: "★" }),
        /* @__PURE__ */ jsx("text", { x: "8.5", y: "5", fontSize: "3", fill: "#fde047", children: "★" }),
        /* @__PURE__ */ jsx("circle", { cx: "8", cy: "6", r: "0.8", fill: "white" })
      ] });
    default:
      return /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("rect", { x: "5", y: "3", width: "2", height: "2", fill: "white" }),
        /* @__PURE__ */ jsx("rect", { x: "9", y: "3", width: "2", height: "2", fill: "white" }),
        /* @__PURE__ */ jsx("rect", { x: "6", y: "3", width: "1", height: "1", fill: "#1e293b" }),
        /* @__PURE__ */ jsx("rect", { x: "10", y: "3", width: "1", height: "1", fill: "#1e293b" })
      ] });
  }
}
function PixelAvatar({
  color,
  accentColor,
  size = 32,
  status = "idle",
  expression = "neutral",
  isWalking = false,
  direction = "right",
  className
}) {
  const isActive = status === "running" || status === "thinking";
  const scaleX = direction === "left" ? -1 : 1;
  return /* @__PURE__ */ jsxs(
    motion.svg,
    {
      width: size,
      height: size,
      viewBox: "0 0 16 16",
      className: cn("pixelated", className),
      style: { imageRendering: "pixelated", transform: `scaleX(${scaleX})` },
      animate: isActive && !isWalking ? { y: [0, -2, 0] } : {},
      transition: isActive && !isWalking ? { duration: 0.8, repeat: Infinity, ease: "easeInOut" } : {},
      children: [
        /* @__PURE__ */ jsx("rect", { x: "4", y: "1", width: "8", height: "6", rx: "1", fill: color }),
        /* @__PURE__ */ jsx(Eyes, { expression }),
        /* @__PURE__ */ jsx("rect", { x: "7", y: "0", width: "2", height: "1", fill: accentColor }),
        /* @__PURE__ */ jsx("rect", { x: "3", y: "7", width: "10", height: "5", rx: "1", fill: color }),
        /* @__PURE__ */ jsx(
          "rect",
          {
            x: "6",
            y: "8",
            width: "4",
            height: "3",
            rx: "0.5",
            fill: accentColor,
            opacity: "0.6"
          }
        ),
        /* @__PURE__ */ jsx(
          motion.rect,
          {
            x: "1",
            y: "8",
            width: "2",
            height: "3",
            rx: "0.5",
            fill: color,
            animate: isWalking ? { y: [8, 7, 8, 9, 8] } : { y: 8 },
            transition: isWalking ? { duration: 0.4, repeat: Infinity } : {}
          }
        ),
        /* @__PURE__ */ jsx(
          motion.rect,
          {
            x: "13",
            y: "8",
            width: "2",
            height: "3",
            rx: "0.5",
            fill: color,
            animate: isWalking ? { y: [8, 9, 8, 7, 8] } : { y: 8 },
            transition: isWalking ? { duration: 0.4, repeat: Infinity } : {}
          }
        ),
        /* @__PURE__ */ jsx(
          motion.rect,
          {
            x: "5",
            width: "2",
            height: "3",
            rx: "0.5",
            fill: color,
            animate: isWalking ? { y: [12, 11, 12, 13, 12] } : { y: 12 },
            transition: isWalking ? { duration: 0.4, repeat: Infinity } : {}
          }
        ),
        /* @__PURE__ */ jsx(
          motion.rect,
          {
            x: "9",
            width: "2",
            height: "3",
            rx: "0.5",
            fill: color,
            animate: isWalking ? { y: [12, 13, 12, 11, 12] } : { y: 12 },
            transition: isWalking ? { duration: 0.4, repeat: Infinity } : {}
          }
        ),
        /* @__PURE__ */ jsx(
          motion.rect,
          {
            x: "4",
            width: "3",
            height: "2",
            rx: "0.5",
            fill: accentColor,
            animate: isWalking ? { y: [14, 13, 14, 15, 14] } : { y: 14 },
            transition: isWalking ? { duration: 0.4, repeat: Infinity } : {}
          }
        ),
        /* @__PURE__ */ jsx(
          motion.rect,
          {
            x: "9",
            width: "3",
            height: "2",
            rx: "0.5",
            fill: accentColor,
            animate: isWalking ? { y: [14, 15, 14, 13, 14] } : { y: 14 },
            transition: isWalking ? { duration: 0.4, repeat: Infinity } : {}
          }
        ),
        status === "thinking" && /* @__PURE__ */ jsx(
          motion.circle,
          {
            cx: "14",
            cy: "2",
            r: "1.5",
            fill: "#fbbf24",
            animate: { opacity: [0.4, 1, 0.4] },
            transition: { duration: 1.2, repeat: Infinity }
          }
        ),
        status === "complete" && /* @__PURE__ */ jsx("circle", { cx: "14", cy: "2", r: "1.5", fill: "#34d399" }),
        status === "failed" && /* @__PURE__ */ jsx("circle", { cx: "14", cy: "2", r: "1.5", fill: "#f87171" })
      ]
    }
  );
}
const ChatScreen = lazy(
  () => import("./router-COrtOO2b.js").then((n) => n.U).then((m) => ({ default: m.ChatScreen }))
);
const ORCHESTRATOR_NAME_KEY = "operations:orchestrator:name";
const DEFAULT_ORCHESTRATOR_NAME = "Main Agent";
function OrchestratorCard({
  totalAgents
}) {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [orchestratorName, setOrchestratorName] = useState(() => {
    if (typeof window === "undefined") return DEFAULT_ORCHESTRATOR_NAME;
    return window.localStorage.getItem(ORCHESTRATOR_NAME_KEY) || DEFAULT_ORCHESTRATOR_NAME;
  });
  const [draftName, setDraftName] = useState(orchestratorName);
  const openSettings = () => {
    setDraftName(orchestratorName);
    setSettingsOpen(true);
  };
  const saveSettings = () => {
    const nextName = draftName.trim() || DEFAULT_ORCHESTRATOR_NAME;
    window.localStorage.setItem(ORCHESTRATOR_NAME_KEY, nextName);
    setOrchestratorName(nextName);
    setDraftName(nextName);
    setSettingsOpen(false);
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("article", { className: "flex h-[720px] min-h-[720px] flex-col rounded-[1.75rem] border border-[var(--theme-border)] border-l-4 border-l-[var(--theme-accent)] bg-[var(--theme-card)] p-4 shadow-[0_24px_80px_var(--theme-shadow)] lg:h-[800px] lg:min-h-[800px]", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-2 px-3 pt-1 text-center lg:gap-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative flex min-h-8 w-full items-center justify-center", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-base font-semibold text-[var(--theme-text)]", children: /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center justify-center gap-2", children: [
            /* @__PURE__ */ jsx("span", { children: orchestratorName }),
            /* @__PURE__ */ jsx(
              "span",
              {
                className: cn(
                  "h-2.5 w-2.5 rounded-full bg-emerald-500",
                  totalAgents > 0 && "animate-pulse"
                ),
                "aria-label": "Active",
                title: "Active"
              }
            )
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: "absolute right-0 flex items-center", children: /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              onClick: openSettings,
              className: "inline-flex h-8 w-8 items-center justify-center rounded-lg text-[var(--theme-muted)] transition-colors hover:text-[var(--theme-text)]",
              "aria-label": "Orchestrator settings",
              title: "Orchestrator settings",
              children: /* @__PURE__ */ jsx(HugeiconsIcon, { icon: Settings01Icon, size: 16, strokeWidth: 1.8 })
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative flex size-[56px] shrink-0 items-center justify-center", children: [
          /* @__PURE__ */ jsx(
            AgentProgress,
            {
              value: 82,
              status: "running",
              size: 56,
              strokeWidth: 3,
              className: "text-emerald-500"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsx(
            PixelAvatar,
            {
              size: 44,
              color: "#f59e0b",
              accentColor: "#fbbf24",
              status: "running"
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-sm text-[var(--theme-muted)]", children: [
          "Orchestrator · ",
          totalAgents,
          " agents reporting"
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-3 flex min-h-0 flex-1 w-full flex-col overflow-hidden rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-card)]", children: /* @__PURE__ */ jsx("div", { className: "flex-1 min-h-0 overflow-hidden", children: /* @__PURE__ */ jsx(
        Suspense,
        {
          fallback: /* @__PURE__ */ jsx("div", { className: "flex h-full w-full items-center justify-center bg-[var(--theme-card)] px-4 text-sm text-[var(--theme-muted)]", children: "Loading…" }),
          children: /* @__PURE__ */ jsx("div", { className: "h-full w-full min-h-0 overflow-hidden", children: /* @__PURE__ */ jsx(
            ChatScreen,
            {
              activeFriendlyId: "main",
              compact: true,
              embedded: true,
              isNewChat: false
            }
          ) })
        }
      ) }) })
    ] }),
    settingsOpen ? /* @__PURE__ */ jsx(
      "div",
      {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-[color-mix(in_srgb,var(--theme-bg)_48%,transparent)] px-4 py-6 backdrop-blur-md",
        onClick: () => setSettingsOpen(false),
        children: /* @__PURE__ */ jsxs(
          "div",
          {
            className: "w-full max-w-md rounded-3xl border border-[var(--theme-border2)] bg-[var(--theme-card)] p-6 shadow-[0_30px_100px_var(--theme-shadow)]",
            onClick: (event) => event.stopPropagation(),
            children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-4", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                  /* @__PURE__ */ jsx("div", { className: "flex size-11 items-center justify-center rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-bg)] text-[var(--theme-accent)]", children: /* @__PURE__ */ jsx(HugeiconsIcon, { icon: Settings01Icon, size: 20, strokeWidth: 1.8 }) }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-[var(--theme-text)]", children: "Orchestrator Settings" }),
                    /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-[var(--theme-muted-2)]", children: "Update the display name used on this card." })
                  ] })
                ] }),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => setSettingsOpen(false),
                    className: "inline-flex size-10 items-center justify-center rounded-xl border border-[var(--theme-border)] bg-[var(--theme-card2)] text-[var(--theme-muted)] transition-colors hover:border-[var(--theme-accent)] hover:text-[var(--theme-accent-strong)]",
                    "aria-label": "Close orchestrator settings",
                    children: /* @__PURE__ */ jsx(HugeiconsIcon, { icon: Cancel01Icon, size: 18, strokeWidth: 1.8 })
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("label", { className: "mt-6 block space-y-2", children: [
                /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-[var(--theme-text)]", children: "Display name" }),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    value: draftName,
                    onChange: (event) => setDraftName(event.target.value),
                    placeholder: DEFAULT_ORCHESTRATOR_NAME,
                    className: "w-full rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-bg)] px-4 py-3 text-sm text-[var(--theme-text)] outline-none focus:border-[var(--theme-accent)]"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "mt-6 flex items-center justify-end gap-3", children: [
                /* @__PURE__ */ jsx(Button, { type: "button", variant: "secondary", onClick: () => setSettingsOpen(false), children: "Close" }),
                /* @__PURE__ */ jsx(Button, { type: "button", onClick: saveSettings, children: "Save" })
              ] })
            ]
          }
        )
      }
    ) : null
  ] });
}
function asRecord(value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return {};
  }
  return value;
}
function readStringCandidate(...values) {
  for (const value of values) {
    if (typeof value === "string" && value.trim().length > 0) {
      return value.trim();
    }
  }
  return void 0;
}
function readNumberCandidate(...values) {
  for (const value of values) {
    if (typeof value === "number" && Number.isFinite(value)) {
      return value;
    }
    if (typeof value === "string" && value.trim().length > 0) {
      const parsed = Number(value);
      if (Number.isFinite(parsed)) return parsed;
    }
  }
  return void 0;
}
function normalizeStatus(value) {
  if (typeof value !== "string") return "unknown";
  const normalized = value.trim().toLowerCase();
  if (normalized.includes("success") || normalized === "ok" || normalized === "completed") {
    return "success";
  }
  if (normalized.includes("error") || normalized.includes("fail")) {
    return "error";
  }
  if (normalized.includes("run")) return "running";
  if (normalized.includes("queue") || normalized.includes("pending"))
    return "queued";
  return "unknown";
}
function normalizeTimestamp(value) {
  if (typeof value === "string" && value.trim().length > 0) {
    const parsed = Date.parse(value);
    if (!Number.isNaN(parsed)) return new Date(parsed).toISOString();
    return value.trim();
  }
  if (typeof value === "number" && Number.isFinite(value)) {
    const milliseconds = value > 1e12 ? value : value * 1e3;
    return new Date(milliseconds).toISOString();
  }
  return null;
}
function normalizeRun(row, index) {
  const output = row.output;
  const outputRecord = asRecord(output);
  const deliveryRecord = asRecord(
    row.delivery ?? row.deliveryResult ?? row.result ?? outputRecord.delivery
  );
  const contextRecord = asRecord(row.context ?? outputRecord.context);
  return {
    id: typeof row.id === "string" && row.id || typeof row.runId === "string" && row.runId || `run-${index}`,
    status: normalizeStatus(row.status ?? row.state ?? row.result),
    startedAt: normalizeTimestamp(
      row.startedAt ?? row.started_at ?? row.createdAt ?? row.timestamp
    ),
    finishedAt: normalizeTimestamp(
      row.finishedAt ?? row.finished_at ?? row.completedAt
    ),
    durationMs: readNumberCandidate(
      row.durationMs,
      row.duration,
      outputRecord.durationMs,
      outputRecord.duration
    ),
    error: typeof row.error === "string" ? row.error : typeof row.message === "string" ? row.message : void 0,
    deliverySummary: readStringCandidate(
      row.deliverySummary,
      row.summary,
      row.deliveryText,
      row.deliveryMessage,
      deliveryRecord.summary,
      deliveryRecord.text,
      deliveryRecord.message,
      outputRecord.deliverySummary,
      outputRecord.summary,
      outputRecord.text,
      outputRecord.message
    ),
    chatSessionKey: readStringCandidate(
      row.chatSessionKey,
      row.friendlyId,
      row.sessionKey,
      row.sessionId,
      contextRecord.friendlyId,
      contextRecord.sessionKey,
      outputRecord.chatSessionKey,
      outputRecord.friendlyId,
      outputRecord.sessionKey,
      outputRecord.sessionId
    ),
    output
  };
}
function normalizeJob(row, index) {
  const lastRunRow = row.lastRun;
  const lastRun = lastRunRow && typeof lastRunRow === "object" ? normalizeRun(lastRunRow, index) : normalizeRun(
    {
      id: row.lastRunId,
      status: row.lastRunStatus,
      startedAt: row.lastRunAt,
      finishedAt: row.lastRunCompletedAt,
      durationMs: row.lastRunDurationMs,
      error: row.lastRunError
    },
    index
  );
  return {
    id: typeof row.id === "string" && row.id || typeof row.jobId === "string" && row.jobId || `job-${index}`,
    name: typeof row.name === "string" && row.name || typeof row.title === "string" && row.title || `Cron Job ${index + 1}`,
    schedule: typeof row.schedule === "string" && row.schedule || typeof row.cron === "string" && row.cron || "* * * * *",
    enabled: Boolean(row.enabled),
    payload: row.payload,
    deliveryConfig: row.deliveryConfig,
    status: typeof row.status === "string" ? row.status : void 0,
    description: typeof row.description === "string" ? row.description : void 0,
    lastRun
  };
}
function friendlyError(raw) {
  if (!raw) return "Request failed";
  if (raw.includes("require 'croniter'") || raw.includes("croniter")) {
    return `Cron support missing: reinstall hermes-agent with 'pip install "hermes-agent[cron]"' (or 'pipx install --force hermes-agent[cron]'), then restart the gateway.`;
  }
  return raw;
}
async function readError(response) {
  try {
    const payload = await response.json();
    if (typeof payload.error === "string") return friendlyError(payload.error);
    if (typeof payload.message === "string") return friendlyError(payload.message);
    return JSON.stringify(payload);
  } catch {
    const text = await response.text().catch(() => "");
    return friendlyError(text || response.statusText || "Request failed");
  }
}
function readPayloadErrorMessage(payload) {
  if (!payload || typeof payload !== "object") return null;
  if ("error" in payload && typeof payload.error === "string") {
    return payload.error;
  }
  if ("message" in payload && typeof payload.message === "string") {
    return payload.message;
  }
  return null;
}
function throwIfPayloadNotOk(payload) {
  if (!payload || typeof payload !== "object") return;
  if ("ok" in payload && payload.ok === false) {
    throw new Error(readPayloadErrorMessage(payload) ?? "Request failed");
  }
}
async function readJsonAndCheckOk(response) {
  const payload = await response.json();
  throwIfPayloadNotOk(payload);
  return payload;
}
async function fetchCronJobs() {
  const response = await fetch("/api/hermes-jobs");
  if (!response.ok) {
    throw new Error(await readError(response));
  }
  const payload = await readJsonAndCheckOk(response);
  const rows = Array.isArray(payload.jobs) ? payload.jobs : [];
  return rows.map(function mapJob(job, index) {
    return normalizeJob(job, index);
  });
}
async function runCronJob(jobId) {
  const response = await fetch(
    `/api/hermes-jobs/${encodeURIComponent(jobId)}?action=run`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" }
    }
  );
  if (!response.ok) {
    throw new Error(await readError(response));
  }
  return readJsonAndCheckOk(response);
}
async function toggleCronJob(payload) {
  const response = await fetch(
    `/api/hermes-jobs/${encodeURIComponent(payload.jobId)}`,
    {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ enabled: payload.enabled })
    }
  );
  if (!response.ok) {
    throw new Error(await readError(response));
  }
  return readJsonAndCheckOk(response);
}
function extractMessageText(message) {
  if (typeof message.content === "string") return message.content;
  if (Array.isArray(message.content)) {
    return message.content.filter((part) => !part.type || part.type === "text").map((part) => part.text ?? "").join("\n");
  }
  return "";
}
function normalizeMessage(message, index) {
  const content = extractMessageText(message).trim();
  if (!content) return null;
  const role = message.role === "assistant" ? "assistant" : message.role === "user" ? "user" : "system";
  return {
    id: `${role}-${message.timestamp ?? index}-${index}`,
    role,
    content,
    timestamp: message.timestamp
  };
}
function useAgentChat(sessionKey) {
  const queryClient = useQueryClient();
  const historyQuery = useQuery({
    queryKey: ["operations", "chat", sessionKey],
    queryFn: async () => {
      try {
        const res = await fetch(`/api/history?sessionKey=${encodeURIComponent(sessionKey)}&limit=50`);
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data.messages)) return data.messages;
        }
      } catch {
      }
      const response = await fetchSessionHistory(sessionKey, { limit: 50 });
      if (response.ok === false) return [];
      return Array.isArray(response.messages) ? response.messages : [];
    },
    refetchInterval: 5e3,
    enabled: Boolean(sessionKey)
  });
  const sendMutation = useMutation({
    mutationFn: async (message) => {
      await sendToSession(sessionKey, message);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["operations", "chat", sessionKey]
      });
      await queryClient.invalidateQueries({
        queryKey: ["operations", "sessions"]
      });
    }
  });
  const messages = useMemo(
    () => (historyQuery.data ?? []).map(normalizeMessage).filter((message) => Boolean(message)),
    [historyQuery.data]
  );
  return {
    messages,
    sendMessage: sendMutation.mutateAsync,
    isLoading: historyQuery.isPending,
    isRefreshing: historyQuery.isFetching,
    isSending: sendMutation.isPending,
    error: historyQuery.error instanceof Error && historyQuery.error.message || sendMutation.error instanceof Error && sendMutation.error.message || null,
    refresh: historyQuery.refetch
  };
}
function getStatusStyles(status) {
  if (status === "error") {
    return {
      dot: "bg-red-500",
      ring: "text-red-500",
      label: "Error"
    };
  }
  if (status === "active") {
    return {
      dot: "bg-emerald-500",
      ring: "text-emerald-500",
      label: "Active"
    };
  }
  return {
    dot: "bg-primary-300",
    ring: "text-primary-300",
    label: "Idle"
  };
}
function stripEmojiPrefix(value) {
  return value.replace(
    new RegExp("^((\\p{Extended_Pictographic}|\\p{Regional_Indicator}|\\p{Emoji_Presentation}|\\p{Emoji}\\uFE0F)(\\u200D(\\p{Extended_Pictographic}|\\p{Regional_Indicator}|\\p{Emoji_Presentation}|\\p{Emoji}\\uFE0F))*)\\s*", "u"),
    ""
  ).trim();
}
function displayJobName(jobName, agentId) {
  const prefix = `ops:${agentId}:`;
  if (jobName.startsWith(prefix)) {
    return jobName.slice(prefix.length).replace(/-/g, " ");
  }
  return jobName;
}
function describeJob(job) {
  return job.description?.trim() || job.schedule;
}
function OperationsInlineChat({
  agentName,
  messages,
  sendMessage,
  isSending,
  error
}) {
  const [draft, setDraft] = useState("");
  const scrollRef = useRef(null);
  const renderedMessages = useMemo(() => messages.slice(-50), [messages]);
  useEffect(() => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [renderedMessages]);
  async function handleSend() {
    const message = draft.trim();
    if (!message || isSending) return;
    await sendMessage(message);
    setDraft("");
  }
  return /* @__PURE__ */ jsxs("section", { className: "flex min-h-0 flex-1 flex-col rounded-[1.25rem] border border-[var(--theme-border)] bg-[var(--theme-card)]", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        ref: scrollRef,
        className: "flex min-h-[100px] max-h-[160px] flex-1 flex-col justify-center overflow-y-auto px-3 py-3",
        children: renderedMessages.length > 0 ? /* @__PURE__ */ jsx("div", { className: "space-y-2", children: renderedMessages.map((message) => {
          const isUser = message.role === "user";
          return /* @__PURE__ */ jsx(
            "div",
            {
              className: cn("flex", isUser ? "justify-end" : "justify-start"),
              children: /* @__PURE__ */ jsx(
                "div",
                {
                  className: cn(
                    "max-w-[92%] rounded-2xl px-3 py-2 text-xs leading-relaxed shadow-sm",
                    isUser ? "bg-[var(--theme-accent-soft)] text-[var(--theme-text)]" : "bg-[var(--theme-card2)] text-[var(--theme-text)]"
                  ),
                  children: message.role === "assistant" ? /* @__PURE__ */ jsx(Markdown, { children: message.content }) : /* @__PURE__ */ jsx("p", { className: "whitespace-pre-wrap", children: message.content })
                }
              )
            },
            message.id
          );
        }) }) : /* @__PURE__ */ jsx("p", { className: "text-center text-xs text-[var(--theme-muted)]", children: "Send a message..." })
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "border-t border-[var(--theme-border)] px-3 py-3", children: [
      error ? /* @__PURE__ */ jsx("p", { className: "mb-2 text-xs text-red-600", children: error }) : null,
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 rounded-[1rem] border border-[var(--theme-border)] bg-[var(--theme-bg)] p-2", children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            value: draft,
            onChange: (event) => setDraft(event.target.value),
            onKeyDown: (event) => {
              if (event.key === "Enter" && !event.shiftKey) {
                event.preventDefault();
                void handleSend();
              }
            },
            placeholder: `Message ${stripEmojiPrefix(agentName)}...`,
            className: "h-8 flex-1 bg-transparent px-1.5 text-xs text-[var(--theme-text)] outline-none placeholder:text-[var(--theme-muted)]"
          }
        ),
        /* @__PURE__ */ jsx(
          Button,
          {
            size: "icon-sm",
            className: "rounded-lg bg-[var(--theme-accent)] text-primary-950 hover:bg-[var(--theme-accent-strong)]",
            onClick: () => void handleSend(),
            disabled: !draft.trim() || isSending,
            "aria-label": isSending ? "Sending message" : "Send message",
            children: /* @__PURE__ */ jsx(HugeiconsIcon, { icon: ArrowRight01Icon, size: 15, strokeWidth: 1.8 })
          }
        )
      ] })
    ] })
  ] });
}
function OperationsAgentCard({
  agent,
  onOpenSettings
}) {
  const queryClient = useQueryClient();
  const status = getStatusStyles(agent.status);
  const displayName = stripEmojiPrefix(agent.name);
  const [showCronPanel, setShowCronPanel] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const { messages, sendMessage, isSending, error } = useAgentChat(agent.sessionKey);
  const cronJobCount = agent.jobs.length;
  const isActive = agent.status === "active" && !isPaused;
  const toggleMutation = useMutation({
    mutationFn: async (payload) => toggleCronJob(payload),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["operations", "cron"] });
    },
    onError: (mutationError) => {
      toast(
        mutationError instanceof Error ? mutationError.message : "Failed to update cron job",
        { type: "error" }
      );
    }
  });
  const runCronMutation = useMutation({
    mutationFn: async (jobId) => runCronJob(jobId),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["operations", "cron"] });
      toast("Cron job started", { type: "success" });
    },
    onError: (mutationError) => {
      toast(
        mutationError instanceof Error ? mutationError.message : "Failed to run cron job",
        { type: "error" }
      );
    }
  });
  async function handlePlayPause() {
    if (isActive) {
      setIsPaused(true);
      return;
    }
    setIsPaused(false);
    await sendMessage("Run your primary task now");
  }
  return /* @__PURE__ */ jsxs("article", { className: "flex min-h-[19rem] flex-col rounded-[1.5rem] border border-[var(--theme-border)] bg-[var(--theme-card)] p-3 shadow-[0_20px_60px_color-mix(in_srgb,var(--theme-shadow)_14%,transparent)]", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative flex min-h-8 items-center", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute left-0 flex items-center", children: /* @__PURE__ */ jsxs(
        "button",
        {
          type: "button",
          "aria-label": cronJobCount > 0 ? `${cronJobCount} cron jobs for ${displayName}` : `No cron jobs for ${displayName}`,
          onClick: () => setShowCronPanel((value) => !value),
          className: cn(
            "inline-flex h-8 shrink-0 items-center gap-1 rounded-lg px-1.5 text-[var(--theme-muted)] transition-colors hover:bg-[var(--theme-bg)] hover:text-[var(--theme-text)]",
            showCronPanel && "bg-[var(--theme-bg)] text-[var(--theme-text)]"
          ),
          children: [
            /* @__PURE__ */ jsx(HugeiconsIcon, { icon: Clock01Icon, size: 14, strokeWidth: 1.9 }),
            cronJobCount > 0 ? /* @__PURE__ */ jsx("span", { className: "inline-flex min-w-4 items-center justify-center rounded-full bg-[var(--theme-bg)] px-1.5 text-[10px] font-medium text-[var(--theme-text)]", children: cronJobCount }) : null
          ]
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "flex w-full justify-center px-20", children: /* @__PURE__ */ jsx("h3", { className: "min-w-0 text-center text-sm font-semibold text-[var(--theme-text)]", children: /* @__PURE__ */ jsxs("span", { className: "inline-flex max-w-full items-center justify-center gap-2", children: [
        /* @__PURE__ */ jsx("span", { className: "truncate", children: displayName }),
        /* @__PURE__ */ jsx(
          "span",
          {
            className: cn(
              "h-2 w-2 shrink-0 rounded-full",
              agent.status === "active" && !isPaused && "animate-pulse",
              status.dot
            ),
            "aria-label": status.label,
            title: status.label
          }
        )
      ] }) }) }),
      /* @__PURE__ */ jsxs("div", { className: "absolute right-0 flex items-center gap-1", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            "aria-label": isActive ? `Pause ${displayName}` : `Run ${displayName} now`,
            onClick: () => void handlePlayPause(),
            disabled: isSending && !isActive,
            className: "inline-flex h-8 w-8 items-center justify-center rounded-lg text-[var(--theme-muted)] transition-colors hover:bg-[var(--theme-bg)] hover:text-[var(--theme-text)] disabled:cursor-not-allowed disabled:opacity-60",
            children: /* @__PURE__ */ jsx(
              HugeiconsIcon,
              {
                icon: isActive ? PauseIcon : PlayIcon,
                size: 16,
                strokeWidth: 1.8
              }
            )
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            "aria-label": `Open settings for ${displayName}`,
            onClick: () => onOpenSettings(agent.id),
            className: "inline-flex h-8 w-8 items-center justify-center rounded-lg text-[var(--theme-muted)] transition-colors hover:bg-[var(--theme-bg)] hover:text-[var(--theme-text)]",
            children: /* @__PURE__ */ jsx(HugeiconsIcon, { icon: Settings01Icon, size: 16, strokeWidth: 1.8 })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-1 px-2 py-2 text-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative flex size-12 shrink-0 items-center justify-center", children: [
        /* @__PURE__ */ jsx(
          AgentProgress,
          {
            value: agent.progressValue,
            status: agent.progressStatus,
            size: 48,
            strokeWidth: 2.5,
            className: status.ring
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsx(
          PixelAvatar,
          {
            size: 40,
            color: agent.meta.color,
            accentColor: "#ffffff",
            status: agent.status === "error" ? "failed" : agent.status === "active" ? "running" : "idle"
          }
        ) })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "w-full truncate text-[11px] text-[var(--theme-muted)]", children: agent.meta.description || "No description" }),
      /* @__PURE__ */ jsx("p", { className: "w-full truncate text-[10px] text-[var(--theme-muted)]/80", children: agent.jobs.length > 0 ? `${agent.jobs.length} scheduled job${agent.jobs.length === 1 ? "" : "s"}` : "Manual only" })
    ] }),
    /* @__PURE__ */ jsx(AnimatePresence, { initial: false, children: showCronPanel ? /* @__PURE__ */ jsx(
      motion.section,
      {
        initial: { height: 0, opacity: 0, y: -8 },
        animate: { height: "auto", opacity: 1, y: 0 },
        exit: { height: 0, opacity: 0, y: -8 },
        transition: { duration: 0.18, ease: "easeOut" },
        className: "overflow-hidden",
        children: /* @__PURE__ */ jsx("div", { className: "mb-4 rounded-[1.25rem] border border-[var(--theme-border)] bg-[var(--theme-card)] px-3 py-3", children: agent.jobs.length > 0 ? /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx("div", { className: "max-h-[200px] space-y-2 overflow-y-auto pr-1", children: agent.jobs.map((job) => /* @__PURE__ */ jsxs(
            "div",
            {
              className: "flex items-center gap-2 rounded-xl border border-[var(--theme-border)] bg-[var(--theme-bg)] px-2.5 py-2",
              children: [
                /* @__PURE__ */ jsxs("label", { className: "relative inline-flex cursor-pointer items-center", children: [
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "checkbox",
                      checked: job.enabled,
                      onChange: () => toggleMutation.mutate({
                        jobId: job.id,
                        enabled: !job.enabled
                      }),
                      className: "peer sr-only",
                      "aria-label": job.enabled ? "Disable job" : "Enable job"
                    }
                  ),
                  /* @__PURE__ */ jsx("span", { className: "h-5 w-9 rounded-full bg-primary-200 transition-colors peer-checked:bg-[var(--theme-accent)]" }),
                  /* @__PURE__ */ jsx("span", { className: "absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-[var(--theme-card)] shadow-sm transition-transform peer-checked:translate-x-4" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "min-w-0 flex-1", children: [
                  /* @__PURE__ */ jsx("p", { className: "truncate text-xs font-medium text-[var(--theme-text)]", children: displayJobName(job.name, agent.id) }),
                  /* @__PURE__ */ jsx("p", { className: "truncate text-[11px] text-[var(--theme-muted)]", children: describeJob(job) })
                ] }),
                /* @__PURE__ */ jsx(
                  Button,
                  {
                    size: "icon-sm",
                    variant: "secondary",
                    className: "h-7 w-7 rounded-lg border border-[var(--theme-border)] bg-[var(--theme-card)] text-[var(--theme-text)] hover:bg-[var(--theme-card2)]",
                    onClick: () => runCronMutation.mutate(job.id),
                    "aria-label": `Run ${displayJobName(job.name, agent.id)} now`,
                    children: /* @__PURE__ */ jsx(HugeiconsIcon, { icon: PlayIcon, size: 14, strokeWidth: 1.9 })
                  }
                )
              ]
            },
            job.id
          )) }),
          /* @__PURE__ */ jsx("div", { className: "mt-3 flex justify-end", children: /* @__PURE__ */ jsx(
            Button,
            {
              render: /* @__PURE__ */ jsx("a", { href: "/cron" }),
              variant: "secondary",
              className: "h-8 rounded-lg border border-[var(--theme-border)] bg-[var(--theme-bg)] px-3 text-xs font-medium text-[var(--theme-text)] hover:bg-[var(--theme-card2)]",
              children: "+ Add Job"
            }
          ) })
        ] }) : /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-3", children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs text-[var(--theme-muted)]", children: "No scheduled jobs" }),
          /* @__PURE__ */ jsx(
            Button,
            {
              render: /* @__PURE__ */ jsx("a", { href: "/cron" }),
              variant: "secondary",
              className: "h-8 rounded-lg border border-[var(--theme-border)] bg-[var(--theme-bg)] px-3 text-xs font-medium text-[var(--theme-text)] hover:bg-[var(--theme-card2)]",
              children: "+ Add Job"
            }
          )
        ] }) })
      },
      "cron-panel"
    ) : null }),
    /* @__PURE__ */ jsx("div", { className: "min-h-0 flex-1", children: /* @__PURE__ */ jsx(
      OperationsInlineChat,
      {
        agentName: agent.name,
        messages,
        sendMessage,
        isSending,
        error
      }
    ) })
  ] });
}
function normalizeModel$2(model) {
  if (typeof model === "string") {
    return {
      id: model,
      provider: model.includes("/") ? model.split("/")[0] ?? "model" : "model",
      name: model.split("/").pop() ?? model
    };
  }
  const id = model.id ?? model.alias ?? model.model ?? "";
  if (!id) return null;
  return {
    id,
    provider: model.provider ?? id.split("/")[0] ?? "model",
    name: model.label ?? model.displayName ?? model.name ?? id.split("/").pop() ?? id
  };
}
function ModelSelector$2({
  value,
  onChange,
  models
}) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);
  useEffect(() => {
    if (!open) return;
    function handlePointerDown(event) {
      if (!containerRef.current?.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, [open]);
  const selected = (() => {
    if (!value) return null;
    const slashIndex = value.indexOf("/");
    if (slashIndex > 0) {
      const valueProvider = value.slice(0, slashIndex);
      const valueModelId = value.slice(slashIndex + 1);
      const exactMatch = models.find(
        (m) => m.provider === valueProvider && (m.id === value || m.id === valueModelId)
      );
      if (exactMatch) return exactMatch;
    }
    const idMatch = models.find((m) => m.id === value);
    if (idMatch) return idMatch;
    return {
      id: value,
      provider: slashIndex > 0 ? value.slice(0, slashIndex) : "model",
      name: value.split("/").pop() ?? value
    };
  })();
  return /* @__PURE__ */ jsxs("div", { className: "relative", ref: containerRef, children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        type: "button",
        onClick: () => setOpen((current) => !current),
        className: "inline-flex min-h-[3rem] w-full items-center justify-between gap-3 rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-bg)] px-4 py-3 text-left text-sm text-[var(--theme-text)] shadow-[0_8px_24px_color-mix(in_srgb,var(--theme-shadow)_18%,transparent)]",
        children: [
          /* @__PURE__ */ jsx("span", { className: "truncate", children: selected ? `${selected.provider} / ${selected.name}` : "Default (auto)" }),
          /* @__PURE__ */ jsx(
            HugeiconsIcon,
            {
              icon: ArrowDown01Icon,
              size: 16,
              strokeWidth: 1.8,
              className: cn(
                "text-[var(--theme-muted)] transition-transform",
                open && "rotate-180"
              )
            }
          )
        ]
      }
    ),
    open ? /* @__PURE__ */ jsx("div", { className: "absolute left-0 top-[calc(100%+0.5rem)] z-[80] w-full overflow-hidden rounded-2xl border border-[var(--theme-border2)] bg-[var(--theme-card)] shadow-[0_24px_80px_var(--theme-shadow)]", children: /* @__PURE__ */ jsxs("div", { className: "max-h-80 overflow-y-auto p-2", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          onClick: () => {
            onChange("");
            setOpen(false);
          },
          className: cn(
            "flex w-full rounded-xl px-3 py-2.5 text-left text-sm",
            !value ? "bg-[var(--theme-accent-soft)]" : "hover:bg-[var(--theme-bg)]"
          ),
          children: "Default (auto)"
        }
      ),
      models.map((model) => /* @__PURE__ */ jsxs(
        "button",
        {
          type: "button",
          onClick: () => {
            onChange(model.id);
            setOpen(false);
          },
          className: cn(
            "mt-1 flex w-full rounded-xl px-3 py-2.5 text-left text-sm",
            value === model.id ? "bg-[var(--theme-accent-soft)]" : "hover:bg-[var(--theme-bg)]"
          ),
          children: [
            model.provider,
            " / ",
            model.name
          ]
        },
        model.id
      ))
    ] }) }) : null
  ] });
}
function OperationsAgentDetail({
  open,
  agent,
  onClose,
  onSave,
  onDelete,
  isSaving,
  isDeleting
}) {
  const [name, setName] = useState("");
  const [emoji, setEmoji] = useState("🤖");
  const [model, setModel] = useState("");
  const [systemPrompt, setSystemPrompt] = useState("");
  useEffect(() => {
    if (!agent || !open) return;
    setName(agent.name);
    setEmoji(agent.meta.emoji);
    setModel(agent.model || "");
    setSystemPrompt(agent.meta.systemPrompt);
  }, [agent, open]);
  const modelsQuery = useQuery({
    queryKey: ["operations", "models"],
    queryFn: fetchModels,
    enabled: open
  });
  const models = useMemo(
    () => (modelsQuery.data?.models ?? []).map(normalizeModel$2).filter((entry) => Boolean(entry)),
    [modelsQuery.data?.models]
  );
  if (!open || !agent) return null;
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: "fixed inset-0 z-50 flex items-center justify-center bg-[color-mix(in_srgb,var(--theme-bg)_55%,transparent)] px-4 py-6 backdrop-blur-md",
      onClick: onClose,
      children: /* @__PURE__ */ jsxs(
        "div",
        {
          className: "w-full max-w-3xl rounded-3xl border border-[var(--theme-border2)] bg-[var(--theme-card)] p-5 shadow-[0_24px_80px_var(--theme-shadow)] sm:p-6",
          onClick: (event) => event.stopPropagation(),
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsx("div", { className: "flex size-11 items-center justify-center rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-bg)] text-[var(--theme-accent)]", children: /* @__PURE__ */ jsx(HugeiconsIcon, { icon: Settings01Icon, size: 20, strokeWidth: 1.8 }) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.16em] text-[var(--theme-muted)]", children: "Agent Settings" }),
                  /* @__PURE__ */ jsx("h2", { className: "mt-2 text-2xl font-semibold tracking-tight text-[var(--theme-text)]", children: agent.name }),
                  /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-[var(--theme-muted-2)]", children: "Update this agent without leaving the roster." })
                ] })
              ] }),
              /* @__PURE__ */ jsx(
                "button",
                {
                  type: "button",
                  onClick: onClose,
                  className: "inline-flex size-10 items-center justify-center rounded-xl border border-[var(--theme-border)] bg-[var(--theme-card2)] text-lg text-[var(--theme-muted)] transition-colors hover:border-[var(--theme-accent)] hover:text-[var(--theme-accent-strong)]",
                  "aria-label": "Close agent settings",
                  children: /* @__PURE__ */ jsx(HugeiconsIcon, { icon: Cancel01Icon, size: 18, strokeWidth: 1.8 })
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-6 grid gap-4 md:grid-cols-[1.2fr_0.6fr]", children: [
              /* @__PURE__ */ jsxs("label", { className: "space-y-2", children: [
                /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-[var(--theme-text)]", children: "Name" }),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    value: name,
                    onChange: (event) => setName(event.target.value),
                    className: "w-full rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-bg)] px-4 py-3 text-sm text-[var(--theme-text)] outline-none focus:border-[var(--theme-accent)]"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("label", { className: "space-y-2", children: [
                /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-[var(--theme-text)]", children: "Emoji" }),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    value: emoji,
                    onChange: (event) => setEmoji(event.target.value),
                    className: "w-full rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-bg)] px-4 py-3 text-sm text-[var(--theme-text)] outline-none focus:border-[var(--theme-accent)]"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxs("label", { className: "mt-4 block space-y-2", children: [
              /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-[var(--theme-text)]", children: "Model" }),
              /* @__PURE__ */ jsx(ModelSelector$2, { value: model, onChange: setModel, models })
            ] }),
            /* @__PURE__ */ jsxs("label", { className: "mt-4 block space-y-2", children: [
              /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-[var(--theme-text)]", children: "System Prompt" }),
              /* @__PURE__ */ jsx(
                "textarea",
                {
                  value: systemPrompt,
                  onChange: (event) => setSystemPrompt(event.target.value),
                  className: "min-h-[220px] w-full rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-bg)] px-4 py-3 text-sm text-[var(--theme-text)] outline-none focus:border-[var(--theme-accent)]"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-col gap-3 border-t border-[var(--theme-border)] pt-4 sm:flex-row sm:items-center sm:justify-between", children: [
              /* @__PURE__ */ jsxs(
                Button,
                {
                  variant: "ghost",
                  className: "justify-start text-red-600 hover:bg-red-50 hover:text-red-700",
                  onClick: () => void onDelete(agent.id),
                  disabled: isDeleting || isSaving,
                  children: [
                    /* @__PURE__ */ jsx(HugeiconsIcon, { icon: Delete02Icon, size: 16, strokeWidth: 1.8 }),
                    isDeleting ? "Deleting…" : "Delete agent"
                  ]
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-end gap-3", children: [
                /* @__PURE__ */ jsx(
                  Button,
                  {
                    variant: "secondary",
                    className: "border border-[var(--theme-border)] bg-[var(--theme-bg)] text-[var(--theme-text)] hover:bg-[var(--theme-card2)]",
                    onClick: onClose,
                    disabled: isDeleting,
                    children: "Cancel"
                  }
                ),
                /* @__PURE__ */ jsx(
                  Button,
                  {
                    className: "bg-[var(--theme-accent)] text-primary-950 hover:bg-[var(--theme-accent-strong)]",
                    onClick: () => void onSave({
                      agentId: agent.id,
                      name,
                      model,
                      emoji,
                      systemPrompt
                    }),
                    disabled: isSaving || isDeleting,
                    children: isSaving ? "Saving…" : "Save"
                  }
                )
              ] })
            ] })
          ]
        }
      )
    }
  );
}
const PRESET_OPTIONS = [
  {
    id: "blank",
    name: "Blank",
    emoji: "✨",
    description: "",
    systemPrompt: ""
  },
  ...Object.entries(AGENT_PRESETS).filter(([id]) => !id.startsWith("pc1-")).map(([id, preset]) => ({
    id,
    name: id.charAt(0).toUpperCase() + id.slice(1),
    emoji: preset.emoji,
    description: preset.description,
    systemPrompt: preset.systemPrompt
  }))
];
function normalizeModel$1(model) {
  if (typeof model === "string") {
    return {
      id: model,
      provider: model.includes("/") ? model.split("/")[0] ?? "model" : "model",
      name: model.split("/").pop() ?? model
    };
  }
  const id = model.id ?? model.alias ?? model.model ?? "";
  if (!id) return null;
  return {
    id,
    provider: model.provider ?? id.split("/")[0] ?? "model",
    name: model.label ?? model.displayName ?? model.name ?? id.split("/").pop() ?? id
  };
}
function ModelSelector$1({
  value,
  onChange,
  models
}) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);
  useEffect(() => {
    if (!open) return;
    function handlePointerDown(event) {
      if (!containerRef.current?.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, [open]);
  const selected = models.find((model) => model.id === value);
  return /* @__PURE__ */ jsxs("div", { className: "relative", ref: containerRef, children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        type: "button",
        onClick: () => setOpen((current) => !current),
        className: "inline-flex min-h-[3rem] w-full items-center justify-between gap-3 rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-bg)] px-4 py-3 text-left text-sm text-[var(--theme-text)] shadow-[0_8px_24px_color-mix(in_srgb,var(--theme-shadow)_18%,transparent)]",
        children: [
          /* @__PURE__ */ jsx("span", { className: "truncate", children: selected ? `${selected.provider} / ${selected.name}` : "Default (auto)" }),
          /* @__PURE__ */ jsx(
            HugeiconsIcon,
            {
              icon: ArrowDown01Icon,
              size: 16,
              strokeWidth: 1.8,
              className: cn("text-[var(--theme-muted)] transition-transform", open && "rotate-180")
            }
          )
        ]
      }
    ),
    open ? /* @__PURE__ */ jsx("div", { className: "absolute left-0 top-[calc(100%+0.5rem)] z-[80] w-full overflow-hidden rounded-2xl border border-[var(--theme-border2)] bg-[var(--theme-card)] shadow-[0_24px_80px_var(--theme-shadow)]", children: /* @__PURE__ */ jsx("div", { className: "max-h-80 overflow-y-auto p-2", children: models.map((model) => /* @__PURE__ */ jsxs(
      "button",
      {
        type: "button",
        onClick: () => {
          onChange(model.id);
          setOpen(false);
        },
        className: cn(
          "flex w-full rounded-xl px-3 py-2.5 text-left text-sm",
          value === model.id ? "bg-[var(--theme-accent-soft)]" : "hover:bg-[var(--theme-bg)]"
        ),
        children: [
          model.provider,
          " / ",
          model.name
        ]
      },
      model.id
    )) }) }) : null
  ] });
}
function OperationsNewAgentModal({
  open,
  defaultModel,
  onClose,
  onCreate,
  isSaving
}) {
  const [presetId, setPresetId] = useState("blank");
  const [name, setName] = useState("");
  const [emoji, setEmoji] = useState("🤖");
  const [model, setModel] = useState(defaultModel);
  const [description, setDescription] = useState("");
  const [systemPrompt, setSystemPrompt] = useState("");
  useEffect(() => {
    if (!open) return;
    setPresetId("blank");
    setName("");
    setEmoji("🤖");
    setModel(defaultModel);
    setDescription("");
    setSystemPrompt("");
  }, [defaultModel, open]);
  function applyPreset(next) {
    setPresetId(next);
    const preset = PRESET_OPTIONS.find((entry) => entry.id === next);
    if (!preset || preset.id === "blank") return;
    setName((current) => current.trim() || preset.name);
    setEmoji(preset.emoji);
    setDescription(preset.description);
    setSystemPrompt(preset.systemPrompt);
  }
  const modelsQuery = useQuery({
    queryKey: ["operations", "models"],
    queryFn: fetchModels,
    enabled: open
  });
  const models = useMemo(
    () => (modelsQuery.data?.models ?? []).map(normalizeModel$1).filter((entry) => Boolean(entry)),
    [modelsQuery.data?.models]
  );
  if (!open) return null;
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: "fixed inset-0 z-50 flex items-center justify-center bg-[color-mix(in_srgb,var(--theme-bg)_48%,transparent)] px-4 py-6 backdrop-blur-md",
      onClick: onClose,
      children: /* @__PURE__ */ jsxs(
        "div",
        {
          className: "w-full max-w-3xl rounded-3xl border border-[var(--theme-border2)] bg-[var(--theme-card)] p-6 shadow-[0_30px_100px_var(--theme-shadow)]",
          onClick: (event) => event.stopPropagation(),
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsx("div", { className: "flex size-11 items-center justify-center rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-bg)] text-[var(--theme-accent)]", children: /* @__PURE__ */ jsx(HugeiconsIcon, { icon: PlusSignIcon, size: 20, strokeWidth: 1.8 }) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-[var(--theme-text)]", children: "New Agent" }),
                  /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-[var(--theme-muted-2)]", children: "Add a persistent Operations agent to the roster." })
                ] })
              ] }),
              /* @__PURE__ */ jsx(
                "button",
                {
                  type: "button",
                  onClick: onClose,
                  className: "rounded-full border border-[var(--theme-border)] bg-[var(--theme-bg)] p-2 text-[var(--theme-muted)] hover:text-[var(--theme-text)]",
                  children: /* @__PURE__ */ jsx(HugeiconsIcon, { icon: Cancel01Icon, size: 18, strokeWidth: 1.8 })
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-6 space-y-2", children: [
              /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-[var(--theme-text)]", children: "Start from a template" }),
              /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: PRESET_OPTIONS.map((preset) => /* @__PURE__ */ jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => applyPreset(preset.id),
                  className: cn(
                    "inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm transition-all",
                    presetId === preset.id ? "border-[var(--theme-accent)] bg-[var(--theme-accent-soft)] text-[var(--theme-text)]" : "border-[var(--theme-border)] bg-[var(--theme-bg)] text-[var(--theme-muted)] hover:bg-[var(--theme-card2)]"
                  ),
                  children: [
                    /* @__PURE__ */ jsx("span", { "aria-hidden": "true", children: preset.emoji }),
                    /* @__PURE__ */ jsx("span", { children: preset.name })
                  ]
                },
                preset.id
              )) }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-[var(--theme-muted)]", children: "Templates fill in emoji, description, and system prompt. You can edit everything before creating." })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-4 grid gap-4 md:grid-cols-[1.2fr_0.6fr]", children: [
              /* @__PURE__ */ jsxs("label", { className: "space-y-2", children: [
                /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-[var(--theme-text)]", children: "Name" }),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    value: name,
                    onChange: (event) => setName(event.target.value),
                    placeholder: "Sage",
                    className: "w-full rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-bg)] px-4 py-3 text-sm text-[var(--theme-text)] outline-none placeholder:text-[var(--theme-muted)] focus:border-[var(--theme-accent)]"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("label", { className: "space-y-2", children: [
                /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-[var(--theme-text)]", children: "Emoji" }),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    value: emoji,
                    onChange: (event) => setEmoji(event.target.value),
                    placeholder: "🐦",
                    className: "w-full rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-bg)] px-4 py-3 text-sm text-[var(--theme-text)] outline-none placeholder:text-[var(--theme-muted)] focus:border-[var(--theme-accent)]"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxs("label", { className: "mt-4 block space-y-2", children: [
              /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-[var(--theme-text)]", children: "Model" }),
              /* @__PURE__ */ jsx(ModelSelector$1, { value: model, onChange: setModel, models })
            ] }),
            /* @__PURE__ */ jsxs("label", { className: "mt-4 block space-y-2", children: [
              /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-[var(--theme-text)]", children: "Description" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  value: description,
                  onChange: (event) => setDescription(event.target.value),
                  placeholder: "X/Twitter growth agent",
                  className: "w-full rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-bg)] px-4 py-3 text-sm text-[var(--theme-text)] outline-none placeholder:text-[var(--theme-muted)] focus:border-[var(--theme-accent)]"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("label", { className: "mt-4 block space-y-2", children: [
              /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-[var(--theme-text)]", children: "System Prompt" }),
              /* @__PURE__ */ jsx(
                "textarea",
                {
                  value: systemPrompt,
                  onChange: (event) => setSystemPrompt(event.target.value),
                  placeholder: "You are Sage, an expert...",
                  className: "min-h-[180px] w-full rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-bg)] px-4 py-3 text-sm text-[var(--theme-text)] outline-none placeholder:text-[var(--theme-muted)] focus:border-[var(--theme-accent)]"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-6 flex justify-end gap-3", children: [
              /* @__PURE__ */ jsx(
                Button,
                {
                  variant: "secondary",
                  className: "border border-[var(--theme-border)] bg-[var(--theme-bg)] text-[var(--theme-text)] hover:bg-[var(--theme-card2)]",
                  onClick: onClose,
                  children: "Cancel"
                }
              ),
              /* @__PURE__ */ jsx(
                Button,
                {
                  className: "bg-[var(--theme-accent)] text-primary-950 hover:bg-[var(--theme-accent-strong)]",
                  onClick: () => void onCreate({
                    name,
                    emoji,
                    model,
                    systemPrompt,
                    description
                  }).then(() => onClose()),
                  disabled: isSaving || !name.trim(),
                  children: isSaving ? "Creating…" : "Create Agent"
                }
              )
            ] })
          ]
        }
      )
    }
  );
}
function normalizeModel(model) {
  if (typeof model === "string") {
    return {
      id: model,
      provider: model.includes("/") ? model.split("/")[0] ?? "model" : "model",
      name: model.split("/").pop() ?? model
    };
  }
  const id = model.id ?? model.alias ?? model.model ?? "";
  if (!id) return null;
  return {
    id,
    provider: model.provider ?? id.split("/")[0] ?? "model",
    name: model.label ?? model.displayName ?? model.name ?? id.split("/").pop() ?? id
  };
}
function ModelSelector({
  value,
  onChange,
  models
}) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);
  useEffect(() => {
    if (!open) return;
    function handlePointerDown(event) {
      if (!containerRef.current?.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, [open]);
  const selected = models.find((model) => model.id === value);
  return /* @__PURE__ */ jsxs("div", { className: "relative", ref: containerRef, children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        type: "button",
        onClick: () => setOpen((current) => !current),
        className: "inline-flex min-h-[3rem] w-full items-center justify-between gap-3 rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-bg)] px-4 py-3 text-left text-sm text-[var(--theme-text)] shadow-[0_8px_24px_color-mix(in_srgb,var(--theme-shadow)_18%,transparent)]",
        children: [
          /* @__PURE__ */ jsx("span", { className: "truncate", children: selected ? `${selected.provider} / ${selected.name}` : "Default (auto)" }),
          /* @__PURE__ */ jsx(
            HugeiconsIcon,
            {
              icon: ArrowDown01Icon,
              size: 16,
              strokeWidth: 1.8,
              className: cn("text-[var(--theme-muted)] transition-transform", open && "rotate-180")
            }
          )
        ]
      }
    ),
    open ? /* @__PURE__ */ jsx("div", { className: "absolute left-0 top-[calc(100%+0.5rem)] z-[80] w-full overflow-hidden rounded-2xl border border-[var(--theme-border2)] bg-[var(--theme-card)] shadow-[0_24px_80px_var(--theme-shadow)]", children: /* @__PURE__ */ jsxs("div", { className: "max-h-80 overflow-y-auto p-2", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          onClick: () => {
            onChange("");
            setOpen(false);
          },
          className: cn(
            "flex w-full rounded-xl px-3 py-2.5 text-left text-sm",
            !value ? "bg-[var(--theme-accent-soft)]" : "hover:bg-[var(--theme-bg)]"
          ),
          children: "Default (auto)"
        }
      ),
      models.map((model) => /* @__PURE__ */ jsxs(
        "button",
        {
          type: "button",
          onClick: () => {
            onChange(model.id);
            setOpen(false);
          },
          className: cn(
            "mt-1 flex w-full rounded-xl px-3 py-2.5 text-left text-sm",
            value === model.id ? "bg-[var(--theme-accent-soft)]" : "hover:bg-[var(--theme-bg)]"
          ),
          children: [
            model.provider,
            " / ",
            model.name
          ]
        },
        model.id
      ))
    ] }) }) : null
  ] });
}
function OperationsSettingsModal({
  open,
  settings,
  onClose,
  onSave
}) {
  const [draft, setDraft] = useState(settings);
  useEffect(() => {
    setDraft(settings);
  }, [settings, open]);
  const modelsQuery = useQuery({
    queryKey: ["operations", "models"],
    queryFn: fetchModels,
    enabled: open
  });
  const models = useMemo(
    () => (modelsQuery.data?.models ?? []).map(normalizeModel).filter((model) => Boolean(model)),
    [modelsQuery.data?.models]
  );
  if (!open) return null;
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: "fixed inset-0 z-50 flex items-center justify-center bg-[color-mix(in_srgb,var(--theme-bg)_48%,transparent)] px-4 py-6 backdrop-blur-md",
      onClick: onClose,
      children: /* @__PURE__ */ jsxs(
        "div",
        {
          className: "w-full max-w-2xl rounded-3xl border border-[var(--theme-border2)] bg-[var(--theme-card)] p-6 shadow-[0_30px_100px_var(--theme-shadow)]",
          onClick: (event) => event.stopPropagation(),
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsx("div", { className: "flex size-11 items-center justify-center rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-bg)] text-[var(--theme-accent)]", children: /* @__PURE__ */ jsx(HugeiconsIcon, { icon: Settings01Icon, size: 20, strokeWidth: 1.8 }) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-[var(--theme-text)]", children: "Operations Settings" }),
                  /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-[var(--theme-muted-2)]", children: "Defaults stored locally for the Operations screen." })
                ] })
              ] }),
              /* @__PURE__ */ jsx(
                "button",
                {
                  type: "button",
                  onClick: onClose,
                  className: "rounded-full border border-[var(--theme-border)] bg-[var(--theme-bg)] p-2 text-[var(--theme-muted)] hover:text-[var(--theme-text)]",
                  children: /* @__PURE__ */ jsx(HugeiconsIcon, { icon: Cancel01Icon, size: 18, strokeWidth: 1.8 })
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-6 space-y-4", children: [
              /* @__PURE__ */ jsxs("label", { className: "space-y-2", children: [
                /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-[var(--theme-text)]", children: "Default model for new agents" }),
                /* @__PURE__ */ jsx(
                  ModelSelector,
                  {
                    value: draft.defaultModel,
                    onChange: (defaultModel) => setDraft((current) => ({ ...current, defaultModel })),
                    models
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("label", { className: "flex items-center justify-between rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-bg)] px-4 py-3", children: [
                /* @__PURE__ */ jsxs("span", { children: [
                  /* @__PURE__ */ jsx("span", { className: "block text-sm font-medium text-[var(--theme-text)]", children: "Auto-approve" }),
                  /* @__PURE__ */ jsx("span", { className: "block text-sm text-[var(--theme-muted-2)]", children: "Reserved for future workflow automation." })
                ] }),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: draft.autoApprove,
                    onChange: (event) => setDraft((current) => ({
                      ...current,
                      autoApprove: event.target.checked
                    })),
                    className: "size-4 accent-[var(--theme-accent)]"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("label", { className: "space-y-2", children: [
                /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-[var(--theme-text)]", children: "Activity feed length" }),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "number",
                    min: 1,
                    max: 20,
                    value: draft.activityFeedLength,
                    onChange: (event) => setDraft((current) => ({
                      ...current,
                      activityFeedLength: Number(event.target.value) || 5
                    })),
                    className: "w-full rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-bg)] px-4 py-3 text-sm text-[var(--theme-text)] outline-none focus:border-[var(--theme-accent)]"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-6 flex justify-end gap-3", children: [
              /* @__PURE__ */ jsx(
                Button,
                {
                  variant: "secondary",
                  className: "border border-[var(--theme-border)] bg-[var(--theme-bg)] text-[var(--theme-text)] hover:bg-[var(--theme-card2)]",
                  onClick: onClose,
                  children: "Cancel"
                }
              ),
              /* @__PURE__ */ jsx(
                Button,
                {
                  className: "bg-[var(--theme-accent)] text-primary-950 hover:bg-[var(--theme-accent-strong)]",
                  onClick: () => {
                    onSave(draft);
                    onClose();
                  },
                  children: "Save Settings"
                }
              )
            ] })
          ]
        }
      )
    }
  );
}
const DEFAULT_FILTERS = [
  { id: "all", label: "All", emoji: "📋" },
  { id: "ok", label: "Success", emoji: "✅" },
  { id: "error", label: "Errors", emoji: "❌" },
  { id: "running", label: "Running", emoji: "⏳" }
];
function useAgentOutputs(_filter) {
  const [loading] = useState(false);
  const refresh = useCallback(() => {
  }, []);
  return {
    outputs: [],
    availableFilters: DEFAULT_FILTERS,
    loading,
    error: null,
    refresh
  };
}
function formatDuration(durationMs) {
  if (!durationMs || durationMs <= 0) return null;
  if (durationMs < 1e3) return `${durationMs}ms`;
  return `${Math.round(durationMs / 100) / 10}s`;
}
function getStatusPill(output) {
  if (output.status === "ok") {
    return {
      label: output.statusLabel || "Success",
      icon: "✅",
      className: "bg-emerald-500/12 text-emerald-700 border-emerald-500/20"
    };
  }
  if (output.status === "error") {
    if (output.failureKind === "delivery") {
      return {
        label: output.statusLabel || "Delivery Failed",
        icon: "📬",
        className: "bg-sky-500/12 text-sky-700 border-sky-500/20"
      };
    }
    if (output.failureKind === "config") {
      return {
        label: output.statusLabel || "Config Failed",
        icon: "⚙️",
        className: "bg-violet-500/12 text-violet-700 border-violet-500/20"
      };
    }
    if (output.failureKind === "approval") {
      return {
        label: output.statusLabel || "Needs Approval",
        icon: "✋",
        className: "bg-amber-500/12 text-amber-700 border-amber-500/20"
      };
    }
    if (output.failureKind === "runtime") {
      return {
        label: output.statusLabel || "Model/Runtime Failed",
        icon: "🧠",
        className: "bg-rose-500/12 text-rose-700 border-rose-500/20"
      };
    }
    return {
      label: output.statusLabel || "Error",
      icon: "❌",
      className: "bg-rose-500/12 text-rose-700 border-rose-500/20"
    };
  }
  if (output.status === "running") {
    return {
      label: output.statusLabel || "Running",
      icon: "⏳",
      className: "bg-amber-500/12 text-amber-700 border-amber-500/20"
    };
  }
  return {
    label: output.statusLabel || "Unknown",
    icon: "•",
    className: "bg-primary-200/80 text-primary-700 border-primary-300"
  };
}
function extractSageTweet(text) {
  const match = text.match(/\*\*Draft tweet\*\*[\s\S]*?\n([\s\S]*?)(?:\n\*\*|$)/i);
  return match?.[1]?.trim() || "";
}
function extractSagePrompt(text) {
  const match = text.match(/\*\*ChatGPT image prompt\*\*[\s\S]*?\n([\s\S]*?)(?:\n\*\*|$)/i);
  return match?.[1]?.trim() || "";
}
function extractFirstUrl(text) {
  const match = text.match(/https?:\/\/[^\s)]+/i);
  return match?.[0] || "";
}
function FilterPill({
  active,
  label,
  emoji,
  onClick
}) {
  return /* @__PURE__ */ jsx(
    "button",
    {
      type: "button",
      onClick,
      className: cn(
        "rounded-xl px-3.5 py-2 text-sm font-medium transition-all",
        active ? "bg-[var(--theme-accent)] text-primary-950" : "border border-[var(--theme-border)] bg-[var(--theme-card)] text-[var(--theme-muted)] hover:bg-[var(--theme-card2)]"
      ),
      children: /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
        emoji ? /* @__PURE__ */ jsx("span", { children: emoji }) : null,
        /* @__PURE__ */ jsx("span", { children: label })
      ] })
    }
  );
}
function OutputCard({ output }) {
  const [expanded, setExpanded] = useState(false);
  const [isRetrying, setIsRetrying] = useState(false);
  const status = getStatusPill(output);
  const relativeTime = formatRelativeTime(output.timestamp);
  const duration = formatDuration(output.durationMs);
  const sageTweet = useMemo(() => extractSageTweet(output.fullOutput), [output.fullOutput]);
  const sagePrompt = useMemo(() => extractSagePrompt(output.fullOutput), [output.fullOutput]);
  const sourceUrl = useMemo(() => extractFirstUrl(output.fullOutput), [output.fullOutput]);
  async function copyText(value, label) {
    if (!value.trim()) {
      toast(`No ${label.toLowerCase()} found`, { type: "warning" });
      return;
    }
    try {
      await navigator.clipboard.writeText(value);
      toast(`${label} copied`, { type: "success" });
    } catch (error) {
      toast(error instanceof Error ? error.message : `Failed to copy ${label.toLowerCase()}`, {
        type: "error"
      });
    }
  }
  async function handleRetry() {
    setIsRetrying(true);
    try {
      if (!output.jobId) throw new Error("No job ID associated with this output");
      await runCronJob(output.jobId);
      toast("Cron job started", { type: "success" });
    } catch (error) {
      toast(error instanceof Error ? error.message : "Failed to retry cron job", {
        type: "error"
      });
    } finally {
      setIsRetrying(false);
    }
  }
  return /* @__PURE__ */ jsxs(
    motion.article,
    {
      layout: true,
      initial: { opacity: 0, y: 10 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -8 },
      transition: { duration: 0.18 },
      className: "rounded-[1.5rem] border border-[var(--theme-border)] bg-[var(--theme-card)] p-5 shadow-[0_20px_60px_color-mix(in_srgb,var(--theme-shadow)_12%,transparent)]",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-[var(--theme-text)]", children: [
              /* @__PURE__ */ jsx("span", { className: "text-xl leading-none", children: output.agentEmoji }),
              /* @__PURE__ */ jsx("h3", { className: "text-base font-semibold", children: output.agentName })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "mt-1 text-xs text-[var(--theme-muted)]", children: output.jobName })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-2 text-xs text-[var(--theme-muted)] sm:justify-end", children: [
            /* @__PURE__ */ jsx("span", { children: relativeTime }),
            /* @__PURE__ */ jsx("span", { children: "·" }),
            /* @__PURE__ */ jsxs("span", { className: cn("inline-flex items-center gap-1 rounded-full border px-2.5 py-1 font-medium", status.className), children: [
              /* @__PURE__ */ jsx("span", { className: cn(output.status === "running" && "animate-pulse"), children: status.icon }),
              /* @__PURE__ */ jsx("span", { children: status.label })
            ] }),
            duration ? /* @__PURE__ */ jsxs("span", { children: [
              "· ",
              duration
            ] }) : null
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4 space-y-3 text-sm text-[var(--theme-text)]", children: [
          /* @__PURE__ */ jsxs("div", { className: "rounded-[1.1rem] border border-[var(--theme-border)] bg-[var(--theme-bg)] px-4 py-3", children: [
            /* @__PURE__ */ jsx("p", { className: "text-xs font-medium uppercase tracking-wide text-[var(--theme-muted)]", children: "Summary" }),
            /* @__PURE__ */ jsx("p", { className: "mt-1 whitespace-pre-wrap text-sm text-[var(--theme-text)]", children: output.summary }),
            output.model || output.sessionKey || output.chatSessionKey ? /* @__PURE__ */ jsxs("div", { className: "mt-2 flex flex-wrap gap-x-3 gap-y-1 text-xs text-[var(--theme-muted)]", children: [
              output.model ? /* @__PURE__ */ jsxs("span", { children: [
                "Model: ",
                output.model
              ] }) : null,
              output.sessionKey ? /* @__PURE__ */ jsxs("span", { children: [
                "Session: ",
                output.sessionKey
              ] }) : null,
              output.chatSessionKey && output.chatSessionKey !== output.sessionKey ? /* @__PURE__ */ jsxs("span", { children: [
                "Chat: ",
                output.chatSessionKey
              ] }) : null
            ] }) : null
          ] }),
          /* @__PURE__ */ jsx("div", { className: "overflow-hidden rounded-[1.1rem] border border-[var(--theme-border)] bg-[var(--theme-card)]/75 px-4 py-3", children: /* @__PURE__ */ jsxs("div", { className: cn("relative", !expanded && "max-h-[8.5rem] overflow-hidden"), children: [
            /* @__PURE__ */ jsx(Markdown, { children: output.fullOutput }),
            !expanded ? /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-linear-to-t from-white to-transparent" }) : null
          ] }) }),
          output.error ? /* @__PURE__ */ jsx(
            "p",
            {
              className: cn(
                "rounded-xl border px-3 py-2 text-sm",
                output.failureKind === "delivery" ? "border-sky-500/25 bg-sky-500/8 text-sky-700" : output.failureKind === "config" ? "border-violet-500/25 bg-violet-500/8 text-violet-700" : output.failureKind === "approval" ? "border-amber-500/25 bg-amber-500/8 text-amber-700" : "border-[var(--theme-danger-border)] bg-[var(--theme-danger-soft)] text-[var(--theme-danger)]"
              ),
              children: output.failureKind === "delivery" ? `Delivery issue: ${output.error}` : output.failureKind === "config" ? `Config issue: ${output.error}` : output.failureKind === "approval" ? `Approval needed: ${output.error}` : output.failureKind === "runtime" ? `Runtime issue: ${output.error}` : `Error: ${output.error}`
            }
          ) : null
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4 flex flex-wrap items-center justify-end gap-2", children: [
          /* @__PURE__ */ jsxs(
            Button,
            {
              variant: "secondary",
              className: "border border-[var(--theme-border)] bg-[var(--theme-card)] text-[var(--theme-text)] hover:bg-[var(--theme-card2)]",
              onClick: () => void copyText(output.fullOutput, "Output"),
              children: [
                /* @__PURE__ */ jsx(HugeiconsIcon, { icon: Copy01Icon, size: 16, strokeWidth: 1.8 }),
                "Copy"
              ]
            }
          ),
          output.agentId === "sage" && sageTweet ? /* @__PURE__ */ jsx(
            Button,
            {
              variant: "secondary",
              className: "border border-[var(--theme-border)] bg-[var(--theme-card)] text-[var(--theme-text)] hover:bg-[var(--theme-card2)]",
              onClick: () => void copyText(sageTweet, "Tweet"),
              children: "Copy Tweet"
            }
          ) : null,
          output.agentId === "sage" && sagePrompt ? /* @__PURE__ */ jsx(
            Button,
            {
              variant: "secondary",
              className: "border border-[var(--theme-border)] bg-[var(--theme-card)] text-[var(--theme-text)] hover:bg-[var(--theme-card2)]",
              onClick: () => void copyText(sagePrompt, "Image prompt"),
              children: "Copy Image Prompt"
            }
          ) : null,
          sourceUrl ? /* @__PURE__ */ jsxs(
            Button,
            {
              variant: "secondary",
              className: "border border-[var(--theme-border)] bg-[var(--theme-card)] text-[var(--theme-text)] hover:bg-[var(--theme-card2)]",
              onClick: () => window.open(sourceUrl, "_blank", "noopener,noreferrer"),
              children: [
                /* @__PURE__ */ jsx(HugeiconsIcon, { icon: Link01Icon, size: 16, strokeWidth: 1.8 }),
                "Link"
              ]
            }
          ) : null,
          output.agentId === "trader" ? /* @__PURE__ */ jsx(
            Button,
            {
              variant: "secondary",
              className: "border border-[var(--theme-border)] bg-[var(--theme-card)] text-[var(--theme-text)] hover:bg-[var(--theme-card2)]",
              onClick: () => toast("Signals view coming soon", { type: "info" }),
              children: "View Signals"
            }
          ) : null,
          output.status === "error" ? /* @__PURE__ */ jsx(
            Button,
            {
              variant: "secondary",
              className: "border border-[var(--theme-border)] bg-[var(--theme-card)] text-[var(--theme-text)] hover:bg-[var(--theme-card2)]",
              onClick: () => void handleRetry(),
              disabled: isRetrying,
              children: isRetrying ? "Retrying…" : "Retry"
            }
          ) : null,
          /* @__PURE__ */ jsxs(
            Button,
            {
              variant: "secondary",
              className: "border border-[var(--theme-border)] bg-[var(--theme-card)] text-[var(--theme-text)] hover:bg-[var(--theme-card2)]",
              onClick: () => setExpanded((value) => !value),
              children: [
                /* @__PURE__ */ jsx(
                  HugeiconsIcon,
                  {
                    icon: expanded ? ArrowUp01Icon : ArrowDown01Icon,
                    size: 16,
                    strokeWidth: 1.8
                  }
                ),
                expanded ? "Collapse" : "Expand"
              ]
            }
          )
        ] })
      ]
    }
  );
}
function FullOutputsView() {
  const [filter, setFilter] = useState("all");
  const { outputs, availableFilters, loading, refresh } = useAgentOutputs();
  if (loading) {
    return /* @__PURE__ */ jsx("section", { className: "rounded-3xl border border-[var(--theme-border)] bg-[var(--theme-card)] px-6 py-14 text-center text-sm text-[var(--theme-muted)] shadow-[0_24px_80px_var(--theme-shadow)]", children: "Loading outputs…" });
  }
  return /* @__PURE__ */ jsxs(
    motion.section,
    {
      initial: { opacity: 0, y: 12 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.24 },
      className: "rounded-3xl border border-[var(--theme-border)] bg-[var(--theme-card)] p-4 shadow-[0_24px_80px_var(--theme-shadow)] md:p-5",
      children: [
        /* @__PURE__ */ jsx("div", { className: "rounded-[1.5rem] border border-[var(--theme-border)] bg-[var(--theme-card)]/90 p-3 backdrop-blur-sm md:p-4", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between", children: [
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: availableFilters.map((item) => /* @__PURE__ */ jsx(
            FilterPill,
            {
              active: filter === item.id,
              label: item.label,
              emoji: item.emoji,
              onClick: () => setFilter(item.id)
            },
            item.id
          )) }),
          /* @__PURE__ */ jsxs(
            Button,
            {
              variant: "secondary",
              className: "border border-[var(--theme-border)] bg-[var(--theme-card)] text-[var(--theme-text)] hover:bg-[var(--theme-card2)]",
              onClick: () => void refresh(),
              children: [
                /* @__PURE__ */ jsx(HugeiconsIcon, { icon: RefreshIcon, size: 16, strokeWidth: 1.8 }),
                "Refresh"
              ]
            }
          )
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "mt-4 flex items-center justify-between px-1", children: /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold text-[var(--theme-text)]", children: "Outputs" }),
          /* @__PURE__ */ jsxs("p", { className: "mt-1 text-sm text-[var(--theme-muted-2)]", children: [
            outputs.length,
            " recent ",
            outputs.length === 1 ? "run" : "runs",
            " across the team"
          ] })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "mt-4", children: outputs.length === 0 ? /* @__PURE__ */ jsx("div", { className: "rounded-[1.5rem] border border-dashed border-[var(--theme-border)] bg-[var(--theme-bg)] px-5 py-12 text-center text-sm text-[var(--theme-muted)]", children: "No agent outputs yet. Configure cron jobs in agent settings to get started." }) : /* @__PURE__ */ jsx(AnimatePresence, { mode: "popLayout", children: /* @__PURE__ */ jsx("div", { className: "space-y-4", children: outputs.map((output) => /* @__PURE__ */ jsx(OutputCard, { output }, output.id)) }) }) })
      ]
    }
  );
}
const META_STORAGE_PREFIX = "operations:agents:";
const SETTINGS_STORAGE_KEY = "operations-settings";
const COLOR_PALETTE = [
  { body: "#3b82f6", accent: "#93c5fd" },
  { body: "#10b981", accent: "#6ee7b7" },
  { body: "#f97316", accent: "#fdba74" },
  { body: "#8b5cf6", accent: "#c4b5fd" },
  { body: "#ec4899", accent: "#f9a8d4" },
  { body: "#06b6d4", accent: "#67e8f9" },
  { body: "#eab308", accent: "#fde047" },
  { body: "#ef4444", accent: "#fca5a5" }
];
function hashString(value) {
  let hash = 0;
  for (const char of value) {
    hash = hash * 31 + char.charCodeAt(0) >>> 0;
  }
  return hash;
}
function createFallbackColor(agentId) {
  return COLOR_PALETTE[hashString(agentId) % COLOR_PALETTE.length]?.body ?? "#3b82f6";
}
function createFallbackEmoji(agentId) {
  const emojis = ["🤖", "🐦", "🔨", "✍️", "📊", "🛰️", "🧠", "🛠️"];
  return emojis[hashString(agentId) % emojis.length] ?? "🤖";
}
function normalizeAgentId(input) {
  return input.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
function readTimestamp(value) {
  if (typeof value === "number" && Number.isFinite(value)) {
    return value > 1e12 ? value : value * 1e3;
  }
  if (typeof value === "string" && value.trim()) {
    const parsed = Date.parse(value);
    return Number.isNaN(parsed) ? null : parsed;
  }
  return null;
}
function readString(value) {
  return typeof value === "string" ? value.trim() : "";
}
function extractSessionText(session) {
  const lastMessage = session.lastMessage;
  if (lastMessage) {
    if (typeof lastMessage.text === "string" && lastMessage.text.trim()) {
      return lastMessage.text.trim();
    }
    if (Array.isArray(lastMessage.content)) {
      const text = lastMessage.content.filter((part) => !part.type || part.type === "text").map((part) => part.text ?? "").join("\n").trim();
      if (text) return text;
    }
  }
  return readString(session.derivedTitle) || readString(session.title) || readString(session.task) || readString(session.initialMessage);
}
function truncate(text, maxLength = 120) {
  const normalized = text.replace(/\s+/g, " ").trim();
  if (normalized.length <= maxLength) return normalized;
  return `${normalized.slice(0, Math.max(0, maxLength - 1)).trimEnd()}…`;
}
function normalizeAgentList(input) {
  if (!Array.isArray(input)) return [];
  const agents = [];
  for (const entry of input) {
    if (!entry || typeof entry !== "object" || Array.isArray(entry)) {
      continue;
    }
    const row = entry;
    const id = normalizeAgentId(readString(row.id) || readString(row.name));
    if (!id) continue;
    agents.push({
      id,
      name: readString(row.name) || id,
      model: readString(row.model),
      workspace: readString(row.workspace) || void 0,
      agentDir: readString(row.agentDir) || void 0
    });
  }
  return agents;
}
async function fetchHermesProfiles() {
  const response = await fetch("/api/profiles/list");
  const contentType = response.headers.get("content-type") || "";
  if (!contentType.includes("json")) {
    throw new Error("/api/profiles/list returned non-JSON");
  }
  const payload = await response.json().catch(() => ({}));
  if (!response.ok || payload.error) {
    throw new Error(payload.error || `HTTP ${response.status}`);
  }
  return Array.isArray(payload.profiles) ? payload.profiles : [];
}
async function fetchOperationsConfig() {
  const profiles = await fetchHermesProfiles();
  const list = profiles.map((profile) => ({
    id: profile.name,
    name: profile.name === "default" ? "Workspace" : profile.name,
    model: profile.model || "",
    workspace: profile.path,
    agentDir: profile.path
  }));
  const defaultModel = profiles.find((p) => p.name === "default")?.model || "";
  return {
    ok: true,
    parsed: {
      agents: { list },
      defaultModel
    }
  };
}
async function createHermesProfile(input) {
  const response = await fetch("/api/profiles/create", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(input)
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok || payload.ok === false) {
    throw new Error(payload.error || `Failed to create profile (${response.status})`);
  }
}
async function updateHermesProfile(name, patch) {
  const response = await fetch("/api/profiles/update", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ name, patch })
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok || payload.ok === false) {
    throw new Error(payload.error || `Failed to update profile (${response.status})`);
  }
}
async function deleteHermesProfile(name) {
  const response = await fetch("/api/profiles/delete", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ name })
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok || payload.ok === false) {
    throw new Error(payload.error || `Failed to delete profile (${response.status})`);
  }
}
function loadAgentMeta(agentId) {
  if (typeof window === "undefined") {
    return {
      emoji: createFallbackEmoji(agentId),
      description: "",
      systemPrompt: "",
      color: createFallbackColor(agentId),
      createdAt: (/* @__PURE__ */ new Date()).toISOString()
    };
  }
  try {
    const raw = window.localStorage.getItem(`${META_STORAGE_PREFIX}${agentId}`);
    if (!raw) {
      return {
        emoji: createFallbackEmoji(agentId),
        description: "",
        systemPrompt: "",
        color: createFallbackColor(agentId),
        createdAt: (/* @__PURE__ */ new Date()).toISOString()
      };
    }
    const parsed = JSON.parse(raw);
    return {
      emoji: readString(parsed.emoji) || createFallbackEmoji(agentId),
      description: readString(parsed.description),
      systemPrompt: readString(parsed.systemPrompt),
      color: readString(parsed.color) || createFallbackColor(agentId),
      createdAt: readString(parsed.createdAt) || (/* @__PURE__ */ new Date()).toISOString()
    };
  } catch {
    return {
      emoji: createFallbackEmoji(agentId),
      description: "",
      systemPrompt: "",
      color: createFallbackColor(agentId),
      createdAt: (/* @__PURE__ */ new Date()).toISOString()
    };
  }
}
function persistAgentMeta(agentId, meta) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(
    `${META_STORAGE_PREFIX}${agentId}`,
    JSON.stringify(meta)
  );
}
function removeAgentMeta(agentId) {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(`${META_STORAGE_PREFIX}${agentId}`);
}
function loadSettings() {
  if (typeof window === "undefined") {
    return { defaultModel: "", autoApprove: false, activityFeedLength: 5 };
  }
  try {
    const raw = window.localStorage.getItem(SETTINGS_STORAGE_KEY);
    if (!raw) {
      return { defaultModel: "", autoApprove: false, activityFeedLength: 5 };
    }
    const parsed = JSON.parse(raw);
    const activityFeedLength = Number(parsed.activityFeedLength);
    return {
      defaultModel: readString(parsed.defaultModel),
      autoApprove: Boolean(parsed.autoApprove),
      activityFeedLength: Number.isFinite(activityFeedLength) && activityFeedLength > 0 ? Math.min(20, Math.max(1, Math.round(activityFeedLength))) : 5
    };
  } catch {
    return { defaultModel: "", autoApprove: false, activityFeedLength: 5 };
  }
}
function persistSettings(settings) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(settings));
}
function getAgentJobs(agentId, jobs) {
  return jobs.filter((job) => job.name?.startsWith(`ops:${agentId}:`));
}
function getAgentSessions(agentId, sessions) {
  return [...sessions].filter((session) => {
    const label = readString(session.label);
    const key = readString(session.key);
    return label.includes(agentId) || key.includes(agentId);
  }).sort((left, right) => {
    const leftTs = readTimestamp(left.updatedAt) ?? 0;
    const rightTs = readTimestamp(right.updatedAt) ?? 0;
    return rightTs - leftTs;
  });
}
function getAgentStatus(latestSession) {
  if (!latestSession) return "idle";
  const status = readString(latestSession.status).toLowerCase();
  if (status.includes("fail") || status.includes("error")) return "error";
  const updatedAt = readTimestamp(latestSession.updatedAt);
  if (updatedAt && Date.now() - updatedAt < 12e4) return "active";
  return "idle";
}
function getProgressStatus(status, latestSession) {
  if (status === "error") return "failed";
  if (status === "active") return "running";
  const sessionStatus = readString(latestSession?.status).toLowerCase();
  if (sessionStatus.includes("complete") || sessionStatus.includes("done")) {
    return "complete";
  }
  return latestSession ? "thinking" : "queued";
}
function getProgressValue(status, latestSession) {
  const rawProgress = latestSession?.progress;
  if (typeof rawProgress === "number" && Number.isFinite(rawProgress)) {
    return Math.max(5, Math.min(100, rawProgress));
  }
  if (status === "active") return 72;
  if (status === "error") return 100;
  if (latestSession) return 100;
  return 18;
}
function formatUpcomingTime(timestamp) {
  const diff = timestamp - Date.now();
  if (diff <= 0) return "soon";
  const minutes = Math.round(diff / 6e4);
  if (minutes < 60) return `in ${minutes}m`;
  const hours = Math.round(minutes / 60);
  if (hours < 24) return `in ${hours}h`;
  return new Date(timestamp).toLocaleDateString(void 0, {
    weekday: "short",
    month: "short",
    day: "numeric"
  });
}
function slugifyJobLabel(value) {
  return normalizeAgentId(value) || "scheduled-run";
}
function buildCronOutput(job, agentId) {
  const startedAt = readTimestamp(job.lastRun?.startedAt);
  const summary = truncate(
    readString(job.lastRun?.deliverySummary) || readString(job.description) || readString(job.name).replace(`ops:${agentId}:`, "").replace(/-/g, " ")
  );
  if (!startedAt || !summary) return null;
  return {
    id: `cron-${job.id}`,
    agentId,
    summary,
    timestamp: startedAt,
    source: "cron"
  };
}
function buildSessionOutput(session, agentId) {
  const timestamp = readTimestamp(session.updatedAt) ?? readTimestamp(session.createdAt);
  const summary = truncate(extractSessionText(session));
  if (!timestamp || !summary) return null;
  return {
    id: `session-${readString(session.key) || timestamp}`,
    agentId,
    summary,
    timestamp,
    source: "session"
  };
}
function getOperationsSessionKey(agentId) {
  return `agent:main:ops-${agentId}`;
}
function useOperations() {
  const queryClient = useQueryClient();
  const [selectedAgentId, setSelectedAgentId] = useState(null);
  const [settings, setSettings] = useState(() => loadSettings());
  const [metaVersion, setMetaVersion] = useState(0);
  const configQuery = useQuery({
    queryKey: ["operations", "config"],
    queryFn: fetchOperationsConfig,
    refetchInterval: 3e4
  });
  const sessionsQuery = useQuery({
    queryKey: ["operations", "sessions"],
    queryFn: async () => {
      const response = await fetchSessions();
      return Array.isArray(response.sessions) ? response.sessions : [];
    },
    refetchInterval: 15e3
  });
  const cronJobsQuery = useQuery({
    queryKey: ["operations", "cron"],
    queryFn: fetchCronJobs,
    refetchInterval: 3e4
  });
  const agents = useMemo(() => {
    const parsed = configQuery.data?.parsed;
    const allAgents = normalizeAgentList(parsed?.agents?.list);
    const HIDDEN_AGENTS = /* @__PURE__ */ new Set(["main", "pc1-coder", "pc1-planner", "pc1-critic"]);
    const configAgents = allAgents.filter((a) => !HIDDEN_AGENTS.has(a.id));
    const sessions = sessionsQuery.data ?? [];
    const cronJobs = cronJobsQuery.data ?? [];
    return configAgents.map((agent) => {
      const meta = loadAgentMeta(agent.id);
      const agentSessions = getAgentSessions(agent.id, sessions);
      const latestSession = agentSessions[0] ?? null;
      const jobs = getAgentJobs(agent.id, cronJobs);
      const nextRunAt = jobs.filter((job) => job.enabled).map((job) => readTimestamp(job.nextRunAt)).filter((value) => value !== null).sort((left, right) => left - right)[0] ?? null;
      const lastActivityAt = readTimestamp(latestSession?.updatedAt) ?? jobs.map((job) => readTimestamp(job.lastRun?.startedAt)).filter((value) => value !== null).sort((left, right) => right - left)[0] ?? null;
      const status = getAgentStatus(latestSession);
      const recentOutputs = [
        ...agentSessions.map((session) => buildSessionOutput(session, agent.id)),
        ...jobs.map((job) => buildCronOutput(job, agent.id))
      ].filter((item) => Boolean(item)).sort((left, right) => right.timestamp - left.timestamp).slice(0, 5);
      return {
        ...agent,
        meta,
        shortModel: formatModelName(agent.model || "Custom"),
        status,
        sessionKey: getOperationsSessionKey(agent.id),
        sessions: agentSessions,
        latestSession,
        jobs,
        nextRunAt,
        lastActivityAt,
        activityLabel: nextRunAt ? `Next ${formatUpcomingTime(nextRunAt)}` : lastActivityAt ? `Last ${formatRelativeTime(lastActivityAt)}` : "No activity yet",
        progressValue: getProgressValue(status, latestSession),
        progressStatus: getProgressStatus(status, latestSession),
        recentOutputs
      };
    });
  }, [
    configQuery.data,
    sessionsQuery.data,
    cronJobsQuery.data,
    metaVersion
  ]);
  const selectedAgent = agents.find((agent) => agent.id === selectedAgentId) ?? null;
  const recentActivity = useMemo(() => {
    return agents.flatMap((agent) => agent.recentOutputs).sort((left, right) => right.timestamp - left.timestamp).slice(0, settings.activityFeedLength);
  }, [agents, settings.activityFeedLength]);
  const createAgentMutation = useMutation({
    mutationFn: async (input) => {
      const id = normalizeAgentId(input.name);
      if (!id) throw new Error("Agent name is required");
      if (id === "default") {
        throw new Error('"default" is reserved — pick another name');
      }
      const currentAgents = normalizeAgentList(configQuery.data?.parsed?.agents?.list);
      if (currentAgents.some((agent) => agent.id === id)) {
        throw new Error("A profile with this name already exists");
      }
      await createHermesProfile({
        name: id,
        model: input.model.trim() || void 0
      });
      if (input.systemPrompt.trim() || input.description?.trim()) {
        await updateHermesProfile(id, {
          system_prompt: input.systemPrompt.trim() || void 0,
          description: input.description?.trim() || void 0
        });
      }
      persistAgentMeta(id, {
        emoji: input.emoji.trim() || createFallbackEmoji(id),
        description: input.description?.trim() ?? "",
        systemPrompt: input.systemPrompt.trim(),
        color: createFallbackColor(id),
        createdAt: (/* @__PURE__ */ new Date()).toISOString()
      });
      setMetaVersion((value) => value + 1);
      setSelectedAgentId(id);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["operations", "config"] });
      toast("Agent created", { type: "success" });
    },
    onError: (error) => {
      toast(error instanceof Error ? error.message : "Failed to create agent", {
        type: "error"
      });
    }
  });
  const saveAgentMutation = useMutation({
    mutationFn: async (input) => {
      const patch = {};
      if (input.model.trim()) patch.model = input.model.trim();
      if (input.systemPrompt.trim()) patch.system_prompt = input.systemPrompt.trim();
      if (Object.keys(patch).length > 0) {
        await updateHermesProfile(input.agentId, patch);
      }
      const currentMeta = loadAgentMeta(input.agentId);
      persistAgentMeta(input.agentId, {
        ...currentMeta,
        emoji: input.emoji.trim() || currentMeta.emoji,
        systemPrompt: input.systemPrompt.trim()
      });
      setMetaVersion((value) => value + 1);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["operations", "config"] });
      toast("Agent settings saved", { type: "success" });
    },
    onError: (error) => {
      toast(error instanceof Error ? error.message : "Failed to save agent", {
        type: "error"
      });
    }
  });
  const deleteAgentMutation = useMutation({
    mutationFn: async (agentId) => {
      if (agentId === "default") {
        throw new Error("Cannot delete the default profile");
      }
      await deleteHermesProfile(agentId);
      removeAgentMeta(agentId);
      setMetaVersion((value) => value + 1);
      setSelectedAgentId((current) => current === agentId ? null : current);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["operations", "config"] });
      await queryClient.invalidateQueries({ queryKey: ["operations", "sessions"] });
      toast("Agent deleted", { type: "success" });
    },
    onError: (error) => {
      toast(error instanceof Error ? error.message : "Failed to delete agent", {
        type: "error"
      });
    }
  });
  function saveAgentMeta(agentId, partial) {
    const nextMeta = { ...loadAgentMeta(agentId), ...partial };
    persistAgentMeta(agentId, nextMeta);
    setMetaVersion((value) => value + 1);
  }
  function saveSettings(nextSettings) {
    setSettings(nextSettings);
    persistSettings(nextSettings);
    toast("Operations settings saved", { type: "success" });
  }
  return {
    agents,
    selectedAgent,
    selectedAgentId,
    setSelectedAgent: setSelectedAgentId,
    configQuery,
    sessionsQuery,
    cronJobsQuery,
    recentActivity,
    settings,
    saveSettings,
    defaultModel: readString(configQuery.data?.parsed?.defaultModel) || settings.defaultModel,
    createAgent: createAgentMutation.mutateAsync,
    isCreatingAgent: createAgentMutation.isPending,
    saveAgent: saveAgentMutation.mutateAsync,
    isSavingAgent: saveAgentMutation.isPending,
    deleteAgent: deleteAgentMutation.mutateAsync,
    isDeletingAgent: deleteAgentMutation.isPending,
    saveAgentMeta,
    refreshAll: async () => {
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: ["operations", "config"] }),
        queryClient.invalidateQueries({ queryKey: ["operations", "sessions"] }),
        queryClient.invalidateQueries({ queryKey: ["operations", "cron"] })
      ]);
    },
    slugifyJobLabel
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
function OperationsScreen() {
  useEffect(() => {
    seedAgentPresets();
  }, []);
  const [newAgentOpen, setNewAgentOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [settingsAgentId, setSettingsAgentId] = useState(null);
  const [view, setView] = useState("overview");
  const {
    agents,
    recentActivity,
    configQuery,
    sessionsQuery,
    cronJobsQuery,
    settings,
    saveSettings,
    defaultModel,
    createAgent,
    isCreatingAgent,
    saveAgent,
    isSavingAgent,
    deleteAgent,
    isDeletingAgent
  } = useOperations();
  const isLoading = configQuery.isPending || sessionsQuery.isPending || cronJobsQuery.isPending;
  const error = configQuery.error instanceof Error && configQuery.error.message || sessionsQuery.error instanceof Error && sessionsQuery.error.message || cronJobsQuery.error instanceof Error && cronJobsQuery.error.message || null;
  const settingsAgent = agents.find((agent) => agent.id === settingsAgentId) ?? null;
  return /* @__PURE__ */ jsxs(
    "main",
    {
      className: "min-h-full bg-surface px-3 pb-24 pt-5 text-primary-900 md:px-5 md:pt-8",
      style: THEME_STYLE,
      children: [
        /* @__PURE__ */ jsxs("section", { className: "mx-auto w-full max-w-[1320px] space-y-4", children: [
          /* @__PURE__ */ jsxs("header", { className: "flex flex-col gap-4 rounded-xl border border-primary-200 bg-primary-50/80 px-5 py-4 shadow-sm md:flex-row md:items-center md:justify-between", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx("div", { className: "flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-card)] text-[var(--theme-accent)] shadow-sm", children: /* @__PURE__ */ jsx(HugeiconsIcon, { icon: AiBrain03Icon, size: 22, strokeWidth: 1.8 }) }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h1", { className: "text-base font-semibold text-primary-900", children: "Operations" }),
                /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-primary-600", children: "Your persistent agent team" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-3", children: [
              /* @__PURE__ */ jsxs("div", { className: "inline-flex rounded-xl border border-[var(--theme-border)] bg-[var(--theme-card)] p-1 shadow-sm", children: [
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => setView("overview"),
                    className: cn(
                      "rounded-lg px-4 py-2 text-sm font-medium transition-all",
                      view === "overview" ? "bg-[var(--theme-accent)] text-primary-950" : "text-[var(--theme-muted)] hover:bg-[var(--theme-card2)]"
                    ),
                    children: "Overview"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => setView("outputs"),
                    className: cn(
                      "rounded-lg px-4 py-2 text-sm font-medium transition-all",
                      view === "outputs" ? "bg-[var(--theme-accent)] text-primary-950" : "text-[var(--theme-muted)] hover:bg-[var(--theme-card2)]"
                    ),
                    children: "Outputs"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs(
                Button,
                {
                  className: "bg-[var(--theme-accent)] text-primary-950 hover:bg-[var(--theme-accent-strong)]",
                  onClick: () => setNewAgentOpen(true),
                  children: [
                    /* @__PURE__ */ jsx(HugeiconsIcon, { icon: PlusSignIcon, size: 16, strokeWidth: 1.8 }),
                    "New Agent"
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                Button,
                {
                  variant: "secondary",
                  className: "border border-[var(--theme-border)] bg-[var(--theme-card)] text-[var(--theme-text)] hover:bg-[var(--theme-card2)]",
                  onClick: () => setSettingsOpen(true),
                  children: [
                    /* @__PURE__ */ jsx(HugeiconsIcon, { icon: Settings01Icon, size: 16, strokeWidth: 1.8 }),
                    "Settings"
                  ]
                }
              )
            ] })
          ] }),
          isLoading ? /* @__PURE__ */ jsx("section", { className: "rounded-3xl border border-[var(--theme-border)] bg-[var(--theme-card)] px-6 py-12 text-center text-sm text-[var(--theme-muted)] shadow-[0_24px_80px_var(--theme-shadow)]", children: "Loading Operations roster…" }) : error ? /* @__PURE__ */ jsx("section", { className: "rounded-3xl border border-[var(--theme-danger-border)] bg-[var(--theme-danger-soft)] px-6 py-12 text-center text-sm text-[var(--theme-text)] shadow-[0_24px_80px_var(--theme-shadow)]", children: error }) : view === "outputs" ? /* @__PURE__ */ jsx(FullOutputsView, {}) : /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx(
              motion.div,
              {
                initial: { opacity: 0, y: 12 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.25 },
                children: /* @__PURE__ */ jsx(
                  OrchestratorCard,
                  {
                    totalAgents: agents.length
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxs("section", { className: "grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3", children: [
              agents.map((agent, index) => /* @__PURE__ */ jsx(
                motion.div,
                {
                  initial: { opacity: 0, y: 12 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: index * 0.04, duration: 0.22 },
                  children: /* @__PURE__ */ jsx(
                    OperationsAgentCard,
                    {
                      agent,
                      onOpenSettings: (agentId) => setSettingsAgentId(agentId)
                    }
                  )
                },
                agent.id
              )),
              /* @__PURE__ */ jsxs(
                motion.button,
                {
                  type: "button",
                  initial: { opacity: 0, y: 12 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: agents.length * 0.04, duration: 0.22 },
                  onClick: () => setNewAgentOpen(true),
                  className: "flex min-h-[19rem] flex-col items-center justify-center rounded-[1.5rem] border border-dashed border-[var(--theme-border)] bg-[var(--theme-card)] p-4 text-center shadow-[0_20px_60px_color-mix(in_srgb,var(--theme-shadow)_10%,transparent)] transition-colors hover:border-[var(--theme-accent)] hover:bg-[var(--theme-accent-soft)]",
                  children: [
                    /* @__PURE__ */ jsx(
                      HugeiconsIcon,
                      {
                        icon: PlusSignIcon,
                        size: 32,
                        strokeWidth: 1.7,
                        className: "text-[var(--theme-muted)]"
                      }
                    ),
                    /* @__PURE__ */ jsx("span", { className: "mt-3 text-sm text-[var(--theme-muted)]", children: "Add Agent" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("section", { className: "rounded-3xl border border-[var(--theme-border)] bg-[var(--theme-card)] p-5 shadow-[0_24px_80px_var(--theme-shadow)]", children: [
              /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between gap-3", children: /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold text-[var(--theme-text)]", children: "Recent Activity" }),
                /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-[var(--theme-muted-2)]", children: "Latest outputs across the team" })
              ] }) }),
              /* @__PURE__ */ jsx("div", { className: "mt-4 space-y-3", children: recentActivity.length > 0 ? recentActivity.map((activity) => {
                const agent = agents.find((entry) => entry.id === activity.agentId);
                return /* @__PURE__ */ jsxs(
                  "div",
                  {
                    className: "flex flex-col gap-2 rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-bg)] px-4 py-3 md:flex-row md:items-center md:justify-between",
                    children: [
                      /* @__PURE__ */ jsxs("p", { className: "text-sm text-[var(--theme-text)]", children: [
                        /* @__PURE__ */ jsx("span", { className: "mr-2", children: agent?.meta.emoji ?? "🤖" }),
                        /* @__PURE__ */ jsxs("span", { className: "font-medium", children: [
                          agent?.name ?? activity.agentId,
                          ":"
                        ] }),
                        " ",
                        activity.summary
                      ] }),
                      /* @__PURE__ */ jsx("span", { className: "shrink-0 text-sm text-[var(--theme-muted)]", children: formatRelativeTime(activity.timestamp) })
                    ]
                  },
                  activity.id
                );
              }) : /* @__PURE__ */ jsx("div", { className: "rounded-2xl border border-dashed border-[var(--theme-border)] bg-[var(--theme-bg)] px-4 py-6 text-sm text-[var(--theme-muted)]", children: "No recent activity yet." }) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx(
          OperationsNewAgentModal,
          {
            open: newAgentOpen,
            defaultModel,
            onClose: () => setNewAgentOpen(false),
            onCreate: createAgent,
            isSaving: isCreatingAgent
          }
        ),
        /* @__PURE__ */ jsx(
          OperationsSettingsModal,
          {
            open: settingsOpen,
            settings,
            onClose: () => setSettingsOpen(false),
            onSave: saveSettings
          }
        ),
        /* @__PURE__ */ jsx(
          OperationsAgentDetail,
          {
            open: Boolean(settingsAgent),
            agent: settingsAgent,
            onClose: () => setSettingsAgentId(null),
            onSave: saveAgent,
            onDelete: async (agentId) => {
              await deleteAgent(agentId);
              setSettingsAgentId((current) => current === agentId ? null : current);
            },
            isSaving: isSavingAgent,
            isDeleting: isDeletingAgent
          }
        )
      ]
    }
  );
}
const SplitComponent = function OperationsRoute() {
  usePageTitle("Operations");
  return /* @__PURE__ */ jsx(OperationsScreen, {});
};
export {
  SplitComponent as component
};
