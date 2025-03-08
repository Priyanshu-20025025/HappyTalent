import { Link, Outlet, useNavigate } from "react-router";
import useLogout from "../../hooks/useLogout";
import ContactQueries from "./contactQueries";
import { useState } from "react";
import AddUserForm from "./AddUserForm";

const AdminDashboard = () => {
  const logout = useLogout(); // ✅ Import optimized logout function
const navigate = useNavigate();
  return (
    <div className="h-[80vh]">
      <h1 className="md:text-4xl text-xl text-amber-600 text-center">Admin Dashboard</h1>
     
      <div className="flex justify-end pr-[3%]">
      <button onClick={logout} className="z-50 p-2 md:text-md text-sm md:p-3 rounded-2xl bg-amber-500 hover:bg-amber-600 ">Logout</button> {/* ✅ Logout Button */}
      </div>
      {/* <AddUserForm/> */}
      <Link to={"/admin/queries"} className="z-50 p-2 md:text-md text-sm md:p-3 rounded-2xl bg-amber-500 hover:bg-amber-600 ">Contact Queries</Link> {/* ✅ Logout Button */}
      <Link to={"/admin/add-user"} className="z-50 p-2 md:text-md text-sm md:p-3 rounded-2xl bg-amber-500 hover:bg-amber-600 ">add-user</Link> 
      <Link to={"/admin/user"} className="z-50 p-2 md:text-md text-sm md:p-3 rounded-2xl bg-amber-500 hover:bg-amber-600 ">see-users</Link> 
      {/* <ContactQueries/> */}
    </div>
  );
};

export default AdminDashboard;