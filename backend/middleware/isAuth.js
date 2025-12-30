import jwt from "jsonwebtoken";

const isAuth = (req, res, next) => {
    try {
        let {token} = req.cookies

        if (!token) {
            return res.json({success: false, message: "Does not have token" });
        }
        
        let verifyToken = jwt.verify(token, process.env.JWT_SECRET)

        if (!verifyToken) {
            return res.json({success: false, message: "user is not authenticated" });
        }
        
        req.userId = verifyToken.userId;
        next();
    } catch (error) {
        console.error("Authentication error:", error);
        return res.json({success: false, message: "Internal server error" });
    }
}

export default isAuth;