import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = 'px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variants = {
    primary: 'bg-pink-600 text-white hover:bg-pink-700 focus:ring-pink-500',
    secondary: 'bg-white text-gray-700 hover:bg-gray-50 focus:ring-pink-500',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;