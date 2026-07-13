# 完全脱离 Supabase 迁移计划

> **子代理执行指南：** 使用 compose:subagent 或 compose:execute 逐任务执行此计划。步骤使用 `- [ ]` 语法追踪。

**目标：** 用自托管的 Express + PostgreSQL 服务器替换 Supabase 托管的后端，保持现有 API 接口不变，手环客户端零改动。

**架构：** 一个 Express 服务器同时替代原来的中转服务器和 Supabase Edge Function。监听同一端口（7718），暴露相同的 `/api` POST 端点，使用相同的 `action` 路由机制，直接连接本地 PostgreSQL 数据库。

**技术栈：** Node.js 18+, Express, `pg` (node-postgres), PostgreSQL 14+

## 全局约束

- 客户端 `api-service.js` **不得修改** — 所有 9 个 action 必须返回相同的 JSON 格式
- 服务器默认监听端口 7718（可通过 `.env` 配置）
- 数据库连接通过 `DATABASE_URL` 环境变量配置
- 暂不修改认证机制 — 保持现有的无认证模式
- 所有响应使用 `normalizeBraceletJson` 风格的输出格式

---

## 文件结构总览

```
bandpet-server/                    ← 新建目录（与 BandPet/ 同级）
  package.json                     ← 项目配置和依赖声明
  .env.example                     ← 环境变量模板
  .env                             ← 实际环境变量（不提交）
  .gitignore                       ← 忽略 node_modules 和 .env
  db.js                            ← PostgreSQL 连接池
  schema.sql                       ← 数据库建表脚本
  server.js                        ← Express 入口，CORS，错误处理
  routes/
    api.js                         ← POST /api 路由分发器
    actions/
      registration.js              ← 设备注册相关（2个action）
      clicks.js                    ← 点击同步相关（2个action）
      pet.js                       ← 宠物名相关（2个action）
      rankings.js                  ← 排行榜（1个action）
      announcements.js             ← 公告（1个action）
      update.js                    ← 版本更新检查（1个action）
```

---

### 任务 1：项目脚手架

**目的：** 创建新项目的基础文件，使其可以通过 `npm install && npm start` 运行。

**涉及文件：**

| 操作 | 文件 | 作用 |
|------|------|------|
| 新建 | `bandpet-server/package.json` | 项目配置，声明 express、pg、dotenv 依赖 |
| 新建 | `bandpet-server/.env.example` | 环境变量模板（PORT、DATABASE_URL） |
| 新建 | `bandpet-server/.env` | 实际配置（从 .env.example 复制并填入真实值） |
| 新建 | `bandpet-server/.gitignore` | 忽略 node_modules/ 和 .env |

**步骤：**

- [ ] **步骤 1：创建 package.json**

```json
{
  "name": "bandpet-server",
  "version": "1.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "start": "node server.js",
    "dev": "node --watch server.js"
  },
  "engines": {
    "node": ">=18.0.0"
  },
  "dependencies": {
    "express": "^4.18.0",
    "pg": "^8.11.0",
    "dotenv": "^16.3.0"
  }
}
```

- [ ] **步骤 2：创建 .env.example**

```
PORT=7718
DATABASE_URL=postgresql://postgres:password@localhost:5432/bandpet
```

- [ ] **步骤 3：创建 .env（复制模板并填入真实数据库密码）**

```bash
cp .env.example .env
# 编辑 .env，填入真实的数据库连接信息
```

- [ ] **步骤 4：创建 .gitignore**

```
node_modules/
.env
```

- [ ] **步骤 5：安装依赖**

```bash
cd bandpet-server && npm install
```

预期结果：生成 `node_modules/` 目录和 `package-lock.json` 文件。

- [ ] **步骤 6：提交**

```bash
git add bandpet-server/package.json bandpet-server/.env.example bandpet-server/.gitignore
git commit -m "chore: 初始化 bandpet-server 项目脚手架"
```

---

### 任务 2：数据库建表脚本

**目的：** 定义所有 9 个 API action 所需的数据库表结构。

**涉及文件：**

