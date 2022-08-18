var mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Review = new mongoose.Schema(
  {
    message: { type: String, required: [true, "please enter message"] },
    rating: { type: Number, required: [true, "Pleade provide rating"] },
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
  },
  { timestamps: true }
);

var Reviews = mongoose.model("reviews", Review);
module.exports = Reviews;
