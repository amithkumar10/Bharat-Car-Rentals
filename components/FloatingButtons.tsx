'use client'

import { Phone, MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'

export function FloatingButtons() {
  const handleCall = () => {
    window.location.href = 'tel:+919876543210'
  }

  const handleWhatsApp = () => {
    window.open('https://wa.me/919876543210?text=Hi%20I%20want%20to%20rent%20a%20vehicle', '_blank')
  }

  return (
    <div className="fixed bottom-6 right-6 flex gap-4 z-50">
      {/* WhatsApp Button */}
      <motion.button
        onClick={handleWhatsApp}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center justify-center w-14 h-14 bg-primary text-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>

      {/* Call Button */}
      <motion.button
        onClick={handleCall}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center justify-center w-14 h-14 bg-primary text-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
        title="Call us"
      >
        <Phone className="w-6 h-6" />
      </motion.button>
    </div>
  )
}
