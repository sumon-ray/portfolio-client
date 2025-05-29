"use client";

import React, { useEffect, useState } from "react";
import { BentoCard, BentoGrid } from "../magicui/bento-grid";
import { getAllProjects } from "@/services/projectService";
import { Skeleton } from "@/components/ui/skeleton";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowRightIcon, GitHubLogoIcon, GlobeIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

interface ProjectType {
  _id: string;
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  liveLink: string;
  githubLink: string;
}

const SafeImage = ({
  src,
  alt,
  fallbackSrc = "/images/banner.png",
}: {
  src: string;
  alt: string;
  fallbackSrc?: string;
}) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const x = useSpring(rotateX, { stiffness: 50, damping: 10 });
  const y = useSpring(rotateY, { stiffness: 50, damping: 10 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPos = e.clientX - rect.left;
    const yPos = e.clientY - rect.top;
    rotateX.set(((yPos / rect.height - 0.5) * 2) * 10);
    rotateY.set(((xPos / rect.width - 0.5) * 2) * 10);
  };
  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      className="relative w-full h-48 rounded-lg overflow-hidden"
      style={{ rotateX: x, rotateY: y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {!loaded && <Skeleton className="absolute inset-0 w-full h-full" />}
      <img
        src={error ? fallbackSrc : src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        onError={() => {
          setError(true);
          setLoaded(true);
        }}
        className={cn(
          "object-cover w-full h-full rounded-lg transition-opacity duration-300",
          loaded ? "opacity-100" : "opacity-0"
        )}
      />
    </motion.div>
  );
};

const GetAllProjects = () => {
  const [projects, setProjects] = useState<ProjectType[]>([]);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await getAllProjects();
        setProjects(res.data || []);
      } catch (err) {
        console.error("Error fetching projects:", err);
      }
    }
    fetchProjects();
  }, []);

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <h2 className="text-3xl font-bold sm:text-4xl">Featured Projects</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Some of my recent work that showcases my skills and expertise.
        </p>
      </motion.div>

      <BentoGrid className="gap-6">
        {projects.map((project) => (
          <BentoCard
            key={project._id}
            name={project.title}
            description={project.description}
            background={<SafeImage src={project.image || ""} alt={project.title} />}
            className="col-span-1"
          >
            {/* Details */}
            <a
              href={`/project/${project._id}`}
              className="inline-flex items-center gap-1 px-3 py-1 bg-primary text-white text-sm rounded-md hover:bg-primary/80 transition"
            >
              Details <ArrowRightIcon className="w-4 h-4" />
            </a>
            {/* Live Link */}
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1 bg-green-600 text-white text-sm rounded-md hover:bg-green-700 transition"
              >
                Live <GlobeIcon className="w-4 h-4" />
              </a>
            )}
            {/* GitHub */}
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1 bg-gray-800 text-white text-sm rounded-md hover:bg-gray-900 transition"
              >
                GitHub <GitHubLogoIcon className="w-4 h-4" />
              </a>
            )}
          </BentoCard>
        ))}
      </BentoGrid>
    </div>
  );
};

export default GetAllProjects;
