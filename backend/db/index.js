import mongoose from "mongoose";

const connection = mongoose.connect(process.env.MONGO_URI)

export default connection;