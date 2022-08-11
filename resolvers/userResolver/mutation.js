const User = require("../../models/UserModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

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
        image,
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
