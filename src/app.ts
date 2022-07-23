import express, { Request, Response, NextFunction } from "express";

import router from "./routes";

const app = express();

app.use("/", router);

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("server start");
});

app.listen("8000", () => {
  console.log(`
  ################################################
  🛡️  Server listening on port: 8000
  ################################################
`);
});
