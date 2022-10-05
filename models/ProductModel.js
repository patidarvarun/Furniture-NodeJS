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

    review: {
      reviewArr: {
        type: Schema.Types.ObjectId,
        ref: "Review",
      },
    },

    varient_id: {
      type: Schema.Types.ObjectId,
      ref: "productValues",
      required: false,
    },
    offerId: {
      type: Schema.Types.ObjectId,
      ref: "productOffers",
      required: false,
    },
    // user: [
    //   {
    //     user_id: {
    //       type: Schema.Types.ObjectId,
    //     },
    //     like: {
    //       type: Boolean,
    //     },
    //   },
    // ],
    // rating: [
    //   {
    //     user_id: {
    //       type: Schema.Types.ObjectId,
    //     },
    //     star: {
    //       type: Number,
    //     },
    //   },
    // ],

    //   review: [
    //     {

    //         // user_id: {
    //         //   type: Schema.Types.ObjectId,
    //         //   // ref: "users",
    //         // },
    //         // comment: {
    //         //   type: String,
    //         // },

    // }],
    visitedNumberOfTime: { type: Number },
  },
  { timestamps: true }
);

var Product = mongoose.model("products", ProductSchema);
module.exports = Product;
