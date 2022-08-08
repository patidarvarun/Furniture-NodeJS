const Product = require("../../models/Product.model");
const multer = require("multer");
const fs = require("fs");

///home/varun/Desktop/Furniture-NodeJS/uploads

const productMutations = {
  createProduct: async (parent, args, context, info) => {
    const { name, price, description, image, quantity, cat_id } = args.product;

    // const uploadd = multer({ dest: `uploads/${image}` });
    // exports.upload = multer({ storage: uploadd });

    // const storage = multer.diskStorage({
    //   destination: function (req, file, cb) {
    //     cb(null, `./uploads/`);
    //   },
    //   filename: function (req, file, cb) {
    //     cb(null, Date.now() + file.image);
    //   },
    // });
    // exports.upload = multer({ storage: storage });

    // console.log("@@@@@@@@", upload);
    const product = new Product({
      name,
      price,
      description,
      image,
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
