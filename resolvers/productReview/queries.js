const Review = require("../../models/ReviewModels");

const productReviewQueries = {
  getReviewProduct: async () => {
    return await Review.find()
      .populate({ path: "user_id" })
      .populate({ path: "product_id" });
  },
};

module.exports = productReviewQueries;
