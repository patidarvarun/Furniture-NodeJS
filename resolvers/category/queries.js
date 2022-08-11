const Category = require("../../models/CategoryModel");
const categoryQueries = {
  getAllCategory: async () => {
    return await Category.find();
  },
};
module.exports = categoryQueries;
