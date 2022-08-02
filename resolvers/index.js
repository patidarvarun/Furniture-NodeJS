const productQueries = require("./product/queries");
const productMutations = require("./product/mutation");
const categoryQueries = require("./category/queries");
const categoryMutations = require("./category/mutation");

const resolvers = {
  Query: {
    ...productQueries,
    ...categoryQueries,
  },
  Mutation: {
    ...productMutations,
    ...categoryMutations,
  },
};
module.exports = resolvers;
