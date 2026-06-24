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
