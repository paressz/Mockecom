const shoppingCartService = require('../service/shoppingCartService')

exports.getCartByUserId = async (req, res) => {
    const userId = req.body.userId
    const cart = await shoppingCartService.getCartByUserId(userId)
    if(!userId) 
        return res.status(400).json({error: 'Invalid User Id'})
    try {
        return res.status(200).json({cart})
    } catch (error) {
        console.log(error)
        return res.status(500).json({error: "internal server error"});
    }
}