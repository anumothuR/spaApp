// ServiceDetailsScreen.js

import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {updateBookingDetails} from '../store/actions/bookingActions'; // Update the path as needed
import ReviewStars from '../components/ReviewStars';
import TopReviews from '../components/TopReviews';

const ServiceDetailsScreen = ({route, updateBookingDetails, navigation}) => {
  // Extracting service details from route params
  const {service} = route.params;

  const handleBookAppointment = () => {
    navigation.navigate('Booking');
  };

  return (
    <ScrollView>
    <View style={styles.container}>
      <Image source={{uri: service.imageUrl}} style={styles.serviceImage} />
      <View style={styles.serviceInfo}>
      <View style={styles.tagContainer}>
          <Text style={styles.tag}>Duration: {service.duration}</Text>
          <Text style={styles.tag}>Price: ${service.price}</Text>
        </View>
        <Text style={styles.serviceName}>{service.name}</Text>
        <Text style={styles.serviceDescription}>{service.description}</Text>
      </View>
      <TouchableOpacity
        style={styles.bookButton}
        onPress={handleBookAppointment}>
        <Text style={styles.bookButtonText}>Book Appointment</Text>
      </TouchableOpacity>

      <View style={styles.ratingContainer}>
        <Text style={styles.ratingText}>Rating:</Text>
        <ReviewStars rating={service.rating} />
      </View>
      <TopReviews reviews={service.reviews} />
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  serviceImage: {
    width: '100%',
    height: 300,
    marginBottom: 20,
  },
  serviceInfo: {
    width: '100%',
    padding:20
  },
  serviceName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  serviceDescription: {
    fontSize: 18,
    marginBottom: 10,
  },
  tagContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  tag: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
    backgroundColor: '#e6e6e6',
    borderRadius: 10,
    fontSize: 16,
  },
  bookButton: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    borderRadius: 10,
    marginTop: 20,
    margin:10,
  },
  bookButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin:20,
    marginBottom: 20,
  },
  ratingText: {
    marginRight: 10,
    fontSize: 16,
  },
});

const mapDispatchToProps = {
  updateBookingDetails,
};

export default connect(null, mapDispatchToProps)(ServiceDetailsScreen);
