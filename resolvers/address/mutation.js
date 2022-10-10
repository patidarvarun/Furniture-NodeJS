const Address = require("../../models/AddressModel");

const addressMutations = {
  createAddress: async (parent, args, context, info) => {
    const {
      address_name,
      address_detail,
      user_id,
      city,
      state,
      country,
      postalCode,
    } = args.address;
    const address = new Address({
      address_name,
      address_detail,
      user_id,
      city,
      state,
      country,
      postalCode,
    });
    await address.save();
    return address;
  },

  updateAddress: async (parent, args, context, info) => {
    const { id } = args;
    const {
      address_name,
      address_detail,
      user_id,
      city,
      state,
      country,
      postalCode,
    } = args.address;

    const address = await Address.findByIdAndUpdate(
      id,
      {
        address_name,
        address_detail,
        user_id,
        city,
        state,
        country,
        postalCode,
      },
      {
        new: true,
      }
    );
    return address;
  },
  deleteAddress: async (parent, args, context, info) => {
    const { id } = args;
    await Address.findByIdAndDelete(id);
    return "Address is deleted";
  },
};

module.exports = addressMutations;
