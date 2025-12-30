import express from 'express';
import { getCurrentUser } from './../controller/userController.js';
import isAuth from '../middleware/isAuth.js';

const userRoute = express.Router();

// Default route for testing
userRoute.get('/', (req, res) => {
    res.send('User Route is working');
});

userRoute.get('/getcurrentuser',isAuth, getCurrentUser);

export default userRoute;