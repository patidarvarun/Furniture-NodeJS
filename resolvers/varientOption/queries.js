const VarientOptionn = require("../../models/VarientOptionModel");

const varientOptionQueries = {
  getAllOption: async () => {
    const result = await VarientOptionn.find()
      .populate({ path: "product_id" })
      .populate({ path: "varient_id" })
      .then((data) => {
        console.log("@@@@@@@@@@@@@", data);
      });
    return result;
  },
};

module.exports = varientOptionQueries;
