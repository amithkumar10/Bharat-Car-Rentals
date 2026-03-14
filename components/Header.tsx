'use client'

import { motion } from 'framer-motion'
import { Phone, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState, useEffect } from 'react'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleCall = () => {
    window.location.href = 'tel:+919876543210'
  }

  const handleWhatsApp = () => {
    window.open('https://wa.me/919876543210?text=Hi%20I%20want%20to%20rent%20a%20vehicle', '_blank')
  }

  return (
    <motion.header
      initial={{ y: 0, opacity: 1 }}
      animate={{
        y: 0,
        boxShadow: isScrolled ? '0 10px 30px rgba(0, 0, 0, 0.1)' : '0 0px 0px rgba(0, 0, 0, 0)',
      }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md' : 'bg-background'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
        >
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
            B
          </div>
          <div className="hidden sm:flex flex-col">
            <h1 className="text-xl font-bold text-foreground">Bharat Rentals</h1>
            <p className="text-xs text-muted-foreground">Car & Bike Rentals</p>
          </div>
        </motion.div>

        {/* Navigation Links */}
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:flex items-center gap-8"
        >
          <a
            href="#vehicles"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Fleet
          </a>
          <a
            href="#reviews"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Reviews
          </a>
          <a
            href="#contact"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Contact
          </a>
        </motion.nav>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center gap-3"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleCall}
            className="p-2 rounded-full hover:bg-muted transition-colors"
            title="Call"
          >
            <Phone className="w-5 h-5 text-primary" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleWhatsApp}
            className="p-2 rounded-full hover:bg-muted transition-colors"
            title="WhatsApp"
          >
            <MessageCircle className="w-5 h-5 text-primary" />
          </motion.button>
        </motion.div>
      </div>
    </motion.header>
  )
}
