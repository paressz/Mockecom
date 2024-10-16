const pgp = require('pg-promise')();
const USERNAME = 'postgres';
const PASSWORD = 'postgres';
const HOST = 'localhost';
const PORT = '5432';
const DB_NAME = 'test_ecommerce';
//const db = pgp(`postgres://${USERNAME}:${PASSWORD}@${HOST}:${PORT}/${DB_NAME}`);
const db = pgp({
    host: HOST,
    port: PORT,
    database: DB_NAME,
    user: USERNAME,
    password: PASSWORD,
});

module.exports = db;