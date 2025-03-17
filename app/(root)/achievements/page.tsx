import { motion } from 'framer-motion'
import React from 'react'
import { containerVariants, itemVariants, pulseAnimation } from "@/lib/utils";


const page = () => {
    const achievements = [
        "Over 50 successful tech events organized",
        "Partnership with 15+ leading tech companies",
        "1000+ students trained in cutting-edge technologies",
      ];
  return (
    <div><motion.div
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="mb-20"
  >
    <motion.h2
      variants={itemVariants}
      className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-12"
    >
      Our Achievements
    </motion.h2>
    <div className="grid md:grid-cols-3 gap-6">
      {achievements.map((achievement, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-blue-500/10 hover:border-purple-400/30 transition-all duration-300"
          whileHover={pulseAnimation}
        >
          <div className="flex flex-col items-center text-center">
            {/* <FaChartLine className="text-blue-400 text-3xl mb-4" /> */}
            <p className="text-gray-200 text-lg">{achievement}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>

  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-blue-500/20 text-center"
  >
    <h2 className="text-3xl font-bold text-white mb-6">
      Join Our Community
    </h2>
    <p className="text-gray-200 text-lg mb-8">
      Become part of our vibrant community of innovators, technologists,
      and future leaders. Together, we can shape the future of technology
      and create meaningful impact.
    </p>
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-full shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
    >
      Connect With Us
    </motion.button>
  </motion.div></div>
  )
}

export default page