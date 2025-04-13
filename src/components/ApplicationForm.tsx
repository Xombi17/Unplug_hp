import React, { useState } from 'react';
import { X, Wand2, Sparkles, School, Scroll, PartyPopper } from 'lucide-react';

export type FormData = {
  fullName: string;
  email: string;
  house: string;
  wandType: string;
  reason: string;
};

export const HOUSES = [
  { id: 'gryffindor', name: 'Gryffindor', color: 'from-red-700 to-yellow-500' },
  { id: 'slytherin', name: 'Slytherin', color: 'from-green-700 to-green-400' },
  { id: 'hufflepuff', name: 'Hufflepuff', color: 'from-yellow-600 to-yellow-300' },
  { id: 'ravenclaw', name: 'Ravenclaw', color: 'from-blue-700 to-blue-400' },
];

export const WAND_TYPES = [
  { id: 'phoenix', name: 'Phoenix Feather Core' },
  { id: 'dragon', name: 'Dragon Heartstring Core' },
  { id: 'unicorn', name: 'Unicorn Hair Core' },
  { id: 'veela', name: 'Veela Hair Core' },
];

interface ApplicationFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const ApplicationForm: React.FC<ApplicationFormProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    house: '',
    wandType: '',
    reason: '',
  });
  
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const validateForm = () => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Your name is required for the scroll of attendance';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'An owl cannot deliver your acceptance letter without an email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'This does not appear to be a valid email format';
    }
    
    if (!formData.house) {
      newErrors.house = 'Please select your preferred house';
    }
    
    if (!formData.wandType) {
      newErrors.wandType = 'A wizard must choose their wand';
    }
    
    if (!formData.reason.trim()) {
      newErrors.reason = 'Please tell us why you wish to attend';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when field is edited
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
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-auto">
        {/* Parchment background */}
        <div className="bg-gradient-to-br from-amber-200 to-amber-100 rounded-lg border-4 border-amber-800/50 shadow-[0_0_30px_rgba(251,191,36,0.2)]">
          {/* Magical decorative elements */}
          <div className="absolute -top-6 -left-6 w-12 h-12 bg-amber-600/20 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-amber-600/20 rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
          
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-amber-900 hover:text-amber-700 transition-colors"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>
          
          <div className="p-8">
            {!isSubmitted ? (
              <>
                {/* Application Form */}
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center mb-6">
                    <School className="text-amber-800 h-8 w-8 mr-2" />
                    <h2 className="font-harry-potter text-3xl text-amber-900">Hogwarts Application</h2>
                  </div>
                  <p className="text-amber-800 italic">
                    Fill out this magical form to secure your place at Unplug: Hogwarts Edition
                  </p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="fullName" className="font-harry-potter text-lg text-amber-900 block mb-2">
                      Your Magical Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-amber-50 border ${errors.fullName ? 'border-red-500' : 'border-amber-600/30'} rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500`}
                      placeholder="Enter your full name"
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-red-600">{errors.fullName}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="font-harry-potter text-lg text-amber-900 block mb-2">
                      Owl Post Address (Email)
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-amber-50 border ${errors.email ? 'border-red-500' : 'border-amber-600/30'} rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500`}
                      placeholder="Where shall we send your acceptance letter?"
                    />
                    {errors.email && (
                      <p className="mt-1 text-red-600">{errors.email}</p>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="house" className="font-harry-potter text-lg text-amber-900 block mb-2">
                        Preferred House
                      </label>
                      <select
                        id="house"
                        name="house"
                        value={formData.house}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-amber-50 border ${errors.house ? 'border-red-500' : 'border-amber-600/30'} rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500`}
                      >
                        <option value="">Choose your house</option>
                        {HOUSES.map(house => (
                          <option key={house.id} value={house.id}>{house.name}</option>
                        ))}
                      </select>
                      {errors.house && (
                        <p className="mt-1 text-red-600">{errors.house}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="wandType" className="font-harry-potter text-lg text-amber-900 block mb-2">
                        Wand Preference
                      </label>
                      <select
                        id="wandType"
                        name="wandType"
                        value={formData.wandType}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-amber-50 border ${errors.wandType ? 'border-red-500' : 'border-amber-600/30'} rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500`}
                      >
                        <option value="">Select wand type</option>
                        {WAND_TYPES.map(wand => (
                          <option key={wand.id} value={wand.id}>{wand.name}</option>
                        ))}
                      </select>
                      {errors.wandType && (
                        <p className="mt-1 text-red-600">{errors.wandType}</p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="reason" className="font-harry-potter text-lg text-amber-900 block mb-2">
                      Why Do You Wish to Attend?
                    </label>
                    <textarea
                      id="reason"
                      name="reason"
                      value={formData.reason}
                      onChange={handleChange}
                      rows={4}
                      className={`w-full px-4 py-3 bg-amber-50 border ${errors.reason ? 'border-red-500' : 'border-amber-600/30'} rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500`}
                      placeholder="Tell us why you want to join this magical adventure..."
                    ></textarea>
                    {errors.reason && (
                      <p className="mt-1 text-red-600">{errors.reason}</p>
                    )}
                  </div>
                  
                  <div className="text-center pt-4">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="font-harry-potter text-lg bg-gradient-to-r from-amber-700 to-amber-500 text-white px-8 py-3 rounded-full 
                        shadow-[0_0_15px_rgba(245,158,11,0.4)] hover:shadow-[0_0_25px_rgba(245,158,11,0.6)] 
                        transition-all flex items-center justify-center mx-auto disabled:opacity-70"
                    >
                      {isLoading ? (
                        <>
                          <div className="animate-spin mr-2 h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                          Sending by Owl...
                        </>
                      ) : (
                        <>
                          <Wand2 className="mr-2 h-5 w-5" />
                          Cast Your Application
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <>
                {/* Confirmation View */}
                <div className="text-center py-6">
                  <div className="relative w-20 h-20 mx-auto mb-6">
                    <PartyPopper className="w-20 h-20 text-amber-800" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Sparkles className="w-8 h-8 text-yellow-500 animate-pulse" />
                    </div>
                  </div>
                  
                  <h2 className="font-harry-potter text-4xl text-amber-900 mb-6">
                    Congratulations!
                  </h2>
                  
                  <div className="max-w-md mx-auto mb-8">
                    <div className="relative">
                      <Scroll className="w-full h-auto text-amber-200" />
                      <div className="absolute inset-0 flex items-center justify-center p-10">
                        <div className="text-amber-900 space-y-2">
                          <p className="font-harry-potter text-xl">Dear {formData.fullName},</p>
                          <p className="italic">We are pleased to inform you that you have been accepted at Unplug: Hogwarts Edition!</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-amber-100/50 rounded-lg p-6 border border-amber-600/20 mb-6">
                    <h3 className="font-harry-potter text-2xl text-amber-900 mb-3">Application Details</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                      <div>
                        <p className="text-amber-800 font-semibold">Name:</p>
                        <p className="text-amber-900">{formData.fullName}</p>
                      </div>
                      
                      <div>
                        <p className="text-amber-800 font-semibold">Email:</p>
                        <p className="text-amber-900">{formData.email}</p>
                      </div>
                      
                      <div>
                        <p className="text-amber-800 font-semibold">House:</p>
                        <p className="text-amber-900">{HOUSES.find(h => h.id === formData.house)?.name || formData.house}</p>
                      </div>
                      
                      <div>
                        <p className="text-amber-800 font-semibold">Wand:</p>
                        <p className="text-amber-900">{WAND_TYPES.find(w => w.id === formData.wandType)?.name || formData.wandType}</p>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-amber-800 mb-8">
                    Further instructions will be sent by owl post shortly. Please check your email for details.
                  </p>
                  
                  <button
                    onClick={onClose}
                    className="font-harry-potter bg-gradient-to-r from-amber-700 to-amber-500 text-white px-8 py-3 rounded-full 
                      shadow-[0_0_15px_rgba(245,158,11,0.4)] hover:shadow-[0_0_25px_rgba(245,158,11,0.6)] transition-all"
                  >
                    Close
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationForm; 