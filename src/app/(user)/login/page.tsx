"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempted with:', { email, password });
  };

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center px-5 sm:px-0 transition-colors duration-300"
      style={{ backgroundColor: '#0D1B2A' }} 
    >
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex rounded-xl shadow-2xl overflow-hidden max-w-sm lg:max-w-4xl w-full border bg-blue-900 border-blue-800"
      >
        <div
          className="hidden md:block lg:w-1/2 bg-cover bg-blue-700 relative"
          style={{
            backgroundImage: `url(https://www.tailwindtap.com//assets/components/form/userlogin/login_tailwindtap.jpg)`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-white"
            >
              <h2 className="text-2xl font-bold mb-2">Login Form</h2>
              <p className="text-blue-200">Sign in to access your account and continue your journey with us.</p>
            </motion.div>
          </div>
        </div>
        
        <div className="w-full p-8 lg:w-1/2 relative">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-3xl text-center font-bold text-white"
          >
            Login From
          </motion.p>
          
          <p className="text-center mt-2 text-blue-200">
            Sign in to continue your journey
          </p>
          
          <form onSubmit={handleSubmit} className="mt-8">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-5"
            >
              <label className="block text-sm font-medium mb-2 text-blue-100">
                Email Address
              </label>
              <input
                className="w-full px-4 py-3 rounded-lg bg-blue-800 text-white border border-blue-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-2"
            >
              <div className="flex justify-between">
                <label className="block text-sm font-medium mb-2 text-blue-100">
                  Password
                </label>
                <a href="#" className="text-xs text-blue-300 hover:underline">
                  Forgot Password?
                </a>
              </div>
              <input
                className="w-full px-4 py-3 rounded-lg bg-blue-800 text-white border border-blue-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter your password"
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-8"
            >
              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium py-3 px-4 rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Sign In
              </button>
            </motion.div>
          </form>
          
          <div className="flex items-center my-6">
            <div className="flex-grow h-px bg-blue-800"></div>
            <span className="px-3 text-sm text-blue-300">OR</span>
            <div className="flex-grow h-px bg-blue-800"></div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center"
          >
            <button className="flex items-center justify-center w-full py-2.5 rounded-lg font-medium bg-blue-800 text-white hover:bg-blue-700 transition-all duration-300 shadow-sm">
              <svg className="h-5 w-5 mr-2" viewBox="0 0 40 40">
                {/* Google SVG remains unchanged */}
              </svg>
              Sign in with Google
            </button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-6 text-center"
          >
            <p className="text-sm text-blue-200">
              Don't have an account?{' '}
              <a href="/register" className="font-medium text-blue-400 hover:underline">
                Sign up
              </a>
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
