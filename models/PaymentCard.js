var mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PaymentCard = new mongoose.Schema(
  {
    card_holder_name: {
      type: String,
      required: [true, "please enter your name"],
    },
    card_number: {
      type: Number,
      required: [true, "please enter your card number"],
    },
    expiry_date: {
      type: Number,
      required: [true, "please enter your card expiry_date"],
    },
    cvv: {
      type: Number,
      required: [true, "please enter your card cvv number"],
    },
    card_type: {
      type: String,
      required: [true, "please enter your card type"],
    },
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: [true, "please enter User_id"],
    },

    isDeleted: { type: Boolean },
  },
  { timestamps: true }
);

var PaymentCards = mongoose.model("paymentCard", PaymentCard);
module.exports = PaymentCards;
