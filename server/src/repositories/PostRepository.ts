import { Post } from "../entities/Post";

export interface IPostRepository {
  findById(id: string): Promise<Post | null>
  index(): Promise<Post[]>;
  create(post: Post): Promise<Post>;
  update(content: string, post_id: string): Promise<Post>;
  remove(post_id: string): Promise<void>;
}
