const { gql } = require("apollo-server-express");

const productTypeDefs = gql`
  scalar Upload

  type Product {
    id: ID
    name: String
    price: String
    description: String
    image: String
    quantity: String
    cat_id: String
  }

  type Query {
    getAllProduct: [Product]
    getProductById(id: ID): Product
  }
  type File {
    filename: String!
    mimetype: String!
    encoding: String!
  }
  input ProductInput {
    name: String
    price: String
    description: String
    image: String
    quantity: String
    cat_id: String
  }

  type Mutation {
    createProduct(product: ProductInput): Product
    deleteProduct(id: ID): String
    updateProduct(id: ID, product: ProductInput): Product
    singleUpload(file: Upload!): File!
  }
`;
module.exports = productTypeDefs;
