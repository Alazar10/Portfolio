import { Button } from "./Button";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { Mail, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "./use-toast";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from "emailjs-com";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_wq3446d",
        "template_d3sc63r",
        formData,
        "rrbfA1btgmbX-jUgC"
      )
      .then(() => {
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        toast({
          title: "Error",
          description: "Message failed to send. Please try again later.",
          variant: "destructive",
        });
      });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "alazargirmachew10@gmail.com",
      link: "mailto:alazargirmachew10@gmail.com",
    },
    {
      icon: FaGithub,
      label: "GitHub",
      value: "github.com/Alazar10",
      link: "https://github.com/Alazar10",
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/alazar-girmachew",
      link: "https://www.linkedin.com/in/alazar-girmachew-a82ba2311",
    },
  ];

  return (
    <section id="contact" className="py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Let's Work Together
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto"></div>
          <p className="text-base sm:text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear from you. Let's discuss how
            we can bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          {/* Contact Form */}
          <div className="bg-card border border-border rounded-xl p-6 sm:p-8 shadow-card">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-foreground">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-background border-border focus:border-primary"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-background border-border focus:border-primary"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-background border-border focus:border-primary"
                  placeholder="Project Collaboration"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-background border-border focus:border-primary resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-primary hover:opacity-90 text-white font-medium hover-glow"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-card border border-border rounded-xl p-6 sm:p-8 shadow-card">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 text-foreground">Get In Touch</h3>
              <p className="text-foreground/80 mb-6 sm:mb-8 leading-relaxed text-left">
                I'm always open to discussing new opportunities, innovative projects, and interesting challenges.
              </p>
              <div className="space-y-4">
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={info.label}
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0 p-4 rounded-lg hover:bg-background/50 transition-colors group"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex flex-col items-start justify-start">
                        <p className="font-medium text-foreground">{info.label}</p>
                        <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="bg-gradient-secondary border border-border rounded-xl p-6 sm:p-8 shadow-card">
              <h4 className="text-lg sm:text-xl font-bold mb-4 text-foreground">Current Availability</h4>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-500 font-medium text-sm sm:text-base">
                  Available for new projects
                </span>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground text-left leading-relaxed">
                I'm currently accepting new clients and projects. Let's discuss your requirements and see how we can work together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
