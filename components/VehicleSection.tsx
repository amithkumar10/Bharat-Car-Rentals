'use client'

import { VehicleCard } from './VehicleCard'
import { getCars, getBikes } from '@/data/vehicles'

export function VehicleSection() {
  const cars = getCars()
  const bikes = getBikes()

  return (
    <section id="vehicles" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Explore Our Fleet
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our wide selection of well-maintained cars and bikes
          </p>
        </div>

        {/* Cars Section */}
        <div className="space-y-8">
          <h3 className="text-3xl font-bold text-foreground">Featured Cars</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cars.map((vehicle, idx) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} index={idx} />
            ))}
          </div>
        </div>

        {/* Bikes Section */}
        <div className="space-y-8">
          <h3 className="text-3xl font-bold text-foreground">Featured Bikes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bikes.map((vehicle, idx) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
