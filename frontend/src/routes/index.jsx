import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Hero from "../pages/Hero";
// import Admin from "../pages/Admin";
import AdminLogin from "../components/AdminLogin";
import ProtectedRoute from "./ProtectedRoute";
// import AdminDashboard from "../pages/AdminDashboard";
import ContactQueries from "../components/admin/contactQueries";
import AddUserForm from "../components/admin/AddUserForm";
// import AdminLayout from "../pages/AdminLayout";
import AdminLayout from "../components/admin/AdminLayout"
import UserLayout from "../pages/userLayout";
import UserList from "../components/admin/UserList";
import UserLogin from "../components/user/userLogin";
import UserProfile from "../components/user/UserProfile";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         index: true, // ✅ Default route for "/"
//         element: <Hero />,
//       },
//       {
//         path: "/admin-login",
//         element: <AdminLogin />,
//       },
//       {
//         path: "/admin",
//         element: <ProtectedRoute />, // ✅ Protects Admin Page
//         children: [
//           {
//             index: true,
//             element: <AdminDashboard />,
//           },
//           {
//             path:"/admin/queries",
//             element: <ContactQueries />,
//           },
//           {
//             path:"/admin/add-user",
//             element: <AddUserForm />,
//           }
//         ],
//       },
//     ],
//   },
// ]);

// export default router;
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Hero /> },
      { path: "/login", element: <UserLogin /> },
      { path: "/admin-login", element: <AdminLogin /> },
     

      // 🔐 Admin Layout with Sidebar
      {
        path: "/admin",
        element: <AdminLayout/> ,
        children: [
          {index:true , element:<ProtectedRoute role="admin"/>},
          { path: "users", element: <UserList /> },
          { path: "queries", element: <ContactQueries /> },
          { path: "add-user", element: <AddUserForm /> },
        ],
      },

      // 🔐 User Layout with Sidebar
      {
        path: "/user-dashboard",
        element:  <UserLayout /> ,
        children: [
         { index:true , element: <ProtectedRoute role="user"/>},
        { path: "profile", element: <UserProfile /> },
        { path: "add-user", element: <AddUserForm /> }
        ],
      },
    ],
  },
]);
export default router;