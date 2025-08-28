"use client";

import { getAllProjects } from '@/queryFunction/queryFunction'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import React from 'react'

const Projects = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['projects'],
    queryFn:  getAllProjects
  })

  console.log("Project Data ",data)


  return (
    <div className="min-h-screen bg-[#0D1B2A] p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-[#F1F5F9] mb-8">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Project Card 1 */}
          <div className="bg-[#1B263B] rounded-lg p-6 border border-[#415A77]/20">
            <div className="flex items-start justify-between mb-4">
              <div>
                <Link href="">
                  <h3 className="text-xl font-semibold mb-2 text-[#F1F5F9]">Mobile App Redesign</h3>
                </Link>
                <p className="text-gray-400 text-sm">Modern UI/UX overhaul</p>
              </div>
              <div className="flex space-x-2">
                <button className="text-gray-400 hover:text-[#3A86FF]">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </button>
                <button className="text-gray-400 hover:text-[#FF6B6B]">
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
                <img src="https://images.unsplash.com/photo-1643300840302-303d1e056e21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8ZGFyayUyMGJsdWUlMjBpbnRlcmZhY2UlMjB0ZWNofGVufDF8MHx8fDE3NTU0NTc4NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080" alt="Project" className="w-8 h-8 rounded-full border-2 border-[#1B263B]" />
                <img src="https://avatar.iran.liara.run/public/11" alt="Team member" className="w-8 h-8 rounded-full border-2 border-[#1B263B]" />
                <img src="https://avatar.iran.liara.run/public/12" alt="Team member" className="w-8 h-8 rounded-full border-2 border-[#1B263B]" />
              </div>
            </div>
          </div>
          {/* Project Card 2 */}
          <div className="bg-[#1B263B] rounded-lg p-6 border border-[#415A77]/20">
            <div className="flex items-start justify-between mb-4">
              <div>
                <Link href="">
                  <h3 className="text-xl font-semibold mb-2 text-[#F1F5F9]">API Development</h3>
                </Link>
                <p className="text-gray-400 text-sm">Backend services</p>
              </div>
              <div className="flex space-x-2">
                <button className="text-gray-400 hover:text-[#3A86FF]">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </button>
                <button className="text-gray-400 hover:text-[#FF6B6B]">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="text-gray-400">Progress</span>
                <span className="text-[#2EC4B6]">92%</span>
              </div>
              <div className="w-full bg-[#415A77]/30 rounded-full h-2">
                <div className="bg-[#2EC4B6] h-2 rounded-full" style={{ width: '92%' }} />
              </div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-400">18 tasks</span>
              <div className="flex -space-x-2">
                <img src="https://images.unsplash.com/photo-1702539336564-b37d0f3276e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8Mnx8ZGFyayUyMGJsdWUlMjBpbnRlcmZhY2UlMjB0ZWNofGVufDF8MHx8fDE3NTU0NTc4NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080" alt="Project" className="w-8 h-8 rounded-full border-2 border-[#1B263B]" />
                <img src="https://avatar.iran.liara.run/public/13" alt="Team member" className="w-8 h-8 rounded-full border-2 border-[#1B263B]" />
              </div>
            </div>
          </div>
          {/* Project Card 3 */}
          <div className="bg-[#1B263B] rounded-lg p-6 border border-[#415A77]/20">
            <div className="flex items-start justify-between mb-4">
              <div>
                <Link href="">
                  <h3 className="text-xl font-semibold mb-2 text-[#F1F5F9]">Marketing Campaign</h3>
                </Link>
                <p className="text-gray-400 text-sm">Product launch</p>
              </div>
              <div className="flex space-x-2">
                <button className="text-gray-400 hover:text-[#3A86FF]">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </button>
                <button className="text-gray-400 hover:text-[#FF6B6B]">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="text-gray-400">Progress</span>
                <span className="text-[#FFBE0B]">45%</span>
              </div>
              <div className="w-full bg-[#415A77]/30 rounded-full h-2">
                <div className="bg-[#FFBE0B] h-2 rounded-full" style={{ width: '45%' }} />
              </div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-400">32 tasks</span>
              <div className="flex -space-x-2">
                <img src="https://images.unsplash.com/photo-1620570625542-194933f7639a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8M3x8ZGFyayUyMGJsdWUlMjBpbnRlcmZhY2UlMjB0ZWNofGVufDF8MHx8fDE3NTU0NTc4NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080" alt="Project" className="w-8 h-8 rounded-full border-2 border-[#1B263B]" />
                <img src="https://avatar.iran.liara.run/public/14" alt="Team member" className="w-8 h-8 rounded-full border-2 border-[#1B263B]" />
                <img src="https://avatar.iran.liara.run/public/15" alt="Team member" className="w-8 h-8 rounded-full border-2 border-[#1B263B]" />
                <img src="https://avatar.iran.liara.run/public/16" alt="Team member" className="w-8 h-8 rounded-full border-2 border-[#1B263B]" />
              </div>
            </div>
          </div>
          {/* Add New Project Card */}
          <Link href="/projects/new">
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
  )
}

export default Projects
