var mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Categories = new mongoose.Schema(
  {
    name: { type: String },
    icon: { type: String },
    parent_id: { type: Schema.Types.ObjectId, ref: "Category" },
  },
  { timestamps: true }
);

var Category = mongoose.model("Category", Categories);
module.exports = Category;
