import React, { useState } from "react";
import { createContext, useContext } from "react";

const AuthContext = createContext({ isLoggedIn: false });
function Authprovider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
}
const useAuth = () => useContext(AuthContext);

export { Authprovider, useAuth };
