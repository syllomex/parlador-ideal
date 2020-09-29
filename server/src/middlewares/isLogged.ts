import { NextFunction, Request, Response } from "express";
import { accessToken } from "../utils/access-token";

export function isLogged(req: Request, res: Response, next: NextFunction) {
  if (!req.headers.authorization) return res.sendStatus(401);

  const [bearer, token] = req.headers.authorization.split(" ");

  if (bearer !== "Bearer") return res.sendStatus(401);

  try {
    const payload = accessToken().decodeToken(token);
    req.payload = payload;
    next();
  } catch (error) {
    return res.sendStatus(401);
  }
}
