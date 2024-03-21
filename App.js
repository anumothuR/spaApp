// App.js

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import BookingScreen from './src/screens/BookingScreen';
import RegistrationScreen from './src/screens/RegistrationScreen';
import ServicesScreen from './src/screens/ServiceScreen';
import ServiceDetailsScreen from './src/screens/ServiceDetailsScreen';
import MyBookingsScreen from './src/screens/MyBookingsScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTransparent: true,
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Home'}}
        />
        <Stack.Screen
          name="Booking"
          component={BookingScreen}
          options={{title: 'Book Appointment'}}
        />
        <Stack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{title: 'User Registration'}}
        />
        <Stack.Screen
          name="Services"
          component={ServicesScreen}
          options={{title: 'Our Services'}}
        />
        <Stack.Screen
          name="ServicesDetails"
          component={ServiceDetailsScreen}
          options={{title: 'Service'}}
        />
        <Stack.Screen
          name="MyBookings"
          component={MyBookingsScreen}
          options={{title: 'Service'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