| 操作 | 文件 | 作用 |
|------|------|------|
| 新建 | `bandpet-server/schema.sql` | users、announcements、app_versions 三张表的建表语句和索引 |

**步骤：**

- [ ] **步骤 1：创建 schema.sql**

```sql
-- 用户表：存储设备注册信息和宠物数据
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  device_id TEXT UNIQUE NOT NULL,
  pet_name TEXT DEFAULT '',
  total_clicks BIGINT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 公告表：存储应用内公告
CREATE TABLE IF NOT EXISTS announcements (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT DEFAULT '',
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 版本表：存储应用版本信息用于更新检查
CREATE TABLE IF NOT EXISTS app_versions (
  id SERIAL PRIMARY KEY,
  version_code INTEGER UNIQUE NOT NULL,
  version_name TEXT NOT NULL,
  title TEXT DEFAULT '发现新版本',
  changelog TEXT DEFAULT '',
  download_url TEXT DEFAULT '',
  force_update BOOLEAN DEFAULT false,
  min_required_version INTEGER DEFAULT 0,
  release_time TIMESTAMPTZ DEFAULT NOW()
);

-- 索引：加速常用查询
CREATE INDEX IF NOT EXISTS idx_users_device_id ON users(device_id);
CREATE INDEX IF NOT EXISTS idx_users_total_clicks ON users(total_clicks DESC);
CREATE INDEX IF NOT EXISTS idx_announcements_active ON announcements(is_active, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_app_versions_code ON app_versions(version_code DESC);
```

- [ ] **步骤 2：在数据库中执行建表脚本**

```bash
psql $DATABASE_URL -f schema.sql
```

预期结果：显示 `CREATE TABLE` 和 `CREATE INDEX` 消息，无报错。

- [ ] **步骤 3：提交**

```bash
git add bandpet-server/schema.sql
git commit -m "feat: 添加数据库建表脚本（users, announcements, app_versions）"
```

---

### 任务 3：数据库连接池

**目的：** 创建 PostgreSQL 连接池模块，供所有 API 路由使用。

**涉及文件：**

| 操作 | 文件 | 作用 |
|------|------|------|
| 新建 | `bandpet-server/db.js` | 读取 DATABASE_URL，创建 pg.Pool 实例并导出 |

**步骤：**

- [ ] **步骤 1：创建 db.js**

```javascript
import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  max: 10,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 5000,
});

pool.on('error', (err) => {
  console.error('[DB] 连接池异常:', err.message);
});

export default pool;
```

- [ ] **步骤 2：验证数据库连接**

在 `db.js` 底部添加临时测试代码：

```javascript
// 测试完成后删除此段
pool.query('SELECT NOW()').then(r => {
  console.log('[DB] 连接成功:', r.rows[0].now);
  process.exit(0);
}).catch(e => {
  console.error('[DB] 连接失败:', e.message);
  process.exit(1);
});
```

运行：`node db.js`
预期结果：`[DB] 连接成功: 2026-06-24T...` 然后退出。

测试通过后删除此测试代码块。

- [ ] **步骤 3：提交**

```bash
git add bandpet-server/db.js
git commit -m "feat: 添加 PostgreSQL 连接池模块"
```

---

### 任务 4：Express 服务器 + API 路由框架

**目的：** 搭建 Express 服务器骨架，创建 action 路由分发器和 6 个占位 action 文件。

**涉及文件：**

| 操作 | 文件 | 作用 |
|------|------|------|
| 新建 | `bandpet-server/server.js` | Express 入口：JSON 解析、CORS、健康检查、错误处理 |
| 新建 | `bandpet-server/routes/api.js` | 路由分发器：根据 `action` 字段调用对应处理函数 |
| 新建 | `bandpet-server/routes/actions/registration.js` | 占位：设备注册相关（2个action） |
| 新建 | `bandpet-server/routes/actions/clicks.js` | 占位：点击同步相关（2个action） |
| 新建 | `bandpet-server/routes/actions/pet.js` | 占位：宠物名相关（2个action） |
| 新建 | `bandpet-server/routes/actions/rankings.js` | 占位：排行榜（1个action） |
| 新建 | `bandpet-server/routes/actions/announcements.js` | 占位：公告（1个action） |
| 新建 | `bandpet-server/routes/actions/update.js` | 占位：版本更新（1个action） |

