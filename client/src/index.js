import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import HomePage from './components/HomePage';
import LandingPage from './components/LandingPage';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <LandingPage />,
  document.getElementById('root')
);
