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
const productOfferMutations = require("./productOffer/mutation");
const productOfferQueries = require("./productOffer/queries");
const favoriteMutations = require("./favoriteProduct/mutation");
const favoriteQueries = require("./favoriteProduct/queries");
const productReviewQueries = require("./productReview/queries");
const productReviewMutations = require("./productReview/mutation");
const cartMutations = require("./cart/mutation");
const cartQueries = require("./cart/queries");
const addressMutations = require("./address/mutation");
const addressQueries = require("./address/queries");
const orderMutations = require("./order/mutation");
const orderQueries = require("./order/queries");

const resolvers = {
  Query: {
    ...productQueries,
    ...categoryQueries,
    ...userQueries,
    ...varientQueries,
    ...varientOptionQueries,
    ...productValueQueries,
    ...productOfferQueries,
    ...favoriteQueries,
    ...productReviewQueries,
    ...cartQueries,
    ...addressQueries,
    ...orderQueries,
  },
  Mutation: {
    ...productMutations,
    ...categoryMutations,
    ...userMutation,
    ...varientMutations,
    ...varientOptionMutations,
    ...productValueMutations,
    ...productOfferMutations,
    ...favoriteMutations,
    ...productReviewMutations,
    ...cartMutations,
    ...addressMutations,
    ...orderMutations,
  },
};
module.exports = resolvers;
