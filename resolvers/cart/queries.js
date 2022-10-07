const AddToCarts = require("../../models/AddToCartModel");
const Product = require("../../models/ProductModel");
const User = require("../../models/UserModel");

const cartQueries = {
  getCartItem: async (parent, { id }, context, info) => {
    let getCartdata = await AddToCarts.find({
      user_id: id,
    });
    getCartdata = await User.populate(getCartdata, "user_id");
    getCartdata = await Product.populate(getCartdata, "cart.product");

    return getCartdata;
  },
};

module.exports = cartQueries;
