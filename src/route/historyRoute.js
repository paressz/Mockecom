const express  = require('express')
const router = express.Router()
const historyController = require('../controller/historyController')

router.get('/history/order/:orderId', historyController.getAllOrderItem)
router.get('/history/:orderId', historyController.getOrderById)
router.get('/history', historyController.getAllOrderByUserId)

module.exports = router