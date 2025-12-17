"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Aurora from "@/ui/Aurora/Aurora";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";

// Gallery items data with enhanced sizing
const galleryItems = [
  {
    id: "1",
    src: "/events/datadive.png",
    title: "Data Dive Workshop",
    size: "feature", // Largest 2x2
    category: "Workshop",
    aspectRatio: "square",
  },
  {
    id: "2",
    src: "/events/deeplearning.png",
    title: "Deep Learning Session",
    size: "portrait",
    category: "Technical",
    aspectRatio: "portrait",
  },
  {
    id: "3",
    src: "/events/robosoccer.png",
    title: "Robo Soccer Competition",
    size: "landscape",
    category: "Competition",
    aspectRatio: "landscape",
  },
  {
    id: "4",
    src: "/events/masterabroad.png",
    title: "Masters Abroad Seminar",
    size: "portrait",
    category: "Seminar",
    aspectRatio: "portrait",
  },
  {
    id: "5",
    src: "/team_about.jpg",
    title: "Team Meet",
    size: "landscape",
    category: "Team",
    aspectRatio: "landscape",
  },
  {
    id: "6",
    src: "/events/webinar_wie.png",
    title: "WIE Webinar",
    size: "portrait",
    category: "Webinar",
    aspectRatio: "portrait",
  },
  {
    id: "7",
    src: "/events/introrobo.png",
    title: "Robotics Introduction",
    size: "landscape",
    category: "Workshop",
    aspectRatio: "landscape",
  },
];

// Simple quilt pattern for a not-too-busy layout
const quiltPattern = [
  { col: 2, row: 2 }, // feature tile
  { col: 1, row: 1 },
  { col: 1, row: 2 }, // tall tile
  { col: 2, row: 1 }, // wide tile
  { col: 1, row: 1 },
  { col: 1, row: 1 },
  { col: 1, row: 1 },
];
function getQuiltSpan(index: number) {
  const p = quiltPattern[index % quiltPattern.length];
  // Apply spans from md+ to keep mobile simple
  const col = p.col;
  const row = p.row;
  return cn(
    "h-full",
    col > 1 && "md:col-span-2",
    row > 1 && "md:row-span-2"
  );
}

function GalleryCard({ item, index }: { item: typeof galleryItems[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.05 }}
      viewport={{ once: true, margin: "-80px" }}
      className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl shadow-[0_8px_30px_-10px_rgba(0,0,0,0.6)]"
    >
      {/* Image fills card height controlled by grid row-span */}
      <div className="relative h-full w-full">
        <Image
          src={item.src}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          priority={index < 4}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
      </div>

      {/* Content overlay */}
      <div className="absolute inset-0 p-5 sm:p-6 flex flex-col justify-end">
        <div className="mb-2">
          <span className="inline-block px-3 py-1 text-[11px] sm:text-xs rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white/90">
            {item.category}
          </span>
        </div>
        <h3 className="text-lg sm:text-xl md:text-2xl font-pressstart text-white tracking-tight drop-shadow">
          {item.title}
        </h3>
      </div>
    </motion.div>
  );
}

export default function GalleryPage() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-[#0a0a14]">
      <Navbar />
      <Aurora className="z-0 opacity-60" palette="cosmic" intensity={0.8} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 sm:mb-16 md:mb-20 text-center"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-pressstart bg-clip-text text-transparent bg-gradient-to-r from-cyan-200 via-fuchsia-200 to-cyan-200 pb-2">
            Our Gallery
          </h1>
          <p className="mt-4 text-sm sm:text-base text-white/70 max-w-2xl mx-auto">
            Capturing moments of innovation, learning, and growth. Browse through our collection of events and memories.
          </p>
        </motion.header>

        {/* Quilted grid: simple, varied, and dense */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8 grid-flow-dense auto-rows-[9rem] sm:auto-rows-[10rem] md:auto-rows-[12rem] lg:auto-rows-[12rem] xl:auto-rows-[14rem]">
          {galleryItems.map((item, index) => (
            <div key={item.id} className={getQuiltSpan(index)}>
              <GalleryCard item={item} index={index} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}