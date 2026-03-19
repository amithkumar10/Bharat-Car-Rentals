'use client'

import { Phone, MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function FloatingButtons() {
  const [isFooterVisible, setIsFooterVisible] = useState(false)

  const handleCall = () => {
    window.location.href = 'tel:+919876543210'
  }

  const handleWhatsApp = () => {
    window.open(
      'https://wa.me/919876543210?text=Hi%20I%20want%20to%20rent%20a%20vehicle',
      '_blank'
    )
  }

  useEffect(() => {
    const footer = document.querySelector('footer')
    if (!footer) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting)
      },
      { threshold: 0.2 }
    )

    observer.observe(footer)

    return () => observer.disconnect()
  }, [])

  const buttonStyles = `
    flex-1 max-w-xs flex items-center justify-center gap-2 
    px-4 py-3 rounded shadow-sm transition-all font-semibold border
  `

  return (
    <div className="fixed bottom-0 left-0 w-full flex justify-center gap-1 z-50 md:hidden px-2 pb-2">
      
      {/* WhatsApp Button */}
      <motion.button
        onClick={handleWhatsApp}
        whileTap={{ scale: 0.95 }}
        className={`${buttonStyles} ${
          isFooterVisible
            ? 'text-white bg-black/40 border-white/20 backdrop-blur-sm'
            : 'text-gray-800 bg-white/10 border-white/20 backdrop-blur-sm'
        }`}
      >
        <MessageCircle className="w-5 h-5" />
        WhatsApp
      </motion.button>

      {/* Call Button */}
      <motion.button
        onClick={handleCall}
        whileTap={{ scale: 0.95 }}
        className={`${buttonStyles} ${
          isFooterVisible
            ? 'text-white bg-black/40 border-white/20 backdrop-blur-sm'
            : 'text-gray-800 bg-white/10 border-white/20 backdrop-blur-sm'
        }`}
      >
        <Phone className="w-5 h-5" />
        Call
      </motion.button>

    </div>
  )
}