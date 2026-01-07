import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import connectDB from './config/db.js';
import authRoute from './routes/authRoute.js';
import userRoute from './routes/userRoute.js';
import productRoute from './routes/productRoute.js';
import cartRoute from './routes/cartRoute.js';

dotenv.config();
let port = process.env.PORT || 3000;

const app = express();
app.use(cookieParser());

app.use(express.json());
app.use(cors({
    origin: ["https://ecommerce-fullstack-design-client.vercel.app", "https://ecommerce-fullstack-design-admin.vercel.app"], 
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

// This line allows you to access images via: http://localhost:4000/uploads/filename.jpg
app.use('/uploads', express.static('uploads'));

app.use('/api/auth', authRoute);
app.use('/api/user', userRoute);
app.use('/api/cart', cartRoute);
app.use('/api/product', productRoute);


app.get('/', (req, res) => {
    res.send('API is running...');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    connectDB();
});
