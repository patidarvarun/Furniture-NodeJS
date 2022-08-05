const Category = require("../models/CategoryModel");

const categoryResolver = {
  Query: {
    getCategory: async () => {
      return await Category.find();
    },
  },
  //mutation----------------------------------------------------------------------------
};
module.exports = categoryResolver;
