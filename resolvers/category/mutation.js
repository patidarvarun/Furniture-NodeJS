const Category = require("../../models/CategoryModel");

const categoryMutations = {
  createCategory: async (parent, args, context, info) => {
    const { name, image } = args.category;
    const category = new Category({
      name,
      image,
    });
    await category.save();
    return category;
  },
};

module.exports = categoryMutations;
