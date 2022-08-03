const { gql } = require("apollo-server-express");

const userTypeDefs = gql`
  type User {
    id: ID
    name: String
    nick_name: String
    email: String
    DOB: String
    code_phone_number: String
    password: String
    gender: String
    pin: String
    image: String
  }

  type Query {
    getUser: [User]
    getUserById(id: ID): User
  }

  input UserInput {
    user_id: String
    name: String
    nick_name: String
    email: String
    DOB: String
    code_phone_number: String
    password: String
    gender: String
    pin: String
    image: String
  }
  input LoginInput {
    email: String
    password: String
  }
  type AuthPayload {
    token: String!
    user: User!
  }
  type Mutation {
    registerUser(user: UserInput): User
    updateUser(id: ID, user: UserInput): User
    deleteUser(id: ID): String
    login(email: String!, password: String!): AuthPayload!
  }
`;
module.exports = userTypeDefs;
