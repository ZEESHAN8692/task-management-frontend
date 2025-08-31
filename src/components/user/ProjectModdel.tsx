"use client";

import { getMembers } from "@/queryFunction/queryFunction";
import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import { motion, AnimatePresence } from "framer-motion";

type ProjectModalProps = {
  closeModel: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmit: (data: any) => void;
  projectData?: any;
};

const ProjectModdel: React.FC<ProjectModalProps> = ({
  closeModel,
  onSubmit,
  projectData,
}) => {
  const [member, setMember] = useState<any[]>([]);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm();

  // Members fetch
  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const res: any = await getMembers();
        setMember(res?.data?.data || []);
        console.log("Members", res);
      } catch (error) {
        console.error("Error fetching members:", error);
      }
    };

    fetchMembers();
  }, []);

  // Options for react-select
  const membersOptions = member?.map((m: any) => ({
    value: m._id,
    label: m.name,
  }));

  // Default values for edit mode
  useEffect(() => {
    reset({
      name: projectData?.name || "",
      description: projectData?.description || "",
      members:
        projectData?.members?.map((m: any) => ({
          value: m._id,
          label: m.name,
        })) || [],
    });
  }, [projectData, reset]);

  const handleClose = () => {
    closeModel(false);
  };

  // Animation variants
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const modalVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
      y: 50
    },
    visible: { 
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 300
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        id="task-modal"
        className="fixed inset-0 z-50"
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm"
          aria-hidden="true"
          variants={backdropVariants}
          onClick={handleClose}
        />
        
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <motion.div
            className="bg-[#1B263B] border border-[#415A77]/50 rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
            variants={modalVariants}
          >
            <div className="flex justify-between items-center px-6 py-4 border-b border-[#415A77]/30">
              <h2 className="text-xl font-semibold text-[#F1F5F9]">
                {projectData ? "Edit Project" : "Add New Project"}
              </h2>
              <motion.button
                onClick={handleClose}
                className="text-gray-400 hover:text-[#3A86FF]"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                ✕
              </motion.button>
            </div>

            <div className="p-6 space-y-6">
              <form
                onSubmit={handleSubmit((data) => {
                  const finalData = {
                    ...data,
                    members: data.members?.map((m: any) => m.value) || [],
                  };
                  onSubmit(finalData);
                })}
                className="space-y-6"
              >
                {/* Project Name */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <label className="block text-sm font-medium text-[#F1F5F9] mb-2">
                    Project Name
                  </label>
                  <input
                    {...register("name", { required: "Project name is required" })}
                    className="w-full px-4 py-3 bg-[#0D1B2A] border border-[#415A77]/50 rounded-lg text-[#F1F5F9]"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.name.message as string}
                    </p>
                  )}
                </motion.div>

                {/* Members Multi-Select */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                >
                  <label className="block text-sm font-medium text-[#F1F5F9] mb-2">
                    Members
                  </label>
                  <Controller
                    name="members"
                    control={control}
                    rules={{ required: "Please select at least one member" }}
                    render={({ field }) => (
                      <Select
                        {...field}
                        options={membersOptions}
                        isMulti
                        isSearchable
                        className="text-black"
                        closeMenuOnSelect={false}
                        // Sirf 10 items ek sath render honge
                        maxMenuHeight={250}
                        styles={{
                          control: (base) => ({
                            ...base,
                            backgroundColor: "#0D1B2A",
                            borderColor: "#415A77",
                            color: "#F1F5F9",
                          }),
                          menu: (base) => ({
                            ...base,
                            backgroundColor: "#1B263B",
                            color: "#F1F5F9",
                          }),
                          option: (base, state) => ({
                            ...base,
                            backgroundColor: state.isFocused
                              ? "#3A86FF"
                              : "#1B263B",
                            color: "#F1F5F9",
                          }),
                          multiValue: (base) => ({
                            ...base,
                            backgroundColor: "#415A77",
                            color: "#fff",
                          }),
                          multiValueLabel: (base) => ({
                            ...base,
                            color: "#fff",
                          }),
                        }}
                      />
                    )}
                  />
                  {errors.members && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.members.message as string}
                    </p>
                  )}
                </motion.div>

                {/* Description */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <label className="block text-sm font-medium text-[#F1F5F9] mb-2">
                    Description
                  </label>
                  <textarea
                    {...register("description", {
                      required: "Description is required",
                    })}
                    rows={4}
                    className="w-full px-4 py-3 bg-[#0D1B2A] border border-[#415A77]/50 rounded-lg text-[#F1F5F9]"
                  />
                  {errors.description && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.description.message as string}
                    </p>
                  )}
                </motion.div>

                {/* Buttons */}
                <motion.div 
                  className="flex justify-end space-x-4 pt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <motion.button
                    type="button"
                    onClick={handleClose}
                    className="px-6 py-2 border border-[#415A77]/50 text-[#F1F5F9] rounded-lg"
                    whileHover={{ scale: 1.05, backgroundColor: "#415A77" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Cancel
                  </motion.button>
                  <motion.button
                    type="submit"
                    className="px-6 py-2 bg-[#3A86FF] text-white rounded-lg"
                    whileHover={{ scale: 1.05, backgroundColor: "#2563EB" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {projectData ? "Update Project" : "Save Project"}
                  </motion.button>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModdel;