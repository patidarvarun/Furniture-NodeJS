const productQueries = require("./product/queries");
const productMutations = require("./product/mutation");
const categoryQueries = require("./category/queries");
const categoryMutations = require("./category/mutation");
const userMutation = require("./userResolver/mutation");
const userQueries = require("./userResolver/queries");

const resolvers = {
  Query: {
    ...productQueries,
    ...categoryQueries,
    ...userQueries,
  },
  Mutation: {
    ...productMutations,
    ...categoryMutations,
    ...userMutation,
  },
};
module.exports = resolvers;
