import React from 'react';
import { ButtonProps } from '../../interfaces'; // Ensure this path is correct based on your project structure

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary', // Default to 'primary' if no variant is specified
  size = 'medium',
  className,
  ...props
}) => {
  const baseStyles = 'rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-200'; // Added transition for smoother effects
  
  // Define styles for each variant
  const variantStyles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-300',
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-200',
    
    // Specific action buttons from your image, typically similar to primary or a distinct brand color
    'confirm & pay': 'bg-teal-600 text-white hover:bg-teal-700 focus:ring-teal-500', // Example: Using teal for actions
    'reserve now': 'bg-teal-600 text-white hover:bg-teal-700 focus:ring-teal-500',
    'instant book': 'bg-teal-600 text-white hover:bg-teal-700 focus:ring-teal-500',
    'self checkin': 'bg-teal-600 text-white hover:bg-teal-700 focus:ring-teal-500',
    'book now, pay later': 'bg-teal-600 text-white hover:bg-teal-700 focus:ring-teal-500',
    'free reschedule': 'bg-teal-600 text-white hover:bg-teal-700 focus:ring-teal-500',
    'sign in': 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',

    // Buttons that might be more subdued or informational
    'show all amenities': 'bg-gray-700 text-white hover:bg-gray-800 focus:ring-gray-600', // Example: Darker background from image
    'show more': 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-300',
    'more info': 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-300',
    'all': 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-300',
    'top villa': 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-300',

    // Filter/Sort buttons - often secondary or outline-like
    'filter': 'border border-gray-400 text-gray-800 hover:bg-gray-50 focus:ring-gray-200',
    'sort by highest price': 'border border-gray-400 text-gray-800 hover:bg-gray-50 focus:ring-gray-200',
  };

  // Define styles for each size
  const sizeStyles = {
    small: 'px-2.5 py-1.5 text-xs',
    medium: 'px-4 py-2 text-sm',
    large: 'px-6 py-3 text-base',
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className || ''}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;