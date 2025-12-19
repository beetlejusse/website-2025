"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  Users,
  Code2,
  CalendarDays,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Threads from "@/ui/Threads/Threads";
import axios from "axios";
import { toast } from "sonner";

const githubURL = process.env.NEXT_PUBLIC_GITHUB_URL;
const linkedinURL = process.env.NEXT_PUBLIC_LINKEDIN_URL;
const instagramURL = process.env.NEXT_PUBLIC_INSTAGRAM_URL;
const ieeeMail = process.env.NEXT_PUBLIC_IEEE_MAIL_ADDRESS;
const joiningformURL = process.env.NEXT_PUBLIC_JOINING_FORM_URL;

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      toast.error("Please enter a valid email address");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post("https://formspree.io/f/xldppldr", {
        email: email.trim(),
        _subject: "Newsletter Subscription - IEEE BPIT",
        _replyto: email.trim(),
      });

      if (response.status === 200) {
        toast.success("Successfully subscribed to newsletter!");
        setEmail("");
      } else {
        throw new Error("Failed to subscribe");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 422) {
          toast.error("Email is already subscribed or invalid");
        } else if (error.response?.status === 429) {
          toast.error("Too many requests. Please try again later");
        } else {
          toast.error("Failed to subscribe. Please try again");
        }
      } else {
        toast.error("An unexpected error occurred. Please try again");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative w-full text-white overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <Threads amplitude={1} distance={0} enableMouseInteraction={true} />
      </div>

      <footer className="relative container mx-auto px-4 py-12 md:py-16 lg:py-20 z-50">
        <div className="relative rounded-3xl border border-white/10 bg-black/30 backdrop-blur-2xl shadow-[0_0_40px_rgba(0,0,0,0.35)] overflow-hidden">
          <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 bg-cyan-500/15 blur-3xl rounded-full" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 bg-fuchsia-500/15 blur-3xl rounded-full" />

          <div className="pointer-events-none absolute inset-0 opacity-40 [background:radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:18px_18px] [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]" />

          <div className="relative px-6 md:px-10 py-6">
            <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-5 py-4">
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-[0.2em] text-white/70">
                  IEEE BPIT
                </p>
                <h2 className="text-lg md:text-xl font-mono text-white/90">
                  Where creativity meets innovation.
                </h2>
              </div>
              <div className="flex items-center gap-2">
                <Link
                  href={`${githubURL}`}
                  aria-label="GitHub"
                  className="group p-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <Github className="h-5 w-5 text-white/90 group-hover:text-white" />
                </Link>
                <Link
                  href={`${instagramURL}`}
                  aria-label="Instagram"
                  className="group p-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <Instagram className="h-5 w-5 text-white/90 group-hover:text-white" />
                </Link>
                <Link
                  href={`${linkedinURL}`}
                  aria-label="LinkedIn"
                  className="group p-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <Linkedin className="h-5 w-5 text-white/90 group-hover:text-white" />
                </Link>
                <Link
                  href={`mailto:${ieeeMail}`}
                  aria-label="Email"
                  className="group p-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <Mail className="h-5 w-5 text-white/90 group-hover:text-white" />
                </Link>
              </div>

              <div className="pointer-events-none absolute inset-0 rounded-2xl [mask-image:linear-gradient(to_right,transparent,black,transparent)] ring-1 ring-white/10" />
            </div>
          </div>

          <div className="relative px-6 md:px-10 pb-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link
                href="/faculty"
                aria-label="Explore Faculty"
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 transition-colors hover:bg-white/10"
              >
                <div className="flex items-start gap-4 cursor-pointer">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 border border-white/10">
                    <Users className="h-5 w-5 text-white/90" />
                  </div>
                  <div className="flex-1 cursor-pointer">
                    <h3 className="text-base font-medium">Faculty</h3>
                    <p className="text-sm text-gray-300 mt-1">
                      Society Faculty Incharge
                    </p>
                  </div>
                  <ArrowRight className="h-4 w-4 opacity-70 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>

              <Link
                href="/gallery"
                aria-label="Explore Gallery"
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 transition-colors hover:bg-white/10"
              >
                <div className="flex items-start gap-4 cursor-pointer">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 border border-white/10">
                    <Code2 className="h-5 w-5 text-white/90" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-medium">Gallery</h3>
                    <p className="text-sm text-gray-300 mt-1">
                      We do a lot of fun stuff.
                    </p>
                  </div>
                  <ArrowRight className="h-4 w-4 opacity-70 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>

              <Link
                href="/sig"
                aria-label="Explore Events"
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 transition-colors hover:bg-white/10"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 border border-white/10">
                    <CalendarDays className="h-5 w-5 text-white/90" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-medium">S.I.G</h3>
                    <p className="text-sm text-gray-300 mt-1">
                      Workshops, talks, and hackathons.
                    </p>
                  </div>
                  <ArrowRight className="h-4 w-4 opacity-70 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </div>
          </div>

          <div className="relative grid gap-10 px-6 md:px-10 pb-10 md:grid-cols-2 lg:grid-cols-4">
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
            </div>

            <div>
              <h3 className="text-sm uppercase tracking-widest text-gray-400 mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2 text-gray-200">
                <li>
                  <Link
                    href="/team"
                    className="hover:text-white hover-underline"
                  >
                    Team
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects"
                    className="hover:text-white hover-underline"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="/events"
                    className="hover:text-white hover-underline"
                  >
                    Events
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm uppercase tracking-widest text-gray-400 mb-4">
                Resources
              </h3>
              <ul className="space-y-2 text-gray-200">
                <li>
                  <Link
                    href={`${joiningformURL}`}
                    className="hover:text-white hover-underline"
                  >
                    Joining Form
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm uppercase tracking-widest text-gray-400 mb-4">
                Newsletter
              </h3>
              <p className="text-gray-300 text-sm mb-3">
                Get updates on events, projects, and opportunities.
              </p>
              <form onSubmit={handleSubmit} className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading}
                  className="bg-black/30 border-white/10 text-white placeholder:text-gray-400 disabled:opacity-50"
                  aria-label="Email address"
                  required
                />
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="bg-[#111111d1] hover:bg-white/10 border border-white/10 text-white disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? "Subscribing..." : "Subscribe"}
                </Button>
              </form>
            </div>
          </div>

          <div className="relative border-t border-white/10 px-6 md:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-300">
            <p className="text-center">
              &copy; {new Date().getFullYear()} IEEE BPIT. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href={`mailto:${ieeeMail}`}
                className="hover:text-white hover-underline"
              >
                {ieeeMail}
              </Link>
              <span className="text-white/20">|</span>
              <div className="hover:text-white hover-underline cursor-pointer">
                +91 81301 04862
              </div>
            </div>

            <div className="pointer-events-none absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
