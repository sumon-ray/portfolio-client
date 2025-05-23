"use client"

import { motion } from "framer-motion"

interface Education {
  id: string
  degree: string
  institution: string
  location: string
  period: string
  gpa: string
  description: string
}

interface EducationTabProps {
  education: Education[]
}

export default function EducationTab({ education }: EducationTabProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div>
        <h3 className="text-2xl font-bold text-white mb-4">Educational Background</h3>
        <p className="text-slate-300 leading-relaxed">
          My academic journey has equipped me with a strong foundation in computer science and software development,
          preparing me for the challenges of the tech industry.
        </p>
      </div>

      <div className="relative pl-6 border-l border-slate-700">
        {education.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="mb-8 relative"
          >
            {/* Timeline dot */}
            <div className="absolute -left-[25px] top-0 h-5 w-5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 shadow-glow-sm" />

            <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h4 className="text-lg font-semibold text-white">{item.degree}</h4>
                <span className="text-cyan-400 text-sm font-medium">{item.period}</span>
              </div>

              <div className="mb-3">
                <div className="text-slate-300">{item.institution}</div>
                <div className="text-slate-400 text-sm">{item.location}</div>
              </div>

              <div className="flex items-center gap-2 mb-3">
                <span className="text-sm font-medium text-slate-400">GPA:</span>
                <span className="px-2 py-0.5 bg-slate-700/50 rounded-md text-cyan-400 text-sm">{item.gpa}</span>
              </div>

              <p className="text-slate-300 text-sm">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-xl p-5 border border-blue-800/30">
        <h4 className="text-lg font-semibold text-white mb-2">Continuous Learning</h4>
        <p className="text-slate-300">
          Beyond formal education, I'm committed to lifelong learning through online courses, workshops, and
          self-directed projects. Some notable certifications include:
        </p>
        <ul className="mt-3 space-y-2">
          <motion.li
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="flex items-center gap-2 text-slate-300"
          >
            <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
            Advanced JavaScript - Frontend Masters (2023)
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="flex items-center gap-2 text-slate-300"
          >
            <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
            React Performance Optimization - Udemy (2022)
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="flex items-center gap-2 text-slate-300"
          >
            <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
            UI/UX Design Fundamentals - Coursera (2021)
          </motion.li>
        </ul>
      </div>
    </motion.div>
  )
}
