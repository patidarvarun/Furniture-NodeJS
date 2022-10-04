const Product = require("../../models/ProductModel");

const productQueries = {
  getAllProduct: async () => {
    return await Product.find()
      .populate({ path: "cat_id" })
      .populate({ path: "review" });
  },
  getProductById: async (parent, { id }, context, info) => {
    return await Product.findById(id);
  },
};

module.exports = productQueries;
