import { forwardRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';

interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  description?: string;
  disabled?: boolean;
  error?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6'
};

const iconSizes = {
  sm: 12,
  md: 14,
  lg: 16
};

export default forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  {
    checked,
    onChange,
    label,
    description,
    disabled = false,
    error,
    size = 'md',
    className = ''
  },
  ref
) {
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
          className={`
            relative flex items-center justify-center
            border-2 rounded transition-all duration-200
            ${sizeClasses[size]}
            ${disabled 
              ? 'bg-background-100 border-light cursor-not-allowed' 
              : 'hover:border-medium focus:border-focus focus:ring-2 focus:ring-primary/20 cursor-pointer'
            }
            ${checked 
              ? 'bg-primary border-primary' 
              : 'bg-card border-light'
            }
            ${error ? 'border-error' : ''}
          `}
          whileTap={{ scale: 0.95 }}
        >
          <AnimatePresence>
            {checked && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <Check 
                  size={iconSizes[size]} 
                  className="text-on-primary" 
                  strokeWidth={3}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {(label || description) && (
        <div className="flex-1 min-w-0">
          {label && (
            <label 
              className={`
                block text-sm font-medium cursor-pointer
                ${disabled ? 'text-muted cursor-not-allowed' : 'text-primary'}
              `}
              onClick={() => !disabled && onChange(!checked)}
            >
              {label}
            </label>
          )}
          
          {description && (
            <p className={`mt-1 text-sm ${disabled ? 'text-muted' : 'text-secondary'}`}>
              {description}
            </p>
          )}
          
          {error && (
            <p className="mt-1 text-sm text-error">{error}</p>
          )}
        </div>
      )}
    </div>
  );
}); 