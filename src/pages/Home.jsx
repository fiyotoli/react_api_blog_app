// src/pages/Home.js
import React from 'react';
import MealList from '../components/MealList';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <div>
      <Hero/>
      <MealList />
    </div>
  );
};

export default Home;
