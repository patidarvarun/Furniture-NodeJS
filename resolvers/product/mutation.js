const Product = require("../../models/Product.model");
const multer = require("multer");
const fs = require("fs");
const ba64 = require("ba64");
var crypto = require("crypto");

const productMutations = {
  createProduct: async (parent, args, context, info) => {
    const { name, price, description, image, quantity, cat_id } = args.product;

    var randomStr = `uploads/image` + crypto.randomBytes(8).toString("hex");

    data_url = image;

    ba64.writeImage(`./` + randomStr, data_url, function (err) {
      if (err) throw err;
    });

    const product = new Product({
      name,
      price,
      description,
      image: randomStr,
      quantity,
      cat_id,
    });
    await product.save();
    return product;
  },
  deleteProduct: async (parent, args, context, info) => {
    const { id } = args;
    await Product.findByIdAndDelete(id);
    return "Product is deleted";
  },

  updateProduct: async (parent, args, context, info) => {
    const { id } = args;
    const { name, price, description, image, quantity, cat_id } = args.product;
    const product = await Product.findByIdAndUpdate(
      id,
      {
        name,
        price,
        description,
        image,
        quantity,
        cat_id,
      },
      {
        new: true,
      }
    );
    return product;
  },
};

module.exports = productMutations;
