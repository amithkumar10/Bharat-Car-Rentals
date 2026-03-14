export type Vehicle = {
  id: string
  name: string
  type: 'car' | 'bike'
  price: string
  image: string
  specs?: string[]
  description?: string
}

export const vehicles: Vehicle[] = [
  {
    id: 'innova',
    name: 'Toyota Innova',
    type: 'car',
    price: '₹2,500/day',
    image: '/vehicles/innova.jpg',
    specs: ['7 Seater', 'AC', 'Power Steering'],
    description: 'Perfect for family trips and group travel',
  },
  {
    id: 'swift',
    name: 'Maruti Swift',
    type: 'car',
    price: '₹1,500/day',
    image: '/vehicles/swift.jpg',
    specs: ['5 Seater', 'AC', 'Automatic'],
    description: 'Compact and fuel-efficient city car',
  },
  {
    id: 'fortuner',
    name: 'Toyota Fortuner',
    type: 'car',
    price: '₹3,500/day',
    image: '/vehicles/fortuner.jpg',
    specs: ['7 Seater', 'AC', '4WD'],
    description: 'Premium SUV for comfortable journeys',
  },
  {
    id: 'scorpio',
    name: 'Mahindra Scorpio',
    type: 'car',
    price: '₹2,000/day',
    image: '/vehicles/scorpio.jpg',
    specs: ['7 Seater', 'AC', 'Power Windows'],
    description: 'Rugged SUV for adventure seekers',
  },
  {
    id: 'activa',
    name: 'Honda Activa',
    type: 'bike',
    price: '₹600/day',
    image: '/vehicles/activa.jpg',
    specs: ['110cc', 'Automatic', 'Fuel Efficient'],
    description: 'Most reliable 2-wheeler for daily commute',
  },
  {
    id: 'splendor',
    name: 'Hero Splendor',
    type: 'bike',
    price: '₹500/day',
    image: '/vehicles/splendor.jpg',
    specs: ['100cc', 'Manual', 'Great Mileage'],
    description: 'Affordable and easy to ride',
  },
  {
    id: 'bullet',
    name: 'Royal Enfield Bullet',
    type: 'bike',
    price: '₹1,200/day',
    image: '/vehicles/bullet.jpg',
    specs: ['350cc', 'Manual', 'Classic Design'],
    description: 'Iconic bike for long rides and exploration',
  },
  {
    id: 'duke',
    name: 'KTM Duke 250',
    type: 'bike',
    price: '₹1,500/day',
    image: '/vehicles/duke.jpg',
    specs: ['250cc', 'Manual', 'Sports Bike'],
    description: 'High-performance bike for enthusiasts',
  },
]

export const getCars = () => vehicles.filter((v) => v.type === 'car')
export const getBikes = () => vehicles.filter((v) => v.type === 'bike')
