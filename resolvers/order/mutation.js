const Order = require("../../models/OrderModel");
const AddToCarts = require("../../models/AddToCartModel");

const orderMutations = {
  createOrder: async (parent, args, context, info) => {
    const {
      products,
      user_id,
      status,
      paymentMethod,
      amount,
      shipping_address,
      transaction_id,
    } = args.order;
    const order = new Order({
      products,
      user_id,
      status,
      paymentMethod,
      amount,
      shipping_address,
      transaction_id,
    });
    await order.save();
    return "Order Created Successfully";
  },

  updateOrder: async (parent, args, context, info) => {
    const { id } = args;
    const {
      products,
      user_id,
      status,
      paymentMethod,
      amount,
      shipping_address,
      transaction_id,
    } = args.order;

    const orderUpdate = await Order.findByIdAndUpdate(
      id,
      {
        products,
        user_id,
        status,
        paymentMethod,
        amount,
        shipping_address,
        transaction_id,
      },
      {
        new: true,
      }
    );
    if (orderUpdate !== null) {
      let findCart = await AddToCarts.find({ user_id: orderUpdate.user_id });
      let cart_idd = findCart[0]?._id;
      let removeCartItem = await AddToCarts.deleteOne(cart_idd);
    } else {
      console.log("%%%%%%");
    }
    return "Order Update Successfully";
  },
  deleteOrder: async (parent, args, context, info) => {
    const { id } = args;
    await Order.findByIdAndDelete(id);
    return "Order is deleted";
  },
};

module.exports = orderMutations;
