import express from "express";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
const app = express();

import {userRouter} from "./routes/user.js";
import {courseRouter} from "./routes/course.js";
import {adminRouter} from "./routes/admin.js";

app.use("/api/v1/user", userRouter);
app.use("/api/v1/course", courseRouter);
app.use("/api/v1/admin", adminRouter);



app.listen(3000);
