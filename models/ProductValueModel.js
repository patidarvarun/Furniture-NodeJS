var mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductValues = new mongoose.Schema(
  {
    product_id: { type: Schema.Types.ObjectId, ref: "products" },
    varient_id: { type: Schema.Types.ObjectId, ref: "varients" },
    varientOption_id: { type: Schema.Types.ObjectId, ref: "varientOptions" },
    price: { type: Number, required: [true, "Pleade provide price"] },
  },
  { timestamps: true }
);

var ProductValue = mongoose.model("productValues", ProductValues);
module.exports = ProductValue;
