// const { join } = require("path");
// const { readdirSync, readFileSync } = require("fs");
const { makeExecutableSchema } = require("@graphql-tools/schema");

// const typeDefs = require("./allTypes/productTypeDef");
const resolvers = require("../resolvers");
const typeDefs = require("./combine");
console.log("typeDefs@@@@@@@@@@", typeDefs);
// const gqlFiles = readdirSync(join(__dirname, "./allTypes"));
// let typeDefs = "";

// gqlFiles.forEach((file) => {
//   typeDefs += readFileSync(join(__dirname, "./allTypes", file), {
//     encoding: "utf8",
//   });
// });

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
module.exports = schema;
