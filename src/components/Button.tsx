import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    size?: 'sm' | 'md' | 'lg';
    variant?: 'primary' | 'secondary' | 'gradient';
    className?: string;
    onClick?: () => void;
    fullWidth?: boolean;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    children,
    size = 'md',
    variant = 'primary',
    className = '',
    onClick,
    fullWidth = false,
    disabled = false,
}) => {
    const sizeClasses = {
        sm: 'px-2 py-1 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-6 py-3 text-lg',
    };

    const variantClasses = {
        primary: 'border border-white text-white hover:bg-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:via-purple-500 hover:to-pink-600',
        secondary: 'border border-gray-300 text-gray-700 hover:bg-gray-100',
        gradient: 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-600 text-white hover:opacity-90',
    };

    const baseClasses = 'rounded-sm transition duration-300 font-semibold';
    const widthClass = fullWidth ? 'w-full' : '';
    const disabledClass = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';

    return (
        <button
            className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${widthClass} ${disabledClass} ${className}`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button; 