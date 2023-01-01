const Sequelize = require('sequelize');

const dbSettings = {
    database: process.env.DATABASE_SETTINGS_NAME,
    username: process.env.DATABASE_SETTINGS_USER,
    password: process.env.DATABASE_SETTINGS_PASSWORD,

}

const {database, username, password} = dbSettings

const connection = new Sequelize(database,username,password,{
    host: process.env.DATABASE_SETTINGS_HOST,
    port: process.env.DATABASE_SETTINGS_PORT,
    dialect:'mysql',
    timezone: '-03:00',
});

module.exports = connection;