import { userRepository } from "../../repositories";
import { accessToken } from "../../utils/access-token";
import { crypt } from "../../utils/hash";
import { SignInController } from "./SignInController";
import { SignInUseCase } from "./SignInUseCase";

const signIn = new SignInUseCase(userRepository, accessToken(), crypt);
const signInController = new SignInController(signIn);

export { signIn, signInController };
