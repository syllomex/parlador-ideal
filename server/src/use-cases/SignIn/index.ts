import { userRepository } from "../../repositories";
import { accessToken } from "../../utils/access-token";
import { SignInController } from "./SignInController";
import { SignInUseCase } from "./SignInUseCase";

const signIn = new SignInUseCase(userRepository, accessToken());
const signInController = new SignInController(signIn);

export { signIn, signInController };
