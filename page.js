// app/HomePage.jsx
import React from 'react';
import Navbar from './components/navbar' // Adjust the path based on your structure
import Home from './components/Home';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Home />
    </div>
  );
};

export default HomePage; // Ensure this is exported as default
