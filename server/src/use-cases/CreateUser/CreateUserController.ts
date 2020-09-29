import { httpError } from "../../http-helpers/errors";
import { created } from "../../http-helpers/responses";
import { IController } from "../../protocols/controller";
import { HttpRequest, HttpResponse } from "../../protocols/http";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController implements IController {
  constructor(private useCase: CreateUserUseCase) {}

  async handle(req: HttpRequest): Promise<HttpResponse> {
    try {
      const { name, email, password, password_confirmation } = req.body;

      const created_user = await this.useCase.execute({
        name,
        email,
        password,
        password_confirmation,
      });

      return created(created_user);
    } catch (err) {
      return httpError(err);
    }
  }
}
