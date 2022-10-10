const Address = require("../../models/AddressModel");

const addressQueries = {
  getAllAddress: async () => {
    return await Address.find();
  },

  getAddressById: async (parent, { id }, context, info) => {
    const add = await Address.find({
      $or: [{ user_id: id }],
    });
    return add;
  },
};
module.exports = addressQueries;