**步骤：**

- [ ] **步骤 1：创建 server.js**

```javascript
import express from 'express';
import dotenv from 'dotenv';
import apiRouter from './routes/api.js';

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT || 7718);

app.use(express.json({ limit: '1mb' }));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'content-type');
  res.header('Access-Control-Allow-Methods', 'POST, OPTIONS, GET');
  if (req.method === 'OPTIONS') return res.sendStatus(204);
  next();
});

app.get('/health', (req, res) => {
  res.json({ success: true, name: 'bandpet-server', port: PORT });
});

app.use('/api', apiRouter);

app.use((err, req, res, _next) => {
  console.error('[Server] 未处理错误:', err.message);
  res.status(500).json({ success: false, error: 'internal_error', message: 'Internal server error' });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`BandPet 服务器启动: http://0.0.0.0:${PORT}`);
});
```

- [ ] **步骤 2：创建 routes/api.js（路由分发器）**

```javascript
import { Router } from 'express';
import { handleCheckRegistration, handleRegisterDevice } from './actions/registration.js';
import { handleSyncClicks, handleSyncFromServer } from './actions/clicks.js';
import { handleCheckPetName, handleSetPetName } from './actions/pet.js';
import { handleGetRankings } from './actions/rankings.js';
import { handleGetAnnouncements } from './actions/announcements.js';
import { handleCheckUpdate } from './actions/update.js';

const router = Router();

const actions = {
  check_registration: handleCheckRegistration,
  register_device_and_get_id: handleRegisterDevice,
  sync_clicks: handleSyncClicks,
  sync_from_server: handleSyncFromServer,
  check_pet_name: handleCheckPetName,
  set_pet_name: handleSetPetName,
  get_rankings: handleGetRankings,
  get_announcements: handleGetAnnouncements,
  check_update: handleCheckUpdate,
};

router.post('/', async (req, res) => {
  const { action, ...data } = req.body;

  if (!action) {
    return res.status(400).json({ success: false, error: 'missing_action', message: 'action is required' });
  }

  const handler = actions[action];
  if (!handler) {
    return res.status(400).json({ success: false, error: 'unknown_action', message: `Unknown action: ${action}` });
  }

  try {
    const result = await handler(data);
    res.json(result);
  } catch (err) {
    console.error(`[API] Action "${action}" 失败:`, err.message);
    res.status(500).json({ success: false, error: 'action_failed', message: err.message });
  }
});

export default router;
```

- [ ] **步骤 3：创建 6 个占位 action 文件**

每个文件导出 async 函数，当前返回 `{ success: false, error: 'not_implemented' }`。后续任务会填充实际逻辑。

```javascript
// routes/actions/registration.js
export async function handleCheckRegistration({ device_id }) {
  return { success: false, error: 'not_implemented' };
}
export async function handleRegisterDevice({ device_id }) {
  return { success: false, error: 'not_implemented' };
}
```

```javascript
// routes/actions/clicks.js
export async function handleSyncClicks({ user_id, click_count }) {
  return { success: false, error: 'not_implemented' };
}
export async function handleSyncFromServer({ user_id }) {
  return { success: false, error: 'not_implemented' };
}
```

```javascript
// routes/actions/pet.js
export async function handleCheckPetName({ pet_name }) {
  return { success: false, error: 'not_implemented' };
}
export async function handleSetPetName({ user_id, new_name }) {
  return { success: false, error: 'not_implemented' };
}
```

```javascript
// routes/actions/rankings.js
export async function handleGetRankings({ limit }) {
  return { success: false, error: 'not_implemented' };
}
```

```javascript
// routes/actions/announcements.js
export async function handleGetAnnouncements({ limit }) {
  return { success: false, error: 'not_implemented' };
}
```

```javascript
// routes/actions/update.js
export async function handleCheckUpdate({ current_version_code }) {
  return { success: false, error: 'not_implemented' };
}
```

- [ ] **步骤 4：验证服务器启动**

```bash
node server.js &
curl http://localhost:7718/health
# 预期: {"success":true,"name":"bandpet-server","port":7718}
curl -X POST http://localhost:7718/api -H "Content-Type: application/json" -d '{"action":"get_rankings"}'
# 预期: {"success":false,"error":"not_implemented"}
kill %1
```

- [ ] **步骤 5：提交**

```bash
git add bandpet-server/server.js bandpet-server/routes/
git commit -m "feat: 添加 Express 服务器和 action 路由分发器"
```

---

### 任务 5：实现设备注册相关 Action

**目的：** 实现 `check_registration` 和 `register_device_and_get_id` 两个 action 的数据库操作逻辑。

**涉及文件：**

| 操作 | 文件 | 作用 |
|------|------|------|
| 修改 | `bandpet-server/routes/actions/registration.js` | 替换占位代码，实现真实的数据库查询/插入 |

**步骤：**

- [ ] **步骤 1：实现 handleCheckRegistration（检查设备是否已注册）**

```javascript
import db from '../../db.js';

