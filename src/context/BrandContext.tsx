import React, { createContext, useContext, useEffect, type ReactNode } from 'react';
import { brands, defaultBrand } from '../config/brands';

export interface BrandConfig {
  companyName: string;
  logo: string;
  roundedLogo: string;
  favicon: string;
  primaryColor: string;
  primaryColorRgb: string;
  primaryDark: string;
  secondaryColor: string;
  secondaryColorRgb: string;
  accentColor: string;
  accentColorRgb: string;
  websiteTitle: string;
  metaDescription: string;
  email: string;
  phone: string;
  address: string;
  socialLinks: {
    whatsapp: string;
    email: string;
  };
  footerText: string;
  googleMapsEmbedUrl: string;
  orbit1Color: string;
  orbit2Color: string;
  orbit3Color: string;
  web3FormsAccessKey: string;
  headerBg: string;
  headerNavColor: string;
  headerNavHoverColor: string;
  headerBorderColor: string;
  btnPrimaryStart: string;
  btnPrimaryEnd: string;
  footerAccent: string;
  primaryLight: string;
  bgLight: string;
  preloaderBg: string;
  footerBg: string;
  ctaBgGrad: string;
  darkBg135: string;
  heroBgColor: string;
  heroCardBg: string;
}

const BrandContext = createContext<BrandConfig | undefined>(undefined);

export const BrandProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Resolve brand based on window.location.hostname
  const getBrand = (): BrandConfig => {
    if (typeof window === 'undefined') return defaultBrand as BrandConfig;
    
    let hostname = window.location.hostname;
    // Clean hostname from www prefix
    hostname = hostname.replace(/^www\./, '');
    
    const registry = brands as Record<string, BrandConfig>;
    
    console.log('[BrandContext] Hostname detected:', hostname);
    
    // 1. Exact match in registry
    if (registry[hostname]) {
      console.log('[BrandContext] Exact match found:', registry[hostname].companyName);
      return registry[hostname];
    }
    
    // 2. Substring matching (handles Hostinger preview domains, temporary domains, different TLDs)
    if (hostname.includes('jupiter')) {
      console.log('[BrandContext] Substring match found (jupiter):', registry['jupiterorganics.com'].companyName);
      return registry['jupiterorganics.com'];
    }
    if (hostname.includes('sarda')) {
      console.log('[BrandContext] Substring match found (sarda):', registry['sardachemicalcorporation.com'].companyName);
      return registry['sardachemicalcorporation.com'];
    }
    
    console.log('[BrandContext] No match found. Falling back to default brand:', defaultBrand.companyName);
    // Return default fallback
    return defaultBrand as BrandConfig;
  };

  const brand = getBrand();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // 1. Update CSS variables for colors
    const root = document.documentElement;
    root.style.setProperty('--primary', brand.primaryColor);
    root.style.setProperty('--primary-rgb', brand.primaryColorRgb);
    root.style.setProperty('--primary-dark', brand.primaryDark);
    root.style.setProperty('--secondary', brand.secondaryColor);
    root.style.setProperty('--secondary-rgb', brand.secondaryColorRgb);
    root.style.setProperty('--accent', brand.accentColor);
    root.style.setProperty('--accent-rgb', brand.accentColorRgb);
    root.style.setProperty('--btn-primary-start', brand.btnPrimaryStart);
    root.style.setProperty('--btn-primary-end', brand.btnPrimaryEnd);
    root.style.setProperty('--footer-accent', brand.footerAccent);
    root.style.setProperty('--primary-light', brand.primaryLight);
    root.style.setProperty('--bg-light', brand.bgLight);
    root.style.setProperty('--preloader-bg', brand.preloaderBg);
    root.style.setProperty('--footer-bg', brand.footerBg);
    root.style.setProperty('--cta-bg-grad', brand.ctaBgGrad);
    root.style.setProperty('--dark-bg-135', brand.darkBg135);
    root.style.setProperty('--hero-bg-color', brand.heroBgColor);
    root.style.setProperty('--hero-card-bg', brand.heroCardBg);
    root.style.setProperty('--alt-background-color', brand.heroBgColor);

    // Orbit loader colors
    root.style.setProperty('--orbit-1', brand.orbit1Color);
    root.style.setProperty('--orbit-2', brand.orbit2Color);
    root.style.setProperty('--orbit-3', brand.orbit3Color);

    // Dynamic header styles
    root.style.setProperty('--header-bg', brand.headerBg);
    root.style.setProperty('--header-nav-color', brand.headerNavColor);
    root.style.setProperty('--header-nav-hover-color', brand.headerNavHoverColor);
    root.style.setProperty('--header-border-color', brand.headerBorderColor);

    // Keep standard template variable hooks synced so stylesheet uses new colors
    root.style.setProperty('--accent-color', brand.primaryColor);
    root.style.setProperty('--heading-color', brand.secondaryColor);

    // 2. Update dynamic website Title
    document.title = brand.websiteTitle;

    // 3. Update dynamic Meta Description
    let metaDescriptionTag = document.querySelector('meta[name="description"]') as HTMLMetaElement;
    if (!metaDescriptionTag) {
      metaDescriptionTag = document.createElement('meta');
      metaDescriptionTag.name = 'description';
      document.head.appendChild(metaDescriptionTag);
    }
    metaDescriptionTag.content = brand.metaDescription;

    // 4. Update Favicon Link
    let faviconLink = document.querySelector('link[rel~="icon"]') as HTMLLinkElement;
    if (!faviconLink) {
      faviconLink = document.createElement('link');
      faviconLink.rel = 'icon';
      document.head.appendChild(faviconLink);
    }
    faviconLink.href = brand.favicon;

    // 5. Update Apple Touch Icon Link
    let appleTouchLink = document.querySelector('link[rel="apple-touch-icon"]') as HTMLLinkElement;
    if (!appleTouchLink) {
      appleTouchLink = document.createElement('link');
      appleTouchLink.rel = 'apple-touch-icon';
      document.head.appendChild(appleTouchLink);
    }
    appleTouchLink.href = brand.favicon;
  }, [brand]);

  return (
    <BrandContext.Provider value={brand}>
      {children}
    </BrandContext.Provider>
  );
};

export const useBrand = (): BrandConfig => {
  const context = useContext(BrandContext);
  if (!context) {
    throw new Error('useBrand must be used within a BrandProvider');
  }
  return context;
};

export default BrandProvider;
