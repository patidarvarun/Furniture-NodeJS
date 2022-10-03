const { gql } = require("apollo-server-express");

const productTypeDefs = gql`
  type Product {
    id: ID
    name: String
    price: String
    description: String
    image: String
    quantity: String
    # review: [String!]!
    cat_id: Category
  }
  type Query {
    getAllProduct: [Product]!
    getProductById(id: ID): Product
  }
  input ProductInput {
    name: String
    price: String
    description: String
    image: String
    quantity: String
    cat_id: String
  }
  # input ProductReviewInput {
  #   comment: String
  #   user_id: ID
  # }

  type Mutation {
    createProduct(product: ProductInput): Product
    deleteProduct(id: ID): String
    updateProduct(id: ID, product: ProductInput): Product
    # productReview(id: ID, product: ProductReviewInput): Product
  }
`;
module.exports = productTypeDefs;
