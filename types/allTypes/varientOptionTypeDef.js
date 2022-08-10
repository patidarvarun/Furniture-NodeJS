const { gql } = require("apollo-server-express");

const varientOptionTypeDef = gql`
  type VarientOption {
    id: ID
    name: String
    product_id: String
    varient_id: String
  }
  type VarientOpt {
    id: ID
    name: String
    product_id: [Product]
    varient_id: [Varient]
  }

  type Query {
    getAllOption: [VarientOpt]
  }

  input VareintOptionInput {
    name: String
    product_id: ID
    varient_id: ID
  }

  type Mutation {
    createVarientOption(varOption: VareintOptionInput): VarientOption
  }
`;
module.exports = varientOptionTypeDef;
