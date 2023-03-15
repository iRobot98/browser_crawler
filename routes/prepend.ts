import express from "express";
const router = express.Router();

router.get("/helloworld", (req: express.Request, res: express.Response) =>
  res.send({ response: "hello world" })
);
export { router };
