import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle, CheckCircle, Info, X, XCircle,  } from 'lucide-react';

interface AlertProps {
  type?: 'success' | 'warning' | 'error' | 'info' |'default';
  title?: string;
  children: React.ReactNode;
  closable?: boolean;
  onClose?: () => void;
  className?: string;
}

const alertConfig = {
  success: {
    icon: CheckCircle,
    bg: 'bg-success-bg',
    border: 'border-success',
    text: 'text-success',
    iconColor: 'text-success'
  },
  warning: {
    icon: AlertCircle,
    bg: 'bg-warning-bg',
    border: 'border-warning',
    text: 'text-warning',
    iconColor: 'text-warning'
  },
  error: {
    icon: XCircle,
    bg: 'bg-error-bg',
    border: 'border-error',
    text: 'text-error',
    iconColor: 'text-error'
  },
  info: {
    icon: Info,
    bg: 'bg-info-bg',
    border: 'border-info',
    text: 'text-info',
    iconColor: 'text-info'
  },
  default: {
    icon: Info,
    bg: 'bg-transparent',
    border: 'border-primary',
    text: 'text-primary',
    iconColor: 'text-primary'
  }
};

export default function Alert({
  type = 'info',
  title,
  children,
  closable = false,
  onClose,
  className = ''
}: AlertProps) {
  const [isVisible, setIsVisible] = useState(true);
  const config = alertConfig[type];
  const IconComponent = config.icon;

  const handleClose = () => {
    setIsVisible(false);
    onClose?.();
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        className={`
          flex items-start gap-3 p-4 rounded-lg border
          ${config.bg} ${config.border} ${className}
        `}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2 }}
      >
        <IconComponent
          size={20}
          className={`flex-shrink-0 mt-0.5 ${config.iconColor}`}
        />

        <div className="flex-1 min-w-0">
          {title && (
            <h4 className={`font-medium ${config.text}`}>
              {title}
            </h4>
          )}
          <div
            className={`text-sm ${title ? 'mt-1' : ''} ${config.text}`}
            style={{ opacity: 0.8 }}
          >
            {children}
          </div>
        </div>

        {closable && (
          <button
            onClick={handleClose}
            className={`
              flex-shrink-0 p-1 rounded-lg transition-colors
              hover:bg-black/10 focus:outline-none focus:ring-2 focus:ring-current/20
              ${config.text}
            `}
            aria-label="Fechar alerta"
          >
            <X size={16} />
          </button>
        )}
      </motion.div>
    </AnimatePresence>
  );
} 