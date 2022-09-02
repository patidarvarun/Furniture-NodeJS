var mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VarientOption = new mongoose.Schema(
  {
    name: { type: String },
    product_id: { type: Schema.Types.ObjectId, ref: "products" },
    varient_id: { type: Schema.Types.ObjectId, ref: "varients" },
  },
  { timestamps: true }
);

var VarientOptionss = mongoose.model("varientOptions", VarientOption);
module.exports = VarientOptionss;
