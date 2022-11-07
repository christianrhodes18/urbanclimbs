import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import HeroContentLeft from './components/HeroSection'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <HeroContentLeft />
  </React.StrictMode>
);
