"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const projectsData = [
  {
    id: 1,
    title: 'E-commerce Website',
    owner: 'John Doe',
    status: 'Completed',
    deadline: '2025-09-10',
  },
  {
    id: 2,
    title: 'Portfolio Website',
    owner: 'Jane Smith',
    status: 'In Progress',
    deadline: '2025-10-05',
  },
  {
    id: 3,
    title: 'Restaurant App',
    owner: 'Alex Johnson',
    status: 'Pending',
    deadline: '2025-11-01',
  },
];

const Projects = () => {
  const [projects, setProjects] = useState(projectsData);

  const handleDelete = (id) => {
    setProjects(projects.filter(project => project.id !== id));
  };

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
          <h1 className="text-4xl font-bold text-white mb-2">Project Management</h1>
          <p className="text-blue-100">Manage all your projects and their progress here</p>
        </motion.div>

        {/* === Statistics === */}
        <motion.div 
          className="mb-8 bg-[#1B263B] rounded-2xl shadow-lg p-6 border border-[#415A77]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-gray-200 mb-4">Project Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Total Projects */}
            <div className="bg-gradient-to-r from-[#0D1B2A] to-[#1B263B] p-4 rounded-xl border border-[#415A77]">
              <p className="text-sm text-gray-400">Total Projects</p>
              <p className="text-2xl font-bold text-gray-200">{projects.length}</p>
            </div>

            {/* Completed Projects */}
            <div className="bg-gradient-to-r from-[#0D1B2A] to-[#1B263B] p-4 rounded-xl border border-[#415A77]">
              <p className="text-sm text-gray-400">Completed</p>
              <p className="text-2xl font-bold text-green-400">
                {projects.filter(p => p.status === 'Completed').length}
              </p>
            </div>

            {/* In Progress Projects */}
            <div className="bg-gradient-to-r from-[#0D1B2A] to-[#1B263B] p-4 rounded-xl border border-[#415A77]">
              <p className="text-sm text-gray-400">In Progress</p>
              <p className="text-2xl font-bold text-yellow-400">
                {projects.filter(p => p.status === 'In Progress').length}
              </p>
            </div>
          </div>
        </motion.div>

        {/* === Table === */}
        <motion.div 
          className="bg-[#1B263B] rounded-2xl shadow-lg overflow-hidden border border-[#415A77]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-[#415A77]">
              <thead className="bg-[#0D1B2A]">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Title</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Owner</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Deadline</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-400 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#415A77]">
                {projects.map((project) => (
                  <motion.tr
                    key={project.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="hover:bg-[#2C3E50]"
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200">{project.title}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200">{project.owner}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          project.status === 'Completed'
                            ? 'bg-green-500/20 text-green-400'
                            : project.status === 'In Progress'
                            ? 'bg-yellow-500/20 text-yellow-400'
                            : 'bg-red-500/20 text-red-400'
                        }`}
                      >
                        {project.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200">{project.deadline}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button 
                        onClick={() => handleDelete(project.id)} 
                        className="text-red-400 hover:text-red-300"
                      >
                        Delete
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;
