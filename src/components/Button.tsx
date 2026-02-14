"use client";

import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';
import React from 'react';

/**
 * Utility function to merge classes
 */
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  fullWidthOnMobile?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', fullWidth = false, fullWidthOnMobile = false, ...props }, ref) => {
    const variants = {
      primary: 'bg-[#2C2C2C] text-white hover:bg-black',
      secondary: 'bg-[#C05621] text-white hover:bg-[#A0451B]',
      outline: 'border border-[#2C2C2C] text-[#2C2C2C] hover:bg-[#2C2C2C] hover:text-white',
      ghost: 'text-[#2C2C2C] hover:bg-gray-100',
    };

    const sizes = {
      sm: 'px-4 py-2 text-xs',
      md: 'px-6 py-3 text-sm',
      lg: 'px-8 py-4 text-base',
    };

    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          "inline-block",
          fullWidth && "w-full",
          fullWidthOnMobile && "w-full md:w-auto"
        )}
      >
        <button
          ref={ref}
          className={cn(
            'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-sm disabled:opacity-50 disabled:cursor-not-allowed w-full',
            variants[variant],
            sizes[size],
            className
          )}
          {...props}
        />
      </motion.div>
    );
  }
);

Button.displayName = 'Button';

export default Button;
