"use client";

import NavBar from "@/components/NavBar";
import Image from "next/image";
import { DockInfo } from "@/components/Dock";
import { motion } from "framer-motion";
import AboutPage from "./(root)/about/page";
import EventsInfo from "./(root)/events-page/page";
import Faculty from "./(root)/faculty/page";
import AchiieveMents from "./(root)/achievements/page";
import EndFooter from "./(root)/footer/page";
import CTA from "./(root)/cta/page";

export default function Home() {
  return (
    <div
      className="relative min-h-screen flex flex-col justify-center items-center text-white"
      style={{
        backgroundImage: `url("/background.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative min-h-screen flex flex-col w-full">
        <NavBar />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col justify-center items-center w-full h-full px-4 sm:px-8 md:px-16 lg:px-32 mt-32 text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-lg mb-4"
          >
            Welcome to IEEE BPIT
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            className="text-sm sm:text-lg md:text-xl text-gray-300 mt-2 max-w-xl sm:max-w-2xl px-4"
          >
            Empowering Innovation, Learning, and Collaboration in Technology
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
            className="mt-8 w-full flex justify-center px-4"
          >
            <div className="w-full sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] 2xl:w-[75%]">
              <Image
                src="/team.png"
                alt="IEEE BPIT Team"
                width={1300}
                height={750}
                layout="responsive"
                className="rounded-lg shadow-lg border border-gray-700 object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      <AboutPage />
      <Faculty />
      <EventsInfo />
      <AchiieveMents />
      <CTA />
      <EndFooter />

      <footer>
        <DockInfo />
      </footer>
    </div>
  );
}
