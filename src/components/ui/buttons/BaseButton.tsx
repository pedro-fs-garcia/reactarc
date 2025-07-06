import React from 'react';
import { Loader2 } from 'lucide-react';

export type BaseButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
  rounded?: boolean;
};

const variantClasses: Record<string, string> = {
  primary: 'bg-primary text-on-primary hover:bg-primary-700',
  secondary: 'bg-secondary text-on-primary hover:bg-secondary/80',
  outline: 'bg-transparent border border-primary text-primary hover:bg-primary/10',
  ghost: 'bg-transparent text-primary hover:bg-primary/10',
  danger: 'bg-error text-on-primary hover:bg-error/90',
};

const sizeClasses: Record<string, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
};

export const BaseButton = React.forwardRef<HTMLButtonElement, BaseButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      loading = false,
      leftIcon,
      rightIcon,
      fullWidth = false,
      rounded = false,
      className = '',
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={props.type || 'button'}
        disabled={disabled || loading}
        className={`cursor-pointer
          inline-flex items-center justify-center font-semibold transition-all duration-200 select-none
          focus:outline-none focus-ring
          transform hover:-translate-y-1
          ${variantClasses[variant]}
          ${sizeClasses[size]}
          ${fullWidth ? 'w-full' : ''}
          ${rounded ? 'rounded-full' : 'rounded-lg'}
          ${disabled || loading ? 'opacity-60 cursor-not-allowed' : ''}
          ${className}
        `}
        aria-busy={loading}
        aria-disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <Loader2 className="animate-spin mr-2 h-4 w-4" />
        )}
        {!loading && leftIcon && (
          <span className="mr-2 flex-shrink-0">{leftIcon}</span>
        )}
        <span className="truncate">{children}</span>
        {!loading && rightIcon && (
          <span className="ml-2 flex-shrink-0">{rightIcon}</span>
        )}
      </button>
    );
  }
);

BaseButton.displayName = 'BaseButton'; 