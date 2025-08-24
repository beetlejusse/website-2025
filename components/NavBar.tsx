"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    { text: "./events.sh", href: "/events" },
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
            <span className="font-mono text-xs text-yellow-50 md:text-2xl">IEEE BPIT</span>
          </Link>

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          </div>
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

          <div className="flex md:hidden items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden rounded-full"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </nav>
        {mobileMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in mt-2">
            <div className="flex flex-col space-y-4 rounded-xl bg-background/90 backdrop-blur-lg p-4 border border-primary/5 dark:border-primary/10 shadow-lg">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover-underline text-2xl font-bold py-2 text-black dark:text-white"
                >
                  {item.text}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}