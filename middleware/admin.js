import jwt from "jsonwebtoken";
import { JWT_ADMIN_SECRET } from "../config";

function adminMiddleware(req, res, next){
    const token = req.headers.token;
    const decodedToken = jwt.verify(token, JWT_USER_SECRET);

    if(decodedToken){
        req.userid = decodedToken.id;
        next()
    } else {
        res.status(403).json({
            message: "You are not signed in"
        })
    }
}


export {adminMiddleware};