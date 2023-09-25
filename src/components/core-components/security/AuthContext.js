import { findAllByAltText } from "@testing-library/react";
import { createContext, useContext, useState } from "react";

//1:create a context
export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext)
//2:Share the created context with other components

export default function AuthProvider({ children }) {

  //Put some state in the context
  const [isAuthenticated, setAuthenticated] = useState(false);

  const sharedValues = { isAuthenticated, setAuthenticated }
  // setInterval(() => setNumber(number + 1), 10000);

  function login(username, password) {
    if (username === 'boostware' && password === '1234') {
        setAuthenticated(true)
        return true
    } else {
      setAuthenticated(true)
      return false
    }
  }

  function logout() {
    setAuthenticated(false)
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>{children}</AuthContext.Provider>
  );
}
