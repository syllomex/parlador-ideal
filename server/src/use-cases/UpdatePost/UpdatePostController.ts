import { httpError } from "../../http-helpers/errors";
import { ok } from "../../http-helpers/responses";
import { HttpRequest, HttpResponse } from "../../protocols/http";
import { UpdatePostUseCase } from "./UpdatePostUseCase";

export class UpdatePostController {
  constructor(private useCase: UpdatePostUseCase) {}

  async handle(req: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = req.params;
      const { id: user_id } = req.payload;
      const { content: new_content } = req.body;

      const updated_post = await this.useCase.execute({
        id,
        user_id,
        new_content,
      });
      
      return ok(updated_post);
    } catch (error) {
      return httpError(error);
    }
  }
}
