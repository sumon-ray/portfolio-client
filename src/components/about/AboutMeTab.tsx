"use client"

import { motion } from "framer-motion"
import { Code, Palette, Globe, Zap, Award, TrendingUp } from 'lucide-react'

interface PersonalInfo {
  name: string
  title: string
  bio: string
  location: string
  email: string
  phone: string
  languages: string[]
  interests: string[]
  profileImage: string
}

interface AboutMeTabProps {
  personalInfo: PersonalInfo
}

export default function AboutMeTab({ personalInfo }: AboutMeTabProps) {
  const skills = [
    { name: "Frontend Development", level: 90, icon: Code, color: "from-blue-500 to-cyan-400" },
    { name: "UI/UX Design", level: 85, icon: Palette, color: "from-purple-500 to-pink-400" },
    { name: "Backend Development", level: 80, icon: Globe, color: "from-emerald-500 to-teal-400" },
    { name: "Problem Solving", level: 95, icon: Zap, color: "from-orange-500 to-red-400" },
  ]

  const achievements = [
    { title: "Projects Completed", value: "15+", icon: Award },
    { title: "Client Satisfaction", value: "100%", icon: TrendingUp },
    { title: "Code Quality", value: "A+", icon: Code },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      {/* Introduction */}
      <div className="space-y-4">
        <motion.h3 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl font-bold text-white mb-4"
        >
          Hello, I'm {personalInfo.name}! 👋
        </motion.h3>
        <motion.p 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="text-slate-300 leading-relaxed text-lg"
        >
          {personalInfo.bio}
        </motion.p>
      </div>

      {/* Skills Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="space-y-6"
      >
        <h4 className="text-xl font-semibold text-white flex items-center gap-2">
          <Zap className="w-5 h-5 text-yellow-400" />
          Core Skills
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-4 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${skill.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="font-medium text-white">{skill.name}</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Proficiency</span>
                    <span className="text-slate-300">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ delay: 0.6 + index * 0.1, duration: 1, ease: "easeOut" }}
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                    />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>

      {/* Languages & Interests */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="space-y-4"
        >
          <h4 className="text-lg font-semibold text-white">Languages</h4>
          <div className="space-y-3">
            {personalInfo.languages.map((language, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="flex items-center gap-3 p-3 bg-slate-800/20 rounded-lg border border-slate-700/30 hover:bg-slate-700/20 transition-colors duration-300"
              >
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400" />
                <span className="text-slate-300">{language}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="space-y-4"
        >
          <h4 className="text-lg font-semibold text-white">Interests</h4>
          <div className="flex flex-wrap gap-2">
            {personalInfo.interests.map((interest, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="px-4 py-2 bg-gradient-to-r from-slate-700/50 to-slate-600/50 text-cyan-400 rounded-full text-sm border border-slate-600/50 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 cursor-default"
              >
                {interest}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Achievements */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="space-y-4"
      >
        <h4 className="text-lg font-semibold text-white">Quick Stats</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="text-center p-4 bg-gradient-to-br from-slate-800/40 to-slate-700/40 rounded-xl border border-slate-600/30 hover:border-slate-500/50 transition-all duration-300 group"
              >
                <Icon className="w-8 h-8 mx-auto mb-2 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-2xl font-bold text-white mb-1">{achievement.value}</div>
                <div className="text-sm text-slate-400">{achievement.title}</div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>

      {/* Philosophy */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-cyan-900/20 rounded-xl p-6 border border-blue-800/30"
      >
        <h4 className="text-lg font-semibold text-white mb-3">My Development Philosophy</h4>
        <p className="text-slate-300 leading-relaxed mb-4">
          I believe in writing clean, maintainable code that not only solves problems but also tells a story. 
          Every line of code should have a purpose, and every feature should enhance the user experience.
        </p>
        <p className="text-slate-300 leading-relaxed">
          My approach combines technical excellence with creative problem-solving, always keeping the end user 
          in mind while building scalable and robust applications.
        </p>
      </motion.div>
    </motion.div>
  )
}
