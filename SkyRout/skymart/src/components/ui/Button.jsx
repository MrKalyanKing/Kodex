import React from 'react';
import { cn } from '../../utils/cn';

const Button = ({
  children,
  className,
  variant = 'primary',
  size = 'md',
  ...props
}) => {
  const variants = {
    primary: 'btn-primary',
    ghost: 'btn-ghost',
    danger: 'inline-flex items-center justify-center rounded-lg bg-red-500/10 border border-red-500/20 px-6 py-3 text-sm font-semibold text-red-500 transition-all hover:bg-red-500/20 active:scale-95 disabled:pointer-events-none disabled:opacity-50',
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
    icon: 'p-2',
  };

  return (
    <button
      className={cn(variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
