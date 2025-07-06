import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

type Props = {
    isMenuOpen: boolean;
    setIsMenuOpen: CallableFunction
}

export default function MobileMenuButton({ isMenuOpen, setIsMenuOpen }: Props) {

    return (
        <motion.button
            className="lg:hidden relative p-2 text-primary
                    transition-colors duration-300 cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            whileTap={{ scale: 0.95 }}
        >
            <AnimatePresence mode="wait">
                {isMenuOpen ? (
                    <motion.div
                        key="close"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <X size={24} />
                    </motion.div>
                ) : (
                    <motion.div
                        key="menu"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Menu size={24} />
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.button>
    )
}