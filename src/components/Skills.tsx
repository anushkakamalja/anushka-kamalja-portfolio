
import React, { useEffect, useRef } from 'react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const Skills = () => {
  const professionalSkills = {
    "Data & Analytics": [
      { name: "Data Analysis", link: "https://en.wikipedia.org/wiki/Data_analysis" },
      { name: "Data Science", link: "https://en.wikipedia.org/wiki/Data_science" },
      { name: "Business Intelligence", link: "https://en.wikipedia.org/wiki/Business_intelligence" },
      { name: "ETL & Data Pipelines", link: "https://en.wikipedia.org/wiki/Extract,_transform,_load" },
      { name: "Dashboard Development", link: "https://en.wikipedia.org/wiki/Dashboard_(business)" },
      { name: "Cloud Data Warehousing", link: "https://en.wikipedia.org/wiki/Data_warehouse" },
      { name: "Query Optimization", link: "https://en.wikipedia.org/wiki/Query_optimization" },
    ],
    "AI & Machine Learning": [
      { name: "AI-driven Solutions", link: "https://en.wikipedia.org/wiki/Artificial_intelligence" },
      { name: "Machine Learning", link: "https://en.wikipedia.org/wiki/Machine_learning" },
      { name: "Deep Learning", link: "https://en.wikipedia.org/wiki/Deep_learning" },
      { name: "NLP", link: "https://en.wikipedia.org/wiki/Natural_language_processing" },
      { name: "Large Language Models", link: "https://en.wikipedia.org/wiki/Large_language_model" },
      { name: "Neural Networks", link: "https://en.wikipedia.org/wiki/Neural_network" },
    ],
    "Statistics & Modeling": [
      { name: "Statistical Modeling", link: "https://en.wikipedia.org/wiki/Statistical_model" },
      { name: "Predictive Analytics", link: "https://en.wikipedia.org/wiki/Predictive_analytics" },
      { name: "A/B Testing", link: "https://en.wikipedia.org/wiki/A/B_testing" },
      { name: "Predictive Modeling", link: "https://en.wikipedia.org/wiki/Predictive_modelling" },
      { name: "Data Mining", link: "https://en.wikipedia.org/wiki/Data_mining" },
      { name: "Feature Engineering", link: "https://en.wikipedia.org/wiki/Feature_engineering" },
      { name: "Model Optimization", link: "https://en.wikipedia.org/wiki/Hyperparameter_optimization" },
    ]
  };
  
  const technologies = [
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", url: "https://www.python.org/" },
    { 
      name: "SQL", 
      icon: "https://gimgs2.nohat.cc/thumb/f/640/sql-logo-illustration-microsoft-azure-sql-database-microsoft-sql-server-database-blue-text-logo-png--compngwingzoupl.jpg", 
      url: "https://www.mysql.com/", 
      className: "w-20 h-20" 
    },
    { name: "R", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg", url: "https://www.r-project.org/" },
    { 
      name: "PySpark", 
      icon: "https://codeinterview.io/landing-assets/img/lang-logos/pyspark-lang.png", 
      url: "https://spark.apache.org/docs/latest/api/python/", 
      className: "w-20 h-20" 
    },
    { 
      name: "Docker", 
      icon: "https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png", 
      url: "https://www.docker.com/", 
      className: "w-20 h-20" 
    },
    { 
      name: "Tableau", 
      icon: "https://b-new.be/wp-content/uploads/2020/07/TB.png", 
      url: "https://www.tableau.com/", 
      className: "w-20 h-20" 
    },
    { 
      name: "Looker", 
      icon: "https://images.seeklogo.com/logo-png/39/1/google-looker-logo-png_seeklogo-394597.png", 
      url: "https://looker.com/",
      className: "w-20 h-20" 
    },
    { 
      name: "Power BI", 
      icon: "/lovable-uploads/0d5fdabe-1133-4787-be14-0ac6f6f2bdec.png", 
      url: "https://powerbi.microsoft.com/" ,
      className: "w-20 h-20"
    },
    { 
      name: "Excel", 
      icon: "https://images.seeklogo.com/logo-png/26/1/excel-logo-png_seeklogo-266583.png", 
      url: "https://www.microsoft.com/en-us/microsoft-365/excel",
      className: "w-20 h-20" 
    },
    { name: "Google Analytics 4", icon: "https://www.gstatic.com/analytics-suite/header/suite/v2/ic_analytics.svg", url: "https://analytics.google.com/" },
    { 
      name: "AWS", 
      icon: "https://www.logo.wine/a/logo/Amazon_Web_Services/Amazon_Web_Services-Logo.wine.svg", 
      url: "https://aws.amazon.com/",
      className: "w-20 h-20" 
    },
    { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg", url: "https://azure.microsoft.com/" },
    { name: "GCP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg", url: "https://cloud.google.com/" },
    { name: "Snowflake", icon: "https://www.vectorlogo.zone/logos/snowflake/snowflake-icon.svg", url: "https://www.snowflake.com/" },
    { name: "Hugging Face", icon: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg", url: "https://huggingface.co/" }
  ];
  
  const skillsRef = useRef(null);
  const techRef = useRef(null);
  
  // Function to set equal heights
  useEffect(() => {
    const equalizeHeights = () => {
      if (skillsRef.current && techRef.current) {
        // Reset heights first
        skillsRef.current.style.height = 'auto';
        techRef.current.style.height = 'auto';
        
        // Get computed heights
        const skillsHeight = skillsRef.current.offsetHeight;
        const techHeight = techRef.current.offsetHeight;
        
        // Set both sections to the taller height
        const maxHeight = Math.max(skillsHeight, techHeight);
        skillsRef.current.style.height = `${maxHeight}px`;
        techRef.current.style.height = `${maxHeight}px`;
      }
    };
    
    // Initial equalization
    equalizeHeights();
    
    // Re-equalize on window resize
    window.addEventListener('resize', equalizeHeights);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', equalizeHeights);
    };
  }, []);
  
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <p className="mb-12 text-gray-700">
          Here are my professional skills and the technologies I work with.
        </p>
        
        <div className="flex flex-col md:flex-row gap-12">
          {/* Professional Skills - 55% width */}
          <div className="md:w-[55%]" ref={skillsRef}>
            <h3 className="text-xl font-semibold mb-6">Professional Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 h-full">
              {Object.entries(professionalSkills).map(([category, skills]) => (
                <div key={category} className="flex flex-col gap-3">
                  <h4 className="font-semibold text-sm text-gray-500 mb-2">{category}</h4>
                  {skills.map((skill, idx) => (
                    <a 
                      key={idx}
                      href={skill.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 border border-gray-200 rounded-md text-center hover:bg-black hover:text-white transition-all duration-300 text-sm md:text-base"
                    >
                      <span className="line-clamp-1">{skill.name}</span>
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </div>
          
          {/* Tools & Technologies - 45% width */}
          <div className="md:w-[45%]" ref={techRef}>
            <h3 className="text-xl font-semibold mb-6">Tools & Technologies</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {technologies.map((tech, index) => (
                <a
                  key={index}
                  href={tech.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center"
                >
                  <div className={`w-20 h-20 mb-2 hover:scale-110 transition-transform duration-300 border border-gray-200 rounded-md p-3 bg-white shadow-sm flex items-center justify-center ${tech.className || ''}`}>
                    <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
                  </div>
                  <span className="text-sm text-center line-clamp-1">{tech.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