export async function handleCheckRegistration({ device_id }) {
  if (!device_id) {
    return { is_registered: false, can_auto_activate: false, error: 'device_id is required' };
  }

  const { rows } = await db.query('SELECT id FROM users WHERE device_id = $1', [device_id]);
  const isRegistered = rows.length > 0;

  return {
    is_registered: isRegistered,
    can_auto_activate: !isRegistered,
  };
}
```

- [ ] **步骤 2：实现 handleRegisterDevice（注册设备并返回用户ID）**

```javascript
export async function handleRegisterDevice({ device_id }) {
  if (!device_id) {
    return { success: false, message: 'device_id is required' };
  }

  const existing = await db.query('SELECT id FROM users WHERE device_id = $1', [device_id]);
  if (existing.rows.length > 0) {
    return { success: true, user_id: existing.rows[0].id, message: 'Device already registered' };
  }

  const { rows } = await db.query(
    'INSERT INTO users (device_id) VALUES ($1) RETURNING id',
    [device_id]
  );

  return { success: true, user_id: rows[0].id, message: 'Device registered successfully' };
}
```

- [ ] **步骤 3：手动测试**

```bash
node server.js &
# 测试1：检查未注册设备
curl -X POST http://localhost:7718/api -H "Content-Type: application/json" \
  -d '{"action":"check_registration","device_id":"TEST-001"}'
# 预期: {"is_registered":false,"can_auto_activate":true}

# 测试2：注册设备
curl -X POST http://localhost:7718/api -H "Content-Type: application/json" \
  -d '{"action":"register_device_and_get_id","device_id":"TEST-001"}'
# 预期: {"success":true,"user_id":1,"message":"Device registered successfully"}

# 测试3：再次检查同一设备
curl -X POST http://localhost:7718/api -H "Content-Type: application/json" \
  -d '{"action":"check_registration","device_id":"TEST-001"}'
# 预期: {"is_registered":true,"can_auto_activate":false}

kill %1
```

- [ ] **步骤 4：提交**

```bash
git add bandpet-server/routes/actions/registration.js
git commit -m "feat: 实现 check_registration 和 register_device 动作"
```

---

### 任务 6：实现点击同步相关 Action

**目的：** 实现 `sync_clicks`（上报点击数）和 `sync_from_server`（从服务器获取用户数据）。

**涉及文件：**

| 操作 | 文件 | 作用 |
|------|------|------|
| 修改 | `bandpet-server/routes/actions/clicks.js` | 替换占位代码，实现点击数更新和用户数据查询 |

**步骤：**

- [ ] **步骤 1：实现 handleSyncClicks（累加点击数）**

```javascript
import db from '../../db.js';

