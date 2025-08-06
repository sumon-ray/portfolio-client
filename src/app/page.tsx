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
        {/* <AboutSection /> */}
        
        <div className="min-h-screen w-full bg-[#171b39] relative text-white">
  {/* Complex Multiplier Pattern (Enhanced) */}
  <div
    className="absolute inset-0 z-0 pointer-events-none"
    style={{
      backgroundImage: `
        repeating-linear-gradient(0deg, rgba(255,255,255,0.04) 0, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 40px),
        repeating-linear-gradient(45deg, rgba(0,255,128,0.09) 0, rgba(0,255,128,0.09) 1px, transparent 1px, transparent 20px),
       repeating-linear-gradient(-45deg, rgba(255,0,128,0.10) 0, rgba(255,0,128,0.10) 1px, transparent 1px, transparent 30px),
        repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 80px),
        radial-gradient(circle at 60% 40%, rgba(0,255,128,0.05) 0, transparent 60%)
      `,
      backgroundSize: "80px 80px, 40px 40px, 60px 60px, 80px 80px, 100% 100%",
      backgroundPosition: "0 0, 0 0, 0 0, 40px 40px, center"
    }}
  />
  {/* Your Content/Components */}
  <Navbar />

  <HeroSection />

        <AboutMe />
        <LeadershipSection />
        <GetAllProjects />
        <AllSkillPage />
        <AllBlogPage />
        <ContactForm />
        <Footer />
</div>
      </ClientWrapper>
    </>
  );
}
