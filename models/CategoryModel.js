var mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Categories = new mongoose.Schema({
  name: { type: String, required: [true, "Please Enter Category Name"] },
  image: { type: String, required: [true, "Please Upload Image"] },
});

var Category = mongoose.model("prodCategorys", Categories);
module.exports = Category;
