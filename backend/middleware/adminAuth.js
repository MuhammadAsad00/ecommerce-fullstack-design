import jwt from "jsonwebtoken";

const adminAuth = (req, res, next) => {
  try {
    const token = req.cookies?.token;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Not Authorized, Login Again",
      });
    }

    if (!process.env.JWT_SECRET) {
      console.error("JWT_SECRET missing in environment");
      return res.status(500).json({
        success: false,
        message: "Server configuration error",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded.role !== "admin") {
      return res.status(403).json({
        success: false,
        message: "Forbidden: Admin only",
      });
    }

    req.admin = decoded;
    next();
  } catch (error) {
    console.error("Admin Authentication error:", error);
    return res.status(401).json({
      success: false,
      message: "Session expired or invalid token",
    });
  }
};
