"use client";
import LandingFooter from "@/components/LandingLayout/Footer";
import LandingHeader from "@/components/LandingLayout/Header";
import { Lan } from "@mui/icons-material";
import Link from "next/link";
import { useState } from "react";

const About = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0D1B2A]">
      {/* Navigation */}
    <LandingHeader/>

      {/* About Content */}
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#F1F5F9] mb-4">About TaskHub</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Simplifying task management for teams worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-2xl font-bold text-[#F1F5F9] mb-6">Our Mission</h2>
            <p className="text-gray-300 mb-6">
              At TaskHub, we believe that great work happens when teams are organized, focused, and empowered. 
              Our mission is to provide intuitive tools that help teams collaborate effectively and achieve their goals.
            </p>
            <p className="text-gray-300">
              Founded in 2024, TaskHub has quickly become a trusted platform for thousands of teams looking to 
              streamline their workflow and boost productivity.
            </p>
          </div>
          <div className="bg-[#1B263B] rounded-xl p-8 border border-[#415A77]/20">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#3A86FF]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-[#3A86FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#F1F5F9] mb-2">10,000+ Teams</h3>
              <p className="text-gray-400">Trust TaskHub to manage their projects</p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-[#F1F5F9] text-center mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#2EC4B6]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#2EC4B6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#F1F5F9] mb-2">Simplicity</h3>
              <p className="text-gray-400">Clean, intuitive design that gets out of your way</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFBE0B]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#FFBE0B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#F1F5F9] mb-2">Security</h3>
              <p className="text-gray-400">Your data is protected with enterprise-grade security</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#FF6B6B]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#FF6B6B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#F1F5F9] mb-2">Community</h3>
              <p className="text-gray-400">Built for teams who value collaboration</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-[#1B263B] rounded-xl p-8 border border-[#415A77]/20">
          <h2 className="text-2xl font-bold text-[#F1F5F9] mb-4">Ready to get started?</h2>
          <p className="text-gray-300 mb-6">Join thousands of teams already using TaskHub to stay organized.</p>
          <Link href="/register" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#3A86FF] hover:bg-[#3A86FF]/90 transition-colors">
            Start Free Trial
          </Link>
        </div>
      </div>

    <LandingFooter/>
    </div>
  );
};

export default About;
