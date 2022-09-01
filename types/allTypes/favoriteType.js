const { gql } = require("apollo-server-express");

const favoriteType = gql`
  type Favorite {
    id: ID
    user_id: String
    product_id: String
  }
  type Favorites {
    id: ID
    user_id: User
    product_id: Product
  }
  type Query {
    getFavorite: [Favorites]
  }

  input FavoriteInput {
    user_id: ID
    product_id: ID
  }
  type Mutation {
    createFavorite(favorite: FavoriteInput): Favorite
    deleteFavorite(id: ID): String
  }
`;
module.exports = favoriteType;
