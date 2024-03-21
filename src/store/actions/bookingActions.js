// actions/bookingActions.js

export const updateBookingDetails = bookingDetails => {
  return {
    type: 'UPDATE_BOOKING_DETAILS',
    payload: bookingDetails,
  };
};

export const addBooking = bookingDetails => {
  return {
    type: 'ADD_BOOKING',
    payload: bookingDetails,
  };
};
