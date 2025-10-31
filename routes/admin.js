import Router from "express";
import bcrypt, { hash } from "bcrypt";
import jwt from "jsonwebtoken";
import { AdminModel } from "../db.js";
import { CourseModel } from "../db.js";
import { JWT_ADMIN_SECRET } from "../config.js";
import { adminMiddleware } from "../middleware/admin.js";
const adminRouter = Router();

//TODO
//Implement cookie based authentication
//Add Zod validation
//Try catch block in the necessary code
adminRouter.post("/signup", async function (req, res) {
  const email = req.body.email;
  const password = req.body.password;

  const duplicateEmail = await Admin.findOne({
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
      await AdminModel.create({
        email,
        password: hash,
      });
    }
  );

  res.json({
    message: "You are signed up!",
  });

  //  const email = req.body.email;
  //  const password = req.body.password;

  //  const hashedpassword = bcrypt.hash(password, 5);

  //  await AdminModel.create({
  //     email,
  //     password: hashedpassword
  //  })

  //  res.json({
  //     message: "You are signed up!"
  //  })
});

adminRouter.post("/signin", async function (req, res) {
  const email = req.body.email;
  const password = req.body.password;

  const admin = await AdminModel.findOne({
    email: email,
    password: password,
  });

  if (!admin) {
    return res.json({
      message: "Please sigin up!",
    });
  }

  const hashedpassword = bcrypt.compare(password, admin.password);

  if (hashedpassword) {
    const token = jwt.sign(
      {
        id: admin._id.toString(),
      },
      JWT_ADMIN_SECRET
    );

    res.json({
      token,
    });
  } else {
    res.status(403).json({
      message: "Invalid Credentials",
    });
  }
});

adminRouter.post("/course", adminMiddleware, async function (req, res) {
  const adminId = req.userId;

  const { title, description, price, imageUrl } = req.body;

  //creating a web3 saas in 6 hours
  const course = await CourseModel.create({
    title,
    description,
    price,
    imageUrl,
    creatorId: userId,
  });

  res.json({
    message:"Course Created",
    courseId: course._id
  })
});

adminRouter.put("/", function (req, res) {});

adminRouter.get("/bulk", function (req, res) {});

export { adminRouter };
