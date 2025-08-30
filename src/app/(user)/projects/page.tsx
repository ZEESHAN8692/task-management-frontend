"use client";

import ProjectModdel from '@/components/user/ProjectModdel';
import { createProject, deleteProject, getAllProjects, updateProject } from '@/queryFunction/queryFunction'
import { useMutation, useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import Swal from "sweetalert2";

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null); // Edit ke liye project hold karega

  const { data, error, isLoading , refetch } = useQuery({
    queryKey: ['projects'],
    queryFn: getAllProjects
  })


  // console.log("Project Data ", data?.data?.data)

  const handleFormSubmit = async (formData: any) => {
    console.log("Submitted Data: ", formData);

    if (selectedProject) {
      try {
        const projectId = selectedProject._id;
        const response= await updateProject(projectId, formData);
        refetch();
        toast.success("Project updated successfully!");
        refetch();
      } catch (err) {
        toast.error("Failed to update project");
      }


    } else {
      // Add Mode
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


  return (
    <>
      <div className="min-h-screen bg-[#0D1B2A] p-4 sm:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-[#F1F5F9] mb-8">Projects</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project Card 1 */}
            {data?.data?.data?.map((project: any) => (
            <div className="bg-[#1B263B] rounded-lg p-6 border border-[#415A77]/20 hover:border-[#3A86FF]/20  hover:shadow-lg hover:shadow-[#3A86FF]/50 transition-all duration-200" key={project?._id}>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <Link href={`/projects/${project?._id}`}>
                    <h3 className="text-xl font-semibold mb-2 text-[#F1F5F9]">{project?.name}</h3>
                  </Link>
                  <p className="text-gray-400 text-sm">{project?.description.slice(0,60)}</p>
                </div>
                <div className="flex space-x-2">
                  <button className="text-gray-400 hover:text-[#3A86FF]"  onClick={() => {
                        setSelectedProject(project);
                        setShowModal(true);
                      }}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </button>
                  <button className="text-gray-400 hover:text-[#FF6B6B]" onClick={() => handleDelete(project?._id)}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-gray-400">Progress</span>
                  <span className="text-[#3A86FF]">75%</span>
                </div>
                <div className="w-full bg-[#415A77]/30 rounded-full h-2">
                  <div className="bg-[#3A86FF] h-2 rounded-full" style={{ width: '75%' }} />
                </div>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">24 tasks</span>
                <div className="flex -space-x-2">
                  {/* Team members */}
                  {project?.members?.map((member: any) => (
                    <img key={member?._id} src={member?.image} alt="Team member" className="w-8 h-8 rounded-full border-2 border-[#1B263B]" />
                  )).slice(0, 5)}
                </div>
              </div>
            </div>

            ))}
        
            {/* Add New Project Card */}
            <Link href=""  onClick={() => { setSelectedProject(null); setShowModal(true); }}>
              <div className="bg-[#1B263B] rounded-lg p-6 border-2 border-dashed border-[#415A77]/40 hover:border-[#3A86FF] transition-colors cursor-pointer flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#415A77]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-gray-400 hover:text-[#3A86FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                  <p className="text-gray-400 hover:text-[#3A86FF]">Add New Project</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/* Add New Project Modal */}
      {showModal && (
        <ProjectModdel
          closeModel={setShowModal} // Pass closeModal function
          onSubmit={handleFormSubmit} // Pass submit handler
          projectData={selectedProject}
        />
      )}
    </>



  )
}

export default Projects;

