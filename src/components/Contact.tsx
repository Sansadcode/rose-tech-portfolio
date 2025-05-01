
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const { toast } = useToast();
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.2 });
    
    const section = document.getElementById("contact");
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="section-container bg-gray-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute -top-10 -right-10 w-72 h-72 bg-rose-light/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-rose-light/10 rounded-full blur-3xl"></div>
      
      <h2 className="section-title">Get In Touch</h2>
      <p className="section-subtitle">
        Have a question or want to work together? Feel free to reach out!
      </p>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <div 
          className={`bg-white p-8 rounded-lg shadow-lg border border-gray-100 transition-all duration-500 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}
        >
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Send Me a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="w-full focus:ring-rose focus:border-rose transition-shadow duration-300"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
                className="w-full focus:ring-rose focus:border-rose transition-shadow duration-300"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="How can I help you?"
                required
                className="w-full min-h-[150px] focus:ring-rose focus:border-rose transition-shadow duration-300"
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-rose hover:bg-rose/90 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : "Send Message"}
            </Button>
          </form>
        </div>

        <div 
          className={`flex flex-col justify-center transition-all duration-500 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
          style={{ transitionDelay: "0.2s" }}
        >
          <h3 className="text-xl font-semibold mb-6 text-gray-800">Connect With Me</h3>
          <div className="space-y-6">
            <div className="flex items-center group">
              <div className="w-12 h-12 rounded-full bg-rose-light/30 flex items-center justify-center mr-4 transition-all duration-300 group-hover:bg-rose/20 group-hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-rose" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">LinkedIn</h4>
                <a href="#" className="text-rose hover:text-rose/80 transition-colors duration-300">linkedin.com/in/sanobia-sadaf</a>
              </div>
            </div>
            <div className="flex items-center group">
              <div className="w-12 h-12 rounded-full bg-rose-light/30 flex items-center justify-center mr-4 transition-all duration-300 group-hover:bg-rose/20 group-hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-rose" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">GitHub</h4>
                <a href="#" className="text-rose hover:text-rose/80 transition-colors duration-300">github.com/sanobia-sadaf</a>
              </div>
            </div>
            <div className="flex items-center group">
              <div className="w-12 h-12 rounded-full bg-rose-light/30 flex items-center justify-center mr-4 transition-all duration-300 group-hover:bg-rose/20 group-hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-rose" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Email</h4>
                <a href="mailto:contact@sanobiasadaf.com" className="text-rose hover:text-rose/80 transition-colors duration-300">contact@sanobiasadaf.com</a>
              </div>
            </div>
          </div>
          <div className="mt-8 p-6 bg-rose/5 rounded-lg border border-rose-light/20">
            <p className="text-gray-600 italic text-center">
              "Let's connect and build something amazing together!"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
