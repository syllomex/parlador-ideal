import { Post } from "../../entities/Post";
import { IPostRepository } from "../../repositories/PostRepository";

export class IndexPostsUseCase {
  constructor(private repository: IPostRepository) {}

  async execute(): Promise<Post[]> {
    const posts = await this.repository.index();
    return posts;
  }
}