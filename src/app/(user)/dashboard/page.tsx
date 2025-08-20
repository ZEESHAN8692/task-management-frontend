import React from 'react'

const Dashboard = () => {
  return (
    <>
      <section id="dashboard" className="min-h-screen bg-[#0D1B2A] p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-[#F1F5F9] mb-8">Dashboard</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-[#1B263B] rounded-lg p-6 border border-[#415A77]/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400 mb-1">Total Tasks</p>
                  <p className="text-3xl font-bold text-[#F1F5F9]">247</p>
                </div>
                <div className="w-12 h-12 bg-[#3A86FF]/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#3A86FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2H9z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-[#1B263B] rounded-lg p-6 border border-[#415A77]/20">
              <div className="flex items-center justify-between">
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
            </div>
            <div className="bg-[#1B263B] rounded-lg p-6 border border-[#415A77]/20">
              <div className="flex items-center justify-between">
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
            </div>
            <div className="bg-[#1B263B] rounded-lg p-6 border border-[#415A77]/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400 mb-1">Overdue</p>
                  <p className="text-3xl font-bold text-[#FF6B6B]">12</p>
                </div>
                <div className="w-12 h-12 bg-[#FF6B6B]/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#FF6B6B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div className="bg-[#1B263B] rounded-lg p-6 border border-[#415A77]/20">
                <h2 className="text-xl font-semibold text-[#F1F5F9] mb-4">Task Overview</h2>
                {/* <canvas id="taskChart" class="w-full h-64"></canvas> */}
              </div>
            </div>
            <div>
              <div className="bg-[#1B263B] rounded-lg p-6 border border-[#415A77]/20">
                <h2 className="text-xl font-semibold text-[#F1F5F9] mb-4">Recent Activity</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <img src="https://images.unsplash.com/photo-1509483730228-811e47696246?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8ZGFyayUyMGJsdWUlMjB0ZWNoJTIwd29ya3NwYWNlfGVufDF8MHx8fDE3NTU0NTc3NzN8MA&ixlib=rb-4.1.0&q=80&w=1080" className="w-8 h-8 rounded-full object-cover" />
                    <div>
                      <p className="text-sm text-[#F1F5F9]">New task created</p>
                      <p className="text-xs text-gray-400">2 minutes ago</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <img src="https://images.unsplash.com/photo-1564272153-2771b7aab168?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8Mnx8ZGFyayUyMGJsdWUlMjB0ZWNoJTIwd29ya3NwYWNlfGVufDF8MHx8fDE3NTU0NTc3NzN8MA&ixlib=rb-4.1.0&q=80&w=1080" className="w-8 h-8 rounded-full object-cover" />
                    <div>
                      <p className="text-sm text-[#F1F5F9]">Task completed</p>
                      <p className="text-xs text-gray-400">15 minutes ago</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <img src="https://images.unsplash.com/photo-1662351557356-bf3b79fe19d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8M3x8ZGFyayUyMGJsdWUlMjB0ZWNoJTIwd29ya3NwYWNlfGVufDF8MHx8fDE3NTU0NTc3NzN8MA&ixlib=rb-4.1.0&q=80&w=1080" className="w-8 h-8 rounded-full object-cover" />
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
      </section>

    </>
  )
}

export default Dashboard
