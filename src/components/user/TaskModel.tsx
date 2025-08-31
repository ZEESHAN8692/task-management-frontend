import { getProjectMembers } from "@/queryFunction/queryFunction";
import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import { toast } from "react-toastify";
import { motion, AnimatePresence } from "framer-motion";

export interface Task {
  title: string;
  description: string;
  dueDate: string;
  assignedTo: string[];  
  project: string;
  status: "To-Do" | "In-Progress" | "Completed";
}

interface TaskModelProps {
  onClose: () => void;
  onSave: (task: Task) => void;
  task?: Task | null;
  productId: string
}

const TaskModel: React.FC<TaskModelProps> = ({ onClose, onSave, task, productId }) => {
  const [assignMembers, setAssignMembers] = useState<string[]>([]);
  const { register, handleSubmit, control, reset } = useForm<Task>({
    defaultValues: {
      title: "",
      description: "",
      dueDate: "",
      assignedTo: [],   
      projectId: "",
      status: "To-Do"
    },
  });

  useEffect(() => {
    if (task) {
      reset({
        ...task,
        dueDate: task.dueDate ? task.dueDate.split("T")[0] : "",
        assignedTo: task.assignedTo
          ? task.assignedTo.map((m: any) => (typeof m === "object" ? m._id : m))
          : [],
      });
    }
  }, [task, reset]);

  const onSubmit = (data: Task) => {
    console.log("Form Data:", data);
    onSave(data);
    onClose();
  };

  useEffect(() => {
    const getAllProjectMembers = async() => {
      try {
        const members = await getProjectMembers(productId);
        setAssignMembers(members?.data);
      } catch (error) {
        toast.error("Error getting project members");
      }
    }
    getAllProjectMembers();
  }, [productId]);

  const membersOptions = assignMembers.map((member:any) => ({
    value: member._id,
    label: member.name
  }));

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
      y: 50,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <AnimatePresence>
      <div id="task-modal" className="fixed inset-0 z-50">
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm"
          aria-hidden="true"
          onClick={onClose}
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <motion.div
            className="bg-[#1B263B] border border-[#415A77]/50 rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Header */}
            <motion.div 
              className="flex justify-between items-center px-6 py-4 border-b border-[#415A77]/30"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="text-xl font-semibold text-[#F1F5F9]">
                {task ? "Edit Task" : "Add Task"}
              </h2>
              <motion.button 
                onClick={onClose} 
                className="text-gray-400 hover:text-[#3A86FF]"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                ✕
              </motion.button>
            </motion.div>

            {/* Form */}
            <div className="p-6 space-y-6">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Title */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <label className="block text-sm font-medium text-[#F1F5F9] mb-2">
                    Title
                  </label>
                  <input
                    type="text"
                    {...register("title")}
                    className="w-full px-4 py-3 bg-[#0D1B2A] border border-[#415A77]/50 rounded-lg text-[#F1F5F9]"
                    placeholder="Enter task title"
                    required
                  />
                </motion.div>

                {/* Description */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                >
                  <label className="block text-sm font-medium text-[#F1F5F9] mb-2">
                    Description
                  </label>
                  <textarea
                    {...register("description")}
                    rows={4}
                    className="w-full px-4 py-3 bg-[#0D1B2A] border border-[#415A77]/50 rounded-lg text-[#F1F5F9]"
                    placeholder="Enter task description"
                  />
                </motion.div>

                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {/* Due Date */}
                  <div>
                    <label className="block text-sm font-medium text-[#F1F5F9] mb-2">
                      Due Date
                    </label>
                    <input
                      style={{colorScheme:"dark"}}
                      type="date"
                      {...register("dueDate")}
                      className="w-full px-4 py-3 bg-[#0D1B2A] border border-[#415A77]/50 rounded-lg text-[#F1F5F9]"
                    />
                  </div>

                  {/* Status */}
                  <div>
                    <label className="block text-sm font-medium text-[#F1F5F9] mb-2">
                      Status
                    </label>
                    <select
                      {...register("status")}
                      className="w-full px-4 py-3 bg-[#0D1B2A] border border-[#415A77]/50 rounded-lg text-[#F1F5F9]"
                    >
                      <option value="To-Do">To-Do</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Completed">Completed</option>
                    </select>
                  </div>
                </motion.div>

                {/* Assignee (Multi Select) */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                >
                  <label className="block text-sm font-medium text-[#F1F5F9] mb-2">
                    Assigned To
                  </label>
                  <Controller
                    name="assignedTo"
                    control={control}
                    render={({ field }) => (
                      <Select
                        {...field}
                        isMulti
                        options={membersOptions}
                        value={membersOptions.filter(option =>
                          field.value?.includes(option.value)
                        )}
                        onChange={(selected) =>
                          field.onChange(selected.map((s) => s.value))
                        }
                        className="react-select-container"
                        classNamePrefix="react-select"
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
                </motion.div>

                {/* Buttons */}
                <motion.div 
                  className="flex justify-end space-x-4 pt-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <motion.button
                    type="button"
                    onClick={onClose}
                    className="px-6 py-2 border border-[#415A77]/50 text-[#F1F5F9] rounded-lg"
                    whileHover={{ scale: 1.05, backgroundColor: "#415A77" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Cancel
                  </motion.button>
                  <motion.button
                    type="submit"
                    className="px-6 py-2 bg-[#3A86FF] text-white rounded-lg"
                    whileHover={{ scale: 1.05, backgroundColor: "#3A86FFE0" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {task ? "Update Task" : "Save Task"}
                  </motion.button>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default TaskModel;