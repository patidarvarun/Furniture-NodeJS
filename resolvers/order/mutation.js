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
    } = args.order;
    const order = new Order({
      products,
      user_id,
      status,
      paymentMethod,
      amount,
      shipping_address,
    });
    await order.save();
    return "Order Created Successfully";
  },

  //   updateAddress: async (parent, args, context, info) => {
  //     const { id } = args;
  //     const {
  //       address_name,
  //       address_detail,
  //       user_id,
  //       city,
  //       state,
  //       country,
  //       postalCode,
  //     } = args.address;

  //     const address = await Address.findByIdAndUpdate(
  //       id,
  //       {
  //         address_name,
  //         address_detail,
  //         user_id,
  //         city,
  //         state,
  //         country,
  //         postalCode,
  //       },
  //       {
  //         new: true,
  //       }
  //     );
  //     return address;
  //   },
  //   deleteAddress: async (parent, args, context, info) => {
  //     const { id } = args;
  //     await Address.findByIdAndDelete(id);
  //     return "Address is deleted";
  //   },
};

module.exports = orderMutations;
