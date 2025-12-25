**项目概览**
- **类型**: 快应用 / AIoT（使用 `aiot-toolkit`）。源码位于 `src/`，构建产物在 `dist/`，发布使用 `aiot release`。
- **目标设备**: 智能手表（见 [src/manifest.json](src/manifest.json) -> `deviceTypeList: ["watch"]`）。

**大体架构与数据流（要点）**
- 路由/页面：由 [src/manifest.json](src/manifest.json) 管理，入口 `main`，每个页面由 `src/<page>/index.ux` 提供视图与页面逻辑。
- 共享模块：`src/common/js/` 包含 `api-service.js`（网络层）、`config.js`（常量/存储键）、`auth.js`/`auth-guard.js`（鉴权相关）。所有后端交互通过 `ApiService` 封装。
- 平台能力：大量使用平台系统模块（`@system.fetch`, `@system.storage`, `@system.prompt`, `@system.router` 等），这些调用在 `src/common/js/api-service.js` 和页面脚本中较常见，注意回调/responseType 的平台差异。
- 关键数据流：点击计数在客户端累积（`PENDING_CLICKS`），每隔固定间隔或达到批次数量通过 `ApiService.syncClicks()` 上报；排行榜、命名等由后端函数（Supabase functions）提供。

**UI / 功能规范（来自 `BandPet.txt`）**
- 主界面：纯黑背景，顶部显示时间，中间是宠物名占位符，点击宠物增加点击数；底部左侧更多按钮、右侧胶囊按钮显示点击数。
- 定时与上报：点击数应每隔 5 分钟上报服务器（参考 `api-service.js` 的 `syncClicks` 逻辑与 `config.js` 中的 `SYNC_INTERVAL`）。
- 页面集合：`more`, `leaderboard`, `exchange`, `market`, `customize`, `settings`, `activate`, `about`, `naming`；各页面在 `src/` 下有对应的 `index.ux`。
- 激活流程与设备码：`BandPet.txt` 中包含设备码与激活码算法说明（在仓库根 `BandPet.txt`），对接激活逻辑时请参照该文件实现校验规则并在 `src/activate/index.ux` 中保持一致。
- 输入法：若需键盘调用，请查看 `src/InputMethod/` 下相关资源与 README（仓库内有数字键盘和 QWERTY 代码）。

**开发与调试（具体命令）**
- 本地热重载：
```bash
npm run start
```
- 构建产物：
```bash
npm run build
```
- 发布：
```bash
npm run release
```
- 代码风格：
```bash
npm run lint
```

**项目约定与给 AI Agent 的具体指导**
- 永远修改 `src/` 下源码，**不要**直接编辑 `dist/`（它们是构建产物）。
- 所有后端 URL 与函数名位置经常变更。AI Agent 在修改或生成与网络相关的补丁时**必须**直接读取并参考 `src/common/js/api-service.js`（或仓库中任何网络配置模块），不要把本文档中的示例硬编码值当作准确配置。若需要将 base URL 抽出为可配置常量，请先在代码中创建或更新网络配置（例如 `src/common/js/network-config.js` 或在 `api-service.js` 顶部声明常量），并在提交说明中记录变更原因与影响范围。
- 所有存储键和全局常量应写入 `src/common/js/config.js`（示例：`STORAGE_KEYS.PENDING_CLICKS`），不要在代码中散落字符串常量。
- 点击上报策略：遵循 `config.js` 中 `MAX_CLICKS_PER_BATCH` 与 `SYNC_INTERVAL`，实现时避免频繁写 `@system.storage`，先在内存或临时对象累积再批量写入。
- UI 修改：页面文件均为 `*.ux`，样式与布局务必保持深色/极简（参见 `BandPet.txt` 的视觉规范）。

**关键文件速查**
- `BandPet.txt`：仓库根的游戏说明与激活算法（必读，激活/设备码逻辑来源）
- `src/manifest.json`：路由与权限声明
- `src/common/js/api-service.js`：网络层、Supabase functions 调用样例
- `src/common/js/config.js`：共享常量与存储键
- `src/app.ux`：全局生命周期钩子（错误与日志集中点）

**交流偏好**
- 请用中文与我对话；对不确定的实现细节我会先提出假设并请求确认。

**参考文档及自助诊断（必须先读）**
- 仓库包含官方 Vela 文档副本，AI agent 在不确定平台 API、构建流程或遇到错误时**必须优先阅读**这些文档再提问或修改代码：
	- [VelaDocs/VelaDocs-main/docs/zh](VelaDocs/VelaDocs-main/docs/zh)（中文）
	- [VelaDocs/VelaDocs-main/docs/en](VelaDocs/VelaDocs-main/docs/en)（英文）
- 推荐查阅的主题：`system`（平台能力）、`network`（fetch/请求格式）、`devicedebug`（设备调试/模拟器）、`release`（打包与发布）、`tools/debug`（本地调试工具）。
- 如果在运行或修改中遇到与平台相关的异常（例如 `fetch` 返回结构差异、权限问题、模拟器差异），先在 VelaDocs 中搜索相关条目并在补丁说明中引用具体文档页再继续实施更改。


