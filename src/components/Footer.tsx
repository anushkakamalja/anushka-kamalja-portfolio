
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold">
              <span className="text-white">Anushka Kamalja</span>
            </h3>
            <p className="mt-2 text-gray-400">Data Scientist & AI Engineer</p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://github.com/anushkakamalja"
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white bg-opacity-10 p-2 rounded-full hover:bg-opacity-20 transition-all"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/anushka-kamalja/"
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white bg-opacity-10 p-2 rounded-full hover:bg-opacity-20 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:anushkak@uw.edu"
              className="bg-white bg-opacity-10 p-2 rounded-full hover:bg-opacity-20 transition-all"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <hr className="my-8 border-gray-700" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © {currentYear} Portfolio. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm text-gray-400">
              <li>
                <a href="#home" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
