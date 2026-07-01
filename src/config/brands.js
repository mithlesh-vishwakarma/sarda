import sardaLogo from '../assets/img/sarda-logo.png';
import sardaFavicon from '../assets/img/sarda-favicon.png'; // Updated to user's sarda-favicon.png
import jupiterLogo from '../assets/img/jupiter-logo.png';
import jupiterFavicon from '../assets/img/jupiter-favicon.png'; // Updated to user's jupiter-favicon.png

const sardaConfig = {
  companyName: 'Sarda Chemical Corporation',
  logo: sardaLogo,
  favicon: sardaFavicon,
  primaryColor: '#0d42ff',
  primaryColorRgb: '13, 66, 255',
  primaryDark: '#002aa3',
  secondaryColor: '#4e7536', // Green secondary color
  secondaryColorRgb: '78, 117, 54',
  accentColor: '#0d42ff',
  accentColorRgb: '13, 66, 255',
  websiteTitle: 'Sarda Chemical Corporation - Textile Chemical Solutions',
  metaDescription: 'With over 27 years of excellence in the textile chemicals industry, Sarda Chemical Corporation is a trusted partner for premium chemical distribution.',
  email: 'shubhamsarda@sardachemicalcorporation.com',
  phone: '+91 9825109158',
  address: '326, Ishana Business Hub Althan Bamroli Expessway,VIP Road, nr. Dmart, Pandesara, Surat, Gujarat 394221,India',
  socialLinks: {
    whatsapp: 'https://wa.me/9825109158',
    email: 'mailto:shubhamsarda@sardachemicalcorporation.com'
  },
  footerText: 'Sarda Chemical Corporation. All Rights Reserved.',
  googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14884.362063134127!2d72.8143071!3d21.1487958!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be051378b6c352b%3A0x25cbe5a269d7ff6b!2sSarda%20Chemical%20Corporation!5e0!3m2!1sen!2sin!4v1719056890605!5m2!1sen!2sin',
  orbit1Color: '#4e7536',
  orbit2Color: '#E85635',
  orbit3Color: '#0E4981',
  web3FormsAccessKey: 'ed67b5ad-afa4-4acb-9e5a-8d017f8265a9',
  
  // Header styles (dark background with green hover color)
  headerBg: 'rgba(14, 29, 52, 0.88)',
  headerNavColor: 'rgba(255, 255, 255, 0.85)',
  headerNavHoverColor: '#4e7536',
  headerBorderColor: 'rgba(255, 255, 255, 0.12)',
  
  // Button styles (specifically green for Sarda)
  btnPrimaryStart: '#4e7536',
  btnPrimaryEnd: '#3b5929',
  
  // Footer accents (green for Sarda)
  footerAccent: '#4e7536'
};

const jupiterConfig = {
  companyName: 'Jupiter Organics',
  logo: jupiterLogo,
  favicon: jupiterFavicon,
  primaryColor: '#d9851b',
  primaryColorRgb: '217, 133, 27',
  primaryDark: '#a55d0a',
  secondaryColor: '#0b1838',
  secondaryColorRgb: '11, 24, 56',
  accentColor: '#d9851b',
  accentColorRgb: '217, 133, 27',
  websiteTitle: 'Jupiter Organics - Premium Sustainable Chemicals',
  metaDescription: 'Jupiter Organics delivers high-performance and eco-friendly chemical formulations for modern textile manufacturing and processing.',
  email: 'shubhamsarda@sardachemicalcorporation.com',
  phone: '+91 9825109158',
  address: '313/319, Room No. 15, Harish Chamber, Samuel Street, Mumbai',
  socialLinks: {
    whatsapp: 'https://wa.me/9825109158',
    email: 'mailto:shubhamsarda@sardachemicalcorporation.com'
  },
  footerText: 'Jupiter Organics. All Rights Reserved.',
  googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14884.362063134127!2d72.8143071!3d21.1487958!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be051378b6c352b%3A0x25cbe5a269d7ff6b!2sSarda%20Chemical%20Corporation!5e0!3m2!1sen!2sin!4v1719056890605!5m2!1sen!2sin',
  orbit1Color: '#4e7536',
  orbit2Color: '#E85635',
  orbit3Color: '#0E4981',
  web3FormsAccessKey: 'ed67b5ad-afa4-4acb-9e5a-8d017f8265a9',
  
  // Header styles (translucent white for glassy backdrop blur)
  headerBg: 'rgba(255, 255, 255, 0.82)',
  headerNavColor: '#0b1838',
  headerNavHoverColor: '#d9851b',
  headerBorderColor: 'rgba(11, 24, 56, 0.1)',
  
  // Button styles (orange for Jupiter)
  btnPrimaryStart: '#d9851b',
  btnPrimaryEnd: '#a55d0a',
  
  // Footer accents (orange for Jupiter)
  footerAccent: '#d9851b'
};

export const brands = {
  'sardachemicalcorporation.com': sardaConfig,
  'jupiterorganics.com': jupiterConfig,
  
  // Localhost testing mappings
  'localhost': sardaConfig,
  'sarda.localhost': sardaConfig,
  'jupiter.localhost': jupiterConfig
};

export const defaultBrand = sardaConfig;
