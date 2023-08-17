import express from "express";
import dotenv from "dotenv";
import bodyParser from 'body-parser';
import cors from 'cors';
import router from './routes/routes'
import cookieParse from 'cookie-parser'
dotenv.config();
import './database/connectDatabase'; // Imports the module without using its exports


const app = express();


// Middleware Set Up
app.use(bodyParser.json({limit:"100mb"}));
app.use(bodyParser.urlencoded({ limit: "1024mb", extended: true }));
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use('/api',router);
app.use(cookieParse());


const port = 8000 || process.env.PORT;


app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
