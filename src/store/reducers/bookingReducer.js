const initialState = {
  bookings: [], // Initial state is an empty array of bookings
};

const bookingReducer = (state = initialState, action) => {

  console.log("action", action)
  switch (action.type) {
    case 'ADD_BOOKING':
      return {
        ...state,
        bookings: [...state.bookings, action.payload], // Add the new booking to the existing bookings array
      };
    default:
      return state;
  }
};

export default bookingReducer;