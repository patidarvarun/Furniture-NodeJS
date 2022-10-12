const { gql } = require("apollo-server-express");

const orderType = gql`
  type Order {
    id: ID
    user_id: User
    products: [ProdOrder]
    status: String
    amount: OrderAmount
    shipping_address: OrderShipping
    paymentMethod: String
    transaction_id: String
  }
  type ProdOrder {
    product: Product
    quantity: String
  }
  type OrderAmount {
    total: String
    shipping_charge: String
    currency: String
    subtotal: String
  }
  type OrderShipping {
    recipient_name: String
    line1: String
    line2: String
    city: String
    state: String
    postal_code: String
    country_code: String
  }
  type Query {
    getAllOrder: [Order]
    getOrderByUserID(id: ID): [Order]
  }
  input AmountType {
    total: String
    shipping_charge: String
    currency: String
    subtotal: String
  }
  input ShippingType {
    recipient_name: String
    line1: String
    line2: String
    city: String
    state: String
    postal_code: String
    country_code: String
  }
  input CartItem {
    product: ID
    quantity: String
  }

  input OrderInput {
    products: [CartItem]
    user_id: ID
    status: String
    paymentMethod: String
    amount: AmountType
    shipping_address: ShippingType
    transaction_id: String
  }

  type Mutation {
    createOrder(order: OrderInput): String
    updateOrder(id: ID, order: OrderInput): String
    deleteOrder(id: ID): String
  }
`;
module.exports = orderType;
