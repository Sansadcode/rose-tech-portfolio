
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.2 });
    
    const section = document.getElementById("blog");
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const categories = [
    { id: "all", name: "All Posts" },
    { id: "it-support", name: "IT Support Tips" },
    { id: "devops", name: "DevOps & Cloud Journey" },
    { id: "projects", name: "Project Diaries" },
    { id: "career", name: "Career Growth & Certifications" },
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Setting Up a CI/CD Pipeline with Jenkins and Docker",
      category: "DevOps & Cloud Journey",
      categoryId: "devops",
      date: "May 1, 2025",
      excerpt: "Learn how to create an efficient CI/CD pipeline using Jenkins and Docker to automate your deployment process.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "Common Windows Troubleshooting Techniques for IT Support",
      category: "IT Support Tips",
      categoryId: "it-support",
      date: "April 25, 2025",
      excerpt: "Practical steps to diagnose and resolve the most common Windows issues faced in enterprise environments.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
      readTime: "7 min read",
    },
    {
      id: 3,
      title: "My Journey to AWS Certification",
      category: "Career Growth & Certifications",
      categoryId: "career",
      date: "April 15, 2025",
      excerpt: "Personal insights and study tips for anyone looking to pursue AWS certification and advance their cloud skills.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      readTime: "4 min read",
    },
  ];

  const filteredPosts = activeCategory === "all" 
    ? blogPosts 
    : blogPosts.filter(post => post.categoryId === activeCategory);

  return (
    <section id="blog" className="section-container bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-full h-20 bg-gradient-to-b from-gray-50 to-transparent"></div>
      <div className="absolute -top-32 left-0 w-96 h-96 bg-rose-light/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-rose-lighter/15 rounded-full blur-3xl"></div>
      
      <h2 className="section-title">Blog</h2>
      <p className="section-subtitle">
        Insights, tutorials, and stories from my experience in the tech world
      </p>

      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`px-4 py-2 transition-all duration-300 rounded-full text-sm ${
              activeCategory === category.id 
              ? "bg-rose-light/20 text-rose font-medium scale-105"
              : "bg-gray-50 text-gray-700 hover:bg-rose-light/10 hover:text-rose"
            }`}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post, index) => (
          <Card 
            key={post.id} 
            className={`overflow-hidden border border-gray-100 hover:border-rose-light transition-all duration-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
            } group hover:shadow-lg`}
            style={{ transitionDelay: `${index * 0.1}s` }}
          >
            <div className="h-48 overflow-hidden relative">
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-rose/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4 z-10">
                <span className="text-white font-medium">{post.category}</span>
                <span className="text-white/80 text-sm">{post.readTime}</span>
              </div>
              
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <CardHeader className="pb-3">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-medium text-rose bg-rose-light/20 px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <span className="text-xs text-gray-500">{post.date}</span>
              </div>
              <CardTitle className="text-xl group-hover:text-rose transition-colors duration-300">{post.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-600">
              <p>{post.excerpt}</p>
            </CardContent>
            <CardFooter className="flex justify-between items-center pt-2">
              <Button variant="ghost" className="p-0 text-rose hover:text-rose/80 hover:bg-transparent group-hover:translate-x-1 transition-transform duration-300">
                Read more →
              </Button>
              <span className="text-xs text-gray-500">{post.readTime}</span>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Button variant="outline" className="border-rose text-rose hover:bg-rose hover:text-white transition-all duration-300">
          View All Posts
        </Button>
      </div>
    </section>
  );
};

export default Blog;
