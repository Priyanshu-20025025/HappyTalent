import Sidebar from "./SideBar";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <div className="flex">
      <Sidebar role="user" />
      <div className="flex-1 p-6">
        <Outlet /> {/* This renders the user pages */}
      </div>
    </div>
  );
};

export default UserLayout;
