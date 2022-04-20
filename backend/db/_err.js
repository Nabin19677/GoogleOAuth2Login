import mongoose from "mongoose";

const DB_ERROR_HANDLER = (err) => {
  if (err.message.code == "ETIMEDOUT") {
    mongoose.connect(process.env.MONGO_URI);
  } else {
    console.log(err.message);
  }
};

export default DB_ERROR_HANDLER;
