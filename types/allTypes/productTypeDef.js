const { gql } = require("apollo-server-express");

const productTypeDefs = gql`
  type Product {
    id: ID
    name: String
    price: String
    description: String
    image: String
    quantity: String
    review: ProReview
    varientOption: VarientOpt
    cat_id: Category
    # offerId: ProductOffer
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
  # input ReviewInput {
  #   comment: String
  #   user_id: ID
  # }

  type Mutation {
    createProduct(product: ProductInput): Product
    deleteProduct(id: ID): String
    updateProduct(id: ID, product: ProductInput): Product
    # productsReview(id: ID, review: ReviewInput): Product
  }
`;
module.exports = productTypeDefs;
