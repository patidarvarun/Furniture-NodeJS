const ProductOffer = require("../../models/ProductOffer");

const productOfferQueries = {
  getOffer: async () => {
    const result = await ProductOffer.find()
      .populate({ path: "user_id" })
      .populate({ path: "product_id" })
      .populate({ path: "cat_id" });
    return result;
  },
  getProductOfferById: async (parent, { id }, context, info) => {
    return await ProductOffer.find({
      $or: [{ user_id: id }],
    });
  },
};

module.exports = productOfferQueries;
