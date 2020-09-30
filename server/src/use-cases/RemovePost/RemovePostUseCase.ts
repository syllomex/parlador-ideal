import { badRequest, unauthorized } from "../../errors";
import { IPostRepository } from "../../repositories/PostRepository";

export class RemovePostUseCase {
  constructor(private repository: IPostRepository) {}

  async execute(data: IRemovePostDTO): Promise<void> {
    const post = await this.repository.findById(data.id);

    if (!post) throw badRequest("post not found");
    if (typeof post.user === "string") throw badRequest("malformed post");
    if (post.user.id !== data.user_id) throw unauthorized("not the post owner");

    await this.repository.remove(data.id);
  }
}