export async function handleSyncClicks({ user_id, click_count }) {
  if (!user_id) {
    return { success: false, error: 'user_id is required' };
  }

  const count = Number(click_count) || 0;
  if (count < 0) {
    return { success: false, error: 'click_count must be non-negative' };
  }

  await db.query(
    'UPDATE users SET total_clicks = total_clicks + $1 WHERE id = $2',
    [count, user_id]
  );

  return { success: true };
}
```

- [ ] **步骤 2：实现 handleSyncFromServer（查询用户数据）**

```javascript
export async function handleSyncFromServer({ user_id }) {
  if (!user_id) {
    return { success: false, error: 'user_id is required' };
  }

  const { rows } = await db.query(
    'SELECT id, pet_name, total_clicks FROM users WHERE id = $1',
    [user_id]
  );

  if (rows.length === 0) {
    return { success: false, error: 'User not found' };
  }

  const user = rows[0];
  return {
    success: true,
    userInfo: {
      id: user.id,
      pet_name: user.pet_name,
      total_clicks: Number(user.total_clicks),
    },
  };
}
```

- [ ] **步骤 3：手动测试**

```bash
node server.js &
# 先注册一个用户
curl -X POST http://localhost:7718/api -H "Content-Type: application/json" \
  -d '{"action":"register_device_and_get_id","device_id":"TEST-CLICKS"}'
# 记下返回的 user_id

# 上报50次点击
curl -X POST http://localhost:7718/api -H "Content-Type: application/json" \
  -d '{"action":"sync_clicks","user_id":1,"click_count":50}'
# 预期: {"success":true}

# 从服务器同步数据
curl -X POST http://localhost:7718/api -H "Content-Type: application/json" \
  -d '{"action":"sync_from_server","user_id":1}'
# 预期: {"success":true,"userInfo":{"id":1,"pet_name":"","total_clicks":50}}

kill %1
```

- [ ] **步骤 4：提交**

```bash
git add bandpet-server/routes/actions/clicks.js
git commit -m "feat: 实现 sync_clicks 和 sync_from_server 动作"
```

---

### 任务 7：实现宠物名相关 Action

**目的：** 实现 `check_pet_name`（检查名字可用性）和 `set_pet_name`（设置宠物名）。

**涉及文件：**

| 操作 | 文件 | 作用 |
|------|------|------|
| 修改 | `bandpet-server/routes/actions/pet.js` | 替换占位代码，实现名字查重和更新 |

**步骤：**

- [ ] **步骤 1：实现 handleCheckPetName（检查名字是否被占用）**

```javascript
import db from '../../db.js';

export async function handleCheckPetName({ pet_name }) {
  if (!pet_name || typeof pet_name !== 'string') {
    return { success: false, isAvailable: false, error: 'pet_name is required' };
  }

  const trimmed = pet_name.trim();
  if (trimmed.length === 0 || trimmed.length > 20) {
    return { success: false, isAvailable: false, error: 'Name must be 1-20 characters' };
  }

  const { rows } = await db.query(
    'SELECT id FROM users WHERE pet_name = $1',
    [trimmed]
  );

  return {
    success: true,
    isAvailable: rows.length === 0,
  };
}
```

- [ ] **步骤 2：实现 handleSetPetName（设置/修改宠物名）**

```javascript
export async function handleSetPetName({ user_id, new_name }) {
  if (!user_id) {
    return { success: false, error: 'user_id is required' };
  }
  if (!new_name || typeof new_name !== 'string') {
    return { success: false, error: 'new_name is required' };
  }

  const trimmed = new_name.trim();
  if (trimmed.length === 0 || trimmed.length > 20) {
    return { success: false, error: 'Name must be 1-20 characters' };
  }

  const existing = await db.query(
    'SELECT id FROM users WHERE pet_name = $1 AND id != $2',
    [trimmed, user_id]
  );
  if (existing.rows.length > 0) {
    return { success: false, error: 'Name already taken' };
  }

  await db.query('UPDATE users SET pet_name = $1 WHERE id = $2', [trimmed, user_id]);
  return { success: true };
}
```

- [ ] **步骤 3：手动测试**

```bash
node server.js &
# 检查名字是否可用
curl -X POST http://localhost:7718/api -H "Content-Type: application/json" \
  -d '{"action":"check_pet_name","pet_name":"Mimi"}'
# 预期: {"success":true,"isAvailable":true}

# 设置宠物名
curl -X POST http://localhost:7718/api -H "Content-Type: application/json" \
  -d '{"action":"set_pet_name","user_id":1,"new_name":"Mimi"}'
