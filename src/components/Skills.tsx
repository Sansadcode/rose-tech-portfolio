
import { useState } from "react";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", name: "All Skills" },
    { id: "languages", name: "Languages/Scripting" },
    { id: "tools", name: "Tools/Tech" },
    { id: "cloud", name: "Cloud & OS" },
    { id: "support", name: "IT Support" },
  ];

  const skills = [
    { name: "HTML", category: "languages", icon: "html" },
    { name: "Python", category: "languages", icon: "python" },
    { name: "Bash", category: "languages", icon: "bash" },
    { name: "Docker", category: "tools", icon: "docker" },
    { name: "Git", category: "tools", icon: "git" },
    { name: "Jenkins", category: "tools", icon: "jenkins" },
    { name: "AWS (EC2, S3, IAM)", category: "cloud", icon: "aws" },
    { name: "Azure", category: "cloud", icon: "azure" },
    { name: "Windows", category: "cloud", icon: "windows" },
    { name: "Ubuntu", category: "cloud", icon: "ubuntu" },
    { name: "Troubleshooting", category: "support", icon: "troubleshooting" },
    { name: "Remote Support", category: "support", icon: "remote-support" },
    { name: "System Diagnosis", category: "support", icon: "system-diagnosis" },
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
    <section id="skills" className="section-container bg-gray-50">
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
              className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                activeCategory === category.id
                  ? "bg-rose text-white"
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
            className="highlight-card flex flex-col items-center p-4 animate-fade-in"
            style={{ animationDelay: `${(index % 10) * 0.05}s` }}
          >
            <div className="mb-3 text-rose">{getIconComponent(skill.icon)}</div>
            <h3 className="font-medium text-center">{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
