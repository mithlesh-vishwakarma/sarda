import React from 'react';
import { useBrand } from '../context/BrandContext';

export const WhatsappFloat: React.FC = () => {
  const { socialLinks } = useBrand();

  return (
    <div className="whatsapp-float">
      <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
          alt="WhatsApp" 
          className="whatsapp-icon" 
        />
      </a>
    </div>
  );
};
export default WhatsappFloat;
