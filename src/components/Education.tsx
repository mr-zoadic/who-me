import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, Calendar, MapPin } from "lucide-react";

interface EducationItem {
  institution: string;
  degree: string;
  field: string;
  duration: string;
  location: string;
  gpa?: string;
  description: string[];
  courses: string[];
}

interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  description: string;
}

const Education = () => {
  const education: EducationItem[] = [
    {
      institution: "SRM University AP",
      degree: "Bachelor of Technology",
      field: "Computer Science Engineering",
      duration: "October 2022 – May 2026",
      location: "Amaravati, Andhra Pradesh",
      gpa: "9.29/10",
      description: [],
      courses: []
    }
  ];

  const certifications: CertificationItem[] = [];

  return (
    <section id="education" className="py-section bg-muted/30">
      <div className="container max-w-portfolio mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">Education & Certifications</h2>
        </div>

        <div className="space-y-12">
          {/* Education Section */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-accent/10 text-accent rounded-lg">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Education</h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="portfolio-card">
                  <CardContent className="p-8">
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-2">
                          {edu.degree} in {edu.field}
                        </h4>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-muted-foreground mb-3">
                          <span className="accent-text font-medium">
                            {edu.institution}
                          </span>
                          <div className="flex items-center gap-4 text-sm">
                            <div className="flex items-center gap-1">
                              <Calendar size={14} />
                              <span>{edu.duration}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin size={14} />
                              <span>{edu.location}</span>
                            </div>
                            {edu.gpa && (
                              <span className="text-accent font-medium">
                                GPA: {edu.gpa}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>


                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;