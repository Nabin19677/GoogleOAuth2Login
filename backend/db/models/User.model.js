import mongoose from "mongoose";
import { compareSync, hashSync, genSaltSync } from "bcrypt";
import jwt from "jsonwebtoken";
import ROLES from "../constants/roles.js";

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  userName: {
    type: String,
  },
  password: {
    type: String,
  },
  loginMethod: {
    type: String,
  },
  role: {
    type: String,
    default: ROLES.USER,
  },
});

userSchema.pre("save", function (next) {
  if (this.isModified("password")) {
    this.password = this._hashPassword(this.password);
  }
  return next();
});

userSchema.methods = {
  _hashPassword(password) {
    let salt = genSaltSync(constants.SALT_ROUND);
    return hashSync(password, salt);
  },
  authenticateUser(password) {
    let isAuthenticated =
      compareSync(password, this.password) && this.role === ROLES.USER;
    return isAuthenticated;
  },
  createToken() {
    return jwt.sign(
      {
        _id: this._id,
      },
      process.env.JWT_SECRET
    );
  },
  toAuthJSON() {
    return {
      _id: this._id,
      userName: this.userName,
      token: `JWT ${this.createToken()}`,
    };
  },
  toJSON() {
    return {
      _id: this._id,
      username: this.userName,
    };
  },
};

export default mongoose.model("User", userSchema);
