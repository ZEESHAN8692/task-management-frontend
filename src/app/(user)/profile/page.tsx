import React from 'react'

const Profile = () => {
  return (
    <div className="min-h-screen bg-[#0D1B2A] p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-[#F1F5F9] mb-8">Profile</h1>
        
        {/* Profile Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-[#1B263B] rounded-lg p-6 border border-[#415A77]/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400 mb-1">Tasks Created</p>
                <p className="text-3xl font-bold text-[#F1F5F9]">89</p>
              </div>
              <div className="w-12 h-12 bg-[#3A86FF]/20 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-[#3A86FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="bg-[#1B263B] rounded-lg p-6 border border-[#415A77]/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400 mb-1">Tasks Completed</p>
                <p className="text-3xl font-bold text-[#2EC4B6]">67</p>
              </div>
              <div className="w-12 h-12 bg-[#2EC4B6]/20 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-[#2EC4B6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="bg-[#1B263B] rounded-lg p-6 border border-[#415A77]/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400 mb-1">Projects Joined</p>
                <p className="text-3xl font-bold text-[#FFBE0B]">12</p>
              </div>
              <div className="w-12 h-12 bg-[#FFBE0B]/20 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-[#FFBE0B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="bg-[#1B263B] rounded-lg p-6 border border-[#415A77]/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400 mb-1">Team Members</p>
                <p className="text-3xl font-bold text-[#FF6B6B]">24</p>
              </div>
              <div className="w-12 h-12 bg-[#FF6B6B]/20 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-[#FF6B6B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        {/* Profile Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Information */}
          <div className="lg:col-span-2">
            <div className="bg-[#1B263B] rounded-lg p-6 border border-[#415A77]/20">
              <h2 className="text-xl font-semibold text-[#F1F5F9] mb-6">Profile Information</h2>
              
              <div className="flex items-start space-x-6">
                {/* Profile Picture */}
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-[#3A86FF]/20">
                    <img 
                      src="https://images.unsplash.com/photo-1734122415415-88cb1d7d5dc0?q=80&w=320&h=320&auto=format&fit=facearea&facepad=3&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                      alt="Profile" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/* Profile Details */}
                <div className="flex-1 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-1">Full Name</label>
                      <input 
                        type="text" 
                        value="Mia Hudson" 
                        className="w-full px-3 py-2 bg-[#0D1B2A] border border-[#415A77]/20 rounded-md text-[#F1F5F9] focus:outline-none focus:ring-2 focus:ring-[#3A86FF] focus:border-transparent"
                        readOnly
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                      <input 
                        type="email" 
                        value="mia.hudson@example.com" 
                        className="w-full px-3 py-2 bg-[#0D1B2A] border border-[#415A77]/20 rounded-md text-[#F1F5F9] focus:outline-none focus:ring-2 focus:ring-[#3A86FF] focus:border-transparent"
                        readOnly
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-1">Department</label>
                      <input 
                        type="text" 
                        value="Product Development" 
                        className="w-full px-3 py-2 bg-[#0D1B2A] border border-[#415A77]/20 rounded-md text-[#F1F5F9] focus:outline-none focus:ring-2 focus:ring-[#3A86FF] focus:border-transparent"
                        readOnly
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-1">Role</label>
                      <input 
                        type="text" 
                        value="Senior Project Manager" 
                        className="w-full px-3 py-2 bg-[#0D1B2A] border border-[#415A77]/20 rounded-md text-[#F1F5F9] focus:outline-none focus:ring-2 focus:ring-[#3A86FF] focus:border-transparent"
                        readOnly
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Bio</label>
                    <textarea 
                      rows={3}
                      value="Experienced project manager with a passion for delivering high-quality products. Specialized in agile methodologies and cross-functional team leadership."
                      className="w-full px-3 py-2 bg-[#0D1B2A] border border-[#415A77]/20 rounded-md text-[#F1F5F9] focus:outline-none focus:ring-2 focus:ring-[#3A86FF] focus:border-transparent resize-none"
                      readOnly
                    />
                  </div>
                  
                  <div className="flex space-x-3">
                    <button className="px-4 py-2 bg-[#3A86FF] text-white rounded-md hover:bg-[#3A86FF]/90 focus:outline-none focus:ring-2 focus:ring-[#3A86FF] focus:ring-offset-2 focus:ring-offset-[#1B263B] transition-colors">
                      Edit Profile
                    </button>
                    <button className="px-4 py-2 bg-[#415A77]/20 text-[#F1F5F9] rounded-md hover:bg-[#415A77]/30 focus:outline-none focus:ring-2 focus:ring-[#415A77] focus:ring-offset-2 focus:ring-offset-[#1B263B] transition-colors">
                      Change Password
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Recent Activities */}
          <div>
            <div className="bg-[#1B263B] rounded-lg p-6 border border-[#415A77]/20">
              <h2 className="text-xl font-semibold text-[#F1F5F9] mb-4">Recent Activities</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-[#2EC4B6]/20 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-[#2EC4B6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-[#F1F5F9]">Completed "API Integration"</p>
                    <p className="text-xs text-gray-400">2 hours ago</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-[#3A86FF]/20 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-[#3A86FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-[#F1F5F9]">Created new task "UI Review"</p>
                    <p className="text-xs text-gray-400">4 hours ago</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-[#FFBE0B]/20 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-[#FFBE0B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-[#F1F5F9]">Commented on "Mobile App"</p>
                    <p className="text-xs text-gray-400">1 day ago</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-[#FF6B6B]/20 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-[#FF6B6B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-[#F1F5F9]">Joined team "Design System"</p>
                    <p className="text-xs text-gray-400">2 days ago</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-[#2EC4B6]/20 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-[#2EC4B6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-[#F1F5F9]">Completed "Database Migration"</p>
                    <p className="text-xs text-gray-400">3 days ago</p>
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

export default Profile
