"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { globalInfo } from "@/data/globalInfo"
import { FaWhatsapp } from "react-icons/fa"

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 2000)

    const tooltipTimer = setTimeout(() => {
      setShowTooltip(false)
    }, 5000)

    return () => {
      clearTimeout(timer)
      clearTimeout(tooltipTimer)
    }
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-50">
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 0 }}
                animate={{ opacity: 1, scale: 1, y: -10 }}
                exit={{ opacity: 0, scale: 0.8, y: 0 }}
                className="absolute bottom-full right-0 mb-2 bg-white rounded-lg shadow-lg p-3 max-w-xs"
              >
                <p className="text-gray-700 text-sm">
                  Fale conosco no WhatsApp!
                </p>
                <div className="absolute bottom-0 right-4 transform translate-y-1/2 rotate-45 w-2 h-2 bg-white"></div>
                <button
                  onClick={() => setShowTooltip(false)}
                  className="absolute top-1 right-1 text-gray-400 hover:text-gray-600 text-xs"
                  aria-label="Fechar dica"
                >
                  ✕
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            className="relative"
          >
            <a
              href={`https://wa.me/${globalInfo.whatsapp}?text=WhatsApp text message`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-16 h-16 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-colors"
              aria-label="Contato via WhatsApp"
              onClick={() => setShowTooltip(false)}
            >
              <FaWhatsapp className="h-8 w-8 text-white" />
            </a>
            <span className="absolute top-0 right-0 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
