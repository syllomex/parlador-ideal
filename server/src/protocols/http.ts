import { IPayload } from "../utils/access-token/payload";

export interface HttpRequest {
  body?: any;
  headers?: any;
  payload: IPayload;
}

export interface HttpResponse {
  code: number;
  body?: any;
}