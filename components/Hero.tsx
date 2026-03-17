'use client'

import { PhoneIcon, MessageCircle, Star, Car, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { HeroCarousel } from './HeroCarousel'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export function Hero() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/919876543210?text=Hi%20I%20want%20to%20rent%20a%20vehicle', '_blank')
  }

  const handleCall = () => {
    window.location.href = 'tel:+919876543210'
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-muted pt-10">
      {/* Floating background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 left-10 w-60 h-60 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 md:gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Right Content - Hero Image */}
          <motion.div className="order-first md:order-last">
            <HeroCarousel />
          </motion.div>

          {/* Left Content */}
          <motion.div className="space-y-2 md:space-y-8 order-last md:order-first" variants={itemVariants}>
            <div className="space-y-4">
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight"
                variants={itemVariants}
              >
                Premium Car & Bike Rentals in Goa
              </motion.h1>
              <motion.p
                className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed"
                variants={itemVariants}
              >
                Affordable rides. Reliable vehicles. Explore Goa with comfort and freedom.
              </motion.p>
            </div>

            {/* Trust Indicators */}
            <motion.div
              className="flex flex-col gap-3 sm:flex-row md:gap-6 py-6 border-y border-border"
              variants={itemVariants}
            >
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, delay: i * 0.1, repeat: Infinity }}
                    >
                      <Star className="w-4 h-4 fill-primary text-primary" />
                    </motion.div>
                  ))}
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, delay: 4 * 0.1, repeat: Infinity }}
                  >
                    <Star className="w-4 h-4 text-primary" />
                  </motion.div>
                </div>
                <span className="text-sm font-medium text-foreground">Google Rating</span>
                <span className="text-xs font-semibold text-primary ml-2">4.9</span>
              </div>
              <div className="flex items-center gap-3">
                <Car className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-foreground">Wide Fleet</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-foreground">Instant Support</span>
              </div>
            </motion.div>

            {/* Location */}
            <motion.div
              className="flex items-center gap-3 mt-4 text-muted-foreground text-sm"
              variants={itemVariants}
            >
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c-4.5-4.5-7-7.5-7-11a7 7 0 0 1 14 0c0 3.5-2.5 6.5-7 11z" />
                <circle cx="12" cy="10" r="2" />
              </svg>
              <span>Madgaon Railway Station, Sanscar Society, Goa</span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div className="flex flex-col sm:flex-row gap-4" variants={itemVariants}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1"
              >
                <Button
                  size="lg"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full font-semibold"
                  onClick={() => document.getElementById('vehicles')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Car className="w-5 h-5 mr-2" />
                  View Vehicles
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-2 border-primary text-primary hover:bg-primary/10 rounded-full font-semibold"
                  onClick={handleWhatsApp}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Us
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}