import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const ProtectedRoute = () => {
  const [isAuth, setIsAuth] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      console.log("in proctected routes")
      try {
        const res = await axios.get("http://localhost:8080/api/admin/auth-check", {
          withCredentials: true, // ✅ Secure cookie access
        });
        console.log("res",res)
        setIsAuth(res.data.success);
      } catch (error) {
        setIsAuth(false);
      }
    };
    checkAuth();
  }, []);

  if (isAuth === null) return <div>Loading...</div>;
  return isAuth ? <Outlet /> : <Navigate to="/admin-login" replace />;
};

export default ProtectedRoute;
