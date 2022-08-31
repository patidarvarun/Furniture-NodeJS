var mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductOffer = new mongoose.Schema(
  {
    message: { type: String, required: [true, "please enter message"] },
    description: { type: String, required: [true, "please enter description"] },
    type: { type: String, required: [true, "please enter type"] },
    discount_value: {
      type: Number,
      required: [true, "Pleade provide discount_value"],
    },
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: [true, "please enter User_id"],
    },
    product_id: {
      type: Schema.Types.ObjectId,
      ref: "products",
      // required: [true, "please enter ProductId_id"],
    },
    cat_id: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      // required: [true, "please enter Cat_id"],
    },
    isDeleted: { type: Boolean },
  },
  { timestamps: true }
);

var ProductOffers = mongoose.model("productOffers", ProductOffer);
module.exports = ProductOffers;
