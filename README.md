# BandPet — 项目说明

# 事先说明！
本项目**遵循AGPL3.0**，请在二次开发后（包含网络服务）开源
**本项目由米坛社区开源项目支持计划提供支持**

# 项目介绍
版本：0.4.3  
语言：中文  
目标设备：小米手环 
类型：快应用 / AIoT（aiot-toolkit）

我们目前已拥有500+用户，拥有多种创新玩法（例如交换饰品）

## 概述  
BandPet 是面向智能手表的轻量化宠物点击与集换应用。源码位于 `src/`，构建产物在 `dist/`。本 README 作为开发/扩展与代码提交的行动指南。

快速开始
- 安装依赖：
  ```bash
  npm install
  ```
- 本地热重载（开发）：
  ```bash
  npm run start
  ```
- 构建产物：
  ```bash
  npm run build
  ```
- 发布（aiot-toolkit）：
  ```bash
  npm run release
  ```
- 代码风格检查：
  ```bash
  npm run lint
  ```

一、项目结构速览
- src/ — 源码
  - src/manifest.json — 路由与权限（入口 main，deviceTypeList 包含 "watch"）
  - src/app.ux — 全局生命周期与错误/日志入口
  - src/<page>/index.ux — 每个页面视图与页面逻辑（如 more, leaderboard, exchange, market, customize, settings, activate, about, naming）
  - src/common/js/api-service.js — 网络层与后端函数封装（所有后端交互必须通过此模块）
  - src/common/js/config.js — 全局常量与存储键（例如 STORAGE_KEYS、SYNC_INTERVAL、MAX_CLICKS_PER_BATCH）（不要直接使用里面的服务器地址！）
  - src/common/js/auth.js / auth-guard.js — 鉴权相关
  - src/InputMethod/ — 内置输入法资源（数字键盘、QWERTY）

二、核心设计与数据流要点（必须遵守）
- 路由由 `src/manifest.json` 管理；每页由 `src/<page>/index.ux` 提供 UI 与逻辑。
- 所有后端接口必须通过 `src/common/js/api-service.js` 封装调用。不要在页面中直接硬编码 URL 或函数名。
- 全局常量与存储键必须在 `src/common/js/config.js` 中定义（例如 `STORAGE_KEYS.PENDING_CLICKS`）。
- 点击计数（主玩法）：
  - 在内存中累积（例如单例管理器），避免频繁写入 `@system.storage`。
  - 按 `config.js` 中的 `SYNC_INTERVAL`（默认 5 分钟）或达到 `MAX_CLICKS_PER_BATCH` 时批量调用 `ApiService.syncClicks()` 上报。
  - 仅在必要时（切后台、定时 flush、退出）批量写入本地存储作为持久化备份。
- UI 风格：深色/极简。主界面：黑背景、顶部时间、中间宠物名占位，点击宠物计数，底部左侧更多按钮、右侧胶囊显示点击数。

三、游戏（简要）
- 连击/Combo（未实现）
- 日常任务/签到/成就（未实现）
- 小游戏
- 商城/兑换（正在实现）
- 排行榜
- 活动系统：限时活动/节日活动

四、网络与 API 规范（必须遵守）
- 在修改或生成网络相关代码前，**必须**打开并参考 `src/common/js/api-service.js`（不要把 README 示例值当真实配置）。
- 如需可配置 base URL，请新增或更新 `src/common/js/network-config.js` 或在 `api-service.js` 顶部声明常量，并在提交说明中记录变更原因与影响范围。
- 新增接口名或后端函数，更新 `api-service.js` 并同步更新 `config.js`（如需要的存储键/超时常量）。

五、实现细节与示例策略（点击上报部分）
- 单例 ClickManager（内存队列）负责：
  - 接收点击事件，更新内存计数与上报触发条件检测
  - 在达到批量阈值或定时器触发时调用 `ApiService.syncClicks(pendingBatch)`
  - 在切后台或页面卸载时触发一次持久化（写入 `STORAGE_KEYS.PENDING_CLICKS`）
- 写 storage 的频率受限，优先内存，必要时批量写入。
- 上报失败需重试策略（指数退避）并保留本地队列。

