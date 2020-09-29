require("dotenv").config();
import express, { Express } from "express";
import { connect } from "./database";

const app = express();

async function App(): Promise<Express> {
  await connect();

  app.use(express.json());

  // Routes

  return app;
}

export { App };
