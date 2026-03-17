'use client'

import { Phone, MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'

export function FloatingButtons() {
  const handleCall = () => {
    window.location.href = 'tel:+919876543210'
  }

  const handleWhatsApp = () => {
    window.open(
      'https://wa.me/919876543210?text=Hi%20I%20want%20to%20rent%20a%20vehicle',
      '_blank'
    )
  }

  return (
    <div className="fixed bottom-0 left-0 w-full border border-primary flex justify-center gap-1 z-50 md:hidden">
      {/* WhatsApp Button */}
      <motion.button
        onClick={handleWhatsApp}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex-1 max-w-xs flex items-center justify-center gap-2 px-4 py-3 bg-white/10 backdrop-blur-sm text-gray-800 rounded shadow-sm hover:shadow-md transition-all font-semibold border border-white/20"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-5 h-5" />
        WhatsApp
      </motion.button>

      {/* Call Button */}
      <motion.button
        onClick={handleCall}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex-1 max-w-xs flex items-center justify-center gap-2 px-4 py-3 bg-white/10 backdrop-blur-sm text-gray-800 rounded shadow-sm hover:shadow-md transition-all font-semibold border border-white/20"
        title="Call us"
      >
        <Phone className="w-5 h-5" />
        Call
      </motion.button>
    </div>
  )
}