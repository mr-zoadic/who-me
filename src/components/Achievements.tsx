import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Users, Code, Lightbulb, Star, Target } from "lucide-react";

interface Achievement {
  title: string;
  category: string;
  description: string;
  date: string;
  icon: React.ReactNode;
  stats?: string;
}

const Achievements = () => {
  const achievements: Achievement[] = [
    {
      title: "LeetCode Contest Ranking",
      category: "Programming",
      description: "Contest Ranking - 1,838 on Leetcode (Top 7%)",
      date: "Current",
      icon: <Trophy className="w-5 h-5" />,
      stats: "Top 7%"
    },
    {
      title: "National Runner-Up",
      category: "Competition",
      description: "National Runner-Up (Rank 2) in India's largest case study competition (57K+ participants) – NationBuilding Competition 2025",
      date: "2025",
      icon: <Star className="w-5 h-5" />,
      stats: "Rank 2"
    }
  ];

  const stats = [
    { label: "LeetCode Ranking", value: "1,838" },
    { label: "National Competition", value: "Rank 2" },
    { label: "Students Mentored", value: "18+" },
    { label: "CGPA", value: "9.29/10" }
  ];

  return (
    <section id="achievements" className="py-section">
      <div className="container max-w-portfolio mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">Achievements & Impact</h2>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="portfolio-card text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <Card key={index} className="portfolio-card group">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-accent/10 text-accent rounded-lg">
                        {achievement.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">
                          {achievement.title}
                        </h3>
                        <span className="text-sm text-accent font-medium">
                          {achievement.category}
                        </span>
                      </div>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {achievement.date}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {achievement.description}
                  </p>

                  {/* Stats */}
                  {achievement.stats && (
                    <div className="pt-2">
                      <span className="inline-flex items-center px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full">
                        {achievement.stats}
                      </span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Extra Curriculars Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Extra Curricular Activities
            </h3>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-card rounded-lg border">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-accent/10 text-accent rounded-lg">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Member - Academic Council (Senate)</h4>
                  <p className="text-sm text-muted-foreground">Serving on the university's principal academic body, collaborating with the Vice-Chancellor and Academic Administration to draft strategies and implement policies, enhancing the academic experience for over 6,000 university students.</p>
                </div>
              </div>
              <div className="text-right text-sm text-muted-foreground">
                <div>November 2024 - Present</div>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-card rounded-lg border">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-accent/10 text-accent rounded-lg">
                  <Code className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Syndicate Board Member at Next Tech Lab</h4>
                  <p className="text-sm text-muted-foreground">Mentored and worked with over 18 students to develop their expertise in AI and its applications across research and projects, while leading strategic planning and operations for the QS-ranked, student-led research lab with over 116 members.</p>
                </div>
              </div>
              <div className="text-right text-sm text-muted-foreground">
                <div>February 2024 - November 2024</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;