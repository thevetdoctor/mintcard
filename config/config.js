const dotenv = require("dotenv").config();
const { 
    USERNAME, 
    PASSWORD, 
    DB_NAME, 
    HOSTNAME,
    DB_PORT,
    DIALECT,
    SEEDER_STORAGE 
} = process.env;

module.exports = {
    development: {
      username: 'cpdzdwcn',
      password: PASSWORD,
      database: DB_NAME,
      host: HOSTNAME,
      port: DB_PORT,
      dialect: 'postgres',
      seederStorage: SEEDER_STORAGE,
    },
    test: {
        username: USERNAME,
        password: PASSWORD,
        database: DB_NAME,
        host: HOSTNAME,
        port: DB_PORT,
        dialect: DIALECT,
        seederStorage: SEEDER_STORAGE,
    },
    production: {
        username: USERNAME,
        password: PASSWORD,
        database: DB_NAME,
        host: HOSTNAME,
        port: DB_PORT,
        dialect: DIALECT,
        seederStorage: SEEDER_STORAGE,
    }
  }
  