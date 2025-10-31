import jwt from "jsonwebtoken";
import { JWT_USER_SECRET } from "../config";

function userMiddleware(req, res, next){
    const token = req.headers.token;
    const decodedToken = jwt.verify(token, JWT_USER_SECRET);

    if(decodedToken){
        req.userId = decodedToken.id;
        next()
    } else {
        res.status(403).json({
            message: "You are not signed in"
        })
    }
}


export {userMiddleware};