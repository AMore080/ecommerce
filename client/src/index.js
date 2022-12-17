import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css'
import App from './App';

import { Workbox } from 'workbox-window';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Check if service workers are supported
if ('serviceWorker' in navigator) {
  // register workbox service worker
  const workboxSW = new Workbox('../../serviceWorker.js');
  workboxSW.register();
} else {
  console.error('Service workers are not supported in this browser.');
}