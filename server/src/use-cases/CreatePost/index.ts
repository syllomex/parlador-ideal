import { postRepository } from "../../repositories";
import { CreatePostController } from "./CreatePostController";
import { CreatePostUseCase } from "./CreatePostUseCase";

const createPost = new CreatePostUseCase(postRepository);
const createPostController = new CreatePostController(createPost);

export { createPost, createPostController };
