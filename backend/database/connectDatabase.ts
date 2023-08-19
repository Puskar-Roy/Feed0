import mongoose from "mongoose";

const mongoURI = process.env.MONGO_URI as string;

mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("📥[database]: Connected MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

declare module "./connectDatabase" {}
