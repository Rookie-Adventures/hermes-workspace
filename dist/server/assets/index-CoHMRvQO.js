import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { HugeiconsIcon } from "@hugeicons/react";
import { PaintBoardIcon, SourceCodeSquareIcon, Settings02Icon, Notification03Icon, MessageMultiple01Icon, VolumeHighIcon, Mic01Icon, SparklesIcon, CloudIcon, UserIcon } from "@hugeicons/core-free-icons";
import { Link } from "@tanstack/react-router";
import { useState, useEffect, useCallback } from "react";
import { u as usePageTitle } from "./use-page-title-s7YWTsfq.js";
import { p as useSettings, c as cn, l as Switch, L as LOCALE_LABELS, y as setLocale, z as getLocale, A as getTheme, C as THEMES, E as useChatSettingsStore, I as Input, B as Button, G as setTheme, H as isDarkTheme } from "./router-Cc1BRqzF.js";
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
function PageThemeSwatch({
  colors
}) {
  return /* @__PURE__ */ jsxs("div", { className: "flex h-10 w-full overflow-hidden rounded-md border", style: {
    borderColor: colors.border,
    backgroundColor: colors.bg
  }, children: [
    /* @__PURE__ */ jsx("div", { className: "flex h-full w-4 flex-col gap-0.5 p-0.5", style: {
      backgroundColor: colors.panel
    }, children: [1, 2, 3].map((i) => /* @__PURE__ */ jsx("div", { className: "h-1.5 w-full rounded-sm", style: {
      backgroundColor: colors.border
    } }, i)) }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-1 flex-col gap-0.5 p-1", children: [
      /* @__PURE__ */ jsx("div", { className: "h-1.5 w-3/4 rounded", style: {
        backgroundColor: colors.text,
        opacity: 0.8
      } }),
      /* @__PURE__ */ jsx("div", { className: "h-1 w-1/2 rounded", style: {
        backgroundColor: colors.text,
        opacity: 0.3
      } }),
      /* @__PURE__ */ jsx("div", { className: "mt-0.5 h-1.5 w-6 rounded-full", style: {
        backgroundColor: colors.accent
      } })
    ] })
  ] });
}
const THEME_PREVIEWS = {
  "hermes-nous": {
    bg: "#031a1a",
    panel: "#082224",
    border: "rgba(255,255,255,0.12)",
    accent: "#ffac02",
    text: "#f8f1e3"
  },
  "hermes-nous-light": {
    bg: "#F8FAF8",
    panel: "#FBFDFB",
    border: "rgba(30,74,92,0.18)",
    accent: "#2557B7",
    text: "#16315F"
  },
  "hermes-official": {
    bg: "#0A0E1A",
    panel: "#11182A",
    border: "#24304A",
    accent: "#6366F1",
    text: "#E6EAF2"
  },
  "hermes-official-light": {
    bg: "#F7F7F1",
    panel: "#FAFBF6",
    border: "#CDD5DA",
    accent: "#2557B7",
    text: "#16315F"
  },
  "hermes-classic": {
    bg: "#0d0f12",
    panel: "#1a1f26",
    border: "#2a313b",
    accent: "#b98a44",
    text: "#eceff4"
  },
  "hermes-slate": {
    bg: "#0d1117",
    panel: "#1c2128",
    border: "#30363d",
    accent: "#7eb8f6",
    text: "#c9d1d9"
  },
  "hermes-classic-light": {
    bg: "#F5F2ED",
    panel: "#FFFFFF",
    border: "#D9D0C4",
    accent: "#b98a44",
    text: "#1a1f26"
  },
  "hermes-slate-light": {
    bg: "#F6F8FA",
    panel: "#FFFFFF",
    border: "#D0D7DE",
    accent: "#3b82f6",
    text: "#1F2328"
  }
};
function WorkspaceThemePicker() {
  const {
    updateSettings
  } = useSettings();
  const [current, setCurrent] = useState(() => getTheme());
  function applyWorkspaceTheme(id) {
    setTheme(id);
    updateSettings({
      theme: isDarkTheme(id) ? "dark" : "light"
    });
    setCurrent(id);
  }
  return /* @__PURE__ */ jsx("div", { className: "grid w-full grid-cols-2 gap-3 lg:grid-cols-4", children: THEMES.map((t) => {
    const isActive = current === t.id;
    return /* @__PURE__ */ jsxs("button", { type: "button", onClick: () => applyWorkspaceTheme(t.id), className: cn("flex min-h-[112px] flex-col gap-2.5 rounded-xl border p-3.5 text-left transition-all", isActive ? "border-[var(--theme-accent)] bg-[var(--theme-accent-subtle)] text-[var(--theme-text)] shadow-sm" : "border-[var(--theme-border)] bg-[var(--theme-card)] text-[var(--theme-text)] hover:-translate-y-0.5 hover:bg-[var(--theme-card2)]"), children: [
      /* @__PURE__ */ jsx(PageThemeSwatch, { colors: THEME_PREVIEWS[t.id] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5", children: [
        /* @__PURE__ */ jsx("span", { className: "text-xs", children: t.icon }),
        /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold", children: t.label }),
        isActive && /* @__PURE__ */ jsx("span", { className: "ml-auto text-[9px] font-bold uppercase tracking-wide text-[var(--theme-accent)]", children: "Active" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-[10px] leading-tight text-[var(--theme-muted)]", children: t.description })
    ] }, t.id);
  }) });
}
function SettingsSection({
  title,
  description,
  icon,
  children
}) {
  return /* @__PURE__ */ jsxs("section", { className: "rounded-2xl border border-primary-200 bg-primary-50/80 p-4 shadow-sm backdrop-blur-xl md:p-5", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-4 flex items-start gap-3", children: [
      /* @__PURE__ */ jsx("span", { className: "inline-flex size-9 items-center justify-center rounded-xl border border-primary-200 bg-primary-100/70", children: /* @__PURE__ */ jsx(HugeiconsIcon, { icon, size: 20, strokeWidth: 1.5 }) }),
      /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-base font-medium text-primary-900 text-balance", children: title }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-primary-600 text-pretty", children: description })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "space-y-4", children })
  ] });
}
function SettingsRow({
  label,
  description,
  children
}) {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-start gap-3 md:flex-row md:items-center md:justify-between", children: [
    /* @__PURE__ */ jsxs("div", { className: "min-w-0 flex-1", children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-primary-900 text-balance", children: label }),
      description ? /* @__PURE__ */ jsx("p", { className: "text-xs text-primary-600 text-pretty", children: description }) : null
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex w-full items-center gap-2 md:w-auto md:justify-end", children })
  ] });
}
const SETTINGS_NAV_ITEMS = [{
  id: "hermes",
  label: "Model & Provider"
}, {
  id: "agent",
  label: "Agent Behavior"
}, {
  id: "routing",
  label: "Smart Routing"
}, {
  id: "voice",
  label: "Voice"
}, {
  id: "display",
  label: "Display"
}, {
  id: "appearance",
  label: "Appearance"
}, {
  id: "chat",
  label: "Chat"
}, {
  id: "notifications",
  label: "Notifications"
}, {
  id: "mcp",
  label: "MCP Servers",
  to: "/settings/mcp"
}, {
  id: "language",
  label: "Language"
}];
function SettingsRoute() {
  usePageTitle("Settings");
  const {
    settings,
    updateSettings
  } = useSettings();
  const [availableModels, setAvailableModels] = useState([]);
  const [modelsError, setModelsError] = useState(false);
  useEffect(() => {
    async function fetchModels() {
      setModelsError(false);
      try {
        const res = await fetch("/api/models");
        if (!res.ok) {
          setModelsError(true);
          return;
        }
        const data = await res.json();
        const models = Array.isArray(data.models) ? data.models : [];
        setAvailableModels(models.map((m) => ({
          id: m.id || "",
          label: m.id?.split("/").pop() || m.id || ""
        })));
      } catch {
        setModelsError(true);
      }
    }
    void fetchModels();
  }, []);
  const [activeSection, setActiveSection] = useState("hermes");
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-surface text-primary-900", children: [
    /* @__PURE__ */ jsx("div", { className: "pointer-events-none fixed inset-0 bg-radial from-primary-400/20 via-transparent to-transparent" }),
    /* @__PURE__ */ jsx("div", { className: "pointer-events-none fixed inset-0 bg-gradient-to-br from-primary-100/25 via-transparent to-primary-300/20" }),
    /* @__PURE__ */ jsxs("main", { className: "relative mx-auto flex w-full max-w-5xl flex-col gap-4 px-4 pt-6 pb-24 sm:px-6 md:flex-row md:gap-6 md:pb-8 lg:pt-8", children: [
      /* @__PURE__ */ jsx("nav", { className: "hidden w-48 shrink-0 md:block", children: /* @__PURE__ */ jsxs("div", { className: "sticky top-8", children: [
        /* @__PURE__ */ jsx("h1", { className: "mb-4 text-lg font-semibold text-primary-900 px-3", children: "Settings" }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-0.5", children: SETTINGS_NAV_ITEMS.map((item) => item.to ? /* @__PURE__ */ jsx(Link, { to: item.to, className: "rounded-lg px-3 py-2 text-left text-sm text-primary-600 transition-colors hover:bg-primary-100 hover:text-primary-900", children: item.label }, item.id) : /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setActiveSection(item.id), className: cn("rounded-lg px-3 py-2 text-left text-sm transition-colors", activeSection === item.id ? "bg-accent-500/10 text-accent-600 font-medium" : "text-primary-600 hover:bg-primary-100 hover:text-primary-900"), children: item.label }, item.id)) })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "flex gap-1.5 overflow-x-auto pb-2 scrollbar-none md:hidden", children: SETTINGS_NAV_ITEMS.map((item) => item.to ? /* @__PURE__ */ jsx(Link, { to: item.to, className: "shrink-0 rounded-full bg-primary-100 px-3 py-1.5 text-xs font-medium text-primary-600 transition-colors", children: item.label }, item.id) : /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setActiveSection(item.id), className: cn("shrink-0 rounded-full px-3 py-1.5 text-xs font-medium transition-colors", activeSection === item.id ? "bg-accent-500 text-white" : "bg-primary-100 text-primary-600"), children: item.label }, item.id)) }),
      /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0 flex flex-col gap-4", children: [
        activeSection === "hermes" && /* @__PURE__ */ jsx(HermesConfigSection, { activeView: "hermes" }),
        activeSection === "agent" && /* @__PURE__ */ jsx(HermesConfigSection, { activeView: "agent" }),
        activeSection === "routing" && /* @__PURE__ */ jsx(HermesConfigSection, { activeView: "routing" }),
        activeSection === "voice" && /* @__PURE__ */ jsx(HermesConfigSection, { activeView: "voice" }),
        activeSection === "display" && /* @__PURE__ */ jsx(HermesConfigSection, { activeView: "display" }),
        activeSection === "appearance" && /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(SettingsSection, { title: "Appearance", description: "Choose a workspace theme and accent color.", icon: PaintBoardIcon, children: /* @__PURE__ */ jsx(SettingsRow, { label: "Theme", description: "Choose the workspace palette. Light and dark variants are both available.", children: /* @__PURE__ */ jsx("div", { className: "w-full", children: /* @__PURE__ */ jsx(WorkspaceThemePicker, {}) }) }) }) }),
        activeSection === "chat" && /* @__PURE__ */ jsx(ChatDisplaySection, {}),
        activeSection === "editor" && /* @__PURE__ */ jsxs(SettingsSection, { title: "Editor", description: "Configure Monaco defaults for the files workspace.", icon: SourceCodeSquareIcon, children: [
          /* @__PURE__ */ jsx(SettingsRow, { label: "Font size", description: "Adjust editor font size between 12 and 20.", children: /* @__PURE__ */ jsxs("div", { className: "flex w-full items-center gap-2 md:max-w-xs", children: [
            /* @__PURE__ */ jsx("input", { type: "range", min: 12, max: 20, value: settings.editorFontSize, onChange: (e) => updateSettings({
              editorFontSize: Number(e.target.value)
            }), className: "w-full accent-primary-900 dark:accent-primary-400", "aria-label": `Editor font size: ${settings.editorFontSize} pixels`, "aria-valuemin": 12, "aria-valuemax": 20, "aria-valuenow": settings.editorFontSize }),
            /* @__PURE__ */ jsxs("span", { className: "w-12 text-right text-sm tabular-nums text-primary-700", children: [
              settings.editorFontSize,
              "px"
            ] })
          ] }) }),
          /* @__PURE__ */ jsx(SettingsRow, { label: "Word wrap", description: "Wrap long lines in the editor by default.", children: /* @__PURE__ */ jsx(Switch, { checked: settings.editorWordWrap, onCheckedChange: (checked) => updateSettings({
            editorWordWrap: checked
          }), "aria-label": "Word wrap" }) }),
          /* @__PURE__ */ jsx(SettingsRow, { label: "Minimap", description: "Show minimap preview in Monaco editor.", children: /* @__PURE__ */ jsx(Switch, { checked: settings.editorMinimap, onCheckedChange: (checked) => updateSettings({
            editorMinimap: checked
          }), "aria-label": "Show minimap" }) })
        ] }),
        activeSection === "language" && /* @__PURE__ */ jsx(SettingsSection, { title: "Language", description: "Choose the display language for the workspace UI.", icon: Settings02Icon, children: /* @__PURE__ */ jsx(SettingsRow, { label: "Interface Language", description: "Translates navigation, labels, and buttons. Content from the agent remains in the agent's language.", children: /* @__PURE__ */ jsx("select", { value: getLocale(), onChange: (e) => {
          setLocale(e.target.value);
          window.location.reload();
        }, className: "h-9 w-full rounded-lg border border-primary-200 dark:border-gray-600 bg-primary-50 dark:bg-gray-800 px-3 text-sm text-primary-900 dark:text-gray-100 outline-none transition-colors focus-visible:ring-2 focus-visible:ring-primary-400 md:max-w-xs", children: Object.entries(LOCALE_LABELS).map(([id, label]) => /* @__PURE__ */ jsx("option", { value: id, children: label }, id)) }) }) }),
        activeSection === "notifications" && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsxs(SettingsSection, { title: "Notifications", description: "Control alert delivery and usage warning threshold.", icon: Notification03Icon, children: [
            /* @__PURE__ */ jsx(SettingsRow, { label: "Enable alerts", description: "Show usage and system alert notifications.", children: /* @__PURE__ */ jsx(Switch, { checked: settings.notificationsEnabled, onCheckedChange: (checked) => updateSettings({
              notificationsEnabled: checked
            }), "aria-label": "Enable alerts" }) }),
            /* @__PURE__ */ jsx(SettingsRow, { label: "Usage threshold", description: "Set usage warning trigger between 50% and 100%.", children: /* @__PURE__ */ jsxs("div", { className: "flex w-full items-center gap-2 md:max-w-xs", children: [
              /* @__PURE__ */ jsx("input", { type: "range", min: 50, max: 100, value: settings.usageThreshold, onChange: (e) => updateSettings({
                usageThreshold: Number(e.target.value)
              }), className: "w-full accent-primary-900 dark:accent-primary-400 disabled:opacity-50 disabled:cursor-not-allowed", disabled: !settings.notificationsEnabled, "aria-label": `Usage threshold: ${settings.usageThreshold} percent`, "aria-valuemin": 50, "aria-valuemax": 100, "aria-valuenow": settings.usageThreshold }),
              /* @__PURE__ */ jsxs("span", { className: "w-12 text-right text-sm tabular-nums text-primary-700", children: [
                settings.usageThreshold,
                "%"
              ] })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxs(SettingsSection, { title: "Smart Suggestions", description: "Get proactive model suggestions to optimize cost and quality.", icon: Settings02Icon, children: [
            /* @__PURE__ */ jsx(SettingsRow, { label: "Enable smart suggestions", description: "Suggest cheaper models for simple tasks or better models for complex work.", children: /* @__PURE__ */ jsx(Switch, { checked: settings.smartSuggestionsEnabled, onCheckedChange: (checked) => updateSettings({
              smartSuggestionsEnabled: checked
            }), "aria-label": "Enable smart suggestions" }) }),
            /* @__PURE__ */ jsx(SettingsRow, { label: "Preferred budget model", description: "Default model for cheaper suggestions (leave empty for auto-detect).", children: /* @__PURE__ */ jsxs("select", { value: settings.preferredBudgetModel, onChange: (e) => updateSettings({
              preferredBudgetModel: e.target.value
            }), className: "h-9 w-full rounded-lg border border-primary-200 dark:border-gray-600 bg-primary-50 dark:bg-gray-800 px-3 text-sm text-primary-900 dark:text-gray-100 outline-none transition-colors focus-visible:ring-2 focus-visible:ring-primary-400 dark:focus-visible:ring-primary-500 md:max-w-xs", "aria-label": "Preferred budget model", children: [
              /* @__PURE__ */ jsx("option", { value: "", children: "Auto-detect" }),
              modelsError && /* @__PURE__ */ jsx("option", { disabled: true, children: "Failed to load models" }),
              availableModels.map((model) => /* @__PURE__ */ jsx("option", { value: model.id, children: model.label }, model.id))
            ] }) }),
            /* @__PURE__ */ jsx(SettingsRow, { label: "Preferred premium model", description: "Default model for upgrade suggestions (leave empty for auto-detect).", children: /* @__PURE__ */ jsxs("select", { value: settings.preferredPremiumModel, onChange: (e) => updateSettings({
              preferredPremiumModel: e.target.value
            }), className: "h-9 w-full rounded-lg border border-primary-200 dark:border-gray-600 bg-primary-50 dark:bg-gray-800 px-3 text-sm text-primary-900 dark:text-gray-100 outline-none transition-colors focus-visible:ring-2 focus-visible:ring-primary-400 dark:focus-visible:ring-primary-500 md:max-w-xs", "aria-label": "Preferred premium model", children: [
              /* @__PURE__ */ jsx("option", { value: "", children: "Auto-detect" }),
              modelsError && /* @__PURE__ */ jsx("option", { disabled: true, children: "Failed to load models" }),
              availableModels.map((model) => /* @__PURE__ */ jsx("option", { value: model.id, children: model.label }, model.id))
            ] }) }),
            /* @__PURE__ */ jsx(SettingsRow, { label: "Only suggest cheaper models", description: "Never suggest upgrades, only suggest cheaper alternatives.", children: /* @__PURE__ */ jsx(Switch, { checked: settings.onlySuggestCheaper, onCheckedChange: (checked) => updateSettings({
              onlySuggestCheaper: checked
            }), "aria-label": "Only suggest cheaper models" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsx("footer", { className: "mt-auto pt-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 rounded-2xl border border-primary-200 bg-primary-50/70 p-3 text-sm text-primary-600 backdrop-blur-sm", children: [
          /* @__PURE__ */ jsx(HugeiconsIcon, { icon: Settings02Icon, size: 20, strokeWidth: 1.5 }),
          /* @__PURE__ */ jsx("span", { className: "text-pretty", children: "Changes are saved automatically to local storage." })
        ] }) })
      ] })
    ] })
  ] });
}
function ChatDisplaySection() {
  const {
    settings: chatSettings,
    updateSettings: updateChatSettings
  } = useChatSettingsStore();
  useSettings();
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(SettingsSection, { title: "Chat Display", description: "Control what's visible in chat messages.", icon: MessageMultiple01Icon, children: [
    /* @__PURE__ */ jsx(SettingsRow, { label: "Show tool messages", description: "Display tool call details when the agent uses tools.", children: /* @__PURE__ */ jsx(Switch, { checked: chatSettings.showToolMessages, onCheckedChange: (checked) => updateChatSettings({
      showToolMessages: checked
    }), "aria-label": "Show tool messages" }) }),
    /* @__PURE__ */ jsx(SettingsRow, { label: "Show reasoning blocks", description: "Display model thinking and reasoning process.", children: /* @__PURE__ */ jsx(Switch, { checked: chatSettings.showReasoningBlocks, onCheckedChange: (checked) => updateChatSettings({
      showReasoningBlocks: checked
    }), "aria-label": "Show reasoning blocks" }) })
  ] }) });
}
process.env.HERMES_API_URL || "http://127.0.0.1:8642";
function HermesConfigSection({
  activeView = "hermes"
}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState(null);
  const [editingKey, setEditingKey] = useState(null);
  const [keyInput, setKeyInput] = useState("");
  const [modelInput, setModelInput] = useState("");
  const [providerInput, setProviderInput] = useState("");
  const [baseUrlInput, setBaseUrlInput] = useState("");
  const [availableProviders, setAvailableProviders] = useState([]);
  const [availableModels, setAvailableModels] = useState([]);
  const [loadingModels, setLoadingModels] = useState(false);
  const syncInputsFromData = useCallback((configData) => {
    setModelInput(configData.activeModel || "");
    setProviderInput(configData.activeProvider || "");
    setBaseUrlInput(configData.config?.base_url || "");
  }, []);
  const fetchConfig = useCallback(async () => {
    const res = await fetch("/api/hermes-config");
    const configData = await res.json();
    setData(configData);
    syncInputsFromData(configData);
    return configData;
  }, [syncInputsFromData]);
  const fetchModelsForProvider = useCallback(async (provider) => {
    if (!provider) {
      setAvailableModels([]);
      return;
    }
    setLoadingModels(true);
    try {
      const res = await fetch(`/api/hermes-proxy/api/available-models?provider=${encodeURIComponent(provider)}`);
      if (res.ok) {
        const result = await res.json();
        setAvailableModels(result.models || []);
        if (result.providers?.length) setAvailableProviders(result.providers);
      }
    } catch {
    }
    setLoadingModels(false);
  }, []);
  useEffect(() => {
    fetchConfig().then((configData) => {
      setLoading(false);
      if (configData.activeProvider) {
        void fetchModelsForProvider(configData.activeProvider);
      }
    }).catch(() => setLoading(false));
  }, [fetchConfig, fetchModelsForProvider]);
  const saveConfig = async (updates) => {
    setSaving(true);
    setSaveMessage(null);
    try {
      const res = await fetch("/api/hermes-config", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(updates)
      });
      const result = await res.json();
      setSaveMessage(result.message || "Saved");
      const refreshData = await fetchConfig();
      if (refreshData.activeProvider) {
        void fetchModelsForProvider(refreshData.activeProvider);
      }
      setTimeout(() => setSaveMessage(null), 3e3);
    } catch {
      setSaveMessage("Failed to save");
    }
    setSaving(false);
  };
  const selectClassName = "h-9 w-full rounded-lg border border-primary-200 bg-primary-50 px-3 text-sm text-primary-900 outline-none transition-colors focus-visible:ring-2 focus-visible:ring-primary-400 md:max-w-sm";
  const readNumber = (value, fallback) => {
    if (typeof value === "number" && Number.isFinite(value)) return value;
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : fallback;
  };
  const readBoolean = (value, fallback) => {
    if (typeof value === "boolean") return value;
    if (typeof value === "string") return value === "true";
    return fallback;
  };
  const saveNumberField = (section, field, rawValue, fallback) => {
    const value = rawValue === "" ? fallback : Number(rawValue);
    if (!Number.isFinite(value)) return;
    void saveConfig({
      config: {
        [section]: {
          [field]: value
        }
      }
    });
  };
  if (loading) {
    return /* @__PURE__ */ jsx(SettingsSection, { title: "Hermes Agent", description: "Loading configuration...", icon: Settings02Icon, children: /* @__PURE__ */ jsx("div", { className: "h-20 animate-pulse rounded-lg", style: {
      backgroundColor: "var(--theme-panel)"
    } }) });
  }
  if (!data) {
    return /* @__PURE__ */ jsx(SettingsSection, { title: "Hermes Agent", description: "Could not load Hermes configuration.", icon: Settings02Icon, children: /* @__PURE__ */ jsx("p", { className: "text-sm", style: {
      color: "var(--theme-muted)"
    }, children: "Make sure Hermes Agent is running on localhost:8642" }) });
  }
  const memoryConfig = data.config.memory || {};
  const terminalConfig = data.config.terminal || {};
  const displayConfig = data.config.display || {};
  const agentConfig = data.config.agent || {};
  const smartRouting = data.config.smart_model_routing || {};
  const ttsConfig = data.config.tts || {};
  const sttConfig = data.config.stt || {};
  const customProviders = Array.isArray(data.config.custom_providers) ? data.config.custom_providers : [];
  const ttsProvider = ttsConfig.provider || "edge";
  const ttsEdge = ttsConfig.edge || {};
  const ttsElevenLabs = ttsConfig.elevenlabs || {};
  const ttsOpenAi = ttsConfig.openai || {};
  const sttProvider = sttConfig.provider || "local";
  const sttLocal = sttConfig.local || {};
  const renderHermesOverview = () => /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(SettingsSection, { title: "Model & Provider", description: "Configure the default AI model for Hermes Agent.", icon: SourceCodeSquareIcon, children: [
      /* @__PURE__ */ jsx(SettingsRow, { label: "Provider", description: "Select the inference provider.", children: /* @__PURE__ */ jsx("div", { className: "flex w-full max-w-sm gap-2", children: availableProviders.length > 0 ? /* @__PURE__ */ jsx("select", { value: providerInput, onChange: (e) => {
        const newProvider = e.target.value;
        setProviderInput(newProvider);
        setModelInput("");
        void fetchModelsForProvider(newProvider);
      }, className: selectClassName, children: availableProviders.map((p) => /* @__PURE__ */ jsxs("option", { value: p.id, children: [
        p.label,
        p.authenticated ? " ✓" : ""
      ] }, p.id)) }) : /* @__PURE__ */ jsx(Input, { value: providerInput, onChange: (e) => setProviderInput(e.target.value), placeholder: "e.g. ollama, anthropic, openai-codex", className: "flex-1" }) }) }),
      /* @__PURE__ */ jsx(SettingsRow, { label: "Model", description: "The model Hermes uses for conversations.", children: /* @__PURE__ */ jsx("div", { className: "flex w-full max-w-sm gap-2", children: availableModels.length > 0 ? /* @__PURE__ */ jsxs("select", { value: modelInput, onChange: (e) => setModelInput(e.target.value), className: `${selectClassName} font-mono`, children: [
        !availableModels.some((m) => m.id === modelInput) && modelInput && /* @__PURE__ */ jsxs("option", { value: modelInput, children: [
          modelInput,
          " (current)"
        ] }),
        availableModels.map((m) => /* @__PURE__ */ jsxs("option", { value: m.id, children: [
          m.id,
          m.description ? ` — ${m.description}` : ""
        ] }, m.id))
      ] }) : /* @__PURE__ */ jsx(Input, { value: modelInput, onChange: (e) => setModelInput(e.target.value), placeholder: loadingModels ? "Loading models..." : "e.g. qwen3.5:35b", className: "flex-1 font-mono" }) }) }),
      /* @__PURE__ */ jsx(SettingsRow, { label: "Base URL", description: "For local providers (Ollama, LM Studio, MLX). Leave blank for cloud.", children: /* @__PURE__ */ jsx("div", { className: "flex w-full max-w-sm gap-2", children: /* @__PURE__ */ jsx(Input, { value: baseUrlInput, onChange: (e) => setBaseUrlInput(e.target.value), placeholder: "e.g. http://localhost:11434/v1", className: "flex-1 font-mono text-sm" }) }) }),
      /* @__PURE__ */ jsx("div", { className: "flex justify-end pt-2", children: /* @__PURE__ */ jsx(Button, { size: "sm", disabled: saving, onClick: () => {
        const configUpdate = {
          model: modelInput.trim(),
          provider: providerInput.trim(),
          base_url: baseUrlInput.trim() || null
        };
        void saveConfig({
          config: configUpdate
        });
      }, children: saving ? "Saving..." : "Save Model" }) })
    ] }),
    /* @__PURE__ */ jsx(SettingsSection, { title: "API Keys", description: "Manage provider API keys stored in ~/.hermes/.env", icon: CloudIcon, children: data.providers.filter((p) => p.envKeys.length > 0).map((provider) => /* @__PURE__ */ jsx(SettingsRow, { label: provider.name, description: provider.configured ? "✅ Configured" : "❌ Not configured", children: /* @__PURE__ */ jsx("div", { className: "flex w-full max-w-sm items-center gap-2", children: provider.envKeys.map((envKey) => /* @__PURE__ */ jsx("div", { className: "flex-1", children: editingKey === envKey ? /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
      /* @__PURE__ */ jsx(Input, { type: "password", value: keyInput, onChange: (e) => setKeyInput(e.target.value), placeholder: `Enter ${envKey}`, className: "flex-1" }),
      /* @__PURE__ */ jsx(Button, { size: "sm", onClick: () => {
        void saveConfig({
          env: {
            [envKey]: keyInput
          }
        });
        setEditingKey(null);
        setKeyInput("");
      }, children: "Save" }),
      /* @__PURE__ */ jsx(Button, { size: "sm", variant: "ghost", onClick: () => {
        setEditingKey(null);
        setKeyInput("");
      }, children: "✕" })
    ] }) : /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsx("span", { className: "text-xs font-mono", style: {
        color: "var(--theme-muted)"
      }, children: provider.maskedKeys[envKey] || "Not set" }),
      /* @__PURE__ */ jsx(Button, { size: "sm", variant: "ghost", onClick: () => {
        setEditingKey(envKey);
        setKeyInput("");
      }, children: provider.configured ? "Change" : "Add" })
    ] }) }, envKey)) }) }, provider.id)) }),
    /* @__PURE__ */ jsxs(SettingsSection, { title: "Memory", description: "Configure Hermes Agent memory and user profiles.", icon: UserIcon, children: [
      /* @__PURE__ */ jsx(SettingsRow, { label: "Memory enabled", description: "Store and recall memories across sessions.", children: /* @__PURE__ */ jsx(Switch, { checked: memoryConfig.memory_enabled !== false, onCheckedChange: (checked) => void saveConfig({
        config: {
          memory: {
            memory_enabled: checked
          }
        }
      }) }) }),
      /* @__PURE__ */ jsx(SettingsRow, { label: "User profile", description: "Remember user preferences and context.", children: /* @__PURE__ */ jsx(Switch, { checked: memoryConfig.user_profile_enabled !== false, onCheckedChange: (checked) => void saveConfig({
        config: {
          memory: {
            user_profile_enabled: checked
          }
        }
      }) }) })
    ] }),
    /* @__PURE__ */ jsxs(SettingsSection, { title: "Terminal", description: "Shell execution settings.", icon: SourceCodeSquareIcon, children: [
      /* @__PURE__ */ jsx(SettingsRow, { label: "Backend", description: "Terminal execution backend.", children: /* @__PURE__ */ jsx("span", { className: "text-sm font-mono", style: {
        color: "var(--theme-muted)"
      }, children: terminalConfig.backend || "local" }) }),
      /* @__PURE__ */ jsx(SettingsRow, { label: "Timeout", description: "Max seconds for terminal commands.", children: /* @__PURE__ */ jsx(Input, { type: "number", min: 10, value: readNumber(terminalConfig.timeout, 180), onChange: (e) => saveNumberField("terminal", "timeout", e.target.value, 180), className: "md:w-28" }) })
    ] }),
    /* @__PURE__ */ jsx(SettingsSection, { title: "Custom Providers", description: "Read-only provider details loaded from config.yaml.", icon: CloudIcon, children: /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
      customProviders.length === 0 ? /* @__PURE__ */ jsx("div", { className: "rounded-xl border border-primary-200 bg-primary-100/40 p-3 text-sm text-primary-600", children: "No custom providers configured." }) : customProviders.map((provider, index) => /* @__PURE__ */ jsx("div", { className: "rounded-xl border border-primary-200 bg-primary-100/40 p-3", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-2 text-sm md:grid-cols-3", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-wide text-primary-500", children: "Name" }),
          /* @__PURE__ */ jsx("p", { className: "font-medium text-primary-900", children: String(provider.name || "Unnamed") })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-wide text-primary-500", children: "Base URL" }),
          /* @__PURE__ */ jsx("p", { className: "font-mono text-xs text-primary-700 break-all", children: String(provider.base_url || "Not set") })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-wide text-primary-500", children: "Type" }),
          /* @__PURE__ */ jsx("p", { className: "text-primary-700", children: String(provider.type || provider.auth_type || "Unknown") })
        ] })
      ] }) }, `${String(provider.name || provider.base_url || index)}`)),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3 rounded-xl border border-primary-200 bg-primary-100/40 p-3 md:flex-row md:items-center md:justify-between", children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm text-primary-600", children: "Edit custom providers in config.yaml for security." }),
        /* @__PURE__ */ jsx(Button, { size: "sm", variant: "outline", onClick: () => void navigator.clipboard?.writeText(data.hermesHome), children: "Copy config path" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs(SettingsSection, { title: "About", description: "Hermes Agent runtime information.", icon: Notification03Icon, children: [
      /* @__PURE__ */ jsx(SettingsRow, { label: "Config location", description: "Where Hermes stores its configuration.", children: /* @__PURE__ */ jsx("span", { className: "text-xs font-mono", style: {
        color: "var(--theme-muted)"
      }, children: data.hermesHome }) }),
      /* @__PURE__ */ jsx(SettingsRow, { label: "Active provider", description: "Current inference provider.", children: /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", style: {
        color: "var(--theme-accent)"
      }, children: data.providers.find((p) => p.id === data.activeProvider)?.name || data.activeProvider }) })
    ] })
  ] });
  const renderAgentBehavior = () => /* @__PURE__ */ jsxs(SettingsSection, { title: "Agent Behavior", description: "Control agent execution limits and tool access.", icon: Settings02Icon, children: [
    /* @__PURE__ */ jsx(SettingsRow, { label: "Max turns", description: "Maximum agent turns per request (1-100).", children: /* @__PURE__ */ jsx(Input, { type: "number", min: 1, max: 100, value: readNumber(agentConfig.max_turns, 50), onChange: (e) => saveNumberField("agent", "max_turns", e.target.value, 50), className: "md:w-28" }) }),
    /* @__PURE__ */ jsx(SettingsRow, { label: "Gateway timeout", description: "Seconds before gateway times out a request.", children: /* @__PURE__ */ jsx(Input, { type: "number", min: 10, max: 600, value: readNumber(agentConfig.gateway_timeout, 120), onChange: (e) => saveNumberField("agent", "gateway_timeout", e.target.value, 120), className: "md:w-28" }) }),
    /* @__PURE__ */ jsx(SettingsRow, { label: "Tool use enforcement", description: "Whether the agent must use tools when available.", children: /* @__PURE__ */ jsxs("select", { value: agentConfig.tool_use_enforcement || "auto", onChange: (e) => void saveConfig({
      config: {
        agent: {
          tool_use_enforcement: e.target.value
        }
      }
    }), className: selectClassName, children: [
      /* @__PURE__ */ jsx("option", { value: "auto", children: "auto" }),
      /* @__PURE__ */ jsx("option", { value: "required", children: "required" }),
      /* @__PURE__ */ jsx("option", { value: "none", children: "none" })
    ] }) })
  ] });
  const renderSmartRouting = () => /* @__PURE__ */ jsxs(SettingsSection, { title: "Smart Model Routing", description: "Automatically route simple queries to cheaper models.", icon: SparklesIcon, children: [
    /* @__PURE__ */ jsx(SettingsRow, { label: "Enable smart routing", description: "Route simple queries to a cheaper model automatically.", children: /* @__PURE__ */ jsx(Switch, { checked: readBoolean(smartRouting.enabled, false), onCheckedChange: (checked) => void saveConfig({
      config: {
        smart_model_routing: {
          enabled: checked
        }
      }
    }) }) }),
    /* @__PURE__ */ jsx(SettingsRow, { label: "Cheap model", description: "Model to use for simple queries.", children: /* @__PURE__ */ jsxs("select", { value: smartRouting.cheap_model || "", onChange: (e) => void saveConfig({
      config: {
        smart_model_routing: {
          cheap_model: e.target.value
        }
      }
    }), className: selectClassName, children: [
      /* @__PURE__ */ jsx("option", { value: "", children: "Select model" }),
      availableModels.map((model) => /* @__PURE__ */ jsx("option", { value: model.id, children: model.id }, model.id))
    ] }) }),
    /* @__PURE__ */ jsx(SettingsRow, { label: "Max simple chars", description: "Messages shorter than this use the cheap model.", children: /* @__PURE__ */ jsx(Input, { type: "number", min: 1, value: readNumber(smartRouting.max_simple_chars, 500), onChange: (e) => saveNumberField("smart_model_routing", "max_simple_chars", e.target.value, 500), className: "md:w-32" }) }),
    /* @__PURE__ */ jsx(SettingsRow, { label: "Max simple words", description: "Messages with fewer words use the cheap model.", children: /* @__PURE__ */ jsx(Input, { type: "number", min: 1, value: readNumber(smartRouting.max_simple_words, 80), onChange: (e) => saveNumberField("smart_model_routing", "max_simple_words", e.target.value, 80), className: "md:w-32" }) })
  ] });
  const renderVoice = () => /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxs(SettingsSection, { title: "Text-to-Speech", description: "Configure voice output for agent responses.", icon: VolumeHighIcon, children: [
      /* @__PURE__ */ jsx(SettingsRow, { label: "TTS provider", description: "Which TTS engine to use.", children: /* @__PURE__ */ jsxs("select", { value: ttsProvider, onChange: (e) => void saveConfig({
        config: {
          tts: {
            provider: e.target.value
          }
        }
      }), className: selectClassName, children: [
        /* @__PURE__ */ jsx("option", { value: "edge", children: "Edge TTS (free)" }),
        /* @__PURE__ */ jsx("option", { value: "elevenlabs", children: "ElevenLabs" }),
        /* @__PURE__ */ jsx("option", { value: "openai", children: "OpenAI TTS" }),
        /* @__PURE__ */ jsx("option", { value: "neutts", children: "NeuTTS" })
      ] }) }),
      ttsProvider === "edge" && /* @__PURE__ */ jsx(SettingsRow, { label: "Voice", description: "Edge voice name.", children: /* @__PURE__ */ jsx(Input, { value: ttsEdge.voice || "", onChange: (e) => void saveConfig({
        config: {
          tts: {
            edge: {
              voice: e.target.value
            }
          }
        }
      }), placeholder: "en-US-AriaNeural", className: "md:w-64" }) }),
      ttsProvider === "elevenlabs" && /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(SettingsRow, { label: "Voice ID", description: "ElevenLabs voice_id.", children: /* @__PURE__ */ jsx(Input, { value: ttsElevenLabs.voice_id || "", onChange: (e) => void saveConfig({
          config: {
            tts: {
              elevenlabs: {
                voice_id: e.target.value
              }
            }
          }
        }), className: "md:w-64" }) }),
        /* @__PURE__ */ jsx(SettingsRow, { label: "Model", description: "ElevenLabs model name.", children: /* @__PURE__ */ jsx(Input, { value: ttsElevenLabs.model || "", onChange: (e) => void saveConfig({
          config: {
            tts: {
              elevenlabs: {
                model: e.target.value
              }
            }
          }
        }), className: "md:w-64" }) })
      ] }),
      ttsProvider === "openai" && /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(SettingsRow, { label: "Voice", description: "alloy, echo, fable, onyx, nova, shimmer", children: /* @__PURE__ */ jsx("select", { value: ttsOpenAi.voice || "alloy", onChange: (e) => void saveConfig({
          config: {
            tts: {
              openai: {
                voice: e.target.value
              }
            }
          }
        }), className: selectClassName, children: ["alloy", "echo", "fable", "onyx", "nova", "shimmer"].map((voice) => /* @__PURE__ */ jsx("option", { value: voice, children: voice }, voice)) }) }),
        /* @__PURE__ */ jsx(SettingsRow, { label: "Model", description: "OpenAI TTS model.", children: /* @__PURE__ */ jsx(Input, { value: ttsOpenAi.model || "", onChange: (e) => void saveConfig({
          config: {
            tts: {
              openai: {
                model: e.target.value
              }
            }
          }
        }), placeholder: "tts-1", className: "md:w-64" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(SettingsSection, { title: "Speech-to-Text", description: "Configure voice input recognition.", icon: Mic01Icon, children: [
      /* @__PURE__ */ jsx(SettingsRow, { label: "Enable STT", description: "Turn on voice input.", children: /* @__PURE__ */ jsx(Switch, { checked: readBoolean(sttConfig.enabled, false), onCheckedChange: (checked) => void saveConfig({
        config: {
          stt: {
            enabled: checked
          }
        }
      }) }) }),
      /* @__PURE__ */ jsx(SettingsRow, { label: "STT provider", description: "Which speech engine to use.", children: /* @__PURE__ */ jsxs("select", { value: sttProvider, onChange: (e) => void saveConfig({
        config: {
          stt: {
            provider: e.target.value
          }
        }
      }), className: selectClassName, children: [
        /* @__PURE__ */ jsx("option", { value: "local", children: "Local (Whisper)" }),
        /* @__PURE__ */ jsx("option", { value: "openai", children: "OpenAI Whisper API" })
      ] }) }),
      sttProvider === "local" && /* @__PURE__ */ jsx(SettingsRow, { label: "Model size", description: "tiny, base, small, medium, large", children: /* @__PURE__ */ jsx("select", { value: sttLocal.model_size || "base", onChange: (e) => void saveConfig({
        config: {
          stt: {
            local: {
              model_size: e.target.value
            }
          }
        }
      }), className: selectClassName, children: ["tiny", "base", "small", "medium", "large"].map((size) => /* @__PURE__ */ jsx("option", { value: size, children: size }, size)) }) })
    ] })
  ] });
  const renderDisplay = () => /* @__PURE__ */ jsxs(SettingsSection, { title: "Display", description: "CLI display preferences reflected in the agent UI.", icon: PaintBoardIcon, children: [
    /* @__PURE__ */ jsx(SettingsRow, { label: "Personality", description: "Agent response style.", children: /* @__PURE__ */ jsx("select", { value: displayConfig.personality || "default", onChange: (e) => void saveConfig({
      config: {
        display: {
          personality: e.target.value
        }
      }
    }), className: selectClassName, children: ["default", "concise", "verbose", "creative"].map((value) => /* @__PURE__ */ jsx("option", { value, children: value }, value)) }) }),
    /* @__PURE__ */ jsx(SettingsRow, { label: "Streaming", description: "Stream tokens as they arrive.", children: /* @__PURE__ */ jsx(Switch, { checked: readBoolean(displayConfig.streaming, true), onCheckedChange: (checked) => void saveConfig({
      config: {
        display: {
          streaming: checked
        }
      }
    }) }) }),
    /* @__PURE__ */ jsx(SettingsRow, { label: "Show reasoning", description: "Expose model reasoning blocks in the UI.", children: /* @__PURE__ */ jsx(Switch, { checked: readBoolean(displayConfig.show_reasoning, false), onCheckedChange: (checked) => void saveConfig({
      config: {
        display: {
          show_reasoning: checked
        }
      }
    }) }) }),
    /* @__PURE__ */ jsx(SettingsRow, { label: "Show cost", description: "Display usage cost metadata.", children: /* @__PURE__ */ jsx(Switch, { checked: readBoolean(displayConfig.show_cost, false), onCheckedChange: (checked) => void saveConfig({
      config: {
        display: {
          show_cost: checked
        }
      }
    }) }) }),
    /* @__PURE__ */ jsx(SettingsRow, { label: "Compact", description: "Use a denser display layout.", children: /* @__PURE__ */ jsx(Switch, { checked: readBoolean(displayConfig.compact, false), onCheckedChange: (checked) => void saveConfig({
      config: {
        display: {
          compact: checked
        }
      }
    }) }) }),
    /* @__PURE__ */ jsx(SettingsRow, { label: "Skin", description: "CLI theme skin.", children: /* @__PURE__ */ jsx("span", { className: "text-sm font-mono", style: {
      color: "var(--theme-muted)"
    }, children: displayConfig.skin || "default" }) })
  ] });
  const sectionContent = {
    hermes: renderHermesOverview(),
    agent: renderAgentBehavior(),
    routing: renderSmartRouting(),
    voice: renderVoice(),
    display: renderDisplay()
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    saveMessage && /* @__PURE__ */ jsx("div", { className: "rounded-lg px-3 py-2 text-sm font-medium", style: {
      backgroundColor: saveMessage.includes("Failed") ? "rgba(239,68,68,0.15)" : "rgba(34,197,94,0.15)",
      color: saveMessage.includes("Failed") ? "#ef4444" : "#22c55e"
    }, children: saveMessage }),
    sectionContent[activeView]
  ] });
}
export {
  SettingsRoute as component
};
