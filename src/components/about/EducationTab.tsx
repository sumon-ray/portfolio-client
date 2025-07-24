"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, Award, BookOpen, Star, ExternalLink } from 'lucide-react'

interface Education {
  id: string
  degree: string
  institution: string
  location: string
  period: string
}

interface EducationTabProps {
  education: Education[]
}

export default function EducationTab({ education }: EducationTabProps) {
  const certifications = [
    {
      title: "Advanced JavaScript & ES6+",
      provider: "Frontend Masters",
      year: "2023",
      status: "Completed",
      color: "from-yellow-500 to-orange-400"
    },
    {
      title: "React Performance Optimization",
      provider: "Udemy",
      year: "2022",
      status: "Completed",
      color: "from-blue-500 to-cyan-400"
    },
    {
      title: "UI/UX Design Fundamentals",
      provider: "Coursera",
      year: "2021",
      status: "Completed",
      color: "from-purple-500 to-pink-400"
    },
    {
      title: "Full-Stack Web Development",
      provider: "freeCodeCamp",
      year: "2023",
      status: "In Progress",
      color: "from-emerald-500 to-teal-400"
    }
  ]

  const skills = [
    "Problem Solving", "Critical Thinking", "Team Collaboration", 
    "Project Management", "Research & Analysis", "Communication"
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      {/* Header */}
      <div className="space-y-4">
        <motion.h3 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl font-bold text-white flex items-center gap-3"
        >
          <BookOpen className="w-8 h-8 text-purple-400" />
          Educational Journey
        </motion.h3>
        <motion.p 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="text-slate-300 leading-relaxed text-lg"
        >
          My academic foundation combined with continuous learning has shaped my approach to technology and problem-solving.
        </motion.p>
      </div>

      {/* Formal Education Timeline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="space-y-6"
      >
        <h4 className="text-xl font-semibold text-white flex items-center gap-2">
          <Award className="w-5 h-5 text-blue-400" />
          Formal Education
        </h4>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500" />
          
          <div className="space-y-8">
            {education.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.2 }}
                className="relative pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-4 top-2 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border-4 border-slate-900 shadow-lg" />
                
                {/* Content card */}
                <div className="bg-slate-800/40 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 group">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
                    <div>
                      <h5 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                        {item.degree}
                      </h5>
                      <p className="text-slate-300 font-medium">{item.institution}</p>
                    </div>
                    <div className="flex items-center gap-4 mt-2 lg:mt-0">
                      <div className="flex items-center gap-1 text-cyan-400 text-sm">
                        <Calendar className="w-4 h-4" />
                        {item.period}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-slate-400 text-sm">
                    <MapPin className="w-4 h-4" />
                    {item.location}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Certifications & Courses */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="space-y-6"
      >
        <h4 className="text-xl font-semibold text-white flex items-center gap-2">
          <Star className="w-5 h-5 text-yellow-400" />
          Certifications & Continuous Learning
        </h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-5 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-start justify-between mb-3">
                <div className={`p-2 rounded-lg bg-gradient-to-r ${cert.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                  <BookOpen className="w-4 h-4" />
                </div>
                <div className="flex items-center gap-1">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    cert.status === 'Completed' 
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' 
                      : 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                  }`}>
                    {cert.status}
                  </span>
                </div>
              </div>
              
              <h5 className="font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                {cert.title}
              </h5>
              
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-400">{cert.provider}</span>
                <span className="text-slate-300">{cert.year}</span>
              </div>
              
              <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="flex items-center gap-1 text-cyan-400 text-sm hover:text-cyan-300 transition-colors duration-200">
                  <ExternalLink className="w-3 h-3" />
                  View Certificate
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Skills Developed */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="bg-gradient-to-r from-slate-800/40 to-slate-700/40 rounded-xl p-6 border border-slate-600/30"
      >
        <h4 className="text-lg font-semibold text-white mb-4">Academic Skills Developed</h4>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 + index * 0.05 }}
              className="flex items-center gap-2 p-2 bg-slate-700/30 rounded-lg hover:bg-slate-600/30 transition-colors duration-300"
            >
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400" />
              <span className="text-slate-300 text-sm">{skill}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Learning Philosophy */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-cyan-900/20 rounded-xl p-6 border border-purple-800/30"
      >
        <h4 className="text-lg font-semibold text-white mb-3">Learning Philosophy</h4>
        <p className="text-slate-300 leading-relaxed">
          I believe that learning never stops in the tech industry. My formal education provided me with a strong 
          foundation in analytical thinking and problem-solving, while continuous learning through online courses 
          and certifications keeps me updated with the latest technologies and best practices.
        </p>
      </motion.div>
    </motion.div>
  )
}
