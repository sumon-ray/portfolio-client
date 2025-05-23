"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { getAllProjects } from "@/services/projectService";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion"; // motion ইম্পোর্ট করা হয়েছে

const SafeImage = ({
  src,
  alt,
  width,
  height,
  fallbackSrc = "/images/banner.png",
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  fallbackSrc?: string;
}) => {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setCurrentSrc(src);
    setLoaded(false);
    setError(false);
  }, [src]);

  return (
    <div id="projects" className="relative w-full h-48 rounded-lg overflow-hidden">
      {!loaded && (
        <Skeleton className="absolute inset-0 w-full h-full rounded-lg" />
      )}
      <Image
        src={error ? fallbackSrc : currentSrc}
        alt={alt}
        width={width}
        height={height}
        className={`object-cover w-full h-full transition-opacity duration-300 ${
          loaded ? "opacity-100" : "opacity-0"
        } rounded-lg`}
        onLoad={() => setLoaded(true)}
        onError={() => {
          console.warn(`Image failed to load: ${src}`);
          setError(true);
          setLoaded(true); // Stop showing skeleton
        }}
        unoptimized // remove if you have proper domains setup in next.config.js
      />
    </div>
  );
};

const GetAllProjects = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const router = useRouter(); // যদিও router ব্যবহার করা হচ্ছে না, এখানে রাখা হলো

  useEffect(() => {
    const fetchProjects = async () => {
      // লোডিং স্টেট সেট করা যেতে পারে এখানে
      const result = await getAllProjects();
      setProjects(result?.data || []);
      // লোডিং স্টেট অফ করা যেতে পারে এখানে
    };

    fetchProjects();
  }, []);

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-2 mx-auto items-center justify-center mb-12 text-center"
      >
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Featured Projects</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Some of my recent work that showcases my skills and expertise.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.length > 0 ? (
          projects.map((project: any, index: number) => (
            <motion.div
              key={project._id}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white border border-gray-200 rounded-xl p-5 shadow-lg
                         transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl
                         flex flex-col h-full overflow-hidden relative group"
            >
              {/* Overlay for subtle hover effect - আরও প্রিমিয়াম লুকের জন্য */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none"></div>

              <SafeImage
                src={project?.image || ""}
                alt={project.title}
                width={600}
                height={350}
              />

              <div className="flex flex-col flex-grow mt-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
                  {project.title}
                </h3>
                <p className="text-gray-700 text-sm mb-4 flex-grow line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 text-xs mb-4">
                  {project.technologies.map((tech: string, idx: number) => (
                    <span
                      key={idx}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
                  <Link
                    href={project.liveLink}
                    target="_blank"
                    className="inline-flex items-center text-blue-700 hover:text-blue-900 font-semibold transition-colors duration-200"
                  >
                    Live Site
                    <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                  </Link>
                  <Link
                    href={project.githubLink}
                    target="_blank"
                    className="inline-flex items-center text-gray-700 hover:text-gray-900 font-semibold transition-colors duration-200"
                  >
                    GitHub
                    <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full py-12">No projects found.</p>
        )}
      </div>
    </div>
  );
};

export default GetAllProjects;