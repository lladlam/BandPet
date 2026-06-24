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
