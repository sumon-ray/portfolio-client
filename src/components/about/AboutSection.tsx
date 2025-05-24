"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { GraduationCap, Heart, User } from "lucide-react"
import Image from "next/image"

import AboutMeTab from "./AboutMeTab"
import EducationTab from "./EducationTab"
import HobbiesTab from "./HobbiesTab"
import FloatingParticles from "../ui/particles/FloatingParticles"
import SectionHeading from "../ui/particles/SectionHeading"
// import SectionHeading from "../ui/SectionHeading"
// import FloatingParticles from "../ui/FloatingParticles"

type TabType = "about" | "education" | "hobbies"

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState<TabType>("about")
  const [isLoaded, setIsLoaded] = useState(false)

  // Simulate content loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  const personalInfo = {
    name: "Sumon Ray",
    title: "Full-Stack Developer",
    bio: "I'm a passionate frontend developer with expertise in creating responsive, user-friendly web applications. With a strong foundation in modern JavaScript frameworks and a keen eye for design, I strive to build seamless digital experiences that delight users and solve real-world problems.",
    location: "Tangail, Dhaka",
    email: "sumonray146371@gmail.com",
    phone: "+880 017 6360-4565",
    languages: ["Bangla (Native)", "English (Fluent)"],
    interests: ["Web Development", "UI/UX Design", "Blog writting", "Tech Blogging"],
    profileImage: "/profile.png",
  }

  
  const education = [
    {
      id: "1",
      degree: "BBA In Management",
      institution: "Mawlana Bhashani Science University",
      location: "San Francisco, CA",
      period: "2018 - 2022",
      gpa: "3.8/4.0",
      description: "Specialized in Web Development and Human-Computer Interaction. Graduated with honors.",
    },
    {
      id: "2",
      degree: "High School Diploma",
      institution: "Lincoln High School",
      location: "San Francisco, CA",
      period: "2014 - 2018",
      gpa: "3.9/4.0",
      description: "Advanced Placement in Computer Science and Mathematics. Member of the Robotics Club.",
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
    { id: "about", label: "About me", icon: User },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "hobbies", label: "Hobbies", icon: Heart },
  ]

  return (
    <section id="aboutme" className="relative py-20 overflow-hidden">
      {/* Background with animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900 -z-10" />

      {/* Animated particles */}
      <FloatingParticles />

      <div className="text-slate-300 container mx-auto px-4 md:px-6">
        <SectionHeading title="About Me" subtitle="Get to know more about me and my background" centered />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mt-12">
          {/* Profile Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : -50 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-2"
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-tl-2xl opacity-20 blur-xl" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-tr from-purple-500 to-pink-400 rounded-br-2xl opacity-20 blur-xl" />

              {/* Image container with border effect */}
              <div className="border-4 relative rounded-2xl overflow-hidden  border-slate-800 bg-transparent shadow-xl">
  <div className="aspect-[4/3] bg-transparent  relative">
    <Image
      src="/coding.jpg"
      alt={personalInfo.name}
      fill // Use the fill prop
      className="object-cover bg-transparent"
      priority
    />
  </div>

  {/* Overlay gradient */}
  <div className="absolute inset-0 bg-transparent bg-none " />

  {/* Info card at bottom */}
  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-slate-900 to-transparent">
    <h3 className="text-xl font-bold text-white">{personalInfo.name}</h3>
    <p className="text-cyan-400 font-medium">{personalInfo.title}</p>
  </div>
</div>
            </div>

            {/* Contact information card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 p-6 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50"
            >
              <h3 className="text-lg font-semibold text-white mb-4">Contact Information</h3>
              <div className="space-y-3 text-slate-300">
                <p className="flex items-center gap-2">
                  <span className="text-cyan-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </span>
                  {personalInfo.location}
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-cyan-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </span>
                  {personalInfo.email}
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-cyan-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </span>
                  {personalInfo.phone}
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : 50 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-3"
          >
            {/* Tabs */}
            <div className="mb-8">
              <div className="flex overflow-x-auto space-x-1 p-1 bg-slate-800/50 backdrop-blur-sm rounded-xl">
                {tabs.map((tab) => {
                  const Icon = tab.icon
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as TabType)}
                      className={`flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-medium transition-all duration-200 flex-1 ${
                        activeTab === tab.id
                          ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg"
                          : "text-slate-400 hover:text-white hover:bg-slate-700/50"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      <span>{tab.label}</span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Tab Content */}
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6 min-h-[400px]">
              <AnimatePresence mode="wait">
                {activeTab === "about" && <AboutMeTab key="about" personalInfo={personalInfo} />}
                {activeTab === "education" && <EducationTab key="education" education={education} />}
                {activeTab === "hobbies" && <HobbiesTab key="hobbies" hobbies={hobbies} />}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
