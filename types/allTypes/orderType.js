const { gql } = require("apollo-server-express");

const orderType = gql`
  type Order {
    id: ID
    user_id: String
    status: String
    paymentMethod: String
  }

  #   type Query {
  #     getAllCategory: [Category]
  #     getCatByParentId(id: ID): [Category]
  #   }
  input AmountType {
    total: String
    shipping_charge: String
    currency: String
    subtotal: String
  }
  input ShippingType {
    first_name: String
    last_name: String
    address_1: String
    address_2: String
    city: String
    state: String
    postcode: String
    country: String
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
  }

  type Mutation {
    createOrder(order: OrderInput): String
    # updateCategory(id: ID, category: CategoryInput1): Category
    # deleteCategory(id: ID): String
  }
`;
module.exports = orderType;
