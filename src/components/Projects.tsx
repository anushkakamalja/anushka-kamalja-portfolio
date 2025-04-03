
import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import ProjectModal from './ProjectModal';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  
  const projects = [
    {
      id: 1,
      title: "Healthcare AI Assistant Using Retrieval-Augmented Generation (RAG)",
      description: "Developed an AI-powered healthcare assistant aimed at improving patient care and providing insights to medical professionals. This project leverages AI-driven recommendations to assist in preliminary diagnoses, patient education, and decision-making support for healthcare providers.",
      category: "ai",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      tags: ["AI", "NLP", "Deep Learning", "Healthcare AI"],
      url: "https://www.linkedin.com/posts/anushka-kamalja_healthcare-ai-assistant-activity-7275187251305660416-tVoq/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC0ga6gB-qxGn71NmQHlfskwVgvuocH1NMM",
      features: [
        "<strong>AI-powered diagnostic insights</strong> – Utilizes machine learning models to analyze patient symptoms and suggest potential conditions.",
        "<strong>Personalized recommendations</strong> – Provides tailored health advice based on patient history and symptoms.",
        "<strong>User-friendly interface</strong> – Designed for both patients and healthcare professionals, ensuring accessibility.",
        "<strong>Data-driven decision-making</strong> – Helps medical staff by analyzing large datasets to extract meaningful insights."
      ]
    },
    {
      id: 2,
      title: "Text Summarization using Transformers AI model",
      description: "Implemented a transformer-based NLP model to generate concise and coherent summaries of long-form text. This project explores state-of-the-art text summarization techniques, improving information retrieval efficiency across various domains, such as research, news, and legal documents.",
      category: "ai",
      image: "/lovable-uploads/2fd9fdf0-bb23-42b1-811d-b9de80fe2b51.png",
      imageStyle: "w-full h-full object-contain p-4",
      tags: ["Python", "Transformers", "WikiSum dataset", "NLP"],
      url: "https://docs.google.com/presentation/d/1t9ns4WIiqrViaHAgPsLPnXQ9kvZU3t4sIiDdCTAYfUU/edit#slide=id.g271bd7a407e_2_8",
      features: [
        "<strong>Leverages Transformers</strong> – Utilizes pre-trained transformer models such as BERT or T5 for high-quality text summarization.",
        "<strong>Extractive & Abstractive Summarization</strong> – Extracts key sentences or generates entirely new summaries while maintaining semantic meaning.",
        "<strong>Improved Efficiency</strong> – Helps users process large text documents quickly and efficiently."
      ]
    },
    {
      id: 3,
      title: "Essay Scoring System using Universal Sentence Encoder",
      description: "Developed an AI-powered automated essay scoring system that evaluates and assigns grades to student essays. The project uses Universal Sentence Encoder (USE) to assess the quality, coherence, and relevance of written text, enabling fair and efficient grading.",
      category: "ai",
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80",
      tags: ["NLP", "TensorFlow", "Deep Learning", "Essay Scoring"],
      url: "https://colab.research.google.com/drive/1SdPVhiR9xM-tQ9kqKlAYPwFom2EQLjnb?usp=sharing",
      features: [
        "<strong>Semantic similarity scoring</strong> – Compares essays against reference answers to measure textual quality.",
        "<strong>Automated grading system</strong> – Assigns scores based on linguistic and semantic analysis.",
        "<strong>Scalable evaluation</strong> – Capable of handling a large number of essays efficiently."
      ]
    },
    {
      id: 4,
      title: "Spam Email Classification using BERT",
      description: "Built an AI model for spam email classification using Bidirectional Encoder Representations from Transformers (BERT) to distinguish between spam and legitimate emails. This project enhances cybersecurity by preventing phishing attacks and reducing email clutter.",
      category: "ai",
      image: "/lovable-uploads/c27fb69e-4871-42de-af18-5b242fe777c7.png", 
      imageStyle: "w-full h-full object-contain p-2", // Added padding for better display
      tags: ["NLP", "BERT", "Cybersecurity", "Spam Classification"],
      url: "https://github.com/anushkakamalja/Spam_Email_Classification-BERT",
      features: [
        "<strong>Fine-tuned BERT model</strong> – Uses pre-trained BERT embeddings to understand email content contextually.",
        "<strong>High accuracy</strong> – Achieves a significant improvement over traditional rule-based spam filters.",
        "<strong>Real-time email filtering</strong> – Can be deployed into enterprise email systems for live spam detection."
      ]
    },
    {
      id: 5,
      title: "EdCloud: Hybrid Cloud Solution for UW Systems",
      description: "Designed and implemented a hybrid cloud computing solution for the University of Washington's IT infrastructure, improving scalability, security, and accessibility of educational resources.",
      category: "cloud",
      image: "/lovable-uploads/882f2e1e-06be-4d4e-9168-c94af9ca6cd4.png",
      tags: ["Azure", "Cloud Computing", "Hybrid Cloud", "Scalability"],
      url: "https://docs.google.com/presentation/d/1kVNL4Vi3nZ4J8JKFBSh6gvCnezKydnjw3sZ_yoq6Lpk/edit?usp=sharing",
      imageStyle: "w-full h-full object-contain p-4",
      features: [
        "<strong>Hybrid cloud architecture</strong> – Combines on-premise and cloud-based storage for optimal performance.",
        "<strong>Secure data management</strong> – Implements role-based access control (RBAC) and encryption.",
        "<strong>Cost-efficient scalability</strong> – Adapts to varying computational demands with cloud elasticity."
      ]
    },
    {
      id: 6,
      title: "Netflix Data Analysis and Visualization (Tableau)",
      description: "Performed a data-driven analysis of Netflix content using Tableau to uncover trends in content distribution, genre popularity, and user engagement over time.",
      category: "dataviz",
      image: "/lovable-uploads/074841c4-3a82-4522-b5fa-e83e75d006b3.png",
      imageStyle: "w-full h-full object-contain",
      tags: ["Tableau", "Data Visualization", "Netflix Data", "Dashboard"],
      url: "https://public.tableau.com/app/profile/anushka.ramesh.kamalja/viz/Netflix_17125307410260/Netflix",
      features: [
        "<strong>Genre & regional trends</strong> – Analyzed content distribution by region and genre.",
        "<strong>User behavior insights</strong> – Examined factors influencing viewership and engagement.",
        "<strong>Interactive Tableau dashboard</strong> – Enables dynamic filtering and exploratory data analysis."
      ]
    },
    {
      id: 7,
      title: "Organizational Network Analysis (Polinode)",
      description: "Conducted Organizational Network Analysis (ONA) using Polinode, mapping team dynamics to improve collaboration and communication structures within organizations.",
      category: "bonus",
      image: "/lovable-uploads/8afe0aa8-682f-4620-8077-b45b76b15885.png",
      tags: ["Network Analysis", "Polinode", "Business Operations", "Collaboration"],
      url: "https://www.polinode.com/?gad_source=1&gclid=CjwKCAjw-qi_BhBxEiwAkxvbkLjLOY7OoU-lt1aMpeCu6n4lC2btfQ1tp1LUPaLCKzinS3pp51oJOxoCV_cQAvD_BwE",
      imageStyle: "w-full h-full object-contain p-4",
      features: [
        "<strong>Graph-based network visualization</strong> – Shows relationships and collaboration patterns.",
        "<strong>Data-driven decision-making</strong> – Provides insights to optimize team structures.",
        "<strong>Enhanced workforce productivity</strong> – Identifies gaps in communication."
      ]
    },
    {
      id: 8,
      title: "Power BI Data Professional Survey Dashboard",
      description: "Built a Power BI dashboard analyzing industry trends for data professionals, including salary distributions, skill trends, and work-life balance insights.",
      category: "dataviz",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      tags: ["Power BI", "Data Visualization", "Survey Analysis", "Dashboard Design"],
      url: "https://www.linkedin.com/posts/anushka-kamalja_powerbi-datavisualization-dataanalytics-activity-7304687052523020288-3SX4?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC0ga6gB-qxGn71NmQHlfskwVgvuocH1NMM",
      features: [
        "<strong>Data cleaning with Power Query</strong> – Prepares raw survey data for analysis.",
        "<strong>Insightful visualizations</strong> – Showcases trends in salaries, skills, and career paths.",
        "<strong>Mobile-responsive dashboard</strong> – Ensures usability across devices."
      ]
    },
    {
      id: 9,
      title: "British Airways Airline Satisfaction Review",
      description: "Analyzed customer satisfaction trends for British Airways using Tableau, identifying key pain points and areas for improvement in airline services.",
      category: "dataviz",
      image: "/lovable-uploads/ea00667f-e97b-4b96-9be2-10382db5ae74.png",
      imageStyle: "w-full h-full object-contain",
      tags: ["Tableau", "Data Visualization", "Customer Insights", "Dashboard Design"],
      url: "https://public.tableau.com/app/profile/anushka.ramesh.kamalja/viz/FlightSatisfactionAnalysis/Story1",
      features: [
        "<strong>Yearly comparative analysis</strong> – Tracks customer sentiment across different years.",
        "<strong>Service quality evaluation</strong> – Assesses ratings for food, seating, and cleanliness.",
        "<strong>Impact of delays on satisfaction</strong> – Examines correlations between flight delays and customer dissatisfaction."
      ]
    }
  ];

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'ai', name: 'AI & Data Science' },
    { id: 'cloud', name: 'Cloud & Infrastructure' },
    { id: 'dataviz', name: 'Data Visualization & BI' },
    { id: 'bonus', name: 'Bonus Projects' }
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(project => project.category === filter);

  const openProjectModal = (project) => {
    setSelectedProject(project);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="mb-10 text-gray-700">
          A showcase of my recent design work, personal projects, and experiments.
        </p>
        
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {categories.map(category => (
            <button 
              key={category.id} 
              onClick={() => setFilter(category.id)} 
              className={`px-4 py-2 rounded-full transition-colors ${filter === category.id ? 'bg-black text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div 
              key={project.id} 
              className="rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 cursor-pointer" 
              onClick={() => openProjectModal(project)}
            >
              <div className="h-48 overflow-hidden flex items-center justify-center">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className={project.imageStyle || "w-full h-full object-cover"}
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tags.slice(0, 3).map((tag, index) => (
                    <span key={index} className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {selectedProject && <ProjectModal project={selectedProject} onClose={closeProjectModal} />}
    </section>
  );
};

export default Projects;
