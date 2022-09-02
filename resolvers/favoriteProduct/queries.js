const Wishlists = require("../../models/WishlistModel");

const favoriteQueries = {
  getFavorite: async () => {
    return await Wishlists.find()
      .populate({ path: "product_id" })
      .populate({ path: "user_id" });
  },
};

module.exports = favoriteQueries;
