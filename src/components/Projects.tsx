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
      title: "Multilingual Minutes of the Meeting Generation",
      description: "AI-powered meeting automation system for institutional clients",
      longDescription: "Designed and developed an industry project valued at $58,500 for institutional clients, automating the creation of meeting minutes, action plans, and summaries. Utilized AI and NLP-based frameworks, along with LLMs, to enhance efficiency in speaker identification, diarization, and transcription. Developed the backend system, integrated OAuth 2.0, designed databases, and architected deployment to support over 1,000 users.",
      technologies: ["Python", "FastAPI", "PostgreSQL", "Docker", "AWS", "OAuth 2.0", "NLP", "LLMs"],
      liveUrl: "",
      githubUrl: "",
      category: "AI/ML Application"
    }
  ];

  return (
    <section id="projects" className="py-section bg-muted/30">
      <div className="container max-w-portfolio mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">Featured Projects</h2>
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