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

  type Mutation {
    addToCart(cart: CartInput): String
    deleteCartItem(cart_id: ID, product_id: ID): String
    updateCartItem(cart_id: ID, product_id: ID, cart: updateCartInput): String
  }
`;
module.exports = cartType;
