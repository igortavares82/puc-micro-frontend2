import React from 'react';
import ReactDOM from 'react-dom/client';
import consumer from 'post-transport/src/consumer';

import App from './App';
import './styles/style.sass';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
     <App />
  </React.StrictMode>
);
