import { httpError } from "../../http-helpers/errors";
import { ok } from "../../http-helpers/responses";
import { HttpRequest, HttpResponse } from "../../protocols/http";
import { SignInUseCase } from "./SignInUseCase";

export class SignInController {
  constructor(private useCase: SignInUseCase) {}

  async handle(req: HttpRequest): Promise<HttpResponse> {
    try {
      const { email, password } = req.body;

      const { token, payload } = await this.useCase.execute({
        email,
        password,
      });

      return ok({ token, payload });
    } catch (error) {
      return httpError(error);
    }
  }
}
