import React, { useContext, useState } from "react";
import { LogOut, User } from "lucide-react";
import { userDataContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

const UserCard = () => {
  const { userData, setUserData} = useContext(userDataContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUserData(null);
  }
  return (
    <>
      {/* User Card */}
      <div className="bg-blue-50 rounded-lg p-4">
        <div className="flex items-center gap-3 mb-3">
          <div className="bg-gray-300 rounded-full p-2 text-white">
            <User size={24} />
          </div>
          <div className="text-sm">
            <p>Hi, {userData ? userData.name : "user"}</p>
            <p>{userData ? "Welcome back!" : "let's get started"}</p>
          </div>
        </div>
        {userData ? (
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 bg-red-50 border border-red-200 text-red-600 text-sm py-1.5 rounded hover:bg-red-100 transition-colors"
          >
            <LogOut size={16} />
            Log out
          </button>
        ) : (
          <>
            <button onClick={() => navigate('/login')} className="w-full bg-blue-600 text-white text-sm py-1.5 rounded mb-2 hover:bg-blue-700">
              Join now
            </button>
            <button onClick={() => navigate('/login')} className="w-full bg-white border border-gray-300 text-blue-600 text-sm py-1.5 rounded hover:bg-gray-50">
              Log in
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default UserCard;
