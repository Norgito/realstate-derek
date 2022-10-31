import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// import router
import { BrowserRouter as Router } from 'react-router-dom';
// import firebase
import './firebase/config'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
     <React.StrictMode>
       <App />
     </React.StrictMode>
  </Router>
);
