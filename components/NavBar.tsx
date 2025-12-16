"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { text: "./team.sh", href: "/team" },
    { text: "./projects.sh", href: "/projects" },
    { text: "./events.sh", href: "/event" },
  ];

  return (
    <header
      className={cn(
        "fixed top-5 left-0 right-0 z-50 transition-all duration-300"
      )}
    >
      <div
        className={cn(
          "w-sm lg:container  mx-auto transition-all duration-500 ease-in-out",
          scrolled ? "max-w-2xl lg:max-w-4xl" : ""
        )}
      >
        <nav
          className={cn(
            "flex items-center justify-between",
            "rounded-2xl px-4 py-2",
            " backdrop-blur-2xl",
            "border border-primary/5 dark:border-primary/10",
            "shadow-[0_5px_30px_rgba(0,0,0,0.03)] dark:shadow-[0_5px_30px_rgba(255,255,255,0.02)]"
          )}
        >
          <Link
            href="/"
            className="text-lg font-bold relative group flex items-center gap-2"
          >
            <Avatar className="w-12 h-12">
              <AvatarImage
                src="./ieee-logo.jpg"
                alt="Avatar"
                className="rounded-xl w-12 h-12"
              />
              <AvatarFallback></AvatarFallback>
            </Avatar>
            <span className="font-mono text-yellow-50 text-2xl">IEEE BPIT</span>
          </Link>

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-5 ">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover-underline font-mono text-gray-100 relative group text-lg font-bold"
              >
                {item.text}
              </Link>
            ))}
          </div>

          {/* Mobile: themed drawer */}
          <div className="flex md:hidden items-center space-x-2">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden rounded-full"
                  aria-label="Open menu"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="border-white/10 bg-[#0a0a0acc] backdrop-blur-2xl p-0 overflow-hidden"
              >
                {/* Decorative background */}
                <div className="pointer-events-none absolute inset-0 -z-10 opacity-60 [background:radial-gradient(600px_300px_at_20%_0%,rgba(34,211,238,0.12),transparent_60%),radial-gradient(600px_300px_at_80%_20%,rgba(244,114,182,0.10),transparent_60%)]" />
                <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-black/40 via-transparent to-black/60" />

                {/* Header inside drawer */}
                <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src="./ieee-logo.jpg" alt="Avatar" className="rounded-lg w-10 h-10" />
                    <AvatarFallback />
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="font-mono text-base text-white">IEEE BPIT</span>
                    <span className="text-[11px] text-white/60">Explore • Build • Learn</span>
                  </div>
                </div>

                {/* Nav links */}
                <div className="flex flex-col px-2 py-2">
                  {navItems.map((item) => (
                    <SheetClose asChild key={item.href}>
                      <Link
                        href={item.href}
                        className="block rounded-xl px-4 py-3 text-lg font-mono font-bold text-white hover:bg-white/5 border border-transparent hover:border-white/10 transition-colors"
                        aria-label={`Go to ${item.text}`}
                      >
                        {item.text}
                      </Link>
                    </SheetClose>
                  ))}
                </div>

                {/* Footer actions */}
                <div className="mt-auto px-4 py-3 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-white/60">© {new Date().getFullYear()} IEEE BPIT</span>
                  <SheetClose asChild>
                    <Button variant="ghost" size="sm" className="gap-2">
                      <X className="h-4 w-4" /> Close
                    </Button>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  );
}