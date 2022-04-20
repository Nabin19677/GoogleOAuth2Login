import config from "./config/index.js";
import expressApp from "./app/index.js";
import dbConnection from "./db/index.js";
import dbErrorHandler from "./db/_err.js";

//Starting Mongoose Connection
dbConnection
  .then((db) => {
    console.log("Successfully connected to mongodb");
    expressApp.listen(process.env.PORT | 8000, () => {
      // Attempting to start express app after successful DB connection.
      console.log(`Listening on port ${process.env.PORT | 8000}`);
    });
    return db;
  })
  .catch(dbErrorHandler);
