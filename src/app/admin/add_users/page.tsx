"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { registerUser } from "@/queryFunction/queryFunction";
import Link from "next/link";

const AddUser = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    role: "",
  });
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const { mutate } = useMutation({
    mutationFn: registerUser,
    onSuccess: () => {
      toast.success("User added successfully!");
      router.push("/admin/users");
    },
    onError: (err) => {
      toast.error(`Failed: ${err.message}`);
    },
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    const fData = new FormData();
    fData.append("name", formData.name);
    fData.append("phone", formData.phone);
    fData.append("email", formData.email);
    fData.append("password", formData.password);
    fData.append("role", formData.role);
    fData.append("image", image);
    e.preventDefault();
    mutate(fData);
  };

  return (
    <div className="mt-10 mb-10 w-full flex items-center justify-center px-5 sm:px-0 bg-[#0D1B2A]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="rounded-2xl shadow-2xl overflow-hidden max-w-5xl w-full bg-[#1B263B] border border-[#415A77] p-8"
      >
        {/* Heading */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-3xl text-center font-bold text-white"
        >
          Add User
        </motion.p>

        <p className="text-center mt-2 text-cyan-400">
          Fill details to add a new user
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <InputField
              label="Name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full name"
            />

            <InputField
              label="Phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone number"
            />

            <InputField
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email address"
            />
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <InputField
              label="Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create password"
            />

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <label className="block text-sm font-medium mb-2 text-blue-100">
                Role
              </label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-[#0D1B2A] text-white border border-[#415A77] focus:ring-2 focus:ring-cyan-400 outline-none"
              >
                <option value="">Select Role</option>
                <option value="admin">Admin</option>
                <option value="user">User</option>
              </select>
            </motion.div>

            {/* Profile Image Upload */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <label className="block text-sm font-medium mb-2 text-blue-100">
                Profile Image
              </label>
              <input
                type="file"
                name="profileImage"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full px-4 py-3 rounded-lg bg-[#0D1B2A] text-white border border-[#415A77] focus:ring-2 focus:ring-cyan-400 outline-none"
              />
            </motion.div>
          </div>

          {/* Submit */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium py-3 px-4 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Add User
            </button>
          </motion.div>
        </form>

        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-6 text-center"
        >
          <p className="text-sm text-cyan-300">
            Go back to{" "}
            <Link
              href="/admin/users"
              className="font-medium text-cyan-400 hover:underline"
            >
              Users List
            </Link>
          </p>
        </motion.div>
      </motion.div>
      
    </div>
  );
};

// Reusable Input Component
const InputField = ({ label, type, name, value, onChange, placeholder }) => (
  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
    <label className="block text-sm font-medium mb-2 text-blue-100">
      {label}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required
      placeholder={placeholder}
      className="w-full px-4 py-3 rounded-lg bg-[#0D1B2A] text-white border border-[#415A77] focus:ring-2 focus:ring-cyan-400 outline-none"
    />
  </motion.div>
);

export default AddUser;
