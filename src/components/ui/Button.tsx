import React from 'react';
import { colors } from '@/styles/design-system';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  leftIcon,
  rightIcon,
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: `bg-[${colors.primary.main}] text-white hover:bg-[${colors.primary.dark}] focus:ring-[${colors.primary.main}]`,
    secondary: `bg-[${colors.secondary.main}] text-white hover:bg-[${colors.secondary.dark}] focus:ring-[${colors.secondary.main}]`,
    outline: `border border-[${colors.neutral[300]}] bg-transparent hover:bg-[${colors.neutral[100]}] focus:ring-[${colors.neutral[300]}]`,
    ghost: `bg-transparent hover:bg-[${colors.neutral[100]}] focus:ring-[${colors.neutral[300]}]`,
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  const disabledStyles = 'opacity-50 cursor-not-allowed';
  const loadingStyles = 'relative text-transparent transition-none hover:text-transparent';

  return (
    <button
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
        ${disabled || isLoading ? disabledStyles : ''}
        ${isLoading ? loadingStyles : ''}
        ${className}
      `}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-5 w-5 animate-spin rounded-full border-2 border-current border-t-transparent" />
        </div>
      )}
      {leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
};

export default Button; 