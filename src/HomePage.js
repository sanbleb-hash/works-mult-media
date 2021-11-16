import React from 'react';
import Tiles from './Grid';
import Header from './Header';

const HomePage = () => {
  return (
    <main className="min-h-screen w-screen bg-gray-200">
      <Header />
      <Tiles />
    </main>
  );
};

export default HomePage;
