const db = require('../config/db')

exports.createUser = async (userData) => {
    const { username, email, password} = userData;
    const result = await db.one(
        'INSERT INTO users (username, password, email) VALUES ($1, $2, $3) RETURNING *',
        [username, password, email]
    );
    console.log (result);
    return result;
};

exports.findUserByEmail = async (email) => {
    const result = await db.oneOrNone('SELECT * FROM users WHERE email = $1', [email])
    if(result) console.log(result)
    return result
}

exports.login = async (email, password) => {
    const result = await db.oneOrNone('SELECT * FROM users WHERE email = $1 AND password = $2 LIMIT 1', [email, password])
    return result
}

exports.findUserById = async (id) => {
    const result = await db.one('SELECT * FROM users WHERE id = $1', [id])
    return result
}


