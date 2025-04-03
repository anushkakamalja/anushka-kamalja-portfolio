
import { X } from 'lucide-react';
import { useEffect } from 'react';

type CertificationModalProps = {
  certification: {
    title: string;
    organization: string;
    logo: string;
    date: string;
    skills: string[];
    url: string;
  } | null;
  onClose: () => void;
};

const CertificationModal = ({ certification, onClose }: CertificationModalProps) => {
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

  if (!certification) return null;

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
      <div className="bg-white rounded-lg w-full max-w-xl max-h-[90vh] overflow-y-auto animate-scale-in">
        <div className="sticky top-0 bg-white p-4 border-b border-gray-200 flex justify-between items-center">
          <h3 className="text-xl font-bold">{certification.title}</h3>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-full">
            <X size={20} />
          </button>
        </div>
        
        <div className="p-6">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-gray-100 rounded-full p-3 flex items-center justify-center">
              <img 
                src={certification.logo} 
                alt={certification.organization} 
                className="w-10 h-10 object-contain"
              />
            </div>
            <div>
              <h4 className="font-medium">{certification.organization}</h4>
              {certification.date && <p className="text-gray-500 text-sm">{certification.date}</p>}
            </div>
          </div>
          
          <div className="mb-6">
            <h4 className="font-medium mb-2">Skills</h4>
            <div className="flex flex-wrap gap-2">
              {certification.skills.map((skill, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 bg-gray-100 text-sm rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center">
            <a 
              href={certification.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors"
            >
              View Certification
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificationModal;
