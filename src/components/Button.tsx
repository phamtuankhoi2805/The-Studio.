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
}

export default function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98, y: 0 }}
      className={cn(fullWidth && 'full-width')}
      style={{ display: fullWidth ? 'block' : 'inline-block' }}
    >
      <button
        className={cn('btn', `btn-${variant}`, `btn-${size}`, fullWidth && 'full-width', className)}
        {...props}
      >
        {children}
      </button>
      <style jsx>{`
        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          font-family: var(--font-body);
          transition: all 0.2s ease;
          border-radius: var(--radius-pill);
          white-space: nowrap;
          border: none;
          cursor: pointer;
          width: 100%;
          height: 100%;
        }

        /* Sizes */
        .btn-sm {
          padding: 8px 16px;
          font-size: 13px;
        }
        .btn-md {
          padding: 12px 28px;
          font-size: 15px;
        }
        .btn-lg {
          padding: 16px 36px;
          font-size: 16px;
        }

        /* Variants */
        .btn-primary {
          background-color: var(--accent);
          color: white;
          box-shadow: var(--shadow-accent);
        }
        .btn-primary:hover {
          opacity: 0.9;
        }

        .btn-secondary {
          background-color: var(--text-primary);
          color: white;
          box-shadow: var(--shadow-medium);
        }

        .btn-outline {
          background-color: var(--bg-surface);
          border: 1px solid var(--border-color) !important;
          color: var(--text-secondary);
          box-shadow: var(--shadow-subtle);
        }

        .btn-ghost {
          background: transparent;
          color: var(--text-secondary);
        }

        .full-width {
          width: 100%;
        }
      `}</style>
    </motion.div>
  );
}
