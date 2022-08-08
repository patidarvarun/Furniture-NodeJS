var mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Categories = new mongoose.Schema({
  name: { type: String },
  icon: { type: String },
  parent_id: { type: String },
});

var Category = mongoose.model("Category", Categories);
module.exports = Category;
