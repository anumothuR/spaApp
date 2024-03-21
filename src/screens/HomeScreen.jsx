// HomeScreen.js

import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {BlurView} from '@react-native-community/blur'; // Import BlurView for blur effect
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeScreen = ({navigation}) => {
  // return (
  //   <View style={styles.container}>
  //     <Text style={styles.heading}>Welcome to Home Spa</Text>
  //     <View style={styles.buttonContainer}>
  //       <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Booking')}>
  //         <Icon name="calendar" size={40} color="black" />
  //         <Text style={styles.buttonText}>Book Appointment</Text>
  //       </TouchableOpacity>
  //       <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Registration')}>
  //         <Icon name="user-plus" size={40} color="black" />
  //         <Text style={styles.buttonText}>Register</Text>
  //       </TouchableOpacity>
  //       <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Services')}>
  //         <Icon name="list-alt" size={40} color="black" />
  //         <Text style={styles.buttonText}>View Services</Text>
  //       </TouchableOpacity>
  //       <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MyBookings')}>
  //         <Icon name="list-alt" size={40} color="black" />
  //         <Text style={styles.buttonText}>My Bookings</Text>
  //       </TouchableOpacity>
  //     </View>
  //   </View>
  // );

  return (
    <ImageBackground
      source={{
        uri: 'https://img.freepik.com/free-photo/attractive-african-woman-enjoying-face-massage-spa-salon_176420-13955.jpg',
      }}
      style={styles.backgroundImage}>
      <BlurView
        style={styles.blurContainer}
        blurType="light"
        blurAmount={10}
        reducedTransparencyFallbackColor="white">
        <Text style={styles.welcomeText}>Welcome to</Text>
        <Text style={styles.titleText}>Spa</Text>
        <View style={styles.navigationContainer}>
          <TouchableOpacity
            style={styles.navigationButton}
            onPress={() => navigation.navigate('Booking')}>
            <Image
              source={require('../images/calender.png')}
              style={styles.icon}
            />
            <Text style={styles.navigationButtonText}>Make an Appointment</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navigationButton}
            onPress={() => navigation.navigate('Services')}>
            <Image
              source={require('../images/services.png')}
              style={styles.icon}
            />
            <Text style={styles.navigationButtonText}>View Services</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navigationButton}
            onPress={() => navigation.navigate('MyBookings')}>
            <Image
              source={require('../images/mybooking.png')}
              style={styles.icon}
            />
            <Text style={styles.navigationButtonText}>My Bookings</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.registerIconContainer}
          onPress={() => navigation.navigate('Registration')}>
          <Ionicons name="person-add-outline" size={24} color="#fff" />
        </TouchableOpacity>
      </BlurView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  blurContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 10,
  },
  titleText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  navigationContainer: {
    marginBottom: 40,
  },
  navigationButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 10,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  navigationButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  registerIconContainer: {
    position: 'absolute',
    top: 70,
    right: 20,
  },
});

export default HomeScreen;
