"use client";

import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { getAllProjects, getAllUsers, getTasksCountByAdmin } from "@/queryFunction/queryFunction";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Admin = () => {
  const [projectCount, setProjectCount] = useState(0);
  const [userCount, setUserCount] = useState(0);
  const [taskCount, setTaskCount] = useState(0);
  // Sample data for task statuses


  const getProductsCount = async () => {
    try {
      const res = await getAllProjects()
      //  console.log("Projects", res?.data?.data?.length);
      setProjectCount(res?.data?.data?.length || 0);
    } catch (error) {
      console.error("Error fetching project count:", error);
    }
  };

  const getAllTasks = async () => {
    try {
      const res = await getTasksCountByAdmin()
      // console.log("Tasks", res?.tasks);
      setTaskCount(res?.tasks || 0);

    } catch (error) {
      console.error("Error fetching task count:", error);

    }
  }

  const getUsers = async () => {
    try {
      const response = await getAllUsers();
      // console.log("Users", response?.data?.length);
      setUserCount(response?.data?.length || 0);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }


  useEffect(() => {
    getProductsCount();
    getAllTasks();
    getUsers();
  }, []);

  const [taskStatusData, setTaskStatusData] = useState({});

  useEffect(() => {
    setTaskStatusData({
      projectConut: projectCount || 0,
      userCount: userCount || 0,
      taskCount: taskCount || 0,
    });
  }, [projectCount, userCount, taskCount]);



  const data = {
    labels: ["Total Projects", "Total User", "Total Tasks"],
    datasets: [
      {
        label: "Admin Dashboard",
        data: [
          taskStatusData.projectConut,
          taskStatusData.userCount,
          taskStatusData.taskCount,
        ],
        backgroundColor: ["#2EC4B6", "#FFBE0B", "#FF6B6B"],
        borderRadius: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: { color: "#F1F5F9" },
      },
      title: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        ticks: { color: "#F1F5F9" },
        grid: { color: "rgba(255,255,255,0.1)" },
      },
      y: {
        ticks: { color: "#F1F5F9" },
        grid: { color: "rgba(255,255,255,0.1)" },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="min-h-screen bg-[#0D1B2A] p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-[#F1F5F9] mb-8">Admin Dashboard</h1>

        {/* Summary cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 mb-8">
          {/* All Projects */}
          <div className="bg-[#1B263B] rounded-lg p-6 border border-[#415A77]/20 flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-400 mb-1">All Projects</p>
              <p className="text-3xl font-bold text-[#3A86FF]">{projectCount}</p>
            </div>
            <div className="w-12 h-12 bg-[#3A86FF]/20 rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6 text-[#3A86FF]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 7h18M3 12h18M3 17h18"
                />
              </svg>
            </div>
          </div>

          {/* Total Users */}
          <div className="bg-[#1B263B] rounded-lg p-6 border border-[#415A77]/20 flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-400 mb-1">Total Users</p>
              <p className="text-3xl font-bold text-[#2EC4B6]">{userCount}</p>
            </div>
            <div className="w-12 h-12 bg-[#2EC4B6]/20 rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6 text-[#2EC4B6]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14v7"
                />
              </svg>
            </div>
          </div>

          {/* Total Tasks */}
          <div className="bg-[#1B263B] rounded-lg p-6 border border-[#415A77]/20 flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-400 mb-1">Total Tasks</p>
              <p className="text-3xl font-bold text-[#FFBE0B]">{taskCount}</p>
            </div>
            <div className="w-12 h-12 bg-[#FFBE0B]/20 rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6 text-[#FFBE0B]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 17v-6a3 3 0 116 0v6"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Task Overview chart */}
          <div className="lg:col-span-2">
            <div className="bg-[#1B263B] rounded-lg p-6 border border-[#415A77]/20">
              <h2 className="text-xl font-semibold text-[#F1F5F9] mb-4">
                Task Overview
              </h2>
              <div className="h-64">
                <Bar data={data} options={options} />
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div>
            <div className="bg-[#1B263B] rounded-lg p-6 border border-[#415A77]/20">
              <h2 className="text-xl font-semibold text-[#F1F5F9] mb-4">
                Recent Activity
              </h2>
              <div className="space-y-4">
                {/* Sample activities */}
                <div className="flex items-start space-x-3">
                  <img
                    src="https://images.unsplash.com/photo-1509483730228-811e47696246?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                    className="w-8 h-8 rounded-full object-cover"
                    alt="User"
                  />
                  <div>
                    <p className="text-sm text-[#F1F5F9]">New task created</p>
                    <p className="text-xs text-gray-400">2 minutes ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <img
                    src="https://images.unsplash.com/photo-1564272153-2771b7aab168?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                    className="w-8 h-8 rounded-full object-cover"
                    alt="User"
                  />
                  <div>
                    <p className="text-sm text-[#F1F5F9]">Task completed</p>
                    <p className="text-xs text-gray-400">15 minutes ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <img
                    src="https://images.unsplash.com/photo-1662351557356-bf3b79fe19d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                    className="w-8 h-8 rounded-full object-cover"
                    alt="User"
                  />
                  <div>
                    <p className="text-sm text-[#F1F5F9]">Project updated</p>
                    <p className="text-xs text-gray-400">1 hour ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
