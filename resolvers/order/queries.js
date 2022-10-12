const Order = require("../../models/OrderModel");
const Product = require("../../models/ProductModel");
const User = require("../../models/UserModel");

const orderQueries = {
  getAllOrder: async (parent, { id }, context, info) => {
    let result = await Order.find()
      .populate({ path: "products.product" })
      .populate({
        path: "user_id",
      });
    return result;
  },
  getOrderByUserID: async (parent, { id }, context, info) => {
    let getOrderdata = await Order.find({
      user_id: id,
    });
    getOrderdata = await User.populate(getOrderdata, "user_id");
    getOrderdata = await Product.populate(getOrderdata, "products.product");
    return getOrderdata;
  },
};

module.exports = orderQueries;
