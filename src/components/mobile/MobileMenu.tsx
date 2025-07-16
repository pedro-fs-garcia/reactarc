import { AnimatePresence, motion } from "framer-motion";
import { globalInfo } from "@/data/globalInfo";
import MobileMenuButton from "./MobileMenuButton";
import ThemeSwitcher from "../ui/themeSwitchers/ThemeSwitcher";

interface NavItem {
    href: string;
    label: string;
}

type Props = {
    navItems: NavItem[];
    logoUrl: string;
    isMenuOpen: boolean;
    setIsMenuOpen: CallableFunction;
    children?: React.ReactNode
}

export default function MobileMenu({ navItems, logoUrl, isMenuOpen, setIsMenuOpen, children }: Props) {
    return (
        <AnimatePresence>
            {isMenuOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 lg:hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsMenuOpen(false)}
                    />

                    {/* Mobile Menu */}
                    <motion.div
                        className="fixed top-0 right-0 h-full w-80 max-w-[90vw] 
                                    bg-surface
                                    z-50 lg:hidden border-l border-medium"
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}                        >
                        {/* Botão Menu Mobile - Posição Fixa */}
                        <div className="absolute top-4 right-4">
                            <MobileMenuButton isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
                        </div>
                        <div className="p-6 pt-20">
                            {/* Mobile Logo */}
                            <div className="mb-8 pb-6 border-b border-medium">
                                <img src={logoUrl} alt={globalInfo.name} className="h-8" />
                            </div>

                            {/* Mobile Navigation Links */}
                            <nav className="space-y-2 mb-8">
                                {navItems.map((item, index) => (
                                    <motion.a
                                        key={item.href}
                                        href={item.href}
                                        className="block px-4 py-3 text-primary rounded-lg duration-50 font-medium"
                                        onClick={() => setIsMenuOpen(false)}
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.01*index}}
                                        whileHover={{ x: 10, animationDelay:0.01 }}
                                    >
                                        {item.label}
                                    </motion.a>
                                ))}
                            </nav>

                            <ThemeSwitcher/>

                            {children}

                            {/* Contact Info */}
                            <motion.div
                                className="mt-8 pt-6 border-t border-medium text-center"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.8 }}
                            >
                                <p className="text-tertiary text-sm mb-2">{globalInfo.address.city} - {globalInfo.address.state}</p>
                                <p className="text-color-accent text-sm font-medium">{globalInfo.name}</p>
                            </motion.div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}