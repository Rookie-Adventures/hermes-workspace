import type { Step } from 'react-joyride'

export const tourSteps: Array<Step> = [
  // Step 1: Welcome
  {
    target: 'body',
    placement: 'center',
    title: '欢迎使用 Hermes Workspace！⚕',
    content: (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '12px',
        }}
      >
        <img
          src="/hermes-avatar.webp"
          alt="Hermes"
          style={{ width: 48, height: 48, borderRadius: 12 }}
        />
        <p style={{ textAlign: 'center', margin: 0 }}>
          你的 AI 驱动指挥中心，用于管理 Agent、聊天、文件等。
          让我们快速了解一下！
        </p>
      </div>
    ),
    disableBeacon: true,
  },
  // Step 2: Sidebar
  {
    target: '[data-tour="sidebar-container"]',
    placement: 'right',
    title: '侧边栏导航',
    content:
      '在这里导航到所有工具。折叠/展开分区来自定义你的工作区。',
  },
  // Step 3: New Session
  {
    target: '[data-tour="new-session"]',
    placement: 'right',
    title: '开始新对话',
    content:
      '点击这里开始新的 AI 对话。每次对话都会自动保存。',
  },
  // Step 4: Dashboard
  {
    target: '[data-tour="dashboard"]',
    placement: 'right',
    title: '仪表盘',
    content:
      '查看会话、使用量和活动概览。一目了然。',
  },
  // Step 5: Agent Hub
  {
    target: '[data-tour="agent-hub"]',
    placement: 'right',
    title: 'Agent 中心',
    content:
      '管理你的 AI Agent 和配置。创建具有专业行为的自定义 Agent。',
  },
  // Step 7: Skills
  {
    target: '[data-tour="skills"]',
    placement: 'right',
    title: '技能库',
    content:
      '浏览和安装 Agent 技能以扩展能力。为你的 Agent 添加新工具和能力。',
  },
  // Step 8: Terminal
  {
    target: '[data-tour="terminal"]',
    placement: 'right',
    title: '内置终端',
    content:
      '用于快速命令的内置终端。无需离开 Hermes Workspace 即可执行 Shell 命令。',
  },
  // Step 9: Usage Meter (in header)
  {
    target: '[data-tour="usage-meter"]',
    placement: 'bottom',
    title: '用量监控',
    content:
      '实时监控你的 AI 服务商使用量。跟踪费用和 API 消耗。',
  },
  // Step 10: Settings
  {
    target: '[data-tour="settings"]',
    placement: 'right',
    title: '设置与个性化',
    content:
      '配置供应商、主题、强调色等。让 Hermes Workspace 成为你自己的。',
  },
  // Step 11: Finish
  {
    target: 'body',
    placement: 'center',
    title: "一切就绪！🎉",
    content:
      '开始与你的 AI 对话，探索工具，并定制 Hermes Workspace 以适应你的工作流程。需要帮助？按 ? 查看所有快捷键。',
  },
]
