import { Request, Response, Router } from "express";
const router = Router();

import { IController } from "./protocols/controller";
import { createUserController } from "./use-cases/CreateUser";

async function sendRes(controller: IController, req: Request, res: Response) {
  const { code, body } = await controller.handle(req);
  return res.status(code).json(body);
}

router.post("/users", (req, res) => sendRes(createUserController, req, res));

export { router };
