"use client";

import { Menu, Moon, Sun } from "lucide-react";
import Link from "next/link";
import { useEffect, useState, useRef } from "react"; // useRef imported, though not directly used in this solution, it's good to have for general component use if needed
import { motion } from "framer-motion";

import { useTheme } from "next-themes";
import MobileSidebar from "../MobileSidebar/MobileSidebar";
import { Button } from "@/components/ui/button";

// 1. Updated navLinks:
//    - Changed hrefs to hash links (#) for in-page navigation.
//    - Added an 'id' property matching the section's HTML ID.
const navLinks = [
  { label: "About Me", href: "#aboutme", id: "aboutme" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Blogs", href: "#blogs", id: "blogs" }, // Assuming Blogs is also an in-page section now
  { label: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  // 2. State to hold the ID of the currently active section
  const [activeSection, setActiveSection] = useState<string | null>(null);

  // Handle scroll effect for navbar background (existing logic)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Effect to handle Intersection Observer for active link highlighting
  useEffect(() => {
    // Ensure component is mounted (client-side) before accessing DOM
    if (!mounted) return;

    // Options for the Intersection Observer
    const observerOptions = {
      root: null, // The viewport
      rootMargin: '0px', // No margin, element just needs to enter viewport
      threshold: 0.5, // 50% of the target is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // If a section enters the defined "active" zone, set its ID as the active section
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    // Observe each section listed in navLinks
    navLinks.forEach((link) => {
      const section = document.getElementById(link.id); // Get the actual DOM element by its ID
      if (section) {
        observer.observe(section); // Start observing the section
      }
    });

    // Cleanup function: stop observing elements and disconnect the observer when the component unmounts
    return () => {
      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section) {
          observer.unobserve(section);
        }
      });
      observer.disconnect();
    };
  }, [mounted]); // Rerun this effect only when the mounted state changes (ensuring DOM is ready)

  // Prevent hydration mismatch: Essential for client-side functionality like theme toggling and DOM interaction
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Render nothing on the server, then render on the client

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-[#171b3991] text-white backdrop-blur-sm shadow-md shadow-[#3a427c]" : " bg-[#171b39] text-white backdrop-blur-sm shadow-md shadow-[#3a427c]"
      }`}
    >
      <div className="container flex items-center justify-between h-16 px-4 mx-auto md:px-8">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <Link href="/" className="flex items-center">
            {/* <Image src="/logo.png" alt="Logo" width={40} height={40} className="object-contain" priority /> */}
             <span className="text-xl font-bold">Sumon</span> {/* Placeholder logo */}
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, staggerChildren: 0.1, delayChildren: 0.2 }}
          className="hidden mx-auto gap-1 md:gap-2 lg:gap-6 text-sm font-medium md:flex"
        >
          {navLinks.map((link, index) => ( // Use the updated navLinks array
            <motion.li
              key={link.id} // Use link.id as the key for better React performance
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
            >
              <Link
                href={link.href}
                className={`relative px-3 py-2 rounded-md transition-all duration-300 hover:text-primary ${
                  // 4. Apply active class if the current link's ID matches the activeSection state
                  activeSection === link.id ? "text-primary font-semibold" : ""
                }`}
                // You can add scroll={false} to Next.js Link for hash links
                // if you want to manage scroll behavior manually or avoid default behavior.
                // scroll={false}
              >
                {link.label}
                {/* Active indicator span: only show if this link is active */}
                {activeSection === link.id && (
                  <motion.span
                    layoutId="navbar-active-indicator" // Give it a unique layoutId for Framer Motion transitions
                    className="absolute inset-0 z-[-1] rounded-md bg-primary/10"
                    transition={{ type: "spring", duration: 0.6 }}
                  />
                )}
              </Link>
            </motion.li>
          ))}
        </motion.ul>

        {/* Right side buttons */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
        >
          {/* Theme toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-full"
            aria-label="Toggle theme"
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden"
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </Button>
        </motion.div>
      </div>

      {/* Mobile Sidebar */}
      <MobileSidebar isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </header>
  );
}