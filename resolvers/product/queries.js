const Product = require("../../models/ProductModel");
const Review = require("../../models/ReviewModels");

const productQueries = {
  getAllProduct: async () => {
    let result = await Product.find()
      .populate({ path: "cat_id" })
      .populate({
        path: "review.reviewArr",
        populate: {
          path: "user_id",
        },
      });
    let paymentArray = [];
    var itemObj = {};
    for (var i = 0; i < result.length; i++) {
      itemObj["userreview"] = "hhhhhhhh"; // product variant value id

      paymentArray.push(itemObj);
    }
    console.log("@@@@@@@@@@@", paymentArray);

    console.log(result, "ssss");

    //   for (user in result) {
    //     // console.log("#######", result[i].review);

    //     result[user].UserReview = "jaydeep";
    //   }
    //   console.log(result, "hhhss");
    //   return result;
  },
  getProductById: async (parent, { id }, context, info) => {
    return await Product.findById(id);
  },
};

module.exports = productQueries;
