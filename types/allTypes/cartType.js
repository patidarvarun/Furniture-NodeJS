const { gql } = require("apollo-server-express");

const cartType = gql`
  type Cart {
    id: ID
    user_id: User
    cart: [Carts]
  }
  type Carts {
    product: Product
    quantity: String
  }
  input CartItem {
    product: ID
    quantity: String
  }

  type Query {
    getCartItem(id: ID): [Cart]
  }

  input CartInput {
    user_id: ID
    cart: [CartItem]
  }

  input updateCartInput {
    quantity: String
  }
  input createCheckoutSessionInput {
    cartId: ID!
  }
  input retrieveCheckoutSessionInput {
    sessionId: ID!
  }
  type CustomerData {
    address: AddreessDetail
    email: String
    name: String
    phone: String
    tax_exempt: String
  }
  type AddreessDetail {
    city: String
    country: String
    line1: String
    line2: String
    postal_code: String
    state: String
  }

  type SessionData {
    id: ID
    payment_intent: String
    status: String
    payment_status: String
    amount_total: String
    currency: String
    payment_method_types: [String]
    customer_details: CustomerData
  }
  type Mutation {
    addToCart(cart: CartInput): String
    deleteCartItem(cart_id: ID, product_id: ID): String
    updateCartItem(cart_id: ID, product_id: ID, cart: updateCartInput): String
    createCheckoutSession(input: createCheckoutSessionInput): String
    retrieveCheckoutSession(input: retrieveCheckoutSessionInput): SessionData
  }
`;
module.exports = cartType;
