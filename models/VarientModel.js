var mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Varients = new mongoose.Schema(
  {
    name: { type: String },
    product_id: { type: Schema.Types.ObjectId, ref: "products" },
  },
  { timestamps: true }
);

var Varient = mongoose.model("varients", Varients);
module.exports = Varient;
