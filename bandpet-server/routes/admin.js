import { Router } from 'express';
import jwt from 'jsonwebtoken';
import db from '../db.js';

const router = Router();
const JWT_SECRET = process.env.JWT_SECRET || 'bandpet-jwt-secret-key-2024';

function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ success: false, message: '未登录' });
  }
  try {
    jwt.verify(authHeader.slice(7), JWT_SECRET);
    next();
  } catch {
    res.status(401).json({ success: false, message: '登录已过期' });
  }
}

router.use(authMiddleware);

// 用户管理
router.get('/users', async (req, res) => {
  try {
    const { rows } = await db.query('SELECT * FROM users ORDER BY id LIMIT 100');
    res.json({ success: true, users: rows });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

router.put('/users/:id', async (req, res) => {
  const { id } = req.params;
  const { pet_name, total_clicks } = req.body;
  try {
    await db.query(
      'UPDATE users SET pet_name = COALESCE($1, pet_name), total_clicks = COALESCE($2, total_clicks) WHERE id = $3',
      [pet_name, total_clicks, id]
    );
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

router.delete('/users/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await db.query('DELETE FROM users WHERE id = $1', [id]);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// 公告管理
router.get('/announcements', async (req, res) => {
  try {
    const { rows } = await db.query('SELECT * FROM announcements ORDER BY id');
    res.json({ success: true, announcements: rows });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

router.post('/announcements', async (req, res) => {
  const { title, content, is_active } = req.body;
  try {
    const { rows } = await db.query(
      'INSERT INTO announcements (title, content, is_active) VALUES ($1, $2, $3) RETURNING *',
      [title, content, is_active !== false]
    );
    res.json({ success: true, announcement: rows[0] });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

router.put('/announcements/:id', async (req, res) => {
  const { id } = req.params;
  const { title, content, is_active } = req.body;
  try {
    await db.query(
      'UPDATE announcements SET title = COALESCE($1, title), content = COALESCE($2, content), is_active = COALESCE($3, is_active) WHERE id = $4',
      [title, content, is_active, id]
    );
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

router.delete('/announcements/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await db.query('DELETE FROM announcements WHERE id = $1', [id]);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// 版本管理
router.get('/versions', async (req, res) => {
  try {
    const { rows } = await db.query('SELECT * FROM app_versions ORDER BY version_code DESC');
    res.json({ success: true, versions: rows });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

router.post('/versions', async (req, res) => {
  const { version_code, version_name, title, changelog, download_url, force_update, min_required_version } = req.body;
  try {
    const { rows } = await db.query(
      'INSERT INTO app_versions (version_code, version_name, title, changelog, download_url, force_update, min_required_version) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
      [version_code, version_name, title || '发现新版本', changelog || '', download_url || '', force_update || false, min_required_version || 0]
    );
    res.json({ success: true, version: rows[0] });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

router.put('/versions/:id', async (req, res) => {
  const { id } = req.params;
  const { version_name, title, changelog, download_url, force_update, min_required_version } = req.body;
  try {
    await db.query(
      'UPDATE app_versions SET version_name = COALESCE($1, version_name), title = COALESCE($2, title), changelog = COALESCE($3, changelog), download_url = COALESCE($4, download_url), force_update = COALESCE($5, force_update), min_required_version = COALESCE($6, min_required_version) WHERE id = $7',
      [version_name, title, changelog, download_url, force_update, min_required_version, id]
    );
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

router.delete('/versions/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await db.query('DELETE FROM app_versions WHERE id = $1', [id]);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// 统计数据
router.get('/stats', async (req, res) => {
  try {
    const usersResult = await db.query('SELECT COUNT(*) as count FROM users');
    const announcementsResult = await db.query('SELECT COUNT(*) as count FROM announcements');
    const versionsResult = await db.query('SELECT * FROM app_versions ORDER BY version_code DESC LIMIT 1');

    res.json({
      success: true,
      stats: {
        totalUsers: parseInt(usersResult.rows[0].count),
        totalAnnouncements: parseInt(announcementsResult.rows[0].count),
        latestVersion: versionsResult.rows[0] || null
      }
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

export default router;
