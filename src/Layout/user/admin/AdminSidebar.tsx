"use client";
import Link from 'next/link';
import React from 'react';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const AdminSidebar: React.FC<SidebarProps> = ({ isOpen, onToggle }) => {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onToggle}
        />
      )}
      
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 z-50 h-screen w-64 bg-[#0D1B2A] border-r border-[#415A77]/20 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:z-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <header className="p-4 flex justify-between items-center border-b border-[#415A77]/20">
            <a
              className="flex-none font-semibold text-xl text-[#F1F5F9] focus:outline-none focus:opacity-80"
              href="#"
              aria-label="TaskHub"
            >
              TaskHub Admin
            </a>
            <button
              type="button"
              className="lg:hidden flex justify-center items-center w-6 h-6 bg-[#1B263B] border border-[#415A77]/20 text-gray-400 hover:bg-[#415A77]/10 rounded-full focus:outline-none focus:bg-[#415A77]/10"
              onClick={onToggle}
            >
              <svg
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </header>

          {/* Navigation */}
          <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
            <ul className="space-y-1">
              <li>
                <Link
                  className="flex items-center gap-x-3.5 py-2 px-2.5 bg-[#1B263B] text-sm text-[#F1F5F9] rounded-lg hover:bg-[#415A77]/20 focus:outline-none focus:bg-[#415A77]/20"
                  href="/admin"
                >
                  <svg
                    className="w-4 h-4 text-[#3A86FF]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                  Dashboard
                </Link>
              </li>
        
              <li>
                <Link
                  className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 rounded-lg hover:bg-[#415A77]/20 focus:outline-none focus:bg-[#415A77]/20 hover:text-[#F1F5F9]"
                  href="/admin/projects"
                >
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="m22 21-3-3m0 0-3-3m3 3 3 3m-3-3-3 3" />
                  </svg>
                  Projects
                </Link>
              </li>
    
              <li>
                <Link
                  className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 rounded-lg hover:bg-[#415A77]/20 focus:outline-none focus:bg-[#415A77]/20 hover:text-[#F1F5F9]"
                  href="/admin/users"
                >
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <polyline points="16 11 18 13 22 9" />
                  </svg>
                  Users
                </Link>
              </li>
            </ul>
          </nav>

          {/* Footer */}

        </div>
      </div>
    </>
  );
};

export default AdminSidebar;
