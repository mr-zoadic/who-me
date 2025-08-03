import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with modern payment integration",
      longDescription: "A comprehensive e-commerce platform built with React and Node.js, featuring user authentication, product management, shopping cart functionality, and Stripe payment integration. Includes admin dashboard for inventory management.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe", "JWT"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/username/ecommerce",
      category: "Web Application"
    },
    {
      title: "Task Management Dashboard",
      description: "Collaborative project management tool with real-time updates",
      longDescription: "A modern task management application with drag-and-drop functionality, real-time collaboration features, team management, and progress tracking. Built with a focus on user experience and performance.",
      technologies: ["Vue.js", "TypeScript", "Socket.io", "PostgreSQL", "Redis"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/username/taskmanager",
      category: "Web Application"
    },
    {
      title: "Weather Analytics API",
      description: "RESTful API for weather data aggregation and analysis",
      longDescription: "A robust API service that aggregates weather data from multiple sources, provides historical analysis, and offers predictive insights. Features comprehensive documentation and rate limiting.",
      technologies: ["Python", "FastAPI", "PostgreSQL", "Docker", "AWS"],
      githubUrl: "https://github.com/username/weather-api",
      category: "Backend Service"
    },
    {
      title: "Mobile Fitness Tracker",
      description: "Cross-platform mobile app for fitness tracking and goals",
      longDescription: "A comprehensive fitness tracking application with workout planning, progress monitoring, social features, and integration with wearable devices. Built with React Native for both iOS and Android.",
      technologies: ["React Native", "Firebase", "Redux", "Chart.js"],
      liveUrl: "https://apps.apple.com/app/fitness-tracker",
      githubUrl: "https://github.com/username/fitness-app",
      category: "Mobile Application"
    }
  ];

  return (
    <section id="projects" className="py-section bg-muted/30">
      <div className="container max-w-portfolio mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showcase my technical skills and problem-solving approach
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="portfolio-card group">
              <CardContent className="p-8">
                <div className="space-y-6">
                  {/* Header */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-accent font-medium px-3 py-1 bg-accent/10 rounded-full">
                        {project.category}
                      </span>
                      <div className="flex gap-2">
                        {project.githubUrl && (
                          <Button variant="ghost" size="icon" asChild>
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Github size={18} />
                            </a>
                          </Button>
                        )}
                        {project.liveUrl && (
                          <Button variant="ghost" size="icon" asChild>
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink size={18} />
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.longDescription}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-background text-muted-foreground text-sm rounded-full border border-border/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3 pt-2">
                    {project.liveUrl && (
                      <Button variant="accent" size="sm" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          View Live
                          <ExternalLink size={16} />
                        </a>
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          Source Code
                          <Github size={16} />
                        </a>
                      </Button>
                    )}
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

export default Projects;