'use client'

import { Phone, MapPin, MessageCircle, Clock } from 'lucide-react'

export function Contact() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Get in Touch</h2>
          <p className="text-lg text-muted-foreground">
            Find us easily and connect with our team
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">Phone</h3>
                  <a
                    href="tel:+919876543210"
                    className="text-primary hover:underline font-medium"
                  >
                    +91 98765 43210
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">WhatsApp</h3>
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-medium"
                  >
                    Message us on WhatsApp
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">Address</h3>
                  <p className="text-muted-foreground">
                    Bharat Car & Bike Rentals<br />
                    Panjim, Goa 403001<br />
                    India
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">Hours</h3>
                  <p className="text-muted-foreground">
                    Monday - Sunday<br />
                    24/7 Available
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg border border-border">
           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3483.1724041005386!2d73.96814837511924!3d15.266116085302997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfb37837c90d4f%3A0x11fdbd22a8b73fa9!2sBharat%20Car%20And%20Bike%20Rental%20Service%20-%20Goa!5e1!3m2!1sen!2sin!4v1773507365639!5m2!1sen!2sin" width="600" height="450" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
