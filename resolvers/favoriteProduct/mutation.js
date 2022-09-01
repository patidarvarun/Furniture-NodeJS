const Wishlists = require("../../models/WishlistModel");

const favoriteMutations = {
  createFavorite: async (parent, args, context, info) => {
    const { product_id, user_id } = args.favorite;

    const favoriteValue = new Wishlists({
      product_id,
      user_id,
    });
    await favoriteValue.save();
    return favoriteValue;
  },
  deleteFavorite: async (parent, args, context, info) => {
    const { id } = args;
    await Wishlists.findByIdAndDelete(id);
    return "Product is removed from favorite";
  },
};

module.exports = favoriteMutations;
