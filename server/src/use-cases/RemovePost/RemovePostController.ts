import { httpError } from "../../http-helpers/errors";
import { nocontent } from "../../http-helpers/responses";
import { HttpRequest, HttpResponse } from "../../protocols/http";
import { RemovePostUseCase } from "./RemovePostUseCase";

export class RemovePostController {
  constructor(private useCase: RemovePostUseCase) {}

  async handle(req: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = req.params;
      const { id: user_id } = req.payload;

      await this.useCase.execute({ id, user_id });
      return nocontent();
    } catch (error) {
      return httpError(error);
    }
  }
}
