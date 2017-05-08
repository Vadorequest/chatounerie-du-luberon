import React from 'react';
import ReactDOM from 'react-dom';

import App from './containers/App';

// CSS dependencies
import 'bootstrap/dist/css/bootstrap.css';
import 'react-responsive-carousel/lib/styles/carousel.css';
import 'react-toastify/dist/ReactToastify.min.css'

import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
