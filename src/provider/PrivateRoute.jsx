import { use, useEffect } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router";
import { toast } from "react-toastify";

const PrivateRoute = ({ children }) => {
    const { user, loading } = use(AuthContext);
    const location = useLocation();
    //console.log(location);
    useEffect(() => {
        if (!loading && !user) {
            toast.warning("Please login to perform this action!");
        }
    }, [loading, user]);

    if (loading)
        return (
            <div className="min-h-screen flex justify-center items-center">
                <span className="loading loading-spinner text-warning"></span>
            </div>
        );
    if (user) return children;

    return (
        <Navigate state={location.pathname} to="/auth/login" replace></Navigate>
    );
};

export default PrivateRoute;
