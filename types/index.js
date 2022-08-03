const { makeExecutableSchema } = require("@graphql-tools/schema");

const resolvers = require("../resolvers");
const product = require("./allTypes/productTypeDef");
const category = require("./allTypes/categoryTypeDef");
const user = require("./allTypes/userTypeDefs");

const schema = makeExecutableSchema({
  typeDefs: [product, category, user],
  resolvers,
});
module.exports = schema;
