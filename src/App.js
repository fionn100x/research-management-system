
import React from 'react';
import Navbar from './components/Navbar';
import WelcomeSection from './components/WelcomeSection'; 
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />  {/* Navbar stays on top */}
      <WelcomeSection />  {}
    </div>
  );
}

export default App;






