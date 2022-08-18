const User = require("../../models/UserModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const ba64 = require("ba64");
var crypto = require("crypto");

const userMutation = {
  registerUser: async (parent, args, context, info) => {
    const { email, password } = args.user;
    try {
      if (!email) {
        throw new Error("Email fields is required!");
      } else if (!password) {
        throw new Error("Password fields is required!");
      } else {
        const salt = bcrypt.genSaltSync(10);
        const hashPassword = bcrypt.hashSync(password, salt);
        const user = new User({
          email,
          password: hashPassword,
        });
        await user.save();
        return user;
      }
    } catch (error) {
      throw new Error(error.message);
    }
  },
  updateUser: async (parent, args, context, info) => {
    const { id } = args;
    const {
      name,
      nick_name,
      email,
      DOB,
      code_phone_number,
      gender,
      pin,
      image,
    } = args.user;

    var randomStr = `uploads/image` + crypto.randomBytes(8).toString("hex");
    data_url = image;
    const body2 = { profilepic: data_url };
    let mimeType2 = body2.profilepic.match(/[^:/]\w+(?=;|,)/)[0];
    let ext = randomStr + "." + mimeType2;
    ba64.writeImage(`./` + randomStr, data_url, function (err) {
      if (err) throw err;
    });

    const user = await User.findByIdAndUpdate(
      id,
      {
        name,
        nick_name,
        email,
        DOB,
        code_phone_number,
        gender,
        pin,
        image: ext,
      },
      {
        new: true,
      }
    );
    return user;
  },
  deleteUser: async (parent, args, context, info) => {
    const { id } = args;
    await User.findByIdAndDelete(id);
    return "User delete successfully...";
  },

  login: async (parent, args, context, info) => {
    const { email, password } = args;
    try {
      var user = await User.findOne({ email });
      if (!user) {
        throw new Error("No user with that email");
      }
      const isValid = await bcrypt.compare(password, user.password);
      if (!isValid) {
        throw new Error("Incorrect password");
      }
      const token = jwt.sign(
        { _id: user._id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
      );
      return {
        token,
        user,
      };
    } catch (error) {
      throw new Error(error.message);
    }
  },
};

module.exports = userMutation;
