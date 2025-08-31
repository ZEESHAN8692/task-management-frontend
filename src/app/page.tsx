"use client";

import Image from "next/image";
import LandingFooter from "@/components/LandingLayout/Footer";
import LandingHeader from "@/components/LandingLayout/Header";
import Link from "next/link";
import { motion } from "framer-motion";

const page = () => {
  return (
    <div className="min-h-screen bg-[#0D1B2A]">
      <LandingHeader />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 pb-8 bg-[#0D1B2A] sm:pb-16 md:pb-20 lg:w-1/2 lg:pb-28 xl:pb-32"
          >
            <main className="mt-10 px-6 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-[#F1F5F9] sm:text-5xl md:text-6xl leading-tight">
                  <span className="block">Manage your</span>
                  <span className="block text-[#3A86FF]">tasks efficiently</span>
                </h1>
                <p className="mt-5 text-gray-300 text-lg sm:max-w-xl sm:mx-auto md:text-xl lg:mx-0">
                  Streamline your workflow, collaborate with your team, and get things
                  done faster with our powerful task management platform.
                </p>
                <div className="mt-8 flex gap-4 sm:justify-center lg:justify-start">
                  <Link
                    href="/register"
                    className="px-8 py-3 rounded-xl bg-[#3A86FF] text-white font-semibold hover:bg-[#3A86FF]/90 transition-colors shadow-lg"
                  >
                    Get Started
                  </Link>
                  <Link
                    href="#features"
                    className="px-8 py-3 rounded-xl border border-[#415A77]/30 bg-[#1B263B] text-[#F1F5F9] hover:bg-[#415A77]/20 transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </main>
          </motion.div>

          {/* Right Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="lg:w-1/2 flex justify-center"
          >
            <Image
              src="/bg1.jpg"
              alt="Task Management Illustration"
              width={500}
              height={500}
              className="rounded-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-[#1B263B] text-[#F1F5F9]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-extrabold text-center"
          >
            Key Features
          </motion.h2>

          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Task Management",
                desc: "Create and manage tasks with deadlines, priorities, and progress tracking.",
                icon: "M3 5h18M3 12h18m-7 7h7",
              },
              {
                title: "Collaboration",
                desc: "Work with teams in real-time, assign tasks, and track team progress.",
                icon: "M12 5v14m7-7H5",
              },
              {
                title: "Notifications",
                desc: "Get notified when tasks are updated or deadlines are approaching.",
                icon: "M16 12h4l-8 8-8-8h4l4-4 4 4z",
              },
              {
                title: "Integrations",
                desc: "Integrate with tools like Slack, Google Calendar, and more.",
                icon: "M4 6h16M4 12h16M4 18h16",
              },
            ].map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="p-6 bg-[#0D1B2A] rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex justify-center">
                  <svg
                    className="w-14 h-14 text-[#3A86FF]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={f.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mt-4 text-center">{f.title}</h3>
                <p className="mt-2 text-gray-300 text-center">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <LandingFooter />
    </div>
  );
};

export default page;
