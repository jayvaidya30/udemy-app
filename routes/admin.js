import Router from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import { AdminModel } from "../db.js";
const adminRouter = Router();
const JWT_ADMIN_SECRET = "SECRET@ADMIN";
//TODO
//Implement cookie based authentication
//Add Zod validation
//Try catch block in the necessary code
adminRouter.post("/signup", async function (req, res) {
 const email = req.body.email;
 const password = req.body.password;

 const hashedpassword = bcrypt.hash(password, 5);
 
 await AdminModel.create({ 
    email,
    password: hashedpassword 
 })

 res.json({
    message: "You are signed up!"
 })

});

adminRouter.post("/signin", async function (req, res) {
    const email = req.body.email;
    const password = req.body.password;

    const response = await AdminModel.findOne({
        email
    })

    if(!response){
        res.json({
            message: "Please sigin up!"
        })
    }
    
    const hashedpassword = bcrypt.compare(password, response.password);

    

    
});

adminRouter.get("/", function (req, res) {});

adminRouter.put("/", function (req, res) {});

adminRouter.get("/bulk", function (req, res) {});

export { adminRouter };
