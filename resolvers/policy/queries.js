const Policy = require("../../models/PolicyModel");

const policyQueries = {
  getAllPolicy: async () => {
    let result = await Policy.find();
    return result;
  },
  getPolicyById: async (parent, { id }, context, info) => {
    return await Policy.findById(id);
  },
};

module.exports = policyQueries;
