"use client";
import { getProfile } from '@/queryFunction/queryFunction';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import React, { use } from 'react';

interface HeaderProps {
  onToggleSidebar: () => void;
}


const AdminHeader: React.FC<HeaderProps> = ({ onToggleSidebar }) => {
  const router = useRouter();
  const handleLogout = () => {
    window.confirm("Are you sure you want to logout?")
    sessionStorage.clear();
    router.push('/login');
  }

    const {data , isLoading} = useQuery({
    queryKey: ['profile'],
    queryFn: getProfile,
  })
  
  // console.log("profile Data", data);

  return (
    <header className="bg-[#0D1B2A] border-b border-[#415A77]/20 px-4 py-3 lg:px-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={onToggleSidebar}
            className="lg:hidden flex items-center justify-center w-8 h-8 text-gray-400 hover:text-[#F1F5F9] hover:bg-[#415A77]/10 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3A86FF]"
          >
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
          <h1 className="text-xl font-semibold text-[#F1F5F9] lg:block">
            Task Management
          </h1>
        </div>

        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="hidden md:block">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-64 px-4 py-2 bg-[#1B263B] border border-[#415A77]/20 rounded-lg text-[#F1F5F9] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3A86FF] focus:border-transparent"
              />
              <svg
                className="absolute right-3 top-2.5 w-4 h-4 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </div>
          </div>

          {/* Notifications */}
          <button
            type="button"
            className="relative flex items-center justify-center w-8 h-8 text-gray-400 hover:text-[#F1F5F9] hover:bg-[#415A77]/10 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3A86FF]"
          >
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
              <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
            </svg>
            <span className="absolute top-0 right-0 w-2 h-2 bg-[#FF6B6B] rounded-full"></span>
          </button>

          {/* User Profile (Mobile) */}
          <div className="relative">
            <button
              type="button"
              className="flex items-center justify-center w-8 h-8 rounded-full focus:outline-none focus:ring-2 focus:ring-[#3A86FF]"
              id="profile-dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              onClick={(e) => {
                const dropdown = document.getElementById("profile-dropdown-content");
                if (dropdown) {
                  dropdown.classList.toggle("hidden");
                }
              }}
            >
              <img
                className="w-8 h-8 rounded-full"
                src={data?.data?.data?.image}
                alt="Profile"
              />
            </button>

            <div
              className="hidden absolute top-full right-0 w-48 bg-[#1B263B] border border-[#415A77]/20 rounded-lg shadow-lg z-10"
              id="profile-dropdown-content"
            >
             <div>
                <div className='block w-full px-4 py-2 text-left text-[#F1F5F9] hover:bg-[#415A77]/10 focus:outline-none focus:bg-[#415A77]/10'>
                    {data?.data?.data?.name}
                </div>
             </div>
              <button
                type="button"
                className="block w-full px-4 py-2 text-left text-[#F1F5F9] hover:bg-[#415A77]/10 focus:outline-none focus:bg-[#415A77]/10"
                onClick={() => {
                  router.push('/admin/profile');
                }}
              >
                Profile
              </button>
              <button
                type="button"
                className="block w-full px-4 py-2 text-left text-[#F1F5F9] hover:bg-[#415A77]/10 focus:outline-none focus:bg-[#415A77]/10"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;