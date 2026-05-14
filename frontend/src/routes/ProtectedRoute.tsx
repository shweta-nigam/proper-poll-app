import { Navigate, Outlet } from "react-router-dom";


const ProtectedRoute = () => {
    const token = localStorage.getItem("accessToken");

    return token ? 
    <Outlet /> : <Navigate to="/login" replace />

}

export default ProtectedRoute;


// note: 
//1.  replace 
//  ---> Current page is replaced in history
//  ----> User cannot go back to previous protected page (without it they can access)
