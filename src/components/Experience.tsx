
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "AI Engineer (Capstone Project)",
      company: "Trimlite LLC",
      logo: "/lovable-uploads/40bf05c6-4c70-4b5f-ab65-ccbfd609e6df.png",
      logoSize: "w-16 h-16 scale-150", // Increased size with scaling
      period: "October 2024 - Present (6 months)",
      location: "United States",
      url: "https://trimlite.com/?srsltid=AfmBOooqJIgbFPkc3wTgAg30SNgYGWMcT1aE0n_T3z5bkeR4qQN7W1Hm",
      description: [
        "Conducting EDA and cleaning 90,000+ rows of sales and inventory data.",
        "Clustering and analyzing sales by product families to identify patterns.",
        "Developing time series forecasting models for monthly sales prediction.",
        "Leveraging machine learning and generative AI for demand forecasting.",
        "Optimizing inventory management to prevent stockouts and overstocking."
      ]
    },
    {
      title: "Business Analyst Intern",
      company: "University of Washington - Environmental Health & Safety (EH&S)",
      logo: "/lovable-uploads/6ccbf3c8-dc00-454f-82ad-b6cec948db15.png",
      logoSize: "w-16 h-16", // Customizable logo size
      period: "July 2024 - Present (9 months)",
      location: "Seattle, Washington, United States",
      url: "https://www.ehs.washington.edu/",
      description: [
        "Led migration of 5000+ records from legacy systems to Docfinity, reducing retrieval time by 50%.",
        "Designed and implemented ETL pipelines for seamless data migration, improving query performance.",
        "Developed Python-based workflows to extract and integrate metadata from 6+ university departments.",
        "Built SQL-based data models for document classification, enhancing search efficiency.",
        "Automated data validation scripts to ensure compliance with university data retention policies.",
        "Provided training on Docfinity system usage, increasing adoption and improving records management."
      ]
    },
    {
      title: "Data Analyst",
      company: "UW Foster School of Business",
      logo: "/lovable-uploads/3b5f9302-ec08-4785-a37c-84182babde4a.png",
      logoSize: "w-16 h-16", // Customizable logo size
      period: "June 2024 - September 2024 (4 months)",
      location: "Seattle, Washington, United States",
      url: "https://foster.uw.edu/",
      description: [
        "Optimized student admissions strategy through data analytics, increasing conversion rates by 40%.",
        "Designed and implemented Python ETL pipelines using Beautiful Soup to extract ranking data from 150+ university websites.",
        "Developed Tableau dashboards to visualize GRE/GMASS data, analyzing demographics, age distribution, and geographic trends.",
        "Crafted SQL queries to analyze 10,000+ student records, identifying program interests and engagement metrics.",
        "Evaluated Google Ads performance using Google Analytics metrics (CTR, website visits) to optimize marketing campaigns.",
        "Developed Google Looker Studio dashboards to monitor KPIs, empowering the marketing team to make data-driven decisions."
      ]
    },
    {
      title: "Graduate Teaching Assistant: Reader/Grader",
      company: "University of Washington Information School",
      logo: "/lovable-uploads/01589783-f9d8-4a38-95d2-a7ab7feb2101.png",
      logoSize: "w-20 h-16 scale-125", // Adjusted size with scaling
      logoPadding: "p-1", // Added padding to ensure logo stays within container
      period: "June 2024 - August 2024 (3 months)",
      location: "Seattle, Washington, United States",
      url: "https://ischool.uw.edu/",
      description: [
        "Efficiently graded assignments for IMT 543 Relational Database Systems course",
        "Supported student learning through SQL exercises covering topics from basic commands to advanced concepts",
        "Evaluated student projects involving the entire database development lifecycle",
        "Assisted students in resolving errors and clarifying doubts about database concepts"
      ]
    },
    {
      title: "Data Analyst",
      company: "Ciora Solutions | Salesforce Partner",
      logo: "/lovable-uploads/6a0f34e6-f18f-4dde-a756-d1f74c1206e9.png",
      logoSize: "w-16 h-16", // Customizable logo size
      period: "November 2022 - August 2023 (10 months)",
      location: "Michigan, United States",
      url: "https://ciora.com/",
      description: [
        "Conducted data cleaning and transformation on HR datasets, ensuring accuracy for workforce analytics.",
        "Assisted in employee records management and HR reporting.",
        "Supported HR data entry and compliance tracking for workforce planning."
      ]
    },
    {
      title: "Software Developer",
      company: "TechCiti Software Consulting Private Limited",
      logo: "/lovable-uploads/cc6c8a13-0b73-4c39-b7c0-c421e1a70bf8.png",
      logoSize: "w-16 h-16", // Customizable logo size
      period: "July 2021 - September 2021 (3 months)",
      location: "Bengaluru, Karnataka, India",
      url: "http://www.techcitisoftware.in/",
      description: [
        "Built a MERN-based placement platform for 500+ students, automating job applications and improving efficiency.",
        "Developed a Random Forest recommendation engine, boosting student-job match accuracy by 25% and increasing placements.",
        "Implemented role-based access control (RBAC), enhancing security and reducing job processing time by 20%.",
        "Optimized backend data pipelines and queries, ensuring efficient student-job matching and seamless ML model integration."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container">
        <h2 className="section-title">My Experience</h2>
        <p className="mb-12 text-gray-700">
          My professional journey and work experience.
        </p>
        
        <div className="relative">
          {/* Timeline center line */}
          <div className="absolute left-16 md:left-32 h-full w-1 bg-[#fff192]"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <a
                key={index}
                href={exp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="relative flex flex-row">
                  {/* Timeline bullet point */}
                  <div className="absolute left-16 md:left-32 top-8 transform -translate-x-1/2 w-4 h-4 rounded-full bg-black z-10"></div>
                  
                  {/* Content */}
                  <div className="ml-24 md:ml-48 w-full pr-4">
                    <div className="bg-white p-6 rounded-lg border border-gray-200 transition-all hover:border-gray-300 hover:shadow-md h-full">
                      <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                          <p className="text-gray-800 font-medium mb-3 hover:text-gray-600">
                            {exp.company}
                          </p>
                          
                          <div className="flex items-center text-gray-600 text-sm mb-2">
                            <Calendar size={16} className="mr-2" />
                            <span>{exp.period}</span>
                          </div>
                          
                          <div className="flex items-center text-gray-600 text-sm mb-4">
                            <MapPin size={16} className="mr-2" />
                            <span>{exp.location}</span>
                          </div>
                          
                          <ul className="space-y-2">
                            {exp.description.map((item, i) => (
                              <li key={i} className={i === 0 ? "italic list-none" : "list-disc ml-5"}>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="flex-shrink-0 flex items-center justify-center md:ml-4">
                          <div className={`p-4 bg-white rounded-lg border border-gray-200 flex items-center justify-center ${exp.logoPadding || ""}`}>
                            <img
                              src={exp.logo}
                              alt={exp.company}
                              className={`object-contain ${exp.logoSize || "w-full h-full"}`}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
