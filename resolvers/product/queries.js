const Product = require("../../models/ProductModel");
const User = require("../../models/UserModel");

const productQueries = {
  getAllProduct: async () => {
    let result = await Product.find()
      .populate({ path: "cat_id" })
      .populate({
        path: "review",
      })
      .populate({
        path: "varientOption",
        populate: {
          path: "varient_id",
        },
      });
    result = User.populate(result, { path: "review.user_id" });
    return result;
  },
  getProductById: async (parent, { id }, context, info) => {
    return await Product.findById(id);
  },
};

module.exports = productQueries;
