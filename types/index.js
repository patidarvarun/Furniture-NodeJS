const { makeExecutableSchema } = require("@graphql-tools/schema");

const resolvers = require("../resolvers");
const product = require("./allTypes/productTypeDef");
const category = require("./allTypes/categoryTypeDef");
const user = require("./allTypes/userTypeDefs");
const varient = require("./allTypes/varientType");
const varientOption = require("./allTypes/varientOptionTypeDef");
const productValue = require("./allTypes/productValueType");
const productOffer = require("./allTypes/productOfferType");
const favorite = require("./allTypes/favoriteType");
const review = require("./allTypes/productReviewType");
const addCart = require("./allTypes/cartType");
const addressType = require("./allTypes/addressType");
const orderType = require("./allTypes/orderType");
const cardTypes = require("./allTypes/paymentCardType");
const policyType = require("./allTypes/policyType");
const walletType = require("./allTypes/walletType");

const schema = makeExecutableSchema({
  typeDefs: [
    product,
    category,
    user,
    varient,
    varientOption,
    productValue,
    productOffer,
    favorite,
    review,
    addCart,
    addressType,
    orderType,
    cardTypes,
    policyType,
    walletType,
  ],
  resolvers,
});
module.exports = schema;
