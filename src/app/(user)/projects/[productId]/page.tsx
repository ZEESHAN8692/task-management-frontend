"use client";

import { useParams } from "next/navigation";
import React, { useState } from "react";
import TaskModel, { Task } from "@/components/user/TaskModel";
import {
    useQuery,
    useQueryClient,
} from "@tanstack/react-query";
import {
    getTasksByProject,
    deleteTask,
    moveTask,
    updateTask,
    createTask,
} from "@/queryFunction/queryFunction";
import { Trash2, MoreVertical, Pencil } from "lucide-react";
import { toast } from "react-toastify";


import {
    DragDropContext,
    Droppable,
    Draggable,
    type DropResult,
} from "@hello-pangea/dnd";
import { set } from "react-hook-form";

const SingleProject: React.FC = () => {
    const params = useParams<{ productId: string }>();
    const queryClient = useQueryClient();

    const [showModal, setShowModal] = useState(false);
    const [editTask, setEditTask] = useState<Task | null>(null);
    const [menuOpen, setMenuOpen] = useState<string | null>(null);

    //  Fetch tasks
    const { data, isLoading, isError, refetch } = useQuery({
        queryKey: ["task", params?.productId],
        queryFn: () => getTasksByProject(params?.productId),
    });

    // NOTE: API returns { data: Task[] } -> adjust if your shape differs
    const tasks = data?.data || [];

    // Delete task
    const handleDelete = async (taskId: string) => {
        try {
            await deleteTask(taskId);
            await refetch();
            toast.success("Task deleted successfully!");
        } catch (error) {
            toast.error("Error deleting task");
            console.log(error);
        }
    };

    // Move task via API (from dropdown buttons)
    const handleMoveTask = async (taskId: string, nextStatus: string) => {
        try {
            // optimistic update
            queryClient.setQueryData(["task", params?.productId], (old: any) => {
                if (!old?.data) return old;
                const updated = old.data.map((t: any) =>
                    t._id === taskId ? { ...t, status: nextStatus } : t
                );
                return { ...old, data: updated };
            });

            await moveTask(taskId, { status: nextStatus });
            await refetch();
            toast.success("Task moved successfully!");
        } catch (error) {
            toast.error("Error moving task");
            console.log(error);
            queryClient.invalidateQueries({ queryKey: ["task", params?.productId] });
        }
    };
    // console.log("EditTasks:", editTask);

    //  Save / Update Task (modal)
    const handleSaveTask = async (taskData: Task) => {
        try {
            if (editTask) {
                try {
                    await updateTask(editTask._id, taskData);
                    toast.success("Task updated successfully!");
                    ()=>setShowModal(false);
                    refetch();
                } catch (error) {
                    toast.error("Error updating task");
                    console.log(error);
                }
            } else {
                try {
                    await createTask(params?.productId, taskData);
                    toast.success("Task created successfully!");
                    setShowModal(false);
                    refetch();
                } catch (error) {
                    toast.error("Error creating task");
                    console.log(error);
                }
            }
        } catch (error) {
            toast.error("Error saving task");
            console.log(error);
        }
    };



    // Kanban Columns
    const columns = [
        { title: "To-Do", status: "To-Do", color: "text-[#FFBE0B]" },
        { title: "In Progress", status: "In Progress", color: "text-[#3A86FF]" },
        { title: "Completed", status: "Completed", color: "text-[#2EC4B6]" },
    ];

    // 🔁 Drag end handler
    const onDragEnd = async (result: DropResult) => {
        const { destination, source, draggableId } = result;
        if (!destination) return;

        const from = source.droppableId;
        const to = destination.droppableId;

        // same place
        if (from === to && source.index === destination.index) return;

        // optimistic UI: update status of dragged task
        queryClient.setQueryData(["task", params?.productId], (old: any) => {
            if (!old?.data) return old;
            const updated = old.data.map((t: any) =>
                t._id === draggableId ? { ...t, status: to } : t
            );
            return { ...old, data: updated };
        });

        try {
            await moveTask(draggableId, { status: to });
            // sync with server
            await refetch();
            toast.success("Task moved");
        } catch (err) {
            toast.error("Move failed");
            console.error(err);
            queryClient.invalidateQueries({ queryKey: ["task", params?.productId] });
        }
    };

    return (
        <>
            <section id="kanban" className="min-h-screen bg-[#0D1B2A] p-8">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-3xl font-bold text-[#F1F5F9] mb-8">
                        Kanban Board
                    </h1>

                    {isError && (
                        <p className="text-red-500">Failed to load tasks. Try again.</p>
                    )}
                    {isLoading && (
                        <p className="text-gray-400">Loading tasks...</p>
                    )}

                    {/* 🧲 DnD Context */}
                    <DragDropContext onDragEnd={onDragEnd}>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            {columns.map((col) => {
                                const filteredTasks = tasks.filter(
                                    (task: any) => task.status === col.status
                                );

                                return (
                                    <Droppable droppableId={col.status} key={col.status}>
                                        {(dropProvided, dropSnapshot) => (
                                            <div
                                                ref={dropProvided.innerRef}
                                                {...dropProvided.droppableProps}
                                                className={`bg-[#1B263B] rounded-lg p-4 border border-[#415A77]/20 transition-all ${dropSnapshot.isDraggingOver
                                                    ? "border-[#3A86FF]/70"
                                                    : ""
                                                    }`}
                                            >
                                                {/* Column Header */}
                                                <div className="flex items-center justify-between mb-4">
                                                    <h2 className="text-lg font-semibold text-[#F1F5F9]">
                                                        {col.title}
                                                    </h2>
                                                    <span className="bg-[#415A77]/20 text-[#F1F5F9] text-sm px-2 py-1 rounded">
                                                        {filteredTasks.length}
                                                    </span>
                                                </div>

                                                {/* Tasks */}
                                                <div className="space-y-3">
                                                    {filteredTasks.map((task: any, index: number) => (
                                                        <Draggable
                                                            key={task._id}
                                                            draggableId={task._id}
                                                            index={index}
                                                        >
                                                            {(dragProvided, dragSnapshot) => (
                                                                <div
                                                                    ref={dragProvided.innerRef}
                                                                    {...dragProvided.draggableProps}
                                                                    {...dragProvided.dragHandleProps}
                                                                    className={`relative bg-[#0D1B2A] rounded-lg p-4 border border-[#415A77]/30 hover:border-[#3A86FF]/50 transition-all duration-200 cursor-pointer ${dragSnapshot.isDragging
                                                                        ? "ring-1 ring-[#3A86FF]"
                                                                        : ""
                                                                        }`}
                                                                    // Note: drag aur click mix ho sakte hain — yeh ok rehta hai
                                                                    onClick={() => setEditTask(task)}
                                                                >
                                                                    {/* Actions - Top Right */}
                                                                    <div className="absolute top-2 right-2 flex items-center gap-2">
                                                                        {/* Three Dot Menu */}
                                                                        <div className="relative">
                                                                            <button
                                                                                onClick={(e) => {
                                                                                    e.stopPropagation();
                                                                                    setEditTask(null);
                                                                                    setMenuOpen(
                                                                                        menuOpen === task._id
                                                                                            ? null
                                                                                            : task._id
                                                                                    );
                                                                                }}
                                                                                className="text-gray-400 hover:text-white"
                                                                            >
                                                                                <MoreVertical size={18} />
                                                                            </button>

                                                                            {/* Dropdown */}
                                                                            {menuOpen === task._id && (
                                                                                <div className="absolute right-0 mt-2 w-48 bg-[#1B263B] border border-[#415A77]/40 rounded-lg shadow-lg z-10">
                                                                                    <button
                                                                                        onClick={(e) => {
                                                                                            e.stopPropagation();
                                                                                            setEditTask(task._id, task);
                                                                                            setMenuOpen(null);
                                                                                        }}
                                                                                        className="flex items-center gap-2 w-full px-3 py-2 text-sm text-gray-300 hover:bg-[#415A77]/30 cursor-pointer"
                                                                                    >
                                                                                        <Pencil size={16} /> Edit
                                                                                    </button>
                                                                                    <button
                                                                                        onClick={(e) => {
                                                                                            e.stopPropagation();
                                                                                            handleDelete(task._id);
                                                                                            setMenuOpen(null);
                                                                                        }}
                                                                                        className="flex items-center gap-2 w-full px-3 py-2 text-sm text-red-400 hover:bg-red-600/30 cursor-pointer"
                                                                                    >
                                                                                        <Trash2 size={16} /> Delete
                                                                                    </button>
                                                                                    <hr className="border-t border-[#415A77]/40 my-2" />
                                                                                    <button
                                                                                        onClick={(e) => {
                                                                                            e.stopPropagation();
                                                                                            handleMoveTask(
                                                                                                task._id,
                                                                                                "To-Do"
                                                                                            );
                                                                                            setMenuOpen(null);
                                                                                        }}
                                                                                        className="flex items-center gap-2 w-full px-3 py-2 text-sm text-gray-300 hover:bg-[#415A77]/30 cursor-pointer"
                                                                                    >
                                                                                        Move to To-Do
                                                                                    </button>
                                                                                    <button
                                                                                        onClick={(e) => {
                                                                                            e.stopPropagation();
                                                                                            handleMoveTask(
                                                                                                task._id,
                                                                                                "In Progress"
                                                                                            );
                                                                                            setMenuOpen(null);
                                                                                        }}
                                                                                        className="flex items-center gap-2 w-full px-3 py-2 text-sm text-gray-300 hover:bg-[#415A77]/30 cursor-pointer"
                                                                                    >
                                                                                        Move to In-Progress
                                                                                    </button>
                                                                                    <button
                                                                                        onClick={(e) => {
                                                                                            e.stopPropagation();
                                                                                            handleMoveTask(
                                                                                                task._id,
                                                                                                "Completed"
                                                                                            );
                                                                                            setMenuOpen(null);
                                                                                        }}
                                                                                        className="flex items-center gap-2 w-full px-3 py-2 text-sm text-gray-300 hover:bg-[#415A77]/30 cursor-pointer"
                                                                                    >
                                                                                        Move to Completed
                                                                                    </button>
                                                                                </div>
                                                                            )}
                                                                        </div>
                                                                    </div>

                                                                    {/* Task Content */}
                                                                    <h3 className="text-[#F1F5F9] font-medium mb-2">
                                                                        {task.title}
                                                                    </h3>
                                                                    <p className="text-sm text-gray-400 mb-3">
                                                                        {task.description}
                                                                    </p>
                                                                    <div className="flex items-center justify-between">
                                                                        <span className={`text-xs ${col.color}`}>
                                                                            {task.status === "Completed"
                                                                                ? "Completed"
                                                                                : `Due: ${new Date(
                                                                                    task.dueDate
                                                                                ).toLocaleDateString()}`}
                                                                        </span>
                                                                        <div className="flex -space-x-2">
                                                                            {task.assignedTo?.map((user: any) => (
                                                                                <img
                                                                                    key={user._id}
                                                                                    src={user.image}
                                                                                    alt={user.name}
                                                                                    className="w-6 h-6 rounded-full object-cover border-2 border-[#1B263B]"
                                                                                />
                                                                            ))}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </Draggable>
                                                    ))}
                                                    {dropProvided.placeholder}
                                                </div>

                                                {/* Add Task Button */}
                                                <button
                                                    className="w-full mt-4 py-2 border border-[#3A86FF]/50 text-[#3A86FF] rounded-lg hover:bg-[#3A86FF]/10 transition-all duration-200"
                                                    onClick={() => setShowModal(true)}
                                                >
                                                    + Add Task
                                                </button>
                                            </div>
                                        )}
                                    </Droppable>
                                );
                            })}
                        </div>
                    </DragDropContext>
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
    );
};

export default SingleProject;

