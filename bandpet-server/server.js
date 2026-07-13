import express from 'express';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import apiRouter from './routes/api.js';
import adminRouter from './routes/admin.js';

dotenv.config();

const API_PORT = Number(process.env.API_PORT || 7718);
const GUI_PORT = Number(process.env.GUI_PORT || 7719);
const JWT_SECRET = process.env.JWT_SECRET || crypto.randomBytes(32).toString('hex');
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || crypto.randomBytes(16).toString('hex');

console.log(`[Admin] 管理员密码: ${ADMIN_PASSWORD}`);

const corsMiddleware = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'content-type, authorization');
  res.header('Access-Control-Allow-Methods', 'POST, OPTIONS, GET');
  if (req.method === 'OPTIONS') return res.sendStatus(204);
  next();
};

const apiApp = express();
apiApp.use(express.json({ limit: '1mb' }));
apiApp.use(corsMiddleware);

apiApp.get('/health', (req, res) => {
  res.json({ success: true, name: 'bandpet-api', port: API_PORT });
});

apiApp.use('/api', apiRouter);

apiApp.use((err, req, res, _next) => {
  console.error('[API] 未处理错误:', err.message);
  res.status(500).json({ success: false, error: 'internal_error', message: 'Internal server error' });
});

const guiApp = express();
guiApp.use(express.json({ limit: '1mb' }));
guiApp.use(express.static('public'));
guiApp.use(corsMiddleware);

guiApp.get('/health', (req, res) => {
  res.json({ success: true, name: 'bandpet-gui', port: GUI_PORT });
});

guiApp.post('/admin/login', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.json({ success: false, message: '请输入用户名和密码' });
  }

  if (username !== 'admin' || password !== ADMIN_PASSWORD) {
    return res.json({ success: false, message: '用户名或密码错误' });
  }

  const token = jwt.sign({ role: 'admin' }, JWT_SECRET, { expiresIn: '24h' });
  res.json({ success: true, token });
});

guiApp.get('/admin/check', (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.json({ success: false, message: '未登录' });
  }

  try {
    jwt.verify(authHeader.slice(7), JWT_SECRET);
    res.json({ success: true });
  } catch {
    res.json({ success: false, message: '登录已过期' });
  }
});

guiApp.get('/admin/', (req, res) => {
  res.sendFile('admin.html', { root: 'public' });
});

guiApp.use('/admin/api', adminRouter);

guiApp.get('*', (req, res) => {
  res.sendFile('login.html', { root: 'public' });
});

guiApp.use((err, req, res, _next) => {
  console.error('[GUI] 未处理错误:', err.message);
  res.status(500).json({ success: false, error: 'internal_error', message: 'Internal server error' });
});

apiApp.listen(API_PORT, '0.0.0.0', () => {
  console.log(`[API] BandPet API 服务器启动: http://0.0.0.0:${API_PORT}`);
});

guiApp.listen(GUI_PORT, '0.0.0.0', () => {
  console.log(`[GUI] BandPet 管理后台启动: http://0.0.0.0:${GUI_PORT}`);
});
