const Review = require("../../models/ReviewModels");

const productReviewMutations = {
  createProductReview: async (parent, args, context, info) => {
    const { message, rating, user_id, product_id } = args.productReview;
    const productReview = new Review({
      message,
      rating,
      user_id,
      product_id,
    });
    await productReview.save();
    return productReview;
  },
};

module.exports = productReviewMutations;
