import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";

interface ExperienceItem {
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string[];
  technologies: string[];
}

const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      company: "Tech Company Inc.",
      position: "Senior Software Engineer",
      duration: "2022 - Present",
      location: "San Francisco, CA",
      description: [
        "Led development of microservices architecture serving 1M+ users",
        "Mentored junior developers and established coding standards",
        "Improved application performance by 40% through optimization",
        "Collaborated with cross-functional teams on product roadmap"
      ],
      technologies: ["React", "Node.js", "TypeScript", "AWS", "Docker"]
    },
    {
      company: "Startup Solutions",
      position: "Full Stack Developer",
      duration: "2020 - 2022",
      location: "New York, NY",
      description: [
        "Built and maintained web applications using modern frameworks",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Designed and developed RESTful APIs for mobile applications",
        "Participated in agile development processes and sprint planning"
      ],
      technologies: ["Vue.js", "Python", "PostgreSQL", "GCP", "Kubernetes"]
    },
    {
      company: "Digital Agency",
      position: "Frontend Developer",
      duration: "2018 - 2020",
      location: "Austin, TX",
      description: [
        "Created responsive web interfaces for various client projects",
        "Collaborated with designers to implement pixel-perfect designs",
        "Optimized web applications for performance and accessibility",
        "Maintained and updated existing client websites"
      ],
      technologies: ["HTML/CSS", "JavaScript", "React", "SASS", "Webpack"]
    }
  ];

  return (
    <section id="experience" className="py-section">
      <div className="container max-w-portfolio mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">Work Experience</h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="portfolio-card group">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="mb-4">
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {exp.position}
                      </h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-muted-foreground">
                        <span className="accent-text font-medium text-lg">
                          {exp.company}
                        </span>
                        <div className="flex items-center gap-4 text-sm">
                          <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            <span>{exp.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin size={14} />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full border border-border/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;