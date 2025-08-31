"use client";
import React, { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { deleteProject, getAllProjects } from "@/queryFunction/queryFunction";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const Projects = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5; // how many projects per page

  const getProjects = async () => {
    try {
      const res = await getAllProjects();
      setProjects(res?.data?.data || []);
      console.log("Projects", res?.data?.data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  const handleDelete = async (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await deleteProject(id);
          await getProjects();
          toast.success("Project deleted successfully");
          Swal.fire("Deleted!", "Your project has been deleted.", "success");
        } catch (error) {
          toast.error("Error deleting project");
          Swal.fire(
            "Error!",
            "Something went wrong while deleting.",
            "error"
          );
        }
      }
    });
  };

  // === Filter & Pagination ===
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const name = project?.name?.toLowerCase() || "";
      const createdBy = project?.createdBy?.name?.toLowerCase() || "";
      return (
        name.includes(searchTerm.toLowerCase()) ||
        createdBy.includes(searchTerm.toLowerCase())
      );
    });
  }, [projects, searchTerm]);

  const totalPages = Math.ceil(filteredProjects.length / pageSize);
  const paginatedProjects = filteredProjects.slice(
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
          <h1 className="text-4xl font-bold text-white mb-2">
            Project Management
          </h1>
          <p className="text-blue-100">
            Manage all your projects and their progress here
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
            Project Statistics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
            <div className="bg-gradient-to-r from-[#0D1B2A] to-[#1B263B] p-4 rounded-xl border border-[#415A77]">
              <p className="text-sm text-gray-400">Total Projects</p>
              <p className="text-2xl font-bold text-gray-200">
                {projects.length}
              </p>
            </div>
          </div>
        </motion.div>

            {/* === Search === */}
        <div className="mb-6 flex justify-end items-center">
          <input
            type="text"
            placeholder="Search by name or creator..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1); // reset to first page on search
            }}
            className="px-4 py-2 rounded-xl bg-[#1B263B] border border-[#415A77] text-gray-200 w-full md:w-1/3"
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
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">
                    Project Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">
                    Create By
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">
                    Total Members
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">
                    Create Date
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-400 uppercase">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#415A77]">
                {paginatedProjects.length > 0 ? (
                  paginatedProjects.map((project) => (
                    <motion.tr
                      key={project._id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="hover:bg-[#2C3E50]"
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200">
                        {project?.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200">
                        {project?.createdBy?.name || "Unknown"}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        {project?.members?.length}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200">
                        {new Date(project?.createdAt).toLocaleString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button
                          onClick={() => handleDelete(project?._id)}
                          className="text-red-400 hover:text-red-300"
                        >
                          Delete
                        </button>
                      </td>
                    </motion.tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={5}
                      className="text-center py-6 text-gray-400 text-sm"
                    >
                      No projects found
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

export default Projects;
