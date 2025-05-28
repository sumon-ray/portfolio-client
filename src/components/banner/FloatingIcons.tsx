"use client"

import { motion } from "framer-motion"
import { Code, Database, Figma, FileCode, Globe, Layers } from "lucide-react"
import type { ReactNode } from "react"

interface FloatingIcon {
  icon: ReactNode
  x: string
  y: string
  delay: number
  duration: number
}

export default function FloatingIcons() {
  const icons: FloatingIcon[] = [
    {
      icon: <Code className="h-6 w-6 text-blue-500" />,
      x: "10.5%",
      y: "22.8%", 
      delay: 1.2,
      duration: 8,
    },
    {
      icon: <Figma className="h-6 w-6 text-purple-500" />,
      x: "85%",
      y: "15%",
      delay: 1.5,
      duration: 10,
    },
    {
      icon: <Globe className="h-6 w-6 text-green-500" />,
      x: "75%",
      y: "25%",
      delay: 1.8,
      duration: 12,
    },
    {
      icon: <Database className="h-6 w-6 text-amber-500" />,
      x: "85%",
      y: "30%",
      delay: 2.1,
      duration: 9,
    },
    {
      icon: <FileCode className="h-6 w-6 text-red-500" />,
      x: "80%",
      y: "50%",
      delay: 2.4,
      duration: 11,
    },
    {
      icon: <Layers className="h-6 w-6 text-cyan-500" />,
      x: "90%",
      y: "40%",
      delay: 2.7,
      duration: 10,
    },
  ]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: item.delay,
            duration: 0.5,
            type: "spring",
            stiffness: 200,
            damping: 15,
          }}
          style={{
            position: "absolute",
            left: item.x,
            top: item.y,
          }}
          className="rounded-full bg-background/80 backdrop-blur-sm p-2 shadow-lg"
        >
          <motion.div
            animate={{
              y: ["-10%", "10%", "-10%"],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: item.duration,
              ease: "easeInOut",
            }}
          >
            {item.icon}
          </motion.div>
        </motion.div>
      ))}
    </div>
  )
}
