const Order = require("../../models/OrderModel");

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
    return "Order Update Successfully";
  },
  deleteOrder: async (parent, args, context, info) => {
    const { id } = args;
    await Order.findByIdAndDelete(id);
    return "Order is deleted";
  },
};

module.exports = orderMutations;
