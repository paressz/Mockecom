const cartModel = require('../model/cart')

exports.getCartByUserId = async (userId) => {
    const cart = await cartModel.getCartByUserId(userId)
    if(!cart) throw new Error("invalid user id");
    return cart
}