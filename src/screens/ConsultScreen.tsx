import React, { useState } from 'react';
import { Calendar, Video, Star, Heart, Clock, Search } from 'lucide-react';
import DoctorCard from '../components/ui/DoctorCard';
import { mockDoctors } from '../data/mockData';

const specialties = [
  { id: 'all', name: 'All Doctors', icon: '👩‍⚕️', color: 'bg-secondary' },
  { id: 'small_animal', name: 'Small Animals', icon: '🐕', color: 'bg-accent' },
  { id: 'exotic', name: 'Exotic Pets', icon: '🦜', color: 'bg-success' },
  { id: 'emergency', name: 'Emergency', icon: '🚨', color: 'bg-primary' },
];

const ConsultScreen: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');

  const filteredDoctors = mockDoctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (selectedSpecialty === 'all') return matchesSearch;
    
    const matchesSpecialty = doctor.specialty.toLowerCase().includes(
      selectedSpecialty.replace('_', ' ')
    );
    
    return matchesSearch && matchesSpecialty;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Header */}
      <div 
        className="relative bg-gradient-to-r from-secondary to-teal-400 px-4 py-6"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-secondary bg-opacity-90"></div>
        <div className="relative z-10">
          <h2 className="text-white text-2xl font-bold mb-2">Find Your Pet's Doctor 🩺</h2>
          <p className="text-white text-sm opacity-90 mb-5">Expert veterinary care at your fingertips</p>
          
          {/* Search Bar */}
          <div className="flex items-center bg-white bg-opacity-90 rounded-2xl px-4 py-3 shadow-lg">
            <Search size={18} className="text-gray-400 mr-3" />
            <input
              type="text"
              placeholder="Search by doctor name or specialty..."
              className="flex-1 bg-transparent outline-none text-gray-700"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>
      
      {/* Specialties */}
      <div className="bg-white px-4 py-4">
        <div className="flex space-x-3 overflow-x-auto">
          {specialties.map((specialty) => (
            <button
              key={specialty.id}
              onClick={() => setSelectedSpecialty(specialty.id)}
              className={`flex items-center px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                selectedSpecialty === specialty.id
                  ? `${specialty.color} text-white`
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <span className="mr-2">{specialty.icon}</span>
              <span className="text-sm font-semibold">{specialty.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="px-4">
        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4 my-4">
          <div className="bg-blue-50 rounded-2xl p-5 text-center relative">
            <Video size={24} className="text-blue-600 mx-auto mb-3" />
            <h3 className="font-bold text-gray-800 mb-1">Video Call</h3>
            <p className="text-sm text-gray-600 mb-2">Connect instantly</p>
            <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">Available Now</span>
          </div>
          
          <div className="bg-green-50 rounded-2xl p-5 text-center relative">
            <Calendar size={24} className="text-green-600 mx-auto mb-3" />
            <h3 className="font-bold text-gray-800 mb-1">Book Visit</h3>
            <p className="text-sm text-gray-600 mb-2">Schedule in-clinic</p>
            <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">Same Day</span>
          </div>
        </div>

        {/* Emergency Banner */}
        <div className="bg-orange-50 border-2 border-orange-200 rounded-2xl p-5 mb-4 flex items-center">
          <div className="text-3xl mr-4">🚨</div>
          <div className="flex-1">
            <h3 className="font-bold text-orange-800 text-lg">Pet Emergency?</h3>
            <p className="text-orange-700 text-sm">Get immediate help 24/7</p>
          </div>
          <button className="bg-red-500 text-white px-5 py-2 rounded-full font-bold">
            Call Now
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-xl p-4 text-center shadow-sm">
            <Star size={20} className="text-yellow-500 mx-auto mb-2" fill="currentColor" />
            <div className="font-bold text-lg text-gray-800">4.9</div>
            <div className="text-xs text-gray-600">Average Rating</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm">
            <Heart size={20} className="text-primary mx-auto mb-2" />
            <div className="font-bold text-lg text-gray-800">10K+</div>
            <div className="text-xs text-gray-600">Happy Pets</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm">
            <Clock size={20} className="text-secondary mx-auto mb-2" />
            <div className="font-bold text-lg text-gray-800">24/7</div>
            <div className="text-xs text-gray-600">Support</div>
          </div>
        </div>

        {/* Section Header */}
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-800">🩺 Available Veterinarians</h3>
            <p className="text-sm text-gray-600">Certified and experienced doctors</p>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-secondary">{filteredDoctors.length}</div>
            <div className="text-xs text-gray-600">doctors</div>
          </div>
        </div>

        {/* Doctors List */}
        <div className="space-y-4 mb-6">
          {filteredDoctors.map((doctor) => (
            <DoctorCard
              key={doctor.id}
              doctor={doctor}
              onPress={() => console.log('Doctor pressed:', doctor.name)}
              onBookAppointment={() => console.log('Book appointment with:', doctor.name)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConsultScreen;