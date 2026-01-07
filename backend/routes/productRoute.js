import express from 'express'
import { addProduct, deleteProduct, filterProduct, getAllProduct, singleProduct, updateProduct } from '../controller/productController.js';
import adminAuth from './../middleware/adminAuth.js';
import upload from '../middleware/multer.js';

const productRoute = express.Router();

// Root route for testing
productRoute.get('/', (req, res) => {
    res.json({ message: "Product API Working" });
});

// 1. Add Product
productRoute.post('/add', adminAuth, upload.single('image'), addProduct);

// Update Product
productRoute.put('/update/:id', adminAuth, upload.single('image'), updateProduct);

// 2. Get All Products
productRoute.get('/list', getAllProduct);

// Get single product detail
productRoute.get('/single/:id', singleProduct);

// 3. Filter/Search Products
productRoute.get('/filter', filterProduct);

// 4. Delete Product 
productRoute.delete('/remove/:id', adminAuth, deleteProduct);

export default productRoute;