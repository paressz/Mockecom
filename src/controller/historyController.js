const historyService = require('../service/historyService')

exports.getAllOrderByUserId = async (req, res) => {
    const {userId} = req.body
    const page = parseInt(req.body.page) || 1
    const limit = parseInt(req.body.limit) || 10
    const result = await historyService.getAllOrderByUserId(userId, page, limit)
    if(!userId) 
        return res.status(400).json({error: "User Id is invalid"})
    try {
        const {totalCount, pageCount, currentPage, orders} = result
        return res.status(200).json({
            totalCount, pageCount, currentPage, orders
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({error: "internal server error"});
    }

}

exports.getOrderById = async (req, res) => {
    const orderId = req.params.orderId
    const result = await historyService.getOrderById(orderId)
    if(!orderId)
        return res.status(400).json({error : 'Invalid order Id'})
    try {
        return res.status(200).json(result)
    } catch (error) {
        console.log(error)
        return res.status(500).json("internal server error")

    }
}

exports.getAllOrderItem = async (req, res) => {
    const {orderId} = req.params
    const page = parseInt(req.body.page) || 1
    const limit = parseInt(req.body.limit) || 10
    const result = await historyService.getAllOrderItem(orderId, page, limit)
    if (!orderId) 
        return res.status(400).json({error : "Invalid Order Id"})
    try {
        const {totalCount, pageCount, currentPage, orderItems} = result
        return res.status(200).json({
            totalCount, pageCount, currentPage, orderItems
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json("internal server error")
    }
}