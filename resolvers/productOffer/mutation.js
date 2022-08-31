const ProductOffer = require("../../models/ProductOffer");

const productMutations = {
  createProductOffer: async (parent, args, context, info) => {
    const { name, price, description, image, quantity, cat_id } =
      args.productOffer;

    const product = new ProductOffer({
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
};

module.exports = productMutations;
