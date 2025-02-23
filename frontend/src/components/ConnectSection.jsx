import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';

const ConnectSection = () => {
  return (
    <section id="connect" className="py-16 bg-gray-50"> {/* Default Tailwind Gray */}
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold text-orange-900 mb-8">Connect with Us</h2> {/* Default Tailwind Orange */}
        <p className="text-gray-600 mb-4">Stay updated and join our community!</p>
        <div className="flex justify-center space-x-12">
          <a href="https://www.instagram.com/happytalentfoundation/" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-700 transition-colors duration-200 hover:scale-110"> {/* Default Tailwind Orange */}
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61566447370254" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-700 transition-colors duration-200 hover:scale-110"> {/* Default Tailwind Orange */}
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="https://youtube.com/@happytalentfoundation?si=Erfrf2fWIMt6X2nM" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-700 transition-colors duration-200 hover:scale-110"> {/* Default Tailwind Orange */}
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;