import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Calendar } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-section bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Passionate Computer Science Engineering student with hands-on experience in full-stack development, 
            AI/ML, and modern web technologies. Currently pursuing my Bachelor's degree with a strong academic record.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Personal Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Personal Information
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Location</p>
                  <p className="text-muted-foreground">Puttur, Karnataka, India 574259</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Phone</p>
                  <p className="text-muted-foreground">+91-9480912497</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <p className="text-muted-foreground">akshayrenjala1025@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Expected Graduation</p>
                  <p className="text-muted-foreground">2025</p>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Key Highlights
            </h3>

            <div className="grid gap-6">
              <Card className="shadow-card border-border/50 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Badge variant="secondary" className="bg-accent/10 text-accent">
                      Academic
                    </Badge>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Strong Academic Performance</h4>
                      <p className="text-muted-foreground text-sm">
                        Maintaining a CGPA of 7.69 in Computer Science Engineering with consistent performance 
                        throughout academic career.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card border-border/50 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      Experience
                    </Badge>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Professional Internships</h4>
                      <p className="text-muted-foreground text-sm">
                        Completed internships at ZByte Technologies and Rooman Technologies, 
                        gaining hands-on experience in full-stack development and AI/ML.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card border-border/50 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Badge variant="secondary" className="bg-accent/10 text-accent">
                      Innovation
                    </Badge>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Project Portfolio</h4>
                      <p className="text-muted-foreground text-sm">
                        Developed multiple full-stack applications including freight management systems, 
                        AI-powered solutions, and web applications using modern technologies.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;