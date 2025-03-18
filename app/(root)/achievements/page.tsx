import { motion } from "framer-motion";
import React from "react";
import { containerVariants, itemVariants, pulseAnimation } from "@/lib/utils";

const AchiieveMents = () => {
  const achievements = [
    "Over 50 successful tech events organized",
    "Partnership with 15+ leading tech companies",
    "1000+ students trained in cutting-edge technologies",
  ];
  return (
    <div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mb-20"
      >
        <motion.h2
          variants={itemVariants}
          className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-center mb-12"
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
                <p className="text-gray-200 text-lg">{achievement}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default AchiieveMents;
