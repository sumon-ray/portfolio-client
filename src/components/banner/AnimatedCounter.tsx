"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"

interface AnimatedCounterProps {
  value: number
  duration?: number
  className?: string
}

export default function AnimatedCounter({ value, duration = 2, className }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    const start = 0
    const end = value

    // First set to 0 if we're not already there
    if (start === end) return

    // Calculate the increment per frame
    const totalFrames = Math.round(duration * 60)
    const increment = end / totalFrames

    // Use requestAnimationFrame for smooth animation
    let frame = 0
    const counter = setInterval(() => {
      frame++
      const currentCount = Math.floor(increment * frame)

      // Make sure we don't exceed the target value
      if (currentCount > end) {
        setCount(end)
        clearInterval(counter)
        return
      }

      setCount(currentCount)

      // Stop when we reach the end or max frames
      if (frame === totalFrames) {
        setCount(end)
        clearInterval(counter)
      }
    }, 1000 / 60) // 60fps

    return () => clearInterval(counter)
  }, [value, duration, isInView])

  return (
    <span ref={ref} className={className}>
      {count}
    </span>
  )
}
