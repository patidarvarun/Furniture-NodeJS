const { gql } = require("apollo-server-express");

const categoryTypeDef = gql`
  scalar Upload

  type Category {
    id: ID
    name: String
    icon: String
    parent_id: String
  }
  # type File {
  #   url: String!
  # }

  type File {
    filename: String!
    mimetype: String!
    encoding: String!
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

    uploadFile(file: Upload!): File!
    # singleUpload(file: Upload!): File!
  }
`;
module.exports = categoryTypeDef;
