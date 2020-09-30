import { postRepository } from "../../repositories";
import { RemovePostController } from "./RemovePostController";
import { RemovePostUseCase } from "./RemovePostUseCase";

const removePost = new RemovePostUseCase(postRepository);
const removePostController = new RemovePostController(removePost);

export { removePost, removePostController };
