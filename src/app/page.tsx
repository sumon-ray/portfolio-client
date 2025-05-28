
// import AnimatedCounter from "@/components/AnimatedCounter"
// import AnimatedText from "@/components/AnimatedText"
// import FloatingIcons from "@/components/FloatingIcons"

import ClientWrapper from "@/components/ClientWrapper";
import AboutSection from "@/components/about/AboutSection";
import ContactForm from "@/components/contact/ContactForm";
import HeroSection from "@/components/hero/HeroSection";
import GetAllProjects from "@/components/project/getAllProjects";
import Navbar from "@/components/shared/Navbar";
import AllBlogPage from "./dashboard/blog/all-blogs/page";
import AllSkillPage from "./dashboard/skills/all-skills/page";

export default function HomePage() {


  return (
     <>
<ClientWrapper>
        <Navbar />

     <HeroSection />
     <AboutSection />
     <GetAllProjects />
     <AllSkillPage />
     <AllBlogPage />
     <ContactForm />
</ClientWrapper>
     </>
  )
}




// <motion.div
// ref={headerRef}
// initial="hidden"
// animate={isHeaderInView ? "visible" : "hidden"}
// variants={headerVariants}
// className="flex flex-col gap-3 mb-12 text-center max-w-3xl mx-auto"
// >
// <motion.div
//   initial={{ opacity: 0, scale: 0.8 }}
//   animate={{ opacity: 1, scale: 1 }}
//   transition={{ delay: 0.2, duration: 0.5 }}
//   className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm text-primary mx-auto"
// >
//   <span>Professional Expertise</span>
// </motion.div>
// <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">My Technical Skills</h2>
// <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
//   A comprehensive showcase of my professional skills and expertise, developed through years of practice and
//   real-world projects.
// </p>
// </motion.div>