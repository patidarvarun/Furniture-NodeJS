var mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AddToCart = new mongoose.Schema(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
    cart: [
      {
        product_id: {
          type: Schema.Types.ObjectId,
          ref: "products",
        },
        quantity: { type: Number },
      },
    ],

    isDeleted: { type: Boolean },
  },
  { timestamps: true }
);

var AddToCarts = mongoose.model("carts", AddToCart);
module.exports = AddToCarts;
