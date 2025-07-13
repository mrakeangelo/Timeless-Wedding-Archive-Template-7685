import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import OurStory from './components/OurStory';
import WeddingDetails from './components/WeddingDetails';
import Gallery from './components/Gallery';
import RSVP from './components/RSVP';
import Guestbook from './components/Guestbook';
import Registry from './components/Registry';
import Footer from './components/Footer';
import './index.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen transition-all duration-700 ${isDarkMode ? 'dark' : ''}`}>
      <div className="bg-gradient-to-b from-amber-50 via-stone-50 to-amber-100 dark:from-stone-900 dark:via-stone-800 dark:to-stone-900 min-h-screen">
        <Router>
          <Navigation isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <OurStory />
                <WeddingDetails />
                <Gallery />
                <RSVP />
                <Guestbook />
                <Registry />
              </>
            } />
          </Routes>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;