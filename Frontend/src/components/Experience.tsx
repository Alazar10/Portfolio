import { Building, Calendar, CheckCircle } from "lucide-react";

export const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-8 bottom-0 w-0.5 bg-gradient-primary opacity-30"></div>
          
          <div className="space-y-12">
            <div className="relative flex items-start space-x-8 animate-slide-up">
              {/* Timeline dot */}
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-lg">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -inset-2 bg-gradient-primary opacity-20 rounded-full blur-md"></div>
              </div>
              
              {/* Content */}
              <div className="flex-1 bg-card border border-border rounded-xl p-8 shadow-card hover-glow transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      Backend Developer
                    </h3>
                    <h4 className="text-xl text-primary font-semibold mb-2">
                      Eagle Lion System Technology Company
                    </h4>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="font-medium">Present</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-foreground/90">
                      Designing and developing backend services using Node.js & Express
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-foreground/90">
                      Building REST APIs for enterprise-level solutions
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-foreground/90">
                      Collaborating with cross-functional teams to deliver scalable products
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {["Node.js", "Express.js", "MongoDB", "REST APIs", "Team Collaboration"].map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary border border-primary/20 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Achievements */}
        <div className="mt-16 bg-gradient-secondary rounded-xl p-8 border border-border shadow-card">
          <h3 className="text-2xl font-bold text-center mb-8 text-gradient">
            Key Achievements
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <p className="text-sm text-muted-foreground">Full-Stack Projects</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <p className="text-sm text-muted-foreground">Project Success Rate</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <p className="text-sm text-muted-foreground">System Reliability</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};