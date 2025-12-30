import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';
import validator from 'validator';
import { genToken } from '../config/token.js';

// Register new user
export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const existingUser = await User.findOne({ email });
        // Check if user already exists
        if (existingUser) {
            return res.json({success: false, message: 'User already exists' });
        }
        // Ceck email is valid
        if(!validator.isEmail(email)){
            return res.json({ success: false, message: 'Invalid email address' });
        }
        // Ceck password length
        if(password.length < 6){
            return res.json({ success: false, message: 'Password must be at least 6 characters long' });
        }
        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);
        // Create new user
        const user = await User.create({ name, email, password: hashedPassword });
        // Generate token and set cookie
        let token = genToken(user._id);
        res.cookie('token', token, {
            httpOnly: true,
            secure: false,
            sameSite: 'lax',
            maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
        });
        return res.json({ success: true, message: 'User registered successfully', user: user });
    } catch (error) {
        console.log("Registration failed:", error);
        return res.json({ success: false, message: 'Registration failed 500 error' });
    }
};

// Login user
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        // Check if user exists
        if (!user) {
            return res.json({ success: false, message: 'User Not Found' });
        }
        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.json({ success: false, message: 'Invalid Credentials' });
        }
        // Generate token and set cookie
        let token = genToken(user._id);
        res.cookie('token', token, {
            httpOnly: true,
            secure: false,
            sameSite: 'lax',
            maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
        });
        return res.json({ success: true, message: 'Login successful', user });
    } catch (error) {
        console.log("Login failed:", error);
        return res.json({ success: false, message: 'Login failed 500 error' });
    }
};

// Logout user
export const logout = (req, res) => {
    try {
        res.clearCookie('token');
        return res.json({ success: true, message: 'Logout successful' });
    } catch (error) {
        console.log("Logout failed:", error);
        return res.json({ success: false, message: 'Logout failed 500 error' });
    }
}