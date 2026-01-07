import express from 'express';
import { getAdmin, getCurrentUser } from './../controller/userController.js';
import isAuth from '../middleware/isAuth.js';
import adminAuth from '../middleware/adminAuth.js';

const userRoute = express.Router();

// Default route for testing
userRoute.get('/', (req, res) => {
    res.send('User Route is working');
});

// Get user 
userRoute.get('/getcurrentuser',isAuth, getCurrentUser);

// Get admin
userRoute.get('/getadmin', adminAuth, getAdmin);

export default userRoute;