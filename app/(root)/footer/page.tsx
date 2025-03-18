"use client";

import { motion } from "framer-motion";
import { Instagram, Facebook, Youtube, Linkedin, Phone, Mail, X, Twitter } from "lucide-react";
import { joinUsURL } from "@/lib/utils";

const EndFooter = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className=""
      >
        <h2 className="text-6xl font-bold text-white mb-8 text-center">
          Join Our Community
        </h2>
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-blue-500/20">
          <div className="flex-3">
            <p className="text-gray-200 text-lg mb-8">
              Become part of our vibrant community of innovators, technologists,
              and future leaders. Together, we can shape the future of
              technology and create meaningful impact.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-full shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-700 cursor-pointer" 
            >
              <a href={joinUsURL}>Connect With Us</a>
            </motion.button>
          </div>

          <div className="flex-2">
            <div className="mb-8">
              <h3 className="text-4xl font-bold text-center text-white mb-6">
                Contact Us
              </h3>
              <div className="flex flex-col space-y-4 items-center">
                <div className="flex items-start space-x-3">
                  {/* <div className="min-w-6 mt-1">📍</div> */}
                  <p className="text-fuchsia-400 font-bold">
                    Bhagwan Parshuram Institute of Technology
                    <br />
                    Rohini, Delhi
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="min-w-6">
                    <Phone />
                  </div>
                  <p className="text-fuchsia-400 font-bold">+91 8130104862</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="min-w-6">
                    <Mail />
                  </div>
                  <p className="text-fuchsia-400 font-bold">ieee-bpit@bpitindia.com</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center space-x-6">
              <motion.a
                href="https://www.instagram.com/ieee.bpit?igsh=b3dydGlkZmloa3Yw"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-white hover:text-blue-400 transition-colors cursor-pointer"
              >
                <Instagram size={24} />
              </motion.a>
              <motion.a
                href="https://x.com/IEEEBPIT"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-white hover:text-blue-400 transition-colors cursor-pointer"
              >
                <Twitter size={24} />
              </motion.a>
              <motion.a
                href="https://youtube.com/@ieeebpit6917?si=tgKlP7VZCEYDPcBa"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-white hover:text-blue-400 transition-colors cursor-pointer"
              >
                <Youtube size={24} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/company/ieee-bpit/"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-white hover:text-blue-400 transition-colors cursor-pointer"
              >
                <Linkedin size={24} />
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default EndFooter;
