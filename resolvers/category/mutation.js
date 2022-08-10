const Category = require("../../models/CategoryModel");

const categoryMutations = {
  createCategory: async (parent, args, context, info) => {
    const { name, icon, parent_id } = args.category;
    const category = new Category({
      name,
      icon,
      parent_id,
    });
    await category.save();
    return category;
  },

  updateCategory: async (parent, args, context, info) => {
    const { id } = args;
    const { name, icon } = args.category;
    const categorys = await Category.findByIdAndUpdate(
      id,
      {
        name,
        icon,
      },
      {
        new: true,
      }
    );
    return categorys;
  },
  deleteCategory: async (parent, args, context, info) => {
    const { id } = args;
    await Category.findByIdAndDelete(id);
    return "Category is deleted";
  },
};

module.exports = categoryMutations;
