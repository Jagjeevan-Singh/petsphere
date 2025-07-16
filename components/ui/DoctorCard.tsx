import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Star, MapPin, Calendar, Video, Clock } from 'lucide-react-native';
import { Doctor } from '@/types';

interface DoctorCardProps {
  doctor: Doctor;
  onPress?: () => void;
  onBookAppointment?: () => void;
}

export default function DoctorCard({ doctor, onPress, onBookAppointment }: DoctorCardProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.header}>
        <View style={styles.avatarContainer}>
          <Image source={{ uri: doctor.imageUrl }} style={styles.avatar} />
          <View style={styles.onlineBadge}>
            <View style={styles.onlineIndicator} />
          </View>
        </View>
        <View style={styles.info}>
          <Text style={styles.name}>{doctor.name}</Text>
          <Text style={styles.specialty}>{doctor.specialty}</Text>
          <View style={styles.locationContainer}>
            <MapPin size={12} color="#94A3B8" strokeWidth={2} />
            <Text style={styles.location}>{doctor.location}</Text>
          </View>
          <View style={styles.ratingContainer}>
            <Star size={12} color="#FFD700" fill="#FFD700" strokeWidth={1.5} />
            <Text style={styles.rating}>{doctor.rating}</Text>
            <Text style={styles.reviewCount}>({doctor.reviewCount} reviews)</Text>
          </View>
        </View>
      </View>
      
      <View style={styles.details}>
        <View style={styles.experienceContainer}>
          <Clock size={14} color="#4ECDC4" strokeWidth={2} />
          <Text style={styles.experience}>{doctor.experience} years experience</Text>
        </View>
        
        <View style={styles.pricesContainer}>
          <View style={styles.priceItem}>
            <Text style={styles.priceLabel}>In-Clinic:</Text>
            <Text style={styles.price}>${doctor.consultationFee}</Text>
          </View>
          <View style={styles.priceItem}>
            <Video size={12} color="#45B7D1" strokeWidth={2} />
            <Text style={styles.priceLabel}>Video:</Text>
            <Text style={styles.price}>${doctor.videoConsultationFee}</Text>
          </View>
        </View>
      </View>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.videoButton}>
          <Video size={14} color="#45B7D1" strokeWidth={2} />
          <Text style={styles.videoButtonText}>Video Call</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.bookButton} onPress={onBookAppointment}>
          <Calendar size={14} color="#FFFFFF" strokeWidth={2} />
          <Text style={styles.bookButtonText}>Book Visit</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    margin: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  header: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  avatarContainer: {
    position: 'relative',
    marginRight: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 3,
    borderColor: '#E2E8F0',
  },
  onlineBadge: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  onlineIndicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#4CAF50',
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    color: '#2D3748',
    fontWeight: '700',
    marginBottom: 4,
  },
  specialty: {
    fontSize: 14,
    color: '#4ECDC4',
    fontWeight: '600',
    marginBottom: 6,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  location: {
    fontSize: 12,
    color: '#94A3B8',
    fontWeight: '400',
    marginLeft: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: 13,
    color: '#2D3748',
    fontWeight: '700',
    marginLeft: 4,
  },
  reviewCount: {
    fontSize: 12,
    color: '#94A3B8',
    fontWeight: '400',
    marginLeft: 2,
  },
  details: {
    marginBottom: 20,
  },
  experienceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  experience: {
    fontSize: 13,
    color: '#4ECDC4',
    fontWeight: '600',
    marginLeft: 6,
  },
  pricesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  priceItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8FAFC',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 12,
    flex: 0.48,
  },
  priceLabel: {
    fontSize: 12,
    color: '#64748B',
    fontWeight: '500',
    marginLeft: 4,
    marginRight: 4,
  },
  price: {
    fontSize: 13,
    color: '#2D3748',
    fontWeight: '700',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  videoButton: {
    flex: 1,
    backgroundColor: '#E3F2FD',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 6,
  },
  videoButtonText: {
    color: '#45B7D1',
    fontSize: 14,
    fontWeight: '700',
    marginLeft: 6,
  },
  bookButton: {
    flex: 1,
    backgroundColor: '#4ECDC4',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#4ECDC4',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
    marginLeft: 6,
  },
  bookButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
    marginLeft: 6,
  },
});