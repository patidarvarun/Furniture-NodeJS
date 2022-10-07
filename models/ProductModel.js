var mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, "please enter name"] },
    image: { type: String },
    description: { type: String, required: [true, "please enter description"] },
    quantity: { type: Number, required: [true, "Pleade provide quantity"] },
    price: { type: Number, required: [true, "Pleade provide price"] },
    status: { type: String },
    cat_id: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: [true, "please enter Cat_id"],
    },
    review: [
      {
        type: Schema.Types.ObjectId,
        ref: "Review",
      },
    ],

    varientOption: {
      type: Schema.Types.ObjectId,
      ref: "varientOptions",
    },
    // offerId: {
    //   type: Schema.Types.ObjectId,
    //   ref: "productOffers",
    // },

    visitedNumberOfTime: { type: Number },
  },
  { timestamps: true }
);

var Product = mongoose.model("products", ProductSchema);
module.exports = Product;
