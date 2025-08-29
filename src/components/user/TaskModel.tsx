import React, { useState, useEffect } from "react";

export interface Task {
  title: string;
  description: string;
  dueDate: string;
  assignee: string;
  project: string;
  status: "todo" | "in-progress" | "completed";
}

interface TaskModelProps {
  onClose: () => void;
  onSave: (task: Task) => void;
  task?: Task | null;
}

const TaskModel: React.FC<TaskModelProps> = ({ onClose, onSave, task }) => {
  const [formData, setFormData] = useState<Task>({
    title: "",
    description: "",
    dueDate: "",
    assignee: "",
    project: "",
    status: "todo",
  });

  // If editing, pre-fill the form
  useEffect(() => {
    if (task) {
      setFormData(task);
    }
  }, [task]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div id="task-modal" className="fixed inset-0 z-50">
      {/* Background Overlay */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ease-in-out"
        aria-hidden="true"
        onClick={onClose}
      />
      {/* Modal Container */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <div className="bg-[#1B263B] border border-[#415A77]/50 rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="flex justify-between items-center px-6 py-4 border-b border-[#415A77]/30">
            <h2 className="text-xl font-semibold text-[#F1F5F9]">
              {task ? "Edit Task" : "Add Task"}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-[#3A86FF] transition-colors"
              aria-label="Close modal"
            >
              ✕
            </button>
          </div>

          {/* Form */}
          <div className="p-6 space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Title */}
              <div>
                <label className="block text-sm font-medium text-[#F1F5F9] mb-2">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#0D1B2A] border border-[#415A77]/50 rounded-lg text-[#F1F5F9] focus:border-[#3A86FF] focus:outline-none focus:ring-1 focus:ring-[#3A86FF]"
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
                  name="description"
                  rows={4}
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#0D1B2A] border border-[#415A77]/50 rounded-lg text-[#F1F5F9] focus:border-[#3A86FF] focus:outline-none focus:ring-1 focus:ring-[#3A86FF]"
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
                    type="date"
                    name="dueDate"
                    value={formData.dueDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#0D1B2A] border border-[#415A77]/50 rounded-lg text-[#F1F5F9] focus:border-[#3A86FF]"
                  />
                </div>

                {/* Assignee */}
                <div>
                  <label className="block text-sm font-medium text-[#F1F5F9] mb-2">
                    Assignee
                  </label>
                  <select
                    name="assignee"
                    value={formData.assignee}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#0D1B2A] border border-[#415A77]/50 rounded-lg text-[#F1F5F9] focus:border-[#3A86FF]"
                  >
                    <option value="">Select assignee</option>
                    <option>Alex Johnson</option>
                    <option>Sarah Chen</option>
                  </select>
                </div>

                {/* Project */}
                <div>
                  <label className="block text-sm font-medium text-[#F1F5F9] mb-2">
                    Project
                  </label>
                  <select
                    name="project"
                    value={formData.project}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#0D1B2A] border border-[#415A77]/50 rounded-lg text-[#F1F5F9] focus:border-[#3A86FF]"
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
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#0D1B2A] border border-[#415A77]/50 rounded-lg text-[#F1F5F9] focus:border-[#3A86FF]"
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
                  className="px-6 py-2 border border-[#415A77]/50 text-[#F1F5F9] rounded-lg hover:bg-[#415A77]/20 transition-all duration-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-[#3A86FF] text-white rounded-lg hover:bg-[#3A86FF]/90 transition-all duration-200"
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
