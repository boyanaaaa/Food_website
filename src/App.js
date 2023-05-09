import React from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import Hero from './components/Hero.js';
import HeadLineCards from './components/HeadLineCards.js';
import Food from './components/Food.js';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Hero />
     <HeadLineCards />
     <Food />
    </div>
  );
}

export default App;
