"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { deleteProject, getAllProjects } from '@/queryFunction/queryFunction';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';

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
  const [projects, setProjects] = useState([]);

  const getProjects = async () => {
    try {
      const res = await getAllProjects()
      setProjects(res?.data?.data);
      console.log("Projects", res?.data?.data);
      
    } catch (error) {
      console.error('Error fetching projects:', error);
      
    }
  }
  useEffect(() => {
    getProjects();
  }, []);
  const handleDelete = async(id:string) => {
     Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await deleteProject(id);
          await getProjects();
          toast.success("Project deleted successfully");
  
          Swal.fire("Deleted!", "Your project has been deleted.", "success");
        } catch (error) {
          toast.error("Error deleting project");
          Swal.fire("Error!", "Something went wrong while deleting.", "error");
        }
      }
    })
  }


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
          <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
            
            {/* Total Projects */}
            <div className="bg-gradient-to-r from-[#0D1B2A] to-[#1B263B] p-4 rounded-xl border border-[#415A77]">
              <p className="text-sm text-gray-400">Total Projects</p>
              <p className="text-2xl font-bold text-gray-200">{projects.length}</p>
            </div>

            {/* Completed Projects */}
            {/* <div className="bg-gradient-to-r from-[#0D1B2A] to-[#1B263B] p-4 rounded-xl border border-[#415A77]">
              <p className="text-sm text-gray-400">Completed</p>
              <p className="text-2xl font-bold text-green-400">
                {projects.filter(p => p.status === 'Completed').length}
              </p>
            </div> */}

            {/* In Progress Projects */}
            {/* <div className="bg-gradient-to-r from-[#0D1B2A] to-[#1B263B] p-4 rounded-xl border border-[#415A77]">
              <p className="text-sm text-gray-400">In Progress</p>
              <p className="text-2xl font-bold text-yellow-400">
                {projects.filter(p => p.status === 'In Progress').length}
              </p>
            </div> */}
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
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Project Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Create By </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Total Members</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Creat Date</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-400 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#415A77]">
                {projects?.map((project) => (
                  <motion.tr
                    key={project._id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="hover:bg-[#2C3E50]"
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200">{project?.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200">{project?.createdBy?.name || "Unknown"}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">{project?.members?.length}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200">{new Date(project?.createdAt).toLocaleString()}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button 
                        onClick={() => handleDelete(project?._id)} 
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
