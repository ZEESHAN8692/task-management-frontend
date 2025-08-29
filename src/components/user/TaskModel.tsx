import { getProjectMembers } from "@/queryFunction/queryFunction";
import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import { toast } from "react-toastify";

export interface Task {
  title: string;
  description: string;
  dueDate: string;
  assignee: string[];   // ✅ ab array
  project: string;
  status: "todo" | "in-progress" | "completed";
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
      assignee: [],     // ✅ default empty array
      project: "",
      status: "todo",
    },
  });

  useEffect(() => {
    if (task) {
      reset(task);
    }
  }, [task, reset]);

  const onSubmit = (data: Task) => {
    console.log("Form Data:", data);
    onSave(data);
  };

  useEffect(() => {
    const getAllProjectMembers = async()=>{
      try {
        const members = await getProjectMembers(productId);
        // console.log("Asigned Members",members?.data);
        setAssignMembers(members?.data);

        
      } catch (error) {
        toast.error("Error getting project members");
        
      }
    }
    getAllProjectMembers();
  },[])

  // ✅ Example static members (yaha API call se bhi laa sakte ho)
  // const membersOptions = [
  //   { value: "alex", label: "Alex Johnson" },
  //   { value: "sarah", label: "Sarah Chen" },
  //   { value: "mike", label: "Mike Brown" },
  // ];
  const membersOptions = assignMembers.map((member:any)=>(
    {
      value: member._id,
      label: member.name
    }
  ))

  return (
    <div id="task-modal" className="fixed inset-0 z-50">
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        aria-hidden="true"
        onClick={onClose}
      />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <div className="bg-[#1B263B] border border-[#415A77]/50 rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="flex justify-between items-center px-6 py-4 border-b border-[#415A77]/30">
            <h2 className="text-xl font-semibold text-[#F1F5F9]">
              {task ? "Edit Task" : "Add Task"}
            </h2>
            <button onClick={onClose} className="text-gray-400 hover:text-[#3A86FF]">
              ✕
            </button>
          </div>

          {/* Form */}
          <div className="p-6 space-y-6">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Title */}
              <div>
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
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-[#F1F5F9] mb-2">
                  Description
                </label>
                <textarea
                  {...register("description")}
                  rows={4}
                  className="w-full px-4 py-3 bg-[#0D1B2A] border border-[#415A77]/50 rounded-lg text-[#F1F5F9]"
                  placeholder="Enter task description"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

                {/* Assignee (Multi Select) */}
                <div>
                  <label className="block text-sm font-medium text-[#F1F5F9] mb-2">
                    Assignee
                  </label>
                  <Controller
                    name="assignee"
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
                </div>


                {/* Project */}
                <div>
                  <label className="block text-sm font-medium text-[#F1F5F9] mb-2">
                    Project
                  </label>
                  <select
                    {...register("project")}
                    className="w-full px-4 py-3 bg-[#0D1B2A] border border-[#415A77]/50 rounded-lg text-[#F1F5F9]"
                  >
                    <option value="">Select project</option>
                    <option>Website Redesign</option>
                    <option>Mobile App</option>
                    <option>API Development</option>
                  </select>
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
                    <option value="todo">To-Do</option>
                    <option value="in-progress">In Progress</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex justify-end space-x-4 pt-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-2 border border-[#415A77]/50 text-[#F1F5F9] rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-[#3A86FF] text-white rounded-lg hover:bg-[#3A86FF]/90"
                >
                  Save Task
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskModel;
