
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Create mailto URL
      const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
      const mailtoUrl = `mailto:anushkak@uw.edu?subject=${subject}&body=${body}`;
      
      // Open the mail client
      window.open(mailtoUrl, '_blank');
      
      // Show success message
      toast({
        title: "Message sent!",
        description: "Your email client has been opened with the message details.",
        duration: 5000,
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Failed to open mail client",
        description: "Please contact directly at anushkak@uw.edu",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const contactInfo = [
    {
      icon: <Mail size={20} />,
      label: 'Email',
      value: 'anushkak@uw.edu'
    },
    {
      icon: <Phone size={20} />,
      label: 'Phone',
      value: '+1 (206) 123-4567'
    },
    {
      icon: <MapPin size={20} />,
      label: 'Location',
      value: 'Seattle, WA, United States'
    }
  ];
  
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <p className="mb-10 text-gray-700">
          Have a question or want to work together? Send me a message.
        </p>
        
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/3">
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="mr-4 bg-gray-100 p-3 rounded-full border border-gray-200 text-gray-800">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{item.label}</h3>
                    <p className="text-gray-600">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="md:w-2/3">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#fff192]"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#fff192]"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  rows={6}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#fff192]"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-black text-white py-3 px-6 rounded-md hover:bg-opacity-90 transition-colors font-medium flex items-center justify-center gap-2"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
