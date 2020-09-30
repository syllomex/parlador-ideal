import { Post } from "../../entities/Post";
import {
  badRequest,
  invalidParam,
  missingParam,
  unauthorized,
} from "../../errors";
import { IPostRepository } from "../../repositories/PostRepository";
import { IUpdatePostDTO } from "./UpdatePostDTO";

export class UpdatePostUseCase {
  constructor(private repository: IPostRepository) {}

  async execute(data: IUpdatePostDTO): Promise<Post> {
    if (!data.new_content || data.new_content === "")
      throw missingParam("content");
    if (data.new_content.length > 280)
      throw invalidParam("content exceed max length");

    const post = await this.repository.findById(data.id);
    if (!post) throw badRequest("post not found");
    if (typeof post.user === "string") throw badRequest("malformed post");

    if (post.user.id !== data.user_id) throw unauthorized("not the post owner");

    return await this.repository.update(data.new_content, data.id);
  }
}
