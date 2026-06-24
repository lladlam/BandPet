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
