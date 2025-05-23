"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState, useRef, useEffect } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, Mail } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

// Schema validation using Zod
const contactSchema = z.object({
  email: z.string().email("Invalid email"),
  message: z.string().min(1, "Message is required"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [success, setSuccess] = useState<string | null>(null);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const controls = useAnimation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  // Animate form on mount
  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    });
  }, [controls]);

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // For demo purposes, we'll just simulate a successful submission
      // In production, uncomment the fetch call below
      /*
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) throw new Error('Failed to submit contact form')
      */

      setSuccess("Message sent successfully!");
      setIsFormSubmitted(true);
      reset();
    } catch (error) {
      setSuccess("Something went wrong!");
      console.error(error);
    }
  };

  return (
    <section id='contact' className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-4 "> {/* White background */}
      {/* Remove animated background orbs and dark gradient */}
      {/* Remove grid pattern overlay if it was too subtle on white or not desired */}
      {/* <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-[0.02] [background-size:20px_20px]" /> */}


      {/* Floating particles - adjusted for white background */}
      <FloatingParticles />

      {/* Content container */}
      <div className="w-full max-w-3xl relative z-10">
        <AnimatePresence mode="wait">
          {!isFormSubmitted ? (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={controls}
              exit={{ opacity: 0, y: -30 }}
              // Adjust for light theme: subtle blur, light background, cleaner shadow, light border
              className="relative backdrop-blur-md  p-8 md:p-12 rounded-3xl shadow-xl border border-gray-200 overflow-hidden"
            >
              {/* Decorative elements - adjust for light theme, maybe subtle light glows or remove */}
              {/* These might be too strong or distracting on a white background, consider removing or making them very subtle */}
              <div className="absolute -top-10 -left-10 w-28 h-28  rounded-full blur-xl" />
              <div className="absolute -bottom-10 -right-10 w-36 h-36  rounded-full blur-xl" />

              {/* Header */}
              <div className="relative mb-10 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 200, damping: 15 }}
                  // Adjusted for light theme: primary accent color, subtle shadow
                  className="w-20 h-20 mx-auto mb-6 rounded-full bg-blue-600 flex items-center justify-center shadow-md transform hover:scale-110 transition-transform duration-300"
                >
                  <Mail className="h-10 w-10 text-white" />
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  // Text color for light theme
                  className="text-4xl md:text-5xl font-extrabold  mb-3 tracking-tight"
                >
                  Let's Connect
                </motion.h2>

                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  // Divider color for light theme
                  className="h-1.5 w-24 bg-blue-600 mx-auto mb-5 rounded-full"
                />

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  // Text color for light theme
                  className=" max-w-md mx-auto text-lg leading-relaxed"
                >
                  Have a project in mind or want to discuss opportunities? Send me a message and I'll get back to you soon!
                </motion.p>
              </div>

              {/* Form */}
              <motion.form
                ref={formRef}
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-7 relative z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <div className="group">
                  <div className="relative">
                    <Input
                      placeholder="Your Email"
                      {...register("email")}
                      // Input styles for light theme: light background, darker text/placeholder, primary focus
                      className="bg-slate-800 border border-gray-300  placeholder:text-gray-500 h-16 px-6 rounded-xl focus:border-blue-600 focus:ring-2 focus:ring-blue-600 transition-all duration-300 text-lg"
                    />
                    {/* Border glow on focus for light theme */}
                    <div className="absolute inset-0 rounded-xl border border-gray-300 group-focus-within:border-blue-600 group-focus-within:shadow-md pointer-events-none transition-all duration-300" />
                  </div>
                  {errors.email && <p className="text-red-600 text-sm mt-2 ml-2">{errors.email.message}</p>}
                </div>

                <div className="group">
                  <div className="relative">
                    <Textarea
                      placeholder="Your Message"
                      {...register("message")}
                      rows={6}
                      // Textarea styles for light theme
                      className="bg-slate-800 border border-gray-300  placeholder:text-gray-500 px-6 py-5 rounded-xl focus:border-blue-600 focus:ring-2 focus:ring-blue-600 transition-all duration-300 resize-none text-lg"
                    />
                    {/* Border glow on focus for light theme */}
                    <div className="absolute inset-0 rounded-xl border border-gray-300 group-focus-within:border-blue-600 group-focus-within:shadow-md pointer-events-none transition-all duration-300" />
                  </div>
                  {errors.message && <p className="text-red-600 text-sm mt-2 ml-2">{errors.message.message}</p>}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  // Button styles for light theme: primary accent color
                  className="w-full h-16 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg
                        className="animate-spin h-6 w-6 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-3">
                      Send Message
                      <Send className="h-6 w-6" />
                    </span>
                  )}
                </Button>
              </motion.form>
            </motion.div>
          ) : (
            <SuccessMessage setIsFormSubmitted={setIsFormSubmitted} />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

function SuccessMessage({ setIsFormSubmitted }: { setIsFormSubmitted: (value: boolean) => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      // Adjusted for light theme: light background, cleaner shadow, light border
      className="backdrop-blur-md  p-12 md:p-16 rounded-3xl shadow-xl border border-gray-200 text-center"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
        // Adjusted for light theme: success green, subtle shadow
        className="w-24 h-24 mx-auto mb-8 rounded-full bg-green-500 flex items-center justify-center shadow-md"
      >
        <CheckCircle className="h-12 w-12 text-white" />
      </motion.div>

      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        // Text color for light theme
        className="text-4xl font-extrabold  mb-4 tracking-tight"
      >
        Message Sent!
      </motion.h3>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        // Text color for light theme
        className="text-gray-600 mb-10 text-lg leading-relaxed"
      >
        Thank you for reaching out. I'll get back to you as soon as possible!
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <Button
          onClick={() => setIsFormSubmitted(false)}
          // Button styles for light theme: subtle background, primary accent text, light border
          className=" hover:bg-gray-200 text-blue-600 border border-gray-300 rounded-xl px-8 py-4 text-lg transition-all duration-300 hover:shadow-md"
        >
          Send Another Message
        </Button>
      </motion.div>
    </motion.div>
  );
}

// Particle design and animation for a more dynamic look - adjusted for light theme
function FloatingParticles() {
  return (
    <>
      {[...Array(25)].map((_, i) => {
        const size = Math.random() * 5 + 1;
        const initialX = Math.random() * 100;
        const initialY = Math.random() * 100;
        const duration = Math.random() * 25 + 15;
        const delay = Math.random() * 6;

        return (
          <motion.div
            key={i}
            // Adjusted for light theme: subtle color, lower opacity, softer glow
            className="absolute rounded-full  opacity-70"
            style={{
              width: size,
              height: size,
              left: `${initialX}%`,
              top: `${initialY}%`,
              boxShadow: '0 0 5px rgba(0,0,0,0.1)', // Softer glow
            }}
            animate={{
              x: [Math.random() * 100 - 50, Math.random() * 100 - 50, Math.random() * 100 - 50],
              y: [Math.random() * 100 - 50, Math.random() * 100 - 50, Math.random() * 100 - 50],
              opacity: [0.7, 0.9, 0.7], // Subtle opacity animation
              scale: [1, 1.1, 1], // Subtle scale animation
            }}
            transition={{
              duration,
              delay,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          />
        );
      })}
    </>
  );
}