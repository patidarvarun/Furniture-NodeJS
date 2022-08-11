const { gql } = require("apollo-server-express");

const categoryTypeDef = gql`
  type Category {
    id: ID
    name: String
    image: String
  }

  type Query {
    getAllCategory: [Category]
  }

  input CategoryInput {
    name: String
    image: String
  }

  type Mutation {
    createCategory(category: CategoryInput): Category
  }
`;
module.exports = categoryTypeDef;
