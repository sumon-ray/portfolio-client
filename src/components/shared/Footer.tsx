"use client"

import { motion } from "framer-motion"
import { Mail, Github, Linkedin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: "Email",
      icon: Mail,
      href: "mailto:sumonray146371@gmail.com",
      color: "text-cyan-400 hover:text-cyan-300",
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/sumon-ray", // Replace with your actual GitHub profile
      color: "text-slate-400 hover:text-white",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/in/sumon60", // Replace with your actual LinkedIn profile
      color: "text-blue-400 hover:text-blue-300",
    },
  ]

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="border-t backdrop-blur-xl  border-slate-600 py-12 px-4"
    >
      <div className="max-w-4xl mx-auto text-center text-slate-400 space-y-6">
        <p className="text-lg font-medium">Let's build something amazing together!</p>

        {/* Social/Professional Links */}
        <div className="flex justify-center items-center gap-6">
          {socialLinks.map((link, index) => {
            const Icon = link.icon
            return (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 ${link.color} transition-colors duration-300`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-6 h-6" />
                <span className="sr-only">{link.name}</span> {/* For accessibility */}
              </motion.a>
            )
          })}
        </div>

        {/* Copyright and Credits */}
        <div className="text-sm space-y-1">
          <p>&copy; {currentYear} Sumon Ray. All rights reserved.</p>
          <p>
            Built with <span className="text-red-500">❤️</span> and Next.js
          </p>
        </div>
      </div>
    </motion.footer>
  )
}
