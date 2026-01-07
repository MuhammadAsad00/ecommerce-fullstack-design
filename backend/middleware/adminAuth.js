import jwt from "jsonwebtoken";

const adminAuth = (req, res, next) => {
    try {
        const { token } = req.cookies;

        // 1. Check if token exists
        if (!token) {
            return res.status(401).json({ success: false, message: "Not Authorized, Login Again" });
        }

        // 2. Verify token (This throws an error if token is expired or invalid)
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // 3. Verify Admin Role (Crucial for security)
        if (decoded.role !== "admin") {
            return res.status(403).json({ success: false, message: "Forbidden: Access Denied" });
        }

        // 4. Attach admin info to request
        req.admin = decoded; 
        
        next();
    } catch (error) {
        console.error("Admin Authentication error:", error.message);
        return res.status(401).json({ success: false, message: "Session expired or invalid token" });
    }
};

export default adminAuth;
