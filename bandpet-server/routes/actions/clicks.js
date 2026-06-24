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
