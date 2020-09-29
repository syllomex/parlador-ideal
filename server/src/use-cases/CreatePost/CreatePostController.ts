import { httpError } from "../../http-helpers/errors";
import { created } from "../../http-helpers/responses";
import { HttpRequest, HttpResponse } from "../../protocols/http";
import { CreatePostUseCase } from "./CreatePostUseCase";

export class CreatePostController {
  constructor(private useCase: CreatePostUseCase) {}

  async handle(req: HttpRequest): Promise<HttpResponse> {
    try {
      const { content } = req.body;
      const user = req.payload.id;

      const created_post = await this.useCase.execute({ content, user });
      return created(created_post);
    } catch (error) {
      return httpError(error);
    }
  }
}
