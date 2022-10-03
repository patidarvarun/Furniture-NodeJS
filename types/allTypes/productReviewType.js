const { gql } = require("apollo-server-express");

const productReviewType = gql`
  type ProductReview {
    id: ID
    message: String
    rating: String
    user_id: User
    product_id: Product
  }
  type Query {
    getReviewProduct: [ProductReview]!
  }

  input ProductReviewInput {
    message: String
    rating: String
    user_id: String
    product_id: String
  }

  type Mutation {
    createProductReview(productReview: ProductReviewInput): ProductReview
  }
`;
module.exports = productReviewType;
