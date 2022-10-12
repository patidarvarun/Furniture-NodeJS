var mongoose = require("mongoose");
const Schema = mongoose.Schema;

const order = mongoose.Schema(
  {
    products: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: "products",
          required: true,
        },
        quantity: { type: Number, required: true },
      },
    ],
    user_id: { type: Schema.Types.ObjectId, ref: "users", required: true },
    status: { type: String, default: "Pending" },
    paymentMethod: { type: String, default: "" },
    amount: {
      total: { type: Number, default: "" },
      shipping_charge: { type: Number },
      currency: { type: String, default: "" },
      subtotal: { type: String, default: "" },
    },
    shipping_address: {
      recipient_name: { type: String, default: "" },
      line1: { type: String, default: "" },
      city: { type: String, default: "" },
      state: { type: String, default: "" },
      postal_code: { type: String, default: "" },
      country_code: { type: String, default: "" },
    },
    transaction_id: { type: String, default: "" },
  },
  { timestamps: true }
);

var Order = mongoose.model("Orders", order);
module.exports = Order;
