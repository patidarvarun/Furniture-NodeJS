var mongoose = require("mongoose");
const Schema = mongoose.Schema;

const users = mongoose.Schema(
  {
    name: { type: String },
    nick_name: { type: String },
    email: { type: String, unique: true },
    DOB: { type: String },
    code_phone_number: { type: Number, maxLength: 9 },
    password: { type: String, minlength: 6 },
    gender: { type: String },
    pin: { type: Number },
    image: { type: String },
    userType: { type: String, default: "user" },
  },
  { timestamps: true }
);
var User = mongoose.model("users", users);
module.exports = User;
