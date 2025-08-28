import React from 'react';

interface SpinnerProps {
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary' | 'white';
  className?: string;
  text?: string;
}

const Spinner: React.FC<SpinnerProps> = ({ 
  size = 'medium', 
  color = 'primary', 
  className = '',
  text 
}) => {
  // Size classes
  const sizeClasses = {
    small: 'w-4 h-4',
    medium: 'w-8 h-8', 
    large: 'w-12 h-12'
  };

  // Color classes
  const colorClasses = {
    primary: 'border-[#3A86FF]',
    secondary: 'border-[#2EC4B6]', 
    white: 'border-white'
  };

  // Text size classes
  const textSizeClasses = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg'
  };

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div
        className={`
          ${sizeClasses[size]}
          ${colorClasses[color]}
          border-4 border-t-transparent rounded-full animate-spin
        `}
      />
      {text && (
        <p className={`mt-3 text-gray-300 ${textSizeClasses[size]}`}>
          {text}
        </p>
      )}
    </div>
  );
};

// Full page loading spinner
export const PageSpinner: React.FC<{ text?: string }> = ({ text = 'Loading...' }) => (
  <div className="min-h-screen bg-[#0D1B2A] flex items-center justify-center">
    <Spinner size="large" color="primary" text={text} />
  </div>
);

// Overlay spinner for modals/forms
export const OverlaySpinner: React.FC<{ text?: string }> = ({ text }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-[#1B263B] rounded-lg p-8 border border-[#415A77]/20">
      <Spinner size="large" color="primary" text={text} />
    </div>
  </div>
);

// Button spinner
export const ButtonSpinner: React.FC = () => (
  <Spinner size="small" color="white" className="mr-2" />
);

// Card loading spinner
export const CardSpinner: React.FC<{ text?: string }> = ({ text }) => (
  <div className="bg-[#1B263B] rounded-lg p-8 border border-[#415A77]/20 flex items-center justify-center min-h-[200px]">
    <Spinner size="medium" color="primary" text={text} />
  </div>
);

// Dots spinner variant
export const DotsSpinner: React.FC<{ size?: 'small' | 'medium' | 'large' }> = ({ size = 'medium' }) => {
  const dotSizes = {
    small: 'w-1 h-1',
    medium: 'w-2 h-2',
    large: 'w-3 h-3'
  };

  const containerSizes = {
    small: 'space-x-1',
    medium: 'space-x-1.5', 
    large: 'space-x-2'
  };

  return (
    <div className={`flex items-center ${containerSizes[size]}`}>
      <div className={`${dotSizes[size]} bg-[#3A86FF] rounded-full animate-bounce`} style={{ animationDelay: '0ms' }}></div>
      <div className={`${dotSizes[size]} bg-[#3A86FF] rounded-full animate-bounce`} style={{ animationDelay: '150ms' }}></div>
      <div className={`${dotSizes[size]} bg-[#3A86FF] rounded-full animate-bounce`} style={{ animationDelay: '300ms' }}></div>
    </div>
  );
};

// Pulse spinner variant
export const PulseSpinner: React.FC<{ size?: 'small' | 'medium' | 'large' }> = ({ size = 'medium' }) => {
  const sizeClasses = {
    small: 'w-4 h-4',
    medium: 'w-8 h-8',
    large: 'w-12 h-12'
  };

  return (
    <div className={`${sizeClasses[size]} bg-[#3A86FF] rounded-full animate-pulse opacity-75`}></div>
  );
};

// Skeleton loader for content
export const SkeletonLoader: React.FC<{ 
  lines?: number; 
  className?: string;
  animate?: boolean;
}> = ({ 
  lines = 3, 
  className = '',
  animate = true 
}) => {
  return (
    <div className={`space-y-3 ${className}`}>
      {Array.from({ length: lines }).map((_, index) => (
        <div
          key={index}
          className={`
            h-4 bg-[#415A77]/20 rounded
            ${animate ? 'animate-pulse' : ''}
            ${index === lines - 1 ? 'w-3/4' : 'w-full'}
          `}
        />
      ))}
    </div>
  );
};

export default Spinner;
