import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

// This page will redirect to the new application page
const Apply = () => {
  // Automatically redirect to ApplicationPage
  React.useEffect(() => {
    // Redirect logic goes here if we want to change the URL
    // For now, we'll just render the same content as ApplicationPage
  }, []);
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-center p-8">
        <h2 className="text-3xl text-white mb-4">Redirecting to application form...</h2>
        <Link to="/" className="inline-flex items-center text-sky-400 hover:text-sky-300 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Apply;

 