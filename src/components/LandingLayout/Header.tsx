"use client";
import Link from 'next/link'


import React, { useState } from 'react'

const LandingHeader = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
           {/* Navigation */}
      <nav className="bg-[#0D1B2A] border-b border-[#415A77]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-[#F1F5F9]">TaskHub</h1>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a
                  href="#features"
                  className="text-gray-300 hover:text-[#F1F5F9] px-3 py-2 rounded-md text-sm font-medium hover:bg-[#3A86FF]/90 transition-colors"
                >
                  Features
                </a>
                <a
                  href="/about"
                  className="text-gray-300 hover:text-[#F1F5F9] px-3 py-2 rounded-md text-sm font-medium hover:bg-[#3A86FF]/90 transition-colors"
                >
                  About
                </a>
                <a
                  href="#pricing"
                  className="text-gray-300 hover:text-[#F1F5F9] px-3 py-2 rounded-md text-sm font-medium hover:bg-[#3A86FF]/90 transition-colors"
                >
                  Pricing
                </a>
                <Link
                  href="/login"
                  className=" text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#3A86FF]/90 transition-colors"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="] bg-gray-700 border border-[#415A77]/20 text-[#F1F5F9] px-4 py-2 rounded-md text-sm font-medium hover:bg-[#3A86FF]/90 transition-colors"
                >
                  Sign Up
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="bg-[#1B263B] inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-[#F1F5F9] hover:bg-[#415A77]/20 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#3A86FF]"
              >
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#1B263B] border-t border-[#415A77]/20">
              <a
                href="#features"
                className="text-gray-300 hover:text-[#F1F5F9] block px-3 py-2 rounded-md text-base font-medium"
              >
                Features
              </a>
              <a
                href="#about"
                className="text-gray-300 hover:text-[#F1F5F9] block px-3 py-2 rounded-md text-base font-medium"
              >
                About
              </a>
              <a
                href="#pricing"
                className="text-gray-300 hover:text-[#F1F5F9] block px-3 py-2 rounded-md text-base font-medium"
              >
                Pricing
              </a>
              <Link
                href="/login"
                className="bg-[#3A86FF] text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-[#3A86FF]/90"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="bg-[#415A77]/20 text-[#F1F5F9] block px-3 py-2 rounded-md text-base font-medium hover:bg-[#415A77]/30"
              >
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}

export default LandingHeader