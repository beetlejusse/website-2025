"use client";

import { AnimatedTestimonials } from "@/src/components/ui/animated-testimonials";
import { motion } from "framer-motion";
import React from "react";
import { testimonials } from "@/lib/utils";

export default function CTA() {
  return (
    <div className="text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 text-center"
      >
        <h2 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-center mb-12">
          Executive Council
        </h2>

        <AnimatedTestimonials testimonials={testimonials} />
      </motion.div>
    </div>
  );
};