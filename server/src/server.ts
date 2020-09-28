import { App } from "./app";
import cors from "cors";

App().then((app) => {
  const PORT = process.env.PORT || 8080;

  app.use(cors());

  app.listen(PORT, () => console.log("running server on port", PORT));
});
