const Category = require("../../models/CategoryModel");
const ba64 = require("ba64");
var crypto = require("crypto");

const categoryMutations = {
  createCategory: async (parent, args, context, info) => {
    const { name, icon, parent_id } = args.category;

    var randomStr = `uploads/image` + crypto.randomBytes(8).toString("hex");
    data_url = icon;
    const body2 = { profilepic: data_url };
    let mimeType2 = body2.profilepic.match(/[^:/]\w+(?=;|,)/)[0];
    let ext = randomStr + "." + mimeType2;
    ba64.writeImage(`./` + randomStr, data_url, function (err) {
      if (err) throw err;
    });

    const category = new Category({
      name,
      icon: ext,
      parent_id,
    });
    await category.save();
    return category;
  },

  updateCategory: async (parent, args, context, info) => {
    const { id } = args;
    const { name, icon } = args.category;

    var randomStr = `uploads/image` + crypto.randomBytes(8).toString("hex");
    data_url = icon;
    const body2 = { profilepic: data_url };
    let mimeType2 = body2.profilepic.match(/[^:/]\w+(?=;|,)/)[0];
    let ext = randomStr + "." + mimeType2;
    ba64.writeImage(`./` + randomStr, data_url, function (err) {
      if (err) throw err;
    });

    const categorys = await Category.findByIdAndUpdate(
      id,
      {
        name,
        icon: ext,
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
