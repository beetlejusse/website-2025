"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Github, Instagram, Linkedin, Mail, Users, Code2, CalendarDays, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Threads from "@/ui/Threads/Threads"

const Footer = () => {
  return (
    <div className="relative w-full text-white overflow-hidden">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        {/* Threads background */}
        <Threads amplitude={1} distance={0} enableMouseInteraction={true} />
      </div>

      <footer className="relative container mx-auto px-4 py-12 md:py-16 lg:py-20">
        {/* Glass container */}
        <div className="relative rounded-3xl border border-white/10 bg-black/30 backdrop-blur-2xl shadow-[0_0_40px_rgba(0,0,0,0.35)] overflow-hidden">
          {/* Subtle glow corners */}
          <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 bg-cyan-500/15 blur-3xl rounded-full" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 bg-fuchsia-500/15 blur-3xl rounded-full" />

          {/* Dot grid overlay */}
          <div className="pointer-events-none absolute inset-0 opacity-40 [background:radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:18px_18px] [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]" />

          {/* Top ribbon */}
          <div className="relative px-6 md:px-10 py-6">
            <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-5 py-4">
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-[0.2em] text-white/70">IEEE BPIT</p>
                <h2 className="text-lg md:text-xl font-mono text-white/90">
                  Where creativity meets innovation.
                </h2>
              </div>
              <div className="flex items-center gap-2">
                <Link
                  href="https://github.com/"
                  aria-label="GitHub"
                  className="group p-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <Github className="h-5 w-5 text-white/90 group-hover:text-white" />
                </Link>
                <Link
                  href="https://www.instagram.com/"
                  aria-label="Instagram"
                  className="group p-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <Instagram className="h-5 w-5 text-white/90 group-hover:text-white" />
                </Link>
                <Link
                  href="https://www.linkedin.com/"
                  aria-label="LinkedIn"
                  className="group p-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <Linkedin className="h-5 w-5 text-white/90 group-hover:text-white" />
                </Link>
                <Link
                  href="mailto:contact@ieeebpit.org"
                  aria-label="Email"
                  className="group p-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <Mail className="h-5 w-5 text-white/90 group-hover:text-white" />
                </Link>
              </div>

              {/* Soft border highlight */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl [mask-image:linear-gradient(to_right,transparent,black,transparent)] ring-1 ring-white/10" />
            </div>
          </div>

          {/* Feature tiles (fills empty space, very lightweight glass) */}
          <div className="relative px-6 md:px-10 pb-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link
                href="/team"
                aria-label="Explore Team"
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 transition-colors hover:bg-white/10"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 border border-white/10">
                    <Users className="h-5 w-5 text-white/90" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-medium">Meet the Team</h3>
                    <p className="text-sm text-gray-300 mt-1">
                      Discover councils, coordinators, and leaders.
                    </p>
                  </div>
                  <ArrowRight className="h-4 w-4 opacity-70 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>

              <Link
                href="/projects"
                aria-label="Explore Projects"
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 transition-colors hover:bg-white/10"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 border border-white/10">
                    <Code2 className="h-5 w-5 text-white/90" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-medium">Projects</h3>
                    <p className="text-sm text-gray-300 mt-1">
                      Explore what we build and ship.
                    </p>
                  </div>
                  <ArrowRight className="h-4 w-4 opacity-70 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>

              <Link
                href="/events"
                aria-label="Explore Events"
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 transition-colors hover:bg-white/10"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 border border-white/10">
                    <CalendarDays className="h-5 w-5 text-white/90" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-medium">Events</h3>
                    <p className="text-sm text-gray-300 mt-1">
                      Workshops, talks, and hackathons.
                    </p>
                  </div>
                  <ArrowRight className="h-4 w-4 opacity-70 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </div>
          </div>

          {/* Content grid */}
          <div className="relative grid gap-10 px-6 md:px-10 pb-10 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <div className="relative h-12 w-12 overflow-hidden rounded-xl border border-white/10 bg-black/60">
                  <Image
                    src="/ieee-logo.jpg"
                    alt="IEEE BPIT"
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <span className="font-mono text-xl md:text-2xl">IEEE BPIT</span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Building a community that learns, ships, and leads together.
              </p>

              {/* Mini badges */}
              <div className="flex flex-wrap gap-2">
                <span className="px-2.5 py-1 text-xs rounded-full border border-white/10 bg-white/5">
                  Community
                </span>
                <span className="px-2.5 py-1 text-xs rounded-full border border-white/10 bg-white/5">
                  Projects
                </span>
                <span className="px-2.5 py-1 text-xs rounded-full border border-white/10 bg-white/5">
                  Events
                </span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-sm uppercase tracking-widest text-gray-400 mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2 text-gray-200">
                <li>
                  <Link href="/team" className="hover:text-white hover-underline">
                    Team
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="hover:text-white hover-underline">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/events" className="hover:text-white hover-underline">
                    Events
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-sm uppercase tracking-widest text-gray-400 mb-4">
                Resources
              </h3>
              <ul className="space-y-2 text-gray-200">
                <li>
                  <Link href="#" className="hover:text-white hover-underline">
                    Code of Conduct
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white hover-underline">
                    Community Guidelines
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white hover-underline">
                    Branding Kit
                  </Link>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-sm uppercase tracking-widest text-gray-400 mb-4">
                Newsletter
              </h3>
              <p className="text-gray-300 text-sm mb-3">
                Get updates on events, projects, and opportunities.
              </p>
              <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-black/30 border-white/10 text-white placeholder:text-gray-400"
                  aria-label="Email address"
                />
                <Button
                  type="submit"
                  className="bg-[#111111d1] hover:bg-white/10 border border-white/10 text-white"
                >
                  Subscribe
                </Button>
              </form>
              <p className="text-[11px] text-gray-400 mt-2">
                We respect your privacy. Unsubscribe anytime.
              </p>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="relative border-t border-white/10 px-6 md:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-300">
            <p className="text-center">
              &copy; {new Date().getFullYear()} IEEE BPIT. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="hover:text-white hover-underline">
                Privacy
              </Link>
              <span className="text-white/20">|</span>
              <Link href="#" className="hover:text-white hover-underline">
                Terms
              </Link>
            </div>

            {/* Faint top sheen */}
            <div className="pointer-events-none absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
