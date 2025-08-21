import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Skills } from "../components/Skills";
import { Experience } from "../components/Experience";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";
import '../index.css';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex justify-between items-center">
            <div className="text-lg sm:text-xl font-bold text-gradient">
              Alazar Girmachew
            </div>
            {/* Mobile Menu */}
            <div className="md:hidden">
              {/* You can add a hamburger menu here if needed */}
            </div>
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-4 sm:space-x-6 md:space-x-8">
              <a href="#about" className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="#skills" className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors">
                Skills
              </a>
              <a href="#experience" className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors">
                Experience
              </a>
              <a href="#projects" className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors">
                Projects
              </a>
              <a href="#contact" className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-2 sm:pt-24">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-card/50 border-t border-border py-10 sm:py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-sm sm:text-base text-muted-foreground">
            © 2024 Alazar Girmachew. Built with React, TypeScript, and TailwindCSS.
          </p>
          <p className="text-xs sm:text-sm text-muted-foreground/60 mt-2">
            Designed and developed with passion for great user experiences.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
