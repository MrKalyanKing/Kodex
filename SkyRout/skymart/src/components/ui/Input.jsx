import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';

const Input = forwardRef(({ label, error, className, ...props }, ref) => {
  return (
    <div className="flex w-full flex-col gap-1.5 text-left">
      {label && (
        <label className="text-sm font-medium text-gray-400">
          {label}
        </label>
      )}
      <input
        ref={ref}
        className={cn(
          "flex h-11 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white ring-offset-charcoal transition-all placeholder:text-gray-500 focus:border-brand/50 focus:outline-none focus:ring-2 focus:ring-brand/20 disabled:cursor-not-allowed disabled:opacity-50",
          error && "border-red-500/50 focus:border-red-500 focus:ring-red-500/20",
          className
        )}
        {...props}
      />
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
