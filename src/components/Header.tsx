import { useState, useEffect } from "react";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"}`}>
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="text-rose font-poppins font-bold text-2xl" onClick={e => {
          e.preventDefault();
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }}>
        </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {["About", "Skills", "Portfolio", "Certifications", "Blog", "Contact"].map(item => <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="font-medium text-gray-600 hover:text-rose transition-colors link-underline">
                  {item}
                </a>
              </li>)}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-600" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle Menu">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            {isMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && <nav className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col py-4">
            {["About", "Skills", "Portfolio", "Certifications", "Blog", "Contact"].map(item => <li key={item} className="border-b border-gray-100 last:border-none">
                <a href={`#${item.toLowerCase()}`} className="block py-3 px-4 text-gray-600 hover:text-rose hover:bg-rose-light/10 transition-colors" onClick={() => setIsMenuOpen(false)}>
                  {item}
                </a>
              </li>)}
          </ul>
        </nav>}
    </header>;
};
export default Header;