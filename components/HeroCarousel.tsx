'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const slides = [
  { src: '/Hero-img.png',  alt: 'Hero 1' },
  { src: '/Hero-img2.png', alt: 'Hero 2' },
  { src: '/Hero-img3.png', alt: 'Hero 3' },
]

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

const slideVariants = {
  enter:  (dir: number) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
  center: { x: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeInOut' } },
  exit:   (dir: number) => ({ x: dir > 0 ? '-100%' : '100%', opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }),
}

export function HeroCarousel() {
  const [current, setCurrent]     = useState(0)
  const [direction, setDirection] = useState(1)

  const next = useCallback(() => {
    setDirection(1)
    setCurrent(prev => (prev + 1) % slides.length)
  }, [])

  // ✅ This is what was missing — auto-advance every 3.5s
  useEffect(() => {
    const timer = setInterval(next, 3500)
    return () => clearInterval(timer)   // cleanup on unmount
  }, [next])

  return (
    <motion.div variants={itemVariants} className="w-full">
      <div className="relative w-full max-w-2xl mx-auto">

        {/* ✅ Fixed-height clipping container */}
        <div className="relative h-64 w-full overflow-hidden">
          <AnimatePresence custom={direction} initial={false}>
            <motion.img
              key={current}                   // ✅ key change triggers animation
              src={slides[current].src}
              alt={slides[current].alt}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0 w-full h-full object-cover"
              draggable={false}
            />
          </AnimatePresence>
        </div>

    

      </div>
    </motion.div>
  )
}