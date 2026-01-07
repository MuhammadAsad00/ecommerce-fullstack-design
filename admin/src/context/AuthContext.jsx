import React, { createContext } from 'react'

export const authDataContext = createContext();

const AuthContext = ({ children }) => {
    let serverUrl = "https://ecommerce-fullstack-design-server.vercel.app"

    let value = {
        serverUrl
    }
  return (
    <authDataContext.Provider value={value}>
      {children}
    </authDataContext.Provider>
  )
}

export default AuthContext
