
import { X } from 'lucide-react';
import { useEffect } from 'react';

type ProjectModalProps = {
  project: {
    title: string;
    description: string;
    image: string;
    imageStyle?: string;
    tags: string[];
    url: string;
    features?: string[];
  } | null;
  onClose: () => void;
};

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  // Close modal when clicking outside or pressing escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  if (!project) return null;

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={handleOutsideClick}
    >
      <div className="bg-white rounded-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto animate-scale-in">
        <div className="sticky top-0 bg-white p-4 border-b border-gray-200 flex justify-between items-center">
          <h3 className="text-xl font-bold">{project.title}</h3>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-full">
            <X size={20} />
          </button>
        </div>
        
        <div className="p-6">
          <div className="h-72 overflow-hidden mb-6 flex items-center justify-center">
            <img 
              src={project.image} 
              alt={project.title}
              className={project.imageStyle || "w-full h-full object-cover rounded-md"}
            />
          </div>
          
          <div className="mb-6">
            <p className="text-gray-700">{project.description}</p>
          </div>
          
          {project.features && project.features.length > 0 && (
            <div className="mb-6">
              <h4 className="font-bold mb-3">Key Features</h4>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 text-black">•</span>
                    <span dangerouslySetInnerHTML={{ __html: feature }} />
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          <div className="mb-6">
            <h4 className="font-medium mb-2">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 bg-gray-100 text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center">
            <a 
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
