import express from "express"
import { addToCart, getUserCart, updateCart } from './../controller/cartController.js';
import isAuth from "../middleware/isAuth.js";

const cartRoute = express.Router();

// Default route for testing
cartRoute.get('/',(req, res) => {
    return res.send("Cart route is working.")
});

// Add item to cart
cartRoute.post('/add', isAuth, addToCart);

// Get the user's cart
cartRoute.get('/get', isAuth, getUserCart);

// Update item quantity
cartRoute.post('/update', isAuth, updateCart);

export default cartRoute;