const { gql } = require("apollo-server-express");

const categoryType = gql`
  type Category {
    id: ID
    name: String
    image: String
  }
  type Query {
    getCategory: [Category]
  }

  input CategoryInput {
    name: String
    image: String
  }
  type Mutation {
    createCategory(category: CategoryInput): Category
    deleteCategory(id: ID): String
    updateCategory(id: ID, Category: CategoryInput): Category
  }
`;
module.exports = categoryType;
