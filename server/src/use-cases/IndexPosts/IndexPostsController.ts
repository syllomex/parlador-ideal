import { httpError } from "../../http-helpers/errors";
import { ok } from "../../http-helpers/responses";
import { HttpResponse } from "../../protocols/http";
import { IndexPostsUseCase } from "./IndexPostsUseCase";

export class IndexPostsController {
  constructor(private useCase: IndexPostsUseCase) {}

  async handle(): Promise<HttpResponse> {
    try {
      const posts = await this.useCase.execute();
      return ok(posts);
    } catch (error) {
      return httpError(error)
    }
  }
}