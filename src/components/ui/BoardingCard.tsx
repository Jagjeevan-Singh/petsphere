import React from 'react';
import { Star, MapPin, Shield, Eye, Heart, Award } from 'lucide-react';

interface BoardingProvider {
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

interface BoardingCardProps {
  provider: BoardingProvider;
  onPress?: () => void;
  onBook?: () => void;
}

const BoardingCard: React.FC<BoardingCardProps> = ({ provider, onPress, onBook }) => {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'sitter': return 'bg-warning';
      case 'boarding_house': return 'bg-accent';
      case 'clinic': return 'bg-pink-500';
      default: return 'bg-success';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'sitter': return 'Pet Sitter';
      case 'boarding_house': return 'Boarding House';
      case 'clinic': return 'Vet Clinic';
      default: return 'Pet Care';
    }
  };

  return (
    <div 
      className="bg-white rounded-2xl shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
      onClick={onPress}
    >
      <div className="relative">
        <img 
          src={provider.imageUrl} 
          alt={provider.name}
          className="w-full h-44 object-cover"
        />
        <button className="absolute top-3 left-3 p-2 bg-white bg-opacity-90 rounded-xl">
          <Heart size={14} className="text-primary" />
        </button>
        <div className="absolute top-3 right-3 flex flex-col space-y-2">
          {provider.verified && (
            <div className="bg-white bg-opacity-95 flex items-center px-2 py-1 rounded-xl shadow-sm">
              <Shield size={10} className="text-green-500 mr-1" />
              <span className="text-xs font-bold text-gray-800">Verified</span>
            </div>
          )}
          {provider.liveTracking && (
            <div className="bg-white bg-opacity-95 flex items-center px-2 py-1 rounded-xl shadow-sm">
              <Eye size={10} className="text-blue-500 mr-1" />
              <span className="text-xs font-bold text-gray-800">Live Tracking</span>
            </div>
          )}
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg text-gray-800 flex-1 mr-3">{provider.name}</h3>
          <div className={`${getTypeColor(provider.type)} px-2 py-1 rounded-xl`}>
            <span className="text-xs font-bold text-white">{getTypeLabel(provider.type)}</span>
          </div>
        </div>
        
        <div className="flex items-center mb-2">
          <MapPin size={12} className="text-gray-400 mr-1" />
          <span className="text-sm text-gray-500">{provider.location}</span>
        </div>
        
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center">
            <Star size={12} className="text-yellow-500 mr-1" fill="currentColor" />
            <span className="text-sm font-bold text-gray-800">{provider.rating}</span>
            <span className="text-xs text-gray-500 ml-1">({provider.reviewCount})</span>
          </div>
          {provider.rating >= 4.5 && (
            <div className="flex items-center bg-orange-50 px-2 py-1 rounded-xl">
              <Award size={10} className="text-orange-500 mr-1" />
              <span className="text-xs font-bold text-orange-500">Top Rated</span>
            </div>
          )}
        </div>
        
        <p className="text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed">{provider.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-5">
          {provider.services.slice(0, 3).map((service, index) => (
            <span key={index} className="bg-gray-50 px-3 py-1 rounded-full text-xs font-semibold text-gray-700">
              {service}
            </span>
          ))}
          {provider.services.length > 3 && (
            <span className="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-600">
              +{provider.services.length - 3} more
            </span>
          )}
        </div>
        
        <div className="flex justify-between items-center">
          <div>
            <p className="text-xs text-gray-500 mb-1">Starting from</p>
            <div className="flex items-baseline">
              <span className="text-xl font-bold text-success">${provider.pricePerDay}</span>
              <span className="text-sm text-gray-600 ml-1">/day</span>
            </div>
          </div>
          
          <button 
            className="bg-success text-white px-5 py-3 rounded-xl font-bold text-sm shadow-sm"
            onClick={(e) => {
              e.stopPropagation();
              onBook?.();
            }}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default BoardingCard;