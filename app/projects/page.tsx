"use client"

import React, { useMemo, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import Constellation from "@/ui/Constellation/Constellation"
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

const allProjects: Project[] = [
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

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      variants={itemVariants}
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
    >
      <div className="relative h-44 sm:h-52">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width:640px)100vw,(max-width:1024px)50vw,33vw"
          className="object-cover object-center opacity-90 transition duration-500 group-hover:scale-105"
          priority={project.featured}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="pointer-events-none absolute inset-0 opacity-30 [background:radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:18px_18px]" />
      </div>

      <div className="relative p-4 sm:p-5">
        <div className="mb-2 flex flex-wrap items-center gap-2">
          {project.tags?.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-black/30 px-2 py-0.5 text-[11px] text-white/75"
            >
              {t}
            </span>
          ))}
        </div>
        <h3 className="text-lg sm:text-xl font-semibold tracking-tight">
          {project.title}
        </h3>
        <p className="mt-1 line-clamp-2 text-sm text-white/80">
          {project.description}
        </p>
        {/* {project.href && (
          <Link
            href={project.href}
            className="mt-4 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/90 transition-colors hover:bg-white/10"
          >
            View project
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4 w-4"
            >
              <path d="M13.5 4.5a.75.75 0 0 1 .75-.75h5.25a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-1.5 0V6.31l-7.22 7.22a.75.75 0 1 1-1.06-1.06l7.22-7.22h-3.44a.75.75 0 0 1-.75-.75Z" />
              <path d="M3.75 5.25A2.25 2.25 0 0 1 6 3h6a.75.75 0 0 1 0 1.5H6A.75.75 0 0 0 5.25 6v12A.75.75 0 0 0 6 18.75h12a.75.75 0 0 0 .75-.75v-6a.75.75 0 0 1 1.5 0v6A2.25 2.25 0 0 1 18 21.75H6A2.25 2.25 0 0 1 3.75 19.5V5.25Z" />
            </svg>
          </Link>
        )} */}
      </div>

      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10 transition group-hover:ring-white/20" />
      <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-r from-cyan-500/0 via-cyan-500/20 to-fuchsia-500/0 opacity-0 blur-xl transition duration-500 group-hover:opacity-100" />
    </motion.article>
  )
}

export default function ProjectsPage() {
  const [query, setQuery] = useState("")
  const [activeTag, setActiveTag] = useState<string>("All")

  const tags = useMemo(() => {
    const t = new Set<string>()
    allProjects.forEach((p) => p.tags?.forEach((x) => t.add(x)))
    return ["All", ...Array.from(t)]
  }, [])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return allProjects.filter((p) => {
      const matchesTag = activeTag === "All" || p.tags?.includes(activeTag)
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        (p.tags || []).some((t) => t.toLowerCase().includes(q))
      return matchesTag && matchesQuery
    })
  }, [query, activeTag])

  return (
    <div className="relative min-h-screen w-full bg-black text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Constellation
          density={0.16}
          speed={0.6}
          connectDistance={160}
          dotSize={1.4}
          lineWidth={0.7}
          colorA="#7dd3fc"
          colorB="#f0abfc"
          mouseInfluence={0.25}
          blur={5}
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_500px_at_50%_-10%,rgba(255,255,255,0.04),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/60" />
      </div>

      <Navbar />

      <main className="relative z-10 container mx-auto px-4 pt-28 pb-20">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-cyan-400" />
            Open Source • IEEE BPIT
          </span>
          <h1 className="mt-4 text-3xl sm:text-5xl lg:text-6xl font-pressstart font-bold tracking-tight">
            <span className="bg-gradient-to-r from-cyan-300 via-white to-fuchsia-300 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <p className="mt-3 text-sm sm:text-base text-white/80">
            Explore tools, experiments, and learning resources built by our community. Discover, learn, and contribute.
          </p>
        </div>

        {/* Controls */}
        <div className="mt-8 sm:mt-10 flex flex-col items-stretch gap-4">
          <div className="relative mx-auto w-full max-w-2xl">
            <div className="pointer-events-none absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-cyan-500/0 via-cyan-500/15 to-fuchsia-500/0 blur-2xl" />
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5 text-white/60"
              >
                <path
                  fillRule="evenodd"
                  d="M10.5 3.75a6.75 6.75 0 1 0 4.213 12.06l4.988 4.989a.75.75 0 1 0 1.06-1.06l-4.989-4.988A6.75 6.75 0 0 0 10.5 3.75Zm-5.25 6.75a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search projects, tags..."
                className="w-full bg-transparent text-sm outline-none placeholder:text-white/50"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/70 hover:bg-white/10"
                >
                  Clear
                </button>
              )}
            </div>
          </div>          
        </div>

        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="col-span-full flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-6 py-16 text-center backdrop-blur"
              >
                <p className="text-white/80">
                  No projects found. Try a different search or tag.
                </p>
              </motion.div>
            ) : (
              filtered.map((p) => <ProjectCard key={p.id} project={p} />)
            )}
          </AnimatePresence>
        </motion.section>

        <div className="mx-auto mt-12 max-w-3xl text-center">
          <div className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
            <p className="text-sm text-white/80">
              Built something awesome? Share it with the community.
            </p>
            <Link
              href="mailto:ieee-bpit@bpitindia.com"
              className="rounded-xl border border-white/10 bg-[#111111d1] px-4 py-2 text-sm transition-colors hover:bg-white/10"
            >
              Submit Project
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
