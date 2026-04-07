import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./myContext/context";
function ProtectedRoute({ children }) {
  const { auth } = useContext(AuthContext);

  if (!auth) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;