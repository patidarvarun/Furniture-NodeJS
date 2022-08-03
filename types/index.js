const { makeExecutableSchema } = require("@graphql-tools/schema");

const resolvers = require("../resolvers");
const product = require("./allTypes/productTypeDef");
const category = require("./allTypes/categoryTypeDef");

const schema = makeExecutableSchema({
  typeDefs: [product, category],
  resolvers,
});
module.exports = schema;
