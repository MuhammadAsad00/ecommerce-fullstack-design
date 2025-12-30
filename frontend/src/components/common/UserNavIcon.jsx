import { useState, useRef, useEffect, useContext } from "react";
import { User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { userDataContext } from "../../context/UserContext";
import { authDataContext } from "../../context/AuthContext";
import axios from "axios";
import toast from "react-hot-toast";

const UserNavIcon = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const navigate = useNavigate();
  const { getCurrentUser, userData } = useContext(userDataContext);
  const { serverUrl } = useContext(authDataContext);

  // close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = async () => {
    try {
      const result = await axios.get(serverUrl + "/api/auth/logout", {
        withCredentials: true,
      });
      if (result.data.success) {
        toast.success("Logged out successfully");
        await getCurrentUser();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    
    <div className="relative" ref={ref}>
    {/* If userData is null, show the Guest Icon */}
    {!userData ? (
      <>
       <div
        onClick={() => setOpen(!open)}
        className="flex flex-col items-center justify-center cursor-pointer group px-2"
      >
        <div className="text-gray-900 group-hover:text-blue-600">
          <User size={20} />
        </div>
        <span className="hidden sm:inline-block text-[11px] sm:text-xs text-gray-500 mt-1 group-hover:text-blue-600">
          Profile
        </span>
      </div>
      </>
    ) : (
      <>
       <div
        onClick={() => setOpen(!open)}
        className="flex flex-col items-center justify-center cursor-pointer group px-2"
      >
        <div className="text-gray-900 group-hover:text-blue-600">
          <User size={20} />
        </div>
        <span className="hidden sm:inline-block text-[11px] sm:text-xs text-gray-500 mt-1 group-hover:text-blue-600">
          Profile
        </span>
      </div>
      </>
    )}

    {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded shadow-lg py-2 z-50 flex flex-col text-gray-700">
            <span className="px-4 py-2 font-semibold border-b border-gray-200">
                {/* Fallback to Guest if name is missing */}
                Welcome, {userData?.name || "Guest"}
            </span>
            
            {!userData ? (
                <button className="text-left px-4 py-2 hover:bg-gray-100" onClick={() => navigate('/login')}>
                    Login
                </button>
            ) : (
                <button className="text-left px-4 py-2 hover:bg-gray-100" onClick={handleLogout}>
                    Logout
                </button>
            )}
        </div>
    )}
</div>
    </>
  );
};

export default UserNavIcon;
