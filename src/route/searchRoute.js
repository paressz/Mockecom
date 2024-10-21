const express = require('express')
const searchController = require('../controller/searchController')
const router = express.Router()

router.get('/search', searchController.searchProducts)

module.exports = router