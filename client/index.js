/* eslint-disable */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App.jsx';
import store from './store';
import styles from './styles/application.less'; 

render(
  // provider makes the redux store available to components
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('moo')
);
