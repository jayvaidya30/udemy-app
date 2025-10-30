import Router from "express";
const adminRouter = Router();
import { AdminModel } from "../db.js";

adminRouter.post("/signup", function (req, res) {});

adminRouter.post("/signin", function (req, res) {});

adminRouter.get("/", function (req, res) {});

adminRouter.put("/", function (req, res) {});

adminRouter.get("/bulk", function (req, res) {});

export { adminRouter };
