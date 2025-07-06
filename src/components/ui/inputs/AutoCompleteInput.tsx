import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronDown, Loader2, Check } from "lucide-react";
import BasicInput from "./BasicInput";

export type AutocompleteSuggestion = {
  id: string | number;
  label: string;
  icon?: React.ReactNode;
  description?: string;
};

type AutocompleteProps = {
  label?: string;
  placeholder?: string;
  required?: boolean;
  suggestions: AutocompleteSuggestion[];
  isLoading?: boolean;
  value: AutocompleteSuggestion | null;
  onSelect: (item: AutocompleteSuggestion) => void;
  error?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
};

export default function AutoCompleteInput ({
  label,
  placeholder,
  required,
  suggestions,
  isLoading,
  value,
  onSelect,
  error,
  size = 'md',
  className = '',
}: AutocompleteProps) {
  const [inputValue, setInputValue] = useState(value?.label || "");
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setHighlightedIndex(-1);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setIsOpen(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isOpen) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightedIndex((prev) =>
        prev < suggestions.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : prev));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (highlightedIndex >= 0 && highlightedIndex < suggestions.length) {
        handleSelect(suggestions[highlightedIndex]);
      }
    } else if (e.key === "Escape") {
      setIsOpen(false);
      setHighlightedIndex(-1);
    }
  };

  const handleSelect = (item: AutocompleteSuggestion) => {
    onSelect(item);
    setInputValue(item.label);
    setIsOpen(false);
    setHighlightedIndex(-1);
  };

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <BasicInput
        label={label}
        required={required}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onFocus={() => setIsOpen(true)}
        error={error}
        size={size}
        leftIcon={<Search size={16} />}
        rightIcon={
          isLoading ? (
            <Loader2 size={16} className="animate-spin" />
          ) : (
            <ChevronDown 
              size={16} 
              className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
            />
          )
        }
      />

      <AnimatePresence>
        {isOpen && suggestions.length > 0 && (
          <motion.div
            className="absolute z-50 w-full mt-1 bg-card border border-light rounded-lg shadow-lg"
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
          >
            <div className="max-h-60 overflow-auto p-1">
              {suggestions.map((item, index) => (
                <motion.div
                  key={item.id}
                  className={`
                    flex items-center gap-3 px-3 py-2.5 text-sm rounded-md
                    cursor-pointer select-none transition-colors duration-150
                    ${index === highlightedIndex ? 'bg-background-100' : ''}
                    ${value?.id === item.id ? 'bg-primary/10 text-primary' : 'hover:bg-background-100'}
                  `}
                  onClick={() => handleSelect(item)}
                  onMouseEnter={() => setHighlightedIndex(index)}
                  whileHover={{ backgroundColor: 'var(--color-background-100)' }}
                >
                  {item.icon && (
                    <span className="flex-shrink-0 text-tertiary">
                      {item.icon}
                    </span>
                  )}
                  
                  <div className="flex-1 min-w-0">
                    <div className="font-medium">{item.label}</div>
                    {item.description && (
                      <div className="text-xs text-tertiary truncate">
                        {item.description}
                      </div>
                    )}
                  </div>

                  {value?.id === item.id && (
                    <Check size={16} className="flex-shrink-0 text-primary" />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
