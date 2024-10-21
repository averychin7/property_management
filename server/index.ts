import express, { Express, Request, Response, Application } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";

//For env File
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Express & TypeScript Server");
});

app.listen(port, () => {
  console.log(`Server loaded at http://localhost:${port}`);
});
