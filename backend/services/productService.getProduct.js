import ProductModel from '../models/productModel.js';

const getProductService = async (req) => {
    const product = await ProductModel.findById(req.params.id);
    return product;
};

export default getProductService;
