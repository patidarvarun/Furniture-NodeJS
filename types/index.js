const { makeExecutableSchema } = require("@graphql-tools/schema");

const resolvers = require("../resolvers");
const product = require("./allTypes/productTypeDef");
const category = require("./allTypes/categoryTypeDef");
const user = require("./allTypes/userTypeDefs");
const varient = require("./allTypes/varientType");
const varientOption = require("./allTypes/varientOptionTypeDef");
const schema = makeExecutableSchema({
  typeDefs: [product, category, user, varient, varientOption],
  resolvers,
});
module.exports = schema;
