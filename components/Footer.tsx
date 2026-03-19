'use client'

import { Phone, MessageCircle, MapPin } from 'lucide-react'

export function Footer() {
  return (
   <footer className="bg-secondary text-secondary-foreground">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">

    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8 mb-10 sm:mb-12">
      
      {/* Brand */}
      <div className="space-y-3 sm:space-y-4">
        <h3 className="text-lg sm:text-xl font-bold">Bharat Rentals</h3>
        <p className="text-xs sm:text-sm text-secondary-foreground/80">
          Premium car and bike rentals for your Goa adventure
        </p>
      </div>

      {/* Quick Links */}
      <div className="space-y-3 sm:space-y-4">
        <h4 className="text-sm sm:text-base font-semibold">Quick Links</h4>
        <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
          <li>
            <a href="#vehicles" className="hover:text-primary transition-colors">
              Our Fleet
            </a>
          </li>
          <li>
            <a href="#reviews" className="hover:text-primary transition-colors">
              Reviews
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-primary transition-colors">
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Contact */}
      <div className="space-y-3 sm:space-y-4">
        <h4 className="text-sm sm:text-base font-semibold">Contact</h4>
        <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
          
          <li className="flex items-center gap-2">
            <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
            <a href="tel:+919876543210" className="hover:text-primary">
              +91 98765 43210
            </a>
          </li>

          <li className="flex items-center gap-2">
            <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              WhatsApp
            </a>
          </li>

          <li className="flex items-start gap-2">
            <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0 mt-0.5" />
            <span className="text-xs sm:text-sm">
              Panjim, Goa 403001, India
            </span>
          </li>

        </ul>
      </div>

      {/* Hours */}
      <div className="space-y-3 sm:space-y-4">
        <h4 className="text-sm sm:text-base font-semibold">Hours</h4>
        <div className="text-xs sm:text-sm space-y-1.5 sm:space-y-2">
          <p>Monday - Sunday</p>
          <p className="text-primary font-semibold">24/7 Available</p>
          <p className="text-secondary-foreground/80 text-[10px] sm:text-xs pt-1 sm:pt-2">
            Instant response on WhatsApp
          </p>
        </div>
      </div>

    </div>

    {/* Divider */}
    <div className="border-t border-secondary-foreground/20 py-6 sm:py-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm text-secondary-foreground/80">
        
        <p>&copy; 2024 Bharat Car & Bike Rentals. All rights reserved.</p>

        <div className="flex gap-4 sm:gap-6">
          <a href="#" className="hover:text-primary transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            Terms of Service
          </a>
        </div>

      </div>
    </div>

  </div>
</footer>
  )
}
