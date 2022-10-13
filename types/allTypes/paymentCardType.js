const { gql } = require("apollo-server-express");

const cardTypes = gql`
  type Card {
    id: ID
    card_holder_name: String
    card_number: String
    expiry_date: String
    cvv: String
    card_type: String
    user_id: String
  }
  type CardPayment {
    id: ID
    card_holder_name: String
    card_number: String
    expiry_date: String
    cvv: String
    card_type: String
    user_id: User
  }
  type Query {
    getPaymentCardById(id: ID): [CardPayment]
  }

  input CardInput {
    card_holder_name: String
    card_number: String
    expiry_date: String
    cvv: String
    card_type: String
    user_id: String
  }
  type Mutation {
    createPaymentCard(card: CardInput): Card
    deleteCard(id: ID): String
  }
`;
module.exports = cardTypes;
