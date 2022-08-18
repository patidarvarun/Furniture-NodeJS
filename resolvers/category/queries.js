const Category = require("../../models/CategoryModel");
const categoryQueries = {
  getAllCategory: async () => {
    return await Category.find();
  },

  getCatByParentId: async (parent, { id }, context, info) => {
    const newData = await Category.find({
      $or: [{ parent_id: id }],
    });
    return newData;
  },
};
module.exports = categoryQueries;
