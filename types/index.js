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
  ],
  resolvers,
});
module.exports = schema;
