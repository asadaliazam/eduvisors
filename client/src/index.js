import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './rod.css';
import App from './components/App';
import HomePage from './components/HomePage';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <HomePage />,
  document.getElementById('root')
);
