import { Card, CardContent } from "@/components/ui/card";
import { 
  Code, 
  Database, 
  Cloud, 
  Smartphone, 
  Palette, 
  GitBranch,
  Server,
  Monitor,
  Brain
} from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  description: string;
}

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      skills: ["C++", "Java", "Python", "JavaScript"],
      description: ""
    },
    {
      title: "Web Development",
      icon: <Monitor className="w-6 h-6" />,
      skills: ["HTML", "CSS", "FastAPI", "SpringBoot", "Cucumber", "PostgreSQL", "MongoDB", "Git", "Linux", "Docker", "AWS"],
      description: ""
    },
    {
      title: "Database & Cloud",
      icon: <Database className="w-6 h-6" />,
      skills: ["PostgreSQL", "MongoDB", "AWS", "Google Cloud", "Docker", "Linux"],
      description: ""
    },
    {
      title: "Artificial Intelligence",
      icon: <Brain className="w-6 h-6" />,
      skills: ["PyTorch", "Flower (FL)", "Opacus", "MONAI", "Streamlit", "Langchain", "Ollama", "ChromaDB", "Pinecone", "CrewAI"],
      description: ""
    }
  ];

  return (
    <section id="skills" className="py-section">
      <div className="container max-w-portfolio mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">Skills & Technologies</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="portfolio-card group">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-accent/10 text-accent rounded-lg">
                      {category.icon}
                    </div>
                    <h3 className="font-semibold text-foreground">
                      {category.title}
                    </h3>
                  </div>


                  {/* Skills */}
                  <div className="space-y-2">
                    {category.skills.map((skill) => (
                      <div
                        key={skill}
                        className="py-1"
                      >
                        <span className="text-sm text-foreground">
                          {skill}
                        </span>
                      </div>
                    ))}
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

export default Skills;