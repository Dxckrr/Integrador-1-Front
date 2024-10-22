import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/auth/AuthContext";
import { useEffect } from "react";
import HealthLoader from "../components/ui/global/HealthLoader";

const ProtectedRouteUser = () => {
    const { userLogin, loading } = useAuth();
    console.log(userLogin)
    useEffect(() => {
        if (userLogin && userLogin.idRol !== undefined) {
            console.log('User role:', userLogin.idRol);
        }
    }, [userLogin]);

    if (loading) {
        return (
            <>
                <div className="h-screen flex items-center justify-center">
                    <HealthLoader />
                </div>
            </>)
    }
    if (!userLogin) {   //todos los user pueden agendar citas (medicos, pacientes etc...)
        return <Navigate to={'/'} replace />;
    }
    return <Outlet />;
};

export default ProtectedRouteUser;
