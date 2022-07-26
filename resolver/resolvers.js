const Product = require("../models/Product.model");

const resolvers = {
  Query: {
    getAllProduct: async () => {
      return await Product.find();
    },
    getProductById: async (parent, { id }, context, info) => {
      return await Product.findById(id);
    },
  },

  //mutation----------------------------------------------------------------------------

  Mutation: {
    createProduct: async (parent, args, context, info) => {
      const { name, price, description, image, quantity, cat_id } =
        args.product;
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
      const { name, price, description, image, quantity, cat_id } =
        args.product;
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
  },
};
module.exports = resolvers;
