import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import postRouter from "./routers/postRouter.js";

dotenv.config();

const app = express();

app.use(express.json({ limit: "20mb" }));

app.use("/posts", postRouter);

app.listen(process.env.PORT, () => {
  mongoose
    .connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("conntected to db"))
    .catch((err) => console.log(err));
});
