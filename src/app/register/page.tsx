"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { registerUser } from '@/queryFunction/queryFunction';
import Link from 'next/link';

const Register = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    image: null,
    password: '',
  });

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: registerUser,
    onSuccess: (data) => {
      toast.success('Register successful!');
      console.log('Register successful:', data);
      router.push('/login');
    },
    onError: (err) => {
      toast.error(`Register failed: ${err.message}`);
      console.error('Register error:', err.message);
    }
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('phone', formData.phone);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('password', formData.password);
    if (formData.image) {
      formDataToSend.append('image', formData.image);
    }

    mutate(formDataToSend);


    console.log('Register form submitted:', formData);
    // Handle image upload or validation logic here
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
        className="flex rounded-xl shadow-2xl overflow-hidden max-w-sm lg:max-w-4xl w-full  bg-blue-800 shadow-white border border-cyan-50"
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
              <h2 className="text-2xl font-bold mb-2">Join Us!</h2>
              <p className="text-blue-200">Create your account and start your journey today.</p>
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
            Register
          </motion.p>

          <p className="text-center mt-2 text-blue-200">
            Create your account
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <label className="block text-sm font-medium mb-2 text-blue-100">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your full name"
                className="w-full px-4 py-3 rounded-lg bg-blue-800 text-white border border-blue-700 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </motion.div>

            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
            >
              <label className="block text-sm font-medium mb-2 text-blue-100">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Your phone number"
                className="w-full px-4 py-3 rounded-lg bg-blue-800 text-white border border-blue-700 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <label className="block text-sm font-medium mb-2 text-blue-100">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-lg bg-blue-800 text-white border border-blue-700 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
            >
              <label className="block text-sm font-medium mb-2 text-blue-100">Profile Image</label>
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleChange}
                className="w-full px-4 py-2 text-white bg-blue-800 border border-blue-700 rounded-lg file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-500"
              />
            </motion.div>

            {/* Password */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <label className="block text-sm font-medium mb-2 text-blue-100">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="Create a password"
                className="w-full px-4 py-3 rounded-lg bg-blue-800 text-white border border-blue-700 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </motion.div>

            {/* Submit */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
            >
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium py-3 px-4 rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Create Account
              </button>
            </motion.div>
          </form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-6 text-center"
          >
            <p className="text-sm text-blue-200">
              Already have an account?{' '}
              <Link href="/login" className="font-medium text-blue-400 hover:underline">
                Sign in
              </Link>
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;
