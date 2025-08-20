import React from 'react'

const Settings = () => {
  return (
    <div className="min-h-screen bg-[#0D1B2A] p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-[#F1F5F9] mb-8">Settings</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Settings */}
          <div className="lg:col-span-2">
            <div className="bg-[#1B263B] rounded-lg p-6 border border-[#415A77]/20 mb-6">
              <h2 className="text-xl font-semibold text-[#F1F5F9] mb-6">Profile Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#F1F5F9] mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-[#0D1B2A] border border-[#415A77]/20 rounded-lg text-[#F1F5F9] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3A86FF]/50 focus:border-[#3A86FF]"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#F1F5F9] mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-[#0D1B2A] border border-[#415A77]/20 rounded-lg text-[#F1F5F9] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3A86FF]/50 focus:border-[#3A86FF]"
                    placeholder="Doe"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-[#F1F5F9] mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-[#0D1B2A] border border-[#415A77]/20 rounded-lg text-[#F1F5F9] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3A86FF]/50 focus:border-[#3A86FF]"
                    placeholder="john.doe@example.com"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-[#F1F5F9] mb-2">Bio</label>
                  <textarea
                    className="w-full px-4 py-3 bg-[#0D1B2A] border border-[#415A77]/20 rounded-lg text-[#F1F5F9] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3A86FF]/50 focus:border-[#3A86FF] h-24 resize-none"
                    placeholder="Tell us about yourself..."
                  />
                </div>
              </div>
              <div className="flex justify-end mt-6">
                <button className="px-6 py-3 bg-[#3A86FF] text-white rounded-lg hover:bg-[#3A86FF]/80 transition-colors">
                  Save Changes
                </button>
              </div>
            </div>

            {/* Notification Settings */}
            <div className="bg-[#1B263B] rounded-lg p-6 border border-[#415A77]/20 mb-6">
              <h2 className="text-xl font-semibold text-[#F1F5F9] mb-6">Notification Preferences</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-[#F1F5F9] font-medium">Email Notifications</h3>
                    <p className="text-gray-400 text-sm">Receive notifications via email</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-[#415A77] peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#3A86FF]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#3A86FF]"></div>
                  </label>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-[#F1F5F9] font-medium">Push Notifications</h3>
                    <p className="text-gray-400 text-sm">Receive push notifications in browser</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-[#415A77] peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#3A86FF]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#3A86FF]"></div>
                  </label>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-[#F1F5F9] font-medium">Task Reminders</h3>
                    <p className="text-gray-400 text-sm">Get reminded about upcoming deadlines</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-[#415A77] peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#3A86FF]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#3A86FF]"></div>
                  </label>
                </div>
              </div>
            </div>

            {/* Security Settings */}
            <div className="bg-[#1B263B] rounded-lg p-6 border border-[#415A77]/20">
              <h2 className="text-xl font-semibold text-[#F1F5F9] mb-6">Security</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#F1F5F9] mb-2">Current Password</label>
                  <input
                    type="password"
                    className="w-full px-4 py-3 bg-[#0D1B2A] border border-[#415A77]/20 rounded-lg text-[#F1F5F9] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3A86FF]/50 focus:border-[#3A86FF]"
                    placeholder="Enter current password"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#F1F5F9] mb-2">New Password</label>
                  <input
                    type="password"
                    className="w-full px-4 py-3 bg-[#0D1B2A] border border-[#415A77]/20 rounded-lg text-[#F1F5F9] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3A86FF]/50 focus:border-[#3A86FF]"
                    placeholder="Enter new password"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#F1F5F9] mb-2">Confirm New Password</label>
                  <input
                    type="password"
                    className="w-full px-4 py-3 bg-[#0D1B2A] border border-[#415A77]/20 rounded-lg text-[#F1F5F9] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3A86FF]/50 focus:border-[#3A86FF]"
                    placeholder="Confirm new password"
                  />
                </div>
                <button className="px-6 py-3 bg-[#3A86FF] text-white rounded-lg hover:bg-[#3A86FF]/80 transition-colors">
                  Update Password
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Theme Settings */}
            <div className="bg-[#1B263B] rounded-lg p-6 border border-[#415A77]/20">
              <h2 className="text-xl font-semibold text-[#F1F5F9] mb-4">Appearance</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-400 mb-3">Theme</p>
                  <div className="grid grid-cols-2 gap-2">
                    <button className="p-3 border-2 border-[#3A86FF] rounded-lg bg-[#0D1B2A] text-[#F1F5F9] text-sm">
                      Dark
                    </button>
                    <button className="p-3 border border-[#415A77]/20 rounded-lg bg-[#0D1B2A] text-gray-400 text-sm hover:border-[#415A77]/40">
                      Light
                    </button>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-3">Language</p>
                  <select className="w-full px-4 py-3 bg-[#0D1B2A] border border-[#415A77]/20 rounded-lg text-[#F1F5F9] focus:outline-none focus:ring-2 focus:ring-[#3A86FF]/50 focus:border-[#3A86FF]">
                    <option>English (US)</option>
                    <option>Spanish</option>
                    <option>French</option>
                    <option>German</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Account Actions */}
            <div className="bg-[#1B263B] rounded-lg p-6 border border-[#415A77]/20">
              <h2 className="text-xl font-semibold text-[#F1F5F9] mb-4">Account</h2>
              <div className="space-y-3">
                <button className="w-full px-4 py-3 text-left text-gray-400 hover:text-[#F1F5F9] hover:bg-[#415A77]/10 rounded-lg transition-colors">
                  Export Data
                </button>
                <button className="w-full px-4 py-3 text-left text-gray-400 hover:text-[#F1F5F9] hover:bg-[#415A77]/10 rounded-lg transition-colors">
                  Download App
                </button>
                <button className="w-full px-4 py-3 text-left text-[#FF6B6B] hover:bg-[#FF6B6B]/10 rounded-lg transition-colors">
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings