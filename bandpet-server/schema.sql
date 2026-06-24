CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    device_id TEXT UNIQUE NOT NULL,
    pet_name TEXT DEFAULT '',
    total_clicks BIGINT DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE announcements (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    content TEXT DEFAULT '',
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE app_versions (
    id SERIAL PRIMARY KEY,
    version_code INTEGER UNIQUE NOT NULL,
    version_name TEXT NOT NULL,
    title TEXT DEFAULT '发现新版本',
    changelog TEXT DEFAULT '',
    download_url TEXT DEFAULT '',
    force_update BOOLEAN DEFAULT false,
    min_required_version INTEGER DEFAULT 0,
    release_time TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_users_device_id ON users(device_id);
CREATE INDEX idx_users_total_clicks ON users(total_clicks DESC);
CREATE INDEX idx_announcements_active ON announcements(is_active, created_at DESC);
CREATE INDEX idx_app_versions_code ON app_versions(version_code DESC);
