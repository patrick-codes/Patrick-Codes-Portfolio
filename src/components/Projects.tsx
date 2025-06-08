import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Smartphone, Globe, Utensils, Scissors } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Salon Management App",
      description: "A comprehensive salon management solution with client scheduling, service management, and business analytics. Built for salon owners to streamline operations and enhance customer experience.",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=500&h=300&fit=crop",
      technologies: ["Flutter", "Dart", "Firebase", "Node.js"],
      liveUrl: "#",
      githubUrl: "https://github.com/patrick-codes/Salon-Management-App-Client",
      featured: true,
      icon: Scissors
    },
    {
      title: "Trotro Live - Transport App",
      description: "Real-time transportation tracking app for Ghana's trotro system. Features live vehicle tracking, route optimization, and passenger management for improved public transport experience.",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=500&h=300&fit=crop",
      technologies: ["Flutter", "Dart", "Google Maps API", "Firebase"],
      liveUrl: "#",
      githubUrl: "https://github.com/patrick-codes/trotro_live",
      featured: true,
      icon: Smartphone
    },
    {
      title: "Angular World Club Platform",
      description: "Social club platform designed to groom members through field work, research, and outreach programs. Features membership management, event coordination, and knowledge exchange systems.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500&h=300&fit=crop",
      technologies: ["SCSS", "JavaScript", "Node.js", "MongoDB"],
      liveUrl: "#",
      githubUrl: "https://github.com/patrick-codes/angularworld",
      featured: false,
      icon: Globe
    },
    {
      title: "Restaurant Management System",
      description: "Complete restaurant management solution for handling orders, inventory, reservations, and menu items. Streamlines restaurant operations with intuitive admin dashboard and customer interface.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&h=300&fit=crop",
      technologies: ["JavaScript", "Node.js", "MongoDB", "Express.js"],
      liveUrl: "#",
      githubUrl: "https://github.com/patrick-codes/CodeAlpha_Restaurant-Management-System",
      featured: false,
      icon: Utensils
    },
    {
      title: "Marketa E-Commerce Platform",
      description: "Full-featured e-commerce platform with product catalog, shopping cart, payment integration, and order management. Built for scalable online retail operations.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      technologies: ["Flutter", "Dart", "Firebase", "Stripe API"],
      liveUrl: "#",
      githubUrl: "https://github.com/patrick-codes/Marketa",
      featured: false,
      icon: Smartphone
    },
    {
      title: "Salon App Owner Dashboard",
      description: "Owner-focused dashboard for salon management with advanced analytics, staff management, and business insights. Companion app for comprehensive salon operations.",
      image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=500&h=300&fit=crop",
      technologies: ["Flutter", "Dart", "Firebase", "Analytics"],
      liveUrl: "#",
      githubUrl: "https://github.com/patrick-codes/salonapp_app_owner",
      featured: false,
      icon: Scissors
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Showcasing my expertise in mobile app development and full-stack solutions
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card key={project.title} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Badge className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                    Featured
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <IconComponent className="h-5 w-5 text-blue-600" />
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Other Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project) => {
              const IconComponent = project.icon;
              return (
                <Card key={project.title} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-32 object-cover"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <IconComponent className="h-4 w-4 text-blue-600" />
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-gray-600 line-clamp-2">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-2 pt-2">
                    <Button variant="outline" size="sm" className="flex-1 text-xs">
                      <ExternalLink className="h-3 w-3 mr-1" />
                      Demo
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 text-xs"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="h-3 w-3 mr-1" />
                      Code
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
            onClick={() => window.open('https://github.com/patrick-codes', '_blank')}
          >
            View All Projects on GitHub
            <Github className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
