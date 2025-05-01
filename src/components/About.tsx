
import { Button } from "@/components/ui/button";

const About = () => {
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

  return (
    <section id="about" className="section-container bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {highlights.map((highlight, index) => (
            <div 
              key={index} 
              className="highlight-card flex flex-col items-center text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 p-3 rounded-full bg-rose-light/20">
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
          <div className="bg-gray-50 rounded-xl p-8 shadow-sm">
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              I'm an IT professional with expertise in IT support, cloud platforms, DevOps, and user assistance. 
              I enjoy solving problems, learning new technologies, and delivering reliable technical solutions.
            </p>
            
            <p className="text-gray-600 mb-8">
              Mother of two, creative at heart, and always learning something new.
            </p>

            <div className="flex justify-center">
              <Button className="bg-rose hover:bg-rose/90">
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
