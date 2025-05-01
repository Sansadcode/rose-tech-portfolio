
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Portfolio = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.2 });
    
    const section = document.getElementById("portfolio");
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const projects = [
    {
      id: 1,
      title: "CI/CD Pipeline Demo Application",
      description:
        "Web app demonstrating DevOps principles using automated deployment workflows.",
      tech: ["AWS EC2", "S3", "IAM", "Jenkins", "Docker", "Git", "Python", "HTML"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      github: "#",
      demo: "#",
      details:
        "This project showcases a complete CI/CD pipeline implementation for web applications. It includes automated testing, build processes, and deployment strategies using industry-standard tools and practices.",
    },
    {
      id: 2,
      title: "Gamified Kids Chore Tracker App",
      description:
        "Fun and simple web app to help kids track chores, earn points, and stay motivated.",
      tech: ["Python Flask", "HTML/CSS", "Chart.js"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      github: "#",
      demo: "#",
      details:
        "A responsive web application designed to make chore tracking fun for children. Features include customizable chore lists, point systems, rewards, and visual progress tracking to keep kids engaged and motivated.",
    },
  ];

  const toggleProjectDetails = (id: number) => {
    setActiveProject(activeProject === id ? null : id);
  };

  return (
    <section id="portfolio" className="section-container bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-40 -right-32 w-96 h-96 rounded-full bg-rose-lighter/10 blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-rose-light/10 blur-3xl"></div>
      
      {/* Decorative geometric shapes */}
      <div className="absolute top-20 left-10 w-6 h-6 border border-rose/30 rounded-full hidden md:block"></div>
      <div className="absolute bottom-40 right-20 w-3 h-3 bg-rose/20 rounded-full hidden md:block"></div>
      <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-rose/40 rounded-full hidden md:block"></div>
      
      <h2 className="section-title">My Projects</h2>
      <p className="section-subtitle">
        Featured work showcasing my technical skills and problem-solving abilities
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <Card 
            key={project.id}
            className={`overflow-hidden h-full transition-all duration-700 hover:shadow-xl border-2 hover:border-rose-light ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
            }`}
            style={{ transitionDelay: `${index * 0.2}s` }}
          >
            <div className="h-64 overflow-hidden relative group">
              {/* Project image with overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <h3 className="text-white text-xl font-bold">{project.title}</h3>
              </div>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            <CardHeader>
              <CardTitle className="text-2xl text-rose">{project.title}</CardTitle>
              <CardDescription className="text-base">{project.description}</CardDescription>
            </CardHeader>

            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <Badge key={tech} variant="outline" className="bg-rose-light/20 text-rose border-rose-light">
                    {tech}
                  </Badge>
                ))}
              </div>

              {activeProject === project.id && (
                <div 
                  className="text-gray-600 mt-4 animate-fade-in p-4 bg-gray-50 rounded-lg border-l-4 border-rose"
                >
                  {project.details}
                </div>
              )}
            </CardContent>

            <CardFooter className="flex justify-between">
              <Button
                variant="outline"
                className="border-rose text-rose hover:bg-rose hover:text-white transition-all duration-300"
                onClick={() => toggleProjectDetails(project.id)}
              >
                {activeProject === project.id ? "Hide Details" : "View Details"}
              </Button>
              <div className="flex gap-2">
                <Button variant="ghost" className="text-gray-600 hover:text-rose hover:bg-rose-light/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  GitHub
                </Button>
                <Button variant="ghost" className="text-gray-600 hover:text-rose hover:bg-rose-light/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polygon points="10 8 16 12 10 16 10 8"></polygon>
                  </svg>
                  Demo
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
