import express, { Express, Request, Response, Application } from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import building from "./api/building/routes";

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

// routes
app.use("/api/building", building);

app.listen(port, () => {
  console.log(`Server loaded at http://localhost:${port}`);
});
