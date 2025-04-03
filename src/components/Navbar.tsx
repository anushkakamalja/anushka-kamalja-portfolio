
import { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const menuItems = [
    { title: 'Home', href: '#home' },
    { title: 'About', href: '#about' },
    { title: 'Skills', href: '#skills' },
    { title: 'Experience', href: '#experience' },
    { title: 'Projects', href: '#projects' },
    { title: 'Publications', href: '#publications' },
    { title: 'Certifications', href: '#certifications' },
    { title: 'Contact', href: '#contact' },
  ];
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black shadow-md py-2' : 'bg-black py-4'
    }`}>
    
      <nav className="container flex items-center justify-between">
        <a href="#home" className="text-xl font-bold">
          <span className="text-white">AK</span>
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.title}>
                <a 
                  href={item.href}
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center space-x-4 ml-6">
            <a 
              href="https://docs.google.com/document/d/1HAjQIXugtEdcR0hw9XrVcXMPMdEUrPAlemFBw7uKpv4/edit?usp=sharing"
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-gray-200 hover:text-white transition-colors"
            >
              <FileText size={18} />
              <span>Resume</span>
            </a>
          </div>
        </div>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-black shadow-lg md:hidden">
            <ul className="flex flex-col py-4">
              {menuItems.map((item) => (
                <li key={item.title}>
                  <a 
                    href={item.href}
                    className="block px-6 py-3 text-gray-200 hover:bg-gray-700"
                    onClick={toggleMenu}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
              <li className="px-6 py-3 flex items-center justify-between">
                <a 
                  href="https://docs.google.com/document/d/1HAjQIXugtEdcR0hw9XrVcXMPMdEUrPAlemFBw7uKpv4/edit?usp=sharing"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 text-gray-200"
                  onClick={toggleMenu}
                >
                  <FileText size={18} />
                  <span>Resume</span>
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
