import mongoose ,{Schema} from "mongoose";

const userSchema = new Schema({
    firstName : {
        type : String
    },
    lastName : {
        type : String
    },
    email : {
        type : String
    },
    phone : {
        type : String
    },
    password : {
        type : String
    },
});

export default mongoose.model("User", userSchema)