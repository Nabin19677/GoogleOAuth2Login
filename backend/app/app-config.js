import express from 'express';
import helmet from "helmet";
import passport from "passport";
import morgan from "morgan";
import cors from "cors";

const app = express();

app.use(morgan("dev"));
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(helmet());
app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(passport.initialize());

export default app;