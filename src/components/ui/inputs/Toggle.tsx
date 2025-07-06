import { forwardRef } from 'react';
import { motion } from 'framer-motion';

interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  description?: string;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizeClasses = {
  sm: {
    container: 'w-9 h-5',
    thumb: 'w-4 h-4',
    translate: 16, // px
  },
  md: {
    container: 'w-11 h-6',
    thumb: 'w-5 h-5',
    translate: 20, // px
  },
  lg: {
    container: 'w-14 h-7',
    thumb: 'w-6 h-6',
    translate: 28, // px
  }
};

export default forwardRef<HTMLInputElement, ToggleProps>(function Toggle(
  {
    checked,
    onChange,
    label,
    description,
    disabled = false,
    size = 'md',
    className = ''
  },
  ref
) {
  const sizeConfig = sizeClasses[size];

  // Cores que respondem ao tema (usando Tailwind)
  const activeBg = disabled
    ? 'bg-background-100 dark:bg-background-800'
    : 'bg-primary dark:bg-primary-dark';
  const inactiveBg = disabled
    ? 'bg-background-100 dark:bg-background-800'
    : 'bg-light dark:bg-background-700';
  const thumbBg = disabled
    ? 'bg-background-50 dark:bg-background-900'
    : 'bg-white dark:bg-background-100';
  const focusRing = checked
    ? 'focus:ring-primary dark:focus:ring-primary-dark'
    : 'focus:ring-background-300 dark:focus:ring-background-700';
  const outline = 'focus:outline-none focus-visible:outline-none';

  return (
    <div className={`flex items-start gap-3 ${className}`}>
      <div className="relative flex-shrink-0">
        <input
          ref={ref}
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          disabled={disabled}
          className="sr-only"
        />
        <motion.button
          type="button"
          onClick={() => !disabled && onChange(!checked)}
          disabled={disabled}
          tabIndex={0}
          aria-checked={checked}
          role="switch"
          className={`
            relative inline-flex items-center transition-colors duration-200 rounded-full
            ${sizeConfig.container}
            ${checked ? activeBg : inactiveBg}
            ${disabled ? 'cursor-not-allowed opacity-70' : 'cursor-pointer'}
            ${focusRing} ${outline}
            shadow-sm
          `}
          whileTap={{ scale: 0.97 }}
        >
          <motion.div
            className={`
              absolute left-0 top-0 h-full w-full rounded-full pointer-events-none
              ${checked ? 'bg-primary/10 dark:bg-primary-dark/10' : ''}
            `}
            animate={{ opacity: checked ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          />
          <motion.div
            className={`
              z-10 shadow-md border border-background-200 dark:border-background-800
              ${thumbBg} ${sizeConfig.thumb} rounded-full
              transition-all duration-200
            `}
            animate={{
              x: checked ? sizeConfig.translate : 0,
              boxShadow: checked
                ? '0px 2px 8px 0px rgba(33, 150, 243, 0.25)'
                : '0px 1px 3px 0px rgba(0,0,0,0.10)'
            }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          />
        </motion.button>
      </div>

      {(label || description) && (
        <div className="flex-1 min-w-0">
          {label && (
            <label
              className={`
                block text-sm font-medium cursor-pointer
                ${disabled ? 'text-muted cursor-not-allowed' : 'text-primary dark:text-primary-dark'}
              `}
              onClick={() => !disabled && onChange(!checked)}
            >
              {label}
            </label>
          )}
          {description && (
            <p className={`mt-1 text-xs ${disabled ? 'text-muted' : 'text-secondary dark:text-secondary-dark'}`}>
              {description}
            </p>
          )}
        </div>
      )}
    </div>
  );
}); 