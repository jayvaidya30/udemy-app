import express from "express";
import bcrypt from "bcrypt";
import { UserModel } from "../db.js";
const userRouter = express.Router();

userRouter.post("/signup", async function (req, res) {
  const email = req.body.email;
  const password = req.body.password;

  const duplicateEmail = await UserModel.findOne({
    email
  })

  if(duplicateEmail){
    return res.json({
      message: "Email already exists!"
    })
  }

  const hashedpassword = await bcrypt.hash(password, 5, async function(err, hash){
     await UserModel.create({
      email,
      password: hash
    })
  })

  res.json({
    message: "You are signed up!"
  })

  
});

userRouter.post("/signin", function (req, res) {
  res.json({
    message: "Signin Endpoint",
  });
});

userRouter.get("/purchases", function (req, res) {});

export { userRouter };
