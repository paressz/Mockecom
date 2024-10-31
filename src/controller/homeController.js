const homeService = require('../service/homeService')

exports.getProducts = async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 15;
    const products = await homeService.getProducts(page, limit)
    try {
        return res.status(200).json(products)
    } catch (error) {
        console.log(error)
        return res.status(500).json("internal server error")
    }
}