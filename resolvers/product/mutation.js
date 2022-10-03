const Product = require("../../models/ProductModel");
const ba64 = require("ba64");
var crypto = require("crypto");

const productMutations = {
  createProduct: async (parent, args, context, info) => {
    const { name, price, description, image, quantity, cat_id } = args.product;
    //for image-------
    var randomStr = `uploads/image` + crypto.randomBytes(8).toString("hex");
    data_url = image;
    const body2 = { profilepic: data_url };
    let mimeType2 = body2.profilepic.match(/[^:/]\w+(?=;|,)/)[0];
    let ext = randomStr + "." + mimeType2;
    ba64.writeImage(`./` + randomStr, data_url, function (err) {
      if (err) throw err;
    });

    const product = new Product({
      name,
      price,
      description,
      image: ext,
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

    var randomStr = `uploads/image` + crypto.randomBytes(8).toString("hex");
    data_url = image;
    const body2 = { profilepic: data_url };
    let mimeType2 = body2.profilepic.match(/[^:/]\w+(?=;|,)/)[0];
    let ext = randomStr + "." + mimeType2;
    ba64.writeImage(`./` + randomStr, data_url, function (err) {
      if (err) throw err;
    });

    const product = await Product.findByIdAndUpdate(
      id,
      {
        name,
        price,
        description,
        image: ext,
        quantity,
        cat_id,
      },
      {
        new: true,
      }
    );
    return product;
  },

  // productReview: async (parent, args, context, info) => {
  //   const { id } = args;
  //   const { user_id, comment } = args.product;

  //   const productReview = await Product.findByIdAndUpdate(
  //     id,
  //     {
  //       $push: { review: { user_id: user_id, comment: comment } },
  //     },
  //     {
  //       new: true,
  //     }
  //   );
  //   console.log("@@@@@@@@@@@", productReview);
  //   return productReview;
  // },
};

module.exports = productMutations;
