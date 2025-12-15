import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import type { ProtectedRouteProps } from "../../types";


const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
const auth = useContext(AuthContext);

if(!auth) return null;

if(!auth.isAuthenticated) {
    return <Navigate to="/login" replace />;
}

return children;
}
export default ProtectedRoute;