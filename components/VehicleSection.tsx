'use client'

import { VehicleCard } from './VehicleCard'
import { getCars, getBikes } from '@/data/vehicles'

export function VehicleSection() {
  const cars = getCars()
  const bikes = getBikes()

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Heading */}
        <div className="text-center space-y-3">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground">
            Explore Our Fleet
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
            Choose from our wide selection of well-maintained cars and bikes
          </p>
        </div>

        {/* Cars Section */}
        <div className="space-y-6">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
            Featured Cars
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {cars.map((vehicle, idx) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} index={idx} />
            ))}
          </div>
        </div>

        {/* Bikes Section */}
        <div className="space-y-6">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
            Featured Bikes
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {bikes.map((vehicle, idx) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} index={idx} />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}