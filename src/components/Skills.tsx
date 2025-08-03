import { Card, CardContent } from "@/components/ui/card";
import { 
  Code, 
  Database, 
  Cloud, 
  Smartphone, 
  Palette, 
  GitBranch,
  Server,
  Monitor
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
      title: "Frontend Development",
      icon: <Monitor className="w-6 h-6" />,
      skills: ["React", "Vue.js", "TypeScript", "Next.js", "Tailwind CSS", "SASS"],
      description: "Building responsive and interactive user interfaces"
    },
    {
      title: "Backend Development",
      icon: <Server className="w-6 h-6" />,
      skills: ["Node.js", "Python", "Express", "FastAPI", "REST APIs", "GraphQL"],
      description: "Creating robust server-side applications and APIs"
    },
    {
      title: "Database & Storage",
      icon: <Database className="w-6 h-6" />,
      skills: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Firebase", "Supabase"],
      description: "Designing and managing data storage solutions"
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="w-6 h-6" />,
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Nginx", "Linux"],
      description: "Deploying and scaling applications in the cloud"
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="w-6 h-6" />,
      skills: ["React Native", "Flutter", "iOS", "Android", "Expo", "Cordova"],
      description: "Cross-platform mobile application development"
    },
    {
      title: "Design & UX",
      icon: <Palette className="w-6 h-6" />,
      skills: ["Figma", "Adobe XD", "UI/UX Design", "Prototyping", "User Research", "Wireframing"],
      description: "Creating intuitive and visually appealing designs"
    },
    {
      title: "Development Tools",
      icon: <GitBranch className="w-6 h-6" />,
      skills: ["Git", "VS Code", "Webpack", "Vite", "Jest", "Cypress"],
      description: "Tools and workflows for efficient development"
    },
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      skills: ["JavaScript", "TypeScript", "Python", "Java", "C++", "Go"],
      description: "Core programming languages and paradigms"
    }
  ];

  return (
    <section id="skills" className="py-section">
      <div className="container max-w-portfolio mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of the technologies and tools I work with
          </p>
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

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {category.description}
                  </p>

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