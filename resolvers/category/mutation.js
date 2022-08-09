const Category = require("../../models/CategoryModel");
const path = require("path");
const fs = require("fs");
// const GraphQLUpload = require("graphql-upload");
const { finished } = require("stream/promises");

const categoryMutations = {
  // Upload: GraphQLUpload,

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
  uploadFile: async (parent, { file }) => {
    const { createReadStream, filename, mimetype, encoding } = await file;
    console.log("$$$$$$$$$$$file", file);
    const stream = createReadStream();
    const out = require("fs").createWriteStream("local-file-output.txt");
    stream.pipe(out);
    await finished(out);

    return { filename, mimetype, encoding };
  },
};

// uploadFile: async (parent, { file }) => {
//   const { createReadStream, filename } = await file;
//   const stream = createReadStream();
//   console.log("8888888888888877", stream);
//   const pathName = path.join(__dirname, `/public/images/${filename}`);
//   await stream.pipe(fs.createWriteStream(pathName));
//   console.log("!!!!!!!", filename);
//   return { url: `http://localhost:5000/images/${filename}` };
// },

module.exports = categoryMutations;
