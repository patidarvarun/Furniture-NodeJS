const { gql } = require("apollo-server-express");

const productOfferType = gql`
  type ProductOffer {
    id: ID
    message: String
    description: String
    user_id: String
    discount_value: String
    type: String
    product_id: String
    cat_id: String
  }

  type Query {
    getOffer: [ProductOffer]
  }

  input ProductOfferInput {
    message: String
    description: String
    user_id: String
    discount_value: String
    type: String
    product_id: String
    cat_id: String
  }

  type Mutation {
    createProductOffer(productOffer: ProductOfferInput): ProductOffer
    # deleteProduct(id: ID): String
    # updateProduct(id: ID, product: ProductInput): Product
  }
`;
module.exports = productOfferType;
