import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Calendar, ArrowRight } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Quote Bot Application",
      subtitle: "Full Stack Freight Management System",
      date: "June 2025",
      description: "Built a comprehensive freight/shipping management system enabling customers to create, edit, view, and book quotes with automated document generation.",
      achievements: [
        "Implemented quote creation, booking, and document automation (BOL, Shipping Summaries, Invoices)",
        "Added customer/user management, history tracking, and TMS settings integration",
        "Built API services and MySQL database tables integrated with React.js frontend",
        "Designed history and tracking features using React DataGrids with search, filtering, and export options"
      ],
      technologies: ["C#", "ASP.NET", "MySQL", "React.js", "HTML", "CSS"],
      type: "Full Stack",
      status: "Completed"
    },
    {
      title: "Flexible Resource Management in High Throughput Satellite Communication Systems",
      subtitle: "Urban Planning & Disaster Prediction Platform",
      date: "April 2025",
      description: "Created a comprehensive Django-based system for urban planning and disaster prediction with real-time environmental monitoring and AI-powered risk assessments.",
      achievements: [
        "Built web-based system for urban planning with user registration and role-based access control",
        "Implemented data input modules for land use, environmental, and historical datasets with bulk upload support",
        "Integrated external APIs (Weather API, government datasets) for real-time environmental monitoring",
        "Developed predictive models for groundwater levels and AI-based disaster risk assessments",
        "Implemented report generation with PDF/Excel export and GIS mapping visualizations"
      ],
      technologies: ["Django", "Python", "SQLite", "Google Maps API", "Weather API", "AI/ML"],
      type: "AI/ML",
      status: "Completed"
    },
    {
      title: "ARC Barcode",
      subtitle: "Product Barcode Generation System",
      date: "August 2025",
      description: "Developed a C# WinForms application for generating product barcodes, improving efficiency in internal product tracking workflows.",
      achievements: [
        "Enabled fast and accurate barcode creation for product labeling",
        "Improved efficiency in internal product tracking workflows",
        "Streamlined barcode creation workflows to improve accuracy and speed"
      ],
      technologies: ["C#", "WinForms"],
      type: "Desktop App",
      status: "Completed"
    },
    {
      title: "Zoo Entry Management System",
      subtitle: "Visitor & Ticketing Management Platform",
      date: "December 2025",
      description: "Built a comprehensive visitor and ticketing management system for zoo operations with seamless frontend-backend integration.",
      achievements: [
        "Managed visitor entry, animal details, and ticketing workflows",
        "Created APIs in ASP.NET C# with MySQL backend",
        "Enabled seamless frontend-backend experience through API integrations",
        "Implemented visitor and ticketing management system for zoo operations"
      ],
      technologies: ["ASP.NET", "C#", "MySQL", "React.js"],
      type: "Full Stack",
      status: "In Progress"
    }
  ];

  const getStatusColor = (status: string) => {
    return status === "Completed" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800";
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Full Stack": return "bg-primary/10 text-primary";
      case "AI/ML": return "bg-accent/10 text-accent";
      case "Desktop App": return "bg-muted-foreground/10 text-muted-foreground";
      default: return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <section id="projects" className="py-section bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of innovative solutions spanning full-stack development, AI/ML applications, 
            and desktop software, demonstrating versatility across different platforms and technologies.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="shadow-card border-border/50 hover:shadow-lg transition-all duration-300 group h-full">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex-1">
                    <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300 mb-2">
                      {project.title}
                    </CardTitle>
                    <p className="text-accent font-medium text-sm mb-3">{project.subtitle}</p>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {project.date}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className={getTypeColor(project.type)}>
                    {project.type}
                  </Badge>
                  <Badge className={getStatusColor(project.status)}>
                    {project.status}
                  </Badge>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>

              <CardContent className="pt-0">
                {/* Key Achievements */}
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3 text-sm">Key Features & Achievements</h4>
                  <div className="space-y-2">
                    {project.achievements.slice(0, 3).map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-start gap-2">
                        <ArrowRight className="w-3 h-3 text-accent mt-1 flex-shrink-0" />
                        <p className="text-muted-foreground text-xs leading-relaxed">
                          {achievement}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3 text-sm">Technologies</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="outline" 
                        className="text-xs bg-background hover:bg-muted/50 transition-colors duration-200"
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
    </section>
  );
};

export default Projects;