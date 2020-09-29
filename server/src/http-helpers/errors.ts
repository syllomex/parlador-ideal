import { Response } from "express";
import { HttpResponse } from "../protocols/http";

export function httpError(error: Error): HttpResponse {
  const { code, message } = JSON.parse(error.message);

  return {
    code,
    body: { message: message },
  };
}
