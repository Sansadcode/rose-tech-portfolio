
import { useEffect, useState } from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <footer className="bg-gray-900 text-white py-12 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-rose/30 to-transparent"></div>
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-rose/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-rose/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-2xl font-semibold mb-4 text-rose-light">Sanobia Sadaf</h3>
            <p className="text-gray-400 mb-4">
              IT Support Specialist | DevOps Enthusiast | Cloud Practitioner
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-rose-light transition-colors duration-300 transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-rose-light transition-colors duration-300 transform hover:scale-110"
                aria-label="GitHub"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-rose-light transition-colors duration-300 transform hover:scale-110"
                aria-label="Email"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </a>
            </div>
          </div>

          <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.1s' }}>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {["About", "Skills", "Portfolio", "Certifications", "Blog", "Contact"].map((item, index) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-rose-light transition-colors duration-300 group flex items-center"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-rose-light mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.2s' }}>
            <h3 className="text-lg font-semibold mb-4 text-white">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {["AWS", "Azure", "Docker", "Git", "Jenkins", "Python", "HTML", "Support"].map((skill, index) => (
                <span
                  key={skill}
                  className="inline-block px-3 py-1.5 text-xs bg-gray-800 text-gray-300 rounded-full hover:bg-gray-700 hover:text-white transition-colors duration-300"
                  style={{ transitionDelay: `${0.3 + index * 0.05}s` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <p>&copy; {currentYear} Sanobia Sadaf. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-500 hover:text-rose-light transition-colors">Privacy Policy</a>
              <span className="hidden md:inline">|</span>
              <a href="#" className="text-gray-500 hover:text-rose-light transition-colors">Terms of Use</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
