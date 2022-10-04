var mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Reviews = new mongoose.Schema(
  {
    message: { type: String, required: [true, "please enter message"] },
    rating: { type: Number, required: [true, "please enter rating"] },
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: [true, "please enter User_id"],
    },
    product_id: {
      type: Schema.Types.ObjectId,
      ref: "products",
      required: [true, "please enter ProductId_id"],
    },
    isDeleted: { type: Boolean },
  },
  { timestamps: true }
);

var Review = mongoose.model("Review", Reviews);
module.exports = Review;
