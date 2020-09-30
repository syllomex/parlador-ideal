import { Request, Response, Router } from "express";
import { isLogged } from "./middlewares/isLogged";

const router = Router();

import { IController } from "./protocols/controller";

import { signInController } from "./use-cases/SignIn";
import { createPostController } from "./use-cases/CreatePost";
import { createUserController } from "./use-cases/CreateUser";
import { indexPostsController } from "./use-cases/IndexPosts";
import { removePostController } from "./use-cases/RemovePost";

async function sendRes(controller: IController, req: Request, res: Response) {
  const { code, body } = await controller.handle(req);
  return res.status(code).json(body);
}

router.post("/auth", (req, res) => sendRes(signInController, req, res));
router.post("/users", (req, res) => sendRes(createUserController, req, res));

router.get("/posts", isLogged, (req, res) => sendRes(indexPostsController, req, res));
router.post("/posts", isLogged, (req, res) => sendRes(createPostController, req, res));
router.delete("/posts/:id", isLogged, (req, res) => sendRes(removePostController, req, res));

export { router };
