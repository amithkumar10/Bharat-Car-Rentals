'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const features = [
  {
    icon: '🔧',
    title: 'Well Maintained Vehicles',
    description: 'Regularly serviced and inspected for your safety on every trip.',
  },
  {
    icon: '💰',
    title: 'Affordable Pricing',
    description: 'Competitive rates with zero hidden charges or surprises.',
  },
  {
    icon: '💬',
    title: 'Quick WhatsApp Support',
    description: '24/7 instant assistance via WhatsApp whenever you need us.',
  },
  {
    icon: '⭐',
    title: 'Trusted by Travelers',
    description: 'Thousands of happy customers explore Goa with us every year.',
  },
]

export function About() {
  const [expanded, setExpanded] = useState(false)
  return (
   <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-background">
  <div className="max-w-7xl mx-auto space-y-10 sm:space-y-14">

    {/* Header */}
    <div className="text-center space-y-3 sm:space-y-4">
      <h2 className="text-2xl md:text-5xl font-bold text-foreground">
        Why Choose Bharat Car & Bike Rentals
      </h2>
      <p className="text-sm md:text-lg text-muted-foreground max-w-xl sm:max-w-2xl mx-auto">
        Experience premium vehicle rentals with reliability, affordability, and exceptional service
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-center">

      {/* Left: Feature Cards */}
      <div className="grid md:grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="group relative p-3 rounded-2xl bg-card border border-border hover:shadow-md transition-all duration-300 flex flex-col gap-2 sm:gap-3"
          >
            <div>
              <h3 className="text-sm sm:text-base font-bold text-foreground leading-tight">
                {feature.title}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground mt-0.5 leading-snug">
                {feature.description}
              </p>
            </div>

            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </div>
        ))}
      </div>

      {/* Right: Image */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <img
          src="/image12.png"
          alt="Premium rental car in Goa"
          className="w-full h-56 sm:h-full object-cover"
        />
      </motion.div>
    </div>

    {/* Bottom Banner */}
   <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-primary/10 to-primary/5 p-5 sm:p-8 md:p-12 border border-primary/20">
  <div className="relative z-10 space-y-3 sm:space-y-4 max-w-3xl">
    
    <h3 className="text-xl md:text-3xl font-bold text-foreground">
      Our Commitment
    </h3>

    <p
      className={`text-sm md:text-base text-foreground  
      ${expanded ? '' : 'line-clamp-3'} md:line-clamp-none`}
    >
      At Bharat Car & Bike Rentals, we believe every traveler deserves reliable, affordable,
      and hassle-free vehicle rentals. With a diverse fleet of meticulously maintained vehicles
      and a 24/7 support team, we're committed to making your Goa adventure comfortable,
      memorable, and safe — whether you're cruising coastal roads or navigating the city.
    </p>

    {/* Mobile only button */}
    <button
      onClick={() => setExpanded(!expanded)}
      className="md:hidden text-xs font-medium text-primary underline underline-offset-2"
    >
      {expanded ? 'Read Less' : 'Read More'}
    </button>

  </div>
</div>

  </div>
</section>
  )
}