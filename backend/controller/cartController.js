import User from "../models/userModel.js"; 

// Add product to user cart
export const addToCart = async (req, res) => {
    try {

        const userId = req.userId;
        const { itemId } = req.body;

        // 1. Fetch user
        const userData = await User.findById(userId);

        // 2. CHECK: If userData is null, stop here!
        if (!userData) {
            return res.status(404).json({ 
                success: false, 
                message: "User not found. Please log out and log in again." 
            });
        }

        // 3. Logic proceeds only if userData exists
        let cartData = userData.cartData || {};

        if (cartData[itemId]) {
            cartData[itemId] += 1;
        } else {
            cartData[itemId] = 1;
        }

        await User.findByIdAndUpdate(userId, { cartData });
        res.json({ success: true, message: "Product Added to cart" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error.message });
    }
};

// Update user cart (for quantity changes)
export const updateCart = async (req, res) => {
    try {
        const userId = req.userId; // From your isAuth middleware
        const { itemId, quantity } = req.body;

        if (quantity <= 0) {
            // REMOVE the item from the object entirely
            await User.findByIdAndUpdate(userId, {
                $unset: { [`cartData.${itemId}`]: "" }
            });
        } else {
            // UPDATE the quantity
            await User.findByIdAndUpdate(userId, {
                $set: { [`cartData.${itemId}`]: quantity }
            });
        }

        res.json({ success: true, message: "Cart updated" });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Get user cart data
export const getUserCart = async (req, res) => {
    try {
        const userId = req.userId;
        const userData = await User.findById(userId);
        let cartData = await userData.cartData;

        res.json({ success: true, cartData });
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: error.message });
    }
};