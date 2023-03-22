import express from "express";
const router = express.Router();

router.get("/helloworld", (req: express.Request, res: express.Response) =>
  res.send({ response: "hello world" })
);

router.get("/csrp-report", (req: express.Request, res: express.Response) => {
  const { body } = req;
  console.log(body);
  // res.send({ response: "hello world" });
  res.end();
});

export default router;