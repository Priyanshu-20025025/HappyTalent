import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { API } from "../helper";

const ProtectedRoute = ({role}) => {
  const [isAuth, setIsAuth] = useState(null);
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get(role === "user" ?API.userAuthCheck.url:API.adminAuthCheck.url, {
          withCredentials: true, // ✅ Secure cookie access
        });
        if(res.data.success){
        setIsAuth(res.data.success);
        }
      } catch (error) {
        setIsAuth(false);
      }
    };
    checkAuth();
  }, []);

  if (isAuth === null) return <div>Loading...</div>;
  return isAuth ? <Outlet /> : <Navigate to={role === "user" ?`/login`:`/admin-login`} replace />;
};

export default ProtectedRoute;
