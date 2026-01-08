import React, { createContext, useState } from 'react'
import { useContext, useEffect } from 'react';
import axios from 'axios';
import { authDataContext } from './AuthContext';

export const adminDataContext = createContext();

const AdminContext = ({ children }) => {
    const [adminData, setAdminData] = useState(null);
    let { serverUrl, token } = useContext(authDataContext);

    const getAdmin = async () => {
        if (!token) return;
        try {
            const result = await axios.get(`${serverUrl}/api/user/getadmin`, {
                headers: { token }, // 3. Pass the token in headers
                withCredentials: true
            });            
            if(result.data.success) {
                setAdminData(result.data);
            }
        } catch (error) {
            setAdminData(null);
            console.log("Error fetching admin data:", error);
        }
    }

    useEffect(() => {
        getAdmin();
    }, [token]);

   let value = {
       adminData,
       setAdminData,
       getAdmin
    }

  return (
      <adminDataContext.Provider value={value} >
        {children}
      </adminDataContext.Provider>
  )
}

export default AdminContext
