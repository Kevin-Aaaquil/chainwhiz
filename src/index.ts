import express from "express";
import config from "./config";
import cors from "cors";
import helmet from "helmet";
import { Logger } from "./utils";
import { infoControllers } from "./info";

(async () => {
  const app = express();
  app
    .use(helmet())
    .use(cors())
    .use(express.json())
    .use(express.urlencoded({ extended: true }));

  app.get("/", (req, res) => {
    res.send("Welcome to 2nd round of Chainwhiz");
  });

  app.use("/api", infoControllers());

  const port = config.PORT;
  app.listen(port, () => {
    Logger.info(`listening on port ${port}`);
  });
})();
