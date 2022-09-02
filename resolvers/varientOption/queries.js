const VarientOptions = require("../../models/VarientOptionModel");

const varientOptionQueries = {
  getAllOption: async () => {
    return await VarientOptions.find()
      .populate({ path: "product_id" })
      .populate({ path: "varient_id" });
  },
};

module.exports = varientOptionQueries;
