import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";

interface HeroProps {
  onContactClick: () => void;
}

const Hero = ({ onContactClick }: HeroProps) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-hero-gradient relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-slide-up">
            <Badge variant="outline" className="mb-6 bg-background/20 text-primary-foreground border-primary-foreground/20">
              Software Engineer
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
              AKSHAY R
            </h1>
            
            <h2 className="text-xl md:text-2xl text-foreground mb-6 font-medium">
              Full Stack Developer & AI/ML Enthusiast
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Computer Science Engineering student passionate about building innovative web applications 
              and AI solutions. Experienced in full-stack development with React, ASP.NET, and Python.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                onClick={onContactClick}
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <a href="https://www.linkedin.com/in/akshay-r-ba8729249/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                className="text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <a href="https://github.com/akshayr7173" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                </a>
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                className="text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <a href="mailto:akshayrenjala1025@gmail.com">
                  <Mail className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden shadow-hero animate-float">
                <img
                  src="/lovable-uploads/9e517d61-e162-47f7-93b4-39c5f9301ce7.png"
                  alt="Akshay R - Professional Portrait"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent rounded-full opacity-80 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary-foreground rounded-full opacity-60 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-primary-foreground/70" />
        </div>
      </div>
    </section>
  );
};

export default Hero;