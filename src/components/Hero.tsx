import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-20 pb-16">
      <div className="container max-w-portfolio mx-auto px-6">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Profile Photo */}
          <div className="relative inline-block">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-accent/20 shadow-xl">
              <img
                src={profilePhoto}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Availability indicator */}
            <div className="absolute -bottom-2 -right-2 flex items-center gap-2 bg-card border border-border rounded-full px-3 py-1 shadow-md">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs font-medium text-muted-foreground">Available for work</span>
            </div>
          </div>

          {/* Main heading */}
          <div className="space-y-4">
            <h1 className="hero-text">
              Hey, I'm{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
                  [Your Name]
                </span>
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A <span className="accent-text">software engineer</span> passionate about creating 
              exceptional digital experiences through clean code and thoughtful design
            </p>
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-4">
            <Button variant="minimal" size="icon" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github />
              </a>
            </Button>
            <Button variant="minimal" size="icon" asChild>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin />
              </a>
            </Button>
            <Button variant="minimal" size="icon" asChild>
              <a href="mailto:your.email@example.com">
                <Mail />
              </a>
            </Button>
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <Button 
              onClick={scrollToContact}
              variant="accent" 
              size="lg"
              className="group"
            >
              Let's work together
              <Mail className="group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>

          {/* Location */}
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <MapPin size={16} />
            <span className="text-sm">Based in [Your Location]</span>
          </div>

          {/* Bio */}
          <div className="max-w-3xl mx-auto pt-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hello! I'm a dedicated software engineer with a passion for creating digital solutions 
              that make a difference. With expertise in modern web technologies and a keen eye for 
              design, I strive to build applications that are not only functional but also 
              beautiful and user-friendly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;