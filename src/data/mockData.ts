export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: string;
  brand: string;
  imageUrl: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  petType: string[];
  tags: string[];
}

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  experience: number;
  rating: number;
  reviewCount: number;
  imageUrl: string;
  consultationFee: number;
  videoConsultationFee: number;
  availability: string[];
  bio: string;
  location: string;
}

export interface BoardingProvider {
  id: string;
  name: string;
  type: 'sitter' | 'boarding_house' | 'clinic';
  location: string;
  rating: number;
  reviewCount: number;
  imageUrl: string;
  pricePerDay: number;
  services: string[];
  description: string;
  verified: boolean;
  emergencyContact: boolean;
  liveTracking: boolean;
}

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Premium Dog Food - Chicken & Rice',
    description: 'High-quality nutrition for adult dogs with real chicken and brown rice',
    price: 24.99,
    originalPrice: 29.99,
    category: 'Food',
    brand: 'PetNutrition',
    imageUrl: 'https://images.pexels.com/photos/4790351/pexels-photo-4790351.jpeg',
    rating: 4.5,
    reviewCount: 128,
    inStock: true,
    petType: ['dog'],
    tags: ['premium', 'adult', 'chicken'],
  },
  {
    id: '2',
    name: 'Interactive Cat Feeder Toy',
    description: 'Slow feeding puzzle toy that keeps cats entertained while eating',
    price: 18.99,
    category: 'Toys',
    brand: 'FelineFun',
    imageUrl: 'https://images.pexels.com/photos/7210754/pexels-photo-7210754.jpeg',
    rating: 4.7,
    reviewCount: 89,
    inStock: true,
    petType: ['cat'],
    tags: ['interactive', 'puzzle', 'feeding'],
  },
  {
    id: '3',
    name: 'Professional Dog Grooming Kit',
    description: 'Complete grooming set with clippers, brushes, and accessories',
    price: 45.99,
    originalPrice: 55.99,
    category: 'Grooming',
    brand: 'GroomPro',
    imageUrl: 'https://images.pexels.com/photos/6568461/pexels-photo-6568461.jpeg',
    rating: 4.3,
    reviewCount: 203,
    inStock: true,
    petType: ['dog', 'cat'],
    tags: ['professional', 'grooming', 'complete'],
  },
  {
    id: '4',
    name: 'Natural Bird Seed Mix',
    description: 'Premium blend of seeds and nuts for wild and pet birds',
    price: 12.99,
    category: 'Food',
    brand: 'WildNature',
    imageUrl: 'https://images.pexels.com/photos/1661535/pexels-photo-1661535.jpeg',
    rating: 4.6,
    reviewCount: 156,
    inStock: false,
    petType: ['bird'],
    tags: ['natural', 'premium', 'wild'],
  },
];

export const mockDoctors: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Sarah Johnson',
    specialty: 'Small Animal Veterinarian',
    experience: 8,
    rating: 4.8,
    reviewCount: 234,
    imageUrl: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg',
    consultationFee: 65,
    videoConsultationFee: 45,
    availability: ['Mon', 'Wed', 'Fri'],
    bio: 'Experienced veterinarian specializing in cats and dogs with focus on preventive care.',
    location: 'Downtown Veterinary Clinic',
  },
  {
    id: '2',
    name: 'Dr. Michael Chen',
    specialty: 'Exotic Animal Specialist',
    experience: 12,
    rating: 4.9,
    reviewCount: 187,
    imageUrl: 'https://images.pexels.com/photos/6749778/pexels-photo-6749778.jpeg',
    consultationFee: 85,
    videoConsultationFee: 60,
    availability: ['Tue', 'Thu', 'Sat'],
    bio: 'Expert in exotic pets including birds, reptiles, and small mammals.',
    location: 'Exotic Pet Care Center',
  },
  {
    id: '3',
    name: 'Dr. Emily Rodriguez',
    specialty: 'Emergency Veterinarian',
    experience: 6,
    rating: 4.7,
    reviewCount: 298,
    imageUrl: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg',
    consultationFee: 75,
    videoConsultationFee: 50,
    availability: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    bio: 'Emergency care specialist available for urgent pet health situations.',
    location: '24/7 Emergency Pet Hospital',
  },
];

export const mockBoardingProviders: BoardingProvider[] = [
  {
    id: '1',
    name: 'Happy Paws Boarding',
    type: 'boarding_house',
    location: 'Central Park Area',
    rating: 4.6,
    reviewCount: 142,
    imageUrl: 'https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg',
    pricePerDay: 35,
    services: ['24/7 care', 'Daily walks', 'Grooming', 'Playtime', 'Medical care'],
    description: 'Professional boarding facility with spacious play areas and experienced staff.',
    verified: true,
    emergencyContact: true,
    liveTracking: false,
  },
  {
    id: '2',
    name: 'Maria\'s Pet Sitting',
    type: 'sitter',
    location: 'Riverside District',
    rating: 4.9,
    reviewCount: 89,
    imageUrl: 'https://images.pexels.com/photos/1458925/pexels-photo-1458925.jpeg',
    pricePerDay: 25,
    services: ['Home visits', 'Dog walking', 'Feeding', 'Medication'],
    description: 'Caring pet sitter with 5 years experience providing in-home pet care.',
    verified: true,
    emergencyContact: true,
    liveTracking: true,
  },
  {
    id: '3',
    name: 'VetCare Boarding Clinic',
    type: 'clinic',
    location: 'Medical District',
    rating: 4.4,
    reviewCount: 203,
    imageUrl: 'https://images.pexels.com/photos/6816862/pexels-photo-6816862.jpeg',
    pricePerDay: 45,
    services: ['Veterinary care', 'Medical monitoring', 'Emergency services', 'Grooming'],
    description: 'Medical boarding facility with on-site veterinarians for pets with special needs.',
    verified: true,
    emergencyContact: true,
    liveTracking: false,
  },
];