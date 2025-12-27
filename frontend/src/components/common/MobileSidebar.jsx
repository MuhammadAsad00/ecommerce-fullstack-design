import React from "react";
import { 
  X, Home, List, Heart, Package, Globe, Headset, Info, UserCircle 
} from "lucide-react";
import { NavLink } from "react-router-dom";
import useravtar from "../../assets/Image/useravtar/Avatar.png";


const MobileSidebar = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Dark Overlay/Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/50 z-60 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Sidebar Panel */}
      <div className={`fixed top-0 left-0 h-full w-70 bg-white z-70 transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}>
        
        {/* Profile Header Section */}
        <div className="bg-gray-100 p-5 relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500"
          >
            <X size={24} />
          </button>
          
          <div className="flex flex-col gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-300">
              <img src={useravtar} alt="user avtar" className="w-full h-full object-cover" onError={(e) => {e.target.src = "https://via.placeholder.com/48"}}/>
            </div>
            <div className="text-gray-800 font-medium">
              <span>Sign in</span>
              <span className="mx-2 text-gray-400">|</span>
              <span>Register</span>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="py-4 flex flex-col">
          {/* Section 1 */}
          <div className="px-2 flex flex-col gap-1">
            <MenuLink icon={<Home size={20}/>} label="Home" to="/" onClick={onClose} />
            <MenuLink icon={<List size={20}/>} label="Categories" to="/categories" onClick={onClose} />
            <MenuLink icon={<Heart size={20}/>} label="Favorites" to="/favorites" onClick={onClose} />
            <MenuLink icon={<Package size={20}/>} label="My orders" to="/orders" onClick={onClose} />
          </div>

          <hr className="my-4 border-gray-100" />

          {/* Section 2 */}
          <div className="px-2 flex flex-col gap-1">
            <MenuLink icon={<Globe size={20}/>} label="English | USD" to="#" onClick={onClose} />
            <MenuLink icon={<Headset size={20}/>} label="Contact us" to="/contact" onClick={onClose} />
            <MenuLink icon={<Info size={20}/>} label="About" to="/about" onClick={onClose} />
          </div>

          <hr className="my-4 border-gray-100" />

          {/* Section 3 - Policy Links */}
          <div className="px-5 flex flex-col gap-4 text-gray-700 text-[15px]">
            <NavLink to="/user-agreement" onClick={onClose}>User agreement</NavLink>
            <NavLink to="/partnership" onClick={onClose}>Partnership</NavLink>
            <NavLink to="/privacy-policy" onClick={onClose}>Privacy policy</NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

// Helper component for menu items
const MenuLink = ({ icon, label, to, onClick }) => (
  <NavLink 
    to={to} 
    onClick={onClick}
    className="flex items-center gap-4 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
  >
    <span className="text-gray-400">{icon}</span>
    <span className="text-[15px] font-medium">{label}</span>
  </NavLink>
);

export default MobileSidebar;