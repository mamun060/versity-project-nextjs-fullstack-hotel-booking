import mongoose, {Schema} from "mongoose";

const userSchema = new Schema({
  name: {
    required: true,
    type: String
  },
  email: {
    required: true,
    type: String
  },
  password: {
    required: true,
    type: String
  },
  image: {
    required: false,
    type: String
  },
  role: {
    type: String,
    enum: ["user", "admin" , "manager"],
    default: "user"
  }
});


export const userModel = mongoose.models.users ?? mongoose.model("users", userSchema);
