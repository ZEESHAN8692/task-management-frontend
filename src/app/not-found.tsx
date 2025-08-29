"use client";
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function PageNotFound() {
  const router = useRouter();
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };
  
  const taskVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.3,
      }
    })
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0D1B2A] p-4">
      <motion.div 
        className="max-w-md w-full bg-[#1B263B] rounded-2xl shadow-xl p-8 relative overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Decorative elements */}
        <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-[#0D1B2A] opacity-50"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-[#415A77] opacity-50"></div>
        
        <motion.div 
          className="text-center mb-8"
          variants={itemVariants}
        >
          <motion.h1 
            className="text-9xl font-bold mb-2 text-[#E0E1DD]"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            404
          </motion.h1>
          
          <motion.h2 
            className="text-2xl font-semibold mb-6 text-[#E0E1DD]"
            variants={itemVariants}
          >
            Task Not Found
          </motion.h2>
          
          <motion.p 
            className="text-[#778DA9] mb-8"
            variants={itemVariants}
          >
            The page you're looking for seems to have been misplaced or doesn't exist.
          </motion.p>
        </motion.div>
        
        {/* Animated task list elements */}
        <motion.div 
          className="mb-8"
          variants={itemVariants}
        >
          <motion.div 
            className="bg-[#415A77] rounded-lg p-3 mb-3 flex items-center"
            variants={taskVariants}
            custom={0}
          >
            <div className="w-5 h-5 rounded-full border-2 border-[#E0E1DD] mr-3"></div>
            <span className="text-[#E0E1DD]">Find missing page</span>
          </motion.div>
          
          <motion.div 
            className="bg-[#415A77] rounded-lg p-3 mb-3 flex items-center"
            variants={taskVariants}
            custom={1}
          >
            <div className="w-5 h-5 rounded-full border-2 border-[#E0E1DD] mr-3"></div>
            <span className="text-[#E0E1DD]">Check URL for errors</span>
          </motion.div>
          
          <motion.div 
            className="bg-[#415A77] rounded-lg p-3 flex items-center"
            variants={taskVariants}
            custom={2}
          >
            <div className="w-5 h-5 rounded-full border-2 border-[#E0E1DD] mr-3"></div>
            <span className="text-[#E0E1DD]">Return to homepage</span>
          </motion.div>
        </motion.div>
        
        <motion.div
          variants={itemVariants}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 hover:bg-blue-700 text-[#E0E1DD] font-medium py-3 px-6 rounded-lg transition-colors duration-300 shadow-md"
            onClick={() => router.push('/')}
          >
            Back to Home
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}
