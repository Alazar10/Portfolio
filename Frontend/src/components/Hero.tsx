import { Mail, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Button } from "./Button";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-5">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <div className="mb-2">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-gradient">
            Alazar Girmachew
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6 font-light">
            MERN Stack & Backend Developer
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Building scalable eCommerce platforms, hospital systems, and enterprise solutions.
          </p>
        </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
          <Button 
            size="lg" 
            className="cursor-pointer bg-gradient-primary hover:opacity-90 transition-opacity text-white font-medium px-8 py-6 text-lg hover-glow"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            View Projects
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="cursor-pointer border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors px-8 py-6 text-lg hover-glow"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Mail className="w-5 h-5 mr-2" />
            Contact Me
          </Button>
        </div>

        <div className="flex justify-center gap-6 mt-12">
          <a 
            href="mailto:alazargrimachew10@gmail.com" 
            className="text-muted-foreground hover:text-primary transition-colors p-2 hover-scale"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
          <a 
            href="https://github.com/Alazar10" 
            className="text-muted-foreground hover:text-primary transition-colors p-2 hover-scale"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="w-6 h-6" />
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};