import express from 'express';
import v1Route from "./v1/index.js";
import errHandler from './_err.js';

const app = express();


app.use("/api/v1", v1Route)

app.use(errHandler);

export default app;