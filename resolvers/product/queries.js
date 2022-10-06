const Product = require("../../models/ProductModel");

const productQueries = {
  getAllProduct: async () => {
    // let arr = [];
    let result = await Product.find()
      .populate({ path: "cat_id" })
      .populate({
        path: "varientOption",
        populate: {
          path: "varient_id",
        },
      })
      .populate({
        path: "review",
        populate: {
          path: "user_id",
        },
      });
    // var obj = [];
    // for (user in result) {
    //   result[user].UserReview = "Varrr";
    //   obj.push(result[user]);
    // }
    // console.log(obj);
    return result;
  },
  getProductById: async (parent, { id }, context, info) => {
    return await Product.findById(id);
  },
};

module.exports = productQueries;
