const VarientOption = require("../../models/VarientOptionModel");

const varientOptionMutations = {
  createVarientOption: async (parent, args, context, info) => {
    const { name, product_id, varient_id } = args.varOption;

    const varientOptions = new VarientOption({
      name,
      product_id,
      varient_id,
    });
    await varientOptions.save();
    return varientOptions;
  },
};

module.exports = varientOptionMutations;
