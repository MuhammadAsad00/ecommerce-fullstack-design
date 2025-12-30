import React from "react";
import { User } from "lucide-react";

const UserCard = () => {
    
  return (
    <>
      {/* User Card */}
      <div className="bg-blue-50 rounded-lg p-4">
        <div className="flex items-center gap-3 mb-3">
          <div className="bg-gray-300 rounded-full p-2 text-white">
            <User size={24} />
          </div>
          <div className="text-sm">
            <p>Hi, user</p>
            <p>let's get started</p>
          </div>
        </div>
        <button className="w-full bg-blue-600 text-white text-sm py-1.5 rounded mb-2 hover:bg-blue-700">
          Join now
        </button>
        <button className="w-full bg-white border border-gray-300 text-blue-600 text-sm py-1.5 rounded hover:bg-gray-50">
          Log in
        </button>
      </div>
    </>
  );
};

export default UserCard;
