#!/usr/bin/env node
/**
 * Supabase 数据迁移到自托管 PostgreSQL
 * 
 * 使用方法：
 * 1. 确保 .env 中配置了新数据库的 DATABASE_URL
 * 2. 设置环境变量 SUPABASE_DATABASE_URL 为 Supabase 连接字符串
 * 3. 运行：node migrate-from-supabase.js
 */

import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const SUPABASE_URL = process.env.SUPABASE_DATABASE_URL;
const NEW_DB_URL = process.env.DATABASE_URL;

if (!SUPABASE_URL) {
  console.error('错误: 请设置 SUPABASE_DATABASE_URL 环境变量');
  console.error('示例: SUPABASE_DATABASE_URL="postgresql://postgres:xxx@db.xxx.supabase.co:5432/postgres" node migrate-from-supabase.js');
  process.exit(1);
}

if (!NEW_DB_URL) {
  console.error('错误: 请在 .env 中配置 DATABASE_URL');
  process.exit(1);
}

const supabasePool = new pg.Pool({ connectionString: SUPABASE_URL });
const newDbPool = new pg.Pool({ connectionString: NEW_DB_URL });

async function migrateTable(tableName, transform = (row) => row) {
  console.log(`\n迁移表: ${tableName}`);
  
  try {
    const { rows } = await supabasePool.query(`SELECT * FROM ${tableName}`);
    console.log(`  从 Supabase 读取 ${rows.length} 条记录`);
    
    if (rows.length === 0) {
      console.log(`  跳过（无数据）`);
      return 0;
    }
    
    let inserted = 0;
    for (const row of rows) {
      const transformed = transform(row);
      const keys = Object.keys(transformed);
      const values = keys.map((_, i) => `$${i + 1}`);
      
      const query = `
        INSERT INTO ${tableName} (${keys.join(', ')})
        VALUES (${values.join(', ')})
        ON CONFLICT DO NOTHING
      `;
      
      try {
        await newDbPool.query(query, keys.map(k => transformed[k]));
        inserted++;
      } catch (err) {
        console.error(`  插入失败: ${err.message}`);
      }
    }
    
    console.log(`  成功插入 ${inserted} 条记录`);
    return inserted;
  } catch (err) {
    console.error(`  迁移 ${tableName} 失败: ${err.message}`);
    return 0;
  }
}

async function migrateUsers() {
  console.log('\n迁移表: users (联合 devices 表)');
  
  try {
    // 联合查询 users 和 devices 表
    const { rows } = await supabasePool.query(`
      SELECT 
        u.id,
        u.user_number,
        u.pet_name,
        u.total_clicks,
        u.created_at,
        d.device_id
      FROM users u
      LEFT JOIN devices d ON u.id = d.user_id
      WHERE d.device_id IS NOT NULL
    `);
    console.log(`  从 Supabase 读取 ${rows.length} 条记录`);
    
    if (rows.length === 0) {
      console.log(`  跳过（无数据）`);
      return 0;
    }
    
    let inserted = 0;
    for (const row of rows) {
      const transformed = {
        id: row.id,
        device_id: row.device_id,
        pet_name: row.pet_name || '',
        total_clicks: row.total_clicks || 0,
        created_at: row.created_at || new Date(),
      };
      
      const keys = Object.keys(transformed);
      const values = keys.map((_, i) => `$${i + 1}`);
      
      const query = `
        INSERT INTO users (${keys.join(', ')})
        VALUES (${values.join(', ')})
        ON CONFLICT DO NOTHING
      `;
      
      try {
        await newDbPool.query(query, keys.map(k => transformed[k]));
        inserted++;
      } catch (err) {
        console.error(`  插入失败: ${err.message}`);
      }
    }
    
    console.log(`  成功插入 ${inserted} 条记录`);
    return inserted;
  } catch (err) {
    console.error(`  迁移 users 失败: ${err.message}`);
    return 0;
  }
}

async function migrateAnnouncements() {
  return migrateTable('announcements', (row) => ({
    id: row.id,
    title: row.title,
    content: row.content || '',
    is_active: row.is_active !== false,
    created_at: row.created_at || new Date(),
  }));
}

async function migrateAppVersions() {
  return migrateTable('app_versions', (row) => ({
    id: row.id,
    version_code: row.version_code,
    version_name: row.version_name,
    title: row.title || '发现新版本',
    changelog: row.changelog || '',
    download_url: row.download_url || '',
    force_update: row.force_update || false,
    min_required_version: row.min_required_version || 0,
    release_time: row.release_time || new Date(),
  }));
}

async function main() {
  console.log('=== Supabase 数据迁移工具 ===');
  console.log(`源数据库: ${SUPABASE_URL.replace(/:[^@]+@/, ':***@')}`);
  console.log(`目标数据库: ${NEW_DB_URL.replace(/:[^@]+@/, ':***@')}`);
  
  try {
    // 测试连接
    console.log('\n测试数据库连接...');
    await supabasePool.query('SELECT 1');
    console.log('  Supabase 连接成功');
    await newDbPool.query('SELECT 1');
    console.log('  新数据库连接成功');
    
    // 迁移数据
    const usersCount = await migrateUsers();
    const announcementsCount = await migrateAnnouncements();
    const versionsCount = await migrateAppVersions();
    
    console.log('\n=== 迁移完成 ===');
    console.log(`用户: ${usersCount} 条`);
    console.log(`公告: ${announcementsCount} 条`);
    console.log(`版本: ${versionsCount} 条`);
    
  } catch (err) {
    console.error('\n迁移失败:', err.message);
    process.exit(1);
  } finally {
    await supabasePool.end();
    await newDbPool.end();
  }
}

main();
