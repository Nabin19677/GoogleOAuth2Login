import User from "../../../db/models/User.model.js";
import httpStatus from "http-status";
import { userGooglePayload } from "./user.service.js";
import LoginMethod from "../../../db/constants/login_method.js";
import genUsername from "unique-username-generator";

export async function googleLogin(req, res, next) {
  try {
    const { token } = req.body;
    const { email, given_name, family_name } = await userGooglePayload(token);
    let existedUser = await User.findOne({ email });
    if (existedUser == null) {
      existedUser = await User.create({
        firstName: given_name,
        lastName: family_name,
        email,
        loginMethod: LoginMethod.google,
        userName: genUsername.generateFromEmail(email, 3),
      });
    }
    return res
      .status(httpStatus.ACCEPTED)
      .json(existedUser.schema.methods.toAuthJSON());
  } catch (e) {
    next(e);
  }
}
