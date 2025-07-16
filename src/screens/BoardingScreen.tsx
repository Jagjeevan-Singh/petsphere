import React, { useState } from 'react';
import { MapPin, Filter, Star, Shield, Award, Users, Search } from 'lucide-react';
import BoardingCard from '../components/ui/BoardingCard';
import { mockBoardingProviders } from '../data/mockData';

const serviceTypes = [
  { id: 'all', name: 'All Services', icon: '🏠', color: 'bg-success' },
  { id: 'sitter', name: 'Pet Sitters', icon: '👥', color: 'bg-warning' },
  { id: 'boarding_house', name: 'Boarding Houses', icon: '🏨', color: 'bg-accent' },
  { id: 'clinic', name: 'Vet Clinics', icon: '🏥', color: 'bg-pink-500' },
];

const BoardingScreen: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('all');

  const filteredProviders = mockBoardingProviders
    .filter(provider => {
      const matchesSearch = provider.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           provider.location.toLowerCase().includes(searchQuery.toLowerCase());
      
      if (selectedType === 'all') return matchesSearch;
      return matchesSearch && provider.type === selectedType;
    })
    .sort((a, b) => b.rating - a.rating);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Header */}
      <div 
        className="relative bg-gradient-to-r from-success to-green-400 px-4 py-6"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-success bg-opacity-90"></div>
        <div className="relative z-10">
          <h2 className="text-white text-2xl font-bold mb-2">Pet Boarding & Care 🏠</h2>
          <p className="text-white text-sm opacity-90 mb-5">Trusted care when you're away</p>
          
          {/* Search Bar */}
          <div className="flex items-center bg-white bg-opacity-90 rounded-2xl px-4 py-3 shadow-lg">
            <Search size={18} className="text-gray-400 mr-3" />
            <input
              type="text"
              placeholder="Search by name or location..."
              className="flex-1 bg-transparent outline-none text-gray-700"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>
      
      {/* Service Types */}
      <div className="bg-white px-4 py-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex space-x-3 overflow-x-auto">
            {serviceTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setSelectedType(type.id)}
                className={`flex items-center px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                  selectedType === type.id
                    ? `${type.color} text-white`
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <span className="mr-2">{type.icon}</span>
                <span className="text-sm font-semibold">{type.name}</span>
              </button>
            ))}
          </div>
        </div>
        
        <div className="flex justify-between">
          <button className="flex items-center px-4 py-2 bg-gray-100 rounded-full">
            <Filter size={14} className="text-gray-600 mr-2" />
            <span className="text-sm font-semibold text-gray-600">Sort by Rating</span>
          </button>
          
          <button className="flex items-center px-4 py-2 bg-blue-50 rounded-full">
            <MapPin size={14} className="text-accent mr-2" />
            <span className="text-sm font-semibold text-accent">Map View</span>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="px-4">
        {/* Features Section */}
        <div className="bg-white rounded-2xl p-5 my-4 shadow-sm">
          <h3 className="text-lg font-bold text-gray-800 text-center mb-4">🌟 Why Choose Our Partners?</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="bg-gray-50 p-3 rounded-2xl mb-2 inline-block">
                <Shield size={20} className="text-green-500" />
              </div>
              <div className="font-bold text-sm text-gray-800">Verified & Insured</div>
              <div className="text-xs text-gray-600">100% trusted</div>
            </div>
            <div className="text-center">
              <div className="bg-gray-50 p-3 rounded-2xl mb-2 inline-block">
                <Award size={20} className="text-orange-500" />
              </div>
              <div className="font-bold text-sm text-gray-800">Top Rated</div>
              <div className="text-xs text-gray-600">4.8+ rating</div>
            </div>
            <div className="text-center">
              <div className="bg-gray-50 p-3 rounded-2xl mb-2 inline-block">
                <Users size={20} className="text-blue-500" />
              </div>
              <div className="font-bold text-sm text-gray-800">Expert Care</div>
              <div className="text-xs text-gray-600">Trained staff</div>
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-800">🏡 Available Providers</h3>
            <p className="text-sm text-gray-600">Caring homes for your pets</p>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-success">{filteredProviders.length}</div>
            <div className="text-xs text-gray-600">providers</div>
          </div>
        </div>

        {/* Providers List */}
        <div className="space-y-4 mb-6">
          {filteredProviders.map((provider) => (
            <BoardingCard
              key={provider.id}
              provider={provider}
              onPress={() => console.log('Provider pressed:', provider.name)}
              onBook={() => console.log('Book provider:', provider.name)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BoardingScreen;