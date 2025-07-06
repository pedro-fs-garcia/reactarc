"use client"

import { globalInfo } from "@/data/globalInfo";
import { motion } from "framer-motion"
import { ArrowRight } from 'lucide-react'
import { FaWhatsapp } from "react-icons/fa";


interface CtaButtonProps {
    text: string
    message?: string
    primaryIcon?: boolean
    secondaryIcon?: boolean
    variant?: "primary" | "secondary" | "dark"
    size?: "sm" | "md" | "lg" | "xl"
    hoverScale?: number
    hoverY?: number
    tapScale?: number
    className?: string
}

const variants = {
    primary: "bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-400 hover:to-amber-400 text-slate-900 shadow-lg shadow-yellow-500/25 hover:shadow-yellow-500/40",
    dark: "bg-slate-900/90 text-yellow-400 hover:text-yellow-300 transition-colors duration-300 border border-yellow-400/30 hover:border-yellow-400/50 backdrop-blur-sm hover:bg-slate-800/90 hidden sm:inline-flex",
    secondary: "border-2 border-yellow-400/40 text-yellow-400 hover:bg-yellow-400/10 hover:border-yellow-400/60 backdrop-blur-sm hover:shadow-lg hover:shadow-yellow-400/20",
}

const sizes = {
    sm: "px-3 py-2 text-sm gap-1.5 min-h-[36px]",
    md: "px-4 py-2.5 text-sm sm:text-base gap-2 min-h-[40px]",
    lg: "px-6 py-3 text-base sm:text-lg gap-2.5 min-h-[48px]",
    xl: "px-8 py-4 text-lg sm:text-xl gap-3 min-h-[56px]"
}

const iconSizes = {
    sm: "h-3.5 w-3.5 sm:h-4 sm:w-4",
    md: "h-4 w-4",
    lg: "h-4 w-4 sm:h-5 sm:w-5",
    xl: "h-5 w-5 sm:h-6 sm:w-6"
}

const textSizes = {
    sm: "text-xs sm:text-sm",
    md: "text-sm sm:text-base",
    lg: "text-sm sm:text-base md:text-lg",
    xl: "text-base sm:text-lg md:text-xl"
}


export default function CtaButton({
    text,
    message = "Mensagem Call To Action",
    variant = "primary",
    size = "lg",
    primaryIcon = true,
    secondaryIcon = true,
    hoverScale = 1.05,
    hoverY = -2,
    tapScale = 0.95,
    className = ""
}: CtaButtonProps) {

    const action = () => {
        window.open(generateUrl(), '_blank');
    }

    const generateUrl = () => {
        const phone = globalInfo.whatsapp;
        const url = new URL(`https://wa.me/${phone}`);
        url.searchParams.append('text', message);
        return url.toString();
    }

    const renderPrimaryIcon = () => {
        return (
            <motion.div
                className="flex-shrink-0"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
            >
                <FaWhatsapp className={iconSizes[size]} />
            </motion.div>
        )
    }

    const renderSecondaryIcon = () => {
        return (
            <motion.div
                className="flex-shrink-0"
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
                <ArrowRight className={iconSizes[size]} />
            </motion.div>
        )
    }

    const baseClasses = `
        inline-flex items-center justify-center font-semibold rounded-lg 
        transition-all duration-300 cursor-pointer select-none
        w-full sm:w-auto max-w-full
        ${variants[variant]} 
        ${sizes[size]}
        ${className}
    `.trim();


    return (
        <motion.a
            // href={generateUrl()}
            onClick={() => { action() }}
            target="_blank"
            rel="noopener noreferrer"
            className={baseClasses}
            whileHover={{ scale: hoverScale, y: hoverY }}
            whileTap={{ scale: tapScale }}
        >
            {primaryIcon && renderPrimaryIcon()}

            <span className={`text-center leading-tight ${textSizes[size]} px-1`}>
                {text}
            </span>

            {secondaryIcon && renderSecondaryIcon()}
        </motion.a>
    )
}