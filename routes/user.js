import Router from "express";
const userRouter = Router();

userRouter.post("/signup", function (req, res) {
  res.json({
    message: "Signup endpoint",
  });
});

userRouter.post("/signin", function (req, res) {
  res.json({
    message: "Signin Endpoint",
  });
});

userRouter.get("/purchases", function (req, res) {});

export { userRouter };
