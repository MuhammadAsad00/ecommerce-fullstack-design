import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  ShoppingBag,
  Search,
  User,
  MessageSquare,
  Heart,
  ShoppingCart,
  Menu,
  ChevronDown,
  X,
} from "lucide-react";
import NavIcon from "./NavIcon";
import flag from "../../assets/Image/country/11.png";
import MobileSidebar from "./MobileSidebar";
import UserNavIcon from "./UserNavIcon";

const Navbar = () => {
  const location = useLocation();
  const isProductsPage = location.pathname === "/products" || location.pathname.startsWith("/products/") || location.pathname === "/cart";
  const isCartPage = location.pathname === "/cart";
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Sidebar component */}
      <MobileSidebar
        isOpen={isMobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
      {/* ================= HEADER / NAVBAR ================= */}
      <header
        className={`bg-white border-b border-gray-200 sticky top-0 z-50 ${
          isProductsPage ? "hidden md:block" : "block"
        }`}
      >
        {/* Desktop Top Row / Mobile Main Header */}
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-16 lg:h-20 gap-4">
            {/* Left: Brand & Mobile Menu (Hidden on mobile products page) */}
            <div className="flex items-center gap-3">
              <button
                className="lg:hidden p-1"
                onClick={() => setMobileMenuOpen(true)}
              >
                <Menu size={24} className="text-gray-700" />
              </button>
              <div className="flex items-center gap-2">
                <div className="bg-blue-600 p-1.5 rounded text-white">
                  <ShoppingBag size={20} />
                </div>
                <NavLink
                  to="/"
                  className="text-xl lg:text-2xl font-bold text-blue-400 tracking-tight"
                >
                  Brand
                </NavLink>
              </div>
            </div>

            {/* Center: Search Bar (Hidden on mobile, visible on md+) */}
            {!isCartPage && (
            <div className="hidden md:flex grow max-w-2xl items-center">
              <div className="flex w-full border-2 border-blue-600 rounded-lg overflow-hidden">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full px-4 py-2 outline-none text-gray-600"
                />
                <div className="relative border-l border-gray-200 bg-white px-4 flex items-center cursor-pointer hover:bg-gray-50">
                  <span className="text-gray-700 text-sm whitespace-nowrap">
                    All category
                  </span>
                  <ChevronDown className="w-4 h-4 ml-2 text-gray-500" />
                </div>
                <button className="bg-blue-600 px-6 py-2 text-white font-medium hover:bg-blue-700 transition-colors">
                  Search
                </button>
              </div>
            </div>
            )}

            {/* Right: Actions */}
            <div className="flex items-center gap-4 lg:gap-6">
              <UserNavIcon/>
              <NavIcon icon={<ShoppingCart size={20} />} label="My cart" to="/cart" />
              <div className="hidden lg:flex">
                <NavIcon icon={<MessageSquare size={20} />} label="Message" />
              </div>
              <div className="hidden lg:flex">
                <NavIcon icon={<Heart size={20} />} label="Orders" />
              </div>
            </div>
          </div>

          {/* Mobile Search Bar */}
          {!isProductsPage &&(
            <div className="lg:hidden pb-3">
              <div className="relative">
                <Search
                  className="absolute left-3 top-2.5 text-gray-400"
                  size={18}
                />
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full bg-gray-100 border-none rounded-md py-2 pl-10 pr-4 focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>
          )}
        </div>

        {/* Desktop Bottom Nav - Always visible on desktop */}
        {!isCartPage && (
        <div className="hidden lg:block border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-6 h-12 flex items-center justify-between text-sm">
            {/* ... (Keep your existing Desktop Menu code here) */}
            <div className="flex items-center gap-6 font-medium text-gray-700">
              <div className="flex items-center gap-2 cursor-pointer hover:text-blue-600">
                <Menu size={18} />
                <span>All category</span>
              </div>
              <NavLink
                to="/hot-offers"
                className={({ isActive }) =>
                  `hover:text-blue-600 ${isActive ? "text-blue-600" : ""}`
                }
              >
                Hot offers
              </NavLink>
              <NavLink
                to="/gift-boxes"
                className={({ isActive }) =>
                  `hover:text-blue-600 ${isActive ? "text-blue-600" : ""}`
                }
              >
                Gift boxes
              </NavLink>
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  `hover:text-blue-600 ${isActive ? "text-blue-600" : ""}`
                }
              >
                Products
              </NavLink>
              <div className="flex items-center gap-1 cursor-pointer hover:text-blue-600">
                <span>Help</span>
                <ChevronDown size={14} />
              </div>
            </div>
            {/* Right Menu */}
            <div className="flex items-center gap-6 text-gray-600">
              <span>
                English, USD <ChevronDown size={14} className="inline" />
              </span>
              <div className="flex items-center gap-2">
                <span>Ship to</span>
                <img src={flag} alt="flag" className="w-5 h-3 object-cover" />
                <ChevronDown size={14} />
              </div>
            </div>
          </div>
        </div>
        )}

        {/* Mobile Category Pills - Hidden if on Products Page to prevent doubles */}
        {!isProductsPage &&(
          <div className="lg:hidden flex gap-2 overflow-x-auto px-4 py-2 no-scrollbar border-t border-gray-100 bg-white">
            {["All category", "Gadgets", "Clothes", "Accessories", "Home"].map(
              (cat, i) => (
                <button
                  key={i}
                  className={`whitespace-nowrap px-4 py-1.5 rounded-full text-sm ${
                    i === 0
                      ? "bg-blue-100 text-blue-600 font-medium"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {cat}
                </button>
              )
            )}
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
