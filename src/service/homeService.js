const productModel = require('src/model/product.js')

exports.getProducts = async (page = 1, limit = 15) => {
    const totalCount = await productModel.getTotalProductsCount
    const products = await productModel.getProducts
    if(totalCount <= 0) throw new Error("count is zero or less");
    return {
        totalCount,
        totalPages: Math.ceil(totalCount/limit),
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