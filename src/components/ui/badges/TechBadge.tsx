import { motion } from "framer-motion";
import React from "react";

interface TechBadgeProps {
  icon?: React.ReactElement;
  label: string;
  delay?: number;
  className?: string;
}

export const TechBadge: React.FC<TechBadgeProps> = ({ icon, label, delay = 0, className }) => (
  <motion.div
    className={`flex items-center gap-2 px-4 py-2 rounded-full border border-light text-primary transition-colors ${className || ""}`}
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.5 }}
    whileHover={{ scale: 1.1 }}
  >
    {icon && React.cloneElement(icon as React.ReactElement<any>, { className: "h-4 w-4 text-color-primary" })}
    <span className="text-sm font-medium text-primary">{label}</span>
  </motion.div>
);
