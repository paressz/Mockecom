const productModel = require('../model/product.js')

exports.searchProducts = async (name, page = 1, limit = 15) => {
    const products = await productModel.findProductsByName(name, page, limit)
    const totalCount = await productModel.getTotalCountByName(name)
    if(totalCount < 0) throw new Error("count is less than 0");
    return {
        totalCount,
        pageCount: Math.ceil(totalCount/limit),
        currentPage: page,
        products
    }
}

exports.findProductById = async (id) => {
    const product = productModel.findProductById(id)
    if(!product) throw new Error("Invalid Id");
    return {
        product
    }
}