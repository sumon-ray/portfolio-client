"use client"

import { motion } from "framer-motion"
import { Heart, Camera, Mountain, Book, ChefHat, Gamepad2, Music, Plane } from 'lucide-react'

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
  const hobbyIcons = {
    "📷": Camera,
    "🥾": Mountain,
    "📚": Book,
    "🍳": ChefHat,
  }

  const additionalInterests = [
    { name: "Gaming", icon: Gamepad2, color: "from-purple-500 to-pink-400" },
    { name: "Music", icon: Music, color: "from-green-500 to-teal-400" },
    { name: "Travel", icon: Plane, color: "from-blue-500 to-cyan-400" },
  ]

  const benefits = [
    {
      title: "Creative Problem Solving",
      description: "Photography and cooking enhance my creative approach to development challenges",
      icon: "🎨"
    },
    {
      title: "Patience & Persistence",
      description: "Hiking and reading teach me the value of patience in debugging and learning",
      icon: "⏳"
    },
    {
      title: "Attention to Detail",
      description: "My hobbies sharpen my eye for detail, crucial in UI/UX design and code quality",
      icon: "🔍"
    },
    {
      title: "Continuous Learning",
      description: "Each hobby involves constant learning, mirroring my approach to technology",
      icon: "📈"
    }
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
          <Heart className="w-8 h-8 text-red-400" />
          Hobbies & Passions
        </motion.h3>
        <motion.p 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="text-slate-300 leading-relaxed text-lg"
        >
          Beyond coding, I pursue various interests that keep me balanced, creative, and inspired in both life and work.
        </motion.p>
      </div>

      {/* Main Hobbies Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {hobbies.map((hobby, index) => {
          const IconComponent = hobbyIcons[hobby.icon as keyof typeof hobbyIcons]
          
          return (
            <motion.div
              key={hobby.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="group relative overflow-hidden"
            >
              {/* Animated background */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200" />
              
              <div className="relative bg-slate-800/40 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 h-full">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-slate-700/50 to-slate-600/50 border border-slate-600/50 group-hover:scale-110 transition-transform duration-300">
                    {IconComponent ? (
                      <IconComponent className="w-7 h-7 text-cyan-400" />
                    ) : (
                      <span className="text-2xl">{hobby.icon}</span>
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                      {hobby.title}
                    </h4>
                    <p className="text-slate-300 text-sm leading-relaxed">{hobby.description}</p>
                  </div>
                </div>
                
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
              </div>
            </motion.div>
          )
        })}
      </motion.div>

      {/* Additional Interests */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="space-y-4"
      >
        <h4 className="text-xl font-semibold text-white">Other Interests</h4>
        <div className="flex flex-wrap gap-4">
          {additionalInterests.map((interest, index) => {
            const Icon = interest.icon
            return (
              <motion.div
                key={interest.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="flex items-center gap-3 px-4 py-3 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 group cursor-pointer"
              >
                <div className={`p-2 rounded-lg bg-gradient-to-r ${interest.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-slate-300 font-medium">{interest.name}</span>
              </motion.div>
            )
          })}
        </div>
      </motion.div>

      {/* How Hobbies Enhance Work */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="space-y-6"
      >
        <h4 className="text-xl font-semibold text-white">How My Hobbies Enhance My Work</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + index * 0.1 }}
              className="bg-slate-800/20 backdrop-blur-sm rounded-xl p-5 border border-slate-700/30 hover:bg-slate-700/20 hover:border-slate-600/50 transition-all duration-300 group"
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border border-blue-700/30 text-xl group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <div>
                  <h5 className="font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {benefit.title}
                  </h5>
                  <p className="text-slate-300 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Personal Philosophy */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="bg-gradient-to-r from-emerald-900/20 via-teal-900/20 to-cyan-900/20 rounded-xl p-6 border border-emerald-800/30"
      >
        <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
          <Heart className="w-5 h-5 text-red-400" />
          Life Balance Philosophy
        </h4>
        <p className="text-slate-300 leading-relaxed">
          I believe that a well-rounded life leads to better professional performance. My hobbies not only provide 
          relaxation and joy but also contribute unique perspectives and skills that enhance my development work. 
          Whether it's the patience learned from hiking, the creativity sparked by photography, or the precision 
          developed through cooking, each interest adds value to my professional toolkit.
        </p>
      </motion.div>
    </motion.div>
  )
}
