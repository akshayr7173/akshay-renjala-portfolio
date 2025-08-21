import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, Award } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Computer Science and Engineering",
      institution: "Alva's Institute of Engineering and Technology, Moodbidri",
      year: "2025",
      performance: "CGPA: 7.69",
      type: "current"
    },
    {
      degree: "Pre-university course (PCMC)",
      institution: "St. Philomena PU College, Puttur",
      year: "2021",
      performance: "Percentage: 84.66%",
      type: "completed"
    },
    {
      degree: "Secondary School Leaving Certificate",
      institution: "Shri Gajanana English Medium School, Ishwaramangala",
      year: "2019",
      performance: "Percentage: 86.56%",
      type: "completed"
    }
  ];

  return (
    <section id="education" className="py-section bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Academic journey showcasing consistent performance and dedication to learning 
            in computer science and engineering.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <Card key={index} className="shadow-card border-border/50 hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-4 gap-6 items-center">
                    {/* Icon and Type */}
                    <div className="flex items-center gap-4 md:col-span-1">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                        <GraduationCap className="w-6 h-6 text-primary" />
                      </div>
                      <Badge 
                        variant={edu.type === "current" ? "default" : "secondary"}
                        className={edu.type === "current" ? "bg-accent text-accent-foreground" : ""}
                      >
                        {edu.type === "current" ? "Current" : "Completed"}
                      </Badge>
                    </div>

                    {/* Education Details */}
                    <div className="md:col-span-2">
                      <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                        {edu.degree}
                      </h3>
                      <p className="text-muted-foreground mb-2">
                        {edu.institution}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {edu.year}
                      </div>
                    </div>

                    {/* Performance */}
                    <div className="md:col-span-1 text-center md:text-right">
                      <div className="flex items-center justify-center md:justify-end gap-2 mb-2">
                        <Award className="w-5 h-5 text-accent" />
                        <span className="text-sm font-medium text-muted-foreground">Performance</span>
                      </div>
                      <div className="text-2xl font-bold text-foreground">
                        {edu.performance.includes("CGPA") 
                          ? edu.performance.replace("CGPA: ", "")
                          : edu.performance.replace("Percentage: ", "")
                        }
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {edu.performance.includes("CGPA") ? "CGPA" : "Percentage"}
                      </div>
                    </div>
                  </div>

                  {/* Progress Bar for Current Education */}
                  {edu.type === "current" && (
                    <div className="mt-6 pt-6 border-t border-border/50">
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                        <span>Academic Progress</span>
                        <span>Expected: 2025</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-accent rounded-full h-2 transition-all duration-500" style={{width: "85%"}}></div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;