const Sequelize = require("sequelize");
//const mysql2 = require("mysql2");

const dbSettings = {
    database: process.env.DATABASE_SETTINGS_NAME,
    username: process.env.DATABASE_SETTINGS_USER,
    password: process.env.DATABASE_SETTINGS_PASSWORD,

}

const {database, username, password} = dbSettings

const write = new Sequelize(database, username, password, {
  host: process.env.DATABASE_SETTINGS_WRITE,
  dialect: "mysql",
  port: process.env.DATABASE_SETTINGS_PORT,
  timezone: "-03:00",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  freezeTableName: true,
});

const read = new Sequelize(database, username, password, {
    host: process.env.DATABASE_SETTINGS_READ,
    dialect: "mysql",
    port: process.env.DATABASE_SETTINGS_PORT,
    timezone: "-03:00",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    freezeTableName: true,
  });
  
  const connection = {
    write: write,
    read: read,
  }

module.exports = connection;
