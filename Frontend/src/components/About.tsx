import { assets } from "../assets/assets";

export const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Text Section */}
          <div className="flex flex-col justify-start space-y-6 animate-slide-up">
            <p className="text-lg leading-relaxed text-foreground/90 text-left">
              I'm Alazar Girmachew, a MERN Stack Developer and backend engineer
              with a passion for building scalable and efficient web
              applications. I have developed projects ranging from eCommerce
              platforms to hospital management systems, with a focus on
              performance, security, and user-friendly design.
            </p>
            <p className="text-lg leading-relaxed text-foreground/90 text-left">
              Currently, I'm working as a Backend Developer at Eagle Lion System
              Technology Company, where I design and implement robust APIs and
              backend architectures. I enjoy turning complex ideas into
              practical digital solutions that create real impact.
            </p>

            {/* Highlights */}
            <div className="flex flex-wrap gap-4 mt-8">
              {[
                {
                  title: "Problem Solving",
                  desc: "Complex technical challenges",
                },
                { title: "Innovation", desc: "Modern development practices" },
                { title: "Collaboration", desc: "Cross-functional teamwork" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-card border rounded-lg p-4 hover-scale shadow-card"
                >
                  <h4 className="font-semibold text-primary mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className="flex justify-center items-start animate-slide-up">
            <div className="relative">
              <img
                src={assets.M}
                alt="Alazar Girmachew - Professional Photo"
                className="w-80 h-96 object-cover rounded-2xl shadow-card border-4 border-primary/20 hover-glow transition-all duration-500"
              />
              <div className="absolute -inset-4 bg-gradient-primary opacity-20 rounded-2xl -z-10 blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
