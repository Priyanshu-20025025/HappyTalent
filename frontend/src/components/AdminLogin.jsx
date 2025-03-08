import { useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API } from "../helper";

const AdminLogin = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const { data } = await axios.post(
        API.loginAdmin.url,
        { email: emailRef.current.value, password: passwordRef.current.value },
        { withCredentials: true }
      );

      if (data.success) {
        navigate("/admin"); // ✅ Redirect to admin dashboard
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError("Invalid email or password!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-[80vh] bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-96">
        <h2 className="text-2xl font-semibold text-gray-700 text-center mb-4">Admin Login</h2>

        {error && <p className="text-red-500 text-sm text-center mb-3">{error}</p>}

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            ref={emailRef}
            required
            className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="password"
            placeholder="Password"
            ref={passwordRef}
            required
            className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
