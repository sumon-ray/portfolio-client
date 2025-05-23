"use client"

import { motion } from "framer-motion"

interface Hobby {
  id: string
  title: string
  description: string
  icon: string
}

interface HobbiesTabProps {
  hobbies: Hobby[]
}

export default function HobbiesTab({ hobbies }: HobbiesTabProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div>
        <h3 className="text-2xl font-bold text-white mb-4">Hobbies & Interests</h3>
        <p className="text-slate-300 leading-relaxed">
          When I'm not coding, I enjoy pursuing various hobbies that help me stay creative, balanced, and inspired.
          Here's a glimpse into what I enjoy during my free time.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {hobbies.map((hobby, index) => (
          <motion.div
            key={hobby.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 hover:border-cyan-800/50 transition-colors group"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border border-blue-700/30 text-2xl group-hover:scale-110 transition-transform">
                {hobby.icon}
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                  {hobby.title}
                </h4>
                <p className="text-slate-300 text-sm">{hobby.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-slate-800/50 to-slate-800/30 rounded-xl p-5 border border-slate-700/50">
        <h4 className="text-lg font-semibold text-white mb-3">What These Hobbies Bring to My Work</h4>
        <p className="text-slate-300">
          My diverse interests contribute significantly to my professional work. Photography enhances my visual design
          sensibilities, hiking builds resilience and problem-solving skills, reading keeps me informed about industry
          trends, and cooking teaches me patience and creativity—all qualities that translate into better development
          practices.
        </p>
      </div>
    </motion.div>
  )
}
