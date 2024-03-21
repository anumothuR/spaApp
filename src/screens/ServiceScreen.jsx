// ServicesScreen.js

import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView
} from 'react-native';

// Dummy data for services (just for demonstration)
//
const services = [
  {
    id: 1,
    name: 'Swedish Massage',
    description:
      'A relaxing massage technique that promotes relaxation and improves circulation.',
    imageUrl:
      'https://img.freepik.com/free-photo/attractive-african-woman-enjoying-face-massage-spa-salon_176420-13955.jpg',
    rating: 4.5,
    reviews: [
      'Excellent service, very relaxing!',
      'Highly recommended! Will definitely come back.',
      'The best massage I have ever had!',
    ],
    duration: '60 minutes',
    price: 50,
  },
  {
    id: 2,
    name: 'Deep Tissue Massage',
    description:
      'A massage technique focused on realigning deeper layers of muscles and connective tissues.',
    rating: 4.2,
    imageUrl:
      'https://img.freepik.com/free-photo/attractive-african-woman-enjoying-face-massage-spa-salon_176420-13955.jpg',
    reviews: [
      'Great for relieving muscle tension!',
      'Very effective, but can be intense.',
      'Helped me with my chronic pain issues.',
    ],
    duration: '45 minutes',
    price: 70,
  },
  {
    id: 3,
    name: 'Hot Stone Massage',
    description:
      'A soothing massage technique using heated stones to relax muscles and relieve tension.',
    imageUrl:
      'https://img.freepik.com/free-photo/attractive-african-woman-enjoying-face-massage-spa-salon_176420-13955.jpg',
    rating: 4.7,
    reviews: [
      'Absolutely loved it! So relaxing!',
      'The heat from the stones is incredibly therapeutic.',
      'Best way to unwind after a long day.',
    ],
    duration: '90 minutes',
    price: 40,
  },
];

const ServicesScreen = ({navigation}) => {
  const navigateToServiceDetails = service => {
    navigation.navigate('ServicesDetails', {service});
  };

  return (
    <SafeAreaView style={{    backgroundColor: '#c68a3f'}}>
    <ScrollView contentContainerStyle={styles.container}>
        <View style={{flex:1,    backgroundColor: '#c68a3f',}}>
      <Text style={styles.heading}>Our Services</Text>
      {services.map(service => (
        <TouchableOpacity
          key={service.id}
          style={styles.serviceContainer}
          onPress={() => navigateToServiceDetails(service)}>
          <Image source={{uri: service.imageUrl}} style={styles.serviceImage} />
          <View style={styles.serviceInfo}>
            <Text style={styles.serviceName}>{service.name}</Text>
            <Text style={styles.serviceDescription}>{service.description}</Text>
          </View>
        </TouchableOpacity>
      ))}
      </View>
    </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: '#c68a3f',
    paddingTop: 20,
    marginTop:20
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  serviceContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    overflow: 'hidden',
    width: '100%',
  },
  serviceImage: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  serviceInfo: {
    flex: 1,
    justifyContent: 'center',
    paddingVertical: 10,
  },
  serviceName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  serviceDescription: {
    fontSize: 16,
  },
});

export default ServicesScreen;
