import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const ProtectedRoute = ({role}) => {
  const [isAuth, setIsAuth] = useState(null);
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get(role === "user" ? "http://localhost:8080/api/user/auth-check":"http://localhost:8080/api/admin/auth-check", {
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
