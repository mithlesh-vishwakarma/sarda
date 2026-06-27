import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'cta' | 'primary';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  to,
  onClick,
  className = '',
  type = 'button',
  variant = 'primary',
}) => {
  const getVariantClass = () => {
    switch (variant) {
      case 'cta':
        return 'cta-btn';
      default:
        return 'btn btn-primary';
    }
  };

  const combinedClasses = `${getVariantClass()} ${className}`.trim();

  if (to) {
    if (to.startsWith('http') || to.startsWith('mailto:')) {
      return (
        <a href={to} className={combinedClasses}>
          {children}
        </a>
      );
    }
    return (
      <Link to={to} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
};
export default Button;
