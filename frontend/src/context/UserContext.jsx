import { createContext, useContext, useState } from "react";
import { authDataContext } from "./AuthContext";
import { useEffect } from "react";
import axios from "axios";

export const userDataContext = createContext();

const UserContext = ({children}) => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true); 
    const { serverUrl } = useContext(authDataContext);

    const getCurrentUser = async () => {
        try {
            const result = await axios.get(serverUrl + "/api/user/getcurrentuser", {
                withCredentials: true
            });
            if (result.data.success) {
                setUserData(result.data.user); 
            } else {
                setUserData(null);
            }
        } catch (error) {
            setUserData(null);
        } finally {
            setLoading(false); 
        }
    }

    useEffect(() => {
        getCurrentUser();
    }, []);

    const value = { userData, setUserData, getCurrentUser, loading };


  return <>
      <userDataContext.Provider value={value}>
        {children}
      </userDataContext.Provider>
  </>;
};

export default UserContext;
