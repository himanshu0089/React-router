import { Navigate,useLocation } from "react-router-dom";
import { useAuth } from "./UseAuthContext";

export default function RequireAuth({ children }) {
  const { isLoggedIn } = useAuth();
  const location=useLocation();
  console.log({location})
  return isLoggedIn ? children : <Navigate to="/login"  state={{ from:location }} replace />;
}
