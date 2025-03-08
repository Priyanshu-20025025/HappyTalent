import { Link } from "react-router-dom";
import useLogout from "../hooks/useLogout";

const Sidebar = ({ role }) => {
  // Define menu items based on user role
  const logout = useLogout();
  const menus = {
    admin: [
      { path: "/admin", label: "Dashboard" },
      { path: "/admin/queries", label: "Contact Queries" },
      { path: "/admin/users", label: " User" },
    ],
    user: [
      { path: "/user-dashboard", label: "Dashboard" },
      { path: "/user-dashboard/profile", label: "Profile" },
    ],
  };

  return (
    <div className="w-64 min-h-screen bg-gray-800 text-white p-4">
      <h2 className="text-xl font-bold mb-4">Dashboard</h2>
      <ul>
        {menus[role]?.map((item) => (
          <li key={item.path} className="mb-2">
            <Link
              to={item.path}
              className="block p-2 hover:bg-gray-700 rounded"
            >
              {item.label}
            </Link>
          </li>
        ))}
        <button
          className="block p-2 hover:bg-gray-700 rounded"
          onClick={logout}
        >
          Logout
        </button>
      </ul>
    </div>
  );
};

export default Sidebar;
