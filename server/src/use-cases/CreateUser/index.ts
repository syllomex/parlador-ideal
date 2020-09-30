import { userRepository } from "../../repositories";
import { crypt } from "../../utils/hash";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const createUser = new CreateUserUseCase(userRepository, crypt);
const createUserController = new CreateUserController(createUser);

export { createUser, createUserController };
