import { createContext, useContext, useState, useEffect} from "react";
import { authDataContext } from "./AuthContext";
import axios from "axios";
import toast from "react-hot-toast";

export const shopDataContext = createContext();

const ShopContext = ({children}) => {
  // State for products and loading status
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { serverUrl } = useContext(authDataContext);
    
    // Fetch all product
    const getProduct = async () => {
      setLoading(true)
      try {
        const response = await axios.get(`${serverUrl}/api/product/list`, { withCredentials: true})
        if(response.data.success) {
          setProducts(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        toast.error("Failed to load products");
    } finally {
      setLoading(false);
    }
    }

    // Fetch products automatically when the app loads
  useEffect(() => {
    if (serverUrl) {
      getProduct();
    }
  }, [serverUrl]);

    // Fetch filtered products (using backend filterProduct API)
   const filterProduct = async (filters) => {
    if (!serverUrl) return;
    setLoading(true);
    try {
      // For GET requests, query parameters must be inside the 'params' property
      const response = await axios.get(`${serverUrl}/api/product/filter`, {
        params: filters, 
        withCredentials: true
      });

      if (response.data.success) {
        // MATCHING YOUR BACKEND: your controller sends { success: true, products: [...] }
        setProducts(response.data.products || []);
      }
    } catch (error) {
      console.error("Filtering error:", error);
      setProducts([]); // Clear UI on error
      toast.error("Filter request failed");
    } finally {
      setLoading(false);
    }
  };

    // Data to be shared across the app
  const value = {
    products,
    setProducts,
    loading,
    getProduct,
    serverUrl,
    filterProduct,
  };

  return (
    <>
      <shopDataContext.Provider value={value}>
        {children}
      </shopDataContext.Provider>
    </>
  )
}

export default ShopContext