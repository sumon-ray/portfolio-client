"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { GraduationCap, Heart, User, MapPin, Mail, Phone, Download, ExternalLink } from 'lucide-react'
import Image from "next/image"
import AboutMeTab from "./AboutMeTab"
import EducationTab from "./EducationTab"
import HobbiesTab from "./HobbiesTab"
import FloatingParticles from "../ui/particles/FloatingParticles"
import SectionHeading from "../ui/particles/SectionHeading"

type TabType = "about" | "education" | "hobbies"

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState<TabType>("about")
  const [isLoaded, setIsLoaded] = useState(false)
  const [hoveredContact, setHoveredContact] = useState<string | null>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  const personalInfo = {
    name: "Sumon Ray",
    title: "Full-Stack Developer",
    bio: "I'm a passionate Full-Stack developer with expertise in creating responsive, user-friendly web applications. With a strong foundation in modern JavaScript frameworks and a keen eye for design, I strive to build seamless digital experiences that delight users and solve real-world problems.",
    location: "Tangail, Dhaka",
    email: "sumonray146371@gmail.com",
    phone: "+880 017 6360-4565",
    languages: ["Bangla (Native)", "English (Fluent)"],
    interests: ["Web Development", "UI/UX Design", "Blog Writing", "Tech Blogging"],
    profileImage: "/profile.png",
  }

  const education = [
    {
      id: "1",
      degree: "BBA In Management",
      institution: "Mawlana Bhashani Science University",
      location: "Tangail, Dhaka",
      period: "2022 - 2026",
    },
    {
      id: "2",
      degree: "High Secondary School",
      institution: "Pakerhat Government College",
      location: "Khanshama Thana",
      period: "2020 - 2021",
    },
  ]

  const hobbies = [
    {
      id: "1",
      title: "Photography",
      description: "Capturing urban landscapes and street photography",
      icon: "📷",
    },
    {
      id: "2",
      title: "Hiking",
      description: "Exploring nature trails and mountains",
      icon: "🥾",
    },
    {
      id: "3",
      title: "Reading",
      description: "Science fiction and technology books",
      icon: "📚",
    },
    {
      id: "4",
      title: "Cooking",
      description: "Experimenting with international cuisines",
      icon: "🍳",
    },
  ]

  const tabs = [
    { id: "about", label: "About Me", icon: User, color: "from-blue-500 to-cyan-400" },
    { id: "education", label: "Education", icon: GraduationCap, color: "from-purple-500 to-pink-400" },
    { id: "hobbies", label: "Hobbies", icon: Heart, color: "from-emerald-500 to-teal-400" },
  ]

  const contactInfo = [
    { icon: MapPin, label: "Location", value: personalInfo.location, href: "#" },
    { icon: Mail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: Phone, label: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
  ]

  return (
    <section id="aboutme" className="relative py-24 overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent -z-10" />
      
      {/* Animated particles */}
      <FloatingParticles />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionHeading 
          title="About Me" 
          subtitle="Discover my journey, passion, and the story behind the code" 
          centered 
        />

        {/* Main Content Grid */}
        <div className="mt-16 grid grid-cols-1 xl:grid-cols-12 gap-8">
          {/* Profile Section - Enhanced */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="xl:col-span-4 space-y-6"
          >
            {/* Profile Card */}
            <div className="relative group">
              {/* Animated background elements */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200 animate-pulse" />
              
              <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-3xl border border-slate-700/50 overflow-hidden">
                {/* Profile Image */}
                <div className="relative h-80 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10" />
                  <Image
                    src="/coding.jpg"
                    alt={personalInfo.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                  
                  {/* Floating status indicator */}
                  <div className="absolute top-4 right-4 z-20">
                    <div className="flex items-center gap-2 bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/30 rounded-full px-3 py-1">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                      <span className="text-emerald-400 text-xs font-medium">Available</span>
                    </div>
                  </div>
                </div>

                {/* Profile Info */}
                <div className="p-6 space-y-4">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-1">{personalInfo.name}</h3>
                    <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 font-semibold">
                      {personalInfo.title}
                    </p>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-3 gap-4 py-4 border-y border-slate-700/50">
                    <div className="text-center">
                      <div className="text-xl font-bold text-white">5+</div>
                      <div className="text-xs text-slate-400">Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold text-white">2+</div>
                      <div className="text-xs text-slate-400">Years Exp</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold text-white">100%</div>
                      <div className="text-xs text-slate-400">Dedication</div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-medium py-2.5 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group">
                      <Download className="w-4 h-4 group-hover:animate-bounce" />
                      Resume
                    </button>
                    <button className="bg-slate-800/50 hover:bg-slate-700/50 border border-slate-600/50 text-slate-300 hover:text-white font-medium py-2.5 px-4 rounded-xl transition-all duration-300 flex items-center justify-center">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Cards */}
            <div className="space-y-3">
              {contactInfo.map((contact, index) => {
                const Icon = contact.icon
                return (
                  <motion.a
                    key={contact.label}
                    href={contact.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    onMouseEnter={() => setHoveredContact(contact.label)}
                    onMouseLeave={() => setHoveredContact(null)}
                    className="block group"
                  >
                    <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4 hover:bg-slate-700/30 hover:border-slate-600/50 transition-all duration-300">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg transition-all duration-300 ${
                          hoveredContact === contact.label 
                            ? 'bg-gradient-to-r from-blue-500 to-cyan-400 text-white' 
                            : 'bg-slate-700/50 text-slate-400'
                        }`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs text-slate-400 uppercase tracking-wide">{contact.label}</div>
                          <div className="text-sm text-slate-200 truncate">{contact.value}</div>
                        </div>
                      </div>
                    </div>
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          {/* Content Section - Enhanced */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="xl:col-span-8 space-y-6"
          >
            {/* Enhanced Tab Navigation */}
            <div className="relative">
              <div className="flex flex-wrap gap-2 p-2 bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-700/50">
                {tabs.map((tab) => {
                  const Icon = tab.icon
                  const isActive = activeTab === tab.id
                  
                  return (
                    <motion.button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as TabType)}
                      className={`relative flex items-center gap-3 px-6 py-3 rounded-xl font-medium transition-all duration-300 flex-1 min-w-0 ${
                        isActive
                          ? "text-white shadow-lg"
                          : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeTab"
                          className={`absolute inset-0 bg-gradient-to-r ${tab.color} rounded-xl`}
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                      <div className="relative flex items-center gap-3">
                        <Icon className="w-5 h-5 flex-shrink-0" />
                        <span className="truncate">{tab.label}</span>
                      </div>
                    </motion.button>
                  )
                })}
              </div>
            </div>

            {/* Enhanced Content Area */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-2xl blur opacity-50" />
              <div className="relative bg-slate-900/40 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-8 min-h-[500px]">
                <AnimatePresence mode="wait">
                  {activeTab === "about" && (
                    <AboutMeTab key="about" personalInfo={personalInfo} />
                  )}
                  {activeTab === "education" && (
                    <EducationTab key="education" education={education} />
                  )}
                  {activeTab === "hobbies" && (
                    <HobbiesTab key="hobbies" hobbies={hobbies} />
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
