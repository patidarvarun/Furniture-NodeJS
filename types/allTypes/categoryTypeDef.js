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
    getCatByParentId(id: ID): Category
  }

  input CategoryInput {
    name: String
    icon: String
    parent_id: String
  }

  type Mutation {
    createCategory(category: CategoryInput): Category
    uploadFile(file: Upload!): File!
    # singleUpload(file: Upload!): File!
  }
`;
module.exports = categoryTypeDef;
