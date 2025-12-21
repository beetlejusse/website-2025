"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import Aurora from "@/ui/Aurora/Aurora"
import Navbar from "@/components/Navbar"

interface Project {
  id: string
  title: string
  description: string
  image: string
  href?: string
  tags?: string[]
  featured?: boolean
}

const projects: Project[] = [
  {
    id: "datadive",
    title: "DataDive Analytics Platform",
    description:
      "Real‑time data exploration with collaborative notebooks and visual insights.",
    image: "/events/datadive.png",
    href: "#",
    tags: ["Next.js", "Edge", "Charts"],
    featured: true,
  },
  {
    id: "deeplearning",
    title: "Deep Learning Playground",
    description:
      "Interactive demos for CNNs/RNNs with live training metrics and explainability.",
    image: "/events/deeplearning.png",
    href: "#",
    tags: ["PyTorch", "Viz", "GPU"],
  },
  {
    id: "robosoccer",
    title: "RoboSoccer Sim",
    description:
      "Multi‑agent robotics simulation with strategy editor and physics engine.",
    image: "/events/robosoccer.png",
    href: "#",
    tags: ["Rust", "WebGPU", "AI"],
  },
  {
    id: "introrobo",
    title: "Intro to Robotics",
    description:
      "Hands‑on robotics curriculum with step‑by‑step projects and kit support.",
    image: "/events/introrobo.png",
    href: "#",
    tags: ["Education", "Robotics"],
  },
  {
    id: "abroad",
    title: "Masters Abroad Portal",
    description:
      "Resource hub for exams, SOPs, and university shortlisting with AI help.",
    image: "/events/masterabroad.png",
    href: "#",
    tags: ["AI", "Search"],
  },
  {
    id: "webinar",
    title: "WIE Webinar Series",
    description:
      "Talks and workshops featuring industry leaders and alumni mentors.",
    image: "/events/webinar_wie.png",
    href: "#",
    tags: ["Community", "Talks"],
  },
]

function Tile({
  project,
  className,
}: {
  project: Project
  className?: string
}) {
  return (
    <motion.article
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.995 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl ${
        className ?? ""
      } shadow-[0_0_30px_rgba(0,0,0,0.35)]`}
    >
      {/* Media */}
      <div className="absolute inset-0">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={project.featured}
          className="object-cover object-center opacity-80 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/10" />
        <div className="pointer-events-none absolute inset-0 opacity-30 [background:radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:18px_18px]" />
      </div>

      <div className="relative h-full flex flex-col justify-end p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-2 flex-wrap">
          {project.tags?.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-[11px] rounded-full border border-white/15 bg-black/30 text-white/80"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-xl sm:text-2xl font-semibold tracking-tight">
          {project.title}
        </h3>
        <p className="mt-1 text-sm sm:text-base text-white/80 line-clamp-2">
          {project.description}
        </p>
        
      </div>

      <div className="pointer-events-none absolute -top-12 -left-12 h-40 w-40 bg-cyan-500/20 blur-3xl rounded-full" />
      <div className="pointer-events-none absolute -bottom-12 -right-12 h-48 w-48 bg-fuchsia-500/20 blur-3xl rounded-full" />

      
      <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10 group-hover:ring-white/20 transition" />
    </motion.article>
  )
}

export default function Page() {
  return (
    <div className="relative min-h-screen w-full bg-black text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Aurora intensity={1} followMouse={true} palette="festival" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_800px_at_50%_-10%,rgba(255,255,255,0.04),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-black/70" />
      </div>

      <Navbar />

      <main className="relative container mx-auto px-4 pt-28 pb-16">
        <div className="mx-auto mb-8 sm:mb-12 max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Community Events & Initiatives
          </div>
          <h1 className="mt-4 text-3xl sm:text-5xl lg:text-6xl font-pressstart font-bold tracking-tight">
            Events
          </h1>
          <p className="mt-3 text-sm sm:text-base text-white/80">
            Explore upcoming and past highlights — workshops, talks, hackathons, and more by the IEEE BPIT community.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-6 lg:grid-cols-12 auto-rows-[14rem] sm:auto-rows-[16rem] gap-4">
          <Tile
            project={projects[0]}
            className="col-span-1 sm:col-span-6 lg:col-span-12 row-span-2"
          />

          <Tile
            project={projects[1]}
            className="col-span-1 sm:col-span-3 lg:col-span-6 row-span-2"
          />
          <Tile
            project={projects[2]}
            className="col-span-1 sm:col-span-3 lg:col-span-6 row-span-2"
          />

          <Tile
            project={projects[3]}
            className="col-span-1 sm:col-span-3 lg:col-span-4 row-span-1"
          />
          <Tile
            project={projects[4]}
            className="col-span-1 sm:col-span-3 lg:col-span-4 row-span-1"
          />
          <Tile
            project={projects[5]}
            className="col-span-1 sm:col-span-3 lg:col-span-4 row-span-1"
          />
        </div>

        <div className="mt-12 sm:mt-16 mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
            <p className="text-sm text-white/80">
              Want to host or showcase an event? Share details with us to get featured.
            </p>
            <Link
              href="mailto:ieee-bpit@bpitindia.com"
              className="rounded-xl px-4 py-2 text-sm border border-white/10 bg-[#111111d1] hover:bg-white/10 transition-colors"
            >
              Submit Event
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
