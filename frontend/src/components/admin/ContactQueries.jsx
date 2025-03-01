import React, { useEffect, useState } from "react";
import axios from "axios";
import { API } from "../../helper";

const ContactQueries = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchQueries = async () => {
    try {
      const response = await axios.get(API.adminContactQueries.url, { withCredentials: true });
      if (response.data.success) {
        setData(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching contact queries:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQueries();
  }, []);

  return (
    <div className="p-6  min-h-screen">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Queries</h2>

      {loading ? (
        <div className="text-center text-gray-600">Loading...</div>
      ) : data.length === 0 ? (
        <div className="text-center text-gray-500">No contact queries found.</div>
      ) : (
        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-gray-200 text-gray-700 uppercase text-sm">
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Email</th>
                <th className="p-3 text-left">Phone</th>
                <th className="p-3 text-left">Message</th>
                <th className="p-3 text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              {data.map((query) => (
                <tr key={query._id} className="border-b hover:bg-gray-100 transition">
                  <td className="p-3">{query.name}</td>
                  <td className="p-3">{query.email}</td>
                  <td className="p-3">{query.phone}</td>
                  <td className="p-3">{query.message}</td>
                  <td className="p-3">{new Date(query.createdAt).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ContactQueries;
