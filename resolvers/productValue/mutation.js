const ProductValue = require("../../models/ProductValueModel");

const productValueMutations = {
  createProductValue: async (parent, args, context, info) => {
    const { product_id, varient_id, varientOption_id, price } = args.prodValue;

    const productvalue = new ProductValue({
      product_id,
      varient_id,
      varientOption_id,
      price,
    });
    await productvalue.save();
    return productvalue;
  },
};

module.exports = productValueMutations;
