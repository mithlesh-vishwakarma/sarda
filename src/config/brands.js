import sardaLogo from '../assets/img/sarda-logo.png';
import sardaFavicon from '../assets/img/sarda-favicon.png'; // Updated to user's sarda-favicon.png
import sardaRoundedLogo from '../assets/img/sarda-rounded-logo.jpeg';
import jupiterLogo from '../assets/img/jupiter-logo.png';
import jupiterFavicon from '../assets/img/jupiter-favicon.png'; // Updated to user's jupiter-favicon.png
import jupiterRoundedLogo from '../assets/img/jupiter-rounded-logo.jpeg';

const sardaConfig = {
  companyName: 'Sarda Chemical Corporation',
  logo: sardaLogo,
  roundedLogo: sardaRoundedLogo,
  favicon: sardaRoundedLogo,
  primaryColor: '#0d42ff',
  primaryColorRgb: '13, 66, 255',
  primaryDark: '#002aa3',
  primaryLight: '#a3b8ff',
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
  footerAccent: '#4e7536',

  // Dynamic Background and loader configs
  preloaderBg: '#0e1d34',
  footerBg: 'linear-gradient(180deg, #0e1d34 0%, #00112a 100%)',
  ctaBgGrad: 'linear-gradient(135deg, rgba(14, 29, 52, 0.8) 0%, rgba(0, 18, 46, 0.85) 100%)',
  darkBg135: 'linear-gradient(135deg, #0e1d34 0%, #00112a 100%)',
  bgLight: '#f4f7ff',
  heroBgColor: '#0e1d34',
  heroCardBg: 'rgba(14, 29, 52, 0.72)'
};

const jupiterConfig = {
  companyName: 'Jupiter Organics',
  logo: jupiterLogo,
  roundedLogo: jupiterRoundedLogo,
  favicon: jupiterRoundedLogo,
  primaryColor: '#de9127',
  primaryColorRgb: '222, 145, 39',
  primaryDark: '#a36100',
  primaryLight: '#ffdca3',
  secondaryColor: '#3a2000',
  secondaryColorRgb: '58, 32, 0',
  accentColor: '#de9127',
  accentColorRgb: '222, 145, 39',
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
  orbit1Color: '#de9127',
  orbit2Color: '#ffba5c',
  orbit3Color: '#ffffff',
  web3FormsAccessKey: 'ed67b5ad-afa4-4acb-9e5a-8d017f8265a9',
  
  // Header styles (translucent white for glassy backdrop blur)
  headerBg: 'rgba(255, 255, 255, 0.82)',
  headerNavColor: '#3a2000',
  headerNavHoverColor: '#de9127',
  headerBorderColor: 'rgba(58, 32, 0, 0.1)',
  
  // Button styles (orange for Jupiter)
  btnPrimaryStart: '#de9127',
  btnPrimaryEnd: '#a36100',
  
  // Footer accents (orange for Jupiter)
  footerAccent: '#de9127',

  // Dynamic Background and loader configs
  preloaderBg: '#ffffff',
  footerBg: 'linear-gradient(180deg, #2b1900 0%, #170d00 100%)',
  ctaBgGrad: 'linear-gradient(135deg, rgba(43, 25, 0, 0.8) 0%, rgba(23, 13, 0, 0.85) 100%)',
  darkBg135: 'linear-gradient(135deg, #2b1900 0%, #170d00 100%)',
  bgLight: '#fffcf7',
  heroBgColor: '#170d00',
  heroCardBg: 'rgba(43, 25, 0, 0.72)'
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
