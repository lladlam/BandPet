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
