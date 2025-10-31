import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { UserModel } from "../db.js";
const userRouter = express.Router();
const JWT_USER_SECRET = "SECRET@USER";

//Auth middleware
async function auth(req, res, next) {
  const token = req.headers.token;
  const decodedToken = jwt.verify(token, JWT_SECRET);
  
  console.log(decodedToken);
  if (token === decodedToken) {
    next();
  } else {
    res.json({
      message: "Please sign in!"
    })
  }
}

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

  const response = await UserModel.findOne({
    email,
  });

  if (!response) {
    message: "User does not exists, Please signup!";
  }

  const hashedpassword = await bcrypt.compare(password, response.password);

  if (hashedpassword) {
    const token = jwt.sign(
      {
        id: response._id.toString(),
      },
      JWT_SECRET
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

userRouter.get("/purchases", auth, function (req, res) {
  res.json({
    message: "purchases!!",
  });
});

export { userRouter };
