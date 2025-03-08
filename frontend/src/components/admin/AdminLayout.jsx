import Sidebar from "../../pages/SideBar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="flex">
      <Sidebar role="admin" />
      <div className="flex-1 p-6">
        <Outlet /> {/* This renders the admin pages */}
      </div>
    </div>
  );
};

export default AdminLayout;
