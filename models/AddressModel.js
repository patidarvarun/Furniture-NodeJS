var mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AddressSchema = new mongoose.Schema(
  {
    address_name: {
      type: String,
      required: [true, "please enter address_name"],
    },
    address_detail: {
      type: String,
      required: [true, "please enter address_detail"],
    },
    city: { type: String, required: [true, "please enter city"] },
    state: { type: String, required: [true, "please enter state"] },
    postalCode: { type: Number, required: [true, "Pleade provide postalCode"] },
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: [true, "please enter User_id"],
    },
    isDeleted: { type: Boolean },
  },
  { timestamps: true }
);

var Address = mongoose.model("address", AddressSchema);
module.exports = Address;
