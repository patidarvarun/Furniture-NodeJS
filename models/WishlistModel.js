var mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Wishlist = new mongoose.Schema(
  {
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

var Wishlists = mongoose.model("favoriteProduct", Wishlist);
module.exports = Wishlists;
