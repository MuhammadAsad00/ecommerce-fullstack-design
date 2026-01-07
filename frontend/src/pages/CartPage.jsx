import React, { useContext, useEffect, useState } from "react";
import { ArrowLeft, ShieldCheck, MessageSquare, Truck } from "lucide-react";
import { useNavigate } from "react-router-dom";
// Import both contexts
import { shopDataContext } from "../context/ShopContext"; 
import { cartDataContext } from "../context/CartContext";
import axios from "axios";
import toast from "react-hot-toast";

// Payment Icons
import visa from "../assets/Image/paymints/visa.png";
import mastercard from "../assets/Image/paymints/mastercard.png";
import paypal from "../assets/Image/paymints/paypal.png";
import applepay from "../assets/Image/paymints/applepay.png";

const CartPage = () => {
  const navigate = useNavigate();
  
  // Get products from ShopContext, and cart logic from CartContext
  const { products, serverUrl } = useContext(shopDataContext);
  const { cartData, setCartData, fetchUserCart } = useContext(cartDataContext);
  
  const [displayItems, setDisplayItems] = useState([]);

  useEffect(() => {
    fetchUserCart();
  }, []);

  // 1. MAP DATA: Convert {id: qty} into full product objects for the UI
  useEffect(() => {
    if (products.length > 0) {
      const tempItems = [];
      for (const itemId in cartData) {
        if (cartData[itemId] > 0) {
          const productData = products.find((p) => p._id === itemId);
          if (productData) {
            tempItems.push({
              ...productData,
              qty: cartData[itemId],
            });
          }
        }
      }
      setDisplayItems(tempItems);
    }
  }, [cartData, products]);

  // 2. UPDATE QUANTITY (Cookie Based)
  const updateQty = async (itemId, quantity) => {
    if (quantity < 1) return;
    try {
      const response = await axios.post(
        `${serverUrl}/api/cart/update`,
        { itemId, quantity },
        { withCredentials: true } // Use cookies instead of token
      );
      if (response.data.success) {
        // Update local context state so Navbar badge and Cart page update instantly
        setCartData((prev) => ({ ...prev, [itemId]: quantity }));
      }
    } catch (error) {
      toast.error("Login required to update cart");
      navigate('/login');
    }
  };

  // 3. REMOVE ITEM (Cookie Based)
  const removeItem = async (itemId) => {
    try {
      const response = await axios.post(
        `${serverUrl}/api/cart/update`,
        { itemId, quantity: 0 },
        { withCredentials: true }
      );
      if (response.data.success) {
        // Remove from local context state
        setCartData((prev) => {
          const newData = { ...prev };
          delete newData[itemId];
          return newData;
        });
        toast.success("Item removed");
      }
    } catch (error) {
      toast.error("Error removing item");
    }
  };

  // 4. CALCULATE TOTALS
  const subtotal = displayItems.reduce((acc, item) => acc + item.price * item.qty, 0);
  const tax = subtotal * 0.05;
  const total = subtotal + tax;

  return (
    <div className="bg-[#f7f7f7] min-h-screen pb-10 font-sans">
      {/* MOBILE HEADER */}
      <div className="md:hidden bg-white p-4 flex items-center gap-4 border-b sticky top-0 z-50">
        <button onClick={() => navigate(-1)}><ArrowLeft size={24} /></button>
        <h1 className="text-lg font-semibold">Shopping cart</h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-6">
        <h2 className="hidden md:block text-2xl font-bold mb-6">My cart ({displayItems.length})</h2>

        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1">
            <div className="bg-white border border-gray-200 rounded-lg p-4 md:p-6 shadow-sm">
              {displayItems.length === 0 ? (
                <div className="text-center py-20">
                  <p className="text-gray-500 mb-4">Your cart is empty</p>
                  <button onClick={() => navigate("/")} className="text-blue-600 font-medium hover:underline cursor-pointer">Start Shopping</button>
                </div>
              ) : (
                displayItems.map((item, index) => (
                  <div key={item._id} className={`flex flex-col md:flex-row gap-4 py-4 ${index !== 0 ? "border-t border-gray-100" : ""}`}>
                    {/* Product Image */}
                    <div className="w-20 h-20 md:w-24 md:h-24 border rounded-md p-2 shrink-0 bg-gray-50">
                      <img src={`${serverUrl}/uploads/${item.image}`} alt={item.name} className="w-full h-full object-contain" />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h3 className="text-gray-800 font-medium text-sm md:text-base line-clamp-2">{item.name}</h3>
                        <span className="font-bold text-gray-900 hidden md:block">${(item.price * item.qty).toFixed(2)}</span>
                      </div>
                      <p className="text-gray-400 text-xs mt-1 capitalize">Category: {item.category} <br /> Seller: Arid Market</p>

                      <div className="flex items-center gap-2 mt-3">
                        <button onClick={() => removeItem(item._id)} className="text-red-500 border border-gray-200 px-3 py-1 rounded text-xs font-medium hover:bg-red-50 transition-colors">Remove</button>
                      </div>
                    </div>

                    {/* Price (Mobile) and Qty Control */}
                    <div className="flex items-center justify-between md:flex-col md:items-end gap-4">
                      <div className="md:hidden font-bold">${(item.price * item.qty).toFixed(2)}</div>
                      <div className="flex items-center gap-2 border border-gray-200 rounded px-2 py-1">
                        <button onClick={() => updateQty(item._id, item.qty - 1)} className="text-lg px-2 text-gray-400 hover:text-black transition-colors">−</button>
                        <span className="w-6 text-center text-sm font-bold">{item.qty}</span>
                        <button onClick={() => updateQty(item._id, item.qty + 1)} className="text-lg px-2 text-gray-400 hover:text-black transition-colors">+</button>
                      </div>
                    </div>
                  </div>
                ))
              )}

              <div className="flex justify-between mt-6 pt-6 border-t border-gray-100">
                <button onClick={() => navigate("/")} className="bg-blue-600 text-white px-6 py-2 rounded-md flex items-center gap-2 text-sm font-medium hover:bg-blue-700 transition-colors">
                  <ArrowLeft size={16} /> Back to shop
                </button>
                {displayItems.length > 0 && (
                   <button className="text-blue-600 border border-gray-200 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors">Remove all</button>
                )}
              </div>
            </div>

            <div className="hidden md:flex gap-8 mt-6">
              <Feature icon={<ShieldCheck size={20} />} text="Secure payment" />
              <Feature icon={<MessageSquare size={20} />} text="Customer support" />
              <Feature icon={<Truck size={20} />} text="Free delivery" />
            </div>
          </div>

          {/* SUMMARY PANEL */}
          <div className="w-full lg:w-80">
            <div className="bg-white border border-gray-200 rounded-lg p-4 mb-4 shadow-sm">
              <p className="text-sm text-gray-600 mb-2 font-medium">Have a coupon?</p>
              <div className="flex border rounded-md overflow-hidden focus-within:ring-1 focus-within:ring-blue-500">
                <input type="text" placeholder="Add coupon" className="flex-1 px-3 py-2 outline-none text-sm" />
                <button className="bg-white border-l text-blue-600 px-4 py-2 text-sm font-bold hover:bg-gray-50 transition-colors">Apply</button>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm sticky top-6">
              <div className="space-y-3 text-gray-600 text-sm pb-4 border-b">
                <div className="flex justify-between"><span>Subtotal:</span> <span className="text-gray-900 font-medium">${subtotal.toFixed(2)}</span></div>
                <div className="flex justify-between"><span>Tax (5%):</span> <span className="text-green-500 font-medium">+${tax.toFixed(2)}</span></div>
              </div>
              <div className="flex justify-between font-bold text-lg py-4 text-gray-900">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <button className="w-full bg-green-600 text-white py-3 rounded-lg font-bold text-lg hover:bg-green-700 transition-all shadow-md active:scale-[0.98]">
                Checkout
              </button>

              <div className="flex justify-center gap-2 mt-4">
                <PaymentIcon src={visa} alt="Visa" />
                <PaymentIcon src={mastercard} alt="Mastercard" />
                <PaymentIcon src={paypal} alt="Paypal" />
                <PaymentIcon src={applepay} alt="Applepay" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Sub-components
const Feature = ({ icon, text }) => (
  <div className="flex items-center gap-3 text-sm text-gray-500">
    <div className="bg-gray-200 p-2 rounded-full text-gray-700">{icon}</div>
    <span>{text}</span>
  </div>
);

const PaymentIcon = ({ src, alt }) => (
  <div className="w-10 h-6 border border-gray-200 rounded bg-white flex items-center justify-center p-1 shadow-sm">
    <img src={src} alt={alt} className="max-h-full object-contain" />
  </div>
);

export default CartPage;