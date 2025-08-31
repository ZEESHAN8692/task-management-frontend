
"use client";

import { getProfile } from "@/queryFunction/queryFunction";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const AdminProfile = () => {
  const [profileData, setProfileData] = useState<any>(null);

  const getProfileData = async () => {
    try {
      const res = await getProfile();
      console.log("Profile Data", res?.data?.data);
      setProfileData(res?.data?.data);
    } catch (error) {
      console.error("Error fetching profile data:", error);
    }
  };

  useEffect(() => {
    getProfileData();
  }, []);

  return (
    <div className="min-h-screen bg-[#0D1B2A] p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-[#F1F5F9] mb-8"
        >
          Profile
        </motion.h1>

        {/* Profile Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="bg-[#1B263B] rounded-lg p-6 border border-[#415A77]/20">
              <h2 className="text-xl font-semibold text-[#F1F5F9] mb-6">
                Profile Information
              </h2>

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
                <div className="flex-1 space-y-4 text-[#F1F5F9]">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-400 text-sm">Full Name</p>
                      <p className="font-medium">
                        {profileData?.name || "Mia Hudson"}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Email</p>
                      <p className="font-medium">
                        {profileData?.email || "mia.hudson@example.com"}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Department</p>
                      <p className="font-medium">
                        {profileData?.department || "Product Development"}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Role</p>
                      <p className="font-medium">
                        {profileData?.role || "Senior Project Manager"}
                      </p>
                    </div>
                  </div>

                  <div>
                    <p className="text-gray-400 text-sm">Bio</p>
                    <p className="font-medium">
                      {profileData?.bio ||
                        "Experienced project manager with a passion for delivering high-quality products. Specialized in agile methodologies and cross-functional team leadership."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Recent Activities */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-[#1B263B] rounded-lg p-6 border border-[#415A77]/20">
              <h2 className="text-xl font-semibold text-[#F1F5F9] mb-4">
                Recent Activities
              </h2>
              <div className="space-y-4">
                {[
                  {
                    text: 'Completed "API Integration"',
                    time: "2 hours ago",
                    color: "#2EC4B6",
                  },
                  {
                    text: 'Created new task "UI Review"',
                    time: "4 hours ago",
                    color: "#3A86FF",
                  },
                  {
                    text: 'Commented on "Mobile App"',
                    time: "1 day ago",
                    color: "#FFBE0B",
                  },
                  {
                    text: 'Joined team "Design System"',
                    time: "2 days ago",
                    color: "#FF6B6B",
                  },
                ].map((activity, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.2 }}
                    className="flex items-start space-x-3"
                  >
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${activity.color}33` }}
                    >
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: activity.color }}
                      ></span>
                    </div>
                    <div>
                      <p className="text-sm text-[#F1F5F9]">{activity.text}</p>
                      <p className="text-xs text-gray-400">{activity.time}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Reset Password Button */}
    
              
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 flex justify-center"
        >
          <button className="px-6 py-3 bg-[#3A86FF] text-white rounded-md hover:bg-[#3A86FF]/90 focus:outline-none focus:ring-2 focus:ring-[#3A86FF] focus:ring-offset-2 focus:ring-offset-[#0D1B2A] transition-colors">
            Reset Password
          </button>
        </motion.div> */}
      </div>
    </div>
  );
};

export default AdminProfile;
