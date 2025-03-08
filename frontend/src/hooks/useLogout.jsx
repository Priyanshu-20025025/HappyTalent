import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API } from "../helper";

const useLogout = () => {
  const navigate = useNavigate();

  const logout = async () => {
    try {
      await axios.post(API.logoutAdmin.url, {}, { withCredentials: true });

      navigate("/"); // ✅ Redirect to login page
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return logout;
};

export default useLogout;
