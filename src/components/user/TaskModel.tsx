import React from 'react'

const TaskModel = () => {
    return (
        <>
            <div id="task-modal" className="fixed inset-0 z-50 hidden">
                {/* Background Overlay */}
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ease-in-out" aria-hidden="true" />
                {/* Modal Container */}
                <div className="fixed inset-0 flex items-center justify-center p-4">
                    <div className="bg-[#1B263B] border border-[#415A77]/50 rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                        {/* Close Button */}
                        <div className="flex justify-between items-center px-6 py-4 border-b border-[#415A77]/30">
                            <h2 className="text-xl font-semibold text-[#F1F5F9]">Task Details</h2>
                            <button id="close-modal" className="text-gray-400 hover:text-[#3A86FF] transition-colors" aria-label="Close modal">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        {/* Modal Content */}
                        <div className="p-6 space-y-6">
                            {/* Task Form */}
                            <form id="task-form" className="space-y-6">
                                {/* Title */}
                                <div>
                                    <label className="block text-sm font-medium text-[#F1F5F9] mb-2">Title</label>
                                    <input type="text" className="w-full px-4 py-3 bg-[#0D1B2A] border border-[#415A77]/50 rounded-lg text-[#F1F5F9] focus:border-[#3A86FF] focus:outline-none focus:ring-1 focus:ring-[#3A86FF] placeholder-gray-500" placeholder="Enter task title" />
                                </div>
                                {/* Description */}
                                <div>
                                    <label className="block text-sm font-medium text-[#F1F5F9] mb-2">Description</label>
                                    <textarea rows={4} className="w-full px-4 py-3 bg-[#0D1B2A] border border-[#415A77]/50 rounded-lg text-[#F1F5F9] focus:border-[#3A86FF] focus:outline-none focus:ring-1 focus:ring-[#3A86FF] placeholder-gray-500" placeholder="Enter task description" defaultValue={""} />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {/* Due Date */}
                                    <div>
                                        <label className="block text-sm font-medium text-[#F1F5F9] mb-2">Due Date</label>
                                        <input type="date" className="w-full px-4 py-3 bg-[#0D1B2A] border border-[#415A77]/50 rounded-lg text-[#F1F5F9] focus:border-[#3A86FF] focus:outline-none focus:ring-1 focus:ring-[#3A86FF]" />
                                    </div>
                                    {/* Assignee */}
                                    <div>
                                        <label className="block text-sm font-medium text-[#F1F5F9] mb-2">Assignee</label>
                                        <select className="w-full px-4 py-3 bg-[#0D1B2A] border border-[#415A77]/50 rounded-lg text-[#F1F5F9] focus:border-[#3A86FF] focus:outline-none focus:ring-1 focus:ring-[#3A86FF]">
                                            <option>Select assignee</option>
                                            <option>Alex Johnson</option>
                                            <option>Sarah Chen</option>
                                        </select>
                                    </div>
                                    {/* Project */}
                                    <div>
                                        <label className="block text-sm font-medium text-[#F1F5F9] mb-2">Project</label>
                                        <select className="w-full px-4 py-3 bg-[#0D1B2A] border border-[#415A77]/50 rounded-lg text-[#F1F5F9] focus:border-[#3A86FF] focus:outline-none focus:ring-1 focus:ring-[#3A86FF]">
                                            <option>Select project</option>
                                            <option>Website Redesign</option>
                                            <option>Mobile App</option>
                                            <option>API Development</option>
                                        </select>
                                    </div>
                                    {/* Status */}
                                    <div>
                                        <label className="block text-sm font-medium text-[#F1F5F9] mb-2">Status</label>
                                        <select className="w-full px-4 py-3 bg-[#0D1B2A] border border-[#415A77]/50 rounded-lg text-[#F1F5F9] focus:border-[#3A86FF] focus:outline-none focus:ring-1 focus:ring-[#3A86FF]">
                                            <option value="todo">To-Do</option>
                                            <option value="in-progress">In Progress</option>
                                            <option value="completed">Completed</option>
                                        </select>
                                    </div>
                                </div>
                                {/* Submit Buttons */}
                                <div className="flex justify-end space-x-4 pt-4">
                                    <button type="button" id="cancel-btn" className="px-6 py-2 border border-[#415A77]/50 text-[#F1F5F9] rounded-lg hover:bg-[#415A77]/20 transition-all duration-200">
                                        Cancel
                                    </button>
                                    <button type="submit" className="px-6 py-2 bg-[#3A86FF] text-white rounded-lg hover:bg-[#3A86FF]/90 transition-all duration-200">
                                        Save Task
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default TaskModel