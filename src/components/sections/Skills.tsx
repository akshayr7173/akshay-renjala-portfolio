import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Code, Database, Wrench, Award } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "Python", level: 90, category: "primary" },
        { name: "C#", level: 85, category: "primary" },
        { name: "JavaScript", level: 80, category: "primary" },
        { name: "C", level: 75, category: "secondary" },
        { name: "HTML5", level: 90, category: "secondary" },
        { name: "CSS", level: 85, category: "secondary" },
        { name: "SQL", level: 80, category: "secondary" }
      ]
    },
    {
      title: "Frameworks & Libraries",
      icon: Wrench,
      skills: [
        { name: "React.js", level: 85, category: "primary" },
        { name: "ASP.NET Core", level: 90, category: "primary" },
        { name: "Django", level: 80, category: "primary" },
        { name: "WinForms", level: 75, category: "secondary" },
        { name: "Entity Framework", level: 70, category: "secondary" }
      ]
    },
    {
      title: "Databases & Tools",
      icon: Database,
      skills: [
        { name: "MySQL", level: 85, category: "primary" },
        { name: "SQLite", level: 80, category: "secondary" },
        { name: "Git", level: 75, category: "secondary" },
        { name: "Visual Studio", level: 90, category: "secondary" },
        { name: "VS Code", level: 85, category: "secondary" }
      ]
    }
  ];

  const certifications = [
    "Python Foundation by Infosys Springboard Learning",
    "C# (DotNet): Core Concepts by Wipro",
    "RPA Developer Foundation by UI Path",
    "TechA Java Developer by Infosys Springboard Learning"
  ];

  const getSkillColor = (category: string) => {
    return category === "primary" ? "bg-accent" : "bg-primary";
  };

  return (
    <section id="skills" className="py-section bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technical skill set spanning multiple programming languages, 
            modern frameworks, and development tools with professional certifications.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Skills Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card key={index} className="shadow-card border-border/50 hover:shadow-lg transition-all duration-300 group">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                      <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                        {category.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium text-foreground">{skill.name}</span>
                            <span className="text-sm text-muted-foreground">{skill.level}%</span>
                          </div>
                          <Progress 
                            value={skill.level} 
                            className="h-2"
                            style={{
                              '--progress-background': `hsl(var(--${skill.category === 'primary' ? 'accent' : 'primary'}))`
                            } as React.CSSProperties}
                          />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Developer Tools */}
          <Card className="shadow-card border-border/50 mb-16">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-foreground flex items-center gap-3">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Wrench className="w-5 h-5 text-accent" />
                </div>
                Developer Tools & Platforms
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {["Visual Studio", "VS Code", "Git", "IDLE", "PyCharm", "Google Colab", "Eclipse", "UI Path", "XAMPP"].map((tool, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="bg-muted hover:bg-muted/80 transition-colors duration-200 px-3 py-1"
                  >
                    {tool}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Certifications */}
          <Card className="shadow-card border-border/50">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-foreground flex items-center gap-3">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Award className="w-5 h-5 text-accent" />
                </div>
                Professional Certifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-foreground leading-relaxed">{cert}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;