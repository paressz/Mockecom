const pgp = require('pg-promise')();
require('dotenv').config()

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.PASSWORD;
const HOST = process.env.HOST;
const PORT = process.env.PORT;
const DB_NAME = process.env.DB_NAME;
const db = pgp({
    host: HOST,
    port: PORT,
    database: DB_NAME,
    user: USERNAME,
    password: PASSWORD,
});

module.exports = db;