# 预期: {"success":true}

# 再次检查同一名字
curl -X POST http://localhost:7718/api -H "Content-Type: application/json" \
  -d '{"action":"check_pet_name","pet_name":"Mimi"}'
# 预期: {"success":true,"isAvailable":false}

kill %1
```

- [ ] **步骤 4：提交**

```bash
git add bandpet-server/routes/actions/pet.js
git commit -m "feat: 实现 check_pet_name 和 set_pet_name 动作"
```

---

### 任务 8：实现排行榜、公告、版本更新 Action

**目的：** 实现最后 3 个 action：`get_rankings`、`get_announcements`、`check_update`。

**涉及文件：**

| 操作 | 文件 | 作用 |
|------|------|------|
| 修改 | `bandpet-server/routes/actions/rankings.js` | 替换占位代码，实现排行榜查询 |
| 修改 | `bandpet-server/routes/actions/announcements.js` | 替换占位代码，实现公告列表查询 |
| 修改 | `bandpet-server/routes/actions/update.js` | 替换占位代码，实现版本更新检查 |

**步骤：**

- [ ] **步骤 1：实现 handleGetRankings（获取排行榜）**

```javascript
import db from '../../db.js';

export async function handleGetRankings({ limit = 10 }) {
  const safeLimit = Math.min(Math.max(Number(limit) || 10, 1), 100);

  const { rows } = await db.query(
    'SELECT id, pet_name, total_clicks FROM users WHERE total_clicks > 0 ORDER BY total_clicks DESC LIMIT $1',
    [safeLimit]
  );

  return {
    success: true,
    rankings: rows.map((r, i) => ({
      rank: i + 1,
      user_id: r.id,
      pet_name: r.pet_name || '未命名',
      total_clicks: Number(r.total_clicks),
    })),
  };
}
```

- [ ] **步骤 2：实现 handleGetAnnouncements（获取公告列表）**

```javascript
import db from '../../db.js';

export async function handleGetAnnouncements({ limit = 10 }) {
  const safeLimit = Math.min(Math.max(Number(limit) || 10, 1), 50);

  const { rows } = await db.query(
    'SELECT id, title, content, created_at FROM announcements WHERE is_active = true ORDER BY created_at DESC LIMIT $1',
    [safeLimit]
  );

  return {
    success: true,
    announcements: rows.map(r => ({
      id: r.id,
      title: r.title,
      content: r.content,
      created_at: r.created_at,
    })),
    count: rows.length,
    timestamp: new Date().toISOString(),
  };
}
```

- [ ] **步骤 3：实现 handleCheckUpdate（检查应用更新）**

```javascript
import db from '../../db.js';

export async function handleCheckUpdate({ current_version_code = 0 }) {
  const { rows } = await db.query(
    'SELECT * FROM app_versions ORDER BY version_code DESC LIMIT 1'
  );

  if (rows.length === 0) {
    return {
      success: true,
      has_update: false,
      is_force_update: false,
      current_version_code,
      latest_version_code: current_version_code,
    };
  }

  const latest = rows[0];
  const hasUpdate = latest.version_code > current_version_code;

  return {
    success: true,
    has_update: hasUpdate,
    update_info: hasUpdate ? {
      version_name: latest.version_name,
      version_code: latest.version_code,
      title: latest.title,
      changelog: latest.changelog,
      download_url: latest.download_url,
      force_update: latest.force_update,
      min_required_version: latest.min_required_version,
      release_time: latest.release_time,
    } : null,
    is_force_update: hasUpdate && latest.force_update,
    current_version_code,
    latest_version_code: latest.version_code,
  };
}
```

- [ ] **步骤 4：手动测试全部三个 action**

```bash
node server.js &
# 插入测试数据
psql $DATABASE_URL -c "INSERT INTO announcements (title, content) VALUES ('测试公告', '这是测试内容');"
psql $DATABASE_URL -c "INSERT INTO app_versions (version_code, version_name, download_url) VALUES (99, '1.0.0', 'https://example.com/app.zip');"

