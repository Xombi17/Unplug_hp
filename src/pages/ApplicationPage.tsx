import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Import types and constants from ApplicationForm
import { 
  FormData,
  HOUSES, 
  WAND_TYPES
} from '@/components/ApplicationForm';

const ApplicationPage = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    house: '',
    wandType: '',
    reason: ''
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.house) {
      newErrors.house = 'Please select your house';
    }
    
    if (!formData.wandType) {
      newErrors.wandType = 'Please select your wand type';
    }
    
    if (!formData.reason.trim()) {
      newErrors.reason = 'Please tell us why you want to attend';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsLoading(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsLoading(false);
        setIsSubmitted(true);
      }, 1500);
    }
  };

  const handleShareTicket = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'My Unplug: Hogwarts Edition Ticket',
          text: `I'm attending Unplug: Hogwarts Edition as a ${formData.house} student with my ${formData.wandType} wand! Join me for this magical retreat!`,
          url: window.location.href,
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      const shareText = `I'm attending Unplug: Hogwarts Edition as a ${formData.house} student with my ${formData.wandType} wand! Join me for this magical retreat!`;
      
      try {
        await navigator.clipboard.writeText(shareText);
        alert('Share text copied to clipboard!');
      } catch (error) {
        console.error('Failed to copy:', error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8" 
         style={{ backgroundImage: 'url(/images/harry2.jpg)' }}>
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
      
      <div className="w-full max-w-md z-10 space-y-8">
        <div>
          <Link to="/" className="inline-flex items-center text-sky-400 hover:text-sky-300 transition-colors mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Magical Home
          </Link>
          
          <h2 className="mt-6 text-center text-4xl font-harry-potter tracking-tight font-extrabold text-white">
            Your Magical Application
          </h2>
          <p className="mt-2 text-center text-sm text-gray-300">
            Fill out the form below to secure your spot at the most enchanting tech retreat
          </p>
        </div>
        
        {!isSubmitted ? (
          <form className="mt-8 space-y-6 backdrop-blur-lg bg-black/40 p-8 rounded-xl border border-sky-500/30 shadow-lg" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-200">
                  Full Name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  className={`mt-1 block w-full rounded-md bg-gray-900/80 border ${
                    errors.fullName ? 'border-red-500' : 'border-gray-600'
                  } shadow-sm py-2 px-3 text-gray-100 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent`}
                  value={formData.fullName}
                  onChange={handleChange}
                />
                {errors.fullName && (
                  <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-200">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className={`mt-1 block w-full rounded-md bg-gray-900/80 border ${
                    errors.email ? 'border-red-500' : 'border-gray-600'
                  } shadow-sm py-2 px-3 text-gray-100 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent`}
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="house" className="block text-sm font-medium text-gray-200">
                  Your Hogwarts House
                </label>
                <select
                  id="house"
                  name="house"
                  className={`mt-1 block w-full rounded-md bg-gray-900/80 border ${
                    errors.house ? 'border-red-500' : 'border-gray-600'
                  } shadow-sm py-2 px-3 text-gray-100 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent`}
                  value={formData.house}
                  onChange={handleChange}
                >
                  <option value="">Select your house</option>
                  {HOUSES.map((house) => (
                    <option key={house.id} value={house.id}>
                      {house.name}
                    </option>
                  ))}
                </select>
                {errors.house && (
                  <p className="mt-1 text-sm text-red-500">{errors.house}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="wandType" className="block text-sm font-medium text-gray-200">
                  Preferred Wand Type
                </label>
                <select
                  id="wandType"
                  name="wandType"
                  className={`mt-1 block w-full rounded-md bg-gray-900/80 border ${
                    errors.wandType ? 'border-red-500' : 'border-gray-600'
                  } shadow-sm py-2 px-3 text-gray-100 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent`}
                  value={formData.wandType}
                  onChange={handleChange}
                >
                  <option value="">Select your wand</option>
                  {WAND_TYPES.map((wandType) => (
                    <option key={wandType.id} value={wandType.id}>
                      {wandType.name}
                    </option>
                  ))}
                </select>
                {errors.wandType && (
                  <p className="mt-1 text-sm text-red-500">{errors.wandType}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="reason" className="block text-sm font-medium text-gray-200">
                  Why do you want to attend?
                </label>
                <textarea
                  id="reason"
                  name="reason"
                  rows={4}
                  className={`mt-1 block w-full rounded-md bg-gray-900/80 border ${
                    errors.reason ? 'border-red-500' : 'border-gray-600'
                  } shadow-sm py-2 px-3 text-gray-100 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent`}
                  value={formData.reason}
                  onChange={handleChange}
                ></textarea>
                {errors.reason && (
                  <p className="mt-1 text-sm text-red-500">{errors.reason}</p>
                )}
              </div>
            </div>
            
            <div>
              <Button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-sky-600 to-sky-400 hover:from-sky-500 hover:to-sky-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                disabled={isLoading}
              >
                {isLoading ? 'Casting Spell...' : 'Submit Application'}
              </Button>
            </div>
          </form>
        ) : (
          <div className="mt-8 backdrop-blur-lg bg-black/40 p-8 rounded-xl border border-sky-500/30 shadow-lg text-center">
            <div className="mb-6">
              <div className="mx-auto h-24 w-24 text-sky-400 flex items-center justify-center">
                <img 
                  src="/images/crest.png" 
                  alt="Hogwarts Crest" 
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="mt-3 text-xl font-harry-potter font-bold text-white">
                Congratulations, {formData.fullName}!
              </h3>
              <p className="text-gray-300 mt-2">
                Your application has been received. Get ready for a magical experience!
              </p>
            </div>
            
            <div className="border-t border-gray-700 pt-6 mt-6">
              <div className="bg-gray-900/70 p-4 rounded-lg mb-4">
                <h4 className="text-sm font-bold text-sky-400 uppercase tracking-wide mb-2">
                  Your Magical Details
                </h4>
                <p className="text-sm text-gray-300">House: <span className="text-white">{formData.house}</span></p>
                <p className="text-sm text-gray-300">Wand: <span className="text-white">{formData.wandType}</span></p>
              </div>
              
              <p className="text-xs text-gray-400 mb-4">
                An owl will deliver further instructions to your email: {formData.email}
              </p>
              
              <div className="flex space-x-4">
                <Button 
                  onClick={handleShareTicket} 
                  className="flex-1 flex items-center justify-center py-2 px-4 border border-sky-400 rounded-md shadow-sm text-sm font-medium text-sky-400 bg-transparent hover:bg-sky-400/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Share My Ticket
                </Button>
                
                <Link to="/">
                  <Button className="flex-1 flex items-center justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-sky-600 to-sky-400 hover:from-sky-500 hover:to-sky-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">
                    Return to Homepage
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ApplicationPage; 