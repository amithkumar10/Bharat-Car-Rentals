'use client'

import { PhoneCall, MessageCircle, Fuel, Users, Gauge, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import type { Vehicle } from '@/data/vehicles'

interface VehicleCardProps {
  vehicle: Vehicle
  index?: number
}

export function VehicleCard({ vehicle, index = 0 }: VehicleCardProps) {
  const handleCall = () => {
    window.location.href = 'tel:+919876543210'
  }

  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/919876543210?text=Hi%20I%20want%20to%20rent%20${encodeURIComponent(vehicle.name)}`,
      '_blank'
    )
  }

  // Map spec index to a relevant icon
  const specIcons = [
    <Fuel className="w-3 h-3" />,
    <Users className="w-3 h-3" />,
    <Gauge className="w-3 h-3" />,
  ]

  return (
    <>
      {/* Load distinctive fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap');
        .vc-name { font-family: 'Syne', sans-serif; }
        .vc-body { font-family: 'DM Sans', sans-serif; }
      `}</style>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
        whileHover={{ y: -6 }}
        className="vc-body group relative bg-card rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-border/50"
      >
        {/* Image */}
        <div className="relative h-52 overflow-hidden bg-muted">
          <img
            src={vehicle.image}
            alt={vehicle.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          {/* Vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

          {/* Price floated over image bottom-left */}
          <div className="absolute bottom-3 left-4">
            <span className="vc-name text-2xl font-extrabold text-white drop-shadow-md tracking-tight">
              {vehicle.price}
            </span>
            <span className="vc-body text-white/70 text-xs font-medium ml-1">/day</span>
          </div>

         
        </div>

        {/* Content */}
        <div className="p-5 space-y-4">
          {/* Name + description */}
          <div>
            <h3 className="vc-name text-xl font-bold text-foreground leading-snug tracking-tight">
              {vehicle.name}
            </h3>
            {vehicle.description && (
              <p className="vc-body text-muted-foreground text-sm mt-1 leading-relaxed line-clamp-2">
                {vehicle.description}
              </p>
            )}
          </div>

          {/* Specs */}
          {vehicle.specs && vehicle.specs.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {vehicle.specs.map((spec, idx) => (
                <span
                  key={idx}
                  className="vc-body inline-flex items-center gap-1.5 px-3 py-1 border border-border text-muted-foreground text-xs font-medium rounded-full"
                >
                  <span className="text-primary">{specIcons[idx % specIcons.length]}</span>
                  {spec}
                </span>
              ))}
            </div>
          )}

          {/* Divider */}
          <div className="border-t border-border/60" />

          {/* CTA Row */}
          <div className="flex items-center gap-2 pt-0.5">
            {/* WhatsApp — primary */}
            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={handleWhatsApp}
              className="vc-body flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground text-sm font-semibold rounded-xl py-2.5 hover:bg-primary/90 transition-colors"
            >
              {/* WhatsApp SVG icon */}
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Book on WhatsApp
            </motion.button>

            {/* Call — icon only */}
            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={handleCall}
              className="flex items-center justify-center w-11 h-10 rounded-xl border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors"
              aria-label="Call now"
            >
              <PhoneCall className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </>
  )
}