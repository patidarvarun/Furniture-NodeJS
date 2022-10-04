const Review = require("../../models/ReviewModels");
const Product = require("../../models/ProductModel");

const productReviewMutations = {
  createProductReview: async (parent, args, context, info) => {
    const { message, rating, user_id, product_id } = args.productReview;
    const productReview = new Review({
      message,
      rating,
      user_id,
      product_id,
    });
    await productReview.save().then(async (res) => {
      if (res) {
        let revs = await Product.findByIdAndUpdate(
          product_id,
          {
            $push: { review: res._id },
          },
          {
            new: true,
          }
        );
        console.log("revsrevs", revs);
      } else {
        console.log("okk");
      }
    });
    return productReview;
  },
};

module.exports = productReviewMutations;
