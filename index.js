/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './src/store/reducers';

// Create your Redux store
const store = createStore(rootReducer);

// Wrap your root component with the Provider and pass the store as a prop
const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => Root);