# 测试排行榜
curl -X POST http://localhost:7718/api -H "Content-Type: application/json" \
  -d '{"action":"get_rankings","limit":5}'
# 预期: rankings 数组

# 测试公告
curl -X POST http://localhost:7718/api -H "Content-Type: application/json" \
  -d '{"action":"get_announcements","limit":5}'
# 预期: 包含测试公告的 announcements 数组

# 测试版本更新
curl -X POST http://localhost:7718/api -H "Content-Type: application/json" \
  -d '{"action":"check_update","current_version_code":44}'
# 预期: has_update:true, update_info 包含版本 99 的信息

kill %1
```

- [ ] **步骤 5：提交**

```bash
git add bandpet-server/routes/actions/rankings.js bandpet-server/routes/actions/announcements.js bandpet-server/routes/actions/update.js
git commit -m "feat: 实现排行榜、公告和版本更新检查动作"
```

---

### 任务 9：清理测试数据 + 最终验证

**目的：** 清理所有测试数据，运行完整的 9 个 action 集成测试，确保一切正常。

**涉及文件：**

| 操作 | 文件 | 作用 |
|------|------|------|
| 无代码修改 | — | 仅执行 SQL 清理和集成测试 |

**步骤：**

- [ ] **步骤 1：清理测试数据**

```bash
psql $DATABASE_URL -c "DELETE FROM users WHERE device_id LIKE 'TEST%';"
psql $DATABASE_URL -c "DELETE FROM announcements WHERE title = '测试公告';"
psql $DATABASE_URL -c "DELETE FROM app_versions WHERE version_code = 99;"
```

- [ ] **步骤 2：完整集成测试（按顺序测试全部 9 个 action）**

```bash
node server.js &

echo "=== 1. check_registration ==="
curl -s -X POST http://localhost:7718/api -H "Content-Type: application/json" \
  -d '{"action":"check_registration","device_id":"FINAL-TEST"}'

echo -e "\n=== 2. register_device ==="
curl -s -X POST http://localhost:7718/api -H "Content-Type: application/json" \
  -d '{"action":"register_device_and_get_id","device_id":"FINAL-TEST"}'

echo -e "\n=== 3. sync_clicks ==="
curl -s -X POST http://localhost:7718/api -H "Content-Type: application/json" \
  -d '{"action":"sync_clicks","user_id":1,"click_count":100}'

echo -e "\n=== 4. sync_from_server ==="
curl -s -X POST http://localhost:7718/api -H "Content-Type: application/json" \
  -d '{"action":"sync_from_server","user_id":1}'

echo -e "\n=== 5. check_pet_name ==="
curl -s -X POST http://localhost:7718/api -H "Content-Type: application/json" \
  -d '{"action":"check_pet_name","pet_name":"Buddy"}'

echo -e "\n=== 6. set_pet_name ==="
curl -s -X POST http://localhost:7718/api -H "Content-Type: application/json" \
  -d '{"action":"set_pet_name","user_id":1,"new_name":"Buddy"}'

echo -e "\n=== 7. get_rankings ==="
curl -s -X POST http://localhost:7718/api -H "Content-Type: application/json" \
  -d '{"action":"get_rankings","limit":10}'

echo -e "\n=== 8. get_announcements ==="
curl -s -X POST http://localhost:7718/api -H "Content-Type: application/json" \
  -d '{"action":"get_announcements","limit":10}'

echo -e "\n=== 9. check_update ==="
curl -s -X POST http://localhost:7718/api -H "Content-Type: application/json" \
  -d '{"action":"check_update","current_version_code":44}'

kill %1
```

预期结果：所有 9 个 action 返回 `success: true` 或有效数据。

- [ ] **步骤 3：更新客户端配置（如果服务器地址变更）**

如果服务器 IP 或端口变化，修改 `src/common/js/config.js` 第 5 行：
```javascript
BASE_URL: 'http://你的服务器IP:7718'
```

- [ ] **步骤 4：最终提交**

```bash
git add -A
git commit -m "feat: 完成 Supabase 迁移 — 自托管 Express + PostgreSQL 后端"
```
