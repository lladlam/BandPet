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
