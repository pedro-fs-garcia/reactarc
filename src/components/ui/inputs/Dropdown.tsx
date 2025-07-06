import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Check } from 'lucide-react';

interface DropdownOption {
  value: string;
  label: string;
  icon?: React.ReactNode;
  disabled?: boolean;
}

interface DropdownProps {
  options: DropdownOption[];
  value?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
  disabled?: boolean;
  error?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizeClasses = {
  sm: 'px-3 py-2 text-sm',
  md: 'px-4 py-2.5 text-sm',
  lg: 'px-4 py-3 text-base'
};

export default function Dropdown({
  options,
  value,
  onChange,
  placeholder = 'Selecione uma opção',
  label,
  disabled = false,
  error,
  size = 'md',
  className = ''
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find(option => option.value === value);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  return (
    <div className={`relative z-100 ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-secondary mb-2">
          {label}
        </label>
      )}

      <div ref={dropdownRef} className="relative">
        <button
          type="button"
          onClick={() => !disabled && setIsOpen(!isOpen)}
          disabled={disabled}
          className={`
            w-full flex items-center justify-between
            bg-card border rounded-lg transition-all duration-200
            ${sizeClasses[size]}
            ${disabled 
              ? 'bg-background-100 text-muted cursor-not-allowed' 
              : 'hover:border-medium focus:border-focus focus:ring-2 focus:ring-primary/20'
            }
            ${error ? 'border-error' : 'border-light'}
          `}
        >
          <div className="flex items-center gap-2 min-w-0 flex-1">
            {selectedOption?.icon && (
              <span className="flex-shrink-0 text-tertiary">
                {selectedOption.icon}
              </span>
            )}
            <span className={`truncate ${selectedOption ? 'text-primary' : 'text-tertiary'}`}>
              {selectedOption?.label || placeholder}
            </span>
          </div>
          
          <ChevronDown 
            size={16} 
            className={`text-tertiary transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="absolute top-full left-0 right-0 mt-1 bg-card border border-light rounded-lg shadow-lg z-10 max-h-60 overflow-auto"
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.15 }}
            >
              {options.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => !option.disabled && handleSelect(option.value)}
                  disabled={option.disabled}
                  className={`
                    w-full flex items-center gap-3 px-4 py-2.5 text-left
                    transition-colors duration-150
                    ${option.disabled 
                      ? 'text-muted cursor-not-allowed' 
                      : 'hover:bg-background-100 text-primary'
                    }
                    ${option.value === value ? 'bg-primary/10 text-primary' : ''}
                  `}
                >
                  {option.icon && (
                    <span className="flex-shrink-0 text-tertiary">
                      {option.icon}
                    </span>
                  )}
                  <span className="flex-1 truncate">{option.label}</span>
                  {option.value === value && (
                    <Check size={16} className="flex-shrink-0 text-primary" />
                  )}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {error && (
        <p className="mt-1 text-sm text-error">{error}</p>
      )}
    </div>
  );
} 