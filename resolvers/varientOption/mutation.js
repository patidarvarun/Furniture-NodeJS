const VarientOptionss = require("../../models/VarientOptionModel");
const Product = require("../../models/ProductModel");

const varientOptionMutations = {
  createVarientOption: async (parent, args, context, info) => {
    const { name, product_id, varient_id } = args.varOption;

    const varientOptions = new VarientOptionss({
      name,
      product_id,
      varient_id,
    });
    await varientOptions.save().then(async (res) => {
      if (res) {
        await Product.findByIdAndUpdate(
          product_id,
          {
            $push: { varientOption: res._id },
          },
          {
            new: true,
          }
        );
      } else {
        console.log("okk");
      }
    });
    return varientOptions;
  },
};

module.exports = varientOptionMutations;
