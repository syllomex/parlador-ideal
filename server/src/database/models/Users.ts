import { Schema, model } from "mongoose";
import { User } from "../../entities/User";

const userSchema = new Schema<User>({
  _id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
});

const Users = model("users", userSchema);

export { Users };
