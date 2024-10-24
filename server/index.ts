import express, { Express, Request, Response, Application } from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import buildings from "./api/buildings/routes";
import complexes from "./api/complexes/routes";
import residentReg from "./api/residentRegistration/routes";

//For env File
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Express & TypeScript Server");
});

// routes
app.use("/api/complexes", complexes);
app.use("/api/buildings", buildings);
app.use("/api/resident-registration", residentReg);

app.listen(port, () => {
  console.log(`Server loaded at http://localhost:${port}`);
});
