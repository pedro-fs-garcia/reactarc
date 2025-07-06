import { motion } from "framer-motion";
import React from "react";

import { type MotionProps } from "framer-motion";

interface AnimatedTextProps extends MotionProps {
  children: string;
  delay?: number;
  className?: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ children, delay = 0, className, ...props }) => {
  const letters = Array.from(children);

  return (
    <motion.span className={`inline-block ${className || ""}`} {...props}>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: delay + index * 0.05,
            duration: 0.6,
            ease: "easeOut",
          }}
          className="inline-block"
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.span>
  );
};
