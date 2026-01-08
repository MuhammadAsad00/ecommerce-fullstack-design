import { useContext, useState } from 'react';
import { authDataContext } from '../context/AuthContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { adminDataContext } from '../context/AdminContext';
import { toast } from 'react-hot-toast';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] =useState("");
  let { serverUrl } = useContext(authDataContext);
  let {adminData, getAdmin} = useContext(adminDataContext);
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const result = await axios.post(serverUrl + "/api/auth/adminlogin",{ email, password },{withCredentials: true});
        if(result.data.success) {
            // 1. Save token immediately so App.jsx can see it
            localStorage.setItem('token', result.data.token);
            toast.success(result.data.message);
            await getAdmin();
            navigate("/");
        } else {
            toast.error(result.data.message);
        }
    } catch (error) {
        console.log(error);
        toast.error("Invalid credential");
    }
  };

  return (
     // Login form
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 m-auto mt-25 items-start p-8 py-12 w-80 sm:w-88 text-gray-500 rounded-lg shadow-xl border border-gray-200 bg-white">
            <p className="text-2xl font-medium m-auto">
                <span className="text-indigo-500">Admin</span> Login
            </p>
            <div className="w-full ">
                <p>Email</p>
                <input onChange={(e) => setEmail(e.target.value)} value={email} placeholder="email" className="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500" type="email" required />
            </div>
            <div className="w-full ">
                <p>Password</p>
                <input onChange={(e) => setPassword(e.target.value)} value={password} placeholder="password" className="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500" type="password" required />
            </div>
            <button className="bg-indigo-500 hover:bg-indigo-600 transition-all text-white w-full py-2 rounded-md cursor-pointer">
              Login
            </button>
        </form>
  )
}

export default Login
