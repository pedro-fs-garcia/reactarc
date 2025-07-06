import { forwardRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface RadioOption {
  value: string;
  label: string;
  description?: string;
  disabled?: boolean;
}

interface RadioProps {
  options: RadioOption[];
  value?: string;
  onChange: (value: string) => void;
  name: string;
  label?: string;
  error?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6'
};

const dotSizes = {
  sm: 'w-1.5 h-1.5',
  md: 'w-2 h-2',
  lg: 'w-2.5 h-2.5'
};

export default forwardRef<HTMLInputElement, RadioProps>(function Radio(
  {
    options,
    value,
    onChange,
    name,
    label,
    error,
    size = 'md',
    className = ''
  },
  ref
) {
  return (
    <div className={className}>
      {label && (
        <label className="block text-sm font-medium text-secondary mb-3">
          {label}
        </label>
      )}

      <div className="space-y-3">
        {options.map((option) => (
          <div key={option.value} className="flex items-start gap-3">
            <div className="relative flex-shrink-0">
              <input
                ref={ref}
                type="radio"
                name={name}
                value={option.value}
                checked={value === option.value}
                onChange={(e) => onChange(e.target.value)}
                disabled={option.disabled}
                className="sr-only"
              />
              
              <motion.button
                type="button"
                onClick={() => !option.disabled && onChange(option.value)}
                disabled={option.disabled}
                className={`
                  relative flex items-center justify-center
                  border-2 rounded-full transition-all duration-200
                  ${sizeClasses[size]}
                  ${option.disabled 
                    ? 'bg-background-100 border-light cursor-not-allowed' 
                    : 'hover:border-medium focus:border-focus focus:ring-2 focus:ring-primary/20 cursor-pointer'
                  }
                  ${value === option.value 
                    ? 'bg-primary border-primary' 
                    : 'bg-card border-light'
                  }
                  ${error ? 'border-error' : ''}
                `}
                whileTap={{ scale: 0.95 }}
              >
                <AnimatePresence>
                  {value === option.value && (
                    <motion.div
                      className={`bg-on-primary rounded-full ${dotSizes[size]}`}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    />
                  )}
                </AnimatePresence>
              </motion.button>
            </div>

            <div className="flex-1 min-w-0">
              <label 
                className={`
                  block text-sm font-medium cursor-pointer
                  ${option.disabled ? 'text-muted cursor-not-allowed' : 'text-primary'}
                `}
                onClick={() => !option.disabled && onChange(option.value)}
              >
                {option.label}
              </label>
              
              {option.description && (
                <p className={`mt-1 text-sm ${option.disabled ? 'text-muted' : 'text-secondary'}`}>
                  {option.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {error && (
        <p className="mt-2 text-sm text-error">{error}</p>
      )}
    </div>
  );
}); 