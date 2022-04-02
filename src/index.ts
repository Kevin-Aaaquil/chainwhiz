import express from "express";
import config from "./config";
import cors from "cors";
import helmet from "helmet";
import { Logger } from "./utils";
import { FIXED_DATA } from "./utils/constants";

(async () => {
  const app = express();
  app
    .use(helmet())
    .use(cors())
    .use(express.json())
    .use(express.urlencoded({ extended: true }));

  app.get("/", (req, res) => {
    res.send("<h1>Welcome to 2nd round of Chainwhiz</h1>");
  });

  app.get("/information", (req, res) => {
    res.send(FIXED_DATA);
  });

  const port = config.PORT;
  app.listen(port, () => {
    Logger.info(`listening on port ${port}`);
  });
})();
