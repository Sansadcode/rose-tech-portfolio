import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const isMobile = useIsMobile();
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  return <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-rose-light/20 to-rose-lighter/30 z-0" />
      
      {/* Abstract background shapes */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-gradient-to-br from-rose-light/30 to-rose/10 blur-3xl animate-pulse" style={{
        animationDuration: '8s'
      }} />
        <div className="absolute bottom-20 left-20 w-64 h-64 rounded-full bg-gradient-to-tr from-rose/20 to-rose-lighter/30 blur-3xl animate-pulse" style={{
        animationDuration: '12s'
      }} />
        <div className="absolute top-1/3 -left-10 w-72 h-72 rounded-full bg-gradient-to-r from-rose-lighter/20 to-transparent blur-2xl" />
      </div>

      {/* Decorative elements */}
      <div className="absolute hidden md:block right-10 top-32 w-24 h-24 border border-rose/10 rounded-full" />
      <div className="absolute hidden md:block left-20 bottom-40 w-16 h-16 border border-rose/20 rounded-full" />
      <div className="absolute hidden md:block left-1/4 top-32 w-3 h-3 bg-rose/30 rounded-full" />
      <div className="absolute hidden md:block right-1/3 bottom-48 w-2 h-2 bg-rose/20 rounded-full" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className={`space-y-6 md:space-y-8 max-w-xl transition-all duration-700 ease-out ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="space-y-3">
              <span className="px-4 py-1.5 rounded-full bg-rose-light/20 text-rose font-medium text-sm inline-block"></span>
              <h2 className="text-lg text-rose font-medium">Hello, I'm</h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-rose to-puce bg-clip-text text-transparent">
                Sanobia Sadaf
              </h1>
            </div>
            <h3 className="text-xl md:text-2xl font-medium text-gray-700">
              IT Support Specialist | DevOps Enthusiast | Cloud Practitioner
            </h3>
            <p className="text-gray-600 text-lg">
              Skilled in troubleshooting, cloud computing, and delivering reliable tech solutions.
            </p>
            <div className="pt-4">
              <Button className="bg-rose hover:bg-rose/90 text-white px-8 py-6 text-lg rounded-md shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1" onClick={() => {
              document.getElementById("portfolio")?.scrollIntoView({
                behavior: "smooth"
              });
            }}>
                Explore My Work
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className={`flex justify-center transition-all duration-700 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative">
              {/* Profile image container with modern styling */}
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl relative z-10">
                {/* Decorative rings */}
                <div className="absolute inset-0 rounded-full border-8 border-rose-light/30 animate-pulse" style={{
                animationDuration: '4s'
              }}></div>
                <div className="absolute -inset-1 rounded-full border-4 border-rose/20"></div>
                
                {/* Profile placeholder gradient */}
                <div className="w-full h-full bg-gradient-to-br from-rose to-rose-light flex items-center justify-center overflow-hidden">
                  <span className="text-white text-7xl font-bold">SS</span>
                </div>
              </div>
              
              {/* Tech icon badge */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-3 shadow-lg z-20">
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
              
              {/* Background elements for the profile */}
              <div className="absolute -z-10 -bottom-6 -right-6 w-64 h-64 md:w-72 md:h-72 rounded-full bg-rose-lighter/30 blur-md"></div>
              <div className="absolute -z-10 -top-6 -left-6 w-32 h-32 rounded-full bg-rose-light/20 blur-md"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center transition-opacity duration-700 delay-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <span className="text-sm text-gray-600 mb-2 font-medium">Scroll Down</span>
        <div className="animate-bounce bg-white p-2 w-10 h-10 ring-1 ring-rose/5 shadow-lg rounded-full flex items-center justify-center">
          <ChevronDown className="w-6 h-6 text-rose" />
        </div>
      </div>
    </section>;
};
export default Hero;