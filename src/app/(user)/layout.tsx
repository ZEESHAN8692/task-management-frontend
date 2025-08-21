"use client";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { useState } from "react";
import Sidebar from "@/Layout/user/Sidebar";
import Header from "@/Layout/user/Header";
import Footer from "@/Layout/user/Footer";
import { ToastContainer } from "react-toastify";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
const queryClient = new QueryClient();

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="flex min-h-screen bg-[#0D1B2A] text-white">
          <Sidebar isOpen={isSidebarOpen} onToggle={toggleSidebar} />

          <div className="flex flex-col flex-1 min-w-0 ">
            <Header onToggleSidebar={toggleSidebar} />

            <main className="flex-1 overflow-y-auto bg-[#0D1B2A] p-0">
              <QueryClientProvider client={queryClient}>
                {children}
              </QueryClientProvider>
              <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
              // transition={Bounce}
              />
            </main>

            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
