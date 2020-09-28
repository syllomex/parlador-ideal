import { Schema, model } from "mongoose";
import { Post } from "../../entities/Post";

const postSchema = new Schema<Post>({
  _id: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  user: {
    type: String,
    required: true,
    ref: "users",
  },
});

const Posts = model("posts", postSchema);

export { Posts };
