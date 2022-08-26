import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Contact from './Contact';
import About from './About';
import HomePage from './HomePage';
import { Featured } from './Featured';
import FeaturedDetails from './components/featuredDetails';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/*" element={<HomePage />} />

        <Route path="featured" element={<Featured />}>
          <Route path=":name" element={<FeaturedDetails />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
