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
      company: "Bank of New York Mellon (BNY)",
      position: "Software Developer Intern",
      duration: "June 2025 – August 2025",
      location: "Pune, Maharashtra, India",
      description: [
        "Built backend components for the Notification Manager application—implementing message handling and persistence with Apache Kafka",
        "Conducted unit and integration testing of the application to validate requirements and support a production rollout",
        "Developed a PoC internal tool using AI Agents to automate access-request workflows for onboarding new projects and team members",
        "Auto-retrieving necessary data and raising access requests, shrinking a multi-step manual process to just a few prompts"
      ],
      technologies: ["Java", "Spring Boot", "Cucumber", "Python", "FastAPI", "Apache Kafka"]
    },
    {
      company: "Institute of High Performance Computing, A* Star, Singapore",
      position: "Research Intern",
      duration: "February 2025 – May 2025",
      location: "Remote",
      description: [
        "Developed MedShieldFL, a dynamic privacy-preserving framework for federated learning",
        "Adapts noise injection using the Fisher Information Matrix (FIM) & gradient convergence",
        "Enforces strong differential privacy (DP) guarantees while preserving predictive performance",
        "Outperformed state-of-the-art models by 7–11% for secure training in medical diagnostics"
      ],
      technologies: ["Python", "PyTorch", "Flower(FL)", "Opacus"]
    },
    {
      company: "Share Ventures, California",
      position: "AI Engineering Intern",
      duration: "June 2024 – August 2024",
      location: "Remote",
      description: [
        "Collaborated with the AI Engg. team to design and implement scalable microservices, automation solutions, and AI agent-based systems",
        "Enhanced core business workflows across portfolio management platforms and startup operations",
        "Developed a multi-agent system that enables seamless CRM CRUD operations via text-based prompts",
        "Built intelligent tools that auto-extract and populate lead details from social networks—reducing manual effort and time by over 60%"
      ],
      technologies: ["Python", "Ollama", "Langchain", "CrewAI", "Google Cloud", "ChromaDB", "PineconeDB"]
    },
    {
      company: "GenVR Research",
      position: "Backend Development Intern",
      duration: "August 2023 – February 2024",
      location: "Remote",
      description: [
        "Built multi-modal pipelines & RESTful APIs for GenAI apps, supporting text, speech & image processing using open-source LLMs",
        "Contributed to data preprocessing, fine-tuning, and benchmarking of the AryaBhatta Series",
        "Achieved performance that outperformed state-of-the-art models—including GPT-4—on multiple Indic language benchmarks"
      ],
      technologies: ["Python", "Langchain", "Huggingface", "PyTorch", "Google Services"]
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