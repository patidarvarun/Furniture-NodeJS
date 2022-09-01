const { gql } = require("apollo-server-express");

const productOfferType = gql`
  type ProductOffer {
    id: ID
    message: String
    description: String
    user_id: User
    discount_value: String
    type: String
    product_id: Product
    cat_id: Category
  }
  type ProductOfferr {
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
    getProductOfferById(id: ID): [ProductOfferr]
  }

  input ProductOfferInput {
    message: String
    description: String
    user_id: ID
    discount_value: String
    type: String
    product_id: ID
    cat_id: ID
  }

  type Mutation {
    createProductOffer(productOffer: ProductOfferInput): ProductOfferr
    deleteProductoffer(id: ID): String
    # updateProduct(id: ID, product: ProductInput): Product
  }
`;
module.exports = productOfferType;
