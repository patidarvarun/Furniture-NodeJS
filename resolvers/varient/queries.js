const Varient = require("../../models/VarientModel");

const varientQueries = {
  getVarient: async () => {
    const result = await Varient.find()
      .populate({ path: "product_id" })
      .then((data) => {
        console.log("@@@@@@@@@@@@@", data);
      });
    return result;
  },
};

module.exports = varientQueries;
