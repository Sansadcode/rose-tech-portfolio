
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-rose-light/10 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-rose/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-rose-light/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className={`space-y-6 md:space-y-8 max-w-xl transition-all duration-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div>
              <h2 className="text-lg font-medium text-rose mb-3">Hello, I'm</h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
                Sanobia Sadaf
              </h1>
            </div>
            <h3 className="text-xl md:text-2xl font-medium text-gray-600">
              IT Support Specialist | DevOps Enthusiast | Cloud Practitioner
            </h3>
            <p className="text-gray-600 text-lg">
              Skilled in troubleshooting, cloud computing, and delivering reliable tech solutions.
            </p>
            <div className="pt-4">
              <Button 
                className="bg-rose hover:bg-rose/90 text-white px-8 py-6 text-lg rounded-md"
                onClick={() => {
                  document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Explore My Work
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className={`flex justify-center transition-all duration-700 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gray-200 overflow-hidden border-4 border-white shadow-xl">
                {/* Placeholder for profile image */}
                <div className="w-full h-full bg-gradient-to-br from-rose-light to-rose-lighter flex items-center justify-center">
                  <span className="text-rose text-7xl font-bold">SS</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-3 shadow-lg">
                <div className="bg-rose rounded-full w-12 h-12 flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                    <rect x="9" y="9" width="6" height="6"></rect>
                    <line x1="9" y1="1" x2="9" y2="4"></line>
                    <line x1="15" y1="1" x2="15" y2="4"></line>
                    <line x1="9" y1="20" x2="9" y2="23"></line>
                    <line x1="15" y1="20" x2="15" y2="23"></line>
                    <line x1="20" y1="9" x2="23" y2="9"></line>
                    <line x1="20" y1="14" x2="23" y2="14"></line>
                    <line x1="1" y1="9" x2="4" y2="9"></line>
                    <line x1="1" y1="14" x2="4" y2="14"></line>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-gray-500 mb-2">Scroll Down</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
