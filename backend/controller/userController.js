import User from "../models/userModel.js"


export const getCurrentUser = async (req, res) => {
    try {
        const currentUser = await User.findById(req.userId).select("-password -__v");
        if(!currentUser){
            return res.json({success: false, message: "User not found"});
        }
        res.status(200).json({ success: true, user: currentUser });
    } catch (error) {
         console.log(error);
        return res.json({success: false, message: "getuser error" });
    }
}

export const getAdmin = async (req, res) => {
    try {
        // 1. Retrieve the decoded data attached by adminAuth middleware
        const adminData = req.admin; 

        // 2. Check if data exists (Security double-check)
        if (!adminData) {
            return res.status(401).json({ success: false, message: "Admin session not found" });
        }

        // 3. Return success and the data
        // Using 200 OK for a successful GET request
        return res.status(200).json({ 
            success: true, 
            data: {
                email: adminData.email, 
                role: adminData.role 
            }
        });

    } catch (error) {
        console.error("GetAdmin Controller Error:", error);
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
};