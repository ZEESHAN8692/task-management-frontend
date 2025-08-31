"use client";
import React, { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { deleteUser, getAllUsers } from "@/queryFunction/queryFunction";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const UserPage = () => {
  const router = useRouter();
  const [userList, setUserList] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5; // users per page

  const getUsers = async () => {
    try {
      const response = await getAllUsers();
      console.log("Users", response?.data);
      setUserList(response?.data || []);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const handleDelete = async (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This user will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await deleteUser(id);
          await getUsers();
          toast.success("User deleted successfully");
          Swal.fire("Deleted!", "User has been removed.", "success");
        } catch (error) {
          toast.error("Error deleting user");
          Swal.fire("Error!", "Something went wrong.", "error");
        }
      }
    });
  };

  const handleEdit = (user: any) => {
    // TODO: open modal or navigate to edit page
  };

  // === Filter + Pagination ===
  const filteredUsers = useMemo(() => {
    return userList.filter((user) => {
      const name = user?.name?.toLowerCase() || "";
      const email = user?.email?.toLowerCase() || "";
      const phone = user?.phone?.toLowerCase() || "";
      return (
        name.includes(searchTerm.toLowerCase()) ||
        email.includes(searchTerm.toLowerCase()) ||
        phone.includes(searchTerm.toLowerCase())
      );
    });
  }, [userList, searchTerm]);

  const totalPages = Math.ceil(filteredUsers.length / pageSize);
  const paginatedUsers = filteredUsers.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-[#0D1B2A] to-[#1B263B] p-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-[#415A77] to-[#778DA9] rounded-xl p-6 mb-8 shadow-lg"
        >
          <h1 className="text-4xl font-bold text-white mb-2">User Management</h1>
          <p className="text-blue-100">
            Manage your team members and their account permissions
          </p>
        </motion.div>

    
           


        {/* === Statistics === */}
        <motion.div
          className="mb-8 bg-[#1B263B] rounded-2xl shadow-lg p-6 border border-[#415A77]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-gray-200 mb-4">
            User Statistics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Total Users */}
            <div className="bg-gradient-to-r from-[#0D1B2A] to-[#1B263B] p-4 rounded-xl border border-[#415A77]">
              <p className="text-sm text-gray-400">Total Users</p>
              <p className="text-2xl font-bold text-gray-200">
                {userList.length}
              </p>
            </div>

            {/* Regular Users */}
            <div className="bg-gradient-to-r from-[#0D1B2A] to-[#1B263B] p-4 rounded-xl border border-[#415A77]">
              <p className="text-sm text-gray-400">Regular Users</p>
              <p className="text-2xl font-bold text-gray-200">
                {userList.filter((u) => u?.role === "user").length}
              </p>
            </div>

            {/* Admin Users */}
            <div className="bg-gradient-to-r from-[#0D1B2A] to-[#1B263B] p-4 rounded-xl border border-[#415A77]">
              <p className="text-sm text-gray-400">Admin Users</p>
              <p className="text-2xl font-bold text-gray-200">
                {userList.filter((u) => u?.role === "admin").length}
              </p>
            </div>
          </div>
        </motion.div>

          {/* === Header Row with Add User + Search === */}
        <div className="flex justify-between items-center mb-6">
          {/* Left: Add User Button */}
          <div>
          <button
            onClick={() => router.push("/admin/add_users")}
            className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-xl shadow-md hover:scale-105 transition"
          >
            + Add User
          </button>
          </div>

          {/* Right: Search Box */}
          <div>
          <input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 rounded-xl border border-[#415A77] bg-[#0D1B2A] text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
          />
          <button className="ml-2 bg-[#415A77] rounded-full p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          </div>
        </div>

        {/* === Table === */}
        <motion.div
          className="bg-[#1B263B] rounded-2xl shadow-lg overflow-hidden border border-[#415A77]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-[#415A77] to-[#778DA9] text-white">
                <tr>
                  <th className="px-6 py-4 text-left text-sm uppercase">User</th>
                  <th className="px-6 py-4 text-left text-sm uppercase">
                    Contact
                  </th>
                  <th className="px-6 py-4 text-left text-sm uppercase">Role</th>
                  <th className="px-6 py-4 text-left text-sm uppercase">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#415A77]">
                {paginatedUsers.length > 0 ? (
                  paginatedUsers.map((user, index) => (
                    <motion.tr
                      key={user?._id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.3 }}
                      className="hover:bg-[#2C3E50]"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <img
                            src={user?.image}
                            alt={user?.name}
                            className="w-12 h-12 rounded-full object-cover shadow-md border-2 border-[#778DA9]"
                          />
                          <div className="ml-4">
                            <p className="font-semibold text-gray-100">
                              {user?.name}
                            </p>
                            <p className="text-sm text-gray-400">
                              ID: {user?._id}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-gray-100">{user?.phone}</p>
                        <p className="text-sm text-gray-400">{user?.email}</p>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium ${user?.role === "admin"
                              ? "bg-red-900/30 text-red-300"
                              : user?.role === "editor"
                                ? "bg-blue-900/30 text-blue-300"
                                : "bg-green-900/30 text-green-300"
                            }`}
                        >
                          {user?.role}
                        </span>
                      </td>
                      <td className="px-6 py-4 flex gap-2">
                        <button
                          onClick={() => handleEdit(user)}
                          className="bg-[#415A77] text-white px-4 py-2 rounded-lg hover:bg-[#4a7c9c]"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(user?._id)}
                          className="bg-[#774141] text-white px-4 py-2 rounded-lg hover:bg-[#9c4a4a]"
                        >
                          Delete
                        </button>
                      </td>
                    </motion.tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={4}
                      className="text-center py-6 text-gray-400 text-sm"
                    >
                      No users found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* === Pagination === */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-6 gap-4">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}
              className="px-4 py-2 rounded-lg bg-[#415A77] text-white disabled:opacity-50"
            >
              Previous
            </button>
            <span className="text-gray-300">
              Page {currentPage} of {totalPages}
            </span>
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => p + 1)}
              className="px-4 py-2 rounded-lg bg-[#415A77] text-white disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default UserPage;
