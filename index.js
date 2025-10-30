import express from "express";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
const app = express();

import { userRouter } from "./routes/user.js";
import { courseRouter } from "./routes/course.js";
import { adminRouter } from "./routes/admin.js";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api/v1/user", userRouter);
app.use("/api/v1/course", courseRouter);
app.use("/api/v1/admin", adminRouter);

async function main() {
    // add dot env
  await mongoose.connect("mongodb+srv://jayvaidya30:mivuqizBVpvXxegM@cluster0.86xlhas.mongodb.net/udemy-app");
  app.listen(3000);
  console.log("Listening on port 3000!");
}

main();
