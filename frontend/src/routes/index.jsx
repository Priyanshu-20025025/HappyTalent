import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Hero from "../pages/Hero";
// import Admin from "../pages/Admin";
import AdminLogin from "../components/AdminLogin";
import ProtectedRoute from "./ProtectedRoute";
import AdminDashboard from "../pages/AdminDashboard";
import ContactQueries from "../components/admin/contactQueries";
import AddUserForm from "../components/admin/AddUserForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true, // ✅ Default route for "/"
        element: <Hero />,
      },
      {
        path: "/admin-login",
        element: <AdminLogin />,
      },
      {
        path: "/admin",
        element: <ProtectedRoute />, // ✅ Protects Admin Page
        children: [
          {
            index: true,
            element: <AdminDashboard />,
          },
          {
            path:"/admin/queries",
            element: <ContactQueries />,
          },
          {
            path:"/admin/add-user",
            element: <AddUserForm />,
          }
        ],
      },
    ],
  },
]);

export default router;
