import { use } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
    const { user, loading } = use(AuthContext);
    const location = useLocation();
    //console.log(location);
    if (loading)
        return (
            <div className="min-h-screen flex justify-center items-center">
                <span className="loading loading-spinner text-warning"></span>
            </div>
        );
    if (user) return children;

    return <Navigate state={location.pathname} to="/auth/login"></Navigate>;
};

export default PrivateRoute;
