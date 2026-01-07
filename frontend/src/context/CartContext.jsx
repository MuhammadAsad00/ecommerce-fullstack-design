import { createContext, useContext, useState, useEffect } from "react";
import { authDataContext } from "./AuthContext";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const cartDataContext = createContext();

const CartContext = ({ children }) => {
  const navigate = useNavigate();
  const { serverUrl } = useContext(authDataContext);
  
  // Local state to store cart items and their quantities
  const [cartData, setCartData] = useState({});

  // 1. Fetch Cart from Database (Sync on Load)
  const fetchUserCart = async () => {
    try {
      const response = await axios.get(`${serverUrl}/api/cart/get`, {
      withCredentials: true,
});
      if (response.data.success) {
        setCartData(response.data.cartData);
      }
    } catch (error) {
      console.error("Error fetching cart:", error);
    }
  };

  // Run fetchUserCart when the component mounts
  useEffect(() => {
    fetchUserCart();
  }, [serverUrl]);

  // 2. Add product to cart
  const addToCart = async (itemId) => {
    try {
      const response = await axios.post(
  `${serverUrl}/api/cart/add`,
  { itemId },
  { withCredentials: true }
);
      if (response.data.success) {
        toast.success(response.data.message);

        // UPDATE LOCAL STATE IMMEDIATELY (Optimistic UI)
        // This makes the Navbar badge update without a page refresh
        setCartData((prev) => {
          const newData = { ...prev };
          if (newData[itemId]) {
            newData[itemId] += 1;
          } else {
            newData[itemId] = 1;
          }
          return newData;
        });
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
  console.error(error);
  
  if (error.response?.status === 401) {
    toast.error("Session expired. Please login again.");
    navigate('/login');
  } else {
    toast.error("Server error. Please try again later.");
  }
    }
  }

  // 3. Calculate total count for the badge
  const getCartCount = () => {
    let totalCount = 0;
    for (const itemId in cartData) {
      if (cartData[itemId] > 0) {
        totalCount += cartData[itemId];
      }
    }
    return totalCount;
  };

  const value = {
    cartData,
    setCartData,
    addToCart,
    getCartCount,
    fetchUserCart 
  };

  return (
    <cartDataContext.Provider value={value}>
      {children}
    </cartDataContext.Provider>
  );
};

export default CartContext;