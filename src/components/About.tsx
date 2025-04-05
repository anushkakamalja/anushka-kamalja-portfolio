
import { Award, BookOpen, Briefcase } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container">
        <h2 className="section-title text-center">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-10">
          <div>
            <h3 className="text-2xl font-bold mb-6">
              Data Scientist & AI Engineer with a focus on Business Intelligence
            </h3>
            <p className="text-gray-700 mb-6">
              I am an AI & Data Science professional with expertise in machine learning, business intelligence, and cloud analytics. Currently pursuing an MSIM at the University of Washington, I specialize in data-driven decision-making, AI solutions, and scalable analytics.
            </p>
            <p className="text-gray-700 mb-6">
              With hands-on experience in predictive modeling, NLP, and cloud platforms, I've successfully delivered AI-powered solutions that drive business impact.
            </p>
            <p className="text-gray-700">
              I'm passionate about using AI to solve real-world problems and drive business growth. Let's connect if you're looking for a professional who can turn data into value.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:border-theme-yellow transition-all duration-300 flex flex-col items-center text-center">
              <Briefcase size={36} className="mb-4 text-gray-800" />
              <h4 className="text-4xl font-bold mb-2">1+</h4>
              <p className="text-gray-600">Years Experience</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:border-theme-yellow transition-all duration-300 flex flex-col items-center text-center">
              <Award size={36} className="mb-4 text-gray-800" />
              <h4 className="text-4xl font-bold mb-2">10+</h4>
              <p className="text-gray-600">Projects</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:border-theme-yellow transition-all duration-300 flex flex-col items-center text-center">
              <BookOpen size={36} className="mb-4 text-gray-800" />
              <h4 className="text-4xl font-bold mb-2">MSIM</h4>
              <p className="text-gray-600">UW Seattle</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
