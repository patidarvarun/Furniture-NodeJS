var mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Wallets = new mongoose.Schema(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
    amount: { type: Number, default: 0 },
    currency: {
      type: String,
      // required: [true, "currency is required"],
      enum: ["INR", "USD", "EUR", "GBP"],
    },

    status: {
      type: String,
      default: "pending",
      enum: ["successful", "pending", "failed"],
    },
  },
  { timestamps: true }
);

var Wallet = mongoose.model("wallet", Wallets);
module.exports = Wallet;
