import express from "express";
import dotenv from "dotenv";
dotenv.config();
import bodyParser from "body-parser";
import cors from "cors";
import router from "./routes/routes";
import cookieParser from "cookie-parser";
import "./database/connectDatabase";

const app = express();

// Middleware Set Up
app.use(bodyParser.json({ limit: "1024mb" }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ limit: "1024mb", extended: true }));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use("/api", router);

const port = 8000 || process.env.PORT;

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
