// BookingsScreen.js

import React from 'react';
import {View, Text, StyleSheet, FlatList, SafeAreaView} from 'react-native';
import {connect} from 'react-redux'; // If you need access to booking data from Redux

const MyBookingsScreen = ({bookings}) => {
  return (
    <SafeAreaView style={styles.container}>
        <View style={{padding:20, marginTop:30}}>
      <Text style={styles.heading}>My Bookings</Text>
      <FlatList
        data={bookings}
        renderItem={({item}) => (
          <View style={styles.bookingItem}>
            <Text style={styles.bookingItemText}>
              Service: {item.serviceName}
            </Text>
            <Text style={styles.bookingItemText}>Date: {item.date}</Text>
            <Text style={styles.bookingItemText}>Slot: {item.slot}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#c68a3f',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  bookingItem: {
    backgroundColor: '#f9f9f960',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  bookingItemText: {
    fontSize: 16,
  },
});

// Connect to Redux if needed to access booking data
const mapStateToProps = state => {
  return {
    bookings: state.booking.bookings, // Assuming you have a bookings array in your booking reducer
  };
};

export default connect(mapStateToProps)(MyBookingsScreen);
