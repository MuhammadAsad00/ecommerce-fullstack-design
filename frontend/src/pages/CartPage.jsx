import React, { useState } from "react";
import { ArrowLeft, ShieldCheck, MessageSquare, Truck, ShoppingCart} from "lucide-react";
import { useNavigate } from "react-router-dom";
import visa from "../assets/Image/paymints/visa.png";
import mastercard from "../assets/Image/paymints/mastercard.png";
import paypal from "../assets/Image/paymints/paypal.png";
import applepay from "../assets/Image/paymints/applepay.png";
import cloth1 from "../assets/Image/cloth/1.jpg";
import cloth2 from "../assets/Image/cloth/2.jpg";
import cloth3 from "../assets/Image/cloth/3.jpg";
import cloth4 from "../assets/Image/cloth/4.jpg";
import cloth5 from "../assets/Image/cloth/5.jpg";
import cloth6 from "../assets/Image/cloth/6.jpg";
import cloth7 from "../assets/Image/cloth/7.jpg";
const CartPage = () => {
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "T-shirts with multiple colors, for men and lady",
      size: "medium",
      color: "blue",
      material: "Plastic",
      seller: "Arid Market",
      price: 78.99,
      qty: 1,
      image: cloth1,
    },
    {
      id: 2,
      title: "T-shirts with multiple colors, for men and lady",
      size: "medium",
      color: "blue",
      material: "Plastic",
      seller: "Arid Market",
      price: 79.99,
      qty: 1,
      image: cloth2,
    },
    {
      id: 3,
      title: "T-shirts with multiple colors, for men and lady",
      size: "medium",
      color: "blue",
      material: "Plastic",
      seller: "Arid Market",
      price: 79.9,
      qty: 1,
      image: cloth3,
    },
  ]);

  return (
    <div className="bg-[#f7f7f7] min-h-screen pb-10">
      {/* MOBILE HEADER */}
      <div className="md:hidden bg-white p-4 flex items-center gap-4 border-b border-gray-200 sticky top-0 z-50">
        <button onClick={() => navigate('/')}>
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-lg font-semibold">Shopping cart</h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-6">
        <h2 className="hidden md:block text-2xl font-bold mb-6">My cart (3)</h2>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* LEFT SIDE: ITEMS LIST */}
          <div className="flex-1">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden p-4 md:p-6">
              {cartItems.map((item, index) => (
                <div
                  key={item.id}
                  className={`flex flex-col md:flex-row gap-4 py-4 ${
                    index !== 0 ? "border-t border-gray-100" : ""
                  }`}
                >
                  {/* Image */}
                  <div className="w-20 h-20 md:w-24 md:h-24 border border-gray-200 rounded-md p-2 shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h3 className="text-gray-800 font-medium text-sm md:text-base">
                        {item.title}
                      </h3>
                      <span className="font-bold text-gray-900 hidden md:block">
                        ${item.price}
                      </span>
                    </div>
                    <p className="text-gray-400 text-xs md:text-sm mt-1">
                      Size: {item.size}, Color: {item.color}, Material:{" "}
                      {item.material} <br />
                      Seller: {item.seller}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-2 mt-3">
                      <button className="text-red-500 border border-gray-200 px-3 py-1 rounded text-xs font-medium hover:bg-red-50">
                        Remove
                      </button>
                      <button className="text-blue-600 border border-gray-200 px-3 py-1 rounded text-xs font-medium hover:bg-blue-50">
                        Save for later
                      </button>
                    </div>
                  </div>

                  {/* Quantity & Price (Mobile) */}
                  <div className="flex items-center justify-between md:flex-col md:items-end md:justify-start gap-4">
                    <div className="md:hidden font-bold">${item.price}</div>

                    {/* Quantity Control */}
                    <div className="flex items-center gap-2 border border-gray-200 rounded px-2 py-1">
                      <button
                        onClick={() =>
                          setCartItems((prev) =>
                            prev.map((p) =>
                              p.id === item.id
                                ? { ...p, qty: Math.max(1, p.qty - 1) }
                                : p
                            )
                          )
                        }
                        className="text-lg px-1 text-gray-600 hover:text-black"
                      >
                        −
                      </button>

                      <span className="w-6 text-center text-sm font-medium">
                        {item.qty}
                      </span>

                      <button
                        onClick={() =>
                          setCartItems((prev) =>
                            prev.map((p) =>
                              p.id === item.id ? { ...p, qty: p.qty + 1 } : p
                            )
                          )
                        }
                        className="text-lg px-1 text-gray-600 hover:text-black"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {/* Back & Remove Buttons */}
              <div className="flex justify-between mt-6 pt-6 border-t border-gray-100">
                <button
                  onClick={() => navigate("/products")}
                  className="bg-blue-600 text-white px-6 py-2 rounded-md flex items-center gap-2 text-sm font-medium"
                >
                  <ArrowLeft size={16} /> Back to shop
                </button>
                <button className="text-blue-600 border border-gray-200 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-50">
                  Remove all
                </button>
              </div>
            </div>

            {/* FEATURES (Visible on Desktop) */}
            <div className="hidden md:flex gap-8 mt-6">
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <div className="bg-gray-200 p-2 rounded-full">
                  <ShieldCheck size={20} />
                </div>
                <span>Secure payment</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <div className="bg-gray-200 p-2 rounded-full">
                  <MessageSquare size={20} />
                </div>
                <span>Customer support</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <div className="bg-gray-200 p-2 rounded-full">
                  <Truck size={20} />
                </div>
                <span>Free delivery</span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: SUMMARY */}
          <div className="w-full lg:w-80">
            {/* Coupon */}
            <div className="bg-white border border-gray-200 rounded-lg p-4 mb-4">
              <p className="text-sm text-gray-600 mb-2">Have a coupon?</p>
              <div className="flex border border-gray-200 rounded-md overflow-hidden">
                <input
                  type="text"
                  placeholder="Add coupon"
                  className="flex-1 px-3 py-2 outline-none text-sm"
                />
                <button className="bg-white border-l border-gray-200 text-blue-600 px-4 py-2 text-sm font-medium">
                  Apply
                </button>
              </div>
            </div>

            {/* Calculation */}
            <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
              <div className="space-y-3 text-gray-600 text-sm pb-4 border-b border-gray-100">
                <div className="flex justify-between">
                  <span>Subtotal:</span> <span>$1403.97</span>
                </div>
                <div className="flex justify-between">
                  <span>Discount:</span>{" "}
                  <span className="text-red-500">-$60.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax:</span>{" "}
                  <span className="text-green-500">+$14.00</span>
                </div>
              </div>
              <div className="flex justify-between font-bold text-lg py-4">
                <span>Total:</span>
                <span>$1357.97</span>
              </div>
              <button className="w-full bg-green-600 text-white py-3 rounded-lg font-bold text-lg hover:bg-green-700 transition-colors">
                Checkout
              </button>

              {/* Payment Methods */}
              <div className="flex justify-center gap-2 mt-4">
                <div className="w-10 h-6 border border-gray-200 rounded bg-gray-100 flex items-center justify-center">
                  <img
                    src={visa}
                    alt="Visa"
                    className="max-h-full object-contain"
                  />
                </div>

                <div className="w-10 h-6 border border-gray-200 rounded bg-gray-100 flex items-center justify-center">
                  <img
                    src={mastercard}
                    alt="Mastercard"
                    className="max-h-full object-contain"
                  />
                </div>

                <div className="w-10 h-6 border border-gray-200 rounded bg-gray-100 flex items-center justify-center">
                  <img
                    src={paypal}
                    alt="PayPal"
                    className="max-h-full object-contain"
                  />
                </div>

                <div className="w-10 h-6 border border-gray-200 rounded bg-gray-100 flex items-center justify-center">
                  <img
                    src={applepay}
                    alt="Apple Pay"
                    className="max-h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SAVED FOR LATER SECTION */}
        <div className="mt-10">
          <h3 className="text-xl font-bold mb-4">Saved for later</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((id) => (
              <div
                key={id}
                className="bg-white border border-gray-200 rounded-lg p-4"
              >
                <div className="aspect-square rounded-md mb-4 flex items-center justify-center p-4">
                  <img
                    src={eval(`cloth${id}`)}
                    alt="Saved"
                    className="max-h-full object-contain"
                  />
                </div>
                <p className="font-bold text-lg mb-1">$57.70</p>
                <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                  Regular Fit Resort Shirt in Cotton Blue
                </p>
                <button className="w-full border border-gray-200 text-blue-600 py-2 rounded-md font-medium text-sm flex items-center justify-center gap-2">
                  <ShoppingCart size={16} /> Move to cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
