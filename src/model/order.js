const db = require('../config/db')

exports.getAllOrderByUserId = async (userId, page = 1, limit = 10) => {
    const offset = (page-1) * limit
    const query = 'SELECT * FROM orders WHERE user_id = $1 LIMIT $2 OFFSET $3'
    const params = [userId, limit, offset]
    const result = await db.manyOrNone(query, params)
    return result
}

exports.getAllOrderCount = async (userId) => {
    const query = 'SELECT COUNT(*) FROM orders WHERE orders.user_id = $1'
    const params = [userId]
    const result = await db.one(query, params)
    return result
}

exports.getOrderById = async (orderId) => {
    const query = 'SELECT * FROM orders WHERE orders.id = $1 LIMIT 1'
    const params = [orderId]
    const result = await db.oneOrNone(query, params)
    return result
}

exports.getAllOrderItem = async (orderId, page = 1, limit = 10) => {
    const offset = (page-1) * limit
    const query = 
    'SELECT order_items.id, orders.id, products.name, products.image_url, products.price, order_items.quantity ' +
    'FROM products, orders, order_items ' + 
    'WHERE order_items.product_id = products.id AND order_items.order_id = $1 ' +
    'LIMIT $2 OFFSET $3'
    const params = [orderId, limit, offset]
    const result = await db.manyOrNone(query, params)
    return result
}
exports.getAllOrderItemCount = async (orderId) => {
    const query = 'SELECT COUNT(*) FROM order_items WHERE order_id = $1'
    const params = [orderId]
    const result = await db.one(query, params)
    return result
}

