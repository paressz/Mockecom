const orderModel = require('../model/order')

exports.getAllOrderByUserId = async (userId, page = 1, limit = 10) => {
    const orders = await orderModel.getAllOrderByUserId(userId)
    const totalCount = orderModel.getAllOrderCount(userId)
    return {
        totalCount,
        pageCount: Math.ceil(totalCount/limit),
        currentPage: page,
        orders
    }
}

exports.getOrderById = async (orderId) => {
    const order = await orderModel.getOrderById(orderId) || 0
    //if(!order) throw new Error("Invalid order id");
    return order
}
exports.getAllOrderItem = async (orderId, page = 1, limit = 10) => {
    const orderItems = orderModel.getAllOrderItem(orderId)
    const totalCount = orderModel.getAllOrderItemCount(orderId)
    return {
        totalCount,
        pageCount: Math.ceil(totalCount/limit),
        currentPage: page,
        orderItems
    }
}