import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, MapPin, ArrowRight } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "Software Engineer Trainee",
      company: "ZByte Technologies Pvt Ltd",
      location: "Remote (Hyderabad)",
      duration: "Feb 2025 - Sep 2025",
      type: "Full Stack Development",
      achievements: [
        "Developed and integrated REST APIs using C# ASP.NET and created corresponding MySQL database tables, consumed via React.js frontend for the Quote Bot Project (Full Stack Project)",
        "Designed and tested APIs with Swagger, ensuring clear documentation and smooth communication between backend and frontend teams",
        "Built a WinForms application (ARC Barcode) in C# to generate barcodes for products, improving internal product tracking efficiency"
      ],
      technologies: ["C#", "ASP.NET", "MySQL", "React.js", "Swagger", "WinForms"]
    },
    {
      role: "AIML Intern",
      company: "Rooman Technologies",
      location: "Remote (Bangalore)",
      duration: "November 2024 - Feb 2025",
      type: "AI/ML Development",
      achievements: [
        "Gained hands-on experience in building AI/ML projects using Python regression models for predictive analysis",
        "Developed an E-commerce website using Django, integrating APIs for product management and order workflows",
        "Designed and implemented an AI-powered chatbot for the e-commerce platform, enhancing customer interaction and support"
      ],
      technologies: ["Python", "Django", "Machine Learning", "AI", "Regression Models", "APIs"]
    }
  ];

  return (
    <section id="experience" className="py-section bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Hands-on experience in software development, full-stack applications, and AI/ML solutions 
            through professional internships at leading technology companies.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="shadow-card border-border/50 hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-8">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                        <Building2 className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                          {exp.role}
                        </h3>
                        <p className="text-lg font-medium text-accent mb-1">
                          {exp.company}
                        </p>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </div>
                          <div className="hidden sm:block">•</div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {exp.duration}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <Badge variant="outline" className="w-fit">
                      {exp.type}
                    </Badge>
                  </div>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="text-base font-semibold text-foreground mb-4">Key Achievements</h4>
                    <div className="space-y-3">
                      {exp.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-start gap-3">
                          <ArrowRight className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {achievement}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-base font-semibold text-foreground mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="secondary" 
                          className="bg-muted hover:bg-muted/80 transition-colors duration-200"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;