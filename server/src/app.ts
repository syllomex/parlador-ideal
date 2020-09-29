require("dotenv").config();
import express, { Express } from "express";
import { connect } from "./database";
import { router } from "./routes";
const app = express();

async function App(): Promise<Express> {
  await connect();

  app.use(express.json());
  app.use(router);

  return app;
}

export { App };
