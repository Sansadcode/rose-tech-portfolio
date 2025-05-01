
import { useState, useEffect } from "react";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.2 });
    
    const section = document.getElementById("skills");
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const categories = [
    { id: "all", name: "All Skills" },
    { id: "languages", name: "Languages/Scripting" },
    { id: "tools", name: "Tools/Tech" },
    { id: "cloud", name: "Cloud & OS" },
    { id: "support", name: "IT Support" },
  ];

  const skills = [
    { name: "HTML", category: "languages", icon: "html", level: 90 },
    { name: "Python", category: "languages", icon: "python", level: 85 },
    { name: "Bash", category: "languages", icon: "bash", level: 75 },
    { name: "Docker", category: "tools", icon: "docker", level: 80 },
    { name: "Git", category: "tools", icon: "git", level: 85 },
    { name: "Jenkins", category: "tools", icon: "jenkins", level: 75 },
    { name: "AWS (EC2, S3, IAM)", category: "cloud", icon: "aws", level: 85 },
    { name: "Azure", category: "cloud", icon: "azure", level: 80 },
    { name: "Windows", category: "cloud", icon: "windows", level: 95 },
    { name: "Ubuntu", category: "cloud", icon: "ubuntu", level: 85 },
    { name: "Troubleshooting", category: "support", icon: "troubleshooting", level: 95 },
    { name: "Remote Support", category: "support", icon: "remote-support", level: 90 },
    { name: "System Diagnosis", category: "support", icon: "system-diagnosis", level: 85 },
  ];

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  // Function to dynamically import the correct icon
  const getIconComponent = (iconName: string) => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {iconName === "html" && (
          <>
            <path d="M13 17l5-5-5-5M6 17l5-5-5-5" />
          </>
        )}
        {iconName === "python" && (
          <>
            <path d="M12 9H7.5a2.5 2.5 0 0 1 0-5H12m0 0-3 6m3-6 3 6" />
            <path d="M12 19h4.5a2.5 2.5 0 0 0 0-5H12m0 0 3-6m-3 6-3-6" />
          </>
        )}
        {iconName === "bash" && (
          <>
            <path d="m4 17 6-6-6-6" />
            <path d="M12 19h8" />
          </>
        )}
        {iconName === "docker" && (
          <>
            <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
            <line x1="16" y1="8" x2="2" y2="22" />
            <line x1="17.5" y1="15" x2="9" y2="15" />
          </>
        )}
        {iconName === "git" && (
          <>
            <circle cx="12" cy="13" r="3" />
            <line x1="12" y1="8" x2="12" y2="16" />
            <line x1="8" y1="12" x2="16" y2="12" />
          </>
        )}
        {iconName === "jenkins" && (
          <>
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
          </>
        )}
        {(iconName === "aws" || iconName === "azure" || iconName === "windows" || iconName === "ubuntu") && (
          <>
            <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
            <path d="m16 16-4-4-4 4" />
            <path d="M8 16v.01" />
          </>
        )}
        {(iconName === "troubleshooting" || iconName === "remote-support" || iconName === "system-diagnosis") && (
          <>
            <circle cx="12" cy="12" r="10" />
            <path d="M8 14s1.5 2 4 2 4-2 4-2" />
            <line x1="9" y1="9" x2="9.01" y2="9" />
            <line x1="15" y1="9" x2="15.01" y2="9" />
          </>
        )}
      </svg>
    );
  };

  return (
    <section id="skills" className="section-container bg-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-rose-light/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-rose-lighter/20 rounded-full blur-3xl"></div>
      
      <h2 className="section-title">My Skills</h2>
      <p className="section-subtitle">
        Technical expertise I've developed through years of practical experience
      </p>

      <div className="mb-10">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full transition-all duration-300 transform ${
                activeCategory === category.id
                  ? "bg-rose text-white shadow-md scale-105"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {filteredSkills.map((skill, index) => (
          <div
            key={`${skill.name}-${index}`}
            className={`highlight-card flex flex-col items-center p-4 transition-all duration-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            } hover:shadow-md hover:border-rose-light`}
            style={{ transitionDelay: `${(index % 10) * 0.05 + 0.1}s` }}
          >
            <div className="mb-3 text-rose relative">
              <div className="absolute inset-0 bg-rose/5 rounded-full blur-md transform scale-150"></div>
              <div className="relative">{getIconComponent(skill.icon)}</div>
            </div>
            <h3 className="font-medium text-center mb-2">{skill.name}</h3>
            
            {/* Skill level indicator */}
            <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
              <div 
                className="bg-gradient-to-r from-rose-light to-rose h-1.5 rounded-full transition-all duration-1000"
                style={{ 
                  width: isVisible ? `${skill.level}%` : "0%",
                  transitionDelay: `${(index % 10) * 0.05 + 0.3}s`
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
