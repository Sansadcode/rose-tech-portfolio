
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Setting Up a CI/CD Pipeline with Jenkins and Docker",
      category: "DevOps & Cloud Journey",
      date: "May 1, 2025",
      excerpt: "Learn how to create an efficient CI/CD pipeline using Jenkins and Docker to automate your deployment process.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "Common Windows Troubleshooting Techniques for IT Support",
      category: "IT Support Tips",
      date: "April 25, 2025",
      excerpt: "Practical steps to diagnose and resolve the most common Windows issues faced in enterprise environments.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
      readTime: "7 min read",
    },
    {
      id: 3,
      title: "My Journey to AWS Certification",
      category: "Career Growth & Certifications",
      date: "April 15, 2025",
      excerpt: "Personal insights and study tips for anyone looking to pursue AWS certification and advance their cloud skills.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      readTime: "4 min read",
    },
  ];

  const categories = ["IT Support Tips", "DevOps & Cloud Journey", "Project Diaries", "Career Growth & Certifications"];

  return (
    <section id="blog" className="section-container bg-white">
      <h2 className="section-title">Blog</h2>
      <p className="section-subtitle">
        Insights, tutorials, and stories from my experience in the tech world
      </p>

      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {categories.map((category, index) => (
          <span
            key={index}
            className="px-4 py-2 bg-gray-50 text-gray-700 rounded-full text-sm hover:bg-rose-light/20 hover:text-rose transition-colors cursor-pointer"
          >
            {category}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <Card 
            key={post.id} 
            className="overflow-hidden border border-gray-100 hover:border-rose-light transition-all duration-300 animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="h-48 overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <CardHeader className="pb-3">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-medium text-rose bg-rose-light/20 px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <span className="text-xs text-gray-500">{post.date}</span>
              </div>
              <CardTitle className="text-xl">{post.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-600">
              <p>{post.excerpt}</p>
            </CardContent>
            <CardFooter className="flex justify-between items-center pt-2">
              <Button variant="ghost" className="p-0 text-rose hover:text-rose/80 hover:bg-transparent">
                Read more →
              </Button>
              <span className="text-xs text-gray-500">{post.readTime}</span>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Button variant="outline" className="border-rose text-rose hover:bg-rose hover:text-white">
          View All Posts
        </Button>
      </div>
    </section>
  );
};

export default Blog;
