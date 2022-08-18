const { gql } = require("apollo-server-express");

const varientTypeDefs = gql`
  type Varient {
    id: ID
    name: String
    product_id: String
  }
  type VarientData {
    id: ID
    name: String
    product_id: [Product]
  }
  type Query {
    getVarient: [VarientData]
  }
  input VarientInput {
    name: String
    product_id: ID
  }

  type Mutation {
    createVarient(varient: VarientInput): Varient
  }
`;
module.exports = varientTypeDefs;
