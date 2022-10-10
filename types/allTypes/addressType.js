const { gql } = require("apollo-server-express");

const addressType = gql`
  type Address {
    id: ID
    address_name: String
    address_detail: String
    user_id: User
    city: String
    state: String
    country: String
    postalCode: String
  }
  type Addresss {
    id: ID
    address_name: String
    address_detail: String
    user_id: String
    city: String
    state: String
    country: String
    postalCode: String
  }
  type Query {
    getAllAddress: [Address]
    getAddressById(id: ID): [Address]
  }

  input AddressInput {
    address_name: String
    address_detail: String
    user_id: String
    city: String
    state: String
    country: String
    postalCode: String
  }

  type Mutation {
    createAddress(address: AddressInput): Addresss
    updateAddress(id: ID, address: AddressInput): Addresss
    deleteAddress(id: ID): String
  }
`;
module.exports = addressType;
