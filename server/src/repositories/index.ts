import { PostMongoRepository } from "./implementations/PostMongoRepository";
import { UserMongoRepository } from "./implementations/UserMongoRepository";

const userRepository = new UserMongoRepository();
const postRepository = new PostMongoRepository();

export { userRepository, postRepository };
