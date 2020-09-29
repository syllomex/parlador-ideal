import { postRepository } from "../../repositories";
import { IndexPostsController } from "./IndexPostsController";
import { IndexPostsUseCase } from "./IndexPostsUseCase";

const indexPosts = new IndexPostsUseCase(postRepository);
const indexPostsController = new IndexPostsController(indexPosts);

export { indexPosts, indexPostsController };
