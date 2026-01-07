import jwt from 'jsonwebtoken';

export const genToken = (userId) => {
    try {
        const token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '7d' });
        return token;
    } catch (error) {
        console.log("Token generation failed:", error);
        return null;
    }
};

export const adminToken = (email) => {
    try {
        const token = jwt.sign({email, role: "admin"}, process.env.JWT_SECRET,{expiresIn: '7d'});
        return token;
    } catch (error) {
        console.error("Token failed",error);
    }
};