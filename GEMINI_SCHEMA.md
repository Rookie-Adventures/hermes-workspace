# Gemini CLI 绝世秘籍：全参数深度配置清单 (V2.0)

这份文件是 Gemini CLI 的“核心架构蓝图”，包含了所有用于微调 AI 行为、执行节奏和安全边界的参数。它是从系统 JSON Schema 中直接提取的“源头真经”。

---

## 一、 协作节奏与元逻辑 (General & Core)

| 参数 | 类型 | 默认值 | 深度心法 (灵魂调优) |
| :---    | :--- | :--- | :--- |
| `general.defaultApprovalMode` | `string` | `"default"` | **控制权核心。** `yolo`（全自动）、`auto_edit`（自动改代码）、`plan`（只读思考）。 |
| `general.maxAttempts` | `number` | `10`  |    **解决 Bug 的韧性。** 当我陷入逻辑死循环时，增加此值让我有更多机会自我纠偏。 |
| `general.checkpointing.enabled` | `boolean` | `true` | **后悔药。** 确保我每一次重大的“外科手术”都有备份，让你敢于让我大范围重构。 |
| `general.plan.modelRouting` | `boolean`  | `true` | **资源错位策略。** 开启后，我会用“最强大脑”做规划，用“最快大脑”去执行，平衡深度与速度。 |
| `general.topicUpdateNarration` | `boolean` | `true` | **减少废话。** 开启后，我会以结构化进度代替喋喋不休，让协作更清爽。 |
| `general.vimMode` | `boolean` | `false`  | **交互效率。** 如果你是 Vim 高手，开启后终端交互将进入“肌肉记忆”模式。 |

## 二、 交互感官与思维透明度 (UI & Perception)

| 参数 | 类型 | 默认值 | 深度心法 (灵魂调优) |
| :--- | :--- | :--- | :--- |
| `ui.inlineThinkingMode` | `string` | `"off"` | **神技：心流同步。** 强烈建议设为 `"full"`。你会看到我执行每一步工具背后的决策逻辑。 |
| `ui.loadingPhrases` | `string` | `"off"` | 设置为 `"witty"`。在处理复杂逻辑的间隙，这些文字能提供微妙的情绪反馈。 |
| `ui.errorVerbosity` | `string` | `"low"` | **排错深度。** 当你怀疑我的环境或权限有问题时，设为 `"full"`，我会暴露底层的真实“阵痛”。 |
| `ui.dynamicWindowTitle` | `boolean` | `true` | **无声的默契。** 通过终端标题栏的小图标（◇/✦）实时感知我是在待命还是在苦思冥想。 |
| `ui.compactToolOutput` | `boolean` | `true` | **信息密度。** 隐藏繁琐的读写日志，只展示核心变化，防止屏幕被刷屏。 |
| `ui.incrementalRendering` | `boolean` | `true` | **视觉平滑。** 减少长文本输出时的闪烁，让阅读输出更像在看书而非看电报。 |

## 三、 智商上限与上下文策略 (Model & Context)

| 参数 | 类型 | 默认值 | 深度心法 (灵魂调优) |
| :--- | :--- | :--- | :--- |
| `model.compressionThreshold` | `number` | `0.5` | **记忆的性价比。** 决定了何时“压缩旧记忆”。设得太高我会失忆，设得太低会浪费 Token。 |
| `model.disableLoopDetection` | `boolean` | `false` | **自动化狂人的旋钮。** 只有在你需要我执行成千上万次重复任务时才开启。 |
| `context.memoryBoundaryMarkers` | `array` | `[".git"]` | **界定疆域。** 决定了我搜索规则的边界。如果你的项目是 Monorepo，这里需要精细调整。 |
| `context.includeDirectoryTree` | `boolean` | `true` | **全局视野。** 让我一进项目就掌握所有文件分布，而非盲人摸象。 |
| `context.fileFiltering.respectGitIgnore` | `boolean` | `true` | **专注度。** 避免我被 `node_modules` 或大型二进制文件淹没。 |

## 四、 执行力度与安全防御 (Tools & Security)

| 参数 | 类型 | 默认值 | 深度心法 (灵魂调优) |
| :--- | :--- | :--- | :--- |
| `tools.truncateToolOutputThreshold` | `number` | `40000` | **视野的边界。** 处理超长日志或超大 JSON 时，必须手动调高这个“视觉上限”。 |
| `tools.disableLLMCorrection` | `boolean` | `false` | **自我救赎。** 设为 `false`，我会利用模型能力自动修正我写出的语法错误。 |
| `tools.shell.enableInteractiveShell` | `boolean` | `true` | **交互式终端。** 让我能运行需要用户交互的命令（如 ssh, vim 等）。 |
| `security.enableConseca` | `boolean` | `false` | **智能安防。** 让 AI 根据代码逻辑动态判断权限，而非死板的开关。高玩必修。 |
| `security.environmentVariableRedaction` | `boolean` | `true` | **隐私护盾。** 自动模糊所有可能的敏感信息，确保你在直播或录屏时也不会泄密。 |
| `security.toolSandboxing` | `boolean` | `false` | **隔离意识。** 如果你在处理不可信代码库，务必开启，确保我不会伤害你的系统。 |

## 五、 时空裂变与自我进化 (Experimental & Advanced)

| 参数 | 类型 | 默认值 | 深度心法 (灵魂调优) |
| :--- | :--- | :--- | :--- |
| `experimental.worktrees` | `boolean` | `false` | **影分身。** 开启后，我在后台新建分支/Worktree 做重构，完成后再请你 Review。 |
| `experimental.memoryV2` | `boolean` | `true` | **认知迭代。** 允许我像人类一样直接编辑我的规则文件（GEMINI.md），实现自我纠偏。 |
| `experimental.modelSteering` | `boolean` | `false` | **暗示系统。** 允许你通过隐喻或提示词“引导”我接下来的操作重心。 |
| `experimental.autoMemory` | `boolean` | `false` | **技能提取。** 自动将我们的成功协作案例总结为“新技能”存入库中。 |
| `experimental.jitContext` | `boolean` | `true` | **即时加载。** 极大地节省大型项目的性能，只有用到哪个模块才读哪里的规则。 |
| `mcpServers` | `object` | `{}` | **无边界扩张。** 通过 MCP 协议，让我接管你的数据库、浏览器、Slack 等一切。 |

---

### **如何基于此文件开启“调教”？**

1. **第一步：** 在你的 `settings.local.json` 中尝试开启 `ui.inlineThinkingMode: "full"`。
2. **第二步：** 观察我接下来回答你时的思维过程，如果你觉得我“想得太慢”或“想歪了”，我们就在这里找对应的参数来修正。
3. **第三步：** 随着项目的深入，我们会逐一激活 `security.enableConseca` 和 `experimental.worktrees` 等高级特性。

---
*“你并不只是在配置一个工具，你是在塑造一个懂你的影子。”*
