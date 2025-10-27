import Router from "express";
const courseRouter = Router();

courseRouter.post("/purchase", function (req, res) {
  res.json({
    message: "signup endpoint",
  });
})

courseRouter.get("/preview", function (req, res) {
  res.json({
    message: "Signup endpoint",
  });
})

export { courseRouter };
