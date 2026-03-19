'use client'

import { Phone, MapPin, MessageCircle, Clock } from 'lucide-react'

export function Contact() {
  return (
<section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-background">
  <div className="max-w-7xl mx-auto">

    {/* Header */}
    <div className="text-center mb-10 sm:mb-12 space-y-3 sm:space-y-4">
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground">
        Get in Touch
      </h2>
      <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
        Find us easily and connect with our team
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">

      {/* Contact Info */}
      <div className="space-y-6 sm:space-y-8">

        <div className="space-y-5 sm:space-y-6">

          {/* Phone */}
          <div className="flex gap-3 sm:gap-4">
            <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            </div>
            <div className="space-y-1">
              <h3 className="text-sm sm:text-base font-semibold text-foreground">
                Phone
              </h3>
              <a
                href="tel:+919876543210"
                className="text-sm sm:text-base text-primary hover:underline font-medium"
              >
                +91 98765 43210
              </a>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="flex gap-3 sm:gap-4">
            <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            </div>
            <div className="space-y-1">
              <h3 className="text-sm sm:text-base font-semibold text-foreground">
                WhatsApp
              </h3>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm sm:text-base text-primary hover:underline font-medium"
              >
                Message us on WhatsApp
              </a>
            </div>
          </div>

          {/* Address */}
          <div className="flex gap-3 sm:gap-4">
            <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            </div>
            <div className="space-y-1">
              <h3 className="text-sm sm:text-base font-semibold text-foreground">
                Address
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Bharat Car & Bike Rentals<br />
                Panjim, Goa 403001<br />
                India
              </p>
            </div>
          </div>

          {/* Hours */}
          <div className="flex gap-3 sm:gap-4">
            <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            </div>
            <div className="space-y-1">
              <h3 className="text-sm sm:text-base font-semibold text-foreground">
                Hours
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Monday - Sunday<br />
                24/7 Available
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Map */}
      <div className="relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg border border-border">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3483.1724041005386!2d73.96814837511924!3d15.266116085302997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfb37837c90d4f%3A0x11fdbd22a8b73fa9!2sBharat%20Car%20And%20Bike%20Rental%20Service%20-%20Goa!5e1!3m2!1sen!2sin!4v1773507365639!5m2!1sen!2sin"
          className="w-full h-full"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </div>

    </div>
  </div>
</section>
  )
}
