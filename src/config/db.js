const pgp = require('pg-promise')();
const test = require('dotenv').config()

const DB_UNAME = process.env.DB_UNAME;
const PASSWORD = process.env.PASSWORD;
const HOST = process.env.HOST;
const PORT = process.env.PORT;
const DB_NAME = process.env.DB_NAME;
const db = pgp({
    host: HOST,
    port: PORT,
    database: DB_NAME,
    user: DB_UNAME,
    password: PASSWORD,
});
module.exports = db;