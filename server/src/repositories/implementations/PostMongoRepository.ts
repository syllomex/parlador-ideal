import { Posts } from "../../database/models/Posts";
import { Post } from "../../entities/Post";
import { IPostRepository } from "../PostRepository";

export class PostMongoRepository implements IPostRepository {
  async index(): Promise<Post[]> {
    const posts: any = await Posts.find()
      .select(["id", "content", "date", "user"])
      .populate("user", ["id", "name"])
      .map((posts: any) =>
        posts.map((post: any) => ({
          id: post._id,
          content: post.content,
          date: post.date,
          user: {
            id: post.user._id,
            name: post.user.name,
          },
        }))
      );

    return posts;
  }

  async create(post: Post): Promise<Post> {
    const result = await Posts.create({ ...post, _id: post.id });
    const new_post: any = await result.populate("user").execPopulate();

    return {
      id: new_post._id,
      content: new_post.content,
      date: new_post.date,
      user: {
        id: new_post.user._id,
        name: new_post.user.name
      },
    };
  }

  async update(content: string, post_id: string): Promise<Post> {
    if (content.length === 0) throw new Error("can not update post");

    const updated_post: any = await Posts.findByIdAndUpdate(
      post_id,
      { content },
      { new: true }
    ).populate("user");

    return {
      id: updated_post._id,
      content: updated_post.content,
      date: updated_post.date,
      user: {
        id: updated_post.user._id,
        name: updated_post.user.name
      },
    };
  }

  async remove(post_id: string): Promise<void> {
    await Posts.findByIdAndRemove(post_id);
  }
}
