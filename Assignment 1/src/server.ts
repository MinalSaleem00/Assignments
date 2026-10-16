import express, { type Application, type Request, type Response } from "express";

const app : Application = express()

const port = 3000

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Assignment no: 1 Create a Web Server using ExpressJS and create one API");
});

app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});
