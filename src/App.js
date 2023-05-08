import React from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import Hero from './components/Hero.js';
import HeadLineCards from './components/HeadLineCards.js';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Hero />
     <HeadLineCards />
    </div>
  );
}

export default App;
