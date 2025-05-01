
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";

const Certifications = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.2 });
    
    const section = document.getElementById("certifications");
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const certifications = [
    {
      id: 1,
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2023",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
          <path d="m16 16-4-4-4 4" />
          <path d="M8 12h.01" />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Microsoft Azure Fundamentals",
      issuer: "Microsoft",
      date: "2022",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 8.7c1 .7 1.5 1.1 3 1.1s1-4.1 3-4.1 2 4.1 3 5.5 2.8 1.5 3 1.5M6 19h12" />
          <path d="M11 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Microsoft Azure AI Fundamentals",
      issuer: "Microsoft",
      date: "2023",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v4M12 16h.01" />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Microsoft Security, Compliance & Identity Fundamentals",
      issuer: "Microsoft",
      date: "2023",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      ),
    },
    {
      id: 5,
      title: "Certified Entry-Level Python Programmer",
      issuer: "Python Institute",
      date: "2022",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 9H7.5a2.5 2.5 0 0 1 0-5H12m0 0-3 6m3-6 3 6" />
          <path d="M12 19h4.5a2.5 2.5 0 0 0 0-5H12m0 0 3-6m-3 6-3-6" />
        </svg>
      ),
    },
  ];

  return (
    <section id="certifications" className="section-container bg-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-full h-16 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-rose-light/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-rose-lighter/15 rounded-full blur-3xl"></div>
      
      <h2 className="section-title">My Certifications</h2>
      <p className="section-subtitle">
        Professional certifications validating my technical knowledge and skills
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <Card 
            key={cert.id}
            className={`bg-white border border-gray-100 overflow-hidden transition-all duration-500 hover:shadow-md hover:border-rose-light ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
            } group`}
            style={{ transitionDelay: `${index * 0.1}s` }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-rose/5 to-rose-light/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <CardHeader className="pb-2 relative z-10">
              <div className="flex items-start">
                <div className="mr-4 mt-1 text-rose relative transition-transform duration-300 group-hover:scale-110">
                  <div className="absolute inset-0 bg-rose/5 rounded-full blur-md transform scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative">{cert.icon}</div>
                </div>
                <div>
                  <CardTitle className="text-lg font-semibold">{cert.title}</CardTitle>
                  <CardDescription>
                    {cert.issuer} • {cert.date}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="flex justify-end">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-rose-light/30 text-rose">
                  Verified
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* Certificate counter animation */}
      <div className="mt-16 flex flex-col items-center">
        <div className="text-4xl font-bold text-rose mb-2">
          {isVisible ? "5+" : "0"}
        </div>
        <p className="text-gray-600">Professional Certifications</p>
      </div>
    </section>
  );
};

export default Certifications;
