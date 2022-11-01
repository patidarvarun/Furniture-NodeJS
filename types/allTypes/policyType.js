const { gql } = require("apollo-server-express");

const policyType = gql`
  type Policy {
    id: ID
    heading: String
    description: String
  }

  type Query {
    getAllPolicy: [Policy]
    getPolicyById(id: ID): Policy
  }

  input PolicyInput {
    heading: String
    description: String
  }

  type Mutation {
    createPolicy(policy: PolicyInput): Policy
    updatePolicy(id: ID, policy: PolicyInput): Policy
    deletePolicy(id: ID): String
  }
`;
module.exports = policyType;
