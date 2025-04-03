
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-gray-600 mb-2">Hello, I'm</h3>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Anushka Kamalja
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 mb-8">
              Data Scientist | AI Enthusiast
            </h2>
            
            <p className="text-lg md:text-xl mb-8 text-gray-700">
              A data professional and AI enthusiast, MSIM grad student at the University of Washington, specializing in Data Science, Business Intelligence, and AI solutions.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <a 
                href="#projects" 
                className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                View My Work
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 border border-black rounded-lg hover:bg-black hover:text-white transition-colors"
              >
                Contact Info
              </a>
            </div>

            <div className="flex space-x-5">
              <a 
                href="https://www.linkedin.com/in/anushka-kamalja/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#0077B5] hover:opacity-80 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://github.com/anushkakamalja" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#181717] hover:opacity-80 transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a 
                href="mailto:anushkak@uw.edu" 
                className="text-[#EA4335] hover:opacity-80 transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
              <a 
                href="https://public.tableau.com/app/profile/anushka.ramesh.kamalja/vizzes" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#E97627] hover:opacity-80 transition-colors"
                aria-label="Tableau Public"
              >
                <svg viewBox="0 -2.5 256 256" width="24" height="24" fill="currentColor">
                  <g>
                    <polygon fill="#7099A6" points="123.929417 11.5932444 123.929417 23.2338083 103.108897 23.2338083 103.108897 30.8049067 123.929417 30.8049067 123.929417 53.9913956 132.068348 53.9913956 132.068348 30.8049067 153.409382 30.8049067 153.409382 23.2338083 132.068348 23.2338083 132.068348 0 123.929417 0"></polygon>
                    <polygon fill="#EB912C" points="55.8841702 41.1205283 55.8841702 58.0135416 24.369473 58.0135416 24.369473 68.6130794 55.8841702 68.6130794 55.8841702 102.919619 67.5720533 102.919619 67.5720533 68.6130794 99.5599441 68.6130794 99.5599441 58.0135416 67.5720533 58.0135416 67.5720533 24.2275149 55.8841702 24.2275149"></polygon>
                    <polygon fill="#59879B" points="187.952518 41.1205283 187.952518 58.0135416 156.437821 58.0135416 156.437821 69.1335924 187.952518 69.1335924 187.952518 102.919619 200.113595 102.919619 200.113595 69.1335924 231.628292 69.1335924 231.628292 58.0135416 200.113595 58.0135416 200.113595 24.2275149 187.952518 24.2275149"></polygon>
                    <polygon fill="#E8762C" points="120.900978 98.6608762 120.900978 117.588622 85.8373283 117.588622 85.8373283 131.689793 120.900978 131.689793 120.900978 169.545285 135.096787 169.545285 135.096787 131.689793 170.160437 131.689793 170.160437 117.588622 135.096787 117.588622 135.096787 79.7331302 120.900978 79.7331302"></polygon>
                    <polygon fill="#5B6591" points="224.009874 108.219388 224.009874 120.096549 202.668841 120.096549 202.668841 129.70238 224.009874 129.70238 224.009874 153.409382 234.656731 153.409382 234.656731 129.70238 255.997765 129.70238 255.997765 120.096549 234.656731 120.096549 234.656731 96.3895467 224.009874 96.3895467"></polygon>
                    <polygon fill="#7099A6" points="20.8205206 109.260414 20.8205206 120.617062 0 120.617062 0 128.661354 20.8205206 128.661354 20.8205206 151.374649 28.9594514 151.374649 28.9594514 128.661354 50.3004851 127.904244 50.3004851 120.617062 28.9594514 120.617062 28.9594514 97.9037663 20.8205206 97.9037663"></polygon>
                    <polygon fill="#C72035" points="55.8841702 162.731297 55.8841702 179.62431 24.369473 179.62431 24.369473 190.744361 55.8841702 190.744361 55.8841702 224.530387 68.045247 224.530387 68.045247 190.744361 99.5599441 190.744361 99.5599441 179.62431 68.045247 179.62431 68.045247 145.838283 55.8841702 145.838283"></polygon>
                    <polygon fill="#1F447E" points="187.952518 162.731297 187.952518 179.62431 156.437821 179.62431 156.437821 190.223848 187.952518 190.223848 187.952518 224.530387 200.113595 224.530387 200.113595 190.223848 231.628292 190.223848 231.628292 179.62431 200.113595 179.62431 200.113595 145.838283 187.952518 145.838283"></polygon>
                    <polygon fill="#5B6591" points="122.93571 205.649961 122.93571 217.479802 101.594677 217.479802 101.594677 227.085633 122.93571 227.085633 122.93571 250.792635 133.582568 250.792635 133.582568 227.085633 154.923601 227.085633 154.923601 217.479802 133.582568 217.479802 133.582568 193.7728 122.93571 193.7728"></polygon>
                  </g>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="flex justify-center items-center">
            <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-[#fced95]">
              <img 
                src="/lovable-uploads/52449439-80b8-4f87-80b7-cfb673526d3f.png" 
                alt="Anushka K" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
