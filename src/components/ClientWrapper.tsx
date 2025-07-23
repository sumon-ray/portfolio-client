"use client"
import { useState, useEffect } from "react"
import type React from "react"

import { Trophy, Code, Sparkles, Heart } from "lucide-react"

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [currentMessage, setCurrentMessage] = useState(0)

  const loadingMessages = [
    "Initializing awesome experience...",
    "Loading creative elements...",
    "Preparing something special...",
    "Almost ready to impress...",
    "Welcome to my portfolio!",
  ]

  useEffect(() => {
    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + 2
      })
    }, 30)

    // Message rotation
    const messageInterval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % loadingMessages.length)
    }, 400)

    // Main loading timer
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => {
      clearTimeout(timer)
      clearInterval(progressInterval)
      clearInterval(messageInterval)
    }
  }, [])

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#171b39] overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          {/* Floating particles */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-400/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}

          {/* Gradient orbs */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-pink-500/10 rounded-full blur-3xl animate-pulse" />
        </div>

        {/* Main loading content */}
        <div className="relative z-10 text-center space-y-8 px-4">
          {/* Logo/Brand section */}
          <div className="space-y-4">
            <div className="relative">
              {/* Rotating ring */}
              <div className="w-24 h-24 mx-auto relative">
                <div className="absolute inset-0 border-4 border-blue-500/20 rounded-full"></div>
                <div className="absolute inset-0 border-4 border-transparent border-t-blue-500 rounded-full animate-spin"></div>
                <div className="absolute inset-2 border-2 border-transparent border-t-purple-500 rounded-full animate-spin animation-delay-150"></div>

                {/* Center icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center animate-pulse">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Floating icons */}
              <div className="absolute -top-2 -left-2 animate-bounce" style={{ animationDelay: "0.5s" }}>
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                  <Trophy className="w-4 h-4 text-white" />
                </div>
              </div>

              <div className="absolute -top-2 -right-2 animate-bounce" style={{ animationDelay: "1s" }}>
                <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
              </div>

              <div
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 animate-bounce"
                style={{ animationDelay: "1.5s" }}
              >
                <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Heart className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>

            {/* Brand text */}
            <div className="space-y-2">
              <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-white via-blue-300 to-purple-300 bg-clip-text text-transparent">
                Portfolio
              </h1>
              <p className="text-gray-400 text-sm">Crafting Digital Experiences</p>
            </div>
          </div>

          {/* Progress section */}
          <div className="space-y-4 max-w-sm mx-auto">
            {/* Progress bar */}
            <div className="relative">
              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full transition-all duration-300 ease-out relative"
                  style={{ width: `${progress}%` }}
                >
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                </div>
              </div>

              {/* Progress percentage */}
              <div className="flex justify-between items-center mt-2">
                <span className="text-xs text-gray-400">Loading...</span>
                <span className="text-xs text-blue-400 font-medium">{progress}%</span>
              </div>
            </div>

            {/* Loading message */}
            <div className="h-6 flex items-center justify-center">
              <p className="text-gray-300 text-sm animate-pulse transition-all duration-300">
                {loadingMessages[currentMessage]}
              </p>
            </div>
          </div>

          {/* Cute loading dots */}
          <div className="flex justify-center space-x-2">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-bounce"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>

          {/* Fun fact or tip */}
          <div className="mt-8 p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 max-w-md mx-auto">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="text-yellow-400 text-xs font-medium">Did you know?</span>
            </div>
            <p className="text-gray-300 text-xs leading-relaxed">
              This portfolio is built with Next.js, TypeScript, and Tailwind CSS for the best performance and user
              experience!
            </p>
          </div>
        </div>

        {/* Fade out animation */}
        <div
          className={`absolute inset-0 bg-[#171b39] transition-opacity duration-1000 ${
            progress === 100 ? "opacity-0" : "opacity-100"
          }`}
        />
      </div>
    )
  }

  return <div className="animate-fade-in">{children}</div>
}
