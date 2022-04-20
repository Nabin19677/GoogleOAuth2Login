import express from 'express';
import userRoutes from "./User/user.route.js";

const app = express();

app.use("/user", userRoutes);

export default app;