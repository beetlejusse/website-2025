"use client";

import NavBar from "@/components/NavBar";
import Image from "next/image";
import { DockInfo } from "@/components/Dock";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Home() {
  
  const router = useRouter();

  const handleGalleryClick = () => {
    router.push("/gallery");
  }
  const handleSIGclick = () => {
    router.push("/sig");
  }
  
  return (
    <div
      className="relative min-h-screen flex flex-col justify-center items-center bg-[#090d1f] text-white"
      style={{
        backgroundImage: `url("/background.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
    >
      <NavBar />
      <motion.button
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute top-6 left-6 px-5 py-2 rounded-lg bg-white/10 backdrop-blur-lg text-white font-semibold shadow-md hover:bg-white/20 transition-all cursor-pointer" onClick={() => {handleGalleryClick}}
      >
        Gallery
      </motion.button>

      <motion.button
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute top-6 right-6 px-5 py-2 rounded-lg bg-white/10 backdrop-blur-lg text-white font-semibold shadow-md hover:bg-white/20 transition-all cursor-pointer" onClick={() => {handleSIGclick}}
      >
        S.I.G
      </motion.button>

      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col justify-center items-center w-full h-full px-6 md:px-16 lg:px-32 mt-16"
      >
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-bold text-center leading-tight bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-lg"
        >
          Welcome to IEEE BPIT
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          className="text-lg md:text-xl text-gray-300 text-center mt-1 max-w-2xl"
        >
          Empowering Innovation, Learning, and Collaboration in Technology
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
          className="mt-7 w-full flex justify-center"
        >
          <Image
            src="/team.png"
            alt="IEEE BPIT Team"
            height={750}
            width={1300}
            className="rounded-lg shadow-lg border border-gray-700"
          />
        </motion.div>
      </motion.div>

      <DockInfo />
    </div>
  );
}

