import AboutSection from "./_components/about-section";
import ContactSection from "./_components/contact-section";
import Hero from "./_components/hero";
import ProjectsSection from "./_components/projects";

export default function Home() {
  return (
    <div>
      <Hero />
      <ProjectsSection />
      <div className="h-px bg-linear-to-r from-transparent via-black/10 to-transparent dark:via-white/10" />
      <AboutSection />
      <div className="h-px bg-linear-to-r from-transparent via-black/10 to-transparent dark:via-white/10" />
      <ContactSection />
    </div>
  );
}
