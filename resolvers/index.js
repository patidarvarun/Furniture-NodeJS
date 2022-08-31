const productQueries = require("./product/queries");
const productMutations = require("./product/mutation");
const categoryQueries = require("./category/queries");
const categoryMutations = require("./category/mutation");
const userMutation = require("./userResolver/mutation");
const userQueries = require("./userResolver/queries");
const varientQueries = require("./varient/queries");
const varientMutations = require("./varient/mutation");
const varientOptionQueries = require("./varientOption/queries");
const varientOptionMutations = require("./varientOption/mutation");
const productValueQueries = require("./productValue/queries");
const productValueMutations = require("./productValue/mutation");

const resolvers = {
  Query: {
    ...productQueries,
    ...categoryQueries,
    ...userQueries,
    ...varientQueries,
    ...varientOptionQueries,
    ...productValueQueries,
  },
  Mutation: {
    ...productMutations,
    ...categoryMutations,
    ...userMutation,
    ...varientMutations,
    ...varientOptionMutations,
    ...productValueMutations,
  },
};
module.exports = resolvers;
