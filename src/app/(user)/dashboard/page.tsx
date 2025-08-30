"use client"

import React, { useEffect, useState } from 'react'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import { getAllProjects } from '@/queryFunction/queryFunction'

ChartJS.register(ArcElement, Tooltip, Legend)

const Dashboard = () => {
  const [projectCount , setProjectCount] = useState(0);
  const [taskCount, setTaskCount] = useState(0);
  const [completedCount, setCompletedCount] = useState(0);
  const [inProgressCount, setInProgressCount] = useState(0);
  const [toDoCount, setToDoCount] = useState(0);

  const getProductsCount = async () => {
    try {
      const res = await getAllProjects();
      setProjectCount(res?.data?.data?.length || 0);
    } catch (error) {
      console.error("Error fetching project count:", error);
    }
  };
  
  useEffect(() => {
    getProductsCount();
  }, []);


  const data = {
    labels: ['Total Projects', 'Total Tasks', 'Completed', 'In Progress', 'To-Do'],
    datasets: [
      {
        label: 'Tasks Overview',
        data: [projectCount, 247, 156, 42, 12],
        backgroundColor: [
          '#3A86FF',   // Total Projects - blue
          '#0D4DFF',   // Total Tasks - darker blue
          '#2EC4B6',   // Completed - teal
          '#FFBE0B',   // In Progress - yellow
          '#FF6B6B'    // To-Do - red
        ],
        borderColor: '#0D1B2A',
        borderWidth: 2,
      }
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: '#F1F5F9',
          font: { size: 14 },
        },
      },
      tooltip: {
        enabled: true,
      },
    },
  }

  return (
    <div className="min-h-screen bg-[#0D1B2A] p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-[#F1F5F9] mb-8">Dashboard</h1>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          {/* Total Projects */}
          <div className="bg-[#1B263B] rounded-lg p-6 border border-[#415A77]/20 flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-400 mb-1">Total Projects</p>
              <p className="text-3xl font-bold text-[#F1F5F9]">{projectCount}</p>
            </div>
            <div className="w-12 h-12 bg-[#3A86FF]/20 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-[#3A86FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2H9z" />
              </svg>
            </div>
          </div>

          {/* Total Tasks */}
          <div className="bg-[#1B263B] rounded-lg p-6 border border-[#415A77]/20 flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-400 mb-1">Total Tasks</p>
              <p className="text-3xl font-bold text-[#F1F5F9]">247</p>
            </div>
            <div className="w-12 h-12 bg-[#0D4DFF]/20 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-[#0D4DFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2H9z" />
              </svg>
            </div>
          </div>

          {/* Completed */}
          <div className="bg-[#1B263B] rounded-lg p-6 border border-[#415A77]/20 flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-400 mb-1">Completed</p>
              <p className="text-3xl font-bold text-[#2EC4B6]">156</p>
            </div>
            <div className="w-12 h-12 bg-[#2EC4B6]/20 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-[#2EC4B6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>

          {/* In Progress */}
          <div className="bg-[#1B263B] rounded-lg p-6 border border-[#415A77]/20 flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-400 mb-1">In Progress</p>
              <p className="text-3xl font-bold text-[#FFBE0B]">42</p>
            </div>
            <div className="w-12 h-12 bg-[#FFBE0B]/20 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-[#FFBE0B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>

          {/* To-Do */}
          <div className="bg-[#1B263B] rounded-lg p-6 border border-[#415A77]/20 flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-400 mb-1">To-Do</p>
              <p className="text-3xl font-bold text-[#FF6B6B]">12</p>
            </div>
            <div className="w-12 h-12 bg-[#FF6B6B]/20 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-[#FF6B6B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Chart and Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Doughnut Chart */}
          <div className="lg:col-span-2">
            <div className="bg-[#1B263B] rounded-lg p-6 border border-[#415A77]/20 flex flex-col items-center">
              <h2 className="text-xl font-semibold text-[#F1F5F9] mb-4">Task Overview</h2>
              <div className="relative w-full h-64 max-w-md">
                <Doughnut data={data} options={options} />
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div>
            <div className="bg-[#1B263B] rounded-lg p-6 border border-[#415A77]/20">
              <h2 className="text-xl font-semibold text-[#F1F5F9] mb-4">Recent Activity</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <img
                    src="https://images.unsplash.com/photo-1509483730228-811e47696246?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                    alt="User 1"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm text-[#F1F5F9]">New task created</p>
                    <p className="text-xs text-gray-400">2 minutes ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <img
                    src="https://images.unsplash.com/photo-1564272153-2771b7aab168?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                    alt="User 2"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm text-[#F1F5F9]">Task completed</p>
                    <p className="text-xs text-gray-400">15 minutes ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <img
                    src="https://images.unsplash.com/photo-1662351557356-bf3b79f35c17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                    alt="User 3"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm text-[#F1F5F9]">Project deadline approaching</p>
                    <p className="text-xs text-gray-400">1 hour ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
