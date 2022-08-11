const User = require("../../models/UserModel");

const userQueries = {
  getUser: async () => {
    return await User.find();
  },
  getUserById: async (parent, { id }, context, info) => {
    return await User.findById(id);
  },
};

module.exports = userQueries;
