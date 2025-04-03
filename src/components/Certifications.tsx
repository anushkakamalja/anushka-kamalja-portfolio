
import { ExternalLink } from 'lucide-react';
import { useState } from 'react';
import CertificationModal from './CertificationModal';

const Certifications = () => {
  const [selectedCertification, setSelectedCertification] = useState(null);
  
  const certifications = [
    {
      title: "Looker Studio for Beginners",
      organization: "LinkedIn",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
      date: "June 2024",
      skills: ["Google Data Studio"],
      url: "https://www.linkedin.com/learning/certificates/55edb7ad5bc9aa1a51df18200d9e1fd32f1fb93c1fa019dd9969d0422c955c19?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B0onYx4NcSqmG%2BX5xGWShwA%3D%3D"
    },
    {
      title: "Google Data Analytics",
      organization: "Coursera",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
      date: "May 2023",
      skills: ["Business Case Preparation", "Microsoft Excel", "Analytical Skills", "Problem Solving", "Google Sheets", "Spreadsheets", "SQL", "VLOOKUP", "Business Requirements"],
      url: "https://coursera.org/share/f9ef08adc23103792dcdc7c746ae045f"
    },
    {
      title: "30 Days of Google Cloud",
      organization: "Qwiklabs",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
      date: "October 2020",
      skills: ["Google Cloud", "Data Analytics"],
      url: "https://google.qwiklabs.com/public_profiles/1fb12462-b37d-4718-9ba4-164d4af2b17a"
    },
    {
      title: "Salesforce Administrator Bootcamp",
      organization: "Salesforce",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg",
      date: "",
      skills: ["Salesforce Administration"],
      url: "#"
    }
  ];
  
  const openCertificationModal = (cert) => {
    setSelectedCertification(cert);
  };
  
  const closeCertificationModal = () => {
    setSelectedCertification(null);
  };
  
  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        <p className="mb-12 text-gray-700">
          Professional certifications that validate my expertise and skills.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-all cursor-pointer"
              onClick={() => openCertificationModal(cert)}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full p-2 flex items-center justify-center">
                    <img 
                      src={cert.logo} 
                      alt={cert.organization} 
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold mb-1">{cert.title}</h3>
                <p className="text-gray-700 text-sm mb-2">{cert.organization}</p>
                {cert.date && <p className="text-gray-500 text-sm mb-4">{cert.date}</p>}
                
                <div className="flex flex-wrap gap-1 mt-3">
                  {cert.skills.slice(0, 2).map((skill, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full">
                      {skill}
                    </span>
                  ))}
                  {cert.skills.length > 2 && (
                    <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full">
                      +{cert.skills.length - 2}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {selectedCertification && (
        <CertificationModal certification={selectedCertification} onClose={closeCertificationModal} />
      )}
    </section>
  );
};

export default Certifications;
