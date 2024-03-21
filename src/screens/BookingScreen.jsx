// BookingScreen.js

import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Button,
} from 'react-native';
import {connect} from 'react-redux';
import {addBooking} from '../store/actions/bookingActions';
import RNPickerSelect from 'react-native-picker-select';

// Dummy data for available slots (just for demonstration)
const availableSlots = [
  '10:00 AM - 11:00 AM',
  '11:00 AM - 12:00 PM',
  '12:00 PM - 01:00 PM',
  '02:00 PM - 03:00 PM',
  '03:00 PM - 04:00 PM',
];

// Dummy data for services (just for demonstration)
const services = [
  {
    id: 1,
    name: 'Massage Therapy',
    description:
      'Relax your muscles and rejuvenate your body with our professional massage therapy services.',
    imageUrl:
      'https://img.freepik.com/free-photo/attractive-african-woman-enjoying-face-massage-spa-salon_176420-13955.jpg', // Replace with actual image URLs
    duration: '60 minutes',
    price: 50,
  },
  {
    id: 2,
    name: 'Facial Treatments',
    description:
      'Enhance your skin health and achieve a radiant complexion with our personalized facial treatments.',
    imageUrl: 'https://example.com/facial.jpg', // Replace with actual image URLs
    duration: '45 minutes',
    price: 70,
  },
  {
    id: 3,
    name: 'Manicure & Pedicure',
    description:
      'Pamper yourself with our manicure and pedicure services, leaving your nails looking beautiful and healthy.',
    imageUrl: 'https://example.com/manicure.jpg', // Replace with actual image URLs
    duration: '90 minutes',
    price: 40,
  },
];

const BookingScreen = ({navigation, addBooking}) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedSlot, setSelectedSlot] = useState('');
  const [availableSlotsForDate, setAvailableSlotsForDate] = useState([]);
  const [selectedService, setSelectedService] = useState(null); // State to store selected service name

  // Function to fetch available slots for the selected date (dummy implementation)
  const fetchAvailableSlots = date => {
    // In a real application, you would fetch available slots from an API/database based on the selected date
    // For demonstration purposes, we'll use the dummy data
    setAvailableSlotsForDate(availableSlots);
  };

  // useEffect hook to fetch available slots when selected date changes
  useEffect(() => {
    if (selectedDate) {
      fetchAvailableSlots(selectedDate);
    }
  }, [selectedDate]);

  const handleSlotSelection = slot => {
    setSelectedSlot(slot);
  };

  const handleBooking = () => {
    if (!selectedService) {
      // Alert the user to select a service
      alert('Please select a service.');
      return;
    }

    // Dummy booking details, replace with actual booking data
    const newBooking = {
      serviceName: selectedService,
      date: selectedDate, // Example date
      slot: selectedSlot,
      // Add more booking details here
    };

    // Dispatch the addBooking action with the new booking details
    addBooking(newBooking);
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{padding:20}}>
        <Text style={styles.heading}>Book Appointment</Text>
        <TextInput
          style={styles.input}
          placeholder="Select Date (YYYY-MM-DD)"
          value={selectedDate}
          onChangeText={setSelectedDate}
        />
        {availableSlotsForDate.length > 0 ? (
          <View>
            <RNPickerSelect
              onValueChange={value => setSelectedService(value)}
              items={services.map(service => ({
                label: service.name,
                value: service.name,
              }))}
              placeholder={{label: 'Select a service', value: null}}
              style={pickerSelectStyles}
            />
            <Text style={styles.slotHeading}>Available Slots:</Text>
            {availableSlotsForDate.map((slot, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.slot,
                  selectedSlot === slot ? styles.selectedSlot : null,
                ]}
                onPress={() => handleSlotSelection(slot)}>
                <Text>{slot}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ) : (
          <Text>No available slots for the selected date.</Text>
        )}
        <Button
          title="Book Now"
          onPress={handleBooking}
          disabled={!selectedDate || !selectedSlot}
        />
      </View>
    </SafeAreaView>
  );
};

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
    marginBottom: 20,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
    marginBottom: 20,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#c68a3f',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 50,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 20,
    width: '100%',
  },
  slotHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  slot: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
  },
  selectedSlot: {
    backgroundColor: '#e6f7ff',
  },
});

// Connect to Redux to access booking data and dispatch actions
const mapStateToProps = state => {
  return {
    bookings: state.booking.bookings,
  };
};

const mapDispatchToProps = {
  addBooking,
};

export default connect(mapStateToProps, mapDispatchToProps)(BookingScreen);
