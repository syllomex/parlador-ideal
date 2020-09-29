import { HttpRequest, HttpResponse } from "./http";

export interface IController {
  handle(req: HttpRequest): Promise<HttpResponse>;
}
