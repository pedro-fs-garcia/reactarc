import React, { forwardRef } from "react";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  description?: string;
  required?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  error?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'filled';
};

const sizeClasses: Record<string, string> = {
  sm: 'px-3 py-2 text-sm',
  md: 'px-4 py-3 text-sm',
  lg: 'px-4 py-3 text-base'
};

export default forwardRef<HTMLInputElement, InputProps>(function BasicInput({
  label,
  description,
  required,
  leftIcon,
  rightIcon,
  error,
  size = 'md',
  variant = 'default',
  id,
  className,
  disabled,
  ...props
}, ref) {
  const inputId = id || label?.toLowerCase().replace(/\s/g, "-") || undefined;

  return (
    <div className="space-y-2">
      {label && (
        <label
          htmlFor={inputId}
          className={`
            block text-sm font-medium cursor-pointer
            ${disabled ? 'text-muted cursor-not-allowed' : 'text-secondary'}
          `}
        >
          {label} {required && <span className="text-error">*</span>}
        </label>
      )}

      <div className="relative">
        {leftIcon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-tertiary">
            {leftIcon}
          </div>
        )}

        <input
          ref={ref}
          id={inputId}
          disabled={disabled}
          className={`
            input-base w-full
            ${sizeClasses[size]}
            ${leftIcon ? 'pl-10' : ''}
            ${rightIcon ? 'pr-10' : ''}
            ${variant === 'filled' ? 'bg-background-100' : ''}
            ${disabled 
              ? 'bg-background-100 text-muted cursor-not-allowed' 
              : 'hover:border-medium focus-ring'
            }
            ${error ? 'border-error' : ''}
            ${className || ''}
          `}
          {...props}
        />

        {rightIcon && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-tertiary">
            {rightIcon}
          </div>
        )}
      </div>

      {description && (
        <p className={`text-xs ${disabled ? 'text-muted' : 'text-tertiary'}`}>
          {description}
        </p>
      )}

      {error && (
        <p className="text-xs text-error">
          {error}
        </p>
      )}
    </div>
  );
});
