import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Star, MapPin, Shield, Eye, Heart, Award } from 'lucide-react-native';
import { BoardingProvider } from '@/types';

interface BoardingCardProps {
  provider: BoardingProvider;
  onPress?: () => void;
  onBook?: () => void;
}

export default function BoardingCard({ provider, onPress, onBook }: BoardingCardProps) {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'sitter': return '#FFEAA7';
      case 'boarding_house': return '#74B9FF';
      case 'clinic': return '#FD79A8';
      default: return '#96CEB4';
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
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.header}>
        <Image source={{ uri: provider.imageUrl }} style={styles.image} />
        <TouchableOpacity style={styles.favoriteButton}>
          <Heart size={14} color="#FF6B6B" strokeWidth={2} />
        </TouchableOpacity>
        <View style={styles.badges}>
          {provider.verified && (
            <View style={styles.badge}>
              <Shield size={10} color="#4CAF50" strokeWidth={2} />
              <Text style={styles.badgeText}>Verified</Text>
            </View>
          )}
          {provider.liveTracking && (
            <View style={styles.badge}>
              <Eye size={10} color="#2196F3" strokeWidth={2} />
              <Text style={styles.badgeText}>Live Tracking</Text>
            </View>
          )}
        </View>
      </View>
      
      <View style={styles.content}>
        <View style={styles.titleRow}>
          <Text style={styles.name}>{provider.name}</Text>
          <View style={[styles.typeTag, { backgroundColor: getTypeColor(provider.type) }]}>
            <Text style={styles.typeText}>{getTypeLabel(provider.type)}</Text>
          </View>
        </View>
        
        <View style={styles.locationContainer}>
          <MapPin size={12} color="#94A3B8" strokeWidth={2} />
          <Text style={styles.location}>{provider.location}</Text>
        </View>
        
        <View style={styles.ratingRow}>
          <View style={styles.ratingContainer}>
            <Star size={12} color="#FFD700" fill="#FFD700" strokeWidth={1.5} />
            <Text style={styles.rating}>{provider.rating}</Text>
            <Text style={styles.reviewCount}>({provider.reviewCount})</Text>
          </View>
          {provider.rating >= 4.5 && (
            <View style={styles.topRatedBadge}>
              <Award size={10} color="#FF9800" strokeWidth={2} />
              <Text style={styles.topRatedText}>Top Rated</Text>
            </View>
          )}
        </View>
        
        <Text style={styles.description} numberOfLines={2}>
          {provider.description}
        </Text>
        
        <View style={styles.servicesContainer}>
          {provider.services.slice(0, 3).map((service, index) => (
            <View key={index} style={styles.serviceTag}>
              <Text style={styles.serviceText}>{service}</Text>
            </View>
          ))}
          {provider.services.length > 3 && (
            <View style={styles.moreServicesTag}>
              <Text style={styles.moreServices}>+{provider.services.length - 3} more</Text>
            </View>
          )}
        </View>
        
        <View style={styles.footer}>
          <View style={styles.priceContainer}>
            <Text style={styles.priceLabel}>Starting from</Text>
            <View style={styles.priceRow}>
              <Text style={styles.price}>${provider.pricePerDay}</Text>
              <Text style={styles.priceUnit}>/day</Text>
            </View>
          </View>
          
          <TouchableOpacity style={styles.bookButton} onPress={onBook}>
            <Text style={styles.bookButtonText}>Book Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    margin: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  header: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 180,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    resizeMode: 'cover',
  },
  favoriteButton: {
    position: 'absolute',
    top: 12,
    left: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: 8,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badges: {
    position: 'absolute',
    top: 12,
    right: 12,
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  badge: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginBottom: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  badgeText: {
    fontSize: 10,
    color: '#2D3748',
    fontWeight: '700',
    marginLeft: 4,
  },
  content: {
    padding: 20,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  name: {
    fontSize: 18,
    color: '#2D3748',
    fontWeight: '700',
    flex: 1,
    marginRight: 12,
  },
  typeTag: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  typeText: {
    fontSize: 10,
    color: '#2D3748',
    fontWeight: '700',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  location: {
    fontSize: 13,
    color: '#94A3B8',
    fontWeight: '400',
    marginLeft: 4,
  },
  ratingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
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
  topRatedBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF3E0',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  topRatedText: {
    fontSize: 10,
    color: '#FF9800',
    fontWeight: '700',
    marginLeft: 4,
  },
  description: {
    fontSize: 14,
    color: '#64748B',
    fontWeight: '400',
    lineHeight: 20,
    marginBottom: 16,
  },
  servicesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  serviceTag: {
    backgroundColor: '#F1F5F9',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 16,
    marginRight: 8,
    marginBottom: 6,
  },
  serviceText: {
    fontSize: 11,
    color: '#475569',
    fontWeight: '600',
  },
  moreServicesTag: {
    backgroundColor: '#E2E8F0',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 16,
    marginBottom: 6,
  },
  moreServices: {
    fontSize: 11,
    color: '#64748B',
    fontWeight: '500',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceContainer: {
    flex: 1,
  },
  priceLabel: {
    fontSize: 12,
    color: '#94A3B8',
    fontWeight: '400',
    marginBottom: 2,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  price: {
    fontSize: 20,
    color: '#96CEB4',
    fontWeight: '700',
  },
  priceUnit: {
    fontSize: 14,
    color: '#64748B',
    fontWeight: '500',
    marginLeft: 2,
  },
  bookButton: {
    backgroundColor: '#96CEB4',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
    shadowColor: '#96CEB4',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  bookButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },
});