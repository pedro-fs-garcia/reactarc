import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface CopyTextProps {
  text: string;
  className?: string;
  showLabel?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export default function CopyText({ 
  text, 
  className = '', 
  showLabel = true,
  size = 'md' 
}: CopyTextProps) {
  const [copied, setCopied] = useState(false);

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2.5 text-sm',
    lg: 'px-5 py-3 text-base'
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy to clipboard:', err);
      // Fallback for older browsers
      const textarea = document.createElement('textarea');
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className={`group relative ${className}`}>
      <div className={`
        flex items-center gap-3 
        bg-card border border-light rounded-lg 
        ${sizeClasses[size]}
        hover:border-medium hover:shadow-md 
        transition-all duration-200
        focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary
      `}>
        {/* Text content */}
        <div className="flex-1 min-w-0">
          <span 
            className="font-mono text-primary break-all" 
            title={text}
          >
            {text}
          </span>
        </div>

        {/* Copy button */}
        <motion.button
          onClick={handleCopy}
          className={`
            flex-shrink-0 p-2 rounded-md
            bg-background-100 hover:bg-accent/10
            text-tertiary hover:text-accent
            transition-all duration-200
            focus:outline-none focus:ring-2 focus:ring-accent/20
            group-hover:bg-accent/5
          `}
          aria-label="Copy to clipboard"
          type="button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <AnimatePresence mode="wait">
            {copied ? (
              <motion.div
                key="check"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: 180 }}
                transition={{ duration: 0.2 }}
              >
                <Check size={16} className="text-success" />
              </motion.div>
            ) : (
              <motion.div
                key="copy"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Copy size={16} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Success message */}
      <AnimatePresence>
        {copied && showLabel && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="absolute -top-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="bg-success text-on-primary text-xs px-2 py-1 rounded-md shadow-lg whitespace-nowrap">
              Copied to clipboard!
            </div>
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-success"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
