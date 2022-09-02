const Varient = require("../../models/VarientModel");

const varientQueries = {
  getVarient: async () => {
    const result = await Varient.find().populate({ path: "product_id" });
    return result;
  },
};

module.exports = varientQueries;
