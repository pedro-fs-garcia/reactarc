import React, { useState } from "react";
import { motion } from "framer-motion";
import MobileMenuButton from "@/components/mobile/MobileMenuButton";
import MobileMenu from "@/components/mobile/MobileMenu";
import { globalInfo } from "@/data/globalInfo";
import ThemeSwitcher from "@/components/ui/themeSwitchers/ThemeSwitcher";
import ThemeDropdown from "../ui/themeSwitchers/ThemeDropdown";

interface NavItem {
  href: string
  label: string
}

type HeaderProps = {
  navItems: NavItem []
  logoUrl: string
  children?: React.ReactNode
}

export default function Header({navItems, logoUrl, children}:HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <motion.header
        className={`fixed bg-surface top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-light shadow-theme-md backdrop-blur-xl`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="/"
              className="flex items-center group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative">
                <img
                  src={logoUrl}
                  alt={`${globalInfo.name}`}
                  className="h-10 md:h-12 transition-all duration-300 group-hover:brightness-110"
                />
                {/* Efeito de brilho no hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded" />
              </div>
            </motion.a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="relative text-primary hover:text-accent transition-all duration-300 font-medium group py-2"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  whileHover={{ y: -2 }}
                >
                  {item.label}
                  {/* Underline effect */}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-primary group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
              {children}
              <ThemeSwitcher/>
              <div className="ml-4 w-36">
                <ThemeDropdown />
              </div>
            </nav>
            <MobileMenuButton isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}></MobileMenuButton>
          </div>
        </div>
      </motion.header>

      {/* Mobile Navigation Overlay */}
      <MobileMenu 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
        navItems={navItems} 
        logoUrl={logoUrl}
      />
    </>
  )
}
