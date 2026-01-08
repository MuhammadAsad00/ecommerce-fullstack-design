import React, { createContext, useState, useEffect} from 'react'

export const authDataContext = createContext();

const AuthContext = ({ children }) => {
    let serverUrl = "https://ecommerce-fullstack-design-server.vercel.app"
    // 1. Initialize token state from localStorage
    const [token, setToken] = useState(localStorage.getItem('token') || "");

    // 2. Keep localStorage in sync with the token state
    useEffect(() => {
        if (token) {
            localStorage.setItem('token', token);
        }
    }, [token]);

    let value = {
        serverUrl,
        token,
        setToken
    }
  return (
    <authDataContext.Provider value={value}>
      {children}
    </authDataContext.Provider>
  )
}

export default AuthContext
