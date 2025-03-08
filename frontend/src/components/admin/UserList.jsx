import React, { useEffect, useState } from "react";
import axios from "axios";
import { API } from "../../helper";
import { Link } from "react-router";

const UserList = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const res = await axios.get(API.getUsers.url, { withCredentials: true });
      if (res.data.success) {
        setUsers(res.data.data);
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="w-full h-full">
      <Link to={"/admin/add-user"} className="p-3 bg-amber-400 rounded-2xl">Add</Link>
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">User List</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Name</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Mobile</th>
              <th className="border p-2">Status</th>
              <th className="border p-2">City</th>
              <th className="border p-2">DOB</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user) => (
                <tr key={user._id} className="text-center">
                  <td className="border p-2">{user.name}</td>
                  <td className="border p-2">{user.email}</td>
                  <td className="border p-2">{user.mobile}</td>
                  <td className={`border p-2 ${user.status === "Active" ? "text-green-600" : "text-red-600"}`}>
                    {user.status}
                  </td>
                  <td className="border p-2">{user.city}</td>
                  <td className="border p-2">{new Date(user.dob).toLocaleDateString()}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center border p-4">
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default UserList;
