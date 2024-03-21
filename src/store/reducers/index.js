// reducers/index.js

import {combineReducers} from 'redux';
import bookingReducer from './bookingReducer'; // Import your booking reducer
// Import other reducers if you have them

// Combine all reducers into a single root reducer
const rootReducer = combineReducers({
  booking: bookingReducer,
  // Add other reducers here
});

export default rootReducer;
