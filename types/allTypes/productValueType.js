const { gql } = require("apollo-server-express");

const productValueType = gql`
  type ProductValues {
    id: ID
    product_id: String
    varient_id: String
    varientOption_id: String
    price: String
  }
  type ProductValuee {
    id: ID
    product_id: Product
    varient_id: Varient
    varientOption_id: VarientOption
    price: String
  }

  type Query {
    getproductValue: [ProductValuee]
  }

  input ProductValueInput {
    product_id: ID
    varient_id: ID
    varientOption_id: ID
    price: String
  }

  type Mutation {
    createProductValue(prodValue: ProductValueInput): ProductValues
  }
`;
module.exports = productValueType;
