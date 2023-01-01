import fs from 'fs';

export default {
  development: {
    username: process.env.DATABASE_SETTINGS_USER,
    password: process.env.DATABASE_SETTINGS_PASSWORD,
    database: process.env.DATABASE_SETTINGS_NAME,
    host: process.env.DATABASE_SETTINGS_HOST,
    port: process.env.DATABASE_SETTINGS_PORT,
    dialect: 'mysql',
  },
};