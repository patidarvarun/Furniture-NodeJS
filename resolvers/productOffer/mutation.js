const ProductOffer = require("../../models/ProductOffer");

const productOfferMutations = {
  createProductOffer: async (parent, args, context, info) => {
    const {
      message,
      description,
      user_id,
      discount_value,
      type,
      product_id,
      cat_id,
    } = args.productOffer;

    const productOffer = new ProductOffer({
      message,
      description,
      user_id,
      discount_value,
      type,
      product_id,
      cat_id,
    });
    await productOffer.save();
    return productOffer;
  },

  deleteProductoffer: async (parent, args, context, info) => {
    const { id } = args;
    await ProductOffer.findByIdAndDelete(id);
    return "ProductOffer is deleted";
  },
};

module.exports = productOfferMutations;
