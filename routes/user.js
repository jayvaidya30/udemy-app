import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { UserModel } from "../db.js";
import { JWT_USER_SECRET } from "../config.js";
const userRouter = express.Router();

userRouter.post("/signup", async function (req, res) {
  const email = req.body.email;
  const password = req.body.password;

  const duplicateEmail = await UserModel.findOne({
    email,
  });

  if (duplicateEmail) {
    return res.json({
      message: "Email already exists!",
    });
  }

  const hashedpassword = await bcrypt.hash(
    password,
    5,
    async function (err, hash) {
      await UserModel.create({
        email,
        password: hash,
      });
    }
  );


  res.json({
    message: "You are signed up!",
  });
});

userRouter.post("/signin", async function (req, res) {
  const email = req.body.email;
  const password = req.body.password;

  const user = await UserModel.findOne({
    email,
  });

  if (!user) {
    message: "User does not exists, Please signup!";
  }

  const hashedpassword = await bcrypt.compare(password, user.password);

  if (hashedpassword) {
    const token = jwt.sign(
      {
        id: user._id.toString(),
      },
      JWT_USER_SECRET
    );
    console.log(token);
    res.json({
      token,
    });
  } else {
    res.json({
      message: "Invalid Credentials!",
    });
  }
});

userRouter.get("/purchases",function (req, res) {
  res.json({
    message: "purchases!!",
  });
});

export { userRouter };
