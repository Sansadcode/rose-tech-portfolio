
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Portfolio from "@/components/Portfolio";
import Certifications from "@/components/Certifications";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Certifications />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
