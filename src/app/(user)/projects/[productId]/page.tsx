"use client";

import { useParams } from 'next/navigation';
import React, { useState } from 'react'
import TaskModel, { Task } from "@/components/user/TaskModel";
import { useQuery } from '@tanstack/react-query';
import { getTasksByProject } from '@/queryFunction/queryFunction';

const SingleProject: React.FC = () => {
    // const { productId } = useParams();
    const params = useParams<{ productId: string }>();
    //   const productId = params?.productId;
    console.log("Product ID:", params?.productId);

    const [showModal, setShowModal] = useState(false);
    const [editTask, setEditTask] = useState<Task | null>(null);

    // Save / Update Task
    const handleSaveTask = (taskData: Task) => {
        console.log("Saved Task:", taskData);
        setShowModal(false);
        setEditTask(null);
    };

    const {data , isLoading , isError ,refetch}=useQuery({
        queryKey: ['task'],
        queryFn: getTasksByProject(params?.productId)
    })

    console.log("Task Data:", data);

    return (
        <>
            <section id="kanban" className="min-h-screen bg-[#0D1B2A] p-8">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-3xl font-bold text-[#F1F5F9] mb-8">Kanban Board</h1>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* To-Do Column */}
                        <div className="bg-[#1B263B] rounded-lg p-4 border border-[#415A77]/20">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-lg font-semibold text-[#F1F5F9]">To-Do</h2>
                                <span className="bg-[#415A77]/20 text-[#F1F5F9] text-sm px-2 py-1 rounded">8</span>
                            </div>
                            <div className="space-y-3">
                                <div className="bg-[#0D1B2A] rounded-lg p-4 border border-[#415A77]/30 hover:border-[#3A86FF]/50 transition-all duration-200 cursor-pointer">
                                    <h3 className="text-[#F1F5F9] font-medium mb-2">Design landing page</h3>
                                    <p className="text-sm text-gray-400 mb-3">Create mockups for new landing page</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs text-[#FFBE0B]">Due in 3 days</span>
                                        <img src="https://images.unsplash.com/photo-1555209183-8facf96a4349?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8ZGFyayUyMHdvcmtzcGFjZSUyMHNldHVwfGVufDF8MHx8fDE3NTU0NTcxMTV8MA&ixlib=rb-4.1.0&q=80&w=1080" className="w-6 h-6 rounded-full object-cover" />
                                    </div>
                                </div>
                                <div className="bg-[#0D1B2A] rounded-lg p-4 border border-[#415A77]/30 hover:border-[#3A86FF]/50 transition-all duration-200 cursor-pointer">
                                    <h3 className="text-[#F1F5F9] font-medium mb-2">Setup database</h3>
                                    <p className="text-sm text-gray-400 mb-3">Configure PostgreSQL database schema</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs text-[#FF6B6B]">Due today</span>
                                        <img src="https://images.unsplash.com/photo-1548008407-3af86cb54c8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8Mnx8ZGFyayUyMHdvcmtzcGFjZSUyMHNldHVwfGVufDF8MHx8fDE3NTU0NTcxMTV8MA&ixlib=rb-4.1.0&q=80&w=1080" className="w-6 h-6 rounded-full object-cover" />
                                    </div>
                                </div>
                                <div className="bg-[#0D1B2A] rounded-lg p-4 border border-[#415A77]/30 hover:border-[#3A86FF]/50 transition-all duration-200 cursor-pointer">
                                    <h3 className="text-[#F1F5F9] font-medium mb-2">API integration</h3>
                                    <p className="text-sm text-gray-400 mb-3">Connect payment gateway API</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs text-[#2EC4B6]">Due in 5 days</span>
                                        <img src="https://images.unsplash.com/photo-1589010539781-b59882ded3c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8M3x8ZGFyayUyMHdvcmtzcGFjZSUyMHNldHVwfGVufDF8MHx8fDE3NTU0NTcxMTV8MA&ixlib=rb-4.1.0&q=80&w=1080" className="w-6 h-6 rounded-full object-cover" />
                                    </div>
                                </div>
                            </div>
                            <button className="w-full mt-4 py-2 border border-[#3A86FF]/50 text-[#3A86FF] rounded-lg hover:bg-[#3A86FF]/10 transition-all duration-200">
                                + Add Task
                            </button>
                        </div>
                        {/* In Progress Column */}
                        <div className="bg-[#1B263B] rounded-lg p-4 border border-[#415A77]/20">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-lg font-semibold text-[#F1F5F9]">In Progress</h2>
                                <span className="bg-[#415A77]/20 text-[#F1F5F9] text-sm px-2 py-1 rounded">5</span>
                            </div>
                            <div className="space-y-3">
                                <div className="bg-[#0D1B2A] rounded-lg p-4 border border-[#FFBE0B]/30 hover:border-[#FFBE0B]/50 transition-all duration-200 cursor-pointer">
                                    <h3 className="text-[#F1F5F9] font-medium mb-2">User authentication</h3>
                                    <p className="text-sm text-gray-400 mb-3">Implement OAuth2 authentication flow</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs text-[#FFBE0B]">2 days left</span>
                                        <div className="flex -space-x-2">
                                            <img src="https://images.unsplash.com/photo-1555209183-8facf96a4349?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8ZGFyayUyMHdvcmtzcGFjZSUyMHNldHVwfGVufDF8MHx8fDE3NTU0NTcxMTV8MA&ixlib=rb-4.1.0&q=80&w=1080" className="w-6 h-6 rounded-full object-cover border-2 border-[#1B263B]" />
                                            <img src="https://images.unsplash.com/photo-1548008407-3af86cb54c8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8Mnx8ZGFyayUyMHdvcmtzcGFjZSUyMHNldHVwfGVufDF8MHx8fDE3NTU0NTcxMTV8MA&ixlib=rb-4.1.0&q=80&w=1080" className="w-6 h-6 rounded-full object-cover border-2 border-[#1B263B]" />
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-[#0D1B2A] rounded-lg p-4 border border-[#3A86FF]/30 hover:border-[#3A86FF]/50 transition-all duration-200 cursor-pointer">
                                    <h3 className="text-[#F1F5F9] font-medium mb-2">Dashboard analytics</h3>
                                    <p className="text-sm text-gray-400 mb-3">Build analytics dashboard with charts</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs text-[#2EC4B6]">On track</span>
                                        <img src="https://images.unsplash.com/photo-1589010539781-b59882ded3c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8M3x8ZGFyayUyMHdvcmtzcGFjZSUyMHNldHVwfGVufDF8MHx8fDE3NTU0NTcxMTV8MA&ixlib=rb-4.1.0&q=80&w=1080" className="w-6 h-6 rounded-full object-cover" />
                                    </div>
                                </div>
                            </div>
                            <button className="w-full mt-4 py-2 border border-[#3A86FF]/50 text-[#3A86FF] rounded-lg hover:bg-[#3A86FF]/10 transition-all duration-200">
                                + Add Task
                            </button>
                        </div>
                        {/* Completed Column */}
                        <div className="bg-[#1B263B] rounded-lg p-4 border border-[#415A77]/20">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-lg font-semibold text-[#F1F5F9]">Completed</h2>
                                <span className="bg-[#415A77]/20 text-[#F1F5F9] text-sm px-2 py-1 rounded">12</span>
                            </div>
                            <div className="space-y-3">
                                <div className="bg-[#0D1B2A] rounded-lg p-4 border border-[#2EC4B6]/30 hover:border-[#2EC4B6]/50 transition-all duration-200 cursor-pointer">
                                    <h3 className="text-[#F1F5F9] font-medium mb-2">✓ Email templates</h3>
                                    <p className="text-sm text-gray-400 mb-3">Design responsive email templates</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs text-[#2EC4B6]">Completed</span>
                                        <img src="https://images.unsplash.com/photo-1555209183-8facf96a4349?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8ZGFyayUyMHdvcmtzcGFjZSUyMHNldHVwfGVufDF8MHx8fDE3NTU0NTcxMTV8MA&ixlib=rb-4.1.0&q=80&w=1080" className="w-6 h-6 rounded-full object-cover" />
                                    </div>
                                </div>
                                <div className="bg-[#0D1B2A] rounded-lg p-4 border border-[#2EC4B6]/30 hover:border-[#2EC4B6]/50 transition-all duration-200 cursor-pointer"
                                    onClick={() =>
                                        setEditTask({
                                            title: "Design landing page",
                                            description: "Create mockups for new landing page",
                                            dueDate: "2025-09-05",
                                            assignee: "Alex Johnson",
                                            project: "Website Redesign",
                                            status: "Completed",
                                        })
                                    }
                                >
                                    <h3 className="text-[#F1F5F9] font-medium mb-2">✓ Bug fixes</h3>
                                    <p className="text-sm text-gray-400 mb-3">Fix reported bugs from QA</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs text-[#2EC4B6]">Completed</span>
                                        <img src="https://images.unsplash.com/photo-1548008407-3af86cb54c8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8Mnx8ZGFyayUyMHdvcmtzcGFjZSUyMHNldHVwfGVufDF8MHx8fDE3NTU0NTcxMTV8MA&ixlib=rb-4.1.0&q=80&w=1080" className="w-6 h-6 rounded-full object-cover" />
                                    </div>
                                </div>
                            </div>
                            <button className="w-full mt-4 py-2 border border-[#3A86FF]/50 text-[#3A86FF] rounded-lg hover:bg-[#3A86FF]/10 transition-all duration-200" onClick={() => setShowModal(true)}>
                                + Add Task
                            </button>
                        </div>
                    </div>
                </div>
            </section>


            {/* Task Modal */}
            {(showModal || editTask) && (
                <TaskModel
                    onClose={() => {
                        setShowModal(false);
                        setEditTask(null);
                    }}
                    onSave={handleSaveTask}
                    task={editTask}
                    productId={params?.productId}
                />
            )}



        </>
    )
}

export default SingleProject

