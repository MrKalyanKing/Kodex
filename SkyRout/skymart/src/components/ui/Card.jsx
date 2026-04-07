import React from 'react';
import { cn } from '../../utils/cn';

const Card = ({ children, className, ...props }) => {
  return (
    <div
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-xl border border-white/10 bg-white/5 transition-all duration-300 hover:border-brand/30 hover:bg-white/10 hover:shadow-xl hover:shadow-brand/5",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
