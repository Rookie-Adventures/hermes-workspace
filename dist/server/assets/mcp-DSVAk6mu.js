import { jsxs, jsx } from "react/jsx-runtime";
import { u as usePageTitle } from "./use-page-title-CljdUyfw.js";
import { ArrowLeft01Icon, Add01Icon, RefreshIcon, Edit01Icon, Delete02Icon, Copy01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Link } from "@tanstack/react-router";
import { useState, useEffect, useMemo } from "react";
import { B as Button, t as toast, c as cn, w as writeTextToClipboard, D as DialogRoot, b as DialogContent, d as DialogTitle, e as DialogDescription, I as Input, T as Tabs, f as TabsList, g as TabsTab, h as TabsPanel, J as DialogClose } from "./router-COrtOO2b.js";
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
const EMPTY_DRAFT = {
  name: "",
  transport: "stdio",
  command: "",
  args: "",
  envText: "",
  url: "",
  headersText: "",
  timeout: ""
};
function recordToLines(value) {
  if (!value) return "";
  return Object.entries(value).map(([key, entry]) => `${key}=${entry}`).join("\n");
}
function parseKeyValueLines(value) {
  const entries = value.split("\n").map((line) => line.trim()).filter(Boolean).flatMap((line) => {
    const separatorIndex = line.indexOf("=");
    if (separatorIndex === -1) return [];
    const key = line.slice(0, separatorIndex).trim();
    const entry = line.slice(separatorIndex + 1).trim();
    return key ? [[key, entry]] : [];
  });
  return entries.length > 0 ? Object.fromEntries(entries) : void 0;
}
function parseArgs(value) {
  const items = value.split(",").map((entry) => entry.trim()).filter(Boolean);
  return items.length > 0 ? items : void 0;
}
function buildDraft(server) {
  if (!server) return EMPTY_DRAFT;
  return {
    name: server.name,
    transport: server.transport,
    command: server.command ?? "",
    args: (server.args ?? []).join(", "),
    envText: recordToLines(server.env),
    url: server.url ?? "",
    headersText: recordToLines(server.headers),
    timeout: server.timeout ? String(server.timeout) : ""
  };
}
function formatServerSummary(server) {
  if (server.transport === "http") return server.url || "No URL configured";
  const args = server.args?.join(" ") || "";
  return [server.command, args].filter(Boolean).join(" ").trim() || "No command configured";
}
function yamlScalar(value) {
  if (/^[A-Za-z0-9_./:@${}-]+$/.test(value)) return value;
  return JSON.stringify(value);
}
function yamlArray(values) {
  return `[${values.map((value) => yamlScalar(value)).join(", ")}]`;
}
function yamlMap(value, indent) {
  return Object.entries(value).map(
    ([key, entry]) => `${indent}${key}: ${yamlScalar(entry)}`
  );
}
function buildYamlSnippet(servers) {
  if (servers.length === 0) return "mcp_servers: {}";
  const lines = ["mcp_servers:"];
  for (const server of servers) {
    lines.push(`  ${server.name}:`);
    if (server.transport === "http") {
      if (server.url) lines.push(`    url: ${yamlScalar(server.url)}`);
      if (server.headers && Object.keys(server.headers).length > 0) {
        lines.push("    headers:");
        lines.push(...yamlMap(server.headers, "      "));
      }
    } else {
      if (server.command)
        lines.push(`    command: ${yamlScalar(server.command)}`);
      if (server.args && server.args.length > 0) {
        lines.push(`    args: ${yamlArray(server.args)}`);
      }
      if (server.env && Object.keys(server.env).length > 0) {
        lines.push("    env:");
        lines.push(...yamlMap(server.env, "      "));
      }
    }
    if (typeof server.timeout === "number")
      lines.push(`    timeout: ${server.timeout}`);
    if (typeof server.connectTimeout === "number") {
      lines.push(`    connect_timeout: ${server.connectTimeout}`);
    }
    if (server.auth && typeof server.auth === "object" && !Array.isArray(server.auth)) {
      lines.push("    auth:");
      lines.push(
        ...Object.entries(server.auth).map(
          ([key, value]) => `      ${key}: ${yamlScalar(String(value))}`
        )
      );
    }
  }
  return lines.join("\n");
}
function validateDraft(draft, existingNames, originalName) {
  const name = draft.name.trim();
  if (!name) return "Server name is required.";
  if (!/^[A-Za-z0-9_-]+$/.test(name)) {
    return "Use letters, numbers, underscores, or hyphens for the server name.";
  }
  if (existingNames.includes(name) && name !== originalName) {
    return "A server with that name already exists.";
  }
  if (draft.transport === "stdio" && !draft.command.trim()) {
    return "Command is required for stdio servers.";
  }
  if (draft.transport === "http" && !draft.url.trim()) {
    return "URL is required for HTTP servers.";
  }
  if (draft.timeout.trim()) {
    const timeout = Number(draft.timeout);
    if (!Number.isFinite(timeout) || timeout <= 0) {
      return "Timeout must be a positive number.";
    }
  }
  return null;
}
function ServerDialog(props) {
  const { open, onOpenChange, draft, setDraft, onSave, editingName } = props;
  return /* @__PURE__ */ jsx(DialogRoot, { open, onOpenChange, children: /* @__PURE__ */ jsx(DialogContent, { className: "w-[min(720px,96vw)]", children: /* @__PURE__ */ jsxs("div", { className: "space-y-5 p-5 md:p-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
      /* @__PURE__ */ jsx(DialogTitle, { children: editingName ? "Edit MCP Server" : "Add MCP Server" }),
      /* @__PURE__ */ jsx(DialogDescription, { children: "Configure the server details, then generate an updated YAML snippet." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid gap-4 md:grid-cols-2", children: [
      /* @__PURE__ */ jsxs("label", { className: "space-y-1.5 md:col-span-2", children: [
        /* @__PURE__ */ jsx("span", { className: "text-xs font-medium uppercase tracking-[0.12em] text-primary-600", children: "Name" }),
        /* @__PURE__ */ jsx(
          Input,
          {
            value: draft.name,
            placeholder: "filesystem",
            onChange: (event) => setDraft((current) => ({
              ...current,
              name: event.target.value
            }))
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "md:col-span-2", children: /* @__PURE__ */ jsxs(
        Tabs,
        {
          value: draft.transport,
          onValueChange: (value) => setDraft((current) => ({
            ...current,
            transport: value
          })),
          children: [
            /* @__PURE__ */ jsxs(TabsList, { className: "rounded-xl border border-primary-200 bg-primary-50 p-1", children: [
              /* @__PURE__ */ jsx(TabsTab, { value: "stdio", children: "Stdio" }),
              /* @__PURE__ */ jsx(TabsTab, { value: "http", children: "HTTP" })
            ] }),
            /* @__PURE__ */ jsxs(TabsPanel, { value: "stdio", className: "mt-4 space-y-4", children: [
              /* @__PURE__ */ jsxs("label", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsx("span", { className: "text-xs font-medium uppercase tracking-[0.12em] text-primary-600", children: "Command" }),
                /* @__PURE__ */ jsx(
                  Input,
                  {
                    value: draft.command,
                    placeholder: "npx",
                    onChange: (event) => setDraft((current) => ({
                      ...current,
                      command: event.target.value
                    }))
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("label", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsx("span", { className: "text-xs font-medium uppercase tracking-[0.12em] text-primary-600", children: "Args" }),
                /* @__PURE__ */ jsx(
                  Input,
                  {
                    value: draft.args,
                    placeholder: "-y, @modelcontextprotocol/server-filesystem, /tmp",
                    onChange: (event) => setDraft((current) => ({
                      ...current,
                      args: event.target.value
                    }))
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("label", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsx("span", { className: "text-xs font-medium uppercase tracking-[0.12em] text-primary-600", children: "Env Vars" }),
                /* @__PURE__ */ jsx(
                  "textarea",
                  {
                    value: draft.envText,
                    rows: 4,
                    placeholder: "API_KEY=${MCP_API_KEY}\nLOG_LEVEL=debug",
                    className: "min-h-[108px] w-full rounded-lg border border-primary-200 bg-surface px-3 py-2 text-sm text-primary-900 outline-none placeholder:text-primary-500",
                    onChange: (event) => setDraft((current) => ({
                      ...current,
                      envText: event.target.value
                    }))
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxs(TabsPanel, { value: "http", className: "mt-4 space-y-4", children: [
              /* @__PURE__ */ jsxs("label", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsx("span", { className: "text-xs font-medium uppercase tracking-[0.12em] text-primary-600", children: "URL" }),
                /* @__PURE__ */ jsx(
                  Input,
                  {
                    value: draft.url,
                    placeholder: "https://api.github.com/mcp",
                    onChange: (event) => setDraft((current) => ({
                      ...current,
                      url: event.target.value
                    }))
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("label", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsx("span", { className: "text-xs font-medium uppercase tracking-[0.12em] text-primary-600", children: "Headers" }),
                /* @__PURE__ */ jsx(
                  "textarea",
                  {
                    value: draft.headersText,
                    rows: 4,
                    placeholder: "Authorization=Bearer ${GITHUB_TOKEN}\nX-Workspace=hermes",
                    className: "min-h-[108px] w-full rounded-lg border border-primary-200 bg-surface px-3 py-2 text-sm text-primary-900 outline-none placeholder:text-primary-500",
                    onChange: (event) => setDraft((current) => ({
                      ...current,
                      headersText: event.target.value
                    }))
                  }
                )
              ] })
            ] })
          ]
        }
      ) }),
      /* @__PURE__ */ jsxs("label", { className: "space-y-1.5 md:col-span-2", children: [
        /* @__PURE__ */ jsx("span", { className: "text-xs font-medium uppercase tracking-[0.12em] text-primary-600", children: "Timeout (seconds)" }),
        /* @__PURE__ */ jsx(
          Input,
          {
            type: "number",
            min: 1,
            value: draft.timeout,
            placeholder: "30",
            onChange: (event) => setDraft((current) => ({
              ...current,
              timeout: event.target.value
            }))
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-end gap-2", children: [
      /* @__PURE__ */ jsx(DialogClose, { children: "Cancel" }),
      /* @__PURE__ */ jsx(Button, { onClick: onSave, children: editingName ? "Save Changes" : "Add Server" })
    ] })
  ] }) }) });
}
function McpSettingsScreen() {
  const [servers, setServers] = useState([]);
  const [originalServers, setOriginalServers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [reloadPending, setReloadPending] = useState(false);
  const [reloadAvailable, setReloadAvailable] = useState(true);
  const [notice, setNotice] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingName, setEditingName] = useState();
  const [draft, setDraft] = useState(EMPTY_DRAFT);
  useEffect(() => {
    async function loadServers() {
      setLoading(true);
      try {
        const response = await fetch("/api/mcp/servers");
        const payload = await response.json().catch(() => ({}));
        const loadedServers = Array.isArray(payload.servers) ? payload.servers : [];
        setServers(loadedServers);
        setOriginalServers(loadedServers);
        if (payload.ok === false) setReloadAvailable(false);
        setNotice(payload.message ?? null);
      } catch {
        setNotice(
          "Could not load MCP config from Hermes. You can still draft servers here."
        );
      } finally {
        setLoading(false);
      }
    }
    void loadServers();
  }, []);
  const yamlSnippet = useMemo(() => buildYamlSnippet(servers), [servers]);
  const isDirty = useMemo(() => {
    return JSON.stringify(servers) !== JSON.stringify(originalServers);
  }, [servers, originalServers]);
  function openAddDialog() {
    setEditingName(void 0);
    setDraft(EMPTY_DRAFT);
    setDialogOpen(true);
  }
  function openEditDialog(server) {
    setEditingName(server.name);
    setDraft(buildDraft(server));
    setDialogOpen(true);
  }
  function handleSave() {
    const error = validateDraft(
      draft,
      servers.map((server) => server.name),
      editingName
    );
    if (error) {
      toast(error, { type: "error" });
      return;
    }
    const nextServer = {
      ...servers.find((server) => server.name === editingName) ?? {},
      name: draft.name.trim(),
      transport: draft.transport,
      command: draft.transport === "stdio" ? draft.command.trim() : void 0,
      args: draft.transport === "stdio" ? parseArgs(draft.args) : void 0,
      env: draft.transport === "stdio" ? parseKeyValueLines(draft.envText) : void 0,
      url: draft.transport === "http" ? draft.url.trim() : void 0,
      headers: draft.transport === "http" ? parseKeyValueLines(draft.headersText) : void 0,
      timeout: draft.timeout.trim() ? Number(draft.timeout) : void 0
    };
    setServers((current) => {
      const remaining = current.filter((server) => server.name !== editingName);
      return [...remaining, nextServer].sort(
        (a, b) => a.name.localeCompare(b.name)
      );
    });
    setDialogOpen(false);
    toast(
      editingName ? "MCP server updated in local draft." : "MCP server added to local draft.",
      {
        type: "success"
      }
    );
  }
  async function handleCopySnippet() {
    try {
      await writeTextToClipboard(yamlSnippet);
      setOriginalServers(servers);
      toast("YAML snippet copied.", { type: "success" });
    } catch {
      toast("Clipboard unavailable.", { type: "error" });
    }
  }
  async function handleReload() {
    setReloadPending(true);
    try {
      const response = await fetch("/api/mcp/reload", { method: "POST" });
      const payload = await response.json().catch(() => ({}));
      toast(
        payload.message || (payload.ok ? "Reload requested." : "Reload unavailable."),
        {
          type: payload.ok ? "success" : "info"
        }
      );
    } catch {
      toast("Could not reach reload endpoint.", { type: "error" });
    } finally {
      setReloadPending(false);
    }
  }
  return /* @__PURE__ */ jsxs("div", { className: "min-h-full bg-surface", children: [
    /* @__PURE__ */ jsx("main", { className: "mx-auto w-full max-w-5xl px-4 py-6 text-primary-900 md:px-6 md:py-8", children: /* @__PURE__ */ jsxs("div", { className: "space-y-5", children: [
      /* @__PURE__ */ jsx("header", { className: "rounded-2xl border border-primary-200 bg-primary-50/80 p-5 shadow-sm", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4 md:flex-row md:items-start md:justify-between", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx(
            Button,
            {
              variant: "ghost",
              size: "sm",
              className: "-ml-2 w-fit",
              render: /* @__PURE__ */ jsxs(Link, { to: "/settings", children: [
                /* @__PURE__ */ jsx(
                  HugeiconsIcon,
                  {
                    icon: ArrowLeft01Icon,
                    size: 16,
                    strokeWidth: 1.8
                  }
                ),
                "Back to Settings"
              ] })
            }
          ),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h1", { className: "text-lg font-semibold text-primary-900", children: "MCP Servers" }),
            /* @__PURE__ */ jsxs("p", { className: "mt-1 text-sm text-primary-600", children: [
              "Review configured MCP servers, draft changes locally, and copy the YAML into",
              /* @__PURE__ */ jsx("code", { className: "mx-1 rounded bg-white px-1.5 py-0.5 font-mono text-xs", children: "config.yaml" }),
              "until gateway config writes land."
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(Button, { size: "sm", onClick: openAddDialog, children: [
          /* @__PURE__ */ jsx(HugeiconsIcon, { icon: Add01Icon, size: 16, strokeWidth: 1.8 }),
          "Add Server"
        ] })
      ] }) }),
      notice ? /* @__PURE__ */ jsx("div", { className: "rounded-2xl border border-primary-200 bg-white px-4 py-3 text-sm text-primary-600 shadow-sm", children: notice }) : null,
      isDirty ? /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-800 shadow-sm", children: [
        "You have unsaved changes. Copy the YAML below and paste it into your",
        " ",
        /* @__PURE__ */ jsx("code", { className: "rounded bg-amber-100 px-1.5 py-0.5 font-mono text-xs", children: "config.yaml" }),
        "."
      ] }) : null,
      /* @__PURE__ */ jsxs("section", { className: "rounded-2xl border border-primary-200 bg-primary-50/80 p-4 shadow-sm md:p-5", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h2", { className: "text-base font-medium text-primary-900", children: "Configured Servers" }),
            /* @__PURE__ */ jsxs("p", { className: "mt-1 text-xs text-primary-600", children: [
              servers.length,
              " server",
              servers.length === 1 ? "" : "s",
              " in the current local draft."
            ] })
          ] }),
          reloadAvailable ? /* @__PURE__ */ jsxs(
            Button,
            {
              variant: "outline",
              size: "sm",
              onClick: handleReload,
              disabled: reloadPending,
              children: [
                /* @__PURE__ */ jsx(
                  HugeiconsIcon,
                  {
                    icon: RefreshIcon,
                    size: 16,
                    strokeWidth: 1.8
                  }
                ),
                reloadPending ? "Reloading..." : "Reload MCP Servers"
              ]
            }
          ) : /* @__PURE__ */ jsx(
            "span",
            {
              className: "text-xs text-primary-400",
              title: "MCP reload not available on this gateway",
              children: "Reload unavailable"
            }
          )
        ] }),
        loading ? /* @__PURE__ */ jsx("div", { className: "rounded-xl border border-primary-200 bg-white px-4 py-3 text-sm text-primary-600", children: "Loading MCP servers..." }) : null,
        !loading && servers.length === 0 ? /* @__PURE__ */ jsx("div", { className: "rounded-xl border border-dashed border-primary-300 bg-white px-4 py-8 text-center text-sm text-primary-600", children: "No MCP servers found yet. Add one to generate a starter config snippet." }) : null,
        servers.length > 0 ? /* @__PURE__ */ jsx("div", { className: "grid gap-3", children: servers.map((server) => /* @__PURE__ */ jsx(
          "article",
          {
            className: "rounded-2xl border border-primary-200 bg-white p-4 shadow-sm",
            children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3 md:flex-row md:items-start md:justify-between", children: [
              /* @__PURE__ */ jsxs("div", { className: "min-w-0 space-y-2", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-lg", children: server.transport === "http" ? "🌐" : "📡" }),
                  /* @__PURE__ */ jsx("h3", { className: "text-sm font-semibold text-primary-900", children: server.name }),
                  /* @__PURE__ */ jsx("span", { className: "rounded-full border border-primary-200 bg-primary-50 px-2 py-0.5 text-[11px] font-medium uppercase tracking-wide text-primary-700", children: server.transport })
                ] }),
                /* @__PURE__ */ jsx("p", { className: "truncate text-sm text-primary-700", children: formatServerSummary(server) }),
                /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-x-4 gap-y-1 text-xs text-primary-500", children: [
                  /* @__PURE__ */ jsxs("span", { children: [
                    "timeout:",
                    " ",
                    server.timeout ? `${server.timeout}s` : "default"
                  ] }),
                  server.connectTimeout ? /* @__PURE__ */ jsxs("span", { children: [
                    "connect: ",
                    server.connectTimeout,
                    "s"
                  ] }) : null,
                  server.auth ? /* @__PURE__ */ jsx("span", { children: "auth configured" }) : null
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxs(
                  Button,
                  {
                    variant: "outline",
                    size: "sm",
                    onClick: () => openEditDialog(server),
                    children: [
                      /* @__PURE__ */ jsx(
                        HugeiconsIcon,
                        {
                          icon: Edit01Icon,
                          size: 14,
                          strokeWidth: 1.8
                        }
                      ),
                      "Edit"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  Button,
                  {
                    variant: "outline",
                    size: "sm",
                    className: cn(
                      "text-red-600 hover:bg-red-50 hover:text-red-700"
                    ),
                    onClick: () => {
                      setServers(
                        (current) => current.filter(
                          (entry) => entry.name !== server.name
                        )
                      );
                      toast(`Removed ${server.name} from local draft.`, {
                        type: "success"
                      });
                    },
                    children: [
                      /* @__PURE__ */ jsx(
                        HugeiconsIcon,
                        {
                          icon: Delete02Icon,
                          size: 14,
                          strokeWidth: 1.8
                        }
                      ),
                      "Delete"
                    ]
                  }
                )
              ] })
            ] })
          },
          server.name
        )) }) : null
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "rounded-2xl border border-primary-200 bg-primary-50/80 p-4 shadow-sm md:p-5", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3 md:flex-row md:items-start md:justify-between", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h2", { className: "text-base font-medium text-primary-900", children: "Generated YAML" }),
            /* @__PURE__ */ jsxs("p", { className: "mt-1 text-sm text-primary-600", children: [
              "Add this to your",
              " ",
              /* @__PURE__ */ jsx("code", { className: "rounded bg-white px-1.5 py-0.5 font-mono text-xs", children: "config.yaml" }),
              " ",
              "under",
              " ",
              /* @__PURE__ */ jsx("code", { className: "rounded bg-white px-1.5 py-0.5 font-mono text-xs", children: "mcp_servers" }),
              "."
            ] })
          ] }),
          /* @__PURE__ */ jsxs(Button, { variant: "outline", size: "sm", onClick: handleCopySnippet, children: [
            /* @__PURE__ */ jsx(HugeiconsIcon, { icon: Copy01Icon, size: 16, strokeWidth: 1.8 }),
            "Copy to Clipboard"
          ] })
        ] }),
        /* @__PURE__ */ jsx("pre", { className: "mt-4 overflow-x-auto rounded-2xl border border-primary-200 bg-white p-4 text-xs leading-6 text-primary-800", children: /* @__PURE__ */ jsx("code", { children: yamlSnippet }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(
      ServerDialog,
      {
        open: dialogOpen,
        onOpenChange: setDialogOpen,
        draft,
        setDraft,
        onSave: handleSave,
        editingName
      }
    )
  ] });
}
const SplitComponent = function SettingsMcpRoute() {
  usePageTitle("MCP Servers");
  return /* @__PURE__ */ jsx(McpSettingsScreen, {});
};
export {
  SplitComponent as component
};
