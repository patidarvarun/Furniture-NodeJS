const { gql } = require("apollo-server-express");

const categoryTypeDef = gql`
  type Category {
    id: ID
    name: String
    icon: String
    parent_id: String
  }

  type Query {
    getAllCategory: [Category]
    getCatByParentId(id: ID): [Category]
  }

  input CategoryInput {
    name: String
    icon: String
    parent_id: String
  }
  input CategoryInput1 {
    name: String
    icon: String
  }

  type Mutation {
    createCategory(category: CategoryInput): Category
    updateCategory(id: ID, category: CategoryInput1): Category
    deleteCategory(id: ID): String
  }
`;
module.exports = categoryTypeDef;
