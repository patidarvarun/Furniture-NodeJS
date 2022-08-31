const productValuee = require("../../models/ProductValueModel");

const productValueQueries = {
  getproductValue: async () => {
    const result = await productValuee
      .find()
      .populate({ path: "product_id" })
      .populate({ path: "varient_id" })
      .populate({ path: "varientOption_id" });
    // .then((data) => {
    //   console.log("!!!!!!!!!!!!!!", data);
    // });
    return result;
  },
};

module.exports = productValueQueries;
