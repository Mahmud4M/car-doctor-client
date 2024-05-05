import { useContext } from "react";
import { AuthContex } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {

    const { user, loading } = useContext(AuthContex);
    const location = useLocation();

    if (loading) {
        return <span className="loading loading-spinner loading-lg"></span>
    }

    if (user?.email) {
        return children
    }

    return <Navigate state={location?.pathname}  to='/login' replace></Navigate>
};

export default PrivateRoutes;