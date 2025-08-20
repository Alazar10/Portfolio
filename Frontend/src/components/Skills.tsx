import {
  Code,
  Database,
  Server,
  Globe,
  Shield,
  Cpu,
  Layout,
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Layout,
    skills: [
      "React.js",
      "Next.js",
      "TailwindCSS",
      "Bootstrap",
      "JavaScript (ES6+)",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express.js", "Nest.js"],
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MongoDB", "Mongoose", "Firebase"],
    color: "from-purple-500 to-violet-500",
  },
  {
    title: "Tools & Deployment",
    icon: Globe,
    skills: [
      "Git",
      "GitHub",
      "REST APIs",
      "JWT",
      "Postman",
      "Vercel",
      "Netlify",
      "MongoDB Atlas",
    ],
    color: "from-orange-500 to-red-500",
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="bg-card border border-border rounded-xl p-6 hover-scale shadow-card hover-glow transition-all duration-300 flex flex-col items-start"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-4`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Title aligned to top */}
                <h3 className="text-xl font-semibold mb-4 text-foreground text-left">
                  {category.title}
                </h3>

                <div className="space-y-2 w-full">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="text-sm text-muted-foreground bg-background/50 rounded-md px-3 py-2 border border-border/50"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Technical Focus Areas */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-card border border-border rounded-xl hover-scale shadow-card">
            <Shield className="w-8 h-8 text-primary mx-auto mb-4" />
            <h4 className="font-semibold text-lg mb-2">Security</h4>
            <p className="text-sm text-muted-foreground">
              JWT Authentication, Data Validation, Secure APIs
            </p>
          </div>
          <div className="text-center p-6 bg-card border border-border rounded-xl hover-scale shadow-card">
            <Cpu className="w-8 h-8 text-primary mx-auto mb-4" />
            <h4 className="font-semibold text-lg mb-2">Performance</h4>
            <p className="text-sm text-muted-foreground">
              Optimized Queries, Caching, Scalable Architecture
            </p>
          </div>
          <div className="text-center p-6 bg-card border border-border rounded-xl hover-scale shadow-card">
            <Code className="w-8 h-8 text-primary mx-auto mb-4" />
            <h4 className="font-semibold text-lg mb-2">Best Practices</h4>
            <p className="text-sm text-muted-foreground">
              Clean Code, Testing, Documentation, Version Control
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
