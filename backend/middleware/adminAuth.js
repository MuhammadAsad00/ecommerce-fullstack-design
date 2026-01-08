import jwt from "jsonwebtoken";

const adminAuth = (req, res, next) => {
    try {
        // Look for token in cookies OR in headers
        const token = req.cookies.token || req.headers.token; 

        if (!token) {
            return res.status(401).json({ success: false, message: "Not Authorized, Login Again" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Note: Check how you sign your token. 
        // If you used (email + password) to sign it, use that check here.
        // If you used { role: "admin" }, the check below is correct.
        if (decoded.role !== "admin") {
            return res.status(403).json({ success: false, message: "Forbidden: Access Denied" });
        }

        req.admin = decoded; 
        next();
    } catch (error) {
        console.error("Admin Authentication error:", error.message);
        return res.status(401).json({ success: false, message: "Session expired or invalid token" });
    }
};

export default adminAuth;
