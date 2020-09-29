import { HttpResponse } from "../protocols/http";

export function ok(body?: any): HttpResponse {
  return {
    code: 200,
    body,
  };
}

export function created(body?: any): HttpResponse {
  return {
    code: 201,
    body,
  };
}
