import Order from "../models/orderModel.js";

export const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find({}).populate('userId', 'name email role').sort({ createdAt: -1 });

        res.status(200).json({ 
            success: true, 
            count: orders.length, 
            data: orders 
        });
        
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};