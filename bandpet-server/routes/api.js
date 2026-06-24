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
