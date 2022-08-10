const Varient = require("../../models/VarientModel");

const varientMutations = {
  createVarient: async (parent, args, context, info) => {
    const { name, product_id } = args.varient;

    const varient = new Varient({
      name,
      product_id,
    });
    await varient.save();
    return varient;
  },
};

module.exports = varientMutations;
