import { userRepository } from "../../repositories";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const createUser = new CreateUserUseCase(userRepository);
const createUserController = new CreateUserController(createUser);

export { createUser, createUserController };
