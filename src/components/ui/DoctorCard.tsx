import React from 'react';
import { Star, MapPin, Calendar, Video, Clock } from 'lucide-react';

interface Doctor {
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

interface DoctorCardProps {
  doctor: Doctor;
  onPress?: () => void;
  onBookAppointment?: () => void;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ doctor, onPress, onBookAppointment }) => {
  return (
    <div 
      className="bg-white rounded-2xl p-5 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
      onClick={onPress}
    >
      <div className="flex mb-4">
        <div className="relative mr-4">
          <img 
            src={doctor.imageUrl} 
            alt={doctor.name}
            className="w-16 h-16 rounded-full border-2 border-gray-200"
          />
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-lg text-gray-800 mb-1">{doctor.name}</h3>
          <p className="text-secondary font-semibold text-sm mb-2">{doctor.specialty}</p>
          <div className="flex items-center mb-2">
            <MapPin size={12} className="text-gray-400 mr-1" />
            <span className="text-xs text-gray-500">{doctor.location}</span>
          </div>
          <div className="flex items-center">
            <Star size={12} className="text-yellow-500 mr-1" fill="currentColor" />
            <span className="text-sm font-bold text-gray-800">{doctor.rating}</span>
            <span className="text-xs text-gray-500 ml-1">({doctor.reviewCount} reviews)</span>
          </div>
        </div>
      </div>
      
      <div className="mb-5">
        <div className="flex items-center mb-3">
          <Clock size={14} className="text-secondary mr-2" />
          <span className="text-sm font-semibold text-secondary">{doctor.experience} years experience</span>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-gray-50 px-3 py-2 rounded-xl flex items-center">
            <span className="text-xs text-gray-600 mr-2">In-Clinic:</span>
            <span className="text-sm font-bold text-gray-800">${doctor.consultationFee}</span>
          </div>
          <div className="bg-gray-50 px-3 py-2 rounded-xl flex items-center">
            <Video size={12} className="text-accent mr-2" />
            <span className="text-xs text-gray-600 mr-2">Video:</span>
            <span className="text-sm font-bold text-gray-800">${doctor.videoConsultationFee}</span>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        <button className="flex items-center justify-center py-3 px-4 bg-blue-50 text-accent rounded-xl font-bold text-sm">
          <Video size={14} className="mr-2" />
          Video Call
        </button>
        
        <button 
          className="flex items-center justify-center py-3 px-4 bg-secondary text-white rounded-xl font-bold text-sm shadow-sm"
          onClick={(e) => {
            e.stopPropagation();
            onBookAppointment?.();
          }}
        >
          <Calendar size={14} className="mr-2" />
          Book Visit
        </button>
      </div>
    </div>
  );
};

export default DoctorCard;