var mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AddToCart = new mongoose.Schema(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    cart: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: "products",
          required: true,
        },
        quantity: { type: Number, required: true },
      },
    ],
  },
  { timestamps: true }
);

var AddToCarts = mongoose.model("carts", AddToCart);
module.exports = AddToCarts;
