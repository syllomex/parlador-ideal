import { missingParam, invalidParam } from "../../errors";
import { Post } from "../../entities/Post";
import { IPostRepository } from "../../repositories/PostRepository";

export class CreatePostUseCase {
  constructor(private repository: IPostRepository) {}

  async execute(data: ICreatePostDTO): Promise<Post> {
    if (!data.content || data.content === "") throw missingParam("content");
    if (!data.user || data.user === "") throw missingParam("user");

    if (data.content.length > 280)
      throw invalidParam("content exceed maximum length");

    const post = new Post({
      content: data.content,
      user: data.user,
      date: new Date(),
    });

    const created_post = await this.repository.create(post);
    return created_post;
  }
}
