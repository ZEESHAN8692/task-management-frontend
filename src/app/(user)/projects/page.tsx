"use client";

import ProjectModdel from '@/components/user/ProjectModdel';
import { createProject, deleteProject, getAllProjects, getTasksCountByCreator, getTasksCountByProject, updateProject } from '@/queryFunction/queryFunction'
import { useMutation, useQuery } from '@tanstack/react-query'
import axios from 'axios';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import Swal from "sweetalert2";
import { motion, AnimatePresence } from 'framer-motion';
import { set } from 'react-hook-form';

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [taskCount, setTaskCount] = useState<any[]>([]);

  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ['projects'],
    queryFn: getAllProjects
  });

  console.log("Projects", data?.data?.data);

  const handleFormSubmit = async (formData: any) => {
    // console.log("Submitted Data: ", formData);

    if (selectedProject) {
      try {
        const projectId = selectedProject._id;
        const response = await updateProject(projectId, formData);
        refetch();
        toast.success("Project updated successfully!");
        refetch();
      } catch (err) {
        toast.error("Failed to update project");
      }
    } else {
      try {
        const response = await createProject(formData);
        refetch();
        toast.success("Project added successfully!");
        refetch();
      } catch (err) {
        toast.error("Failed to add project");
      }
    }

    setShowModal(false);
    setSelectedProject(null);
  };

  const getTaks = async () => {
    try {
      const res = await getTasksCountByProject();
      setTaskCount(res?.data);
      // console.log("Tasks Details ", res?.data);
    } catch (error) {
      console.error("Error fetching task count:", error);
    }
  };

  useEffect(() => {
    getTaks();
  }, []);
  

  const handleDelete = async (id: any) => {
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
          refetch();
          toast.success("Project deleted successfully");
          Swal.fire("Deleted!", "Your project has been deleted.", "success");
        } catch (error) {
          toast.error("Error deleting project");
          Swal.fire("Error!", "Something went wrong while deleting.", "error");
        }
      }
    })
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 200
      }
    },
    exit: {
      y: -20,
      opacity: 0,
      transition: { duration: 0.3 }
    }
  };

  const hoverVariants = {
    hover: {
      y: -5,
      boxShadow: "0 10px 25px -5px rgba(58, 134, 255, 0.5)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    }
  };

  const buttonHover = {
    hover: { scale: 1.05, backgroundColor: "rgba(58, 134, 255, 0.1)" },
    tap: { scale: 0.95 }
  };

  // console.log("Task Count Data", taskCount);

  return (
    <>
      <div className="min-h-screen bg-[#0D1B2A] p-4 sm:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            className="text-3xl font-bold text-[#F1F5F9] mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Projects
          </motion.h1>

          {isLoading && (
            <motion.div
              className="text-gray-400 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Loading projects...
            </motion.div>
          )}

          {error && (
            <motion.div
              className="text-red-500 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Failed to load projects. Please try again.
            </motion.div>
          )}

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            layout
          >
            <AnimatePresence>
              {data?.data?.data?.map((project: any) => {
                // Find task count for this project
                const projectTask = taskCount.find((t: any) => t?.projectId === project?._id);
                const progress = projectTask?.progress || "0%";
                const totalTasks = (projectTask?.inProgress || 0) + (projectTask?.toDo || 0) + (projectTask?.completed || 0);
                const progressValue = parseInt(progress.replace("%", "")) || 0;
                const progressColor =
                  progressValue < 30
                    ? "bg-red-500"
                    : progressValue < 60
                      ? "bg-yellow-300"
                      : "bg-green-500";

                return (
                  <motion.div
                    key={project?._id}
                    className="bg-[#1B263B] rounded-lg p-6 border border-[#415A77]/20 hover:border-[#3A86FF]/20 transition-all duration-200"
                    variants={itemVariants}
                    whileHover="hover"
                    variants={hoverVariants}
                    exit="exit"
                    layout
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <Link href={`/projects/${project?._id}`}>
                          <motion.h3
                            className="text-xl font-semibold mb-2 text-[#F1F5F9] cursor-pointer"
                            whileHover={{ color: "#3A86FF" }}
                            transition={{ duration: 0.2 }}
                          >
                            {project?.name}
                            <span className="text-blue-200 text-sm ml-2 text-[10px">({project?.createdBy?.name})</span>
                          </motion.h3>
                        </Link>
                        <p className="text-gray-400 text-sm">{project?.description.slice(0, 60)}</p>
                      </div>
                      <div className="flex space-x-2">
                        <motion.button
                          className="text-gray-400 hover:text-[#3A86FF]"
                          onClick={() => {
                            setSelectedProject(project);
                            setShowModal(true);
                          }}
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                        </motion.button>
                        <motion.button
                          className="text-gray-400 hover:text-[#FF6B6B]"
                          onClick={() => handleDelete(project?._id)}
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </motion.button>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="flex items-center justify-between text-sm mb-2">
                        <span className="text-gray-400">Progress</span>
                        <span className="text-[#3A86FF]">{progress}</span>
                      </div>
                      <div className="w-full bg-[#415A77]/30 rounded-full h-2">
                        <motion.div
                          className={`${progressColor} h-2 rounded-full`}
                          initial={{ width: 0 }}
                          animate={{ width: `${progress}` }}
                          transition={{ duration: 1, delay: 0.5 }}
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">{totalTasks} tasks</span>
                      <div className="flex -space-x-2">
                        {project?.members?.map((member: any) => (
                          <motion.img
                            key={member?._id}
                            src={member?.image}
                            alt="Team member"
                            className="w-8 h-8 rounded-full border-2 border-[#1B263B]"
                            whileHover={{ scale: 1.2, zIndex: 10 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          />
                        )).slice(0, 5)}
                      </div>
                    </div>


                  </motion.div>

                )
              }
              )}
            </AnimatePresence>

            {/* Add New Project Card */}
            <motion.div
              className="bg-[#1B263B] rounded-lg p-6 border-2 border-dashed border-[#415A77]/40 hover:border-[#3A86FF] transition-colors cursor-pointer flex items-center justify-center"
              variants={itemVariants}
              whileHover="hover"
              variants={hoverVariants}
              onClick={() => { setSelectedProject(null); setShowModal(true); }}
            >
              <motion.div
                className="text-center"
                whileHover="hover"
                variants={buttonHover}
              >
                <motion.div
                  className="w-16 h-16 bg-[#415A77]/20 rounded-full flex items-center justify-center mx-auto mb-3"
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(58, 134, 255, 0.2)" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.svg
                    className="w-8 h-8 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    whileHover={{ scale: 1.2, color: "#3A86FF" }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </motion.svg>
                </motion.div>
                <motion.p
                  className="text-gray-400"
                  whileHover={{ color: "#3A86FF" }}
                >
                  Add New Project
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Add New Project Modal */}
      <AnimatePresence>
        {showModal && (
          <ProjectModdel
            closeModel={setShowModal}
            onSubmit={handleFormSubmit}
            projectData={selectedProject}
          />
        )}
      </AnimatePresence>
    </>
  )
}

export default Projects;