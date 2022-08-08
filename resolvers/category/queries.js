const Category = require("../../models/CategoryModel");
const categoryQueries = {
  getAllCategory: async () => {
    return await Category.find();
  },

  getCatByParentId: async (parent, { id }, context, info) => {
    return await Category.findById(id);
  },
};
module.exports = categoryQueries;
