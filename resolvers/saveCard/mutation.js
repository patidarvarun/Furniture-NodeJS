const PaymentCards = require("../../models/PaymentCard");

const paymentCardMutations = {
  createPaymentCard: async (parent, args, context, info) => {
    const {
      card_holder_name,
      card_number,
      expiry_date,
      cvv,
      card_type,
      user_id,
    } = args.card;

    const cardValue = new PaymentCards({
      card_holder_name,
      card_number,
      expiry_date,
      cvv,
      card_type,
      user_id,
    });
    await cardValue.save();
    return cardValue;
  },

  deleteCard: async (parent, args, context, info) => {
    const { id } = args;
    await PaymentCards.findByIdAndDelete(id);
    return "Payment Card delete successfully...";
  },
};

module.exports = paymentCardMutations;
