import React, { useContext } from "react";
import { ClipboardList, LogOut, User, PackageOpen, ShoppingBag} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { authDataContext } from "../context/AuthContext";
import { adminDataContext } from "../context/AdminContext";
import axios from "axios";

const AdminSidebar = () => {
  let {serverUrl} = useContext(authDataContext);
  let {adminData, getAdmin} = useContext(adminDataContext);
    const navigate = useNavigate();
    const handleLogout = async () => {
       try {
         const result = await axios.get(serverUrl + "/api/auth/adminlogout",{withCredentials: true});
          getAdmin();
          navigate("/login"); 
       } catch (error) {
          console.log("Logout error:", error);
       }
    }
  return (
    <div className="p-6 flex flex-col h-screen bg-gray-100 text-black overflow-hidden">
      <div className="mb-6">
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
      {/* User Circle
      <div className="flex flex-col items-center mb-6">
      <UserCircle size={20} />
      <p className="mt-1 font-semibold">
        {adminData?.role ? adminData.role.toUpperCase() : "Admin"}
      </p>
      <p className="text-sm text-gray-500">
        {adminData?.email || "admin@example.com"}
      </p>
    </div> */}
      {/* <h2 className="text-xl font-medium mb-4 text-center">Admin Dashboard</h2> */}
      <nav className="flex flex-col space-y-2 mt-15">
        <NavLink
          to="/users"
          className={({ isActive }) =>
            isActive
              ? "bg-gray-200 text-blue-500 py-3 px-4 rounded flex items-center space-x-2"
              : "text-black hover:bg-gray-200 hover:text-blue-500 py-3 px-4 rounded flex items-center space-x-2"
          }
        >
            <User size={20}/>
            <span>Users</span>
        </NavLink>
        <NavLink
          to="/adproduct"
          className={({ isActive }) =>
            isActive
             ? "bg-gray-200 text-blue-500 py-3 px-4 rounded flex items-center space-x-2"
              : "text-black hover:bg-gray-200 hover:text-blue-500 py-3 px-4 rounded flex items-center space-x-2"
          }
        >
            <PackageOpen />
            <span>Add Products</span>
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive
              ? "bg-gray-200 text-blue-500 py-3 px-4 rounded flex items-center space-x-2"
              : "text-black hover:bg-gray-200 hover:text-blue-500 py-3 px-4 rounded flex items-center space-x-2"
          }
        >
            <PackageOpen />
            <span>Products</span>
        </NavLink>
        <NavLink
          to="/orders"
          className={({ isActive }) =>
            isActive
              ? "bg-gray-200 text-blue-500 py-3 px-4 rounded flex items-center space-x-2"
              : "text-black hover:bg-gray-200 hover:text-blue-500 py-3 px-4 rounded flex items-center space-x-2"
          }
        >
            <ClipboardList />
            <span>Orders</span>
        </NavLink>
        {/* <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "bg-gray-700 text-yellow-400 py-3 px-4 rounded flex items-center space-x-2"
              : "text-gray-300 hover:bg-gray-700 hover:text-yellow-400 py-3 px-4 rounded flex items-center space-x-2"
          }
        >
            <FaStore />
            <span>Shop</span>
        </NavLink> */}
      </nav>
      <div className="mt-65">
        <button onClick={handleLogout} className="w-full bg-gray-200 hover:bg-gray-300 hover:text-blue-500 transition-all py-2 px-4 rounded flex items-center justify-center space-x-2">
           <LogOut size={20} />
           <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;
