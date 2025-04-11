"use client";

import React from 'react';
import Link from 'next/link';

type ButtonVariant = 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  className?: string;
  isExternal?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  ariaLabel?: string;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  isExternal = false,
  onClick,
  disabled = false,
  type = 'button',
  ariaLabel,
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all';

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm rounded-[var(--radius-sm)]',
    md: 'px-4 py-2 text-base rounded-[var(--radius-md)]',
    lg: 'px-6 py-3 text-lg rounded-[var(--radius-md)]',
  };

  const variantClasses = {
    primary: 'bg-[var(--color-btn-primary)] hover:bg-[var(--color-btn-primary-hover)] text-[var(--color-text-light)]',
    secondary: 'bg-[var(--color-btn-secondary)] hover:bg-[var(--color-btn-secondary-hover)] text-[var(--color-text-light)]',
    accent: 'bg-[var(--color-btn-accent)] hover:bg-[var(--color-btn-accent-hover)] text-[var(--color-text-light)]',
    outline: 'border border-[var(--color-btn-primary)] text-[var(--color-btn-primary)] hover:bg-[var(--color-btn-primary)] hover:text-[var(--color-text-light)]',
    ghost: 'text-[var(--color-text-body)] hover:bg-[var(--color-bg-secondary)]',
  };

  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';

  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${disabledClasses} ${className}`;

  if (href) {
    const linkProps = isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {};
    
    return (
      <Link 
        href={href} 
        className={combinedClasses}
        aria-label={ariaLabel}
        {...linkProps}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={combinedClasses}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}