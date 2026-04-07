import React, { useState } from "react";
import { AuthContext } from "./context";

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);

  const toggleAuth = () => {
    setAuth(!auth);
  };

  return (
    <AuthContext.Provider value={{ auth, toggleAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
