const db = require('../config/db')


exports.getCartByUserId = async (userId) => {
    const query = 
    `SELECT cart.product_id, products.name, products.image_url, products.price, cart.quantity 
    FROM cart, products
    WHERE user_id = $1 AND products.id = cart.product_id`
    const params = [userId]
    const result = await db.manyOrNone(query, params)
    return result
}
