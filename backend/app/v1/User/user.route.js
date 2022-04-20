import express from 'express';
import {googleLogin} from "./user.controller.js";

const Router = express.Router();

Router.post("/google", googleLogin)

export default Router;