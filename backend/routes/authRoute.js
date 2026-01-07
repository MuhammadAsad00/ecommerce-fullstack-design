import express from "express";
import { adminLogin, adminLogout, login, logout, register } from "../controller/authController.js";

const authRoute = express.Router();
// Default route for testing
authRoute.get('/', (req, res) => {
    res.send('Auth Route is working...');
});

// User authentication routes
authRoute.post('/register', register);
authRoute.post('/login', login);
authRoute.get('/logout', logout);

// Admin authenticaion routes
authRoute.post('/adminlogin', adminLogin);
authRoute.get('/adminlogout', adminLogout);

export default authRoute;




