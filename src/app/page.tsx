import ClientWrapper from "@/components/ClientWrapper";
// import AboutSection from "@/components/about/AboutSection";
import ContactForm from "@/components/contact/ContactForm";
import HeroSection from "@/components/hero/HeroSection";
import GetAllProjects from "@/components/project/getAllProjects";
import Navbar from "@/components/shared/Navbar";
import AllBlogPage from "./dashboard/blog/all-blogs/page";
import AllSkillPage from "./dashboard/skills/all-skills/page";
import AboutMe from "@/components/about/AboutMe";
import LeadershipSection from "@/components/about/LeadershipSection";
import Footer from "@/components/shared/Footer";

export default function HomePage() {
  return (
    <>
      <ClientWrapper>
        <Navbar />
        <HeroSection />
        {/* <AboutSection /> */}
        <AboutMe />
        <LeadershipSection />
        <GetAllProjects />
        <AllSkillPage />
        <AllBlogPage />
        <ContactForm />
        <Footer />
      </ClientWrapper>
    </>
  );
}
