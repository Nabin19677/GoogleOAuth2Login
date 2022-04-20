import express from 'express';
import appConfig from "./app-config.js";
import v1Route from "./v1/index.js";
import errHandler from './_err.js';

const app = express();

app.use(appConfig);

app.use("/api/v1", v1Route)

app.use(errHandler);

export default app;