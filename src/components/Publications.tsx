
import React from 'react';
import { FileText, ExternalLink } from 'lucide-react';

const Publications = () => {
  const publications = [
    {
      title: "Decision system for bone disease diagnosis using crisp rule set theory",
      url: "https://www.degruyter.com/document/doi/10.1515/9783110781663-006/html",
      description: "This research paper presents a novel approach to bone disease diagnosis using crisp rule set theory, improving diagnostic accuracy and efficiency in clinical settings.",
      year: "2024",
      publisher: "De Gruyter",
      icon: "https://publishingperspectives.com/wp-content/uploads/2023/01/De-Gruyter-logo-new-lined-ftw.jpg",
      keywords: [
        "AI in healthcare",
        "Medical image analysis",
        "Predictive analytics",
        "Deep learning applications",
        "Clinical decision support"
      ]
    },
    {
      title: "A comprehensive assessment of artificial intelligence applications for cancer diagnosis",
      url: "https://link.springer.com/article/10.1007/s10462-024-10783-6",
      description: "A systematic review of AI applications in cancer diagnosis, evaluating effectiveness, limitations, and future directions across various cancer types and diagnostic techniques.",
      year: "2024",
      publisher: "Springer",
      icon: "https://lebaneselibraryassociation.org/wp-content/uploads/2021/05/springer-logo_image-LLA-1.png",
      keywords: [
        "AI in cancer diagnosis",
        "Machine learning in oncology",
        "Deep learning for medical imaging",
        "Neural networks in healthcare",
        "Cancer detection technologies"
      ]
    }
  ];

  return (
    <section id="publications" className="py-20 bg-white">
      <div className="container">
        <h2 className="section-title">Research Publications</h2>
        <p className="mb-12 text-gray-700">
          My contributions to academic research and scientific literature.
        </p>

        <div className="space-y-8">
          {publications.map((pub, index) => (
            <a 
              key={index}
              href={pub.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="bg-white p-6 border border-gray-200 rounded-lg transition-all hover:border-gray-300 hover:shadow-md">
                <div className="flex items-start gap-4">
                  <div className="hidden sm:block flex-shrink-0">
                    <div className="w-16 h-16 flex items-center justify-center">
                      <img src={pub.icon} alt={pub.publisher} className="w-full h-full object-contain" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col gap-1">
                      <h3 className="text-xl font-semibold">{pub.title}</h3>
                      <p className="text-gray-600 italic mb-2">
                        {pub.publisher}, {pub.year}
                      </p>
                    </div>
                    <p className="text-gray-700 mb-4">{pub.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {pub.keywords.map((keyword, idx) => (
                        <span key={idx} className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">
                          {keyword}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center text-black hover:text-gray-600">
                      <span className="mr-2">Read publication</span>
                      <ExternalLink size={16} />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
