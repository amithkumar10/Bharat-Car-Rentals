'use client'

import { Phone, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function CTA() {
  const handleCall = () => {
    window.location.href = 'tel:+919876543210'
  }

  const handleWhatsApp = () => {
    window.open('https://wa.me/919876543210?text=Hi%20I%20want%20to%20book%20a%20vehicle', '_blank')
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/95 to-primary bg-cover bg-center relative overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

     

      <div className="relative z-10 max-w-8xl mx-auto text-center space-y-8">
        <div className=" px-6 py-2 w-full min-w-full">
         <div className='flex  items-center gap-30'>
           <img src="/Ready-img.png" className='h-60' alt="" />
           <div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground">
            Ready to Explore Goa?
          </h2>
           <p className="text-lg mt-5 md:text-xl text-primary-foreground/90">
            Call us now or message on WhatsApp to reserve your ride today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Button
            size="lg"
            onClick={handleCall}
            className="bg-white text-primary hover:bg-gray-100 rounded-full font-semibold text-lg px-8"
          >
            <Phone className="w-5 h-5 mr-2" />
            Call Now: +91 98765 43210
          </Button>
          <Button
            size="lg"
            onClick={handleWhatsApp}
            className="bg-white/20 text-white hover:bg-white/30 border-2 border-white rounded-full font-semibold text-lg px-8"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Chat on WhatsApp
          </Button>
        </div>
         <div className="pt-8 text-primary-foreground/80 text-sm">
          <p>Available 24/7 • Quick Response Time • Best Rates in Goa</p>
        </div>
           </div>
         </div>
         
        </div>

        {/* CTA Buttons */}
        

        {/* Additional info */}
       
      </div>
    </section>
  )
}
