const { gql } = require("apollo-server-express");

const walletType = gql`
  #   type Cart {
  #     id: ID
  #     user_id: User
  #     cart: [Carts]
  #   }

  #   type Query {
  #     getCartItem(id: ID): [Cart]
  #   }

  input createWalletInput {
    amount: String
    cardNumber: String
    exp_month: String
    exp_year: String
    cvv: String
  }
  #   input retrieveCheckoutSessionInput {
  #     sessionId: ID!
  #   }
  #   type CustomerData {
  #     address: AddreessDetail
  #     email: String
  #     name: String
  #     phone: String
  #     tax_exempt: String
  #   }
  #   type AddreessDetail {
  #     city: String
  #     country: String
  #     line1: String
  #     line2: String
  #     postal_code: String
  #     state: String
  #   }

  #   type SessionData {
  #     id: ID
  #     payment_intent: String
  #     status: String
  #     payment_status: String
  #     amount_total: String
  #     currency: String
  #     payment_method_types: [String]
  #     customer_details: CustomerData
  #   }
  type Mutation {
    addMoneyToWallet(addMoney: createWalletInput): String
    # retrieveCheckoutSession(input: retrieveCheckoutSessionInput): SessionData
  }
`;
module.exports = walletType;
