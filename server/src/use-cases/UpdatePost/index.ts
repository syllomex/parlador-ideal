import { postRepository } from "../../repositories";
import { UpdatePostController } from "./UpdatePostController";
import { UpdatePostUseCase } from "./UpdatePostUseCase";

const updatePost = new UpdatePostUseCase(postRepository);
const updatePostController = new UpdatePostController(updatePost);

export { updatePost, updatePostController };
