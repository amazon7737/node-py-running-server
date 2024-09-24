import * as express from "express";
import script from "../utils/script";

const router = express.Router();

router.get(
  "/",
  async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    let data = "fff";

    res.render("index", { data: data });
  }
);

router.get(
  "/data",
  async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    script.run("./python/helloWorld.py");

    res.render("data", {});
  }
);

export default router;
