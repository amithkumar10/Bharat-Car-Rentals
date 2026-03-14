'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

interface Review {
  id: string
  author: string
  rating: number
  text: string
}

const reviews: Review[] = [
  {
    id: '1',
    author: 'Rajesh Kumar',
    rating: 5,
    text: 'Excellent service! The vehicle was clean and well-maintained. Driver support was responsive. Highly recommended!',
  },
  {
    id: '2',
    author: 'Priya Sharma',
    rating: 5,
    text: 'Amazing experience exploring Goa. Affordable rates and professional service. Will definitely rent again!',
  },
  {
    id: '3',
    author: 'Amit Patel',
    rating: 5,
    text: 'Great fleet of vehicles. The Innova was perfect for our family trip. Excellent value for money.',
  },
  {
    id: '4',
    author: 'Sarah Johnson',
    rating: 5,
    text: 'Best car rental in Goa! Quick booking process and friendly team. Strongly recommended.',
  },
  {
    id: '5',
    author: 'Vikram Singh',
    rating: 5,
    text: 'Fantastic bikes! Perfect for exploring the coastal roads of Goa. Worth every penny!',
  },
  {
    id: '6',
    author: 'Neha Gupta',
    rating: 5,
    text: 'Reliable and trustworthy. No hidden charges. Great customer service throughout our rental period.',
  },
]

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="flex-shrink-0 w-80 bg-card rounded-2xl p-6 shadow-lg border border-border">
      <div className="space-y-4">
        <div className="flex gap-1">
          {[...Array(review.rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-primary text-primary" />
          ))}
        </div>
        <p className="text-foreground leading-relaxed">{review.text}</p>
        <div className="pt-4 border-t border-border">
          <p className="font-semibold text-foreground">{review.author}</p>
          <div className="flex items-center gap-2 mt-2">
            <img
              src="https://www.google.com/favicon.ico"
              alt="Google"
              className="w-4 h-4"
            />
            <span className="text-xs text-muted-foreground">Google Review</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export function ReviewsCarousel() {
  const reviewRows = [
    reviews.slice(0, 3),
    reviews.slice(3, 6),
    reviews.slice(0, 3),
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Join thousands of happy travelers who trusted us for their Goa adventure
          </p>
        </div>

        {/* Review Rows */}
        <div className="space-y-6">
          {reviewRows.map((row, rowIndex) => (
            <div key={rowIndex} className="relative h-96 overflow-hidden">
              <motion.div
                className="flex gap-6 h-full"
                animate={{
                  x: rowIndex % 2 === 0 ? [0, -1920] : [0, 1920],
                }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              >
                {/* Original set */}
                {row.map((review) => (
                  <ReviewCard key={`original-${review.id}`} review={review} />
                ))}
                {/* Duplicate set for seamless loop */}
                {row.map((review) => (
                  <ReviewCard key={`duplicate-${review.id}`} review={review} />
                ))}
              </motion.div>

              {/* Gradient edges */}
              <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-muted to-transparent pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-muted to-transparent pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
