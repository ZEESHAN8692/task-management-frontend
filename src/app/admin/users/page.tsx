"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const users = [
  {
    id: 1,
    name: 'John Doe',
    phone: '123-456-7890',
    email: 'john.doe@example.com',
    role: 'admin',
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 2,
    name: 'Jane Doe',
    phone: '098-765-4321',
    email: 'jane.doe@example.com',
    role: 'user',
    image: 'https://picsum.photos/200/301',
  },
  {
    id: 3,
    name: 'Alex Johnson',
    phone: '555-123-4567',
    email: 'alex.j@example.com',
    role: 'editor',
    image: 'https://picsum.photos/200/302',
  },
  {
    id: 4,
    name: 'Sarah Williams',
    phone: '444-987-6543',
    email: 'sarah.w@example.com',
    role: 'user',
    image: 'https://picsum.photos/200/303',
  },
];

const UserPage = () => {
  const [userList, setUserList] = useState(users);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleDelete = (id) => {
    setUserList(userList.filter(user => user.id !== id));
  };

  const handleEdit = (user) => {
    setSelectedUser(user);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-[#0D1B2A] to-[#1B263B] p-6"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-[#415A77] to-[#778DA9] rounded-xl p-6 mb-8 shadow-lg"
        >
          <h1 className="text-4xl font-bold text-white mb-2">User Management</h1>
          <p className="text-blue-100">Manage your team members and their account permissions</p>
        </motion.div>

        <motion.div 
          className="bg-[#1B263B] rounded-2xl shadow-lg overflow-hidden border border-[#415A77]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-[#415A77] to-[#778DA9] text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold text-sm uppercase">User</th>
                  <th className="px-6 py-4 text-left font-semibold text-sm uppercase">Contact</th>
                  <th className="px-6 py-4 text-left font-semibold text-sm uppercase">Role</th>
                  <th className="px-6 py-4 text-left font-semibold text-sm uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#415A77]">
                {userList.map((user, index) => (
                  <motion.tr 
                    key={user.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    whileHover={{ 
                      backgroundColor: "rgba(65, 90, 119, 0.2)",
                      transition: { duration: 0.2 }
                    }}
                    className="group"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <motion.div 
                          whileHover={{ scale: 1.1 }}
                          className="relative"
                        >
                          <img
                            src={user.image}
                            alt={user.name}
                            className="w-12 h-12 rounded-full object-cover shadow-md border-2 border-[#778DA9]"
                          />
                          <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-[#1B263B] ${user.role === 'admin' ? 'bg-red-500' : user.role === 'editor' ? 'bg-blue-500' : 'bg-green-500'}`}></div>
                        </motion.div>
                        <div className="ml-4">
                          <p className="font-semibold text-gray-100">{user.name}</p>
                          <p className="text-sm text-gray-400">ID: {user.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-gray-100">{user.phone}</p>
                      <p className="text-sm text-gray-400">{user.email}</p>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${user.role === 'admin' ? 'bg-red-900/30 text-red-300' : user.role === 'editor' ? 'bg-blue-900/30 text-blue-300' : 'bg-green-900/30 text-green-300'}`}>
                        {user.role}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex space-x-2">
                        <motion.button
                          whileHover={{ scale: 1.05, backgroundColor: "#4a7c9c" }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleEdit(user)}
                          className="bg-[#415A77] text-white px-4 py-2 rounded-lg shadow-md transition-all duration-200 flex items-center border border-[#778DA9]"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                          Edit
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.05, backgroundColor: "#9c4a4a" }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleDelete(user.id)}
                          className="bg-[#774141] text-white px-4 py-2 rounded-lg shadow-md transition-all duration-200 flex items-center border border-[#9c6a6a]"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                          Delete
                        </motion.button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {userList.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <h3 className="text-xl font-semibold text-gray-400">No users found</h3>
              <p className="text-gray-500 mt-2">Add new users to get started</p>
            </motion.div>
          )}
        </motion.div>

        <motion.div 
          className="mt-8 bg-[#1B263B] rounded-2xl shadow-lg p-6 border border-[#415A77]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-gray-200 mb-4">User Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-r from-[#0D1B2A] to-[#1B263B] p-4 rounded-xl border border-[#415A77]">
              <div className="flex items-center">
                <div className="bg-[#415A77] p-3 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-400">Total Users</p>
                  <p className="text-2xl font-bold text-gray-200">{userList.length}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-[#0D1B2A] to-[#1B263B] p-4 rounded-xl border border-[#415A77]">
              <div className="flex items-center">
                <div className="bg-[#415A77] p-3 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-400">Regular Users</p>
                  <p className="text-2xl font-bold text-gray-200">{userList.filter(user => user.role === 'user').length}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-[#0D1B2A] to-[#1B263B] p-4 rounded-xl border border-[#415A77]">
              <div className="flex items-center">
                <div className="bg-[#415A77] p-3 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 极速快3 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-400">Admin Users</p>
                  <p className="text-2xl font-bold text-gray-200">{userList.filter(user => user.role === 'admin').length}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default UserPage;
