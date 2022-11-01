var mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PolicySchema = new mongoose.Schema(
  {
    heading: { type: String, required: [true, "please enter heading"] },
    description: { type: String, required: [true, "please enter description"] },
  },
  { timestamps: true }
);

var PrivacyPolicy = mongoose.model("policy", PolicySchema);
module.exports = PrivacyPolicy;
