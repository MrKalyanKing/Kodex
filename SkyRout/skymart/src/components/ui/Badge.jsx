import React from 'react';
import { cn } from '../../utils/cn';

const Badge = ({ children, className, variant = 'primary', ...props }) => {
  const variants = {
    primary: "bg-brand/10 text-brand border-brand/20",
    secondary: "bg-white/10 text-white border-white/20",
    outline: "bg-transparent text-gray-400 border-white/10",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};

export default Badge;
