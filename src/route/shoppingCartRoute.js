const express  = require('express')
const router = express.Router()
const shoppingCartController = require('../controller/shoppingCartController')

router.get('/cart', shoppingCartController.getCartByUserId)

module.exports = router