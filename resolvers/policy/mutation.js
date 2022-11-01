const Policy = require("../../models/PolicyModel");

const policyMutations = {
  createPolicy: async (parent, args, context, info) => {
    const { heading, description } = args.policy;

    const privacyPolicy = new Policy({
      heading,
      description,
    });
    await privacyPolicy.save();
    return privacyPolicy;
  },

  updatePolicy: async (parent, args, context, info) => {
    const { id } = args;
    const { heading, description } = args.policy;

    const policy = await Policy.findByIdAndUpdate(
      id,
      {
        heading,
        description,
      },
      {
        new: true,
      }
    );
    return policy;
  },
  deletePolicy: async (parent, args, context, info) => {
    const { id } = args;
    await Policy.findByIdAndDelete(id);
    return "Policy is deleted";
  },
};

module.exports = policyMutations;
