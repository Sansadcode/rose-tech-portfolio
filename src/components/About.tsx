
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.2 });
    
    const section = document.getElementById("about");
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const highlights = [
    {
      title: "7+ years",
      description: "IT Helpdesk & Software Admin",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-rose">
          <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path>
          <path d="M3 6v12c0 1.1.9 2 2 2h16v-5"></path>
          <path d="M16 16h6"></path>
          <path d="M19 13v6"></path>
        </svg>
      ),
    },
    {
      title: "Certified",
      description: "AWS, Python & Microsoft Azure",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-rose">
          <path d="m9 10.6 5.4 5.4"></path>
          <path d="m19 4-6 6"></path>
          <path d="M12 15v5"></path>
          <path d="M5 12H2"></path>
          <path d="M2 9V6a2 2 0 0 1 2-2h3"></path>
          <path d="M3 16v3a2 2 0 0 0 2 2h3"></path>
          <path d="M22 12h-3"></path>
          <path d="M19 9V6a2 2 0 0 0-2-2h-3"></path>
          <path d="M18 16v3a2 2 0 0 1-2 2h-3"></path>
        </svg>
      ),
    },
    {
      title: "Tech Skills",
      description: "Git, Docker, Jenkins, Python",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-rose">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
        </svg>
      ),
    },
  ];

  const staggerDelay = 0.1;

  return (
    <section id="about" className="section-container bg-white relative overflow-hidden">
      {/* Modern background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-rose-light/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-rose-lighter/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {highlights.map((highlight, index) => (
            <div 
              key={index} 
              className={`highlight-card flex flex-col items-center text-center transition-all duration-500 transform ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * staggerDelay + 0.1}s` }}
            >
              <div className="mb-4 p-3 rounded-full bg-rose-light/20 transition-all duration-300 hover:bg-rose-light/40">
                {highlight.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {highlight.title}
              </h3>
              <p className="text-gray-600">{highlight.description}</p>
            </div>
          ))}
        </div>

        <div className="prose max-w-none">
          <div className="bg-gradient-to-r from-gray-50 to-rose-light/5 rounded-xl p-8 shadow-sm border border-rose-light/10">
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              I'm an IT professional with expertise in IT support, cloud platforms, DevOps, and user assistance. 
              I enjoy solving problems, learning new technologies, and delivering reliable technical solutions.
            </p>
            
            <p className="text-gray-600 mb-8 italic">
              "Mother of two, creative at heart, and always learning something new."
            </p>

            <div className="flex justify-center">
              <Button className="bg-rose hover:bg-rose/90 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                Download Resume
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
