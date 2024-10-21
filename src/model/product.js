const db = require('../config/db')


exports.createProduct = async (productData) => {
    const {name, description, price, image_url} = productData
    const result = await db.one(
        'INSERT INTO products (name, description, price, image_url) VALUES ($1, $2, $3, $4) RETURNING *',
        [name, description, price, image_url]
    )
    console.log(result)
    return result
}

exports.findProductById = async (id) => {
    const result = await db.one('SELECT * FROM products WHERE id = $1 LIMIT 1', [id])
    return result
}

exports.findProductsByName = async (name, page = 1, limit = 15) => {
    const offset = (page-1) * limit
    const query = `SELECT * FROM products 
    WHERE name ILIKE $1
    LIMIT $2 OFFSET $3`
    const paramValue = [`%${name}%`, limit, offset]
    const result = await db.manyOrNone(query, paramValue)
    return result
}

exports.getTotalCountByName = async (name) => {
    const query = `SELECT COUNT(*) FROM products WHERE name ILIKE $1`
    const paramValue = [`%${name}%`]
    const result = await db.one(query, paramValue)
    console.log(result.count)
    return parseInt(result.count)
}

exports.getProducts = async (page = 1, limit = 15) => {
    const offset = (page-1) * limit
    const query = `SELECT * FROM products LIMIT $1 offset $2`
    const paramValue = [limit, offset]
    const result = await db.many(query, paramValue)
    return result
}

exports.getTotalProductsCount = async () => {
    const query = `SELECT COUNT(*) FROM products`
    const result = await db.one(query)
    return parseInt(result.count)
}
