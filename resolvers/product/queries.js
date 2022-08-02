const Product = require("../../models/Product.model");

const productQueries = {
  getAllProduct: async () => {
    return await Product.find();
  },
  getProductById: async (parent, { id }, context, info) => {
    return await Product.findById(id);
  },
};

module.exports = productQueries;
