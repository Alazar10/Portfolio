import { Button } from "./Button";
import {
  ExternalLink,
  ShoppingCart,
  Heart,
  Server,
  BarChart3,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A full-stack eCommerce web application built with the MERN stack. Features include user authentication, product management, secure payments, and order tracking. Designed for scalability and smooth user experience.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Chapa API", "Oauth2"],
    icon: ShoppingCart,
    color: "from-green-500 to-emerald-600",
    links: {
      code: "https://github.com/Alazar10/Dani-Store-Ecommerce",
      demo: "https://dani-store-ecommerce-uylc.vercel.app/",
    },
  },
  {
    title: "Hospital Management System",
    description:
      "A comprehensive hospital management platform handling patients, doctors, appointments, and billing. Built with a secure backend and intuitive dashboards to streamline healthcare workflows.",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    icon: Heart,
    color: "from-red-500 to-pink-600",
    links: {
      code: "https://github.com/Alazar10/Hospital-Management-System",
      demo: "#",
    },
  },
  {
    title: "RESTful APIs & Backend Services",
    description:
      "Developed multiple RESTful APIs and backend solutions optimized for performance, scalability, and security. Includes role-based authentication, data management, and cloud deployment.",
    techStack: ["Node.js", "Express", "MongoDB", "JWT"],
    icon: Server,
    color: "from-blue-500 to-cyan-600",
    links: {
      code: "https://github.com/Alazar10/Dani-Store-Ecommerce/blob/main/Backend/controllers/userController.js",
      demo: null,
    },
  },
  {
    title: "Dashboards & Admin Panels",
    description:
      "Designed responsive dashboards and admin panels for data visualization and management. Focused on clean UI, real-time updates, and efficient workflows.",
    techStack: ["React", "Chart.js/Recharts", "Node.js", "Express"],
    icon: BarChart3,
    color: "from-purple-500 to-violet-600",
    links: {
      code: "https://github.com/Alazar10/Dani-Store-Ecommerce/tree/main/Admin",
      demo: "https://dani-store-ecommerce-admin11.vercel.app/    ",
    },
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            A showcase of my work in full-stack development, from concept to
            deployment
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={project.title}
                className="bg-card border border-border rounded-xl p-8 shadow-card hover-glow hover-scale transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-r ${project.color} flex items-center justify-center`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-muted-foreground hover:text-primary"
                      asChild
                    >
                      <a
                        href={project.links.code}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub className="w-4 h-4" />
                      </a>
                    </Button>
                    {project.links.demo && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-muted-foreground hover:text-primary"
                        asChild
                      >
                        <a
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-4 text-foreground flex flex-col items-start">
                  {project.title}
                </h3>

                <p className="text-foreground/80 text-left leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-background border border-border rounded-full text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground flex-1"
                    asChild
                  >
                    <a
                      href={project.links.code}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                  </Button>
                  {project.links.demo && (
                    <Button
                      size="sm"
                      className="bg-gradient-primary hover:opacity-90 text-white flex-1"
                      asChild
                    >
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8"
            asChild
          >
            <a
              href="https://github.com/Alazar10"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
