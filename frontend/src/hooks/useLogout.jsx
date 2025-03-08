import axios from "axios";
import { useNavigate } from "react-router-dom";

const useLogout = () => {
  const navigate = useNavigate();

  const logout = async () => {
    try {
      await axios.post("http://localhost:8080/api/admin/logout", {}, { withCredentials: true });

      navigate("/"); // ✅ Redirect to login page
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return logout;
};

export default useLogout;
