"use client";

import { motion, useScroll, useTransform, useAnimationControls } from "framer-motion";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  MessageSquare,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import AnimatedCounter from "@/components/banner/AnimatedCounter";
import AnimatedText from "@/components/banner/AnimatedText";
import FloatingIcons from "@/components/banner/FloatingIcons";
import { Button } from "@/components/ui/button";
import { downloadResume, previewResume } from "@/services/resumeService";

const HeroSection = () => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  console.log(previewUrl);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const robotControls = useAnimationControls();

  // generateRandomPosition ফাংশনটি আর প্রয়োজন নেই, তাই এটি সরিয়ে দিন।

  useEffect(() => {
    const getPreview = async () => {
      const res = await previewResume();
      setPreviewUrl(res?.data ?? null);
    };
    getPreview();

    // রোবটের অ্যানিমেশন সিকোয়েন্স সেট আপ করুন
    const startRobotAnimation = async () => {
      // 1. রোবটের প্রাথমিক এন্ট্রি অ্যানিমেশন (স্কেল আপ এবং অপাসিটি)
      // এবং একটি নির্দিষ্ট পজিশন সেট করুন
      // **আপনার পছন্দসই ফিক্সড পজিশন এখানে সেট করুন (যেমন: left: '15%', top: '25%')**
      await robotControls.start({ opacity: 1, scale: 1, left:  '2%', top: '10%' }, {
        delay: 0.5, // কম্পোনেন্ট লোড হওয়ার পর এই অ্যানিমেশন শুরু হবে
        duration: 0.5,
        type: "spring"
      });

      // র্যান্ডম পজিশন লুপটি এখানে সরিয়ে দেওয়া হয়েছে।
      // রোবট এখন এই নির্দিষ্ট অবস্থানেই থাকবে।
    };

    startRobotAnimation(); // রোবট অ্যানিমেশন শুরু করুন

    // Cleanup function
    return () => {
      robotControls.stop(); // কম্পোনেন্ট আনমাউন্ট হলে অ্যানিমেশন বন্ধ করুন
    };
  }, []); // শুধু একবার মাউন্টে রান হবে
  // bg-gradient-to-b from-blue-50 to-blue-100
  return (
    <div className="relative overflow-hidden" ref={containerRef}>
      {/* Background gradient */}
      <div className="absolute inset-0  dark:from-slate-950 dark:to-slate-900 -z-10" />

      {/* Hero section */}
      <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
            {/* Left column - Text content */}
            <motion.div
                animate={robotControls}
                className="absolute z-10 transform -translate-x-1/2 "
                // এখানে প্রাথমিক left/top পজিশন সেট করার দরকার নেই,
                // কারণ robotControls.start() ফাংশন থেকে এটি নিয়ন্ত্রিত হবে।
              >
                <div className="relative">
                  <Image
                    src="/robot3.gif"
                    alt="Robot saying hello"
                    width={80}
                    height={100}
                    className="object-contain bg-red"
                  />
                  {/* "Hello!" bubble এখনও its own animation থাকবে */}
                  {/* <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1, duration: 0.3 }}
                    className="absolute -top-8 -right-8 bg-primary/20 backdrop-blur-sm text-primary px-3 py-1 rounded-full text-sm font-medium"
                  >
                    Hello!
                  </motion.div> */}
                </div>
              </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative flex flex-col gap-4"
            >
              {/* Animated robot container */}
        

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm text-primary"
              >
                <span>Available for hire</span>
              </motion.div>

              <div className="space-y-2">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
                >
                  Hi, I&apos;m <span className="text-primary">Sumon</span>
                </motion.h1>
                <AnimatedText
                  text="Full-Stack Web Developer"
                  className=" text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
                  delay={0.4}
                />
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="max-w-[600px] text-muted-foreground md:text-lg text-zinc-200 "
                >
                  "I'm Sumon Ray, a Full-Stack Web Developer. I love building scalable websites, handling everything from what you see (front-end) to how it works behind the scenes (back-end)."
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="flex flex-col sm:flex-row gap-3 mt-2"
              >
                <Button className="gap-2">
                  <MessageSquare className="h-4 w-4" />
                  Schedule a meeting
                </Button>
                <Button variant="outline" asChild>
                  <Link
                    href={previewUrl ?? "#"}
                    target="_blank"
                    className="gap-2 text-black border-primary/20 hover:bg-primary/10 hover:text-white transition-all"
                  >
                    Preview resume
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild onClick={downloadResume}>
                  <Link
                    href={previewUrl ?? "#"}
                    target="_blank"
                    className="gap-2 text-black border-primary/20 hover:bg-primary/10 hover:text-white transition-all "
                  >
                    download
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="flex gap-4 mt-4"
              >
                <Link
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link
                  href="mailto:contact@example.com"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right column - Profile image and stats */}
            <div className="relative">
              {/* Profile image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="relative mx-auto"
                style={{ y }}
              >
                <div className="relative w-[280px] h-[280px] md:w-[380px] md:h-[380px] mx-auto overflow-hidden rounded-full border-4 border-background">
                  <Image
                    src="/profile.png"
                    alt="Profile"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

         {/* stats card */}

<motion.div
  initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ delay: 1, duration: 0.5 }}
  className="absolute bottom-10 -left-10 md:-left-25 top-40"
>
  <StatCard
    value={3} // আপনার প্রজেক্টের সংখ্যা
    label="Courses Completed" // অথবা "Personal Projects"
    delay={1.4}
    className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md"
  />
</motion.div>
<motion.div
  initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ delay: 1, duration: 0.5 }}
  className="absolute bottom-10 -left-10 md:-left-20"
>
  <StatCard
    value={5} // আপনার প্রজেক্টের সংখ্যা
    label="Projects Completed" // অথবা "Personal Projects"
    delay={1.4}
    className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md"
  />
</motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Floating icons */}
        <FloatingIcons />
      </section>
    </div>
  );
};

interface StatCardProps {
  value: number;
  label: string;
  delay: number;
  className?: string;
}

function StatCard({ value, label, delay, className }: StatCardProps) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay, type: "spring", stiffness: 200, damping: 15 }}
      className={`rounded-xl p-3 shadow-lg ${className}`}
    >
      <div className="flex flex-col items-center">
        <div className="text-2xl font-bold text-primary flex items-baseline">
          <AnimatedCounter value={value} duration={2} />
          <span>+</span>
        </div>
        <div className="text-xs text-center text-muted-foreground">{label}</div>
      </div>
    </motion.div>
  );
}

export default HeroSection;