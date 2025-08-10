"use client"

import { motion } from "framer-motion"
import { GraduationCap, MapPin, Calendar, BookOpen } from "lucide-react"

export default function AboutMe() {
  const education = [
    {
      id: 1,
      degree: "BBA In Management",
      institution: "Mawlana Bhashani Science And Technology University",
      period: "2022 - 2026",
      location: "Tangail, Dhaka",
      status: "Current",
      type: "Bachelor's Degree",
    },
    {
      id: 2,
      degree: "High Secondary School",
      institution: "Pakerhat Government College",
      period: "2020 - 2021",
      location: "Khanshama Thana",
      status: "Completed",
      type: "Higher Secondary Education",
    },
    {
      id: 3,
      degree: "Secondary School Certificate",
      institution: "Chakrampur High School",
      period: "2016 - 2017",
      location: "Khanshama, Dinajpur",
      status: "Completed",
      type: "Secondary School Certificate",
    },
  ]

  return (
    <section className="min-h-screen   py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="md:hidden">
              Educational{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Timeline</span>
            </span>
            <span className="hidden md:inline">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Me</span>
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            <span className="md:hidden">My academic journey through the years</span>
            <span className="hidden md:inline">
              Passionate about learning and growing through education and experience
            </span>
          </p>
        </motion.div>

        {/* Desktop/Tablet Card Layout */}
        <div className="hidden md:block space-y-8">
          {education.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative"
            >
              {/* Background glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000" />

              {/* Main card */}
              <div className="relative bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 hover:border-slate-600/50 transition-all duration-500">
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  {/* Icon section */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl border border-blue-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <GraduationCap className="w-10 h-10 text-blue-400" />
                    </div>
                  </div>

                  {/* Content section */}
                  <div className="flex-1 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                          {item.degree}
                        </h3>
                        <p className="text-lg text-slate-300 font-medium">{item.institution}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium border ${
                            item.status === "Current"
                              ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
                              : "bg-blue-500/20 text-blue-400 border-blue-500/30"
                          }`}
                        >
                          {item.status}
                        </span>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="flex flex-col sm:flex-row gap-4 text-slate-400">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-cyan-400" />
                        <span>{item.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-cyan-400" />
                        <span>{item.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-cyan-400" />
                        <span>{item.type}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Progress indicator for current education */}
                {item.status === "Current" && (
                  <div className="mt-6 pt-6 border-t border-slate-700/50">
                    <div className="flex items-center justify-between text-sm text-slate-400 mb-2">
                      <span>Progress</span>
                      <span>90% Complete</span>
                    </div>
                    <div className="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "90%" }}
                        transition={{ duration: 2, delay: 1 }}
                        className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                      />
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Timeline Layout */}
        <div className="block md:hidden relative">
          {/* Central timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500 rounded-full"></div>

          <div className="space-y-12">
            {education.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
                className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} group`}
              >
                {/* Content Card */}
                <div className={`flex-1 ${index % 2 === 0 ? "pr-6" : "pl-6"}`}>
                  <div className="relative">
                    {/* Glow effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000" />

                    {/* Main content */}
                    <div className="relative bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 hover:border-slate-600/50 transition-all duration-500">
                      {/* Status badge */}
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl border border-blue-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <GraduationCap className="w-5 h-5 text-blue-400" />
                          </div>
                          <div>
                            <span className="text-xs text-slate-400 uppercase tracking-wide">{item.type}</span>
                          </div>
                        </div>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium border ${
                            item.status === "Current"
                              ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
                              : "bg-blue-500/20 text-blue-400 border-blue-500/30"
                          }`}
                        >
                          {item.status}
                        </span>
                      </div>

                      {/* Main info */}
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                        {item.degree}
                      </h3>
                      <p className="text-sm text-slate-300 font-medium mb-3">{item.institution}</p>

                      {/* Details */}
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-slate-400 text-sm">
                          <Calendar className="w-3 h-3 text-cyan-400" />
                          <span>{item.period}</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-400 text-sm">
                          <MapPin className="w-3 h-3 text-cyan-400" />
                          <span>{item.location}</span>
                        </div>
                      </div>

                      {/* Progress bar for current education */}
                      {item.status === "Current" && (
                        <div className="mt-4 pt-3 border-t border-slate-700/50">
                          <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                            <span>Academic Progress</span>
                            <span>90% Complete</span>
                          </div>
                          <div className="w-full bg-slate-700/50 rounded-full h-1.5 overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: "90%" }}
                              transition={{ duration: 2, delay: 1.5 }}
                              className="h-full bg-gradient-to-r from-emerald-500 to-cyan-400 rounded-full"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.3 + 0.5 }}
                  className="relative z-10"
                >
                  <div className="w-5 h-5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full border-3 border-slate-900 shadow-lg group-hover:scale-125 transition-transform duration-300">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full animate-ping opacity-20"></div>
                  </div>
                </motion.div>

                {/* Empty space for alternating layout */}
                <div className="flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Summary Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-xl rounded-2xl border border-slate-600/30 p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4 text-center">
              <span className="md:hidden">Academic Journey</span>
              <span className="hidden md:inline">Educational Timeline</span>
            </h3>
            <div className="text-center">
              <p className="text-slate-300 leading-relaxed max-w-2xl mx-auto text-sm md:text-base">
                <span className="md:hidden">
                  From completing my Secondary School Certificate in 2017 to currently pursuing my Bachelor's degree in
                  Management, my educational path reflects a commitment to continuous learning and academic excellence
                  across different institutions in Bangladesh.
                </span>
                <span className="hidden md:inline">
                  My educational journey spans over a decade, from completing my SSC at Chakrampur High School to
                  currently pursuing my Bachelor's degree in Management. Each step has contributed to building a strong
                  foundation in analytical thinking, problem-solving, and systematic learning approaches.
                </span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
