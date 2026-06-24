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
