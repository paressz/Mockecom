const searchService = require('../service/searchService.js')

exports.searchProducts = async (req, res) => {
    const productName = req.query.name;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 15;
    if(!productName) return res.status(400).json({
        error: "Product name is required"
    });
    try {
        const result = await searchService.searchProducts(productName, page, limit);
        const {totalCount,pageCount,currentPage,products} = result
        return res.status(200).json({
            totalCount, pageCount, currentPage, products
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({error: "internal server error"});
    }
}