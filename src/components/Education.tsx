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
      institution: "University of Technology",
      degree: "Master of Science",
      field: "Computer Science",
      duration: "2016 - 2018",
      location: "California, USA",
      gpa: "3.8/4.0",
      description: [
        "Specialized in Software Engineering and Machine Learning",
        "Thesis: 'Optimizing Web Application Performance using AI'",
        "Teaching Assistant for Data Structures and Algorithms",
      ],
      courses: ["Advanced Algorithms", "Machine Learning", "Software Architecture", "Distributed Systems"]
    },
    {
      institution: "State University",
      degree: "Bachelor of Science",
      field: "Information Technology",
      duration: "2012 - 2016",
      location: "Texas, USA",
      gpa: "3.7/4.0",
      description: [
        "Graduated Magna Cum Laude",
        "President of Computer Science Club",
        "Completed senior capstone project on mobile app development",
      ],
      courses: ["Data Structures", "Database Systems", "Web Development", "Mobile Programming"]
    }
  ];

  const certifications: CertificationItem[] = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-SAA-2023-001",
      description: "Professional-level certification for designing distributed systems on AWS"
    },
    {
      title: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "2023",
      credentialId: "GCP-PD-2023-001",
      description: "Certification for building scalable applications on Google Cloud Platform"
    },
    {
      title: "Certified Kubernetes Administrator",
      issuer: "Cloud Native Computing Foundation",
      date: "2022",
      credentialId: "CKA-2022-001",
      description: "Certification for managing Kubernetes clusters and containerized applications"
    }
  ];

  return (
    <section id="education" className="py-section bg-muted/30">
      <div className="container max-w-portfolio mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">Education & Certifications</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic background and professional certifications
          </p>
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

                      <ul className="space-y-2 mb-4">
                        {edu.description.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-muted-foreground leading-relaxed">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <div>
                        <h5 className="text-sm font-medium text-foreground mb-2">Relevant Coursework:</h5>
                        <div className="flex flex-wrap gap-2">
                          {edu.courses.map((course) => (
                            <span
                              key={course}
                              className="px-3 py-1 bg-background text-muted-foreground text-sm rounded-full border border-border/50"
                            >
                              {course}
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

          {/* Certifications Section */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-accent/10 text-accent rounded-lg">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Professional Certifications</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="portfolio-card">
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">
                          {cert.title}
                        </h4>
                        <p className="accent-text text-sm font-medium">
                          {cert.issuer}
                        </p>
                      </div>

                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {cert.description}
                      </p>

                      <div className="space-y-1 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar size={12} />
                          <span>Issued: {cert.date}</span>
                        </div>
                        {cert.credentialId && (
                          <div>
                            <span>Credential ID: {cert.credentialId}</span>
                          </div>
                        )}
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