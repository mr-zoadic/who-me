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
      title: "Tech Innovation Award",
      category: "Recognition",
      description: "Received company-wide recognition for developing an AI-powered optimization system that reduced processing time by 70%",
      date: "2023",
      icon: <Trophy className="w-5 h-5" />,
      stats: "70% improvement"
    },
    {
      title: "Open Source Contributor",
      category: "Community",
      description: "Active contributor to popular open-source projects with over 500 contributions and maintainer of 3 widely-used packages",
      date: "2020 - Present",
      icon: <Code className="w-5 h-5" />,
      stats: "500+ contributions"
    },
    {
      title: "Team Leadership Excellence",
      category: "Leadership",
      description: "Successfully led a cross-functional team of 8 developers in delivering a critical project 2 weeks ahead of schedule",
      date: "2023",
      icon: <Users className="w-5 h-5" />,
      stats: "8 team members"
    },
    {
      title: "Patent Filed",
      category: "Innovation",
      description: "Filed a patent for a novel approach to real-time data synchronization in distributed systems",
      date: "2022",
      icon: <Lightbulb className="w-5 h-5" />,
      stats: "Patent #US123456"
    },
    {
      title: "Hackathon Winner",
      category: "Competition",
      description: "1st place winner at TechCrunch Disrupt Hackathon for building an innovative healthcare monitoring solution",
      date: "2021",
      icon: <Star className="w-5 h-5" />,
      stats: "1st Place"
    },
    {
      title: "Performance Optimization",
      category: "Technical",
      description: "Optimized legacy system resulting in 85% reduction in load times and $50K annual cost savings",
      date: "2022",
      icon: <Target className="w-5 h-5" />,
      stats: "85% faster"
    }
  ];

  const stats = [
    { label: "Years of Experience", value: "6+" },
    { label: "Projects Completed", value: "50+" },
    { label: "Team Members Mentored", value: "15+" },
    { label: "Technologies Mastered", value: "25+" }
  ];

  return (
    <section id="achievements" className="py-section">
      <div className="container max-w-portfolio mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">Achievements & Impact</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Key accomplishments and contributions that highlight my professional growth
          </p>
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
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Activities and interests that contribute to my personal and professional development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="portfolio-card">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-accent/10 text-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Tech Meetup Organizer</h4>
                <p className="text-sm text-muted-foreground">
                  Organize monthly tech meetups for 200+ developers in the local community
                </p>
              </CardContent>
            </Card>

            <Card className="portfolio-card">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-accent/10 text-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Code className="w-6 h-6" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Coding Bootcamp Mentor</h4>
                <p className="text-sm text-muted-foreground">
                  Volunteer mentor helping aspiring developers transition into tech careers
                </p>
              </CardContent>
            </Card>

            <Card className="portfolio-card">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-accent/10 text-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Tech Blog Writer</h4>
                <p className="text-sm text-muted-foreground">
                  Regular contributor to technical publications with articles reaching 10K+ readers
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;