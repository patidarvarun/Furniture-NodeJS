const PaymentCards = require("../../models/PaymentCard");
var mongoose = require("mongoose");

const paymentCardQueries = {
  //   getUser: async () => {
  //     return await User.find();
  //   },
  getPaymentCardById: async (parent, { id }, context, info) => {
    var id = mongoose.Types.ObjectId(id);
    let result = await PaymentCards.find({ user_id: id }).populate({
      path: "user_id",
    });
    console.log("result", result);
    return result;
  },
};

module.exports = paymentCardQueries;
